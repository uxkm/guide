import type { FrameworkExample } from './FrameworkCode';
import { alertFrameworkExamples as alertBaseExamples } from './alertFrameworkExamples';
import { snackbarFrameworkExamples as snackbarBaseExamples } from './snackbarFrameworkExamples';
import { modalFrameworkExamples as modalBaseExamples } from './modalFrameworkExamples';
import { drawerFrameworkExamples as drawerBaseExamples } from './drawerFrameworkExamples';
import { popoverFrameworkExamples as popoverBaseExamples } from './popoverFrameworkExamples';
import { tooltipFrameworkExamples as tooltipBaseExamples } from './tooltipFrameworkExamples';
import { progressFrameworkExamples as progressBaseExamples } from './progressFrameworkExamples';
import { spinFrameworkExamples as spinBaseExamples } from './spinFrameworkExamples';
import { skeletonFrameworkExamples as skeletonBaseExamples } from './skeletonFrameworkExamples';
import { emptyFrameworkExamples as emptyBaseExamples } from './emptyFrameworkExamples';

import alertHtml from '../../html/src/components/feedback/Alert/Alert.html?raw';
import alertGulp from '../../gulp/src/components/feedback/Alert/alert.njk?raw';
import alertReact from '../../react/src/components/feedback/Alert/Alert.jsx?raw';
import alertVue from '../../vue/src/components/feedback/Alert/Alert.vue?raw';
import snackbarHtml from '../../html/src/components/feedback/Snackbar/Snackbar.html?raw';
import snackbarGulp from '../../gulp/src/components/feedback/Snackbar/snackbar.njk?raw';
import snackbarReact from '../../react/src/components/feedback/Snackbar/Snackbar.jsx?raw';
import snackbarRegionReact from '../../react/src/components/feedback/Snackbar/SnackbarRegion.jsx?raw';
import snackbarVue from '../../vue/src/components/feedback/Snackbar/Snackbar.vue?raw';
import snackbarRegionVue from '../../vue/src/components/feedback/Snackbar/SnackbarRegion.vue?raw';
import modalHtml from '../../html/src/components/feedback/Modal/Modal.html?raw';
import modalGulp from '../../gulp/src/components/feedback/Modal/modal.njk?raw';
import modalReact from '../../react/src/components/feedback/Modal/Modal.jsx?raw';
import modalVue from '../../vue/src/components/feedback/Modal/Modal.vue?raw';
import drawerHtml from '../../html/src/components/feedback/Drawer/Drawer.html?raw';
import drawerGulp from '../../gulp/src/components/feedback/Drawer/drawer.njk?raw';
import drawerReact from '../../react/src/components/feedback/Drawer/Drawer.jsx?raw';
import drawerVue from '../../vue/src/components/feedback/Drawer/Drawer.vue?raw';
import popoverHtml from '../../html/src/components/feedback/Popover/Popover.html?raw';
import popoverGulp from '../../gulp/src/components/feedback/Popover/popover.njk?raw';
import popoverReact from '../../react/src/components/feedback/Popover/Popover.jsx?raw';
import popoverVue from '../../vue/src/components/feedback/Popover/Popover.vue?raw';
import tooltipHtml from '../../html/src/components/feedback/Tooltip/Tooltip.html?raw';
import tooltipGulp from '../../gulp/src/components/feedback/Tooltip/tooltip.njk?raw';
import tooltipReact from '../../react/src/components/feedback/Tooltip/Tooltip.jsx?raw';
import tooltipVue from '../../vue/src/components/feedback/Tooltip/Tooltip.vue?raw';
import progressHtml from '../../html/src/components/feedback/Progress/Progress.html?raw';
import progressGulp from '../../gulp/src/components/feedback/Progress/progress.njk?raw';
import progressReact from '../../react/src/components/feedback/Progress/Progress.jsx?raw';
import progressCircleReact from '../../react/src/components/feedback/Progress/ProgressCircle.jsx?raw';
import progressVue from '../../vue/src/components/feedback/Progress/Progress.vue?raw';
import progressCircleVue from '../../vue/src/components/feedback/Progress/ProgressCircle.vue?raw';
import spinHtml from '../../html/src/components/feedback/Spin/Spin.html?raw';
import spinGulp from '../../gulp/src/components/feedback/Spin/spin.njk?raw';
import spinReact from '../../react/src/components/feedback/Spin/Spin.jsx?raw';
import spinWrapReact from '../../react/src/components/feedback/Spin/SpinWrap.jsx?raw';
import spinVue from '../../vue/src/components/feedback/Spin/Spin.vue?raw';
import spinWrapVue from '../../vue/src/components/feedback/Spin/SpinWrap.vue?raw';
import skeletonHtml from '../../html/src/components/feedback/Skeleton/Skeleton.html?raw';
import skeletonGulp from '../../gulp/src/components/feedback/Skeleton/skeleton.njk?raw';
import skeletonReact from '../../react/src/components/feedback/Skeleton/Skeleton.jsx?raw';
import skeletonVue from '../../vue/src/components/feedback/Skeleton/Skeleton.vue?raw';
import emptyHtml from '../../html/src/components/feedback/Empty/Empty.html?raw';
import emptyGulp from '../../gulp/src/components/feedback/Empty/empty.njk?raw';
import emptyReact from '../../react/src/components/feedback/Empty/Empty.jsx?raw';
import emptyVue from '../../vue/src/components/feedback/Empty/Empty.vue?raw';

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
      fileName: `apps/html/src/components/feedback/${component}/${component}.html`,
      code: sources.html,
    },
    {
      id: 'gulp',
      label: 'Gulp',
      fileName: `apps/gulp/src/components/feedback/${component}/${slug}.njk`,
      code: sources.gulp,
    },
    {
      id: 'vue',
      label: 'Vue',
      fileName: `apps/vue/src/components/feedback/${component}/${component}.vue`,
      code: sources.vue,
    },
    {
      id: 'nuxt',
      label: 'Nuxt',
      fileName: `@uxkm/vue/${slug} → ${component}.vue`,
      code: sources.vue,
    },
    {
      id: 'react',
      label: 'React',
      fileName: `apps/react/src/components/feedback/${component}/${component}.jsx`,
      code: sources.react,
    },
    {
      id: 'next',
      label: 'Next',
      fileName: `@uxkm/react/${slug} → ${component}.jsx`,
      code: sources.react,
    },
  ];
}

