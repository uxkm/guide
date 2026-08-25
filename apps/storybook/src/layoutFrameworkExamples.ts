import type { FrameworkExample } from './FrameworkCode';

type Definition = { body: string; html?: string };

function reactBody(body: string) {
  return body
    .replace(/class=/g, 'className=')
    .replace(/columns-md=/g, 'columnsMd=')
    .replace(/columns-lg=/g, 'columnsLg=')
    .replace(/cols-md=/g, 'colsMd=')
    .replace(/cols-lg=/g, 'colsLg=')
    .replace(/item-span-md=/g, 'itemSpanMd=')
    .replace(/item-span-lg=/g, 'itemSpanLg=')
    .replace(/item-span=/g, 'itemSpan=')
    .replace(/span-md=/g, 'spanMd=')
    .replace(/span-lg=/g, 'spanLg=')
    .replace(/grow-factor=/g, 'growFactor=')
    .replace(/style="min-width: 8rem;"/g, "style={{ minWidth: '8rem' }}")
    .replace(/style="min-height: 5rem; padding: 1rem;"/g, "style={{ minHeight: '5rem', padding: '1rem' }}")
    .replace(/style="padding-block: 2rem;"/g, "style={{ paddingBlock: '2rem' }}")
    .replace(/style="padding: 1rem;"/g, "style={{ padding: '1rem' }}")
    .replace(/auto-fit/g, 'autoFit')
    .replace(/auto-fill/g, 'autoFill')
    .replace(/equal-columns/g, 'equalColumns')
    .replace(/direction-md=/g, 'directionMd=')
    .replace(/direction-lg=/g, 'directionLg=');
}

function attrs(source: string) {
  const result: Record<string, string | boolean> = {};
  source.replace(/([\w-]+)(?:="([^"]*)")?/g, (_, key: string, value: string | undefined) => {
    result[key] = value ?? true;
    return '';
  });
  return result;
}

function componentHtml(body: string) {
  const stack: string[] = [];
  return body.replace(/<(\/)?(Grid|GridCol|Flex|FlexItem)\b([^>]*)>/g, (_, closing: string, name: string, source: string) => {
    if (closing) return `</${stack.pop() || 'div'}>`;
    const props = attrs(source);
    const tag = typeof props.as === 'string' ? props.as : 'div';
    const classes: Array<string | boolean> = [];
    if (name === 'Grid') classes.push('grid', props.cols && `grid_cols-${props.cols}`, props['cols-md'] && `grid_cols-md-${props['cols-md']}`, props['cols-lg'] && `grid_cols-lg-${props['cols-lg']}`, props.ratio && `grid_ratio-${props.ratio}`, props['item-span'] && `grid_item-span-${props['item-span']}`, props['item-span-md'] && `grid_item-span-md-${props['item-span-md']}`, props['item-span-lg'] && `grid_item-span-lg-${props['item-span-lg']}`, props.gap && `grid_gap-${props.gap}`, props['auto-fit'] && 'grid_auto-fit', props['auto-fill'] && 'grid_auto-fill', props['equal-columns'] && 'grid_equal-columns', props.align && `grid_align-${props.align}`);
    if (name === 'GridCol') classes.push(props.span && `grid_col-span-${props.span}`, props['span-md'] && `grid_col-span-md-${props['span-md']}`, props['span-lg'] && `grid_col-span-lg-${props['span-lg']}`);
    if (name === 'Flex') classes.push('flex', `flex_${props.direction === 'column' ? 'col' : props.direction || 'row'}`, props['direction-md'] && `flex_${props['direction-md'] === 'column' ? 'col' : props['direction-md']}-md`, props['direction-lg'] && `flex_${props['direction-lg'] === 'column' ? 'col' : props['direction-lg']}-lg`, props.wrap && 'flex_wrap', props.cols && `flex_cols-${props.cols}`, props['cols-md'] && `flex_cols-md-${props['cols-md']}`, props['cols-lg'] && `flex_cols-lg-${props['cols-lg']}`, props.ratio && `flex_ratio-${props.ratio}`, props['item-span'] && `flex_items-span-${props['item-span']}`, props['item-span-md'] && `flex_items-span-md-${props['item-span-md']}`, props['item-span-lg'] && `flex_items-span-lg-${props['item-span-lg']}`, props.gap && `flex_gap-${props.gap}`, `flex_align-${props.align || 'stretch'}`, props.justify && `flex_justify-${props.justify}`, props.equal && 'flex_equal', props['auto-fit'] && 'flex_auto-fit');
    if (name === 'FlexItem') classes.push(props.span && `flex_item-span-${props.span}`, props['span-md'] && `flex_item-span-md-${props['span-md']}`, props['span-lg'] && `flex_item-span-lg-${props['span-lg']}`, props.grow && (props['grow-factor'] === '2' ? 'flex_grow-2' : 'flex_grow'), props.fit && 'flex_fit', props.align && `flex_self-${props.align}`, props.order && `flex_order-${props.order}`);
    if (typeof props.class === 'string') classes.push(props.class);
    stack.push(tag);
    return `<${tag} class="${classes.filter(Boolean).join(' ')}" data-component="${name}">`;
  });
}

