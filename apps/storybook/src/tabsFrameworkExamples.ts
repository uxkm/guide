import type { FrameworkExample } from './FrameworkCode';
const names = ['basic', 'dynamic', 'indicator', 'equal', 'layoutScroll', 'card', 'pill', 'size', 'icon', 'badge', 'extra', 'scroll', 'disabled', 'vertical', 'example'] as const;
type Name = (typeof names)[number];
type Item = { label: string; content: string; disabled?: boolean; icon?: string; badge?: string; closable?: boolean };
const iconHtml = (name: string) => `<svg class="icon tabs_icon" data-component="Icon" data-icon="${name}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${name === 'grid' ? 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z' : name === 'user' ? 'M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21a8 8 0 0 1 16 0' : name === 'close' ? 'm6 6 12 12M18 6 6 18' : 'M4 3h12l4 4v14H4zM16 3v5h5'}"></path></svg>`;
function htmlTabs(key: string, items: Item[], options: { classes?: string; label?: string; extra?: string; nav?: boolean } = {}) {
  const classes = options.classes || 'tabs_line'; const label = options.label || '탭';
  const tabs = items.map((item, index) => {
    const tabButton = `<button type="button" class="tabs_tab${index === 0 ? ' is-active' : ''}${item.disabled ? ' is-disabled' : ''}" role="tab" id="${key}-tab-${index}" aria-selected="${index === 0}" aria-controls="${key}-panel-${index}"${index ? ' tabindex="-1"' : ''}${item.disabled ? ' aria-disabled="true" disabled' : ''}>${item.icon ? iconHtml(item.icon) : ''}<span class="tabs_label">${item.label}</span>${item.badge ? `<span class="tabs_badge">${item.badge}</span>` : ''}</button>`;
    if (!item.closable) return tabButton;
    return `<span class="tabs_item${index === 0 ? ' is-active' : ''}">${tabButton}<button type="button" class="tabs_close" data-tabs-close aria-label="${item.label} 닫기" tabindex="-1">${iconHtml('close')}</button></span>`;
  }).join('');
  const panels = items.map((item, index) => `<div class="tabs_panel${index === 0 ? ' is-active' : ''}" role="tabpanel" id="${key}-panel-${index}" aria-labelledby="${key}-tab-${index}"${index ? ' hidden' : ''}>${item.content}</div>`).join('');
  const prev = options.nav ? '<button type="button" class="btn btn_outline color_default btn_icon-only tabs_nav" data-tabs-scroll="prev" aria-label="이전 탭">‹</button>' : '';
  const next = options.nav ? '<button type="button" class="btn btn_outline color_default btn_icon-only tabs_nav" data-tabs-scroll="next" aria-label="다음 탭">›</button>' : '';
  return `<div class="tabs ${classes}" data-component="Tabs" data-tabs><div class="tabs_bar">${prev}<div class="tabs_list-wrap${options.nav ? ' tabs_scroll-viewport' : ''}"><div class="tabs_list" role="tablist" aria-label="${label}">${tabs}</div></div>${next}${options.extra ? `<div class="tabs_extra">${options.extra}</div>` : ''}</div><div class="tabs_panels">${panels}</div></div>`;
}
const editableItems: Item[] = [
  { label: 'UI/UX 스타일 가이드', content: '<h3>타이틀</h3><p>스타일 가이드 예시 화면입니다.</p>', closable: true },
  { label: 'UI 진행 현황', content: '<h3>타이틀</h3><p>UI 진행 현황 예시 화면입니다.</p>', closable: true },
  { label: '레이아웃 유형', content: '<h3>타이틀</h3><p>레이아웃 유형 예시 화면입니다.</p>', closable: true },
];
const editableExtra = `<div class="tabs_demo-editable-controls"><button type="button" class="btn btn_outline color_default btn_icon-only tabs_nav" aria-label="이전 탭">‹</button><button type="button" class="btn btn_outline color_default btn_icon-only tabs_nav" aria-label="열린 탭 목록" aria-haspopup="menu">≡</button><button type="button" class="btn btn_outline color_default btn_icon-only tabs_nav" aria-label="다음 탭">›</button></div>`;
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
  example: `<div class="tabs_demo-editable">
  <nav class="menu menu_vertical menu_bordered menu_compact" aria-label="예시 추가 메뉴">
    <ul class="menu_list">
      <li class="menu_group"><span class="menu_group-title">예시 추가</span></li>
      <li class="menu_item"><button type="button" class="menu_link"><span class="menu_label">UI/UX 스타일 가이드</span></button></li>
      <li class="menu_item"><button type="button" class="menu_link"><span class="menu_label">UI 진행 현황</span></button></li>
      <li class="menu_item"><button type="button" class="menu_link is-active"><span class="menu_label">레이아웃 유형</span></button></li>
      <li class="menu_item"><button type="button" class="menu_link"><span class="menu_label">폼 유형</span></button></li>
      <li class="menu_item"><button type="button" class="menu_link"><span class="menu_label">차트 유형</span></button></li>
    </ul>
  </nav>
  ${htmlTabs('editable', editableItems, { classes: 'tabs_card tabs_scroll-nav tabs_demo-editable-tabs', label: '열린 예시 탭', extra: editableExtra, nav: true })}
</div>`,
};