export const alertComponentExamples = componentExamples('Alert', 'alert', {
  html: alertHtml,
  gulp: alertGulp,
  react: alertReact,
  vue: alertVue,
});
export const snackbarComponentExamples = componentExamples('Snackbar', 'snackbar', {
  html: snackbarHtml,
  gulp: snackbarGulp,
  react: `${snackbarReact}\n\n<!-- SnackbarRegion.jsx -->\n${snackbarRegionReact}`,
  vue: `${snackbarVue}\n\n<!-- SnackbarRegion.vue -->\n${snackbarRegionVue}`,
});
export const modalComponentExamples = componentExamples('Modal', 'modal', {
  html: modalHtml,
  gulp: modalGulp,
  react: modalReact,
  vue: modalVue,
});
export const drawerComponentExamples = componentExamples('Drawer', 'drawer', {
  html: drawerHtml,
  gulp: drawerGulp,
  react: drawerReact,
  vue: drawerVue,
});
export const popoverComponentExamples = componentExamples('Popover', 'popover', {
  html: popoverHtml,
  gulp: popoverGulp,
  react: popoverReact,
  vue: popoverVue,
});
export const tooltipComponentExamples = componentExamples('Tooltip', 'tooltip', {
  html: tooltipHtml,
  gulp: tooltipGulp,
  react: tooltipReact,
  vue: tooltipVue,
});
export const progressComponentExamples = componentExamples('Progress', 'progress', {
  html: progressHtml,
  gulp: progressGulp,
  react: `${progressReact}\n\n<!-- ProgressCircle.jsx -->\n${progressCircleReact}`,
  vue: `${progressVue}\n\n<!-- ProgressCircle.vue -->\n${progressCircleVue}`,
});
export const spinComponentExamples = componentExamples('Spin', 'spin', {
  html: spinHtml,
  gulp: spinGulp,
  react: `${spinReact}\n\n<!-- SpinWrap.jsx -->\n${spinWrapReact}`,
  vue: `${spinVue}\n\n<!-- SpinWrap.vue -->\n${spinWrapVue}`,
});
export const skeletonComponentExamples = componentExamples('Skeleton', 'skeleton', {
  html: skeletonHtml,
  gulp: skeletonGulp,
  react: skeletonReact,
  vue: skeletonVue,
});
export const emptyComponentExamples = componentExamples('Empty', 'empty', {
  html: emptyHtml,
  gulp: emptyGulp,
  react: emptyReact,
  vue: emptyVue,
});

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

function alertControl(
  id: string,
  options: {
    color?: 'info' | 'success' | 'warning' | 'error';
    classes?: string;
    title?: string;
    description?: string;
    showIcon?: boolean;
    closable?: boolean;
    actions?: boolean;
  } = {},
) {
  const color = options.color ?? 'info';
  const colorClass = `color_${color}`;
  const rootClass = ['alert', colorClass, options.classes].filter(Boolean).join(' ');
  const icon =
    options.showIcon === false
      ? ''
      : `<w2:textbox id="${id}Icon" class="alert_icon" aria-hidden="true" label="●"></w2:textbox>`;
  const title = options.title
    ? `<w2:textbox id="${id}Title" class="alert_title" label="${options.title}"></w2:textbox>`
    : '';
  const description = options.description
    ? `<w2:textbox id="${id}Desc" class="alert_desc" tagname="p" label="${options.description}"></w2:textbox>`
    : '';
  const actions = options.actions
    ? `<w2:group id="${id}Actions" class="alert_actions">
  <xf:trigger id="${id}Action" type="button" class="btn btn_ghost btn_sm" ev:onclick="scwin.alert_action">
    <xf:label><![CDATA[자세히]]></xf:label>
  </xf:trigger>
</w2:group>`
    : '';
  const close = options.closable
    ? `<xf:trigger id="${id}Close" type="button" class="alert_close" ev:onclick="scwin.alert_close">
  <xf:label><![CDATA[알림 닫기]]></xf:label>
</xf:trigger>`
    : '';
  return `<w2:group id="${id}" class="${rootClass}" role="alert">
  ${icon}
  <w2:group id="${id}Body" class="alert_body">
    ${title}
    ${description}
    ${actions ? actions.replaceAll('\n', '\n    ') : ''}
  </w2:group>
  ${close ? close.replaceAll('\n', '\n  ') : ''}
</w2:group>`;
}

