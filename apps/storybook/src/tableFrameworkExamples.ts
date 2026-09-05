import type { FrameworkExample } from './FrameworkCode';

type Code = { html: string; gulp: string; react: string; vue: string };

function makeTableExamples(key: string, code: Code): FrameworkExample[] {
  const react = `import { Table } from '@uxkm/react/table';
import { Badge } from '@uxkm/react/badge';

${code.react}`;
  const vue = code.vue.replace(
    '<script setup>',
    `<script setup>\nimport { Table } from '@uxkm/vue/table';\nimport { Badge } from '@uxkm/vue/badge';`
  );
  return [
    { id: 'html', label: 'HTML', fileName: `apps/html/src/components/data-display/Table/Table.html · ${key}`, code: code.html },
    { id: 'gulp', label: 'Gulp', fileName: `apps/gulp/src/components/data-display/Table/table.njk · ${key}`, code: code.gulp },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/table · ${key}`, code: vue },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/table · ${key}`, code: vue },
    { id: 'react', label: 'React', fileName: `@uxkm/react/table · ${key}`, code: react },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/table · ${key}`, code: react }
  ];
}

const members = [['홍길동', 'Frontend', '활성'], ['김철수', 'Backend', '활성'], ['이영희', 'Design', '휴가']];
const products = [['Basic', '₩12,000', '120'], ['Pro', '₩29,000', '84'], ['Enterprise', '문의', '12']];
const longRows = Array.from({ length: 12 }, (_, index) => [`사용자 ${index + 1}`, index % 2 ? 'Design' : 'Development', index % 3 ? '활성' : '대기']);
const wideRows = longRows.slice(0, 6).map((row, index) => [row[0], row[1], String(120 + index), String(132 + index), String(145 + index)]);
const columns = [{ width: '9rem', nowrap: true }, { minWidth: '10rem' }, { width: '7rem', nowrap: true }];
const wideColumns = [{ width: '8rem', nowrap: true }, { width: '10rem', nowrap: true }, { width: '10rem' }, { width: '10rem' }, { width: '10rem' }];

type TableOptions = {
  classes?: string;
  badge?: boolean;
  scroll?: boolean;
  maxHeight?: string;
  columns?: Array<Record<string, unknown>>;
  wide?: boolean;
  stickyLeftOffsets?: Record<string, string>;
};

const njkQuote = (value: string) => `'${value.replaceAll('\\', '\\\\').replaceAll("'", "\\'")}'`;
const njkRows = (data: string[][]) => `[\n${data.map((row) => `  [${row.map(njkQuote).join(', ')}]`).join(',\n')}\n]`;
const njkObjects = (items: Array<Record<string, unknown>>) => `[\n${items.map((item) => {
  const entries = Object.entries(item).map(([key, value]) => `${key}: ${typeof value === 'string' ? njkQuote(value) : value}`);
  return `  { ${entries.join(', ')} }`;
}).join(',\n')}\n]`;

function gulpTable(data: string[][], options: TableOptions = {}) {
  const classes = new Set((options.classes ?? 'table').split(/\s+/));
  const headers = options.wide ? ['이름', '부서', '1월', '2월', '3월'] : ['이름', '구분', '상태'];
  const stickyCols = [...classes].find((className) => /^table_sticky-cols-[1-4]$/.test(className))?.slice(-1);
  const args = [
    classes.has('table_bordered') ? 'bordered=true' : '',
    classes.has('table_striped') ? 'striped=true' : '',
    classes.has('table_compact') ? 'compact=true' : '',
    classes.has('table_hover') ? 'hover=true' : '',
    options.scroll ? 'scroll=true' : '',
    options.maxHeight ? `scrollMaxHeight='${options.maxHeight}'` : '',
    classes.has('table_sticky-top') ? 'stickyTop=true' : '',
    classes.has('table_sticky-left') ? 'stickyLeft=true' : '',
    stickyCols && stickyCols !== '1' ? `stickyCols=${stickyCols}` : '',
    options.stickyLeftOffsets ? 'stickyLeftOffsets=stickyLeftOffsets' : '',
    options.columns?.length ? 'columns=columns' : '',
    options.wide ? "style='min-width: 48rem'" : ''
  ].filter(Boolean);
  const imports = [
    `{% from "components/data-display/Table/table.njk" import table %}`,
    options.badge ? `{% from "components/data-display/Badge/badge.njk" import badge %}` : ''
  ].filter(Boolean).join('\n');
  const columns = options.columns?.length ? `\n{% set columns = ${njkObjects(options.columns)} %}` : '';
  const offsets = options.stickyLeftOffsets
    ? `\n{% set stickyLeftOffsets = { ${Object.entries(options.stickyLeftOffsets).map(([position, offset]) => `${njkQuote(position)}: ${njkQuote(offset)}`).join(', ')} } %}`
    : '';
  const cells = options.badge
    ? `          {% if loop.index == 3 %}\n            <td>{{ badge(color='success' if cell == '활성' else 'warning', label=cell) }}</td>\n          {% else %}\n            <td>{{ cell }}</td>\n          {% endif %}`
    : '          <td>{{ cell }}</td>';

  return `${imports}

{% set rows = ${njkRows(data)} %}${columns}${offsets}

{% call table(${args.join(', ')}) %}
  <thead>
    <tr>
${headers.map((header) => `      <th scope="col">${header}</th>`).join('\n')}
    </tr>
  </thead>
  <tbody>
    {% for row in rows %}
      <tr>
        {% for cell in row %}
${cells}
        {% endfor %}
      </tr>
    {% endfor %}
  </tbody>
{% endcall %}`;
}

const escapeHtml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const htmlCols = (items?: Array<Record<string, unknown>>) => items?.length
  ? `<colgroup>${items.map((column) => {
    const style = [column.width && `width: ${column.width}`, column.minWidth && `min-width: ${column.minWidth}`, column.maxWidth && `max-width: ${column.maxWidth}`].filter(Boolean).join('; ');
    return `<col${style ? ` style="${style}"` : ''}>`;
  }).join('')}</colgroup>\n    `
  : '';
const htmlRows = (data: string[][], badge = false) => data.map((row) => `      <tr>${row.map((cell, index) => {
  if (badge && index === 2) return `<td><span class="badge color_${cell === '활성' ? 'success' : 'warning'}">${escapeHtml(cell)}</span></td>`;
  return `<td>${escapeHtml(cell)}</td>`;
}).join('')}</tr>`).join('\n');
function htmlTable(data: string[][], options: TableOptions = {}) {
  const headers = options.wide ? ['이름', '부서', '1월', '2월', '3월'] : ['이름', '구분', '상태'];
  const wrapper = ['table_wrap', options.scroll && 'table_wrap-scroll'].filter(Boolean).join(' ');
  const style = [options.maxHeight && `--table-scroll-max-height: ${options.maxHeight}`, options.wide && 'min-width: 48rem'].filter(Boolean).join('; ');
  const tableStyle = options.columns?.flatMap((column, index) => [
    column.padding && `--table-col-${index + 1}-padding: ${column.padding}`,
    column.nowrap && `--table-col-${index + 1}-white-space: nowrap`
  ]).filter(Boolean).join('; ');
  return `<div class="${wrapper}"${style ? ` style="${style}"` : ''}>
  <table class="${options.classes ?? 'table'}"${tableStyle ? ` style="${tableStyle}"` : ''}>
    ${htmlCols(options.columns)}<thead><tr>${headers.map((header) => `<th scope="col">${header}</th>`).join('')}</tr></thead>
    <tbody>
${htmlRows(data, options.badge)}
    </tbody>
  </table>
</div>`;
}

const jsData = (data: string[][]) => JSON.stringify(data, null, 2).replace(/^/gm, '  ');
function standardCode(data: string[][], props: string, vueProps: string, badge = false, useColumns = false) {
  const dataSource = jsData(data);
  const columnsSource = JSON.stringify(columns, null, 2).replace(/^/gm, '  ');
  const reactCell = badge
    ? `{index === 2 ? <Badge color={cell === '활성' ? 'success' : 'warning'} label={cell} /> : cell}`
    : `{cell}`;
  const vueCell = badge
    ? `<Badge v-if="index === 2" :color="cell === '활성' ? 'success' : 'warning'" :label="cell" /><template v-else>{{ cell }}</template>`
    : `{{ cell }}`;
  return {
    react: `const data = ${dataSource.trimStart()};${useColumns ? `\nconst columns = ${columnsSource.trimStart()};` : ''}

export function Example() {
  return (
    <Table${props ? ` ${props}` : ''}>
      <thead><tr><th scope="col">이름</th><th scope="col">구분</th><th scope="col">상태</th></tr></thead>
      <tbody>
        {data.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={cell}>${reactCell}</td>)}</tr>)}
      </tbody>
    </Table>
  );
}`,
    vue: `<script setup>
