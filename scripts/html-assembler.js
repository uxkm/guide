const fs = require('fs');
const path = require('path');

const LAYOUTS_DIR = path.join(__dirname, '../src/_layouts');
const SRC_DIR = path.join(__dirname, '../src');

const DEFAULT_ACTIVE_NAV = {
  'index.html': 'intro',
};

function readLayout(name) {
  return fs.readFileSync(path.join(LAYOUTS_DIR, name), 'utf8');
}

function parseMeta(content) {
  const match = content.match(/<!--\s*@meta\s*([\s\S]*?)\s*-->/);

  if (!match) {
    return { meta: {}, body: content.trim() };
  }

  const meta = {};

  match[1].split('\n').forEach(function (line) {
    const parsed = line.match(/^\s*([\w-]+)\s*:\s*(.+?)\s*$/);
    if (parsed) {
      meta[parsed[1]] = parsed[2];
    }
  });

  const body = content.replace(match[0], '').trim();
  return { meta, body };
}

function getBasePath(relativePath) {
  const depth = relativePath.split('/').length - 1;
  if (depth <= 0) return '.';
  return Array(depth).fill('..').join('/');
}

function getDefaultActiveNav(relativePath) {
  const fileName = path.basename(relativePath);

  if (DEFAULT_ACTIVE_NAV[fileName]) {
    return DEFAULT_ACTIVE_NAV[fileName];
  }

  return fileName.replace(/\.html$/, '');
}

