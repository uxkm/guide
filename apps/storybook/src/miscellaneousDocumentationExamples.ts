import type { FrameworkExample } from './FrameworkCode';
import { accordionFrameworkExamples as accordionBaseExamples } from './accordionFrameworkExamples';
import { collapseFrameworkExamples as collapseBaseExamples } from './collapseFrameworkExamples';
import { carouselFrameworkExamples as carouselBaseExamples } from './carouselFrameworkExamples';
import { affixFrameworkExamples as affixBaseExamples } from './affixFrameworkExamples';
import { backTopFrameworkExamples as backTopBaseExamples } from './backTopFrameworkExamples';

import accordionHtml from '../../html/src/components/miscellaneous/Accordion/Accordion.html?raw';
import accordionGulp from '../../gulp/src/components/miscellaneous/Accordion/accordion.njk?raw';
import accordionReact from '../../react/src/components/miscellaneous/Accordion/Accordion.jsx?raw';
import accordionItemReact from '../../react/src/components/miscellaneous/Accordion/AccordionItem.jsx?raw';
import accordionVue from '../../vue/src/components/miscellaneous/Accordion/Accordion.vue?raw';
import accordionItemVue from '../../vue/src/components/miscellaneous/Accordion/AccordionItem.vue?raw';
import collapseHtml from '../../html/src/components/miscellaneous/Collapse/Collapse.html?raw';
import collapseGulp from '../../gulp/src/components/miscellaneous/Collapse/collapse.njk?raw';
import collapseReact from '../../react/src/components/miscellaneous/Collapse/Collapse.jsx?raw';
import collapsePanelReact from '../../react/src/components/miscellaneous/Collapse/CollapsePanel.jsx?raw';
import collapseExternalReact from '../../react/src/components/miscellaneous/Collapse/CollapseExternal.jsx?raw';
import collapseVue from '../../vue/src/components/miscellaneous/Collapse/Collapse.vue?raw';
import collapsePanelVue from '../../vue/src/components/miscellaneous/Collapse/CollapsePanel.vue?raw';
import collapseExternalVue from '../../vue/src/components/miscellaneous/Collapse/CollapseExternal.vue?raw';
import carouselHtml from '../../html/src/components/miscellaneous/Carousel/Carousel.html?raw';
import carouselGulp from '../../gulp/src/components/miscellaneous/Carousel/carousel.njk?raw';
import carouselReact from '../../react/src/components/miscellaneous/Carousel/Carousel.jsx?raw';
import carouselSlideReact from '../../react/src/components/miscellaneous/Carousel/CarouselSlide.jsx?raw';
import carouselVue from '../../vue/src/components/miscellaneous/Carousel/Carousel.vue?raw';
import carouselSlideVue from '../../vue/src/components/miscellaneous/Carousel/CarouselSlide.vue?raw';
import affixHtml from '../../html/src/components/miscellaneous/Affix/Affix.html?raw';
import affixGulp from '../../gulp/src/components/miscellaneous/Affix/affix.njk?raw';
import affixReact from '../../react/src/components/miscellaneous/Affix/Affix.jsx?raw';
import affixVue from '../../vue/src/components/miscellaneous/Affix/Affix.vue?raw';
import backTopHtml from '../../html/src/components/miscellaneous/BackTop/BackTop.html?raw';
import backTopGulp from '../../gulp/src/components/miscellaneous/BackTop/back-top.njk?raw';
import backTopReact from '../../react/src/components/miscellaneous/BackTop/BackTop.jsx?raw';
import backTopVue from '../../vue/src/components/miscellaneous/BackTop/BackTop.vue?raw';

type ExampleMap = Record<string, FrameworkExample[]>;

function componentExamples(
  component: string,
  slug: string,
  sources: { html: string; gulp: string; react: string; vue: string },
): FrameworkExample[] {
  return [
    {
      id: 'html',
      label: 'HTML',
      fileName: `apps/html/src/components/miscellaneous/${component}/${component}.html`,
      code: sources.html,
    },
    {
      id: 'gulp',
      label: 'Gulp',
      fileName: `apps/gulp/src/components/miscellaneous/${component}/${slug}.njk`,
      code: sources.gulp,
    },
    {
      id: 'vue',
      label: 'Vue',
      fileName: `apps/vue/src/components/miscellaneous/${component}/${component}*.vue`,
      code: sources.vue,
    },
    {
      id: 'nuxt',
      label: 'Nuxt',
      fileName: `@uxkm/vue/${slug} → ${component}*.vue`,
      code: sources.vue,
    },
    {
      id: 'react',
      label: 'React',
      fileName: `apps/react/src/components/miscellaneous/${component}/${component}*.jsx`,
      code: sources.react,
    },
    {
      id: 'next',
      label: 'Next',
      fileName: `@uxkm/react/${slug} → ${component}*.jsx`,
      code: sources.react,
    },
  ];
}

