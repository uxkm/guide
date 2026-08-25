import { SyntaxHighlighter, type SupportedLanguage } from 'storybook/internal/components';
import { formatCodeExample } from './formatCodeExample';

interface FrameworkCodeBlockProps {
  className: string;
  code: string;
  frameworkId: string;
}

function syntaxLanguage(frameworkId: string): SupportedLanguage {
  return frameworkId === 'react' || frameworkId === 'next' ? 'jsx' : 'html';
}

export default function FrameworkCodeBlock({ className, code, frameworkId }: FrameworkCodeBlockProps) {
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
      {formatCodeExample(code, frameworkId)}
    </SyntaxHighlighter>
  );
}
