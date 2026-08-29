/**
 * Post-fix common Vue-to-Svelte conversion issues.
 * Run: node scripts/fix-svelte-components.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const COMPONENTS = path.join(ROOT, 'apps/svelte/src/components');

function fixContent(content, filePath) {
  let c = content;

  // attrs -> rest for spread
  c = c.replace(/\{\.\.\.attrs\}/g, '{...rest}');

  // $emit patterns
  c = c.replace(/onclick=\{\$emit\('click',\s*\$event\)\}/g, 'onclick={(e) => onclick?.(e)}');
  c = c.replace(/\$emit\('click',\s*\$event\)/g, 'onclick?.($event)');
  c = c.replace(/\$emit\('keydown',\s*\$event\)/g, 'onkeydown?.($event)');

  // $slots
  c = c.replace(/\$slots\.(\w+)/g, '$1');
  c = c.replace(/\{#if \$slots\.(\w+)\}/g, '{#if $1}');

  // Remove vue template wrappers for slots
  c = c.replace(/<template\s+#icon-before\s*>([\s\S]*?)<\/template>/g, '{@render iconBefore?.()}');
  c = c.replace(/<template\s+#icon-after\s*>([\s\S]*?)<\/template>/g, '{@render iconAfter?.()}');
  c = c.replace(/<template\s*>([\s\S]*?)<\/template>/g, '$1');
  c = c.replace(/<template\s+/g, '<');

  // props.for when for is in destructuring - special case FormField
  if (filePath.includes('FormField')) {
    c = c.replace(/props\.for/g, 'htmlFor');
  }

  // Table columns - ensure columns in props
  if (filePath.includes('Table.svelte') && !c.includes('columns')) {
    c = c.replace(/let \{([^}]+)\} = \$props\(\)/, (m, inner) => {
      if (!inner.includes('columns')) return `let { columns = [], ${inner} } = $props()`;
      return m;
    });
    c = c.replace(/props\.columns/g, 'columns');
  }

  // Carousel props references
  if (filePath.includes('Carousel.svelte')) {
    c = c.replace(/props\.coverflowEffect/g, 'coverflowEffect');
    c = c.replace(/props\.thumbs/g, 'thumbs');
  }

  return c;
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (entry.name.endsWith('.svelte')) {
      const orig = fs.readFileSync(p, 'utf8');
      const fixed = fixContent(orig, p);
      if (fixed !== orig) {
        fs.writeFileSync(p, fixed);
        console.log('Fixed:', path.relative(ROOT, p));
      }
    }
  }
}

walk(COMPONENTS);
console.log('Done.');
