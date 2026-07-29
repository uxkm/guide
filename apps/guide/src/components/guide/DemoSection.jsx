import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  DemoCodeProvider,
  useDemoCodeContext,
} from '@uxkm/ui-react/hooks/useDemoCode';
import { formatDemoHtml } from '@uxkm/ui/utils/format-demo-html';
import { formatDocDescription } from '@uxkm/ui/utils/format-doc-description';
import { cn } from '@uxkm/ui-react/utils/cn';

function DemoSectionInner({
  title,
  description,
  headingId,
  stack,
  code,
  codeLang = 'jsx',
  showCode = true,
  children,
}) {
  const previewRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [capturedCode, setCapturedCode] = useState('');
  const [revision, setRevision] = useState(0);
  const demoCode = useDemoCodeContext();

  const previewClass = cn('demo_section-preview', {
    'demo_section-preview-stack': stack,
  });

  const formattedDescription = useMemo(
    () => formatDocDescription(description),
    [description],
  );

  useEffect(() => {
    if (!demoCode?.subscribe) return undefined;
    return demoCode.subscribe(() => setRevision((value) => value + 1));
  }, [demoCode]);

  const captureCode = useCallback(async () => {
    if (code) {
      setCapturedCode(code);
      return;
    }

    await Promise.resolve();

    const previewEl = previewRef.current;
    if (!previewEl) return;

    if (codeLang === 'jsx' || codeLang === 'vue') {
      const generatedCode = demoCode.buildCode(previewEl);
      if (generatedCode) {
        setCapturedCode(generatedCode);
        return;
      }
    }

    setCapturedCode(formatDemoHtml(previewEl.innerHTML));
  }, [code, codeLang, demoCode]);

  function toggleCode() {
    setExpanded((prev) => !prev);
  }

  useEffect(() => {
    captureCode();
  }, [captureCode, revision]);

  return (
    <section
      className={cn('section', 'demo_section', { 'is-code-open': expanded })}
      aria-labelledby={headingId}
    >
      <div className="demo_section-header">
        <h2 id={headingId}>{title}</h2>
        {description ? (
          <p dangerouslySetInnerHTML={{ __html: formattedDescription }} />
        ) : null}
      </div>
      <div
        ref={previewRef}
        className={previewClass}
        data-demo-section={demoCode.sectionId}
      >
        {children}
      </div>
      {showCode && capturedCode ? (
        <div className="demo_section-code">
          <button
            type="button"
            className="demo_code-toggle"
            data-ripple
            aria-expanded={String(expanded)}
            onClick={toggleCode}
          >
            <span className="demo_code-toggle-label">
              {expanded ? '코드 숨기기' : '코드 보기'}
            </span>
            <svg
              className="demo_code-toggle-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <div className="demo_section-code-panel" hidden={!expanded}>
            <pre>
              <code>{capturedCode}</code>
            </pre>
          </div>
        </div>
      ) : null}
    </section>
  );
}

/** Provider로 감싸 하위 컴포넌트가 DemoCodeContext로 등록되도록 함 */
export default function DemoSection(props) {
  return (
    <DemoCodeProvider>
      <DemoSectionInner {...props} />
    </DemoCodeProvider>
  );
}
