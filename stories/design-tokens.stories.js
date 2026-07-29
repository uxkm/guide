import designTokensHtml from '../src/design-tokens.html?raw';
import {
  pageBody,
  renderGuidePage,
  guidePageDocsParameters,
} from './lib/gulp-demos.js';
import { rewriteGuideHrefsForStorybook } from './lib/storybook-links.js';

const body = rewriteGuideHrefsForStorybook(pageBody(designTokensHtml));

export default {
  title: '디자인 토큰',
  id: 'design-tokens',
  tags: ['autodocs'],
  parameters: guidePageDocsParameters(),
};

export const Page = {
  render: () => renderGuidePage(body),
};