function alertWebSquare(key: string) {
  switch (key) {
    case 'descriptionOnly':
      return alertControl('descriptionOnly', {
        color: 'info',
        description: '변경 사항이 저장되었습니다.',
      });
    case 'noIcon':
      return alertControl('noIcon', {
        color: 'success',
        title: '완료',
        description: '요청이 처리되었습니다.',
        showIcon: false,
      });
    case 'size':
      return [
        alertControl('sizeSm', {
          classes: 'alert_sm',
          title: 'Small',
          description: '작은 알림입니다.',
        }),
        alertControl('sizeMd', {
          title: 'Medium',
          description: '기본 크기 알림입니다.',
        }),
        alertControl('sizeLg', {
          classes: 'alert_lg',
          title: 'Large',
          description: '큰 알림입니다.',
        }),
      ].join('\n\n');
    case 'closable':
      return alertControl('closable', {
        color: 'warning',
        title: '주의',
        description: '이 작업은 되돌릴 수 없습니다.',
        closable: true,
      });
    case 'actions':
      return alertControl('actions', {
        color: 'info',
        title: '업데이트 안내',
        description: '새 버전이 준비되었습니다.',
        actions: true,
        closable: true,
      });
    case 'banner':
      return alertControl('banner', {
        color: 'warning',
        classes: 'alert_banner',
        title: '시스템 점검',
        description: '오늘 밤 점검이 예정되어 있습니다.',
        closable: true,
      });
    case 'context':
      return `<w2:group id="contextForm" class="form form_vertical form_fit" tagname="form">
  ${alertControl('context', {
    color: 'error',
    title: '입력 오류',
    description: '필수 항목을 확인해 주세요.',
  }).replaceAll('\n', '\n  ')}
</w2:group>`;
    case 'basic':
    default:
      return [
        alertControl('basicInfo', {
          color: 'info',
          title: '정보',
          description: '변경 사항이 저장되었습니다.',
        }),
        alertControl('basicSuccess', {
          color: 'success',
          title: '성공',
          description: '요청이 완료되었습니다.',
        }),
        alertControl('basicWarning', {
          color: 'warning',
          title: '경고',
          description: '제한 시간을 확인해 주세요.',
        }),
        alertControl('basicError', {
          color: 'error',
          title: '오류',
          description: '다시 시도해 주세요.',
        }),
      ].join('\n\n');
  }
}

export const alertFrameworkExamples = withWebSquare('Alert', alertBaseExamples, alertWebSquare);

function snackbarControl(
  id: string,
  message: string,
  options: {
    color?: 'info' | 'success' | 'warning' | 'error';
    classes?: string;
    showIcon?: boolean;
    closable?: boolean;
    action?: boolean;
    role?: string;
  } = {},
) {
  const color = options.color ?? 'info';
  const rootClass = ['snackbar', `color_${color}`, options.classes].filter(Boolean).join(' ');
  const icon =
    options.showIcon === false
      ? ''
      : `<w2:textbox id="${id}Icon" class="snackbar_icon" aria-hidden="true" label="●"></w2:textbox>`;
  const action = options.action
    ? `<xf:trigger id="${id}Action" type="button" class="snackbar_action btn btn_ghost btn_sm" ev:onclick="scwin.snackbar_action">
  <xf:label><![CDATA[실행 취소]]></xf:label>
</xf:trigger>`
    : '';
  const close = options.closable
    ? `<xf:trigger id="${id}Close" type="button" class="snackbar_close" data-snackbar-close="true" ev:onclick="scwin.snackbar_close">
  <xf:label><![CDATA[알림 닫기]]></xf:label>
</xf:trigger>`
    : '';
  return `<w2:group id="${id}" class="${rootClass}" role="${options.role ?? 'status'}">
  ${icon}
  <w2:textbox id="${id}Message" class="snackbar_message" label="${message}"></w2:textbox>
  ${action ? action.replaceAll('\n', '\n  ') : ''}
  ${close ? close.replaceAll('\n', '\n  ') : ''}
</w2:group>`;
}

function snackbarWebSquare(key: string) {
  switch (key) {
    case 'simple':
      return snackbarControl('simple', '저장되었습니다.', { showIcon: false });
    case 'shape':
      return [
        snackbarControl('shapeDefault', '기본 모서리'),
        snackbarControl('shapeRound', '캡슐형', { classes: 'snackbar_round' }),
      ].join('\n\n');
    case 'motion':
      return [
        snackbarControl('motionFade', 'Fade', { classes: 'snackbar_motion-fade' }),
        snackbarControl('motionSlide', 'Slide', { classes: 'snackbar_motion-slide' }),
        snackbarControl('motionNone', 'None', { classes: 'snackbar_motion-none' }),
      ].join('\n\n');
    case 'size':
      return [
        snackbarControl('sizeSm', 'Small', { classes: 'snackbar_sm' }),
        snackbarControl('sizeMd', 'Medium'),
        snackbarControl('sizeLg', 'Large', { classes: 'snackbar_lg' }),
      ].join('\n\n');
    case 'action':
      return snackbarControl('action', '항목이 삭제되었습니다.', {
        color: 'success',
        action: true,
      });
    case 'closable':
      return snackbarControl('closable', '새 알림이 있습니다.', { closable: true });
    case 'duration':
      return `<w2:group id="durationRegion" class="snackbar_region snackbar_region-bottom-center">
  ${snackbarControl('duration', '3초 후 자동으로 닫힙니다.', {
    classes: 'snackbar_motion-fade',
  }).replaceAll('\n', '\n  ')}
</w2:group>
<!-- data-snackbar-duration="3000" 과 scwin.snackbar_timeout으로 자동 닫기를 연결합니다. -->`;
    case 'placement':
      return `<w2:group id="placementRegion" class="snackbar_region snackbar_region-top-right">
  ${snackbarControl('placementA', '첫 번째 알림').replaceAll('\n', '\n  ')}
  ${snackbarControl('placementB', '두 번째 알림', { color: 'success' }).replaceAll('\n', '\n  ')}
</w2:group>`;
    case 'basic':
    default:
      return [
        snackbarControl('basicInfo', '정보가 업데이트되었습니다.'),
        snackbarControl('basicSuccess', '저장이 완료되었습니다.', { color: 'success' }),
        snackbarControl('basicWarning', '연결이 불안정합니다.', { color: 'warning' }),
        snackbarControl('basicError', '요청에 실패했습니다.', {
          color: 'error',
          role: 'alert',
        }),
      ].join('\n\n');
  }
}