function titleCaseFromSlug(slug) {
  return slug
    .split('-')
    .map(function (part) {
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(' ');
}

function resolvePageMeta(relativePath, meta, body) {
  const activeNav = meta.activeNav || getDefaultActiveNav(relativePath);
  const pageTitle = meta.pageTitle || titleCaseFromSlug(activeNav);
  const base = meta.base || getBasePath(relativePath);
  const title =
    meta.title ||
    (activeNav === 'intro'
      ? 'HTML Components | UXKM Guide'
      : pageTitle + ' | HTML Components');

  return { activeNav, pageTitle, base, title, body };
}

function renderTemplate(template, vars) {
  return Object.keys(vars).reduce(function (result, key) {
    return result.replace(new RegExp('\\{\\{' + key + '\\}\\}', 'g'), vars[key]);
  }, template);
}

const LEGACY_INDENT = '        ';
const HEADER_INDENT = '      ';
const CONTENT_INDENT = '        ';

function dedentLegacyBody(body) {
  return body
    .split('\n')
    .map(function (line) {
      if (line.startsWith(LEGACY_INDENT)) {
        return line.slice(LEGACY_INDENT.length);
      }
      return line;
    })
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trimEnd();
}

function dedentCodeContent(content) {
  const lines = content.replace(/\r\n/g, '\n').split('\n');
  const nonEmpty = lines.filter(function (line) {
    return line.trim();
  });

  if (!nonEmpty.length) {
    return content.trim();
  }

  const minIndent = Math.min(
    ...nonEmpty.map(function (line) {
      return line.match(/^(\s*)/)[1].length;
    })
  );

  return lines
    .map(function (line) {
      if (!line.trim()) {
        return '';
      }
      return line.slice(minIndent);
    })
    .join('\n');
}

function normalizePreBlock(preHtml) {
  return preHtml.replace(
    /(<pre\b[^>]*>\s*<code\b[^>]*>)([\s\S]*?)(<\/code>\s*<\/pre>)/i,
    function (_, open, content, close) {
      const normalized = dedentCodeContent(content).trim();

      if (!normalized) {
        return open.trimEnd() + close.trim();
      }

      return open.trimEnd() + normalized + close.trim();
    }
  );
}

const PRE_BLOCK_PLACEHOLDER = '__PRE_BLOCK_%d__';

function extractPreBlocks(body) {
  const blocks = [];

  const stripped = body.replace(/<pre\b[^>]*>[\s\S]*?<\/pre>/gi, function (match) {
    const id = blocks.length;
    blocks.push(normalizePreBlock(match));
    return PRE_BLOCK_PLACEHOLDER.replace('%d', String(id));
  });

  return { stripped: stripped, blocks: blocks };
}

function indentPreBlockWrapper(preHtml, wrapperIndent) {
  return preHtml.replace(
    /(<pre\b[^>]*>\s*<code\b[^>]*>)([\s\S]*?)(<\/code>\s*<\/pre>)/i,
    function (_, open, content, close) {
      const trimmedContent = content.replace(/^\s+/, '').replace(/\s+$/, '');
      return wrapperIndent + open.trimStart() + trimmedContent + close.trim();
    }
  );
}

function reinjectPreBlocks(body, blocks) {
  return body.replace(/^(\s*)__PRE_BLOCK_(\d+)__/gm, function (_, lineIndent, id) {
    return indentPreBlockWrapper(blocks[Number(id)], lineIndent);
  });
}

function indentBlock(body, indent) {
  return body
    .split('\n')
    .map(function (line) {
      return line.trim() ? indent + line : '';
    })
    .join('\n');
}

function indentContent(body) {
  const extracted = extractPreBlocks(body);
  const indented = indentBlock(extracted.stripped, CONTENT_INDENT);
  return reinjectPreBlocks(indented, extracted.blocks);
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function findElementBounds(html, classToken) {
  const re = new RegExp(
    '<div\\s+class="([^"]*\\b' + classToken + '(?!-)[^"]*)"[^>]*>',
    'i'
  );
  const match = re.exec(html);

  if (!match) {
    return null;
  }

  const start = match.index + match[0].length;
  let depth = 1;
  let i = start;

  while (i < html.length && depth > 0) {
    const nextOpen = html.indexOf('<div', i);
    const nextClose = html.indexOf('</div>', i);

    if (nextClose === -1) {
      break;
    }

    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth += 1;
      i = nextOpen + 4;
      continue;
    }

    depth -= 1;

    if (depth === 0) {
      return {
        start: start,
        inner: html.slice(start, nextClose),
        end: nextClose + 6,
      };
    }

    i = nextClose + 6;
  }

  return null;
}

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

function parseTopLevelNodes(html) {
  const nodes = [];
  let i = 0;

  while (i < html.length) {
    while (i < html.length && /\s/.test(html[i])) {
      i += 1;
    }

    if (i >= html.length) {
      break;
    }

    if (html.startsWith('<!--', i)) {
      const end = html.indexOf('-->', i);

      if (end === -1) {
        break;
      }

      nodes.push({
        type: 'comment',
        content: html.slice(i, end + 3),
      });
      i = end + 3;
      continue;
    }

    if (html[i] !== '<') {
      i += 1;
      continue;
    }

    const tagMatch = html.slice(i).match(/^<([a-z][\w-]*)\b([^>]*)>/i);

    if (!tagMatch) {
      i += 1;
      continue;
    }

    const tag = tagMatch[1].toLowerCase();
    const openEnd = i + tagMatch[0].length;
    const isVoid = VOID_TAGS.has(tag) || /\/\s*$/.test(tagMatch[2]);

    if (isVoid) {
      nodes.push({
        type: 'element',
        tag: tag,
        content: html.slice(i, openEnd),
      });
      i = openEnd;
      continue;
    }

    const openTagRe = new RegExp('<' + tag + '\\b', 'gi');
    const closeTag = '</' + tag + '>';
    let depth = 1;
    let pos = openEnd;

    while (pos < html.length && depth > 0) {
      openTagRe.lastIndex = pos;
      const openMatch = openTagRe.exec(html);
      const nextOpen = openMatch ? openMatch.index : -1;
      const nextClose = html.indexOf(closeTag, pos);

      if (nextClose === -1) {
        pos = html.length;
        break;
      }

      if (nextOpen !== -1 && nextOpen < nextClose) {
        depth += 1;
        pos = nextOpen + 1;
        continue;
      }

      depth -= 1;
      pos = nextClose + closeTag.length;
    }

    nodes.push({
      type: 'element',
      tag: tag,
      content: html.slice(i, pos),
    });
    i = pos;
  }

  return nodes;
}

function extractDemoCellText(elementHtml) {
  const cell = elementHtml.match(
    /class="[^"]*\b(?:grid|space|container)_demo-[^"]*"[^>]*>([^<]+)</
  );

  if (cell) {
    return cell[1].trim();
  }

  return null;
}

function extractStatLabel(elementHtml) {
  const label = elementHtml.match(/class="[^"]*\bstat_label\b[^"]*"[^>]*>([^<]+)</);

  if (label) {
    return label[1].trim();
  }

  return null;
}

function extractLeadParagraph(elementHtml) {
  const match = elementHtml.match(/<p[^>]*>([^<]+)<\/p>/);

  if (match) {
    return match[1].trim();
  }

  return null;
}

function extractNestedComponentClass(elementHtml) {
  const match = elementHtml.match(
    /\bclass="[^"]*\b(?:timeline|tooltip|input)_(?:sm|lg|xs|xl|vertical|horizontal|resize_[\w]+)\b[^"]*"/
  );

  if (match) {
    const cls = match[0].match(/((?:timeline|tooltip|input)_[\w]+)/);

    if (cls) {
      return cls[1];
    }
  }

  return null;
}

function extractFormFieldLabel(elementHtml) {
  const label = elementHtml.match(/class="[^"]*\bform_field-label\b[^"]*"[^>]*>([\s\S]*?)<\/label>/);

  if (!label) {
    return null;
  }

  return label[1].replace(/<[^>]+>/g, '').trim();
}

function extractComponentClassCaption(elementHtml) {
  const classMatch = elementHtml.match(/\bclass="([^"]+)"/);

  if (!classMatch) {
    return null;
  }

  const classes = classMatch[1].split(/\s+/);
  const utility = classes.find(function (cls) {
    return (
      /^(?:grid|space|tag|list|typo|tooltip|input|timeline)_[\w-]+$/.test(cls) &&
      cls !== 'grid' &&
      cls !== 'space'
    );
  });

  if (utility) {
    return utility;
  }

  return null;
}

function extractDirectText(elementHtml) {
  const match = elementHtml.match(/^<[^>]+>([^<]+)<\//);

  if (!match) {
    return null;
  }

  const text = match[1].trim();

  return text || null;
}

function extractDemoFillText(elementHtml) {
  const match = elementHtml.match(/class="[^"]*\bcontainer_demo-fill\b[^"]*"[^>]*>([^<]+)</);

  if (match) {
    return match[1].trim();
  }

  return null;
}

function extractClassModifierCaption(elementHtml) {
  const classMatch = elementHtml.match(/\bclass="([^"]+)"/);

  if (!classMatch) {
    return null;
  }

  const classes = classMatch[1].split(/\s+/);
  const sizeMap = {
    sm: 'Small',
    md: 'Medium',
    lg: 'Large',
    xl: 'XL',
  };

  for (let i = 0; i < classes.length; i += 1) {
    const size = classes[i].match(/^(?:avatar|badge|btn|container|progress|icon)_(sm|md|lg|xl)$/);

    if (size && sizeMap[size[1]]) {
      return sizeMap[size[1]];
    }

    const color = classes[i].match(/^color_(default|primary|success|warning|danger|info|muted)$/);

    if (color) {
      return color[1].charAt(0).toUpperCase() + color[1].slice(1);
    }
  }

  return null;
}

function deriveDemoCaption(elementHtml) {
  const captionMatch = elementHtml.match(/\bdata-demo-caption="([^"]+)"/);

  if (captionMatch) {
    return captionMatch[1].trim();
  }

  const demoFill = extractDemoFillText(elementHtml);

  if (demoFill) {
    return demoFill;
  }

  const demoCell = extractDemoCellText(elementHtml);

  if (demoCell) {
    return demoCell;
  }

  const statLabel = extractStatLabel(elementHtml);

  if (statLabel) {
    return statLabel;
  }

  const fieldLabel = extractFormFieldLabel(elementHtml);

  if (fieldLabel) {
    return fieldLabel;
  }

  const alertTitle = elementHtml.match(/class="[^"]*\balert_title\b[^"]*"[^>]*>([^<]+)</);

  if (alertTitle) {
    return alertTitle[1].trim();
  }

  const alertDesc = elementHtml.match(/class="[^"]*\balert_desc\b[^"]*"[^>]*>([^<]+)</);

  if (alertDesc) {
    return alertDesc[1].trim();
  }

  const progressLabel = elementHtml.match(/class="[^"]*\bprogress_label\b[^"]*"[^>]*>([^<]+)</);

  if (progressLabel) {
    return progressLabel[1].trim();
  }

  const cardTitle = elementHtml.match(/class="[^"]*\bcard_title\b[^"]*"[^>]*>([^<]+)</);

  if (cardTitle) {
    return cardTitle[1].trim();
  }

  const groupLabel =
    elementHtml.match(/\brole="(?:group|toolbar)"[^>]*\baria-label="([^"]+)"/) ||
    elementHtml.match(/\baria-label="([^"]+)"[^>]*\brole="(?:group|toolbar)"/);

  if (groupLabel) {
    return groupLabel[1].trim();
  }

  const progressbar = elementHtml.match(/role="progressbar"[^>]*\baria-valuenow="(\d+)"/);

  if (progressbar) {
    const labelMatch = elementHtml.match(/\baria-label="([^"]+)"/);
    const label = labelMatch ? labelMatch[1].trim() : '진행률';

    return label + ' ' + progressbar[1] + '%';
  }

  if (
    /\bbtn_row\b/.test(elementHtml) ||
    /\bbtn_group\b/.test(elementHtml) ||
    /\bbtn_stack\b/.test(elementHtml) ||
    /\bbtn_row-equal\b/.test(elementHtml)
  ) {
    const labels = [];
    const re = /class="[^"]*\bbtn_label\b[^"]*"[^>]*>([^<]+)</g;
    let match;

    while ((match = re.exec(elementHtml)) !== null && labels.length < 4) {
      labels.push(match[1].trim());
    }

    if (labels.length) {
      const summary = labels.join(' · ');

      return summary.length > 48 ? labels.slice(0, 2).join(' · ') + ' …' : summary;
    }
  }

  if (/^<button\b/i.test(elementHtml.trim())) {
    const btnLabel = elementHtml.match(/class="[^"]*\bbtn_label\b[^"]*"[^>]*>([^<]+)</);

    if (btnLabel) {
      return btnLabel[1].trim();
    }

    const ariaLabel = elementHtml.match(/\baria-label="([^"]+)"/);

    if (ariaLabel) {
      return ariaLabel[1].trim();
    }
  }

  const nestedClass = extractNestedComponentClass(elementHtml);

  if (nestedClass) {
    return nestedClass;
  }

  const componentClass = extractComponentClassCaption(elementHtml);

  if (componentClass) {
    return componentClass;
  }

  const placeholder = elementHtml.match(/\bplaceholder="([^"]+)"/);

  if (placeholder) {
    return placeholder[1].trim();
  }

  const directText = extractDirectText(elementHtml);

  if (directText && (directText.length > 1 || /\d/.test(directText))) {
    return directText;
  }

  const classCaption = extractClassModifierCaption(elementHtml);

  if (classCaption) {
    return classCaption;
  }

  const leadParagraph = extractLeadParagraph(elementHtml);

  if (leadParagraph) {
    return leadParagraph;
  }

  if (directText) {
    return directText;
  }

  const ariaLabel = elementHtml.match(/\baria-label="([^"]+)"/);

  if (ariaLabel) {
    return ariaLabel[1].trim();
  }

  return null;
}

