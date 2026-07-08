export const docMeta = {
  title: 'Icon | HTML Components',
  activeNav: 'icon',
  pageTitle: 'Icon',
};

import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import Icon from '@/components/Icon.jsx';
import DocIcon from '@/components/icons/DocIcon.jsx';
import TypoText from '@/components/TypoText.jsx';
import { commonIconGallery } from '@/data/common-icons';
import {
  iconClassColumns,
  iconClasses,
  iconPropColumns,
  iconProps,
  iconSlotColumns,
  iconSlots,
  iconTokenColumns,
  iconTokens,
} from '@/doc/data/icon-api';

export default function IconDoc() {
  return (
    <>
      <div className="page_intro">
          <h1>Icon</h1>
          <p className="lead">SVG 인라인 아이콘의 크기, 색상, 정렬을 일관되게 적용하는 기본 요소입니다.</p>
        </div>

        <DemoSection
          headingId="basic-heading"
          title="기본"
          description="svg 태그에 icon 클래스를 적용합니다. stroke 아이콘은 currentColor로 부모 색상을 상속합니다."
        >
          <Icon>
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </Icon>
          <Icon>
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </Icon>
          <Icon>
            <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </Icon>
        </DemoSection>

        <DemoSection
          headingId="size-heading"
          title="크기"
          description="기본 크기는 icon 클래스만 사용합니다. icon_sm · icon_lg · icon_xl로 스케일을 조절합니다."
        >
          <Icon size="sm">
            <path d="M12 5v14M5 12h14" />
          </Icon>
          <Icon>
            <path d="M12 5v14M5 12h14" />
          </Icon>
          <Icon size="lg">
            <path d="M12 5v14M5 12h14" />
          </Icon>
          <Icon size="xl">
            <path d="M12 5v14M5 12h14" />
          </Icon>
        </DemoSection>

        <DemoSection
          headingId="color-heading"
          title="색상"
          description="공통 color_* 클래스를 조합합니다. 버튼·배지·알림 등 다른 컴포넌트와 동일한 클래스명을 사용합니다."
        >
          <Icon color="default">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </Icon>
          <Icon color="primary">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </Icon>
          <Icon color="success">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="M22 4 12 14.01l-3-3" />
          </Icon>
          <Icon color="warning">
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          </Icon>
          <Icon color="danger">
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6M9 9l6 6" />
          </Icon>
        </DemoSection>

        <DemoSection
          headingId="inline-heading"
          title="텍스트와 함께"
          description="icon_inline으로 텍스트와 수직 정렬을 맞춥니다. 텍스트에는 ml_sm으로 간격을 둡니다. 의미 있는 아이콘은 aria-label을 지정합니다."
          stack
        >
          <p>
            <Icon inline color="info">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
            </Icon>
            <TypoText tag="span" className="ml_sm">변경 사항이 자동 저장됩니다.</TypoText>
          </p>
          <p>
            <Icon inline color="success">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <path d="M22 4 12 14.01l-3-3" />
            </Icon>
            <TypoText tag="span" className="ml_sm">업로드가 완료되었습니다.</TypoText>
          </p>
        </DemoSection>

        <DemoSection
          headingId="circle-heading"
          title="원형 · 사각 배경"
          description="icon_circle · icon_square로 아이콘에 배경을 적용합니다. color_*로 색상을 지정합니다."
        >
          <Icon circle color="primary" size="sm">
            <path d="M12 5v14M5 12h14" />
          </Icon>
          <Icon circle color="success" size="sm">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="M22 4 12 14.01l-3-3" />
          </Icon>
          <Icon circle color="danger" size="lg">
            <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </Icon>
          <Icon square color="primary" size="sm">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </Icon>
        </DemoSection>

        <DemoSection
          headingId="button-heading"
          title="아이콘 버튼"
          description="icon_button으로 클릭 가능한 아이콘 버튼을 만듭니다. aria-label을 반드시 지정합니다."
        >
          <Icon button color="primary" ariaLabel="검색">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </Icon>
          <Icon button color="muted" ariaLabel="설정">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </Icon>
          <Icon button color="danger" ariaLabel="삭제">
            <path d="M18 6 6 18M6 6l12 12" />
          </Icon>
        </DemoSection>

        <DemoSection
          headingId="pulse-heading"
          title="펄스"
          description="icon_pulse로 알림·상태 강조 애니메이션을 적용합니다. icon_circle과 함께 사용합니다."
        >
          <Icon circle pulse color="primary" size="sm">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </Icon>
          <Icon circle pulse color="danger" size="sm">
            <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
          </Icon>
        </DemoSection>

        <DemoSection
          headingId="group-heading"
          title="그룹"
          description="icon_group으로 여러 아이콘을 나란히 배치합니다."
          stack
        >
          <div className="icon_group">
            <Icon color="muted">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </Icon>
            <Icon color="muted">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </Icon>
            <Icon color="muted">
              <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </Icon>
          </div>

          <p>
            <Icon circle color="primary" size="sm">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </Icon>
            <TypoText tag="span" color="muted" size="sm" className="ml_sm">홍길동님이 댓글을 남겼습니다.</TypoText>
          </p>
        </DemoSection>

        <DemoSection
          headingId="spin-heading"
          title="로딩"
          description="icon_spin으로 회전 애니메이션을 적용합니다. 로딩 상태 표시에 사용합니다."
        >
          <Icon spin color="primary">
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </Icon>
          <Icon spin size="lg" color="muted">
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </Icon>
        </DemoSection>

        <section className="section" aria-labelledby="gallery-heading">
          <div className="demo_section-header">
            <h2 id="gallery-heading">자주 쓰는 아이콘</h2>
            <p>프로젝트 전반에서 재사용하는 stroke SVG 예시입니다. viewBox 0 0 24 24 · stroke-width 2 기준으로, <a href="https://fonts.google.com/icons" target="_blank" rel="noopener noreferrer">Material Symbols</a>에서 자주 쓰는 유형을 참고했습니다.</p>
          </div>

          <div className="icon_grid">
            {commonIconGallery.map((name) => (
              <div

              className="icon_grid-item"
             key={name}>

              <DocIcon name={name} className="icon_lg" />
              <TypoText tag="span" size="sm" color="muted">{name }</TypoText>

              </div>
            ))}
          </div>
        </section>

        <ApiSection headingId="api-props-heading" title="API · Props">
          <ApiTable columns={iconPropColumns} rows={iconProps} codeColumn="name" />
          <p className="form_field-hint" style={{ marginTop: 'var(--space-md)' }}>
            장식용 아이콘은 <code className="typo_code">aria-hidden="true"</code>가 자동 적용됩니다.
            의미 있는 아이콘·버튼은 <code className="typo_code">aria-label</code>을 지정하세요.
          </p>
        </ApiSection>

        <ApiSection headingId="api-slots-heading" title="API · Slots">
          <ApiTable columns={iconSlotColumns} rows={iconSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection
          headingId="api-classes-heading"
          title="클래스 · 속성"
          description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
        >
          <ApiTable columns={iconClassColumns} rows={iconClasses} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="tokens-heading" title="디자인 토큰">
          <ApiTable columns={iconTokenColumns} rows={iconTokens} codeColumn="name" />
        </ApiSection>
    </>
  );
}