function modalControl(
  id: string,
  title: string,
  body: string,
  options: {
    classes?: string;
    open?: boolean;
    backdrop?: boolean;
    footer?: boolean;
    footerAlign?: string;
    triggerLabel?: string;
  } = {},
) {
  const openClass = options.open === false ? '' : ' is-open';
  const rootClass = ['modal', options.classes, openClass.trim()].filter(Boolean).join(' ');
  const backdrop =
    options.backdrop === false
      ? ''
      : `<w2:group id="${id}Backdrop" class="modal_backdrop" ev:onclick="scwin.modal_close"></w2:group>`;
  const footerAlign = options.footerAlign ? ` modal_footer-${options.footerAlign}` : '';
  const footer = options.footer
    ? `<w2:group id="${id}Footer" class="modal_footer${footerAlign}">
  <xf:trigger id="${id}Cancel" type="button" class="btn btn_ghost" ev:onclick="scwin.modal_close">
    <xf:label><![CDATA[취소]]></xf:label>
  </xf:trigger>
  <xf:trigger id="${id}Confirm" type="button" class="btn btn_filled color_primary" ev:onclick="scwin.modal_confirm">
    <xf:label><![CDATA[확인]]></xf:label>
  </xf:trigger>
</w2:group>`
    : '';
  const modal = `<w2:group id="${id}" class="${rootClass}" role="dialog" aria-modal="true" aria-labelledby="${id}Title">
  ${backdrop}
  <w2:group id="${id}Dialog" class="modal_dialog">
    <w2:group id="${id}Header" class="modal_header">
      <w2:textbox id="${id}Title" class="modal_title" tagname="h2" label="${title}"></w2:textbox>
      <xf:trigger id="${id}Close" type="button" class="modal_close" ev:onclick="scwin.modal_close">
        <xf:label><![CDATA[닫기]]></xf:label>
      </xf:trigger>
    </w2:group>
    <w2:group id="${id}Body" class="modal_body">
      <w2:textbox id="${id}BodyText" tagname="p" label="${body}"></w2:textbox>
    </w2:group>
    ${footer ? footer.replaceAll('\n', '\n    ') : ''}
  </w2:group>
</w2:group>`;
  if (!options.triggerLabel) return modal;
  return `<xf:trigger id="${id}Trigger" type="button" class="btn btn_filled color_primary" ev:onclick="scwin.modal_open">
  <xf:label><![CDATA[${options.triggerLabel}]]></xf:label>
</xf:trigger>
${modal}`;
}

function modalWebSquare(key: string) {
  switch (key) {
    case 'open':
      return modalControl('open', '알림', '로드 시 열린 상태로 표시되는 Modal입니다.', {
        open: true,
        footer: true,
      });
    case 'size':
      return [
        modalControl('sizeSm', 'Small', '좁은 너비', {
          classes: 'modal_sm',
          triggerLabel: 'Small',
        }),
        modalControl('sizeLg', 'Large', '넓은 너비', {
          classes: 'modal_lg',
          triggerLabel: 'Large',
        }),
      ].join('\n\n');
    case 'footer':
      return modalControl('footer', '새 항목 추가', '이름 입력 필드를 배치합니다.', {
        footer: true,
        triggerLabel: '새 항목 추가',
      });
    case 'footerAlign':
      return modalControl('footerAlign', '푸터 정렬', '균등 정렬 예시입니다.', {
        footer: true,
        footerAlign: 'even',
        open: true,
      });
    case 'confirm':
      return modalControl('confirm', '항목 삭제', '이 작업은 되돌릴 수 없습니다.', {
        classes: 'modal_sm',
        footer: true,
        triggerLabel: '삭제',
      });
    case 'form':
      return modalControl('form', '프로필 편집', '이름 등 폼 필드를 배치합니다.', {
        footer: true,
        triggerLabel: '프로필 편집',
      });
    case 'scroll':
      return modalControl('scroll', '이용 약관', '긴 본문은 modal_body 안에서 스크롤합니다.', {
        classes: 'modal_scrollable',
        triggerLabel: '이용 약관 보기',
      });
    case 'nested':
      return `${modalControl('nestedParent', '첫 번째 Modal', '두 번째 Modal을 엽니다.', {
        footer: true,
        triggerLabel: '첫 번째 Modal 열기',
      })}

${modalControl('nestedChild', '두 번째 Modal', '최상위 대화상자만 조작합니다.', {
  classes: 'modal_sm',
  open: true,
  footer: true,
})}`;
    case 'noBackdrop':
      return modalControl('noBackdrop', '백드롭 없음', '배경을 가리지 않습니다.', {
        classes: 'modal_sm',
        backdrop: false,
        triggerLabel: '백드롭 없이 열기',
      });
    case 'basic':
    default:
      return modalControl('basic', '알림', 'Modal 대화상자 본문입니다.', {
        footer: true,
        triggerLabel: '모달 열기',
      });
  }
}

