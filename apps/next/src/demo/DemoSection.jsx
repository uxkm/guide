'use client';

export function DemoSection({ id, title, path, children }) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>{title}</h2>
      {path ? <p><code className="typo_code">{path}</code></p> : null}
      <div className="component_demo">{children}</div>
    </section>
  );
}

export default DemoSection;
