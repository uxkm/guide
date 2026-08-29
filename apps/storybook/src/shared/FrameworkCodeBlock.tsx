import { useMemo } from 'react';
import { SyntaxHighlighter, type SupportedLanguage } from 'storybook/internal/components';
import { isReactFrameworkId } from './frameworkId';
import { formatCodeExample } from './formatCodeExample';

interface FrameworkCodeBlockProps {
  className: string;
  code: string;
  frameworkId: string;
}

function syntaxLanguage(frameworkId: string): SupportedLanguage {
  return isReactFrameworkId(frameworkId) ? 'jsx' : 'html';
}

export default function FrameworkCodeBlock({ className, code, frameworkId }: FrameworkCodeBlockProps) {
  const formatted = useMemo(() => formatCodeExample(code, frameworkId), [code, frameworkId]);
  const isWebSquare = frameworkId === 'websquare';

  return (
    <SyntaxHighlighter
      bordered={false}
      className={`${className}${isWebSquare ? ' framework-code__syntax--xml' : ''}`}
      copyable={false}
      format={false}
      language={syntaxLanguage(frameworkId)}
      padded={false}
      wrapLongLines={false}
    >
      {formatted}
    </SyntaxHighlighter>
  );
}