function drawerControl(
  id: string,
  title: string,
  body: string,
  options: {
    classes?: string;
    placement?: 'left' | 'right' | 'top' | 'bottom';
    open?: boolean;
    backdrop?: boolean;
    footer?: boolean;
    footerAlign?: string;
    extra?: string;
    draggable?: boolean;
    triggerLabel?: string;
  } = {},
) {
  const placement = options.placement ?? 'right';
  const openClass = options.open === false ? '' : ' is-open';
  const rootClass = [
    'drawer',
    `drawer_placement-${placement}`,
    options.classes,
    options.draggable && 'drawer_draggable',
    openClass.trim(),
  ]
    .filter(Boolean)
    .join(' ');
  const backdrop =
    options.backdrop === false
      ? ''
      : `<w2:group id="${id}Backdrop" class="drawer_backdrop" ev:onclick="scwin.drawer_close"></w2:group>`;
  const handle = options.draggable
    ? `<w2:group id="${id}Handle" class="drawer_handle" aria-hidden="true"></w2:group>`
    : '';
  const extra = options.extra
    ? `<w2:textbox id="${id}Extra" class="tag" label="${options.extra}"></w2:textbox>`
    : '';
  const footerAlign = options.footerAlign ? ` drawer_footer-${options.footerAlign}` : '';
  const footer = options.footer
    ? `<w2:group id="${id}Footer" class="drawer_footer${footerAlign}">
  <xf:trigger id="${id}Cancel" type="button" class="btn btn_ghost" ev:onclick="scwin.drawer_close">
    <xf:label><![CDATA[취소]]></xf:label>
  </xf:trigger>
  <xf:trigger id="${id}Confirm" type="button" class="btn btn_filled color_primary" ev:onclick="scwin.drawer_confirm">
    <xf:label><![CDATA[저장]]></xf:label>
  </xf:trigger>
</w2:group>`
    : '';
  const drawer = `<w2:group id="${id}" class="${rootClass}" role="dialog" aria-modal="true" aria-labelledby="${id}Title">
  ${backdrop}
  <w2:group id="${id}Panel" class="drawer_panel">
    ${handle}
    <w2:group id="${id}Header" class="drawer_header">
      <w2:textbox id="${id}Title" class="drawer_title" tagname="h2" label="${title}"></w2:textbox>
      ${extra}
      <xf:trigger id="${id}Close" type="button" class="drawer_close" ev:onclick="scwin.drawer_close">
        <xf:label><![CDATA[닫기]]></xf:label>
      </xf:trigger>
    </w2:group>
    <w2:group id="${id}Body" class="drawer_body">
      <w2:textbox id="${id}BodyText" tagname="p" label="${body}"></w2:textbox>
    </w2:group>
    ${footer ? footer.replaceAll('\n', '\n    ') : ''}
  </w2:group>
</w2:group>`;
  if (!options.triggerLabel) return drawer;
  return `<xf:trigger id="${id}Trigger" type="button" class="btn btn_filled color_primary" ev:onclick="scwin.drawer_open">
  <xf:label><![CDATA[${options.triggerLabel}]]></xf:label>
</xf:trigger>
${drawer}`;
}

function drawerWebSquare(key: string) {
  switch (key) {
    case 'open':
      return drawerControl('open', '알림', '로드 시 열린 Drawer입니다.', { open: true });
    case 'placement':
      return drawerControl('placement', '왼쪽 패널', '왼쪽에서 열립니다.', {
        placement: 'left',
        triggerLabel: '왼쪽',
      });
    case 'size':
      return drawerControl('size', 'Large', '넓은 패널', {
        classes: 'drawer_lg',
        triggerLabel: 'Large',
      });
    case 'footer':
      return drawerControl('footer', '항목 편집', '이름 입력 필드를 배치합니다.', {
        footer: true,
        triggerLabel: '항목 편집',
      });
    case 'footerAlign':
      return drawerControl('footerAlign', '푸터 정렬', '균등 정렬 예시입니다.', {
        placement: 'bottom',
        footer: true,
        footerAlign: 'even',
        open: true,
      });
    case 'extra':
      return drawerControl('extra', '주문 #1042', '주문 상세 정보', {
        extra: '완료',
        open: true,
      });
    case 'menu':
      return drawerControl('menu', '앱 메뉴', '대시보드 · 분석 · 설정', {
        placement: 'left',
        triggerLabel: '메뉴 열기',
      });
    case 'nested':
      return `${drawerControl('nestedParent', '첫 번째 Drawer', '두 번째 Drawer를 엽니다.', {
        triggerLabel: '첫 번째 Drawer 열기',
      })}

${drawerControl('nestedChild', '두 번째 Drawer', '최상위 패널만 조작합니다.', {
  classes: 'drawer_sm',
  open: true,
})}`;
    case 'dragSheet':
      return drawerControl('dragSheet', '공유 · 액션', '하단 액션 시트입니다.', {
        placement: 'bottom',
        draggable: true,
        triggerLabel: '드래그 시트 열기',
      });
    case 'noBackdrop':
      return drawerControl('noBackdrop', '백드롭 없음', '패널만 표시합니다.', {
        classes: 'drawer_sm',
        backdrop: false,
        open: true,
      });
    case 'basic':
    default:
      return drawerControl('basic', '상세 정보', 'Drawer 패널 본문입니다.', {
        footer: true,
        triggerLabel: 'Drawer 열기',
      });
  }
}

export const snackbarFrameworkExamples = withWebSquare(
  'Snackbar',
  snackbarBaseExamples,
  snackbarWebSquare,
);
export const modalFrameworkExamples = withWebSquare('Modal', modalBaseExamples, modalWebSquare);
export const drawerFrameworkExamples = withWebSquare('Drawer', drawerBaseExamples, drawerWebSquare);

function popoverControl(
  id: string,
  label: string,
  heading: string,
  body: string,
  options: {
    classes?: string;
    open?: boolean;
    noArrow?: boolean;
    footer?: boolean;
    placement?: string;
  } = {},
) {
  const openClass = options.open ? ' is-open' : '';
  const rootClass = ['popover', options.classes, openClass.trim()].filter(Boolean).join(' ');
  const arrow = options.noArrow
    ? ''
    : `<w2:textbox id="${id}Arrow" class="popover_arrow" aria-hidden="true" label=""></w2:textbox>`;
  const footer = options.footer
    ? `<w2:group id="${id}Footer" class="popover_footer">
  <xf:trigger id="${id}Cancel" type="button" class="btn btn_ghost btn_sm" data-popover-close="true" ev:onclick="scwin.popover_close">
    <xf:label><![CDATA[취소]]></xf:label>
  </xf:trigger>
  <xf:trigger id="${id}Confirm" type="button" class="btn btn_filled btn_sm color_primary" ev:onclick="scwin.popover_confirm">
    <xf:label><![CDATA[확인]]></xf:label>
  </xf:trigger>
</w2:group>`
    : '';
  const placement = options.placement ? ` data-popover-placement="${options.placement}"` : '';
  return `<w2:group id="${id}" class="${rootClass}"${placement}>
  <xf:trigger id="${id}Trigger" type="button" class="btn btn_outline popover_trigger" aria-haspopup="dialog" aria-expanded="${options.open ? 'true' : 'false'}" aria-controls="${id}Panel" ev:onclick="scwin.popover_toggle">
    <xf:label><![CDATA[${label}]]></xf:label>
  </xf:trigger>
  <w2:group id="${id}Panel" class="popover_panel" role="dialog" aria-labelledby="${id}Heading">
    ${arrow}
    <w2:textbox id="${id}Heading" class="popover_title" tagname="h3" label="${heading}"></w2:textbox>
    <w2:textbox id="${id}Body" class="popover_body" tagname="p" label="${body}"></w2:textbox>
    ${footer ? footer.replaceAll('\n', '\n    ') : ''}
  </w2:group>
</w2:group>`;
}

