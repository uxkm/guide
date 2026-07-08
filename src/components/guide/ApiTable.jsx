import { useMemo } from 'react';
import { resolveApiColumns } from '@/doc/data/api-table-columns';
import {
  columnCellClass,
  columnCellStyle,
  columnColStyle,
} from '@/utils/table-column-sizing';
import { cn } from '@/utils/cn';

export default function ApiTable({ columns, rows, codeColumn = 'name' }) {
  const resolvedColumns = useMemo(() => resolveApiColumns(columns), [columns]);

  const cellStyle = (column) => columnCellStyle(column);
  const colStyle = (column) => columnColStyle(column);
  const cellClass = (column) =>
    cn(`api_col-${column.key}`, ...columnCellClass(column, 'api'));

  return (
    <div className="table_wrap table_wrap-api">
      <table className="table table_bordered table_api table_columns">
        <colgroup>
          {resolvedColumns.map((column) => (
            <col
              key={`col-${column.key}`}
              style={colStyle(column)}
            />
          ))}
        </colgroup>
        <thead>
          <tr>
            {resolvedColumns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={cellClass(column)}
                style={cellStyle(column)}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {resolvedColumns.map((column) => (
                <td
                  key={column.key}
                  className={cellClass(column)}
                  style={cellStyle(column)}
                >
                  {column.key === codeColumn ? (
                    <code className="typo_code">{row[column.key]}</code>
                  ) : (
                    row[column.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
