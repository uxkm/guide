import type { FrameworkExample } from './FrameworkCode';
const names = ['basic', 'dynamic', 'indicator', 'equal', 'layoutScroll', 'card', 'pill', 'size', 'icon', 'badge', 'extra', 'scroll', 'disabled', 'vertical'] as const;
type Name = (typeof names)[number];
type Item = { label: string; content: string; disabled?: boolean; icon?: string; badge?: string };
const iconHtml = (name: string) => `<svg class="icon tabs_icon" data-component="Icon" data-icon="${name}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${name === 'grid' ? 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z' : name === 'user' ? 'M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21a8 8 0 0 1 16 0' : 'M4 3h12l4 4v14H4zM16 3v5h5'}"></path></svg>`;
function htmlTabs(key: string, items: Item[], options: { classes?: string; label?: string; extra?: string; nav?: boolean } = {}) {
  const classes = options.classes || 'tabs_line'; const label = options.label || '탭';
  const tabs = items.map((item, index) => `<button type="button" class="tabs_tab${index === 0 ? ' is-active' : ''}${item.disabled ? ' is-disabled' : ''}" role="tab" id="${key}-tab-${index}" aria-selected="${index === 0}" aria-controls="${key}-panel-${index}"${index ? ' tabindex="-1"' : ''}${item.disabled ? ' aria-disabled="true" disabled' : ''}>${item.icon ? iconHtml(item.icon) : ''}<span class="tabs_label">${item.label}</span>${item.badge ? `<span class="tabs_badge">${item.badge}</span>` : ''}</button>`).join('');
  const panels = items.map((item, index) => `<div class="tabs_panel${index === 0 ? ' is-active' : ''}" role="tabpanel" id="${key}-panel-${index}" aria-labelledby="${key}-tab-${index}"${index ? ' hidden' : ''}>${item.content}</div>`).join('');
  const prev = options.nav ? '<button type="button" class="btn btn_outline color_default btn_icon-only tabs_nav" data-tabs-scroll="prev" aria-label="이전 탭">‹</button>' : '';
  const next = options.nav ? '<button type="button" class="btn btn_outline color_default btn_icon-only tabs_nav" data-tabs-scroll="next" aria-label="다음 탭">›</button>' : '';
  return `<div class="tabs ${classes}" data-component="Tabs" data-tabs><div class="tabs_bar">${prev}<div class="tabs_list-wrap${options.nav ? ' tabs_scroll-viewport' : ''}"><div class="tabs_list" role="tablist" aria-label="${label}">${tabs}</div></div>${next}${options.extra ? `<div class="tabs_extra">${options.extra}</div>` : ''}</div><div class="tabs_panels">${panels}</div></div>`;
}
const basicItems: Item[] = [{ label: '개요', content: '<p>프로젝트 개요와 목표를 설명하는 영역입니다.</p>' }, { label: '팀', content: '<p>팀 구성원과 역할을 표시합니다.</p>' }, { label: '활동', content: '<p>최근 활동 로그와 타임라인을 보여줍니다.</p>' }];
const longItems: Item[] = [['홈', '홈 패널'], ['제품 소개', '제품 패널'], ['솔루션', '솔루션 패널'], ['가격 정책', '가격 패널'], ['고객 사례', '고객 사례 패널'], ['리소스 센터', '리소스 패널'], ['기술 지원', '지원 패널']].map(([label, content]) => ({ label, content }));
const html: Record<Name, string> = {
  basic: htmlTabs('basic', basicItems, { label: '프로젝트 정보' }),
  dynamic: htmlTabs('dynamic', basicItems, { classes: 'tabs_line tabs_dynamic', label: '동적 탭' }),
  indicator: htmlTabs('slide-line', basicItems, { classes: 'tabs_line tabs_equal tabs_indicator-slide', label: '슬라이드 라인 탭' }) + '\n\n' + htmlTabs('slide-pill', [{ label: '목록', content: '필 스킨에서 배경 인디케이터가 이동합니다.' }, { label: '그리드', content: '그리드 뷰 콘텐츠' }, { label: '보드', content: '보드 뷰 콘텐츠' }], { classes: 'tabs_pill tabs_equal tabs_indicator-slide', label: '슬라이드 필 탭' }),
  equal: htmlTabs('equal-line', [...basicItems, { label: '설정', content: '프로젝트 설정을 관리합니다.' }], { classes: 'tabs_line tabs_equal', label: '균등 분할 탭' }) + '\n\n' + htmlTabs('equal-pill', ['일간', '주간', '월간', '연간'].map((label) => ({ label, content: `${label} 통계` })), { classes: 'tabs_pill tabs_equal tabs_indicator-slide', label: '균등 분할 필 탭' }),
  layoutScroll: htmlTabs('nav-scroll', longItems, { classes: 'tabs_line tabs_scroll-nav tabs_demo-narrow', label: '네비 스크롤 탭', nav: true }),
  card: htmlTabs('card', [{ label: '프로필', content: '<p>이름, 아바타, 소개 문구를 수정합니다.</p>' }, { label: '보안', content: '<p>비밀번호 변경과 2단계 인증을 설정합니다.</p>' }, { label: '알림', content: '<p>이메일·푸시 알림 수신 여부를 관리합니다.</p>' }], { classes: 'tabs_card', label: '계정 설정' }),
  pill: htmlTabs('pill', [{ label: '목록', content: '목록 뷰 콘텐츠' }, { label: '그리드', content: '그리드 뷰 콘텐츠' }, { label: '보드', content: '보드 뷰 콘텐츠' }], { classes: 'tabs_pill', label: '보기 모드' }),
  size: htmlTabs('small', [{ label: 'Small A', content: 'Small 탭 패널' }, { label: 'Small B', content: 'Small 탭 패널 B' }], { classes: 'tabs_line tabs_sm', label: 'Small 탭' }) + '\n\n' + htmlTabs('large', [{ label: 'Large A', content: 'Large 탭 패널' }, { label: 'Large B', content: 'Large 탭 패널 B' }], { classes: 'tabs_line tabs_lg', label: 'Large 탭' }),
  icon: htmlTabs('icon', [{ label: '대시보드', content: '대시보드 콘텐츠', icon: 'grid' }, { label: '사용자', content: '사용자 콘텐츠', icon: 'user' }, { label: '문서', content: '문서 콘텐츠', icon: 'book' }], { label: '대시보드 섹션' }),
  badge: htmlTabs('badge', [{ label: '전체', content: '전체 알림 목록' }, { label: '읽지 않음', content: '읽지 않은 알림', badge: '<span class="badge badge_count color_primary" data-component="Badge">12</span>' }, { label: '중요', content: '중요 알림', badge: '<span class="badge_dot-only color_danger" data-component="Badge" role="status" aria-label="새 중요 알림"></span>' }], { label: '알림 센터' }),
  extra: htmlTabs('extra', [{ label: '내 파일', content: '내 파일 목록' }, { label: '공유됨', content: '공유된 파일 목록' }, { label: '최근', content: '최근 파일 목록' }], { label: '파일 보기', extra: '<button type="button" class="btn btn_filled color_primary btn_sm">새 파일</button>' }),
  scroll: htmlTabs('scroll', longItems.map((item) => ({ ...item, label: item.label.replace(' 소개', '').replace(' 정책', '').replace(' 센터', '').replace('기술 ', '') })), { classes: 'tabs_line tabs_scrollable tabs_demo-narrow', label: '긴 탭 목록' }),
  disabled: htmlTabs('disabled', [{ label: '공개', content: '공개 콘텐츠' }, { label: '팀', content: '팀 전용 콘텐츠' }, { label: '관리자', content: '관리자 전용 콘텐츠', disabled: true }], { label: '권한별 탭' }),
  vertical: htmlTabs('vertical-line', [{ label: '일반', content: '일반 설정 패널' }, { label: '보안', content: '보안 설정 패널' }, { label: '결제', content: '결제 설정 패널' }], { classes: 'tabs_line tabs_vertical', label: '수직 라인 탭' }) + '\n\n' + htmlTabs('vertical-card', [{ label: '문서', content: '문서 관리 패널' }, { label: '미디어', content: '미디어 관리 패널' }, { label: '아카이브', content: '아카이브 패널' }], { classes: 'tabs_card tabs_vertical', label: '수직 카드 탭' }),
};

