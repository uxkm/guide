import React from 'react';
import { useOf } from '@storybook/addon-docs/blocks';
import { formatDocDescription } from '@uxkm/ui/utils/format-doc-description';

type ResolvedOf = ReturnType<typeof useOf>;

function getDescriptionText(resolvedOf: ResolvedOf): string | null {
  switch (resolvedOf.type) {
    case 'story':
      return resolvedOf.story.parameters.docs?.description?.story || null;
    case 'meta': {
      const { parameters, component } = resolvedOf.preparedMeta;
      const metaDescription = parameters.docs?.description?.component;
      return (
        metaDescription ||
        parameters.docs?.extractComponentDescription?.(component, {
          component,
          parameters,
        }) ||
        null
      );
    }
    case 'component': {
      const {
        component,
        projectAnnotations: { parameters },
      } = resolvedOf;
      return (
        parameters?.docs?.extractComponentDescription?.(component, {
          component,
          parameters,
        }) || null
      );
    }
    default:
      return null;
  }
}

type GuideDescriptionProps = {
  /** Storybook Description과 동일 — meta · story · 스토리 export */
  of?: Parameters<typeof useOf>[0];
  /** API 섹션 등 외부에서 직접 전달하는 설명 */
  text?: string | null;
  className?: string;
};

/** 가이드 공통 — 설명 내 클래스·태그명에 typo_code 스타일 적용 */
export function GuideDescription({ of, text, className }: GuideDescriptionProps) {
  const resolvedOf = useOf(of ?? 'meta');
  const sourceText = text ?? getDescriptionText(resolvedOf);

  if (!sourceText) return null;

  return (
    <p
      className={['sb-guide-description', className].filter(Boolean).join(' ')}
      dangerouslySetInnerHTML={{ __html: formatDocDescription(sourceText) }}
    />
  );
}
