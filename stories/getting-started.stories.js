import gettingStartedHtml from '../src/getting-started.html?raw';
import {
  pageBody,
  renderGuidePage,
  guidePageDocsParameters,
} from './lib/gulp-demos.js';
import { rewriteGuideHrefsForStorybook } from './lib/storybook-links.js';

const body = rewriteGuideHrefsForStorybook(pageBody(gettingStartedHtml));

export default {
  title: '설치 및 사용',
  id: 'getting-started',
  tags: ['autodocs'],
  parameters: guidePageDocsParameters(),
};

export const Page = {
  render: () => renderGuidePage(body),
};
