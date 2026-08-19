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
  return (
    <SyntaxHighlighter
      bordered={false}
      className={className}
      copyable={false}
      format={false}
      language={syntaxLanguage(frameworkId)}
      padded={false}
      wrapLongLines
    >
      {formatCodeExample(code, frameworkId)}
    </SyntaxHighlighter>
  );
}