type GulpTabsOptions = {
  variant?: 'line' | 'card' | 'pill'; size?: 'sm' | 'lg'; layout?: 'equal' | 'scroll';
  vertical?: boolean; scrollable?: boolean; indicator?: 'slide'; mode?: 'dynamic';
  ariaLabel?: string; className?: string; imports?: string; prelude?: string; extra?: string;
};
const gulpTabsImport = `{% from "components/navigation/Tabs/tabs.njk" import tabs, tab, tabPanel %}`;
function gulpTabs(key: string, items: Item[], options: GulpTabsOptions = {}) {
  const tabsCode = items.map((item, index) => {
    const badge = item.badge ? `, badge=${item.label === '읽지 않음' ? 'unreadBadge' : 'importantBadge'}` : '';
    return `  {{ tab(id='${key}-tab-${index}', panelId='${key}-panel-${index}', label='${item.label}'${index === 0 ? ', active=true' : ''}${item.disabled ? ', disabled=true' : ''}${item.closable ? ', closable=true' : ''}${item.icon ? `, icon='${item.icon}'` : ''}${badge}) }}`;
  }).join('\n');
  const panelsCode = items.map((item, index) => `  {% call tabPanel(id='${key}-panel-${index}', tabId='${key}-tab-${index}'${index === 0 ? ', active=true' : ''}) %}${item.content}{% endcall %}`).join('\n');
  const args = [
    `tabs=tabItems`, `panels=tabPanels`,
    options.variant && `variant='${options.variant}'`, options.size && `size='${options.size}'`,
    options.layout && `layout='${options.layout}'`, options.vertical && 'vertical=true',
    options.scrollable && 'scrollable=true', options.indicator && `indicator='${options.indicator}'`,
    options.mode && `mode='${options.mode}'`, options.ariaLabel && `ariaLabel='${options.ariaLabel}'`,
    options.className && `className='${options.className}'`, options.extra && `extra=${options.extra}`,
  ].filter(Boolean).join(', ');
  return `${gulpTabsImport}${options.imports ? `\n${options.imports}` : ''}${options.prelude ? `\n\n${options.prelude}` : ''}

{% set tabItems %}
${tabsCode}
{% endset %}
{% set tabPanels %}
${panelsCode}
{% endset %}
{{ tabs(${args}) }}`;
}
const gulp: Record<Name, string> = {
  basic: gulpTabs('basic', basicItems, { ariaLabel: '프로젝트 정보' }),
  dynamic: gulpTabs('dynamic', basicItems, { mode: 'dynamic', ariaLabel: '동적 탭' }),
  indicator: gulpTabs('slide-line', basicItems, { layout: 'equal', indicator: 'slide', ariaLabel: '슬라이드 라인 탭' }) + '\n\n' + gulpTabs('slide-pill', [{ label: '목록', content: '필 스킨에서 배경 인디케이터가 이동합니다.' }, { label: '그리드', content: '그리드 뷰 콘텐츠' }, { label: '보드', content: '보드 뷰 콘텐츠' }], { variant: 'pill', layout: 'equal', indicator: 'slide', ariaLabel: '슬라이드 필 탭' }),
  equal: gulpTabs('equal-line', [...basicItems, { label: '설정', content: '프로젝트 설정을 관리합니다.' }], { layout: 'equal', ariaLabel: '균등 분할 탭' }) + '\n\n' + gulpTabs('equal-pill', ['일간', '주간', '월간', '연간'].map((label) => ({ label, content: `${label} 통계` })), { variant: 'pill', layout: 'equal', indicator: 'slide', ariaLabel: '균등 분할 필 탭' }),
  layoutScroll: gulpTabs('nav-scroll', longItems, { layout: 'scroll', className: 'tabs_demo-narrow', ariaLabel: '네비 스크롤 탭' }),
  card: gulpTabs('card', [{ label: '프로필', content: '<p>이름, 아바타, 소개 문구를 수정합니다.</p>' }, { label: '보안', content: '<p>비밀번호 변경과 2단계 인증을 설정합니다.</p>' }, { label: '알림', content: '<p>이메일·푸시 알림 수신 여부를 관리합니다.</p>' }], { variant: 'card', ariaLabel: '계정 설정' }),
  pill: gulpTabs('pill', [{ label: '목록', content: '목록 뷰 콘텐츠' }, { label: '그리드', content: '그리드 뷰 콘텐츠' }, { label: '보드', content: '보드 뷰 콘텐츠' }], { variant: 'pill', ariaLabel: '보기 모드' }),
  size: gulpTabs('small', [{ label: 'Small A', content: 'Small 탭 패널' }, { label: 'Small B', content: 'Small 탭 패널 B' }], { size: 'sm', ariaLabel: 'Small 탭' }) + '\n\n' + gulpTabs('large', [{ label: 'Large A', content: 'Large 탭 패널' }, { label: 'Large B', content: 'Large 탭 패널 B' }], { size: 'lg', ariaLabel: 'Large 탭' }),
  icon: gulpTabs('icon', [{ label: '대시보드', content: '대시보드 콘텐츠', icon: 'grid' }, { label: '사용자', content: '사용자 콘텐츠', icon: 'user' }, { label: '문서', content: '문서 콘텐츠', icon: 'book' }], { ariaLabel: '대시보드 섹션' }),
  badge: gulpTabs('badge', [{ label: '전체', content: '전체 알림 목록' }, { label: '읽지 않음', content: '읽지 않은 알림', badge: 'badge' }, { label: '중요', content: '중요 알림', badge: 'badge' }], { ariaLabel: '알림 센터', imports: `{% from "components/data-display/Badge/badge.njk" import badge %}`, prelude: `{% set unreadBadge %}{{ badge(count=true, color='primary', label='12') }}{% endset %}\n{% set importantBadge %}{{ badge(dotOnly=true, color='danger', ariaLabel='새 중요 알림') }}{% endset %}` }),
  extra: gulpTabs('extra', [{ label: '내 파일', content: '내 파일 목록' }, { label: '공유됨', content: '공유된 파일 목록' }, { label: '최근', content: '최근 파일 목록' }], { ariaLabel: '파일 보기', imports: `{% from "components/basic/Button/button.njk" import button %}`, prelude: `{% set tabsExtra %}{{ button(variant='filled', color='primary', size='sm', label='새 파일') }}{% endset %}`, extra: 'tabsExtra' }),
  scroll: gulpTabs('scroll', longItems.map((item) => ({ ...item, label: item.label.replace(' 소개', '').replace(' 정책', '').replace(' 센터', '').replace('기술 ', '') })), { scrollable: true, className: 'tabs_demo-narrow', ariaLabel: '긴 탭 목록' }),
  disabled: gulpTabs('disabled', [{ label: '공개', content: '공개 콘텐츠' }, { label: '팀', content: '팀 전용 콘텐츠' }, { label: '관리자', content: '관리자 전용 콘텐츠', disabled: true }], { ariaLabel: '권한별 탭' }),
  vertical: gulpTabs('vertical-line', [{ label: '일반', content: '일반 설정 패널' }, { label: '보안', content: '보안 설정 패널' }, { label: '결제', content: '결제 설정 패널' }], { vertical: true, ariaLabel: '수직 라인 탭' }) + '\n\n' + gulpTabs('vertical-card', [{ label: '문서', content: '문서 관리 패널' }, { label: '미디어', content: '미디어 관리 패널' }, { label: '아카이브', content: '아카이브 패널' }], { variant: 'card', vertical: true, ariaLabel: '수직 카드 탭' }),
  example: `{% from "components/navigation/Menu/menu.njk" import menu, menuItem, menuGroup %}
{% from "components/basic/Button/button.njk" import button %}

{% set tabsExtra %}
  <div class="tabs_demo-editable-controls">
    {{ button(variant='outline', color='default', size='sm', iconOnly=true, iconBefore='chevron-left', ariaLabel='이전 탭', className='tabs_nav') }}
    {{ button(variant='outline', color='default', size='sm', iconOnly=true, iconBefore='menu', ariaLabel='열린 탭 목록', className='tabs_nav') }}
    {{ button(variant='outline', color='default', size='sm', iconOnly=true, iconBefore='chevron-right', ariaLabel='다음 탭', className='tabs_nav') }}
  </div>
{% endset %}

<div class="tabs_demo-editable">
  {% call menu(mode='vertical', bordered=true, compact=true, selectable=false, ariaLabel='예시 추가 메뉴') %}
    {{ menuGroup(title='예시 추가') }}
    {{ menuItem(label='UI/UX 스타일 가이드') }}
    {{ menuItem(label='UI 진행 현황') }}
    {{ menuItem(label='레이아웃 유형', active=true) }}
    {{ menuItem(label='폼 유형') }}
    {{ menuItem(label='차트 유형') }}
  {% endcall %}
${gulpTabs('editable', editableItems, { variant: 'card', layout: 'scroll', className: 'tabs_demo-editable-tabs', ariaLabel: '열린 예시 탭', extra: 'tabsExtra' })}
</div>`,
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
  example: `function EditableTabsExample({ maxTabs: maxTabsProp = 4 } = {}) {
  const catalog = [
    { key: 'style', label: 'UI/UX 스타일 가이드', body: '스타일 가이드 예시 화면입니다.' },
    { key: 'progress', label: 'UI 진행 현황', body: 'UI 진행 현황 예시 화면입니다.' },
    { key: 'layout', label: '레이아웃 유형', body: '레이아웃 유형 예시 화면입니다.' },
    { key: 'form', label: '폼 유형', body: '폼 유형 예시 화면입니다.' },
    { key: 'chart', label: '차트 유형', body: '차트 유형 예시 화면입니다.' },
  ];
  const [maxTabs, setMaxTabs] = useState(maxTabsProp);
  const [openKeys, setOpenKeys] = useState(['style', 'progress', 'layout']);
  const [active, setActive] = useState('layout');
  const [limitOpen, setLimitOpen] = useState(false);
  const pages = openKeys.map((key) => catalog.find((page) => page.key === key)).filter(Boolean);
  const items = pages.map((page) => ({ key: page.key, label: page.label, closable: true, content: <p>{page.body}</p> }));
  const addTab = (key) => {
    if (openKeys.includes(key)) { setActive(key); return; }
    if (openKeys.length >= maxTabs) { setLimitOpen(true); return; }
    setOpenKeys((keys) => [...keys, key]);
    setActive(key);
  };
  const closeTab = (key) => {
    setOpenKeys((keys) => {
      if (keys.length <= 1) return keys;
      const index = keys.indexOf(key);
      const nextKeys = keys.filter((item) => item !== key);
      if (key === active) setActive(keys[index - 1] ?? nextKeys.at(-1) ?? '');
      return nextKeys;
    });
  };
  const switchTab = (direction) => {
    const next = openKeys[openKeys.indexOf(active) + direction];
    if (next) setActive(next);
  };
  return (
    <div className="tabs_demo-editable">
      <div className="tabs_demo-editable-side">
        <label className="tabs_demo-editable-limit">
          <span>최대 탭 개수</span>
          <input className="input input_sm" type="number" min={1} max={catalog.length} value={maxTabs} onChange={(event) => setMaxTabs(Number(event.target.value) || 1)} />
          <span>현재 {openKeys.length}/{maxTabs}</span>
        </label>
        <Menu bordered compact selectable={false} ariaLabel="예시 추가 메뉴">
          <MenuGroup title="예시 추가" />
          {catalog.map((page) => (
            <MenuItem
              key={page.key}
              label={page.label}
              active={openKeys.includes(page.key) && active === page.key}
              onClick={() => addTab(page.key)}
            />
          ))}
        </Menu>
      </div>
      <div className="tabs_demo-editable-main">
        <Tabs
          variant="card"
          mode="dynamic"
          layout="scroll"
          className="tabs_demo-editable-tabs"
          value={active}
          onChange={setActive}
          onClose={closeTab}
          items={items}
          panel={({ item }) => item?.content}
          extra={
            <div className="tabs_demo-editable-controls">
              <Button variant="outline" size="sm" iconOnly ariaLabel="이전 탭" iconBefore={<Icon name="chevron-left" />} onClick={() => switchTab(-1)} />
              <Dropdown placement="end" triggerContent={<Button variant="outline" size="sm" iconOnly ariaLabel="열린 탭 목록" iconBefore={<Icon name="menu" />} />}>
                <Menu compact selectable={false} ariaLabel="열린 탭 목차">
                  {pages.map((page) => (
                    <MenuItem key={page.key} label={\`- \${page.label}\`} active={page.key === active} onClick={() => setActive(page.key)} />
                  ))}
                </Menu>
              </Dropdown>
              <Button variant="outline" size="sm" iconOnly ariaLabel="다음 탭" iconBefore={<Icon name="chevron-right" />} onClick={() => switchTab(1)} />
            </div>
          }
        />
      </div>
      <Modal open={limitOpen} size="sm" title="알림" onClose={() => setLimitOpen(false)} footer={<Button color="primary" label="확인" onClick={() => setLimitOpen(false)} />}>
        <p>탭은 최대 {maxTabs}개까지 열 수 있습니다. 새 탭을 열려면 기존 탭을 닫아 주세요.</p>
      </Modal>
    </div>
  );
}`,
};

