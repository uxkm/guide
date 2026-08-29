import { useId, useMemo, useState } from 'react';
import FrameworkCodeBlock from './FrameworkCodeBlock';
import { formatCodeExample } from './formatCodeExample';
import { mergeMatchingFrameworkExamples } from './mergeFrameworkExamples';

export default function FrameworkTabs({ examples, showFullCode = false }) {
  const instanceId = useId();
  const mergedExamples = useMemo(() => mergeMatchingFrameworkExamples(examples), [examples]);
  const [activeId, setActiveId] = useState(mergedExamples[0]?.id ?? '');
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const activeIndex = Math.max(0, mergedExamples.findIndex(({ id }) => id === activeId));
  const activeExample = mergedExamples[activeIndex];

  function select(index) {
    const nextIndex = (index + mergedExamples.length) % mergedExamples.length;
    setActiveId(mergedExamples[nextIndex].id);
    setCopied(false);
  }

  function selectRelative(offset) {
    const nextIndex = (activeIndex + offset + mergedExamples.length) % mergedExamples.length;
    select(nextIndex);
    requestAnimationFrame(() => {
      document.getElementById(`${instanceId}-tab-${nextIndex}`)?.focus();
    });
  }

  async function copyCode() {
    await navigator.clipboard.writeText(formatCodeExample(activeExample.code, activeExample.id));
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  if (!activeExample) return null;

  return (
    <section className={`framework-storybooks__code${expanded ? ' is-expanded' : ''}${showFullCode ? ' show-full-code' : ''}`} aria-label="프레임워크별 구현 코드">
      <div className="framework-storybooks__togglebar">
        <button
          aria-controls={`${instanceId}-code`}
          aria-expanded={expanded}
          onClick={() => setExpanded((current) => !current)}
          type="button"
        >
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" />
          </svg>
          {expanded ? 'Hide code' : 'Show code'}
        </button>
      </div>

      {expanded ? (
        <div className="framework-storybooks__body" id={`${instanceId}-code`}>
          <div className="framework-storybooks__tabs" role="tablist" aria-label="구현 코드 프레임워크 선택">
            {mergedExamples.map((example, index) => {
              const selected = example.id === activeExample.id;
              return (
                <button
                  aria-controls={`${instanceId}-panel`}
                  aria-selected={selected}
                  id={`${instanceId}-tab-${index}`}
                  key={example.id}
                  onClick={() => select(index)}
                  onKeyDown={(event) => {
                    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
                    event.preventDefault();
                    selectRelative(event.key === 'ArrowRight' ? 1 : -1);
                  }}
                  role="tab"
                  tabIndex={selected ? 0 : -1}
                  type="button"
                >
                  {example.label}
                </button>
              );
            })}
          </div>

          <div
            aria-labelledby={`${instanceId}-tab-${activeIndex}`}
            className="framework-storybooks__panel"
            id={`${instanceId}-panel`}
            role="tabpanel"
            tabIndex={0}
          >
            <div className="framework-storybooks__filebar">
              <code>{activeExample.fileName}</code>
              <button onClick={copyCode} type="button">{copied ? '복사됨' : '코드 복사'}</button>
            </div>
            <FrameworkCodeBlock
              className="framework-storybooks__syntax"
              code={activeExample.code}
              frameworkId={activeExample.id}
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