function popoverWebSquare(key: string) {
  switch (key) {
    case 'noLabel':
      return popoverControl('noLabel', '라벨 없음', '', '짧은 안내 문구만 필요할 때 사용합니다.');
    case 'open':
      return popoverControl('open', '열림', '열린 Popover', '정적 데모용 열린 상태입니다.', {
        open: true,
      });
    case 'size':
      return popoverControl('size', 'Small', '작은 Popover', '작은 패널입니다.', {
        classes: 'popover_sm',
      });
    case 'offset':
      return popoverControl('offset', 'lg', 'lg', '넓은 간격', { classes: 'popover_offset-lg' });
    case 'title':
      return popoverControl(
        'title',
        '도움말',
        '배송 안내',
        '평일 오후 2시 이전 주문은 당일 출고됩니다.',
      );
    case 'footer':
      return popoverControl(
        'footer',
        '삭제 확인',
        '항목 삭제',
        '이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?',
        { footer: true },
      );
    case 'hover':
      return popoverControl(
        'hover',
        '에스크로',
        '에스크로 설명',
        '구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.',
      );
    case 'trigger':
      return popoverControl('trigger', 'Button', 'Button 트리거', '버튼 트리거 예시입니다.');
    case 'placement':
      return popoverControl('placement', '위', '위쪽 가운데 배치', '트리거 위 · 가운데', {
        placement: 'top-center',
      });
    case 'form':
      return popoverControl('form', '메모 추가', '빠른 메모', '내용 입력 필드를 배치합니다.', {
        footer: true,
      });
    case 'arrowAnchor':
      return popoverControl('arrowAnchor', 'S', 'target', '화살표가 트리거 중앙을 가리킵니다.');
    case 'noArrow':
      return popoverControl(
        'noArrow',
        '화살표 없음',
        '화살표 없는 Popover',
        '화살표가 표시되지 않는 패널입니다.',
        { noArrow: true },
      );
    case 'basic':
    default:
      return popoverControl(
        'basic',
        'Popover 열기',
        '안내',
        '트리거를 클릭하면 이 패널이 표시됩니다.',
      );
  }
}

function tooltipControl(
  id: string,
  label: string,
  content: string,
  options: {
    classes?: string;
    open?: boolean;
    noArrow?: boolean;
    inverse?: boolean;
    placement?: string;
  } = {},
) {
  const openClass = options.open ? ' is-open' : '';
  const rootClass = [
    'tooltip',
    options.inverse && 'tooltip_inverse',
    options.classes,
    openClass.trim(),
  ]
    .filter(Boolean)
    .join(' ');
  const arrow = options.noArrow
    ? ''
    : `<w2:textbox id="${id}Arrow" class="tooltip_arrow" aria-hidden="true" label=""></w2:textbox>`;
  const placement = options.placement ? ` data-tooltip-placement="${options.placement}"` : '';
  return `<w2:group id="${id}" class="${rootClass}"${placement}>
  <xf:trigger id="${id}Trigger" type="button" class="btn btn_ghost tooltip_trigger" aria-describedby="${id}Bubble" ev:onmouseover="scwin.tooltip_open" ev:onmouseout="scwin.tooltip_close">
    <xf:label><![CDATA[${label}]]></xf:label>
  </xf:trigger>
  <w2:group id="${id}Bubble" class="tooltip_bubble" role="tooltip">
    ${arrow}
    <w2:textbox id="${id}Content" class="tooltip_content" label="${content}"></w2:textbox>
  </w2:group>
</w2:group>`;
}

function tooltipWebSquare(key: string) {
  switch (key) {
    case 'slot':
      return tooltipControl('slot', '슬롯 예시', '짧은 도움말 텍스트입니다.');
    case 'open':
      return tooltipControl('open', '열림', '정적 데모용 열린 상태입니다.', { open: true });
    case 'size':
      return tooltipControl('size', 'Small', '작은 말풍선', { classes: 'tooltip_sm' });
    case 'offset':
      return tooltipControl('offset', 'lg', '넓은 간격', { classes: 'tooltip_offset-lg' });
    case 'inline':
      return tooltipControl(
        'inline',
        '에스크로',
        '구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.',
        { classes: 'tooltip_inline' },
      );
    case 'trigger':
      return tooltipControl('trigger', 'Button', '버튼 트리거 예시입니다.');
    case 'click':
      return tooltipControl('click', '클릭하여 보기', '클릭으로 열고 닫는 Tooltip입니다.');
    case 'placement':
      return tooltipControl('placement', '위', '트리거 위', { placement: 'top' });
    case 'inverse':
      return tooltipControl('inverse', '역색 Tooltip', '어두운 배경의 말풍선입니다.', {
        inverse: true,
      });
    case 'disabled':
      return tooltipControl(
        'disabled',
        '제출 불가',
        '필수 항목을 모두 입력해야 제출할 수 있습니다.',
      );
    case 'arrowAnchor':
      return tooltipControl('arrowAnchor', 'S', '화살표가 트리거 중앙을 가리킵니다.');
    case 'noArrow':
      return tooltipControl('noArrow', '화살표 없음', '화살표가 표시되지 않는 말풍선입니다.', {
        noArrow: true,
      });
    case 'basic':
    default:
      return tooltipControl('basic', '마우스 오버', '짧은 도움말 텍스트입니다.');
  }
}

