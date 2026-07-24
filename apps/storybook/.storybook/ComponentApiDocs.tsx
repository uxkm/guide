import React from 'react';
import { Markdown, PureArgsTable, Subheading } from '@storybook/addon-docs/blocks';
import { toStorybookMarkdownDescription } from './toStorybookMarkdownDescription';

type ApiColumn = { key: string; label: string };
type ApiRow = Record<string, string>;

type ApiTableData = {
  columns: ApiColumn[];
  rows: ApiRow[];
  codeColumn?: string;
};

type ApiSectionData = {
  title: string;
  description?: string | null;
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
    const name = row[codeColumn] ?? '';
    const argType: ArgTypeRow = { name };

    if (row.description) {
      argType.description = toStorybookMarkdownDescription(row.description) ?? undefined;
    }

    const table: NonNullable<ArgTypeRow['table']> = {};

    if (columnKeys.has('type') && row.type && row.type !== '—') {
      table.type = { summary: row.type };
    }

    if (columnKeys.has('default') && row.default && row.default !== '—') {
      table.defaultValue = { summary: row.default };
    }

    if (Object.keys(table).length > 0) {
      argType.table = table;
    }

    for (const column of columns) {
      if (STANDARD_COLUMNS.has(column.key)) continue;
      const value = row[column.key];
      if (!value) continue;
      const formatted = toStorybookMarkdownDescription(value);
      argType.description = argType.description
        ? `${argType.description}\n\n**${column.label}:** ${formatted}`
        : `**${column.label}:** ${formatted}`;
    }

    argTypes[`api-${index}`] = argType;
  });

  return argTypes;
}

function ApiTable({ columns, rows, codeColumn = 'name' }: ApiTableData) {
  if (!rows.length) return null;

  return <PureArgsTable rows={toArgTypeRows(columns, rows, codeColumn)} sort="none" />;
}

function ApiSection({ title, description, tables }: ApiSectionData) {
  const formattedDescription = toStorybookMarkdownDescription(description);

  return (
    <section className="sb-api-section">
      <Subheading>{title}</Subheading>
      {formattedDescription ? <Markdown>{formattedDescription}</Markdown> : null}
      {tables.map((table, index) => (
        <ApiTable key={index} {...table} />
      ))}
    </section>
  );
}

export function ComponentApiDocs({ sections }: { sections: ApiSectionData[] }) {
  if (!sections?.length) return null;

  return (
    <div className="sb-api-docs">
      {sections.map((section, index) => (
        <ApiSection key={index} {...section} />
      ))}
    </div>
  );
}
