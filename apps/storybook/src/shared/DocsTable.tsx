import type { ReactNode } from 'react';

interface DocsTableProps {
  columns: string[];
  rows: ReactNode[][];
  codeColumns?: number[];
  label?: string;
}

export default function DocsTable({
  columns,
  rows,
  codeColumns = [],
  label,
}: DocsTableProps) {
  const codeColumnSet = new Set(codeColumns);

  return (
    <div className="table_wrap">
      <table className="table table_bordered" aria-label={label ?? `${columns[0] ?? '문서'} 표`}>
        <thead>
          <tr>
            {columns.map((column) => <th scope="col" key={column}>{column}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${rowIndex}-${String(row[0])}`}>
              {row.map((cell, columnIndex) => (
                <td key={columnIndex}>
                  {codeColumnSet.has(columnIndex) && typeof cell === 'string' ? <code>{cell}</code> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