function withWebSquare<T extends ExampleMap>(
  component: string,
  examples: T,
  code: (key: string) => string,
): T {
  return Object.fromEntries(
    Object.entries(examples).map(([key, values]) => [
      key,
      [
        ...values,
        {
          id: 'websquare',
          label: 'WebSquare',
          fileName: `WebSquare 화면 XML · ${component} · ${key}`,
          code: `<!-- 화면 XML 루트에 w2, xf, ev 네임스페이스를 선언합니다. -->\n${code(key)}`,
        },
      ],
    ]),
  ) as T;
}

const joinSources = (...parts: string[]) => parts.join('\n\n');

export const accordionComponentExamples = componentExamples('Accordion', 'accordion', {
  html: accordionHtml,
  gulp: accordionGulp,
  react: joinSources(accordionReact, `<!-- AccordionItem.jsx -->\n${accordionItemReact}`),
  vue: joinSources(accordionVue, `<!-- AccordionItem.vue -->\n${accordionItemVue}`),
});

export const collapseComponentExamples = componentExamples('Collapse', 'collapse', {
  html: collapseHtml,
  gulp: collapseGulp,
  react: joinSources(
    collapseReact,
    `<!-- CollapsePanel.jsx -->\n${collapsePanelReact}`,
    `<!-- CollapseExternal.jsx -->\n${collapseExternalReact}`,
  ),
  vue: joinSources(
    collapseVue,
    `<!-- CollapsePanel.vue -->\n${collapsePanelVue}`,
    `<!-- CollapseExternal.vue -->\n${collapseExternalVue}`,
  ),
});

export const carouselComponentExamples = componentExamples('Carousel', 'carousel', {
  html: carouselHtml,
  gulp: carouselGulp,
  react: joinSources(carouselReact, `<!-- CarouselSlide.jsx -->\n${carouselSlideReact}`),
  vue: joinSources(carouselVue, `<!-- CarouselSlide.vue -->\n${carouselSlideVue}`),
});

export const affixComponentExamples = componentExamples('Affix', 'affix', {
  html: affixHtml,
  gulp: affixGulp,
  react: affixReact,
  vue: affixVue,
});

export const backTopComponentExamples = componentExamples('BackTop', 'back-top', {
  html: backTopHtml,
  gulp: backTopGulp,
  react: backTopReact,
  vue: backTopVue,
});

function accordionItem(
  id: string,
  label: string,
  body: string,
  options: { open?: boolean; disabled?: boolean } = {},
) {
  const open = Boolean(options.open);
  const disabled = options.disabled ? ' disabled="true"' : '';
  return `<w2:group id="${id}" class="accordion_item${open ? ' is-open' : ''}">
  <w2:group id="${id}Heading" class="accordion_heading" role="heading" aria-level="3">
    <xf:trigger id="${id}Trigger" type="button" class="btn btn_text accordion_trigger" aria-expanded="${open}" aria-controls="${id}Panel"${disabled} ev:onclick="scwin.accordion_toggle">
      <xf:label><![CDATA[${label}]]></xf:label>
    </xf:trigger>
  </w2:group>
  <w2:group id="${id}Panel" class="accordion_panel" role="region" aria-labelledby="${id}Trigger"${open ? '' : ' style="display:none;"'}>
    <w2:textbox id="${id}Content" class="accordion_content" tagname="p" label="${body}"></w2:textbox>
  </w2:group>
</w2:group>`;
}

