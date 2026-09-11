import { useMemo } from 'react';
import { SyntaxHighlighter, type SupportedLanguage } from 'storybook/internal/components';
import { ThemeProvider, ensure, themes } from 'storybook/theming';
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

/** 스토리 캔버스에는 Docs ThemeProvider가 없어 SyntaxHighlighter가 깨지므로 테마를 직접 제공합니다. */
export default function FrameworkCodeBlock({ className, code, frameworkId }: FrameworkCodeBlockProps) {
  const formatted = useMemo(() => formatCodeExample(code, frameworkId), [code, frameworkId]);
  const isWebSquare = frameworkId === 'websquare';

  return (
    <ThemeProvider theme={ensure(themes.dark)}>
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
    </ThemeProvider>
  );
}
