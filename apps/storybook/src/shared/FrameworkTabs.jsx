import { useId, useState } from 'react';

export default function FrameworkTabs({ examples }) {
  const instanceId = useId();
  const [activeId, setActiveId] = useState(examples[0]?.id ?? '');
  const [copied, setCopied] = useState(false);
  const activeIndex = Math.max(0, examples.findIndex(({ id }) => id === activeId));
  const activeExample = examples[activeIndex];

  function select(index) {
    const nextIndex = (index + examples.length) % examples.length;
    setActiveId(examples[nextIndex].id);
    setCopied(false);
  }

  function selectRelative(offset) {
    const nextIndex = (activeIndex + offset + examples.length) % examples.length;
    select(nextIndex);
    requestAnimationFrame(() => {
      document.getElementById(`${instanceId}-tab-${nextIndex}`)?.focus();
    });
  }

  async function copyCode() {
    await navigator.clipboard.writeText(activeExample.code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  if (!activeExample) return null;

  return (
    <section className="framework-storybooks__code" aria-label="프레임워크별 구현 코드">
      <div className="framework-storybooks__tabs" role="tablist" aria-label="구현 코드 프레임워크 선택">
        {examples.map((example, index) => {
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
        <pre><code>{activeExample.code}</code></pre>
      </div>
    </section>
  );
}
