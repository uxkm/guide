import type { FrameworkExample } from '../FrameworkCode';

const canonicalComponentSources = import.meta.glob(
  '../../../websquare/src/components/*/*/*.xml',
  { eager: true, import: 'default', query: '?raw' }
) as Record<string, string>;

const voidElements = [
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
  'wbr'
];

function normalizeValuelessAttributes(markup: string) {
  return markup.replace(/<[A-Za-z][\w:.-]*(?:\s[^<>]*?)?>/g, (tag) => {
    const match = tag.match(/^<([A-Za-z][\w:.-]*)([\s\S]*?)(\/?)>$/);
    if (!match) return tag;

    const [, tagName, attributeSource, selfClosing] = match;
    const attributes = attributeSource.trim().match(
      /[^\s=/]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?/g
    ) ?? [];
    const normalizedAttributes = attributes.map((attribute) => (
      attribute.includes('=') ? attribute : `${attribute}="${attribute}"`
    ));
    const suffix = selfClosing ? ' /' : '';

    return `<${tagName}${normalizedAttributes.length ? ` ${normalizedAttributes.join(' ')}` : ''}${suffix}>`;
  });
}

function closeVoidElements(markup: string) {
  const names = voidElements.join('|');
  return markup.replace(
    new RegExp(`<(${names})(\\b[^>]*?)(?<!/)>`, 'gi'),
    '<$1$2 />'
  );
}

function normalizeEntities(markup: string) {
  return markup
    .replace(/&nbsp;/gi, '&#160;')
    .replace(/&times;/gi, '&#215;')
    .replace(/&hellip;/gi, '&#8230;')
    .replace(/&(?!amp;|lt;|gt;|quot;|apos;|#\d+;|#x[\da-f]+;)/gi, '&amp;');
}

function indent(markup: string) {
  const lines = markup.replace(/\r\n?/g, '\n').split('\n');
  const contentIndents = lines
    .filter((line) => line.trim())
    .map((line) => line.match(/^\s*/)?.[0].length ?? 0);
  const commonIndent = contentIndents.length ? Math.min(...contentIndents) : 0;

  return lines
    .map((line) => line.trim() ? `  ${line.slice(commonIndent).trimEnd()}` : '')
    .join('\n');
}

export function toWebSquareXml(markup: string) {
  const xmlMarkup = normalizeEntities(closeVoidElements(normalizeValuelessAttributes(markup)));

  return `<w2:group
  id="uxkmExample"
  class="uxkm_example">
${indent(xmlMarkup)}
</w2:group>`;
}

function toWebSquareFileName(fileName: string) {
  const [source, ...detailParts] = fileName.split('·');
  const sourceName = source.trim().match(/([^/\\]+)\.(?:html?|njk)$/i)?.[1] ?? 'WebSquareExample';
  const detail = detailParts.join('·').trim();
  return `${sourceName}.xml${detail ? ` · ${detail}` : ''}`;
}

function findCanonicalComponentSource(fileName: string) {
  const sourceName = fileName.match(/([^/\\]+)\.(?:html?|njk)(?:\s|$|·)/i)?.[1];
  if (!sourceName) return undefined;
  return Object.entries(canonicalComponentSources).find(([path]) =>
    path.endsWith(`/${sourceName}/${sourceName}.xml`)
  )?.[1];
}

export function withWebSquareExample(examples: FrameworkExample[]) {
  if (examples.some(({ id }) => id === 'websquare')) return examples;

  const source = examples.find(({ id }) => id === 'html')
    ?? examples.find(({ id }) => id === 'gulp');
  if (!source) return examples;
  const canonicalSource = findCanonicalComponentSource(source.fileName);

  return [
    ...examples,
    {
      id: 'websquare',
      label: 'WebSquare',
      fileName: toWebSquareFileName(source.fileName),
      code: canonicalSource ?? toWebSquareXml(source.code)
    }
  ];
}
