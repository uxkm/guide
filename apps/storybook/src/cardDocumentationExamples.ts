import type { FrameworkExample } from './FrameworkCode';
import { cardFrameworkExamples as baseExamples } from './cardFrameworkExamples';

import cardHtmlComponent from '../../html/src/components/data-display/Card/Card.html?raw';
import cardGulpComponent from '../../gulp/src/components/data-display/Card/card.njk?raw';
import cardReactComponent from '../../react/src/components/data-display/Card/Card.jsx?raw';
import cardVueComponent from '../../vue/src/components/data-display/Card/Card.vue?raw';
import cardBodyVueComponent from '../../vue/src/components/data-display/Card/CardBody.vue?raw';
import cardDeckVueComponent from '../../vue/src/components/data-display/Card/CardDeck.vue?raw';
import cardFooterVueComponent from '../../vue/src/components/data-display/Card/CardFooter.vue?raw';
import cardHeaderVueComponent from '../../vue/src/components/data-display/Card/CardHeader.vue?raw';

const cardVueComponents = [
  cardVueComponent,
  `<!-- CardHeader.vue -->\n${cardHeaderVueComponent}`,
  `<!-- CardBody.vue -->\n${cardBodyVueComponent}`,
  `<!-- CardFooter.vue -->\n${cardFooterVueComponent}`,
  `<!-- CardDeck.vue -->\n${cardDeckVueComponent}`
].join('\n\n');

export const cardComponentExamples: FrameworkExample[] = [
  { id: 'html', label: 'HTML', fileName: 'apps/html/src/components/data-display/Card/Card.html', code: cardHtmlComponent },
  { id: 'gulp', label: 'Gulp', fileName: 'apps/gulp/src/components/data-display/Card/card.njk', code: cardGulpComponent },
  { id: 'vue', label: 'Vue', fileName: 'apps/vue/src/components/data-display/Card/Card*.vue', code: cardVueComponents },
  { id: 'nuxt', label: 'Nuxt', fileName: '@uxkm/vue/card → Card*.vue', code: cardVueComponents },
  { id: 'react', label: 'React', fileName: 'apps/react/src/components/data-display/Card/Card.jsx', code: cardReactComponent },
  { id: 'next', label: 'Next', fileName: '@uxkm/react/card → Card.jsx', code: cardReactComponent }
];

const indent = (source: string, spaces = 2) => source.split('\n').map((line) => `${' '.repeat(spaces)}${line}`).join('\n');

function text(id: string, label: string, className?: string, tagname = 'span') {
  return `<w2:textbox id="${id}" tagname="${tagname}"${className ? ` class="${className}"` : ''} label="${label}"></w2:textbox>`;
}

function group(id: string, className: string, children: string, attributes = '') {
  return `<w2:group id="${id}" class="${className}"${attributes ? ` ${attributes}` : ''}>\n${indent(children)}\n</w2:group>`;
}

function card(id: string, children: string, classes = '', attributes = '') {
  return group(id, `card${classes ? ` ${classes}` : ''}`, children, `tagname="article"${attributes ? ` ${attributes}` : ''}`);
}

function body(id: string, children: string) {
  return group(id, 'card_body', children);
}

function header(id: string, title: string, subtitle?: string) {
  const content = [text(`${id}Title`, title, 'card_title', 'h3'), subtitle ? text(`${id}Subtitle`, subtitle, 'card_subtitle', 'p') : ''].filter(Boolean).join('\n');
  return group(id, 'card_header', group(`${id}Main`, 'card_header-main', content));
}

function trigger(id: string, label: string, classes: string) {
  return `<xf:trigger id="${id}" type="button" class="${classes}" ev:onclick="scwin.cardAction_onclick">\n  <xf:label><![CDATA[${label}]]></xf:label>\n</xf:trigger>`;
}

function deck(id: string, cards: string[], columns?: number) {
  return group(id, `card_deck${columns ? ` card_deck-${columns}` : ''}`, cards.join('\n'));
}

