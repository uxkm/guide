import React from 'react';
import { resolveApiColumns } from '@doc-data/api-table-columns';
import { formatDocDescription } from '@uxkm/ui/utils/format-doc-description';
import {
  columnCellClass,
  columnCellStyle,
  columnColStyle,
} from '@uxkm/ui/utils/table-column-sizing';

function ApiCell({ columnKey, value, codeColumn }) {
  if (value == null || value === '') return null;

  if (columnKey === codeColumn) {
    return <code className="typo_code">{value}</code>;
  }

  return <span dangerouslySetInnerHTML={{ __html: formatDocDescription(String(value)) }} />;
}

export function ApiTable({ columns, rows, codeColumn = 'name' }) {
  const resolvedColumns = resolveApiColumns(columns);

  return (
    <div className="table_wrap table_wrap-api">
      <table className="table table_bordered table_api table_columns">
        <colgroup>
          {resolvedColumns.map((column) => (
            <col key={`col-${column.key}`} style={columnColStyle(column)} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {resolvedColumns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={['api_col-' + column.key, ...columnCellClass(column, 'api')].join(' ')}
                style={columnCellStyle(column)}
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
                  className={['api_col-' + column.key, ...columnCellClass(column, 'api')].join(' ')}
                  style={columnCellStyle(column)}
                >
                  <ApiCell columnKey={column.key} value={row[column.key]} codeColumn={codeColumn} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
