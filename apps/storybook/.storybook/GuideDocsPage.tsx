import React, { useContext } from 'react';
import {
  Description,
  DocsContext,
  DocsStory,
  Subtitle,
  Title,
  useOf,
} from '@storybook/addon-docs/blocks';
import * as DesignTokensStories from '../stories/design-tokens.stories';
import * as GettingStartedStories from '../stories/getting-started.stories';
import * as IntroStories from '../stories/intro.stories';
import { ComponentApiDocs } from './ComponentApiDocs';

const GUIDE_PAGE_STORIES = {
  intro: IntroStories.Page,
  'getting-started': GettingStartedStories.Page,
  'design-tokens': DesignTokensStories.Page,
} as const;

type GuidePageId = keyof typeof GUIDE_PAGE_STORIES;

/** preview iframe(?id=) 또는 manager(?path=/docs/)에서 현재 Docs 엔트리 id */
function getActiveDocsEntryId(): string {
  if (typeof window === 'undefined') return '';

  const iframeId = new URLSearchParams(window.location.search).get('id');
  if (iframeId) return iframeId;

  try {
    const path = new URLSearchParams(window.parent?.location?.search ?? '').get('path') ?? '';
    const match = path.match(/\/docs\/(.+)$/);
    return match?.[1] ?? '';
  } catch {
    return '';
  }
}

function useCurrentStory() {
  const docsContext = useContext(DocsContext);
  try {
    return docsContext.storyById();
  } catch {
    return null;
  }
}

function getStoriesFromMeta(
  docsContext: React.ContextType<typeof DocsContext>,
  csfFile: ReturnType<typeof useOf<'meta'>>['csfFile'],
) {
  if (!csfFile) return [];
  return docsContext.componentStoriesFromCSFFile(csfFile);
}

function findPlaygroundStory(
  stories: ReturnType<typeof getStoriesFromMeta>,
) {
  return (
    stories.find((story) => story.exportName === 'Playground' || story.name === 'Playground') ??
    stories[0] ??
    null
  );
}

function getExampleStories(stories: ReturnType<typeof getStoriesFromMeta>) {
  return stories.filter((story) => {
    const name = story.exportName ?? story.name;
    return name !== 'Playground';
  });
}

export function GuideDocsPage() {
  const docsContext = useContext(DocsContext);
  const meta = useOf('meta');
  const currentStory = useCurrentStory();
  const apiSections = meta.preparedMeta?.parameters?.apiSections ?? [];
  const allStories = getStoriesFromMeta(docsContext, meta.csfFile);

  const metaId = meta.preparedMeta?.id ?? '';
  const guidePageStory =
    metaId in GUIDE_PAGE_STORIES
      ? GUIDE_PAGE_STORIES[metaId as GuidePageId]
      : undefined;
  const isGuidePage = Boolean(guidePageStory);

  const docsEntryId = getActiveDocsEntryId();
  const isComponentDocs = docsEntryId.endsWith('--docs');
  const playgroundStory = findPlaygroundStory(allStories);
  const playgroundExport = playgroundStory?.moduleExport;
  const exampleStories = isComponentDocs ? getExampleStories(allStories) : [];

  return (
    <>
      <Title />
      <Subtitle />
      <Description of="meta" />
      {!isComponentDocs && currentStory ? <Description of="story" /> : null}

      {isGuidePage && guidePageStory ? (
        <DocsStory of={guidePageStory} expanded={false} withToolbar={false} />
      ) : isComponentDocs ? (
        <>
          {playgroundExport ? (
            <DocsStory of={playgroundExport} expanded={false} withToolbar />
          ) : null}
          {exampleStories.length > 0 ? (
            <div className="sb-docs-stories">
              {exampleStories.map((story) =>
                story.moduleExport ? (
                  <DocsStory
                    key={story.id}
                    of={story.moduleExport}
                    expanded
                    withToolbar
                  />
                ) : null,
              )}
            </div>
          ) : null}
        </>
      ) : currentStory?.moduleExport ? (
        <DocsStory of={currentStory.moduleExport} expanded={false} withToolbar />
      ) : null}

      {apiSections.length > 0 ? <ComponentApiDocs sections={apiSections} /> : null}
    </>
  );
}
