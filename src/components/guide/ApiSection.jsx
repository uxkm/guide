import { useMemo } from 'react';
import { formatDocDescription } from '@/utils/format-doc-description';

export default function ApiSection({ title, headingId, description, children }) {
  const formattedDescription = useMemo(
    () => formatDocDescription(description),
    [description],
  );

  return (
    <section className="section" aria-labelledby={headingId}>
      <h2 id={headingId}>{title}</h2>
      {description ? (
        <p dangerouslySetInnerHTML={{ __html: formattedDescription }} />
      ) : null}
      <div className="demo_section-preview demo_section-preview-start">{children}</div>
    </section>
  );
}
