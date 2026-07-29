import introHtml from '../src/index.html?raw';
import {
  pageBody,
  renderGuidePage,
  guidePageDocsParameters,
} from './lib/gulp-demos.js';
import { rewriteGuideHrefsForStorybook } from './lib/storybook-links.js';

const body = rewriteGuideHrefsForStorybook(pageBody(introHtml));

export default {
  title: '소개',
  id: 'intro',
  tags: ['autodocs'],
  parameters: guidePageDocsParameters(),
};

export const Page = {
  render: () => renderGuidePage(body),
};