function webSquareGroups(html: string, key: string, prefix: string, components: string[]) {
  const elementStack: Array<{ name: string; component: boolean }> = [];
  let sequence = 0;
  const markup = html.replace(/<(\/)?([\w-]+)\b([^>]*)>/g, (tag, closing: string, name: string, source: string) => {
    if (closing) {
      const opened = elementStack.pop();
      return opened?.component && opened.name === name ? '</w2:group>' : tag;
    }
    const componentName = source.match(/\sdata-component="([^"]+)"/)?.[1];
    const component = Boolean(componentName && components.includes(componentName));
    elementStack.push({ name, component });
    if (!component) return tag;
    sequence += 1;
    const className = source.match(/\sclass="([^"]*)"/)?.[1] ?? '';
    const semanticTag = name === 'div' ? '' : `\n    tagname="${name}"`;
    const extraAttributes = source
      .replace(/\sclass="[^"]*"/, '')
      .replace(/\sdata-component="[^"]*"/, '')
      .trim();
    const extras = extraAttributes ? `\n    ${extraAttributes}` : '';
    return `<w2:group\n    id="${prefix}${key[0].toUpperCase()}${key.slice(1)}${sequence}"${semanticTag}\n    class="${className}"${extras}>`;
  });
  return `<w2:group
  id="${prefix}${key[0].toUpperCase()}${key.slice(1)}Example">
${markup.split('\n').map((line) => `  ${line}`).join('\n')}
</w2:group>`;
}

const dividerWebSquare: Record<string, string> = {
  playground: `<w2:group
  id="dividerPlayground"
  tagname="div"
  class="divider">
  <w2:textbox id="dividerPlaygroundLabel" label="라벨"></w2:textbox>
</w2:group>`,
  basic: `<w2:group
  id="dividerBasicExample">
  <p>위 콘텐츠</p>
  <hr class="divider" />
  <p>아래 콘텐츠</p>
</w2:group>`,
  dashed: `<w2:group
  id="dividerDashedExample">
  <p>위 콘텐츠</p>
  <hr class="divider divider_dashed" />
  <p>아래 콘텐츠</p>
</w2:group>`,
  text: `<w2:group
  id="dividerTextExample">
  <w2:group id="dividerTextTitle" tagname="div" class="divider">
    <w2:textbox id="dividerTextTitleLabel" label="섹션 제목"></w2:textbox>
  </w2:group>
  <w2:group id="dividerTextDescription" tagname="div" class="divider divider_plain">
    <w2:textbox id="dividerTextDescriptionLabel" label="보조 설명"></w2:textbox>
  </w2:group>
</w2:group>`,
  orient: `<w2:group
  id="dividerOrientExample">
  <w2:group id="dividerOrientLeft" tagname="div" class="divider divider_orient-left">
    <w2:textbox id="dividerOrientLeftLabel" label="왼쪽"></w2:textbox>
  </w2:group>
  <w2:group id="dividerOrientCenter" tagname="div" class="divider">
    <w2:textbox id="dividerOrientCenterLabel" label="가운데"></w2:textbox>
  </w2:group>
  <w2:group id="dividerOrientRight" tagname="div" class="divider divider_orient-right">
    <w2:textbox id="dividerOrientRightLabel" label="오른쪽"></w2:textbox>
  </w2:group>
</w2:group>`,
  vertical: `<w2:group
  id="dividerVerticalExample"
  class="space">
  <w2:textbox id="dividerVerticalItemA" label="항목 A"></w2:textbox>
  <span class="divider divider_vertical" aria-hidden="true"></span>
  <w2:textbox id="dividerVerticalItemB" label="항목 B"></w2:textbox>
  <span class="divider divider_vertical divider_dashed" aria-hidden="true"></span>
  <w2:textbox id="dividerVerticalItemC" label="항목 C"></w2:textbox>
</w2:group>`
};

