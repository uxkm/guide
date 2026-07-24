#!/usr/bin/env node
/**
 * React Storybook 사이드바용 플레이스홀더 스토리 생성
 * component-groups.js(STORY_GROUPS)와 동일한 메뉴 구조를 유지합니다.
 *
 * 사용: node scripts/generate-react-placeholder-stories.mjs
 */
import { existsSync, mkdirSync, readdirSync, unlinkSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { STORY_GROUPS, getStoryId, getStoryTitle } from '../packages/ui/src/data/component-groups.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uiReactRoot = path.resolve(__dirname, '../packages/ui-react/src');
const componentsDir = path.join(uiReactRoot, 'components');
const placeholdersDir = path.join(uiReactRoot, 'stories/placeholders');

function buildPlaceholderStory(componentName) {
  const title = getStoryTitle(componentName);
  const id = getStoryId(componentName);

  return `import React from 'react';
import { ComingSoon } from '../../storybook/ComingSoon.jsx';

export default {
  title: '${title}',
  id: '${id}',
  component: ComingSoon,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      description: {
        component: '${componentName} 컴포넌트 — React 마이그레이션 예정입니다.',
      },
    },
  },
};

export const Playground = {
  render: () => <ComingSoon name="${componentName}" />,
};
`;
}

function getRealStoryComponents() {
  if (!existsSync(componentsDir)) return new Set();
  return new Set(
    readdirSync(componentsDir)
      .filter((file) => file.endsWith('.stories.jsx'))
      .map((file) => file.replace('.stories.jsx', '')),
  );
}

mkdirSync(placeholdersDir, { recursive: true });

const realStories = getRealStoryComponents();
const allComponents = Object.values(STORY_GROUPS).flat();
const expectedPlaceholders = new Set(
  allComponents.filter((name) => !realStories.has(name)),
);

if (existsSync(placeholdersDir)) {
  for (const file of readdirSync(placeholdersDir)) {
    if (!file.endsWith('.stories.jsx')) continue;
    const name = file.replace('.stories.jsx', '');
    const filePath = path.join(placeholdersDir, file);
    if (!expectedPlaceholders.has(name)) {
      unlinkSync(filePath);
      console.log('Removed (real story exists):', filePath);
    }
  }
}

let generated = 0;
for (const name of allComponents) {
  if (realStories.has(name)) continue;
  const outPath = path.join(placeholdersDir, `${name}.stories.jsx`);
  writeFileSync(outPath, buildPlaceholderStory(name));
  generated += 1;
}

console.log(`React placeholder stories: ${generated} files in ${placeholdersDir}`);