const webSquareExamples: Record<keyof typeof baseExamples, string> = {
  basic: card('cardBasic', [
    header('cardBasicHeader', '카드 제목', '부제목 또는 메타 정보'),
    body('cardBasicBody', text('cardBasicContent', '카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다.')),
    group('cardBasicFooter', 'card_footer', [
      trigger('cardBasicConfirm', '확인', 'btn btn_filled color_primary btn_sm'),
      trigger('cardBasicCancel', '취소', 'btn btn_ghost btn_sm')
    ].join('\n'))
  ].join('\n')),
  simple: [
    card('cardSimpleAlert', body('cardSimpleAlertBody', `${text('cardSimpleAlertTitle', '알림', 'card_title', 'p')}\n${text('cardSimpleAlertText', '새로운 메시지가 도착했습니다. 확인해 주세요.')}`), 'card_shadow card_compact'),
    card('cardSimpleCompact', body('cardSimpleCompactBody', text('cardSimpleCompactText', '컴팩트 카드 — 좁은 패딩으로 밀도 높은 정보를 표시합니다.')), 'card_compact')
  ].join('\n'),
  skin: deck('cardSkinExample', [
    card('cardSkinDefault', body('cardSkinDefaultBody', text('cardSkinDefaultText', '기본 — 테두리 · 그림자'))),
    card('cardSkinShadow', body('cardSkinShadowBody', text('cardSkinShadowText', 'Shadow — 그림자')), 'card_shadow'),
    card('cardSkinElevated', body('cardSkinElevatedBody', text('cardSkinElevatedText', 'Elevated — 강한 그림자')), 'card_elevated'),
    card('cardSkinGhost', body('cardSkinGhostBody', text('cardSkinGhostText', 'Ghost — 투명 배경')), 'card_ghost')
  ], 2),
  size: deck('cardSizeExample', [
    card('cardSmall', `${header('cardSmallHeader', 'Small')}\n${body('cardSmallBody', text('cardSmallText', '작은 카드 — 좁은 패딩과 작은 제목.'))}`, 'card_sm'),
    card('cardMedium', `${header('cardMediumHeader', 'Medium')}\n${body('cardMediumBody', text('cardMediumText', '기본 크기 카드입니다.'))}`),
    card('cardLarge', `${header('cardLargeHeader', 'Large')}\n${body('cardLargeBody', text('cardLargeText', '큰 카드 — 넓은 패딩과 큰 제목.'))}`, 'card_lg')
  ], 2),
  accent: deck('cardAccentExample', [
    card('cardAccentInfo', body('cardAccentInfoBody', `${text('cardAccentInfoTitle', '정보', 'card_title', 'p')}\n${text('cardAccentInfoText', '시스템 업데이트가 예정되어 있습니다.')}`), 'card_accent color_primary'),
    card('cardAccentSuccess', body('cardAccentSuccessBody', `${text('cardAccentSuccessTitle', '성공', 'card_title', 'p')}\n${text('cardAccentSuccessText', '작업이 정상적으로 완료되었습니다.')}`), 'card_accent color_success'),
    card('cardAccentWarning', body('cardAccentWarningBody', `${text('cardAccentWarningTitle', '주의', 'card_title', 'p')}\n${text('cardAccentWarningText', '저장 공간이 부족합니다.')}`), 'card_accent color_warning'),
    card('cardAccentDanger', body('cardAccentDangerBody', `${text('cardAccentDangerTitle', '오류', 'card_title', 'p')}\n${text('cardAccentDangerText', '연결에 실패했습니다. 다시 시도해 주세요.')}`), 'card_accent color_danger')
  ], 2),
  media: `<!-- 썸네일 경로는 WebSquare 프로젝트의 정적 리소스 위치에 맞게 변경합니다. -->\n${card('cardMedia', [
    group('cardMediaThumbnail', 'card_media', '<w2:image id="cardMediaImage" class="card_media-image" src="/images/samples/card/project.svg" alt="프로젝트 썸네일"></w2:image>'),
    header('cardMediaHeader', '프로젝트 Alpha', '업데이트 · 2일 전'),
    body('cardMediaBody', text('cardMediaText', '디자인 시스템 구축 및 컴포넌트 라이브러리 개발 프로젝트입니다.')),
    group('cardMediaFooter', 'card_footer card_footer-between', `${text('cardMediaMembers', '3명 참여', 'color_muted size_sm')}\n${trigger('cardMediaDetail', '자세히', 'btn btn_text color_primary btn_sm')}`)
  ].join('\n'), 'card_hover card_shadow')}`,
  horizontal: `<!-- 썸네일 경로는 WebSquare 프로젝트의 정적 리소스 위치에 맞게 변경합니다. -->\n${card('cardHorizontal', [
    group('cardHorizontalMedia', 'card_media', '<w2:image id="cardHorizontalImage" class="card_media-image" src="/images/samples/card/document.svg" alt="문서 썸네일"></w2:image>'),
    group('cardHorizontalInner', 'card_inner', `${header('cardHorizontalHeader', '가이드 문서')}\n${body('cardHorizontalBody', text('cardHorizontalText', 'HTML 컴포넌트 사용법과 접근성 가이드를 확인하세요.'))}\n${group('cardHorizontalFooter', 'card_footer', '<w2:anchor id="cardHorizontalLink" class="link color_primary size_sm" href="#"><xf:label><![CDATA[문서 보기]]></xf:label></w2:anchor>')}`)
  ].join('\n'), 'card_horizontal card_shadow')}`,
  iconStat: `<!-- 아이콘 경로는 프로젝트 이미지 또는 CSS background-image 리소스에 연결합니다. -->\n${deck('cardIconStatExample', [
    card('cardPerformance', body('cardPerformanceBody', `${group('cardPerformanceIcon', 'card_icon color_primary', '<w2:image id="cardPerformanceImage" class="icon" src="/images/icons/bolt.svg" alt=""></w2:image>', 'aria-hidden="true"')}\n${text('cardPerformanceTitle', '빠른 성능', 'card_title', 'h3')}\n${text('cardPerformanceSubtitle', '가벼운 번들, 빠른 로딩', 'card_subtitle', 'p')}`), 'card_shadow card_hover'),
    card('cardAccessibility', body('cardAccessibilityBody', `${group('cardAccessibilityIcon', 'card_icon color_success', '<w2:image id="cardAccessibilityImage" class="icon" src="/images/icons/shield.svg" alt=""></w2:image>', 'aria-hidden="true"')}\n${text('cardAccessibilityTitle', '접근성', 'card_title', 'h3')}\n${text('cardAccessibilitySubtitle', 'WCAG 2.2 AA 기준', 'card_subtitle', 'p')}`), 'card_shadow'),
    card('cardMonthlyUsers', body('cardMonthlyUsersBody', group('cardMonthlyUsersStat', 'stat', `${text('cardMonthlyUsersLabel', '월간 활성 사용자', 'stat_label')}\n${text('cardMonthlyUsersValue', '24.5K', 'stat_value')}\n${text('cardMonthlyUsersTrend', '+18.2%', 'stat_desc color_success')}`)), 'card_shadow')
  ])}`,
  profile: card('cardProfile', [
    group('cardProfileHeader', 'card_header', `${group('cardProfileMain', 'card_header-main', `${text('cardProfileAvatar', '홍', 'avatar color_primary')}\n${text('cardProfileName', '홍길동', 'card_title', 'h3')}\n${text('cardProfileRole', '프론트엔드 개발자', 'card_subtitle', 'p')}`)}\n${group('cardProfileExtra', 'card_extra', trigger('cardProfileMore', '더 보기', 'btn btn_ghost btn_icon-only btn_sm'))}`),
    body('cardProfileBody', group('cardProfileTags', 'tag_group tag_group-tight', `${text('cardProfileReact', 'React', 'tag tag_sm color_primary')}\n${text('cardProfileTypeScript', 'TypeScript', 'tag tag_sm color_primary')}\n${text('cardProfileScss', 'SCSS', 'tag tag_sm color_default')}`)),
    group('cardProfileFooter', 'card_footer card_footer-between', `${text('cardProfileStatus', '서울 · 온라인', 'color_muted size_sm')}\n${trigger('cardProfileFollow', '팔로우', 'btn btn_outline color_primary btn_sm')}`)
  ].join('\n'), 'card_shadow'),
  clickable: deck('cardClickableExample', [
    `<w2:anchor id="cardClickableLink" class="card card_clickable card_hover" href="#">\n${indent(body('cardClickableLinkBody', `${text('cardClickableLinkTitle', '링크 카드', 'card_title', 'h3')}\n${text('cardClickableLinkSubtitle', '클릭하면 상세 페이지로 이동합니다.', 'card_subtitle', 'p')}`))}\n</w2:anchor>`,
    card('cardClickableAction', body('cardClickableActionBody', `${text('cardClickableActionTitle', '인터랙티브 카드', 'card_title', 'h3')}\n${text('cardClickableActionSubtitle', '키보드와 클릭으로 상세 동작을 실행합니다.', 'card_subtitle', 'p')}`), 'card_clickable card_hover card_shadow', 'role="link" tabindex="0" ev:onclick="scwin.card_onclick"')
  ], 2),
  disabled: card('cardDisabled', body('cardDisabledBody', `${text('cardDisabledTitle', '비활성 카드', 'card_title', 'h3')}\n${text('cardDisabledSubtitle', '현재 이용할 수 없습니다.', 'card_subtitle', 'p')}`), 'is-disabled', 'aria-disabled="true"'),
  grid: deck('cardGridExample', [
    card('cardFeatureA', `${header('cardFeatureAHeader', 'Feature A')}\n${body('cardFeatureABody', text('cardFeatureAText', '빠른 성능과 가벼운 번들 크기.'))}`, 'card_hover'),
    card('cardFeatureB', `${header('cardFeatureBHeader', 'Feature B')}\n${body('cardFeatureBBody', text('cardFeatureBText', '접근성을 고려한 마크업 구조.'))}`, 'card_hover'),
    card('cardFeatureC', `${header('cardFeatureCHeader', 'Feature C')}\n${body('cardFeatureCBody', text('cardFeatureCText', 'Pure SCSS로 커스터마이즈 가능.'))}`, 'card_hover')
  ])
};

export const cardFrameworkExamples = Object.fromEntries(
  Object.entries(baseExamples).map(([key, examples]) => [
    key,
    [
      ...examples,
      {
        id: 'websquare',
        label: 'WebSquare',
        fileName: `Card.xml · ${key}`,
        code: webSquareExamples[key as keyof typeof webSquareExamples]
      }
    ]
  ])
) as typeof baseExamples;