function makeExamples(component: string, key: string, definition: Definition): FrameworkExample[] {
  const lower = component.toLowerCase();
  const child = component === 'Grid' ? 'GridCol' : component === 'Flex' ? 'FlexItem' : '';
  const usesChild = child && definition.body.includes(`<${child}`);
  const auxiliaries = ['Button', 'Divider', 'Space'].filter((name) => name !== component && definition.body.includes(`<${name}`));
  const vueImports = [`import ${component}${usesChild ? `, { ${child} }` : ''} from '@uxkm/vue/${lower}';`, ...auxiliaries.map((name) => `import ${name} from '@uxkm/vue/${name.toLowerCase()}';`)].join('\n');
  const vue = `<script setup>\n${vueImports}\n</script>\n\n<template>\n${definition.body.split('\n').map((line) => `  ${line}`).join('\n')}\n</template>`;
  const reactMarkup = reactBody(definition.body);
  const reactImports = [`import ${component}${usesChild ? `, { ${child} }` : ''} from '@uxkm/react/${lower}';`, ...auxiliaries.map((name) => `import ${name} from '@uxkm/react/${name.toLowerCase()}';`)].join('\n');
  const react = `${reactImports}\n\nexport function Example() {\n  return (\n    <>\n${reactMarkup.split('\n').map((line) => `      ${line}`).join('\n')}\n    </>\n  );\n}`;
  const html = definition.html ?? componentHtml(definition.body);
  const examples: FrameworkExample[] = [
    { id: 'html', label: 'HTML', fileName: `apps/html/src/components/layout/${component}/${component}.html · ${key}`, code: html },
    { id: 'gulp', label: 'Gulp', fileName: `apps/gulp/src/components/layout/${component}/${lower}.njk · ${key}`, code: `{# ${component} · ${key} #}\n${html}` },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/${lower} → apps/vue/src/components/layout/${component}/${component}.vue · ${key}`, code: vue },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/${lower} → apps/vue/src/components/layout/${component}/${component}.vue · ${key}`, code: vue },
    { id: 'react', label: 'React', fileName: `@uxkm/react/${lower} → apps/react/src/components/layout/${component}/${component}.jsx · ${key}`, code: react },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/${lower} → apps/react/src/components/layout/${component}/${component}.jsx · ${key}`, code: react }
  ];
  if (component === 'Grid') {
    examples.push({ id: 'websquare', label: 'WebSquare', fileName: `Grid.xml · ${key}`, code: webSquareGroups(html, key, 'grid', ['Grid', 'GridCol']) });
  }
  if (component === 'Flex') {
    examples.push({ id: 'websquare', label: 'WebSquare', fileName: `Flex.xml · ${key}`, code: webSquareGroups(html, key, 'flex', ['Flex', 'FlexItem']) });
  }
  if (component === 'Divider') {
    examples.push({ id: 'websquare', label: 'WebSquare', fileName: `Divider.xml · ${key}`, code: dividerWebSquare[key] });
  }
  if (component === 'Space') {
    const taggedHtml = html.replace(/<([a-z][\w-]*) class="(space(?:\s[^"]*)?)"/g, '<$1 class="$2" data-component="Space"');
    examples.push({ id: 'websquare', label: 'WebSquare', fileName: `Space.xml · ${key}`, code: webSquareGroups(taggedHtml, key, 'space', ['Space']) });
  }
  return examples;
}

const grid = {
  playground: { body: `<Grid cols="3" gap="sm">\n  <div class="grid_demo-cell">1</div><div class="grid_demo-cell">2</div><div class="grid_demo-cell">3</div>\n</Grid>` },
  basicLayout: { body: `<Grid gap="sm">\n  <GridCol as="header" span="12" class="grid_demo-cell">Header</GridCol>\n  <GridCol as="aside" span="12" span-md="3" class="grid_demo-cell">Sidebar</GridCol>\n  <GridCol as="main" span="12" span-md="9" class="grid_demo-cell">Main content</GridCol>\n  <GridCol as="footer" span="12" class="grid_demo-cell">Footer</GridCol>\n</Grid>` },
  contentLayout: { body: `<Grid gap="sm">\n  <GridCol as="header" span="12" class="grid_demo-cell">Header</GridCol>\n  <GridCol as="aside" span="12" span-md="3" class="grid_demo-cell">Sidebar</GridCol>\n  <GridCol as="main" span="12" span-md="9" class="grid_demo-cell">\n    <h3>Main content</h3><p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p>\n    <Grid cols="1" cols-lg="2" gap="sm"><article class="component_stub">Content section</article><article class="component_stub">Content section</article></Grid>\n  </GridCol>\n  <GridCol as="footer" span="12" class="grid_demo-cell">Footer</GridCol>\n</Grid>` },
  twelveColumns: { body: `<Grid item-span="1" gap="sm">\n  <div class="grid_demo-cell">1</div><div class="grid_demo-cell">2</div><div class="grid_demo-cell">3</div><div class="grid_demo-cell">4</div><div class="grid_demo-cell">5</div><div class="grid_demo-cell">6</div>\n  <div class="grid_demo-cell">7</div><div class="grid_demo-cell">8</div><div class="grid_demo-cell">9</div><div class="grid_demo-cell">10</div><div class="grid_demo-cell">11</div><div class="grid_demo-cell">12</div>\n</Grid>` },
  parent: { body: `<Grid cols="3"><div class="grid_demo-cell">grid_cols-3</div><div class="grid_demo-cell">grid_cols-3</div><div class="grid_demo-cell">grid_cols-3</div></Grid>\n<Grid ratio="2-1"><div class="grid_demo-cell">grid_ratio-2-1</div><div class="grid_demo-cell">grid_ratio-2-1</div></Grid>\n<Grid item-span="4"><div class="grid_demo-cell">grid_item-span-4</div><div class="grid_demo-cell">grid_item-span-4</div><div class="grid_demo-cell">grid_item-span-4</div></Grid>` },
  equal: { body: `<Grid cols="2"><div class="grid_demo-cell">cols 2</div><div class="grid_demo-cell">cols 2</div></Grid>\n<Grid cols="4"><div class="grid_demo-cell">cols 4</div><div class="grid_demo-cell">cols 4</div><div class="grid_demo-cell">cols 4</div><div class="grid_demo-cell">cols 4</div></Grid>` },
  ratio: { body: `<Grid ratio="1-2"><div class="grid_demo-cell">1 : 2</div><div class="grid_demo-cell">1 : 2</div></Grid>\n<Grid ratio="1-2-1"><div class="grid_demo-cell">1</div><div class="grid_demo-cell">2</div><div class="grid_demo-cell">1</div></Grid>` },
  itemSpan: { body: `<Grid item-span="6"><div class="grid_demo-cell">span 6</div><div class="grid_demo-cell">span 6</div><div class="grid_demo-cell">span 6</div><div class="grid_demo-cell">span 6</div></Grid>\n<Grid item-span="3"><div class="grid_demo-cell">span 3</div><div class="grid_demo-cell">span 3</div><div class="grid_demo-cell">span 3</div><div class="grid_demo-cell">span 3</div></Grid>` },
  child: { body: `<Grid>\n  <GridCol span="8"><div class="grid_demo-cell">span 8</div></GridCol><GridCol span="4"><div class="grid_demo-cell">span 4</div></GridCol>\n  <GridCol span="4"><div class="grid_demo-cell">span 4</div></GridCol><GridCol span="4"><div class="grid_demo-cell">span 4</div></GridCol><GridCol span="4"><div class="grid_demo-cell">span 4</div></GridCol>\n</Grid>` },
  gap: { body: `<Grid cols="3" gap="sm"><div class="grid_demo-cell">gap sm</div><div class="grid_demo-cell">gap sm</div><div class="grid_demo-cell">gap sm</div></Grid>\n<Grid cols="3" gap="lg"><div class="grid_demo-cell">gap lg</div><div class="grid_demo-cell">gap lg</div><div class="grid_demo-cell">gap lg</div></Grid>` },
  responsive: { body: `<Grid cols="1" cols-md="2" cols-lg="3"><div class="grid_demo-cell">1 → md 2 → lg 3열</div><div class="grid_demo-cell">1 → md 2 → lg 3열</div><div class="grid_demo-cell">1 → md 2 → lg 3열</div></Grid>\n<Grid item-span="12" item-span-md="6" item-span-lg="4"><div class="grid_demo-cell">span 12 → md 6 → lg 4</div><div class="grid_demo-cell">span 12 → md 6 → lg 4</div><div class="grid_demo-cell">span 12 → md 6 → lg 4</div></Grid>\n<Grid><GridCol span="12" span-md="8" span-lg="9"><div class="grid_demo-cell">개별 span 12 → md 8 → lg 9</div></GridCol><GridCol span="12" span-md="4" span-lg="3"><div class="grid_demo-cell">개별 span 12 → md 4 → lg 3</div></GridCol></Grid>` },
  auto: { body: `<Grid auto-fit>\n  <div class="grid_demo-cell">auto-fit</div><div class="grid_demo-cell">auto-fit</div><div class="grid_demo-cell">auto-fit</div>\n  <div class="grid_demo-cell">auto-fit</div><div class="grid_demo-cell">auto-fit</div><div class="grid_demo-cell">auto-fit</div>\n</Grid>\n<Grid auto-fill>\n  <div class="grid_demo-cell">auto-fill</div><div class="grid_demo-cell">auto-fill</div><div class="grid_demo-cell">auto-fill</div>\n</Grid>\n<Grid equal-columns>\n  <div class="grid_demo-cell">equal</div><div class="grid_demo-cell">equal</div><div class="grid_demo-cell">equal</div>\n</Grid>` }
} satisfies Record<string, Definition>;

const flex = {
  playground: { body: `<Flex direction="row" cols="3" gap="sm" align="stretch"><div class="flex_demo-cell">1</div><div class="flex_demo-cell">2</div><div class="flex_demo-cell">3</div></Flex>` },
  pageLayout: { body: `<Flex wrap gap="sm">\n  <FlexItem as="header" span="12" class="flex_demo-cell">Header</FlexItem><FlexItem as="aside" span="12" span-md="3" class="flex_demo-cell">Sidebar</FlexItem>\n  <FlexItem as="main" span="12" span-md="9" class="flex_demo-cell">Main content</FlexItem><FlexItem as="footer" span="12" class="flex_demo-cell">Footer</FlexItem>\n</Flex>` },
  contentLayout: { body: `<Flex wrap gap="sm" align="stretch">\n  <FlexItem as="header" span="12" class="flex_demo-cell">Header</FlexItem><FlexItem as="aside" span="12" span-md="3" class="flex_demo-cell">Sidebar</FlexItem>\n  <FlexItem as="main" span="12" span-md="9" class="flex_demo-cell"><h3>Main content</h3><p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p><Flex cols="1" cols-lg="2" gap="sm"><article class="component_stub">Content section</article><article class="component_stub">Content section</article></Flex></FlexItem>\n  <FlexItem as="footer" span="12" class="flex_demo-cell">Footer</FlexItem>\n</Flex>` },
  parent: { body: `<Flex cols="3"><div class="flex_demo-cell">flex_cols-3</div><div class="flex_demo-cell">flex_cols-3</div><div class="flex_demo-cell">flex_cols-3</div></Flex>\n<Flex ratio="2-1"><div class="flex_demo-cell">flex_ratio-2-1</div><div class="flex_demo-cell">flex_ratio-2-1</div></Flex>\n<Flex item-span="4"><div class="flex_demo-cell">flex_items-span-4</div><div class="flex_demo-cell">flex_items-span-4</div><div class="flex_demo-cell">flex_items-span-4</div></Flex>` },
  twelveColumns: { body: `<Flex item-span="1" gap="sm">\n  <div class="flex_demo-cell">1</div><div class="flex_demo-cell">2</div><div class="flex_demo-cell">3</div><div class="flex_demo-cell">4</div><div class="flex_demo-cell">5</div><div class="flex_demo-cell">6</div>\n  <div class="flex_demo-cell">7</div><div class="flex_demo-cell">8</div><div class="flex_demo-cell">9</div><div class="flex_demo-cell">10</div><div class="flex_demo-cell">11</div><div class="flex_demo-cell">12</div>\n</Flex>` },
  equal: { body: `<Flex cols="2"><div class="flex_demo-cell">cols 2</div><div class="flex_demo-cell">cols 2</div></Flex>\n<Flex cols="4"><div class="flex_demo-cell">cols 4</div><div class="flex_demo-cell">cols 4</div><div class="flex_demo-cell">cols 4</div><div class="flex_demo-cell">cols 4</div></Flex>` },
  ratio: { body: `<Flex ratio="1-2"><div class="flex_demo-cell">1</div><div class="flex_demo-cell">2</div></Flex>\n<Flex ratio="1-2-1"><div class="flex_demo-cell">1</div><div class="flex_demo-cell">2</div><div class="flex_demo-cell">1</div></Flex>` },
  itemSpan: { body: `<Flex item-span="6"><div class="flex_demo-cell">span 6</div><div class="flex_demo-cell">span 6</div><div class="flex_demo-cell">span 6</div><div class="flex_demo-cell">span 6</div></Flex>\n<Flex item-span="3"><div class="flex_demo-cell">span 3</div><div class="flex_demo-cell">span 3</div><div class="flex_demo-cell">span 3</div><div class="flex_demo-cell">span 3</div></Flex>` },
  childSpan: { body: `<Flex wrap>\n  <FlexItem span="8" class="flex_demo-cell">span 8</FlexItem><FlexItem span="4" class="flex_demo-cell">span 4</FlexItem>\n  <FlexItem span="4" class="flex_demo-cell">span 4</FlexItem><FlexItem span="4" class="flex_demo-cell">span 4</FlexItem><FlexItem span="4" class="flex_demo-cell">span 4</FlexItem>\n</Flex>` },
  itemSizing: { body: `<Flex gap="sm">\n  <FlexItem fit class="flex_demo-cell">fit</FlexItem>\n  <FlexItem grow class="flex_demo-cell">grow 1</FlexItem>\n  <FlexItem grow grow-factor="2" class="flex_demo-cell">grow 2</FlexItem>\n</Flex>` },
  gap: { body: `<Flex cols="3" gap="sm"><div class="flex_demo-cell">gap sm</div><div class="flex_demo-cell">gap sm</div><div class="flex_demo-cell">gap sm</div></Flex>\n<Flex cols="3" gap="lg"><div class="flex_demo-cell">gap lg</div><div class="flex_demo-cell">gap lg</div><div class="flex_demo-cell">gap lg</div></Flex>` },
  responsive: { body: `<Flex cols="1" cols-md="2" cols-lg="3" gap="sm"><div class="flex_demo-cell">1 → md 2 → lg 3개</div><div class="flex_demo-cell">1 → md 2 → lg 3개</div><div class="flex_demo-cell">1 → md 2 → lg 3개</div></Flex>\n<Flex item-span="12" item-span-md="6" item-span-lg="4"><div class="flex_demo-cell">span 12 → md 6 → lg 4</div><div class="flex_demo-cell">span 12 → md 6 → lg 4</div><div class="flex_demo-cell">span 12 → md 6 → lg 4</div></Flex>\n<Flex wrap><FlexItem span="12" span-md="8" span-lg="9" class="flex_demo-cell">개별 span 12 → md 8 → lg 9</FlexItem><FlexItem span="12" span-md="4" span-lg="3" class="flex_demo-cell">개별 span 12 → md 4 → lg 3</FlexItem></Flex>` },
  auto: { body: `<Flex auto-fit><div class="flex_demo-cell">auto-fit</div><div class="flex_demo-cell">auto-fit</div><div class="flex_demo-cell">auto-fit</div><div class="flex_demo-cell">auto-fit</div><div class="flex_demo-cell">auto-fit</div><div class="flex_demo-cell">auto-fit</div></Flex>` },
  alignmentAndRatio: { body: `<Flex justify="between" gap="sm"><div class="flex_demo-cell">Start</div><div class="flex_demo-cell">End</div></Flex>\n<Flex ratio="2-1" gap="sm"><div class="flex_demo-cell">2</div><div class="flex_demo-cell">1</div></Flex>` }
} satisfies Record<string, Definition>;

const divider = {
  playground: { body: `<Divider label="라벨" />`, html: `<div class="divider">라벨</div>` },
  basic: { body: `<p>위 콘텐츠</p>\n<Divider />\n<p>아래 콘텐츠</p>`, html: `<p>위 콘텐츠</p>\n<hr class="divider" />\n<p>아래 콘텐츠</p>` },
  dashed: { body: `<p>위 콘텐츠</p>\n<Divider dashed />\n<p>아래 콘텐츠</p>`, html: `<p>위 콘텐츠</p>\n<hr class="divider divider_dashed" />\n<p>아래 콘텐츠</p>` },
  text: { body: `<Divider label="섹션 제목" />\n<Divider plain label="보조 설명" />`, html: `<div class="divider">섹션 제목</div>\n<div class="divider divider_plain">보조 설명</div>` },
  orient: { body: `<Divider orient="left" label="왼쪽" />\n<Divider label="가운데" />\n<Divider orient="right" label="오른쪽" />`, html: `<div class="divider divider_orient-left">왼쪽</div>\n<div class="divider">가운데</div>\n<div class="divider divider_orient-right">오른쪽</div>` },
  vertical: { body: `<Space>\n  <span>항목 A</span><Divider vertical /><span>항목 B</span><Divider vertical dashed /><span>항목 C</span>\n</Space>`, html: `<div class="space">\n  <span>항목 A</span><span class="divider divider_vertical" aria-hidden="true"></span>\n  <span>항목 B</span><span class="divider divider_vertical divider_dashed" aria-hidden="true"></span><span>항목 C</span>\n</div>` }
} satisfies Record<string, Definition>;

const space = {
  playground: { body: `<Space gap="md"><div class="space_demo-box">항목 1</div><div class="space_demo-box">항목 2</div><div class="space_demo-box">항목 3</div></Space>`, html: `<div class="space"><div>항목 1</div><div>항목 2</div><div>항목 3</div></div>` },
  basic: { body: `<Space><div class="space_demo-box">항목 1</div><div class="space_demo-box">항목 2</div><div class="space_demo-box">항목 3</div></Space>`, html: `<div class="space"><div>항목 1</div><div>항목 2</div><div>항목 3</div></div>` },
  vertical: { body: `<Space vertical align="stretch">\n  <div class="space_demo-box">첫 번째</div><div class="space_demo-box">두 번째</div><div class="space_demo-box">세 번째</div>\n</Space>`, html: `<div class="space space_vertical space_align-stretch">\n  <div>첫 번째</div><div>두 번째</div><div>세 번째</div>\n</div>` },
  gap: { body: `<Space gap="xs"><div class="space_demo-box">xs</div><div class="space_demo-box">xs</div><div class="space_demo-box">xs</div></Space>\n<Space gap="sm"><div class="space_demo-box">sm</div><div class="space_demo-box">sm</div><div class="space_demo-box">sm</div></Space>\n<Space><div class="space_demo-box">md</div><div class="space_demo-box">md</div><div class="space_demo-box">md</div></Space>\n<Space gap="lg"><div class="space_demo-box">lg</div><div class="space_demo-box">lg</div><div class="space_demo-box">lg</div></Space>\n<Space gap="xl"><div class="space_demo-box">xl</div><div class="space_demo-box">xl</div><div class="space_demo-box">xl</div></Space>`, html: `<div class="space space_gap-xs"><div>xs</div><div>xs</div><div>xs</div></div>\n<div class="space space_gap-sm"><div>sm</div><div>sm</div><div>sm</div></div>\n<div class="space"><div>md</div><div>md</div><div>md</div></div>\n<div class="space space_gap-lg"><div>lg</div><div>lg</div><div>lg</div></div>\n<div class="space space_gap-xl"><div>xl</div><div>xl</div><div>xl</div></div>` },
  wrap: { body: `<Space block wrap>\n  <div class="space_demo-box" style="min-width: 8rem;">항목 1</div><div class="space_demo-box" style="min-width: 8rem;">항목 2</div><div class="space_demo-box" style="min-width: 8rem;">항목 3</div><div class="space_demo-box" style="min-width: 8rem;">항목 4</div><div class="space_demo-box" style="min-width: 8rem;">항목 5</div>\n</Space>`, html: `<div class="space space_block space_wrap">\n  <div style="min-width: 8rem;">항목 1</div><div style="min-width: 8rem;">항목 2</div><div style="min-width: 8rem;">항목 3</div><div style="min-width: 8rem;">항목 4</div><div style="min-width: 8rem;">항목 5</div>\n</div>` },
  align: { body: `<Space block align="center" style="min-height: 5rem; padding: 1rem;">\n  <div class="space_demo-box">align center</div><div class="space_demo-box" style="padding-block: 2rem;">높이 다름</div><div class="space_demo-box">align center</div>\n</Space>\n<Space block justify="between" style="padding: 1rem;"><div class="space_demo-box">justify between</div><div class="space_demo-box">양 끝</div></Space>`, html: `<div class="space space_block space_align-center" style="min-height: 5rem; padding: 1rem;"><div>align center</div><div style="padding-block: 2rem;">높이 다름</div><div>align center</div></div>\n<div class="space space_block space_justify-between" style="padding: 1rem;"><div>justify between</div><div>양 끝</div></div>` },
  combo: { body: `<Space>\n  <Button variant="outline" label="취소" />\n  <Button variant="filled" color="primary" label="저장" />\n  <Divider vertical />\n  <Button variant="text" label="더보기" />\n</Space>`, html: `<div class="space">\n  <button class="btn btn_outline color_primary" type="button">취소</button>\n  <button class="btn btn_filled color_primary" type="button">저장</button>\n  <span class="divider divider_vertical" aria-hidden="true"></span>\n  <button class="btn btn_text color_primary" type="button">더보기</button>\n</div>` }
} satisfies Record<string, Definition>;

function build(component: string, definitions: Record<string, Definition>) {
  return Object.fromEntries(Object.entries(definitions).map(([key, definition]) => [key, makeExamples(component, key, definition)]));
}

export const gridFrameworkExamples = build('Grid', grid) as Record<keyof typeof grid, FrameworkExample[]>;
export const flexFrameworkExamples = build('Flex', flex) as Record<keyof typeof flex, FrameworkExample[]>;
export const dividerFrameworkExamples = build('Divider', divider) as Record<keyof typeof divider, FrameworkExample[]>;
export const spaceFrameworkExamples = build('Space', space) as Record<keyof typeof space, FrameworkExample[]>;