function vueCodeFor(key: Name) {
  if (key === 'dynamic') return `<Tabs mode="dynamic" :items="items" aria-label="동적 탭"><template #panel="{ value }"><p>{{ value === 'overview' ? '프로젝트 개요와 목표를 설명하는 영역입니다.' : value === 'team' ? '팀 구성원과 역할을 표시합니다.' : '최근 활동 로그와 타임라인을 보여줍니다.' }}</p></template></Tabs>`;
  if (key === 'icon') return `<Tabs aria-label="대시보드 섹션"><TabPanel label="대시보드" active><template #icon><Icon name="grid" class="tabs_icon" /></template>대시보드 콘텐츠</TabPanel><TabPanel label="사용자"><template #icon><Icon name="user" class="tabs_icon" /></template>사용자 콘텐츠</TabPanel><TabPanel label="문서"><template #icon><Icon name="book" class="tabs_icon" /></template>문서 콘텐츠</TabPanel></Tabs>`;
  if (key === 'badge') return `<Tabs aria-label="알림 센터"><TabPanel label="전체" active>전체 알림 목록</TabPanel><TabPanel label="읽지 않음"><template #badge><Badge count color="primary" label="12" /></template>읽지 않은 알림</TabPanel><TabPanel label="중요"><template #badge><Badge dot-only color="danger" aria-label="새 중요 알림" /></template>중요 알림</TabPanel></Tabs>`;
  if (key === 'extra') return `<Tabs aria-label="파일 보기"><template #extra><Button variant="filled" color="primary" size="sm" label="새 파일" /></template>${p('내 파일', '내 파일 목록', 'active')}${p('공유됨', '공유된 파일 목록')}${p('최근', '최근 파일 목록')}</Tabs>`;
  if (key === 'example') return `<div class="tabs_demo-editable">
  <div class="tabs_demo-editable-side">
    <label class="tabs_demo-editable-limit">
      <span>최대 탭 개수</span>
      <input class="input input_sm" type="number" min="1" :max="catalog.length" v-model.number="maxTabs" />
      <span>현재 {{ openKeys.length }}/{{ maxTabs }}</span>
    </label>
    <Menu bordered compact :selectable="false" aria-label="예시 추가 메뉴">
      <MenuGroup title="예시 추가" />
      <MenuItem
        v-for="page in catalog"
        :key="page.key"
        :label="page.label"
        :active="openKeys.includes(page.key) && active === page.key"
        @click="addTab(page.key)"
      />
    </Menu>
  </div>
  <Tabs variant="card" mode="dynamic" layout="scroll" class="tabs_demo-editable-tabs" v-model="active" :items="items" @close="closeTab">
    <template #panel="{ item }">{{ item?.content }}</template>
    <template #extra>
      <div class="tabs_demo-editable-controls">
        <Button variant="outline" size="sm" icon-only aria-label="이전 탭" @click="switchTab(-1)"><template #icon-before><Icon name="chevron-left" /></template></Button>
        <Dropdown placement="end">
          <template #trigger="{ triggerProps }"><Button v-bind="triggerProps" variant="outline" size="sm" icon-only aria-label="열린 탭 목록"><template #icon-before><Icon name="menu" /></template></Button></template>
          <Menu compact :selectable="false" aria-label="열린 탭 목차">
            <MenuItem v-for="page in pages" :key="page.key" :label="\`- \${page.label}\`" :active="page.key === active" @click="active = page.key" />
          </Menu>
        </Dropdown>
        <Button variant="outline" size="sm" icon-only aria-label="다음 탭" @click="switchTab(1)"><template #icon-before><Icon name="chevron-right" /></template></Button>
      </div>
    </template>
  </Tabs>
  <Modal :open="limitOpen" size="sm" title="알림" @close="limitOpen = false">
    <p>탭은 최대 {{ maxTabs }}개까지 열 수 있습니다. 새 탭을 열려면 기존 탭을 닫아 주세요.</p>
    <template #footer><Button color="primary" label="확인" @click="limitOpen = false" /></template>
  </Modal>
</div>`;
  return react[key].replaceAll('ariaLabel=', 'aria-label=').replaceAll('className=', 'class=');
}
function examples(key: Name): FrameworkExample[] {
  const needsIcon = key === 'icon' || key === 'example';
  const needsBadge = key === 'badge';
  const needsButton = key === 'extra' || key === 'example';
  const rImports = [
    `import { Tabs, TabPanel, TabMenu } from '@uxkm/react/tabs';`,
    needsIcon && `import Icon from '@uxkm/react/icon';`,
    needsBadge && `import Badge from '@uxkm/react/badge';`,
    needsButton && `import Button from '@uxkm/react/button';`,
    key === 'example' && `import { useState } from 'react';\nimport Dropdown from '@uxkm/react/dropdown';\nimport { Menu, MenuItem, MenuGroup } from '@uxkm/react/menu';\nimport Modal from '@uxkm/react/modal';`,
  ].filter(Boolean).join('\n');
  const vImports = [
    `import { Tabs, TabPanel, TabMenu } from '@uxkm/vue/tabs';`,
    needsIcon && `import Icon from '@uxkm/vue/icon';`,
    needsBadge && `import Badge from '@uxkm/vue/badge';`,
    needsButton && `import Button from '@uxkm/vue/button';`,
    key === 'dynamic' && `const items = [{ key: 'overview', label: '개요', active: true }, { key: 'team', label: '팀' }, { key: 'activity', label: '활동' }];`,
    key === 'example' && `import { ref, computed } from 'vue';\nimport Dropdown from '@uxkm/vue/dropdown';\nimport { Menu, MenuItem, MenuGroup } from '@uxkm/vue/menu';\nimport Modal from '@uxkm/vue/modal';\nconst catalog = [{ key: 'style', label: 'UI/UX 스타일 가이드', body: '스타일 가이드 예시 화면입니다.' }, { key: 'progress', label: 'UI 진행 현황', body: 'UI 진행 현황 예시 화면입니다.' }, { key: 'layout', label: '레이아웃 유형', body: '레이아웃 유형 예시 화면입니다.' }, { key: 'form', label: '폼 유형', body: '폼 유형 예시 화면입니다.' }, { key: 'chart', label: '차트 유형', body: '차트 유형 예시 화면입니다.' }];\nconst maxTabs = ref(4);\nconst openKeys = ref(['style', 'progress', 'layout']);\nconst active = ref('layout');\nconst limitOpen = ref(false);\nconst pages = computed(() => openKeys.value.map((key) => catalog.find((page) => page.key === key)).filter(Boolean));\nconst items = computed(() => pages.value.map((page) => ({ key: page.key, label: page.label, closable: true, content: page.body })));\nfunction addTab(key) { if (openKeys.value.includes(key)) { active.value = key; return; } if (openKeys.value.length >= maxTabs.value) { limitOpen.value = true; return; } openKeys.value.push(key); active.value = key; }\nfunction closeTab(key) { if (openKeys.value.length <= 1) return; const index = openKeys.value.indexOf(key); openKeys.value = openKeys.value.filter((item) => item !== key); if (key === active.value) active.value = openKeys.value[index - 1] ?? openKeys.value.at(-1) ?? ''; }\nfunction switchTab(direction) { const next = openKeys.value[openKeys.value.indexOf(active.value) + direction]; if (next) active.value = next; }`,
  ].filter(Boolean).join('\n');
  const rCode = key === 'example'
    ? `${rImports}\n\n${react.example}\n\nexport function Example() { return <EditableTabsExample />; }`
    : `${rImports}\n\nexport function Example() { return <>${react[key]}</>; }`;
  const vCode = `<script setup>\n${vImports}\n</script>\n<template>\n${vueCodeFor(key)}\n</template>`;
  return [{ id: 'html', label: 'HTML', fileName: `Tabs.html · ${key}`, code: html[key] }, { id: 'gulp', label: 'Gulp', fileName: `tabs.njk · ${key}`, code: gulp[key] }, { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/tabs · ${key}`, code: vCode }, { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/tabs · ${key}`, code: vCode }, { id: 'react', label: 'React', fileName: `@uxkm/react/tabs · ${key}`, code: rCode }, { id: 'next', label: 'Next', fileName: `@uxkm/react/tabs · ${key}`, code: rCode }];
}
export const tabsFrameworkExamples = Object.fromEntries(names.map((key) => [key, examples(key)])) as Record<Name, FrameworkExample[]>;