function extractCommentText(commentHtml) {
  return commentHtml.replace(/^<!--\s*|\s*-->$/g, '').trim();
}

function formatDemoComment(text) {
  return '<!-- ' + text + ' -->';
}

function protectHtmlComments(html) {
  const comments = [];

  return {
    html: html.replace(/<!--[\s\S]*?-->/g, function (match) {
      const id = comments.length;

      comments.push(match);
      return '__HTML_COMMENT_' + id + '__';
    }),
    restore: function (value) {
      return value.replace(/__HTML_COMMENT_(\d+)__/g, function (_, id) {
        return comments[Number(id)];
      });
    },
  };
}

function expandHtmlLines(html) {
  const protectedComments = protectHtmlComments(html.replace(/\r\n/g, '\n'));

  return protectedComments
    .restore(
      protectedComments.html
        .replace(/>\s*</g, '>\n<')
        .trim()
    );
}

function countHtmlTags(line, pattern) {
  const matches = line.match(pattern);

  return matches ? matches.length : 0;
}

function prettyPrintHtml(html) {
  const lines = expandHtmlLines(html).split('\n');
  let indent = 0;
  const output = [];

  lines.forEach(function (rawLine) {
    const line = rawLine.trim();

    if (!line) {
      return;
    }

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

function formatDemoBlock(html) {
  return prettyPrintHtml(dedentCodeContent(html).trim());
}

function stripDemoCaptionAttr(elementHtml) {
  return elementHtml.replace(/\s*data-demo-caption="[^"]*"/g, '');
}

function prepareDemoSourceHtml(html) {
  const nodes = parseTopLevelNodes(html);
  const elements = nodes.filter(function (node) {
    return node.type === 'element';
  });

  if (!elements.length) {
    return '';
  }

  if (elements.length === 1 && nodes.length === 1) {
    return formatDemoBlock(stripDemoCaptionAttr(elements[0].content));
  }

  const shouldAnnotate = elements.length >= 2;
  const output = [];
  let exampleIndex = 0;

  nodes.forEach(function (node, index) {
    if (node.type === 'comment') {
      output.push(formatDemoComment(extractCommentText(node.content)));
      return;
    }

    if (node.type !== 'element') {
      return;
    }

    const prev = index > 0 ? nodes[index - 1] : null;

    if (shouldAnnotate && (!prev || prev.type !== 'comment')) {
      const caption = deriveDemoCaption(node.content);

      if (caption) {
        output.push(formatDemoComment(caption));
      } else {
        exampleIndex += 1;
        output.push(formatDemoComment('예시 ' + exampleIndex));
      }
    }

    output.push(formatDemoBlock(stripDemoCaptionAttr(node.content)));
  });

  return output.join('\n\n');
}

function injectDemoComments(html) {
  return prepareDemoSourceHtml(html);
}

function buildCollapsibleCodeInner(escapedCode, lineIndent) {
  const indent = lineIndent || '';
  const child = indent + '  ';

  return (
    indent +
    '<button type="button" class="demo_code-toggle" aria-expanded="false">\n' +
    child +
    '<span class="demo_code-toggle-label">코드 보기</span>\n' +
    child +
    '<svg class="demo_code-toggle-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\n' +
    child +
    '  <path d="m6 9 6 6 6-6"/>\n' +
    child +
    '</svg>\n' +
    indent +
    '</button>\n' +
    indent +
    '<div class="demo_section-code-panel" hidden>\n' +
    child +
    '<pre><code>' +
    escapedCode +
    '</code></pre>\n' +
    indent +
    '</div>'
  );
}

function buildCodeBlock(sourceHtml) {
  const normalized = prepareDemoSourceHtml(sourceHtml);
  const escaped = escapeHtml(normalized);
  const inner = buildCollapsibleCodeInner(escaped, CONTENT_INDENT + '  ');

  return (
    '\n\n' +
    CONTENT_INDENT +
    '<div class="demo_section-code">\n' +
    inner +
    '\n' +
    CONTENT_INDENT +
    '</div>'
  );
}

function replaceCodeSectionContent(sectionInner) {
  const codeBounds = findElementBounds(sectionInner, 'demo_section-code');

  if (!codeBounds) {
    return sectionInner;
  }

  if (codeBounds.inner.includes('demo_code-toggle')) {
    return sectionInner;
  }

  const preMatch = codeBounds.inner.match(/<pre><code>([\s\S]*?)<\/code><\/pre>/i);

  if (!preMatch) {
    return sectionInner;
  }

  const newInner = buildCollapsibleCodeInner(preMatch[1], CONTENT_INDENT + '  ');
  const closeStart = codeBounds.end - 6;

  return sectionInner.slice(0, codeBounds.start) + newInner + sectionInner.slice(closeStart);
}

function processDemoSection(inner) {
  if (inner.includes('demo_section-code')) {
    return replaceCodeSectionContent(inner);
  }

  const preview = findElementBounds(inner, 'demo_section-preview');

  if (!preview) {
    return inner;
  }

  return inner.slice(0, preview.end) + buildCodeBlock(preview.inner) + inner.slice(preview.end);
}

function processDemoSections(body) {
  return body.replace(
    /<section\s+[^>]*\bclass="[^"]*\bdemo_section\b[^"]*"[^>]*>[\s\S]*?<\/section>/gi,
    function (sectionHtml) {
      const openEnd = sectionHtml.indexOf('>') + 1;
      const closeStart = sectionHtml.lastIndexOf('</section>');
      const attrsAndOpen = sectionHtml.slice(0, openEnd);
      const inner = sectionHtml.slice(openEnd, closeStart);
      const processedInner = processDemoSection(inner);

      if (processedInner === inner) {
        return sectionHtml;
      }

      return attrsAndOpen + processedInner + '</section>';
    }
  );
}

function indentHeader(body) {
  return indentBlock(body.trimEnd(), HEADER_INDENT);
}

function formatMetaBlock(meta) {
  const lines = ['<!-- @meta'];

  ['title', 'activeNav', 'pageTitle', 'base', 'scripts'].forEach(function (key) {
    if (meta[key]) {
      lines.push(key + ': ' + meta[key]);
    }
  });

  lines.push('-->');
  return lines.join('\n');
}

function formatPageContent(rawContent) {
  const { meta, body } = parseMeta(rawContent);
  const formattedBody = dedentLegacyBody(body);
  const metaBlock = Object.keys(meta).length ? formatMetaBlock(meta) : '';

  if (!metaBlock) {
    return formattedBody + '\n';
  }

  return metaBlock + '\n' + formattedBody + '\n';
}

function formatAllPages() {
  const targets = [];

  function walk(dir, prefix) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach(function (entry) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = prefix ? prefix + '/' + entry.name : entry.name;

      if (entry.isDirectory()) {
        if (entry.name === '_layouts') return;
        walk(fullPath, relativePath);
        return;
      }

      if (!entry.name.endsWith('.html')) return;
      targets.push({ fullPath, relativePath });
    });
  }

  walk(SRC_DIR, '');

  targets.forEach(function ({ fullPath, relativePath }) {
    const html = fs.readFileSync(fullPath, 'utf8');
    const formatted = formatPageContent(html);

    if (formatted !== html) {
      fs.writeFileSync(fullPath, formatted);
      console.log('Formatted:', relativePath);
    }
  });
}

function assemblePage(relativePath, rawContent) {
  const { meta, body } = parseMeta(rawContent);
  const page = resolvePageMeta(relativePath, meta, body);

  const header = indentHeader(
    renderTemplate(readLayout('header.html'), {
      pageTitle: page.pageTitle,
    })
  );

  var pageScripts = '';

  if (meta.scripts) {
    meta.scripts
      .split(',')
      .map(function (script) {
        return script.trim();
      })
      .filter(Boolean)
      .forEach(function (script) {
        pageScripts += '  <script src="' + page.base + '/js/' + script + '"></script>\n';
      });
  }

  return renderTemplate(readLayout('base.html'), {
    title: page.title,
    activeNav: page.activeNav,
    base: page.base,
    header: header,
    content: processDemoSections(indentContent(page.body)),
    pageScripts: pageScripts,
  });
}

function extractContentFromLegacy(html) {
  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  const activeNavMatch = html.match(/data-active-nav="([^"]+)"/);
  const pageTitleMatch = html.match(/class="guide_header-title">([^<]+)</);
  const contentMatch = html.match(
    /<main class="guide_content">\s*([\s\S]*?)\s*<\/main>/
  );

  if (!contentMatch) {
    return null;
  }

  const activeNav = activeNavMatch ? activeNavMatch[1] : '';
  const pageTitle = pageTitleMatch ? pageTitleMatch[1] : '';
  const title = titleMatch ? titleMatch[1] : '';

  const metaLines = [
    '<!-- @meta',
    'title: ' + title,
    'activeNav: ' + activeNav,
    'pageTitle: ' + pageTitle,
    '-->',
    '',
  ];

  return metaLines.join('\n') + contentMatch[1].trim() + '\n';
}

