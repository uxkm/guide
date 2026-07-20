const VOID_TAGS = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]);

function protectHtmlComments(html) {
  const comments = [];

  return {
    html: html.replace(/<!--[\s\S]*?-->/g, (match) => {
      const id = comments.length;
      comments.push(match);
      return `__HTML_COMMENT_${id}__`;
    }),
    restore(value) {
      return value.replace(/__HTML_COMMENT_(\d+)__/g, (_, id) => comments[Number(id)]);
    },
  };
}

function expandHtmlLines(html) {
  const protectedComments = protectHtmlComments(html.replace(/\r\n/g, '\n'));

  return protectedComments.restore(protectedComments.html.replace(/>\s*</g, '>\n<').trim());
}

function countHtmlTags(line, pattern) {
  const matches = line.match(pattern);
  return matches ? matches.length : 0;
}

export function prettyPrintHtml(html) {
  const lines = expandHtmlLines(html).split('\n');
  let indent = 0;
  const output = [];

  lines.forEach((rawLine) => {
    const line = rawLine.trim();
    if (!line) return;

    if (line.startsWith('<!--')) {
      output.push('  '.repeat(indent) + line);
      return;
    }

    const openTags = countHtmlTags(line, /<[a-z][\w-]*\b[^>]*>/gi);
    const closeTags = countHtmlTags(line, /<\/[a-z][\w-]*\s*>/gi);
    const isClosingOnly = line.startsWith('</') && openTags === 0;
    const tagMatch = line.match(/^<\/?([a-z][\w-]*)/i);
    const tag = tagMatch ? tagMatch[1].toLowerCase() : '';
    const isVoid = VOID_TAGS.has(tag) || /\/>$/.test(line);
    const isSelfContained = openTags > 0 && openTags === closeTags;

    if (isClosingOnly) {
      indent = Math.max(0, indent - 1);
    }

    output.push('  '.repeat(indent) + line);

    if (!isClosingOnly && !isVoid && !isSelfContained && openTags > closeTags) {
      indent += openTags - closeTags;
    }
  });

  return output.join('\n');
}

function stripVueArtifacts(html) {
  return html
    .replace(/\sdata-v-[a-f0-9]+=""/g, '')
    .replace(/<!--v-if-->|<!--\s*-->/g, '')
    .replace(/<!---->/g, '');
}

export function formatDemoHtml(html) {
  return prettyPrintHtml(stripVueArtifacts(html).trim());
}
