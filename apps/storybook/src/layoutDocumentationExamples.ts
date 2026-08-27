import type { FrameworkExample } from './FrameworkCode';
export {
  gridFrameworkExamples,
  flexFrameworkExamples,
  dividerFrameworkExamples,
  spaceFrameworkExamples,
} from './layoutFrameworkExamples';

import gridHtml from '../../html/src/components/layout/Grid/Grid.html?raw';
import gridGulp from '../../gulp/src/components/layout/Grid/grid.njk?raw';
import gridReact from '../../react/src/components/layout/Grid/Grid.jsx?raw';
import gridColReact from '../../react/src/components/layout/Grid/GridCol.jsx?raw';
import gridVue from '../../vue/src/components/layout/Grid/Grid.vue?raw';
import gridColVue from '../../vue/src/components/layout/Grid/GridCol.vue?raw';
import flexHtml from '../../html/src/components/layout/Flex/Flex.html?raw';
import flexGulp from '../../gulp/src/components/layout/Flex/flex.njk?raw';
import flexReact from '../../react/src/components/layout/Flex/Flex.jsx?raw';
import flexItemReact from '../../react/src/components/layout/Flex/FlexItem.jsx?raw';
import flexVue from '../../vue/src/components/layout/Flex/Flex.vue?raw';
import flexItemVue from '../../vue/src/components/layout/Flex/FlexItem.vue?raw';
import dividerHtml from '../../html/src/components/layout/Divider/Divider.html?raw';
import dividerGulp from '../../gulp/src/components/layout/Divider/divider.njk?raw';
import dividerReact from '../../react/src/components/layout/Divider/Divider.jsx?raw';
import dividerVue from '../../vue/src/components/layout/Divider/Divider.vue?raw';
import spaceHtml from '../../html/src/components/layout/Space/Space.html?raw';
import spaceGulp from '../../gulp/src/components/layout/Space/space.njk?raw';
import spaceReact from '../../react/src/components/layout/Space/Space.jsx?raw';
import spaceVue from '../../vue/src/components/layout/Space/Space.vue?raw';

const joinSources = (...parts: string[]) => parts.join('\n\n');

function componentExamples(
  component: string,
  slug: string,
  sources: { html: string; gulp: string; react: string; vue: string },
  options: { reactFile?: string; vueFile?: string } = {},
): FrameworkExample[] {
  const reactFile = options.reactFile ?? `${component}.jsx`;
  const vueFile = options.vueFile ?? `${component}.vue`;
  return [
    {
      id: 'html',
      label: 'HTML',
      fileName: `apps/html/src/components/layout/${component}/${component}.html`,
      code: sources.html,
    },
    {
      id: 'gulp',
      label: 'Gulp',
      fileName: `apps/gulp/src/components/layout/${component}/${slug}.njk`,
      code: sources.gulp,
    },
    {
      id: 'vue',
      label: 'Vue',
      fileName: `apps/vue/src/components/layout/${component}/${vueFile}`,
      code: sources.vue,
    },
    {
      id: 'nuxt',
      label: 'Nuxt',
      fileName: `@uxkm/vue/${slug} → ${vueFile}`,
      code: sources.vue,
    },
    {
      id: 'react',
      label: 'React',
      fileName: `apps/react/src/components/layout/${component}/${reactFile}`,
      code: sources.react,
    },
    {
      id: 'next',
      label: 'Next',
      fileName: `@uxkm/react/${slug} → ${reactFile}`,
      code: sources.react,
    },
  ];
}

export const gridComponentExamples = componentExamples('Grid', 'grid', {
  html: gridHtml,
  gulp: gridGulp,
  react: joinSources(gridReact, `<!-- GridCol.jsx -->\n${gridColReact}`),
  vue: joinSources(gridVue, `<!-- GridCol.vue -->\n${gridColVue}`),
}, { reactFile: 'Grid.jsx · GridCol.jsx', vueFile: 'Grid.vue · GridCol.vue' });

export const flexComponentExamples = componentExamples('Flex', 'flex', {
  html: flexHtml,
  gulp: flexGulp,
  react: joinSources(flexReact, `<!-- FlexItem.jsx -->\n${flexItemReact}`),
  vue: joinSources(flexVue, `<!-- FlexItem.vue -->\n${flexItemVue}`),
}, { reactFile: 'Flex.jsx · FlexItem.jsx', vueFile: 'Flex.vue · FlexItem.vue' });

export const dividerComponentExamples = componentExamples('Divider', 'divider', {
  html: dividerHtml,
  gulp: dividerGulp,
  react: dividerReact,
  vue: dividerVue,
});

export const spaceComponentExamples = componentExamples('Space', 'space', {
  html: spaceHtml,
  gulp: spaceGulp,
  react: spaceReact,
  vue: spaceVue,
});
