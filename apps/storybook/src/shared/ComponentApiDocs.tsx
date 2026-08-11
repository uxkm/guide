import { Markdown, PureArgsTable, Subheading } from '@storybook/addon-docs/blocks';

export type ApiColumn = { key: string; label: string };
export type ApiRow = Record<string, string>;

export type ApiTableData = {
  columns: ApiColumn[];
  rows: ApiRow[];
  codeColumn?: string;
};

export type ApiSectionData = {
  title: string;
  description?: string;
  tables: ApiTableData[];
};

type ArgTypeRow = {
  name?: string;
  description?: string;
  table?: {
    type?: { summary?: string };
    defaultValue?: { summary?: string };
  };
};

const STANDARD_COLUMNS = new Set(['name', 'type', 'default', 'description']);

function toArgTypeRows(
  columns: ApiColumn[],
  rows: ApiRow[],
  codeColumn = 'name',
): Record<string, ArgTypeRow> {
  const columnKeys = new Set(columns.map((column) => column.key));
  const argTypes: Record<string, ArgTypeRow> = {};

  rows.forEach((row, index) => {
    const argType: ArgTypeRow = {
      name: row[codeColumn] ?? '',
      description: row.description || undefined,
    };
    const table: NonNullable<ArgTypeRow['table']> = {};

    if (columnKeys.has('type') && row.type && row.type !== '—') {
      table.type = { summary: row.type };
    }
    if (columnKeys.has('default') && row.default && row.default !== '—') {
      table.defaultValue = { summary: row.default };
    }
    if (Object.keys(table).length > 0) argType.table = table;

    for (const column of columns) {
      if (STANDARD_COLUMNS.has(column.key) || !row[column.key]) continue;
      const detail = `**${column.label}:** ${row[column.key]}`;
      argType.description = argType.description
        ? `${argType.description}\n\n${detail}`
        : detail;
    }

    argTypes[`api-${index}`] = argType;
  });

  return argTypes;
}

function ApiTable({ columns, rows, codeColumn = 'name' }: ApiTableData) {
  if (!rows.length) return null;
  return <PureArgsTable rows={toArgTypeRows(columns, rows, codeColumn)} sort="none" />;
}

export default function ComponentApiDocs({ sections }: { sections: ApiSectionData[] }) {
  if (!sections?.length) return null;

  return (
    <div className="sb-api-docs">
      {sections.map((section, sectionIndex) => (
        <section className="sb-api-section" key={`${section.title}-${sectionIndex}`}>
          <Subheading>{section.title}</Subheading>
          {section.description ? <Markdown>{section.description}</Markdown> : null}
          {section.tables.map((table, tableIndex) => (
            <ApiTable key={tableIndex} {...table} />
          ))}
        </section>
      ))}
    </div>
  );
}