function progressControl(
  id: string,
  percent: number,
  options: {
    classes?: string;
    label?: string;
    ariaLabel?: string;
    circle?: boolean;
  } = {},
) {
  const ariaLabel = options.ariaLabel ?? options.label ?? '진행률';
  if (options.circle) {
    return `<w2:group id="${id}" class="progress progress_circle${options.classes ? ` ${options.classes}` : ''}" role="progressbar" aria-label="${ariaLabel}" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100">
  <w2:textbox id="${id}Value" class="progress_circle-value" label="${percent}%"></w2:textbox>
</w2:group>`;
  }
  const header = options.label
    ? `<w2:group id="${id}Header" class="progress_header">
  <w2:textbox id="${id}Label" class="progress_label" label="${options.label}"></w2:textbox>
  <w2:textbox id="${id}Info" class="progress_info" label="${percent}%"></w2:textbox>
</w2:group>`
    : '';
  return `<w2:group id="${id}" class="progress${options.classes ? ` ${options.classes}` : ''}" role="progressbar" aria-label="${ariaLabel}" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100">
  ${header ? header.replaceAll('\n', '\n  ') : ''}
  <w2:group id="${id}Track" class="progress_track">
    <w2:group id="${id}Bar" class="progress_bar" style="width:${percent}%"></w2:group>
  </w2:group>
</w2:group>`;
}

function progressWebSquare(key: string) {
  switch (key) {
    case 'label':
      return [
        progressControl('labelUpload', 42, {
          classes: 'progress_fit color_primary',
          label: '파일 업로드',
        }),
        progressControl('labelSync', 67, {
          classes: 'progress_fit color_primary',
          label: '데이터 동기화',
        }),
      ].join('\n\n');
    case 'color':
      return [
        progressControl('colorPrimary', 50, { classes: 'progress_fit color_primary' }),
        progressControl('colorSuccess', 100, { classes: 'progress_fit color_success' }),
      ].join('\n\n');
    case 'size':
      return [
        progressControl('sizeSm', 40, { classes: 'progress_fit progress_sm color_primary' }),
        progressControl('sizeMd', 55, { classes: 'progress_fit color_primary' }),
        progressControl('sizeLg', 70, { classes: 'progress_fit progress_lg color_primary' }),
      ].join('\n\n');
    case 'striped':
      return progressControl('striped', 45, {
        classes: 'progress_fit progress_striped color_primary',
      });
    case 'indeterminate':
      return progressControl('indeterminate', 0, {
        classes: 'progress_fit color_primary is-indeterminate',
        ariaLabel: '처리 중',
      });
    case 'inside':
      return progressControl('inside', 80, {
        classes: 'progress_fit progress_inside progress_lg color_success',
      });
    case 'circle':
      return [
        progressControl('circleA', 25, { circle: true }),
        progressControl('circleB', 68, { circle: true, classes: 'color_success' }),
      ].join('\n\n');
    case 'width':
      return [
        progressControl('widthFit', 50, {
          classes: 'progress_fit color_primary',
          label: 'progress_fit',
        }),
        progressControl('widthBlock', 72, {
          classes: 'progress_block color_primary',
          label: 'progress_block — 전체 너비',
        }),
      ].join('\n\n');
    case 'basic':
    default:
      return [
        progressControl('basic0', 0, { classes: 'progress_fit' }),
        progressControl('basic30', 30, { classes: 'progress_fit' }),
        progressControl('basic60', 60, { classes: 'progress_fit' }),
        progressControl('basic100', 100, { classes: 'progress_fit color_success' }),
      ].join('\n\n');
  }
}

function spinControl(
  id: string,
  options: {
    classes?: string;
    tip?: string;
    ariaLabel?: string;
    overlay?: boolean;
  } = {},
) {
  const tip = options.tip
    ? `<w2:textbox id="${id}Tip" class="spin_tip" label="${options.tip}"></w2:textbox>`
    : '';
  const spin = `<w2:group id="${id}" class="spin${options.classes ? ` ${options.classes}` : ''}" role="status" aria-live="polite" aria-busy="true" aria-label="${options.ariaLabel ?? options.tip ?? '로딩 중'}">
  <w2:textbox id="${id}Indicator" class="spin_indicator" aria-hidden="true" label=""></w2:textbox>
  ${tip}
</w2:group>`;
  if (!options.overlay) return spin;
  return `<w2:group id="${id}Wrap" class="spin_wrap spin_wrap-block is-loading" aria-busy="true">
  <w2:group id="${id}Body" class="spin_wrap-body">
    <w2:textbox id="${id}Content" tagname="p" label="콘텐츠 영역"></w2:textbox>
  </w2:group>
  ${spin.replaceAll('\n', '\n  ')}
</w2:group>`;
}

