import { create } from 'storybook/theming';

const brandLogoPath = './uxkm-logo.png';

/** Storybook Manager(좌측 사이드바) — 항상 다크 */
export const managerDarkTheme = create({
  base: 'dark',
  brandTitle: `<span class="sb-brand"><span class="sb-brand-logo-wrap"><img src="${brandLogoPath}" alt="UXKM" /></span><span class="sb-brand-text">Guide</span></span>`,
  brandImage: null,
  brandUrl: '/',
  colorPrimary: '#7aa3f5',
  colorSecondary: '#7aa3f5',
  appBg: '#0f1419',
  appContentBg: '#1a2332',
  appBorderColor: '#637a96',
  appBorderRadius: 8,
  textColor: '#e7ecf3',
  textInverseColor: '#1a2332',
  textMutedColor: '#a8b8cf',
  barTextColor: '#a8b8cf',
  barSelectedColor: '#7aa3f5',
  barHoverColor: '#9bb8ff',
  barBg: '#1a2332',
  inputBg: '#212d3f',
  inputBorder: '#637a96',
  inputTextColor: '#e7ecf3',
  booleanBg: '#212d3f',
  booleanSelectedBg: '#386bc0',
});