const data = ${dataSource.trimStart()};${useColumns ? `\nconst columns = ${columnsSource.trimStart()};` : ''}
</script>

<template>
  <Table${vueProps ? ` ${vueProps}` : ''}>
    <thead><tr><th scope="col">이름</th><th scope="col">구분</th><th scope="col">상태</th></tr></thead>
    <tbody>
      <tr v-for="row in data" :key="row[0]"><td v-for="(cell, index) in row" :key="cell">${vueCell}</td></tr>
    </tbody>
  </Table>
</template>`
  };
}

function wideCode(props: string, vueProps: string) {
  const rowsSource = jsData(wideRows);
  const columnsSource = JSON.stringify(wideColumns, null, 2).replace(/^/gm, '  ');
  return {
    react: `const rows = ${rowsSource.trimStart()};
const columns = ${columnsSource.trimStart()};

export function Example() {
  return (
    <Table ${props} columns={columns} style={{ minWidth: '48rem' }}>
      <thead><tr><th>이름</th><th>부서</th><th>1월</th><th>2월</th><th>3월</th></tr></thead>
      <tbody>{rows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
    </Table>
  );
}`,
    vue: `<script setup>
const rows = ${rowsSource.trimStart()};
const columns = ${columnsSource.trimStart()};
</script>

<template>
  <Table ${vueProps} :columns="columns" :style="{ minWidth: '48rem' }">
    <thead><tr><th>이름</th><th>부서</th><th>1월</th><th>2월</th><th>3월</th></tr></thead>
    <tbody><tr v-for="row in rows" :key="row[0]"><td v-for="cell in row" :key="cell">{{ cell }}</td></tr></tbody>
  </Table>
</template>`
  };
}

const standard = (key: string, data: string[][], options: { props?: string; vueProps?: string; classes?: string; badge?: boolean; columns?: boolean; scroll?: boolean; maxHeight?: string }) => {
  const code = standardCode(data, options.props ?? '', options.vueProps ?? options.props ?? '', options.badge, options.columns);
  const tableOptions = { classes: options.classes, badge: options.badge, columns: options.columns ? columns : undefined, scroll: options.scroll, maxHeight: options.maxHeight };
  return makeTableExamples(key, {
    html: htmlTable(data, tableOptions),
    gulp: gulpTable(data, tableOptions),
    ...code
  });
};

export const tableFrameworkExamples = {
  basic: standard('basic', members, { props: 'columns={columns}', vueProps: ':columns="columns"', classes: 'table table_columns', badge: true, columns: true }),
  striped: standard('striped', products, { props: 'striped columns={columns}', vueProps: 'striped :columns="columns"', classes: 'table table_striped table_columns', columns: true }),
  bordered: standard('bordered', members, { props: 'bordered', classes: 'table table_bordered' }),
  compact: standard('compact', products, { props: 'compact columns={columns}', vueProps: 'compact :columns="columns"', classes: 'table table_compact table_columns', columns: true }),
  hover: standard('hover', members, { props: 'hover columns={columns}', vueProps: 'hover :columns="columns"', classes: 'table table_hover table_columns', badge: true, columns: true }),
  combined: standard('combined', members, { props: 'bordered compact hover', classes: 'table table_bordered table_compact table_hover' }),
  stickyTop: standard('stickyTop', longRows, { props: 'scroll scrollMaxHeight="14rem" stickyTop bordered compact', vueProps: 'scroll scroll-max-height="14rem" sticky-top bordered compact', classes: 'table table_sticky-top table_bordered table_compact', scroll: true, maxHeight: '14rem' }),
  stickyLeft: (() => { const code = wideCode('scroll stickyLeft', 'scroll sticky-left'); const options = { classes: 'table table_columns table_sticky-left table_sticky-cols-1', columns: wideColumns, scroll: true, wide: true }; return makeTableExamples('stickyLeft', { html: htmlTable(wideRows, options), gulp: gulpTable(wideRows, options), ...code }); })(),
  stickyColumns: (() => { const code = wideCode("scroll stickyLeft stickyCols={2} stickyLeftOffsets={{ 2: '8rem' }}", `scroll sticky-left :sticky-cols="2" :sticky-left-offsets="{ 2: '8rem' }"`); const options = { classes: 'table table_columns table_sticky-left table_sticky-cols-2', columns: wideColumns, scroll: true, wide: true, stickyLeftOffsets: { '2': '8rem' } }; return makeTableExamples('stickyColumns', { html: htmlTable(wideRows, options).replace('style="', 'style="--table-sticky-left-2: 8rem; '), gulp: gulpTable(wideRows, options), ...code }); })(),
  stickyBoth: (() => { const code = wideCode("scroll scrollMaxHeight=\"14rem\" stickyTop stickyLeft stickyCols={2} stickyLeftOffsets={{ 2: '8rem' }} bordered compact", `scroll scroll-max-height="14rem" sticky-top sticky-left :sticky-cols="2" :sticky-left-offsets="{ 2: '8rem' }" bordered compact`); const options = { classes: 'table table_columns table_bordered table_compact table_sticky-top table_sticky-left table_sticky-cols-2', columns: wideColumns, scroll: true, maxHeight: '14rem', wide: true, stickyLeftOffsets: { '2': '8rem' } }; return makeTableExamples('stickyBoth', { html: htmlTable(wideRows, options).replace('style="', 'style="--table-sticky-left-2: 8rem; '), gulp: gulpTable(wideRows, options), ...code }); })()
};
