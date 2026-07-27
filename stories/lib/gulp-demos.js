/**
 * gulp src/components HTML에서 .demo_section-preview 블록을 추출한다.
 * (브라우저·Vite 번들 가능 — Node fs 없음)
 */

/**
 * @param {string} html
 * @param {string} classToken e.g. 'demo_section-preview'
 */
function findElementBounds(html, classToken) {
  const re = new RegExp(
    '<div\\s+class="([^"]*\\b' + classToken + '(?!-)[^"]*)"[^>]*>',
    'i',
  );
  const match = re.exec(html);

  if (!match) return null;

  const start = match.index + match[0].length;
  let depth = 1;
  let i = start;

  while (i < html.length && depth > 0) {
    const nextOpen = html.indexOf('<div', i);
    const nextClose = html.indexOf('</div>', i);

    if (nextClose === -1) break;

    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth += 1;
      i = nextOpen + 4;
      continue;
    }

    depth -= 1;

    if (depth === 0) {
      return {
        start,
        inner: html.slice(start, nextClose),
        end: nextClose + 6,
      };
    }

    i = nextClose + 6;
  }

  return null;
}

/**
 * @param {string} html
 * @returns {{ heading: string, description: string, previewHtml: string }[]}
 */
export function extractDemoSections(html) {
  const sections = [];
  const sectionRe =
    /<section\s+[^>]*\bclass="[^"]*\bdemo_section\b[^"]*"[^>]*>([\s\S]*?)<\/section>/gi;
  let match;

  while ((match = sectionRe.exec(html)) !== null) {
    const inner = match[1];
    const headingMatch = inner.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
    const leadMatch = inner.match(
      /<div class="demo_section-header">[\s\S]*?<p>([\s\S]*?)<\/p>/i,
    );
    const preview = findElementBounds(inner, 'demo_section-preview');

    if (!preview) continue;

    sections.push({
      heading: headingMatch ? headingMatch[1].replace(/<[^>]+>/g, '').trim() : '',
      description: leadMatch ? leadMatch[1].replace(/<[^>]+>/g, '').trim() : '',
      previewHtml: preview.inner.trim(),
    });
  }

  return sections;
}

/**
 * @param {string} html 컴포넌트 HTML (?raw import)
 * @param {number} [index]
 */
export function getDemo(html, index = 0) {
  const sections = extractDemoSections(html);
  const section = sections[index];
  if (!section) {
    throw new Error(`Demo not found at index ${index}`);
  }
  return section;
}

/**
 * @param {string} html
 */
export function renderHtml(html) {
  const el = document.createElement('div');
  el.className = 'sb-demo-layout';
  el.innerHTML = html;
  return el;
}

/**
 * docs source — gulp HTML이 Show code에 표시됨
 * @param {string} code
 */
export function gulpSource(code) {
  return {
    docs: {
      source: {
        code,
        language: 'html',
        type: 'code',
      },
    },
  };
}
