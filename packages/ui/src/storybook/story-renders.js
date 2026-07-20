/**
 * Storybook — Docs · Canvas 렌더
 *
 * Docs: 가이드와 동일한 정적 예시
 * Canvas: 정적 예시 + Controls로 조작하는 컴포넌트
 */
import { computed, h } from 'vue';

/** Controls 변경 추적용 args — 템플릿에서 v-bind="args" */
export function storyArgsRef(context) {
  return computed(() => context.args);
}

/**
 * @param {(() => object) | object} docsRender Docs·예시용 정적 렌더
 * @param {((args, context) => object) | object} [canvasRender] Canvas 전용(없으면 예시+Controls 컴포넌트)
 */
export function withDocsCanvasRender(docsRender, canvasRender) {
  return (args, context) => {
    const getDocs = () => (typeof docsRender === 'function' ? docsRender() : docsRender);

    if (context.viewMode === 'docs') {
      return getDocs();
    }

    if (canvasRender) {
      return typeof canvasRender === 'function' ? canvasRender(args, context) : canvasRender;
    }

    const docs = getDocs();
    const Component = context.component;

    // Canvas: 좌측 메뉴 예시(정적) 유지 + 하단 Controls로 조작할 컴포넌트
    if (Component && docs?.template) {
      const docsSetup = docs.setup;
      return {
        components: { ...(docs.components || {}), Component },
        setup() {
          const docsBindings = typeof docsSetup === 'function' ? docsSetup() ?? {} : {};
          return { ...docsBindings, args: storyArgsRef(context) };
        },
        template: `<div class="sb-demo-layout sb-demo-layout_stack">${docs.template}<Component v-bind="args" /></div>`,
      };
    }

    if (Component) {
      return () => h(Component, context.args);
    }

    return docs;
  };
}

/** 단일 컴포넌트 — Storybook 기본 render 패턴(함수형 VNode) */
export function bindComponent(Component, template) {
  if (template) {
    return (_args, context) => ({
      components: { Component },
      setup() {
        return { args: storyArgsRef(context) };
      },
      template,
    });
  }
  return (_args, context) => () => h(Component, context.args);
}

/** 여러 컴포넌트 + 슬롯/래퍼가 있는 Canvas 템플릿 */
export function bindArgsTemplate(components, template) {
  return (_args, context) => ({
    components,
    setup() {
      return { args: storyArgsRef(context) };
    },
    template,
  });
}

/** Playground 기본 args 복사 */
export function storyArgs(playgroundArgs, overrides = {}) {
  return { ...playgroundArgs, ...overrides };
}