function migrateLegacyPages() {
  const targets = [];

  function walk(dir, prefix) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach(function (entry) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = prefix ? prefix + '/' + entry.name : entry.name;

      if (entry.isDirectory()) {
        if (entry.name === '_layouts') return;
        walk(fullPath, relativePath);
        return;
      }

      if (!entry.name.endsWith('.html')) return;
      targets.push({ fullPath, relativePath });
    });
  }

  walk(SRC_DIR, '');

  targets.forEach(function ({ fullPath, relativePath }) {
    const html = fs.readFileSync(fullPath, 'utf8');

    if (html.includes('<!-- @meta')) {
      return;
    }

    const converted = extractContentFromLegacy(html);

    if (!converted) {
      console.warn('Skip (no content):', relativePath);
      return;
    }

    fs.writeFileSync(fullPath, converted);
    console.log('Migrated:', relativePath);
  });
}

module.exports = {
  assemblePage,
  migrateLegacyPages,
  formatAllPages,
  formatPageContent,
  parseMeta,
  processDemoSections,
  resolvePageMeta,
  injectDemoComments,
  deriveDemoCaption,
  parseTopLevelNodes,
  prepareDemoSourceHtml,
  dedentCodeContent,
  formatDemoBlock,
  prettyPrintHtml,
};
