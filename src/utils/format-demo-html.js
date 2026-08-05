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

function getTagBalance(line) {
  const tags = line.match(/<\/?[a-z][\w:-]*\b[^>]*>/gi) ?? [];
  let openTags = 0;
  let closeTags = 0;

  tags.forEach((tagSource) => {
    const tagMatch = tagSource.match(/^<\/?([a-z][\w:-]*)/i);
    const tag = tagMatch?.[1]?.toLowerCase();

    if (tagSource.startsWith('</')) {
      closeTags += 1;
      return;
    }

    if (/\/\s*>$/.test(tagSource) || VOID_TAGS.has(tag)) return;
    openTags += 1;
  });

  const leadingCloseTags = line.match(/^(?:<\/[a-z][\w:-]*\s*>\s*)+/i)?.[0]
    .match(/<\//g)?.length ?? 0;

  return { openTags, closeTags, leadingCloseTags };
}

export function prettyPrintHtml(html) {
  const lines = expandHtmlLines(html).split('\n');
  let indent = 0;
  let pendingTag = null;
  const output = [];

  lines.forEach((rawLine) => {
    const line = rawLine.trim();
    if (!line) return;

    if (line.startsWith('<!--')) {
      output.push('  '.repeat(indent) + line);
      return;
    }

    if (pendingTag) {
      const closesTag = line.includes('>');
      const isClosingDelimiter = /^\/?>/.test(line);
      const lineIndent = isClosingDelimiter ? indent : indent + 1;

      output.push('  '.repeat(lineIndent) + line);
      pendingTag.source += ` ${line}`;

      if (closesTag) {
        const isSelfClosing = /\/\s*>/.test(pendingTag.source);
        if (!isSelfClosing && !VOID_TAGS.has(pendingTag.name)) indent += 1;
        pendingTag = null;
      }
      return;
    }

    const multilineTagMatch = line.match(/^<([a-z][\w:-]*)\b/i);
    if (multilineTagMatch && !line.includes('>')) {
      output.push('  '.repeat(indent) + line);
      pendingTag = {
        name: multilineTagMatch[1].toLowerCase(),
        source: line,
      };
      return;
    }

    const { openTags, closeTags, leadingCloseTags } = getTagBalance(line);
    const lineIndent = Math.max(0, indent - leadingCloseTags);

    output.push('  '.repeat(lineIndent) + line);
    indent = Math.max(0, indent + openTags - closeTags);
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
