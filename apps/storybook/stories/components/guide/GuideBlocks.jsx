import React from 'react';
import { formatDocDescription } from '@uxkm/ui/utils/format-doc-description';

export function DocDescription({ text }) {
  if (!text) return null;
  return <p dangerouslySetInnerHTML={{ __html: formatDocDescription(text) }} />;
}

export function PageIntro({ title, lead }) {
  return (
    <div className="page_intro">
      <h1>{title}</h1>
      {lead ? <p className="lead">{lead}</p> : null}
    </div>
  );
}

export function GuideSection({ headingId, title, description, children }) {
  return (
    <section className="section" aria-labelledby={headingId}>
      <h2 id={headingId}>{title}</h2>
      <DocDescription text={description} />
      {children}
    </section>
  );
}

export function ApiSection({ headingId, title, description, children }) {
  return (
    <section className="section" aria-labelledby={headingId}>
      <h2 id={headingId}>{title}</h2>
      <DocDescription text={description} />
      <div className="demo_section-preview demo_section-preview-start">{children}</div>
    </section>
  );
}

export function GuideCodeBlock({ children }) {
  return (
    <div className="demo_section-preview demo_section-preview-start demo_section-preview-code">
      <pre className="typo_pre">
        <code>{children}</code>
      </pre>
    </div>
  );
}

export function DemoSection({ headingId, title, description, stack = false, children }) {
  const previewClass = [
    'demo_section-preview',
    'demo_section-preview-start',
    stack ? 'demo_section-preview-stack' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className="section demo_section" aria-labelledby={headingId}>
      <div className="demo_section-header">
        <h2 id={headingId}>{title}</h2>
        <DocDescription text={description} />
      </div>
      <div className={previewClass}>{children}</div>
    </section>
  );
}