function spinWebSquare(key: string) {
  switch (key) {
    case 'size':
      return [
        spinControl('sizeSm', { classes: 'spin_sm color_primary' }),
        spinControl('sizeMd', { classes: 'color_primary' }),
        spinControl('sizeLg', { classes: 'spin_lg color_primary' }),
      ].join('\n\n');
    case 'color':
      return [
        spinControl('colorPrimary', { classes: 'color_primary', ariaLabel: 'Primary 로딩' }),
        spinControl('colorSuccess', { classes: 'color_success', ariaLabel: 'Success 로딩' }),
      ].join('\n\n');
    case 'tip':
      return spinControl('tip', {
        classes: 'color_primary',
        tip: '데이터를 불러오는 중…',
      });
    case 'inline':
      return spinControl('inline', {
        classes: 'spin_sm spin_inline color_primary',
        tip: '저장 중…',
      });
    case 'block':
      return spinControl('block', {
        classes: 'spin_block color_primary',
        tip: '잠시만 기다려 주세요…',
      });
    case 'overlay':
      return spinControl('overlay', {
        classes: 'spin_overlay color_primary',
        tip: '데이터 로딩 중…',
        overlay: true,
      });
    case 'basic':
    default:
      return spinControl('basic', { classes: 'color_primary' });
  }
}

function skeletonControl(
  id: string,
  options: { classes?: string; avatar?: boolean; lines?: number; staticMode?: boolean } = {},
) {
  const lines = options.lines ?? 3;
  const staticClass = options.staticMode ? ' skeleton_static' : '';
  const avatar = options.avatar
    ? `<w2:group id="${id}Row" class="skeleton_row">
  <w2:textbox id="${id}Avatar" class="skeleton_circle" aria-hidden="true" label=""></w2:textbox>
  <w2:group id="${id}Texts" class="skeleton_group">
    <w2:textbox id="${id}Title" class="skeleton_title" aria-hidden="true" label=""></w2:textbox>
  </w2:group>
</w2:group>`
    : '';
  const paragraphs = Array.from(
    { length: lines },
    (_, index) =>
      `<w2:textbox id="${id}Line${index + 1}" class="skeleton_text" aria-hidden="true" label=""></w2:textbox>`,
  ).join('\n');
  return `<w2:group id="${id}" class="skeleton_group${staticClass}${options.classes ? ` ${options.classes}` : ''}" role="status" aria-live="polite" aria-busy="true" aria-label="콘텐츠 로딩 중">
  ${avatar ? avatar.replaceAll('\n', '\n  ') : ''}
  ${paragraphs.replaceAll('\n', '\n  ')}
</w2:group>`;
}

function skeletonWebSquare(key: string) {
  switch (key) {
    case 'shape':
      return [
        skeletonControl('shapeAvatar', { avatar: true, lines: 0 }),
        skeletonControl('shapeRound', { classes: 'skeleton_circle', lines: 0 }),
      ].join('\n\n');
    case 'card':
      return `<w2:group id="cardRoot" class="card card_shadow" role="status" aria-live="polite" aria-busy="true" aria-label="카드 콘텐츠 로딩 중">
  ${skeletonControl('card', { avatar: true, lines: 2 }).replaceAll('\n', '\n  ')}
</w2:group>`;
    case 'static':
      return skeletonControl('static', { lines: 3, staticMode: true });
    case 'basic':
    default:
      return skeletonControl('basic', { lines: 3 });
  }
}

function emptyControl(
  id: string,
  description: string,
  options: { classes?: string; footer?: boolean; simple?: boolean } = {},
) {
  const image = options.simple
    ? ''
    : `<w2:textbox id="${id}Image" class="empty_image" aria-hidden="true" label=""></w2:textbox>`;
  const footer = options.footer
    ? `<w2:group id="${id}Footer" class="empty_footer">
  <xf:trigger id="${id}Action" type="button" class="btn btn_filled color_primary btn_sm" ev:onclick="scwin.empty_action">
    <xf:label><![CDATA[프로젝트 만들기]]></xf:label>
  </xf:trigger>
</w2:group>`
    : '';
  return `<w2:group id="${id}" class="empty${options.classes ? ` ${options.classes}` : ''}" role="status">
  ${image}
  <w2:textbox id="${id}Desc" class="empty_desc" label="${description}"></w2:textbox>
  ${footer ? footer.replaceAll('\n', '\n  ') : ''}
</w2:group>`;
}

function emptyWebSquare(key: string) {
  switch (key) {
    case 'footer':
      return emptyControl(
        'footer',
        '등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요.',
        { footer: true },
      );
    case 'custom':
      return emptyControl('custom', '검색 결과가 없습니다. 다른 키워드로 다시 검색해 보세요.');
    case 'size':
      return [
        emptyControl('sizeSm', 'Small', { classes: 'empty_sm' }),
        emptyControl('sizeMd', 'Medium (기본)'),
        emptyControl('sizeLg', 'Large', { classes: 'empty_lg' }),
      ].join('\n\n');
    case 'simple':
      return emptyControl('simple', '일정 없음', { classes: 'empty_sm empty_simple', simple: true });
    case 'block':
      return `<w2:group id="blockCard" class="card card_shadow">
  <w2:textbox id="blockTitle" class="card_title" tagname="h3" label="알림 목록"></w2:textbox>
  ${emptyControl('block', '새 알림이 없습니다', { classes: 'empty_block' }).replaceAll('\n', '\n  ')}
</w2:group>`;
    case 'basic':
    default:
      return emptyControl('basic', '데이터가 없습니다');
  }
}

export const popoverFrameworkExamples = withWebSquare(
  'Popover',
  popoverBaseExamples,
  popoverWebSquare,
);
export const tooltipFrameworkExamples = withWebSquare(
  'Tooltip',
  tooltipBaseExamples,
  tooltipWebSquare,
);
export const progressFrameworkExamples = withWebSquare(
  'Progress',
  progressBaseExamples,
  progressWebSquare,
);
export const spinFrameworkExamples = withWebSquare('Spin', spinBaseExamples, spinWebSquare);
export const skeletonFrameworkExamples = withWebSquare(
  'Skeleton',
  skeletonBaseExamples,
  skeletonWebSquare,
);
export const emptyFrameworkExamples = withWebSquare('Empty', emptyBaseExamples, emptyWebSquare);
