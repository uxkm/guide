import { formatDocDescription } from '@uxkm/ui/utils/format-doc-description';

/** Storybook Markdown — formatDocDescription 결과를 인라인 백틱 코드로 변환 */
export function toStorybookMarkdownDescription(description?: string | null) {
  if (!description) return description;

  const html = formatDocDescription(description);

  return html
    .replace(/<span class="typo_code">([\s\S]*?)<\/span>/gi, (_, inner) => toMarkdownCode(inner))
    .replace(/<code(?:\s+[^>]*)?>([\s\S]*?)<\/code>/gi, (_, inner) => toMarkdownCode(inner));
}

function toMarkdownCode(inner: string) {
  const text = inner
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/`/g, '\\`');

  return `\`${text}\``;
}
