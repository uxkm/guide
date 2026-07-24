import React from 'react';
import { Anchor, Canvas, Subheading, useOf } from '@storybook/addon-docs/blocks';
import { GuideDescription } from './GuideDescription';

type GuideDocsStoryProps = {
  of: NonNullable<Parameters<typeof useOf>[0]>;
  expanded?: boolean;
  withToolbar?: boolean;
  __forceInitialArgs?: boolean;
  __primary?: boolean;
};

/** DocsStory — 설명에 formatDocDescription 공통 적용 */
export function GuideDocsStory({
  of,
  expanded = true,
  withToolbar: withToolbarProp = false,
  __forceInitialArgs = false,
  __primary = false,
}: GuideDocsStoryProps) {
  const { story } = useOf(of || 'story', ['story']);
  const withToolbar = story.parameters.docs?.canvas?.withToolbar ?? withToolbarProp;

  return (
    <Anchor storyId={__primary ? `primary--${story.id}` : story.id}>
      {expanded ? (
        <>
          <Subheading>{story.name}</Subheading>
          <GuideDescription of={of} />
        </>
      ) : null}
      <Canvas
        of={of}
        withToolbar={withToolbar}
        story={{ __forceInitialArgs, __primary }}
        source={{ __forceInitialArgs }}
      />
    </Anchor>
  );
}