function accordionWebSquare(key: string) {
  const classes: Record<string, string> = {
    basic: 'accordion accordion_card',
    multiple: 'accordion accordion_card',
    flush: 'accordion accordion_flush',
    bordered: 'accordion accordion_bordered',
    extra: 'accordion accordion_card',
    custom: 'accordion accordion_card',
    disabled: 'accordion accordion_card',
    size: 'accordion accordion_card accordion_sm',
    slide: 'accordion accordion_card',
  };
  return `<w2:group id="accordion${key}" class="${classes[key] ?? 'accordion accordion_card'}" data-accordion-multiple="${key === 'multiple'}">
  ${accordionItem(`acc${key}1`, '배송은 얼마나 걸리나요?', '평일 기준 2~3일 이내 출고됩니다.', { open: true }).replaceAll('\n', '\n  ')}
  ${accordionItem(`acc${key}2`, '교환·반품은 어떻게 하나요?', '수령 후 7일 이내 신청할 수 있습니다.', {
    disabled: key === 'disabled',
  }).replaceAll('\n', '\n  ')}
</w2:group>`;
}

function collapsePanel(
  id: string,
  label: string,
  body: string,
  options: { open?: boolean; disabled?: boolean } = {},
) {
  const open = Boolean(options.open);
  const disabled = options.disabled ? ' disabled="true"' : '';
  return `<w2:group id="${id}" class="collapse_panel${open ? ' is-open' : ''}">
  <w2:group id="${id}Header" class="collapse_header">
    <xf:trigger id="${id}Trigger" type="button" class="btn btn_text collapse_trigger" aria-expanded="${open}" aria-controls="${id}Body"${disabled} ev:onclick="scwin.collapse_toggle">
      <xf:label><![CDATA[${label}]]></xf:label>
    </xf:trigger>
  </w2:group>
  <w2:group id="${id}Body" class="collapse_body" role="region" aria-labelledby="${id}Trigger"${open ? '' : ' style="display:none;"'}>
    <w2:textbox id="${id}Content" class="collapse_content" tagname="p" label="${body}"></w2:textbox>
  </w2:group>
</w2:group>`;
}

function collapseWebSquare(key: string) {
  if (key === 'standalone') {
    return `<w2:group id="collapseStandalone">
  <xf:trigger id="collapseStandaloneTrigger" type="button" class="btn btn_outline" aria-expanded="false" aria-controls="collapseStandaloneBody" ev:onclick="scwin.collapse_external_toggle">
    <xf:label><![CDATA[상세 정보 보기]]></xf:label>
  </xf:trigger>
  <w2:group id="collapseStandaloneBody" class="collapse_external-body" style="display:none;">
    <w2:textbox id="collapseStandaloneText" tagname="p" label="외부 트리거로 제어하는 접힘 영역입니다."></w2:textbox>
  </w2:group>
</w2:group>`;
  }
  const classes: Record<string, string> = {
    basic: 'collapse_group collapse_bordered',
    accordion: 'collapse_group collapse_bordered',
    skin: 'collapse_group collapse_ghost',
    extra: 'collapse_group collapse_bordered',
    disabled: 'collapse_group collapse_bordered',
    size: 'collapse_group collapse_bordered collapse_sm',
    slide: 'collapse_group collapse_bordered',
  };
  return `<w2:group id="collapse${key}" class="${classes[key] ?? 'collapse_group collapse_bordered'}" data-collapse-accordion="${key === 'accordion'}">
  ${collapsePanel(`col${key}1`, '배송 정보', '평일 기준 2~3일 이내 출고됩니다.', { open: true }).replaceAll('\n', '\n  ')}
  ${collapsePanel(`col${key}2`, '결제 안내', '카드·계좌이체를 지원합니다.', {
    disabled: key === 'disabled',
  }).replaceAll('\n', '\n  ')}
</w2:group>`;
}

