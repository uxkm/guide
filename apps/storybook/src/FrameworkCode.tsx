import { useId, useState, type KeyboardEvent, type ReactNode } from 'react';
import FrameworkCodeBlock from './shared/FrameworkCodeBlock';
import { formatCodeExample } from './shared/formatCodeExample';

export interface FrameworkExample {
  code: string;
  fileName: string;
  id: string;
  label: string;
}

interface FrameworkCodeProps {
  examples: FrameworkExample[];
  preview: ReactNode;
}

export function FrameworkCode({ examples, preview }: FrameworkCodeProps) {
  const [activeId, setActiveId] = useState(examples[0]?.id ?? '');
  const [copied, setCopied] = useState(false);
  const instanceId = useId();
  const activeIndex = Math.max(
    0,
    examples.findIndex(({ id }) => id === activeId)
  );
  const activeExample = examples[activeIndex];

  function selectTab(index: number) {
    const nextIndex = (index + examples.length) % examples.length;
    setActiveId(examples[nextIndex].id);
    setCopied(false);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    const nextIndex = event.key === 'ArrowRight' ? index + 1 : index - 1;
    selectTab(nextIndex);
    requestAnimationFrame(() => {
      document.getElementById(`${instanceId}-tab-${(nextIndex + examples.length) % examples.length}`)?.focus();
    });
  }

  async function copyCode() {
    if (!activeExample) return;
    await navigator.clipboard.writeText(formatCodeExample(activeExample.code));
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  if (!activeExample) return null;

  return (
    <main className="framework-code">
      <section className="framework-code__section" aria-labelledby={`${instanceId}-preview-title`}>
        <div className="framework-code__section-header">
          <h2 id={`${instanceId}-preview-title`}>Preview</h2>
        </div>
        <div className="framework-code__preview">{preview}</div>
      </section>

      <section className="framework-code__section" aria-labelledby={`${instanceId}-code-title`}>
        <div className="framework-code__section-header">
          <h2 id={`${instanceId}-code-title`}>Code</h2>
          <span>프레임워크별 구현 예시</span>
        </div>

        <div className="framework-code__tabs" role="tablist" aria-label="프레임워크 선택">
          {examples.map((example, index) => {
            const isActive = example.id === activeExample.id;
            return (
              <button
                aria-controls={`${instanceId}-panel`}
                aria-selected={isActive}
                className="framework-code__tab"
                id={`${instanceId}-tab-${index}`}
                key={example.id}
                onClick={() => selectTab(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                role="tab"
                tabIndex={isActive ? 0 : -1}
                type="button"
              >
                {example.label}
              </button>
            );
          })}
        </div>

        <div
          aria-labelledby={`${instanceId}-tab-${activeIndex}`}
          className="framework-code__panel"
          id={`${instanceId}-panel`}
          role="tabpanel"
          tabIndex={0}
        >
          <div className="framework-code__filebar">
            <span>{activeExample.fileName}</span>
            <button onClick={copyCode} type="button">
              {copied ? '복사됨' : '코드 복사'}
            </button>
          </div>
          <FrameworkCodeBlock
            className="framework-code__syntax"
            code={activeExample.code}
            frameworkId={activeExample.id}
          />
        </div>
      </section>
    </main>
  );
}