const p = (label: string, content: string, attrs = '') => `<TabPanel label="${label}"${attrs ? ` ${attrs}` : ''}>${content}</TabPanel>`;
const basicReact = p('개요', '<p>프로젝트 개요와 목표를 설명하는 영역입니다.</p>', 'active') + p('팀', '<p>팀 구성원과 역할을 표시합니다.</p>') + p('활동', '<p>최근 활동 로그와 타임라인을 보여줍니다.</p>');
const react: Record<Name, string> = {
  basic: `<Tabs ariaLabel="프로젝트 정보">${basicReact}</Tabs>`,
  dynamic: `<Tabs mode="dynamic" items={[{ key: 'overview', label: '개요', active: true }, { key: 'team', label: '팀' }, { key: 'activity', label: '활동' }]} ariaLabel="동적 탭" panel={({ value }) => <p>{value === 'overview' ? '프로젝트 개요와 목표를 설명하는 영역입니다.' : value === 'team' ? '팀 구성원과 역할을 표시합니다.' : '최근 활동 로그와 타임라인을 보여줍니다.'}</p>} />`,
  indicator: `<Tabs indicator="slide" layout="equal" ariaLabel="슬라이드 라인 탭">${basicReact}</Tabs>\n<Tabs variant="pill" indicator="slide" layout="equal" ariaLabel="슬라이드 필 탭">${p('목록', '필 스킨에서 배경 인디케이터가 이동합니다.', 'active')}${p('그리드', '그리드 뷰 콘텐츠')}${p('보드', '보드 뷰 콘텐츠')}</Tabs>`,
  equal: `<Tabs layout="equal" ariaLabel="균등 분할 탭">${basicReact}${p('설정', '프로젝트 설정을 관리합니다.')}</Tabs>\n<Tabs layout="equal" variant="pill" indicator="slide" ariaLabel="균등 분할 필 탭">${['일간', '주간', '월간', '연간'].map((label, index) => p(label, `${label} 통계`, index === 0 ? 'active' : '')).join('')}</Tabs>`,
  layoutScroll: `<Tabs layout="scroll" className="tabs_demo-narrow" ariaLabel="네비 스크롤 탭">${longItems.map((item, index) => p(item.label, item.content, index === 0 ? 'active' : '')).join('')}</Tabs>`,
  card: `<Tabs variant="card" ariaLabel="계정 설정">${p('프로필', '<p>이름, 아바타, 소개 문구를 수정합니다.</p>', 'active')}${p('보안', '<p>비밀번호 변경과 2단계 인증을 설정합니다.</p>')}${p('알림', '<p>이메일·푸시 알림 수신 여부를 관리합니다.</p>')}</Tabs>`,
  pill: `<Tabs variant="pill" ariaLabel="보기 모드">${p('목록', '목록 뷰 콘텐츠', 'active')}${p('그리드', '그리드 뷰 콘텐츠')}${p('보드', '보드 뷰 콘텐츠')}</Tabs>`,
  size: `<Tabs size="sm" ariaLabel="Small 탭">${p('Small A', 'Small 탭 패널', 'active')}${p('Small B', 'Small 탭 패널 B')}</Tabs>\n<Tabs size="lg" ariaLabel="Large 탭">${p('Large A', 'Large 탭 패널', 'active')}${p('Large B', 'Large 탭 패널 B')}</Tabs>`,
  icon: `<Tabs ariaLabel="대시보드 섹션">${p('대시보드', '대시보드 콘텐츠', 'active icon={<Icon name="grid" className="tabs_icon" />}')}${p('사용자', '사용자 콘텐츠', 'icon={<Icon name="user" className="tabs_icon" />}')}${p('문서', '문서 콘텐츠', 'icon={<Icon name="book" className="tabs_icon" />}')}</Tabs>`,
  badge: `<Tabs ariaLabel="알림 센터">${p('전체', '전체 알림 목록', 'active')}${p('읽지 않음', '읽지 않은 알림', 'badge={<Badge count color="primary" label="12" />}')}${p('중요', '중요 알림', 'badge={<Badge dotOnly color="danger" ariaLabel="새 중요 알림" />}')}</Tabs>`,
  extra: `<Tabs ariaLabel="파일 보기" extra={<Button variant="filled" color="primary" size="sm" label="새 파일" />}>${p('내 파일', '내 파일 목록', 'active')}${p('공유됨', '공유된 파일 목록')}${p('최근', '최근 파일 목록')}</Tabs>`,
  scroll: `<Tabs scrollable className="tabs_demo-narrow" ariaLabel="긴 탭 목록">${['홈', '제품', '솔루션', '가격', '고객 사례', '리소스', '지원'].map((label, index) => p(label, `${label} 패널`, index === 0 ? 'active' : '')).join('')}</Tabs>`,
  disabled: `<Tabs ariaLabel="권한별 탭">${p('공개', '공개 콘텐츠', 'active')}${p('팀', '팀 전용 콘텐츠')}${p('관리자', '관리자 전용 콘텐츠', 'disabled')}</Tabs>`,
  vertical: `<Tabs vertical ariaLabel="수직 라인 탭">${p('일반', '일반 설정 패널', 'active')}${p('보안', '보안 설정 패널')}${p('결제', '결제 설정 패널')}</Tabs>\n<Tabs vertical variant="card" ariaLabel="수직 카드 탭">${p('문서', '문서 관리 패널', 'active')}${p('미디어', '미디어 관리 패널')}${p('아카이브', '아카이브 패널')}</Tabs>`,
};

