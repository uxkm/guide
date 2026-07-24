/**
 * Storybook — Docs · Canvas 렌더 (React)
 */
import React from 'react';

/** Docs: 정적 예시 / Canvas: Controls 연동 args */
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

    if (Component && docs) {
      return (
        <div className="sb-demo-layout sb-demo-layout_stack">
          {docs}
          <Component {...context.args} />
        </div>
      );
    }

    if (Component) {
      return <Component {...context.args} />;
    }

    return docs;
  };
}

/** 단일 컴포넌트 — args를 props로 전달 */
export function bindComponent(Component) {
  return (_args, context) => <Component {...context.args} />;
}

/** Playground 기본 args 복사 */
export function storyArgs(playgroundArgs, overrides = {}) {
  return { ...playgroundArgs, ...overrides };
}
