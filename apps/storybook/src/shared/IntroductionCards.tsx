type Column = {
  label: string;
};

interface IntroductionCardsProps {
  codeColumns?: number[];
  columns: Column[];
  rows: string[][];
}

export default function IntroductionCards({
  codeColumns = [],
  columns,
  rows
}: IntroductionCardsProps) {
  const codeColumnSet = new Set(codeColumns);

  return (
    <section className="introduction-cards" aria-label={`${columns[0]?.label ?? '항목'} 목록`}>
      {rows.map((row, rowIndex) => (
        <article
          className="introduction-card"
          key={`${rowIndex}-${row[0]}`}
        >
          <header className="introduction-card__header">
            <span>{columns[0]?.label}</span>
            <h3>{row[0]}</h3>
          </header>

          <dl className="introduction-card__details">
            {columns.slice(1).map((column, columnIndex) => {
              const sourceIndex = columnIndex + 1;
              const cell = row[sourceIndex];

              if (!cell) return null;

              return (
                <div key={column.label}>
                  <dt>{column.label}</dt>
                  <dd>{codeColumnSet.has(sourceIndex) ? <code>{cell}</code> : cell}</dd>
                </div>
              );
            })}
          </dl>
        </article>
      ))}
    </section>
  );
}
