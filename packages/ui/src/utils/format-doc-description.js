const CODE_OPEN = '<span class="typo_code">';
const CODE_CLOSE = '</span>';

const IGNORE_TOKENS = new Set([
  'and',
  'or',
  'the',
  'with',
  'for',
  'to',
  'in',
  'on',
  'md',
  'sm',
  'lg',
  'xl',
  'xs',
  'vue',
  'html',
  'js',
  'css',
  'svg',
  'img',
  'href',
  'role',
  'true',
  'false',
  'none',
  'default',
  'primary',
  'success',
  'warning',
  'danger',
  'muted',
  'open',
  'hidden',
  'window',
  'esc',
  'kbd',
  'typo',
  'code',
]);

const CLASS_TOKEN =
  /(#?[\w][\w*-]*(?:\.[\w_-]+)+|#?[\w][\w.-]*(?:_[\w.-]+)+|[\w]+-[\w-]+|color_\*|[\w]+_\*)/g;

const TRAILING_PARTICLE =
  /(?:으로|로|를|을|와|과|에|의|만|이|가|는|은|도|부터|까지|에서|으로서|로서|처럼|같이|함께|마다|및|이나|나|든지|라도|조차|마저|뿐|씩|대로|따라|따른|따라서|하여|해서|하며|하면서|인|일|임|함|됨|됩니다|합니다|입니다|있습니다|없습니다|지정합니다|사용합니다|제공합니다|지원합니다|적용합니다|표시합니다|구성합니다|배치합니다|조합합니다|설정합니다|추가합니다|제어합니다|연결합니다|지정|사용|제공|지원|적용|표시|구성|배치|조합|설정|추가|제어|연결)/;

const HTML_CHUNK = /(<span class="typo_code">[\s\S]*?<\/span>|<[^>]+>)/g;

function wrapCode(token) {
  return `${CODE_OPEN}${token}${CODE_CLOSE}`;
}

function normalizeExistingCode(html) {
  return html
    .replace(/<code\b[^>]*>/gi, '<span class="typo_code">')
    .replace(/<\/code>/gi, '</span>');
}

function isClassLike(token) {
  if (!token || IGNORE_TOKENS.has(token)) return false;
  if (token.includes('_') || token.includes('-') || token.startsWith('#')) return true;
  if (token.includes('*')) return true;
  if (token.includes('.')) return true;
  return /^[a-z][\w]*$/i.test(token);
}

function wrapClassToken(token) {
  if (!isClassLike(token)) return token;
  return wrapCode(token);
}

function replaceClassTokens(text, replacer = wrapCode) {
  return text.replace(CLASS_TOKEN, (match) => replacer(match));
}

function mapTextNodes(text, mapper) {
  return text
    .split(HTML_CHUNK)
    .map((part) => (part.startsWith('<') ? part : mapper(part)))
    .join('');
}

function wrapDotSeparatedSegment(segment) {
  const trimmed = segment.trim();
  if (!trimmed) return segment;

  const parenMatch = trimmed.match(/^([\w#.*.-]+)(\([^)]*\))(.*)$/);
  if (parenMatch) {
    const [, name, paren, rest] = parenMatch;
    return `${wrapClassToken(name)}${paren}${rest}`;
  }

  const particleMatch = trimmed.match(new RegExp(`^([\\w#.*.-]+)(${TRAILING_PARTICLE.source})(.*)$`));
  if (particleMatch) {
    const [, name, particle, rest] = particleMatch;
    if (isClassLike(name)) {
      return `${wrapCode(name)}${particle}${rest}`;
    }
  }

  if (/^[\w#.*.-]+$/.test(trimmed) && isClassLike(trimmed)) {
    return wrapCode(trimmed);
  }

  return segment;
}

function wrapTextPart(part) {
  const withClassKeyword = part.replace(
    /\b([#]?[\w][\w.-]*)\s+클래스/gi,
    (_, token) => `${wrapCode(token)} 클래스`,
  );

  return withClassKeyword
    .split(HTML_CHUNK)
    .map((chunk) => (chunk.startsWith('<') ? chunk : chunk.replace(CLASS_TOKEN, (match) => wrapCode(match))))
    .join('');
}

function wrapPlainDescription(text) {
  const dotted = text
    .split(/(\s·\s)/)
    .map((part) => (part === ' · ' ? part : wrapDotSeparatedSegment(part)))
    .join('');

  return mapTextNodes(dotted, wrapTextPart);
}

export function formatDocDescription(description) {
  if (!description) return '';

  if (description.includes('<code')) {
    return normalizeExistingCode(description);
  }

  return wrapPlainDescription(description);
}
