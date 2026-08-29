/**
 * Port React components from apps/react to Svelte 5 SFC in apps/svelte.
 * Run: node scripts/react-to-svelte.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const REACT_SRC = path.join(ROOT, 'apps/react/src/components');
const SVELTE_SRC = path.join(ROOT, 'apps/svelte/src/components');

function extractComponentBody(content) {
  // Remove default export line at end
  let body = content.replace(/export\s+default\s+\w+\s*;?\s*$/m, '');
  return body.trim();
}

function convertJsxToSvelteTemplate(jsx, componentName) {
  let t = jsx;

  // Fragment
  t = t.replace(/<>/g, '');
  t = t.replace(/<\/>/g, '');

  // className -> class
  t = t.replace(/className=/g, 'class=');

  // Event handlers
  t = t.replace(/onClick=/g, 'onclick=');
  t = t.replace(/onKeyDown=/g, 'onkeydown=');
  t = t.replace(/onInput=/g, 'oninput=');
  t = t.replace(/onChange=/g, 'onchange=');
  t = t.replace(/onPaste=/g, 'onpaste=');
  t = t.replace(/onScroll=/g, 'onscroll=');
  t = t.replace(/onFocus=/g, 'onfocus=');
  t = t.replace(/onBlur=/g, 'onblur=');
  t = t.replace(/onMouseEnter=/g, 'onmouseenter=');
  t = t.replace(/onMouseLeave=/g, 'onmouseleave=');

  // Boolean JSX attributes
  t = t.replace(/(\w+)=\{([^}]+)\}/g, '$1={$2}');

  // Self-closing
  // {expr ? <tag ... /> : null} -> {#if expr}<tag ... />{/if}
  t = t.replace(/\{(\w+)\s*\?\s*(<[^;]+?)\s*:\s*null\}/g, '{#if $1}$2{/if}');
  t = t.replace(/\{(\w+)\s*\?\s*(<[^;]+?)\s*:\s*undefined\}/g, '{#if $1}$2{/if}');

  // {children} -> {@render children?.()}
  t = t.replace(/\{children\s*\?\?\s*(\w+)\}/g, '{@render children?.() ?? $1}');
  t = t.replace(/\{children\}/g, '{@render children?.()}');
  t = t.replace(/\{children\s*\?\?\s*label\}/g, '{@render children?.() ?? label}');

  // {iconBefore} etc
  t = t.replace(/\{iconBefore\}/g, '{@render iconBefore?.()}');
  t = t.replace(/\{iconAfter\}/g, '{@render iconAfter?.()}');
  t = t.replace(/\{prefix\}/g, '{@render prefix?.()}');
  t = t.replace(/\{suffix\}/g, '{@render suffix?.()}');

  // strokeWidth etc
  t = t.replace(/strokeWidth=/g, 'stroke-width=');
  t = t.replace(/strokeLinecap=/g, 'stroke-linecap=');
  t = t.replace(/strokeLinejoin=/g, 'stroke-linejoin=');
  t = t.replace(/tabIndex=/g, 'tabindex=');
  t = t.replace(/readOnly=/g, 'readonly=');
  t = t.replace(/autoFocus=/g, 'autofocus=');
  t = t.replace(/htmlFor=/g, 'for=');

  return t;
}

function convertReactFunctionToSvelteScript(content, componentName) {
  // Extract function component
  const fnMatch = content.match(
    /export\s+function\s+(\w+)\s*\(\s*\{([\s\S]*?)\}\s*\)\s*\{/,
  );
  if (!fnMatch) return null;

  const name = fnMatch[1];
  const paramsBlock = fnMatch[2];

  // Parse destructured params
  const props = [];
  const lines = paramsBlock.split('\n');
  for (const line of lines) {
    const trimmed = line.trim().replace(/,$/, '');
    if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('...')) continue;
    // as: Root = 'div' -> as = 'div' (rename handled in body)
    props.push(trimmed);
  }

  // Extract function body (between first { after params and matching return)
  const startIdx = content.indexOf(fnMatch[0]) + fnMatch[0].length;
  let braceCount = 1;
  let endIdx = startIdx;
  for (let i = startIdx; i < content.length; i++) {
    if (content[i] === '{') braceCount++;
    if (content[i] === '}') braceCount--;
    if (braceCount === 0) {
      endIdx = i;
      break;
    }
  }
  let body = content.slice(startIdx, endIdx).trim();

  // Find return statement
  const returnMatch = body.match(/return\s*\(([\s\S]*)\)\s*;?\s*$/);
  const templateJsx = returnMatch ? returnMatch[1].trim() : '';

  // Script body before return
  let scriptBody = returnMatch ? body.slice(0, body.indexOf('return')).trim() : body;

  // Convert const to let, add $derived where needed
  scriptBody = scriptBody.replace(/const\s+(\w+)\s*=\s*\[/g, 'let $1 = $derived([');
  scriptBody = scriptBody.replace(/const\s+(\w+)\s*=\s*([^;{]+);/g, (m, varName, expr) => {
    if (expr.includes('=>') || expr.includes('function')) return m;
    if (expr.trim().startsWith('[') || expr.trim().startsWith('new ')) {
      return `let ${varName} = $derived(${expr.trim()});`;
    }
    return `let ${varName} = ${expr.trim()};`;
  });

  // className -> class in script
  scriptBody = scriptBody.replace(/className/g, 'class');

  // onClick -> onclick in script
  scriptBody = scriptBody.replace(/onClick/g, 'onclick');
  scriptBody = scriptBody.replace(/onKeyDown/g, 'onkeydown');

  // Remove .join(' ') patterns - Svelte accepts arrays for class
  scriptBody = scriptBody.replace(/\]\s*\.filter\(Boolean\)\s*\.join\(' '\)/g, '].filter(Boolean)');

  // Build props destructuring for $props()
  const propNames = props.map((p) => {
    const asMatch = p.match(/(\w+)\s*:\s*(\w+)/);
    if (asMatch) return `${asMatch[1]}: ${asMatch[2]} = 'div'`;
    return p;
  });

  const propsDestruct = `let {\n  ${propNames.join(',\n  ')},\n  class: className = '',\n  ...rest\n} = $props();`;

  const script = `${propsDestruct}\n\n${scriptBody}`;
  const template = convertJsxToSvelteTemplate(templateJsx, name);

  return { script, template, name };
}

function convertFile(reactPath, sveltePath) {
  const content = fs.readFileSync(reactPath, 'utf8');
  const componentName = path.basename(reactPath, '.jsx');

  // Skip test files
  if (componentName.includes('.test') || componentName.includes('.spec')) return;

  const headerComment = content.match(/^(\/\*\*[\s\S]*?\*\/)/)?.[1] ?? '';
  const htmlComment = headerComment
    ? `<!--\n${headerComment.replace(/^\/\*\*|\*\/$/g, '').replace(/^\s*\*\s?/gm, '').trim()}\n-->\n`
    : '';

  const converted = convertReactFunctionToSvelteScript(content, componentName);
  if (!converted) {
    console.warn('Skip (no function component):', reactPath);
    return;
  }

  const svelteContent = `${htmlComment}<script>\n${converted.script}\n</script>\n\n${converted.template}\n`;

  fs.mkdirSync(path.dirname(sveltePath), { recursive: true });
  fs.writeFileSync(sveltePath, svelteContent);
  console.log('Converted:', path.relative(ROOT, sveltePath));
}

function copyIndexJs(srcPath, destPath) {
  let content = fs.readFileSync(srcPath, 'utf8');
  content = content.replace(/\.jsx/g, '.svelte');
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, content);
}

function walk(srcDir, destDir) {
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      walk(srcPath, destPath);
    } else if (entry.name.endsWith('.jsx') && !entry.name.includes('.test') && !entry.name.includes('.spec')) {
      convertFile(srcPath, destPath.replace(/\.jsx$/, '.svelte'));
    } else if (entry.name === 'index.js') {
      copyIndexJs(srcPath, destPath);
    }
  }
}

walk(REACT_SRC, SVELTE_SRC);
console.log('Done.');