function vueCodeFor(key: Name) {
  if (key === 'dynamic') return `<Tabs mode="dynamic" :items="items" aria-label="동적 탭"><template #panel="{ value }"><p>{{ value === 'overview' ? '프로젝트 개요와 목표를 설명하는 영역입니다.' : value === 'team' ? '팀 구성원과 역할을 표시합니다.' : '최근 활동 로그와 타임라인을 보여줍니다.' }}</p></template></Tabs>`;
  if (key === 'icon') return `<Tabs aria-label="대시보드 섹션"><TabPanel label="대시보드" active><template #icon><Icon name="grid" class="tabs_icon" /></template>대시보드 콘텐츠</TabPanel><TabPanel label="사용자"><template #icon><Icon name="user" class="tabs_icon" /></template>사용자 콘텐츠</TabPanel><TabPanel label="문서"><template #icon><Icon name="book" class="tabs_icon" /></template>문서 콘텐츠</TabPanel></Tabs>`;
  if (key === 'badge') return `<Tabs aria-label="알림 센터"><TabPanel label="전체" active>전체 알림 목록</TabPanel><TabPanel label="읽지 않음"><template #badge><Badge count color="primary" label="12" /></template>읽지 않은 알림</TabPanel><TabPanel label="중요"><template #badge><Badge dot-only color="danger" aria-label="새 중요 알림" /></template>중요 알림</TabPanel></Tabs>`;
  if (key === 'extra') return `<Tabs aria-label="파일 보기"><template #extra><Button variant="filled" color="primary" size="sm" label="새 파일" /></template>${p('내 파일', '내 파일 목록', 'active')}${p('공유됨', '공유된 파일 목록')}${p('최근', '최근 파일 목록')}</Tabs>`;
  return react[key].replaceAll('ariaLabel=', 'aria-label=').replaceAll('className=', 'class=');
}
function examples(key: Name): FrameworkExample[] {
  const needsIcon = key === 'icon'; const needsBadge = key === 'badge'; const needsButton = key === 'extra';
  const rImports = [`import { Tabs, TabPanel, TabMenu } from '@uxkm/react/tabs';`, needsIcon && `import Icon from '@uxkm/react/icon';`, needsBadge && `import Badge from '@uxkm/react/badge';`, needsButton && `import Button from '@uxkm/react/button';`].filter(Boolean).join('\n');
  const vImports = [`import { Tabs, TabPanel, TabMenu } from '@uxkm/vue/tabs';`, needsIcon && `import Icon from '@uxkm/vue/icon';`, needsBadge && `import Badge from '@uxkm/vue/badge';`, needsButton && `import Button from '@uxkm/vue/button';`, key === 'dynamic' && `const items = [{ key: 'overview', label: '개요', active: true }, { key: 'team', label: '팀' }, { key: 'activity', label: '활동' }];`].filter(Boolean).join('\n');
  const rCode = `${rImports}\n\nexport function Example() { return <>${react[key]}</>; }`;
  const vCode = `<script setup>\n${vImports}\n</script>\n<template>\n${vueCodeFor(key)}\n</template>`;
  return [{ id: 'html', label: 'HTML', fileName: `Tabs.html · ${key}`, code: html[key] }, { id: 'gulp', label: 'Gulp', fileName: `tabs.njk · ${key}`, code: html[key] }, { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/tabs · ${key}`, code: vCode }, { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/tabs · ${key}`, code: vCode }, { id: 'react', label: 'React', fileName: `@uxkm/react/tabs · ${key}`, code: rCode }, { id: 'next', label: 'Next', fileName: `@uxkm/react/tabs · ${key}`, code: rCode }];
}
export const tabsFrameworkExamples = Object.fromEntries(names.map((key) => [key, examples(key)])) as Record<Name, FrameworkExample[]>;