function carouselWebSquare(key: string) {
  const attrs: Record<string, string> = {
    default: '',
    fade: ' data-swiper-effect="fade"',
    autoplay: ' data-swiper-autoplay="true"',
    loop: ' data-swiper-loop="true"',
    multi: ' data-swiper-slides-per-view="auto"',
    space: ' data-swiper-space-between="16"',
    pagination: '',
    fraction: ' data-swiper-pagination="fraction"',
    progress: ' data-swiper-pagination="progressbar"',
    custom: ' data-swiper-pagination="custom"',
    grid: ' data-swiper-grid-rows="2"',
    coverflow: ' data-swiper-effect="coverflow"',
    coverflowRise: ' data-swiper-effect="coverflow" data-swiper-coverflow-style="rise"',
    thumbs: ' data-swiper-thumbs="#carouselThumbs"',
  };
  const slide = (id: string, title: string) =>
    `<w2:group id="${id}" class="swiper-slide">
  <w2:textbox id="${id}Title" class="card_title" label="${title}"></w2:textbox>
</w2:group>`;
  return `<w2:group id="carousel${key}" class="carousel" role="region" aria-roledescription="carousel" aria-label="콘텐츠 슬라이드"${attrs[key] ?? ''}>
  <w2:group id="carousel${key}Wrapper" class="swiper-wrapper">
    ${slide(`carousel${key}1`, '슬라이드 1').replaceAll('\n', '\n    ')}
    ${slide(`carousel${key}2`, '슬라이드 2').replaceAll('\n', '\n    ')}
    ${slide(`carousel${key}3`, '슬라이드 3').replaceAll('\n', '\n    ')}
  </w2:group>
  <xf:trigger id="carousel${key}Prev" type="button" class="carousel_nav carousel_prev" aria-label="이전 슬라이드" ev:onclick="scwin.carousel_prev">
    <xf:label><![CDATA[이전]]></xf:label>
  </xf:trigger>
  <xf:trigger id="carousel${key}Next" type="button" class="carousel_nav carousel_next" aria-label="다음 슬라이드" ev:onclick="scwin.carousel_next">
    <xf:label><![CDATA[다음]]></xf:label>
  </xf:trigger>
</w2:group>`;
}

function affixWebSquare(key: string) {
  const offsetTop = key === 'offset' ? '64' : '0';
  const offsetBottom = key === 'bottom' ? '16' : '';
  const skin =
    key === 'anchor' ? ' affix_anchor' : key === 'bottom' || key === 'basic' ? ' affix_bar' : '';
  const target = key === 'window' ? 'window' : `#affixScroll${key}`;
  return `<w2:group id="affixScroll${key}" class="affix_demo-scroll">
  <w2:group id="affix${key}" class="affix" data-affix="true" data-target="${target}" data-offset-top="${offsetTop}"${offsetBottom ? ` data-offset-bottom="${offsetBottom}"` : ''}>
    <w2:group id="affix${key}Target" class="affix_target${skin}"${key === 'anchor' ? ' tagname="nav" aria-label="섹션 바로가기"' : ''}>
      <w2:textbox id="affix${key}Label" class="affix_bar-label" label="${key === 'anchor' ? '섹션' : '고정 액션 바'}"></w2:textbox>
      <xf:trigger id="affix${key}Action" type="button" class="btn btn_filled btn_sm color_primary">
        <xf:label><![CDATA[확인]]></xf:label>
      </xf:trigger>
    </w2:group>
  </w2:group>
</w2:group>`;
}

function backTopWebSquare(key: string) {
  const sizeClass = key === 'size' ? ' back_top_sm' : '';
  const colorClass = key === 'custom' ? ' back_top_primary' : ' back_top_primary';
  const visibility = key === 'visibility' ? '200' : '80';
  const target = key === 'window' ? 'window' : '#backTopScroll';
  return `<w2:group id="backTopWrap${key}" class="back_top_demo-wrap">
  <w2:group id="backTopScroll" class="back_top_demo-scroll"></w2:group>
  <w2:group id="backTop${key}" class="back_top${colorClass}${sizeClass}" data-back-top="true" data-target="${target}" data-visibility-height="${visibility}">
    <xf:trigger id="backTop${key}Btn" type="button" class="btn btn_ghost back_top_btn" aria-label="맨 위로" ev:onclick="scwin.back_top_scroll">
      <xf:label><![CDATA[${key === 'custom' ? '맨 위로' : '↑'}]]></xf:label>
    </xf:trigger>
  </w2:group>
</w2:group>`;
}

export const accordionFrameworkExamples = withWebSquare(
  'Accordion',
  accordionBaseExamples,
  accordionWebSquare,
);
export const collapseFrameworkExamples = withWebSquare(
  'Collapse',
  collapseBaseExamples,
  collapseWebSquare,
);
export const carouselFrameworkExamples = withWebSquare(
  'Carousel',
  carouselBaseExamples,
  carouselWebSquare,
);
export const affixFrameworkExamples = withWebSquare('Affix', affixBaseExamples, affixWebSquare);
export const backTopFrameworkExamples = withWebSquare(
  'BackTop',
  backTopBaseExamples,
  backTopWebSquare,
);
