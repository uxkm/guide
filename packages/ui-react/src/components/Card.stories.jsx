import React from 'react';
import Avatar from './Avatar.jsx';
import Button from './Button.jsx';
import Card from './Card.jsx';
import CardBody from './CardBody.jsx';
import CardFooter from './CardFooter.jsx';
import CardHeader from './CardHeader.jsx';
import Stat from './Stat.jsx';
import Tag from './Tag.jsx';
import TagGroup from './TagGroup.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  cardBodySlots,
  cardClassColumns,
  cardClasses,
  cardFooterPropColumns,
  cardFooterProps,
  cardFooterSlots,
  cardHeaderPropColumns,
  cardHeaderProps,
  cardHeaderSlots,
  cardPropColumns,
  cardProps,
  cardSlotColumns,
  cardSlots,
  cardTokenColumns,
  cardTokens,
} from '@doc-data/card-api';

const MediaIcon = (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="M21 15l-5-5L5 21" />
  </svg>
);

const DocIcon = (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
  </svg>
);

const BoltIcon = (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const ShieldIcon = (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const MoreIcon = (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>
);

const apiSections = [
  {
    title: 'API · Card Props',
    description: 'React에서는 camelCase prop을 사용합니다. Vue media · header · extra 슬롯은 media · header · extra prop에 대응합니다.',
    tables: [{ columns: cardPropColumns, rows: cardProps, codeColumn: 'name' }],
  },
  {
    title: 'API · CardHeader Props',
    tables: [{ columns: cardHeaderPropColumns, rows: cardHeaderProps, codeColumn: 'name' }],
  },
  {
    title: 'API · CardFooter Props',
    tables: [{ columns: cardFooterPropColumns, rows: cardFooterProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Card Children / Slots',
    tables: [{ columns: cardSlotColumns, rows: cardSlots, codeColumn: 'name' }],
  },
  {
    title: 'API · CardHeader Children / Slots',
    tables: [{ columns: cardSlotColumns, rows: cardHeaderSlots, codeColumn: 'name' }],
  },
  {
    title: 'API · CardBody Children / Slots',
    tables: [{ columns: cardSlotColumns, rows: cardBodySlots, codeColumn: 'name' }],
  },
  {
    title: 'API · CardFooter Children / Slots',
    tables: [{ columns: cardSlotColumns, rows: cardFooterSlots, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: cardClassColumns, rows: cardClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: cardTokenColumns, rows: cardTokens, codeColumn: 'name' }],
  },
];

const playgroundArgs = {
  variant: 'bordered',
  size: 'md',
  hoverable: false,
  title: '제목',
  subtitle: '부제목',
  tag: 'article',
};

export default {
  title: 'Components/데이터 표시/Card',
  id: 'components-card',
  component: Card,
  subcomponents: { CardHeader, CardBody, CardFooter },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['bordered', 'shadow', 'flat'],
      type: { name: 'enum', summary: "'bordered' | 'shadow' | 'flat'" },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'compact'],
      type: { name: 'enum', summary: "'sm' | 'md' | 'lg' | 'compact'" },
    },
    hoverable: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    title: { control: 'text', type: { name: 'string', summary: 'string' } },
    subtitle: { control: 'text', type: { name: 'string', summary: 'string' } },
    tag: {
      control: 'select',
      options: ['article', 'section', 'div'],
      type: { name: 'enum', summary: "'article' | 'section' | 'div'" },
    },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component: '콘텐츠 블록을 담는 카드 컴포넌트입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: (args) => (
    <Card {...args}>
      <CardHeader title="카드 제목" />
      <CardBody>
        <p>카드 본문입니다.</p>
      </CardBody>
    </Card>
  ),
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'card_header · card_body · card_footer 구조를 가집니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';
import CardFooter from '@uxkm/ui-react/components/CardFooter.jsx';
import CardHeader from '@uxkm/ui-react/components/CardHeader.jsx';

export function BasicExample() {
  return (
    <Card style={{ maxWidth: 360, width: '100%' }}>
      <CardHeader title="카드 제목" subtitle="부제목 또는 메타 정보" />
      <CardBody>카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다.</CardBody>
      <CardFooter>
        <Button variant="filled" color="primary" size="sm" label="확인" />
        <Button variant="ghost" size="sm" label="취소" />
      </CardFooter>
    </Card>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: withDocsCanvasRender(
    <Card style={{ maxWidth: 360, width: '100%' }}>
      <CardHeader title="카드 제목" subtitle="부제목 또는 메타 정보" />
      <CardBody>카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다.</CardBody>
      <CardFooter>
        <Button variant="filled" color="primary" size="sm" label="확인" />
        <Button variant="ghost" size="sm" label="취소" />
      </CardFooter>
    </Card>,
  ),
};

export const Simple = {
  name: '간단',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'header나 footer 없이 body만 사용하는 단순 카드입니다.',
      },
      source: {
        code: `import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';

export function SimpleExample() {
  return (
    <>
      <Card variant="shadow" size="compact" style={{ maxWidth: 280, width: '100%' }}>
        <CardBody>
          <p className="card_title">알림</p>
          새로운 메시지가 도착했습니다. 확인해 주세요.
        </CardBody>
      </Card>
      <Card size="compact" style={{ maxWidth: 280, width: '100%' }}>
        <CardBody>컴팩트 카드 — 좁은 패딩으로 밀도 높은 정보를 표시합니다.</CardBody>
      </Card>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: withDocsCanvasRender(
    <>
      <Card variant="shadow" size="compact" style={{ maxWidth: 280, width: '100%' }}>
        <CardBody>
          <p className="card_title">알림</p>
          새로운 메시지가 도착했습니다. 확인해 주세요.
        </CardBody>
      </Card>
      <Card size="compact" style={{ maxWidth: 280, width: '100%' }}>
        <CardBody>컴팩트 카드 — 좁은 패딩으로 밀도 높은 정보를 표시합니다.</CardBody>
      </Card>
    </>,
  ),
};

export const Skin = {
  name: '스킨',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '기본은 테두리·그림자가 적용됩니다. variant로 외형을 조절합니다.',
      },
      source: {
        code: `import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';

export function SkinExample() {
  return (
    <div className="card_deck card_deck-2">
      <Card>
        <CardBody>기본 — 테두리 · 그림자</CardBody>
      </Card>
      <Card variant="shadow">
        <CardBody>Shadow — 그림자</CardBody>
      </Card>
      <Card className="card_elevated">
        <CardBody>Elevated — 강한 그림자</CardBody>
      </Card>
      <Card variant="flat">
        <CardBody>Ghost — 투명 배경</CardBody>
      </Card>
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: withDocsCanvasRender(
    <div className="card_deck card_deck-2">
      <Card>
        <CardBody>기본 — 테두리 · 그림자</CardBody>
      </Card>
      <Card variant="shadow">
        <CardBody>Shadow — 그림자</CardBody>
      </Card>
      <Card className="card_elevated">
        <CardBody>Elevated — 강한 그림자</CardBody>
      </Card>
      <Card variant="flat">
        <CardBody>Ghost — 투명 배경</CardBody>
      </Card>
    </div>,
  ),
};

export const Size = {
  name: '크기',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'size로 패딩과 제목 크기를 조절합니다.',
      },
      source: {
        code: `import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';
import CardHeader from '@uxkm/ui-react/components/CardHeader.jsx';

export function SizeExample() {
  return (
    <div className="card_deck card_deck-2">
      <Card size="sm">
        <CardHeader title="Small" />
        <CardBody>작은 카드 — 좁은 패딩과 작은 제목.</CardBody>
      </Card>
      <Card>
        <CardHeader title="Medium" />
        <CardBody>기본 크기 카드입니다.</CardBody>
      </Card>
      <Card size="lg">
        <CardHeader title="Large" />
        <CardBody>큰 카드 — 넓은 패딩과 큰 제목.</CardBody>
      </Card>
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: withDocsCanvasRender(
    <div className="card_deck card_deck-2">
      <Card size="sm">
        <CardHeader title="Small" />
        <CardBody>작은 카드 — 좁은 패딩과 작은 제목.</CardBody>
      </Card>
      <Card>
        <CardHeader title="Medium" />
        <CardBody>기본 크기 카드입니다.</CardBody>
      </Card>
      <Card size="lg">
        <CardHeader title="Large" />
        <CardBody>큰 카드 — 넓은 패딩과 큰 제목.</CardBody>
      </Card>
    </div>,
  ),
};

export const Accent = {
  name: '강조 테두리',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'card_accent와 color_*로 왼쪽 강조선을 적용합니다.',
      },
      source: {
        code: `import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';

export function AccentExample() {
  return (
    <div className="card_deck card_deck-2">
      <Card className="card_accent color_primary">
        <CardBody>
          <p className="card_title">정보</p>
          시스템 업데이트가 예정되어 있습니다.
        </CardBody>
      </Card>
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: withDocsCanvasRender(
    <div className="card_deck card_deck-2">
      <Card className="card_accent color_primary">
        <CardBody>
          <p className="card_title">정보</p>
          시스템 업데이트가 예정되어 있습니다.
        </CardBody>
      </Card>
      <Card className="card_accent color_success">
        <CardBody>
          <p className="card_title">성공</p>
          작업이 정상적으로 완료되었습니다.
        </CardBody>
      </Card>
      <Card className="card_accent color_warning">
        <CardBody>
          <p className="card_title">주의</p>
          저장 공간이 부족합니다.
        </CardBody>
      </Card>
      <Card className="card_accent color_danger">
        <CardBody>
          <p className="card_title">오류</p>
          연결에 실패했습니다. 다시 시도해 주세요.
        </CardBody>
      </Card>
    </div>,
  ),
};

export const Media = {
  name: '미디어',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'card_media로 상단 이미지·썸네일 영역을 추가합니다.',
      },
      source: {
        code: `import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';
import CardFooter from '@uxkm/ui-react/components/CardFooter.jsx';
import CardHeader from '@uxkm/ui-react/components/CardHeader.jsx';

export function MediaExample() {
  return (
    <Card
      hoverable
      variant="shadow"
      style={{ maxWidth: 320, width: '100%' }}
      media={
        <div className="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">
          {MediaIcon}
        </div>
      }
    >
      ...
    </Card>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: withDocsCanvasRender(
    <Card
      hoverable
      variant="shadow"
      style={{ maxWidth: 320, width: '100%' }}
      media={
        <div className="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">
          {MediaIcon}
        </div>
      }
    >
      <CardHeader>
        <div className="card_header-row">
          <h3 className="card_title">프로젝트 Alpha</h3>
          <Tag size="sm" color="primary" label="진행 중" />
        </div>
        <p className="card_subtitle">업데이트 · 2일 전</p>
      </CardHeader>
      <CardBody>디자인 시스템 구축 및 컴포넌트 라이브러리 개발 프로젝트입니다.</CardBody>
      <CardFooter between>
        <span className="color_muted size_sm">3명 참여</span>
        <Button variant="text" color="primary" size="sm" label="자세히" />
      </CardFooter>
    </Card>,
  ),
};

export const Horizontal = {
  name: '가로',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'card_horizontal로 미디어와 콘텐츠를 나란히 배치합니다. card_inner로 본문을 감쌉니다.',
      },
      source: {
        code: `import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';
import CardFooter from '@uxkm/ui-react/components/CardFooter.jsx';
import CardHeader from '@uxkm/ui-react/components/CardHeader.jsx';

export function HorizontalExample() {
  return (
    <Card
      className="card_horizontal"
      variant="shadow"
      style={{ maxWidth: 480, width: '100%' }}
      media={
        <div className="card_media card_media-placeholder" role="img" aria-label="문서 썸네일">
          {DocIcon}
        </div>
      }
    >
      <div className="card_inner">
        <CardHeader title="가이드 문서" />
        <CardBody>HTML 컴포넌트 사용법과 접근성 가이드를 확인하세요.</CardBody>
        <CardFooter>
          <a href="#" className="link color_primary size_sm" onClick={(e) => e.preventDefault()}>
            문서 보기
          </a>
        </CardFooter>
      </div>
    </Card>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: withDocsCanvasRender(
    <Card
      className="card_horizontal"
      variant="shadow"
      style={{ maxWidth: 480, width: '100%' }}
      media={
        <div className="card_media card_media-placeholder" role="img" aria-label="문서 썸네일">
          {DocIcon}
        </div>
      }
    >
      <div className="card_inner">
        <CardHeader title="가이드 문서" />
        <CardBody>HTML 컴포넌트 사용법과 접근성 가이드를 확인하세요.</CardBody>
        <CardFooter>
          <a href="#" className="link color_primary size_sm" onClick={(e) => e.preventDefault()}>
            문서 보기
          </a>
        </CardFooter>
      </div>
    </Card>,
  ),
};

export const Icon = {
  name: '아이콘 · 통계',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'card_icon · card_stat으로 기능 소개·지표 카드를 구성합니다.',
      },
      source: {
        code: `import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';
import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function IconExample() {
  return (
    <div className="card_deck">
      <Card variant="shadow" hoverable>
        <CardBody>
          <span className="card_icon color_primary" aria-hidden="true">
            {BoltIcon}
          </span>
          <h3 className="card_title">빠른 성능</h3>
          <p className="card_subtitle">가벼운 번들, 빠른 로딩</p>
        </CardBody>
      </Card>
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: withDocsCanvasRender(
    <div className="card_deck">
      <Card variant="shadow" hoverable>
        <CardBody>
          <span className="card_icon color_primary" aria-hidden="true">
            {BoltIcon}
          </span>
          <h3 className="card_title">빠른 성능</h3>
          <p className="card_subtitle">가벼운 번들, 빠른 로딩</p>
        </CardBody>
      </Card>
      <Card variant="shadow" hoverable>
        <CardBody>
          <span className="card_icon color_success" aria-hidden="true">
            {ShieldIcon}
          </span>
          <h3 className="card_title">접근성</h3>
          <p className="card_subtitle">WCAG 2.2 AA 기준</p>
        </CardBody>
      </Card>
      <Card variant="shadow">
        <CardBody>
          <Stat title="월간 활성 사용자" value="24.5K" description="+18.2%" trendColor="success" />
        </CardBody>
      </Card>
    </div>,
  ),
};

export const Profile = {
  name: '프로필',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'card_avatar · card_extra로 사용자·엔티티 정보 카드를 만듭니다.',
      },
      source: {
        code: `import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import Button from '@uxkm/ui-react/components/Button.jsx';
import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';
import CardFooter from '@uxkm/ui-react/components/CardFooter.jsx';
import CardHeader from '@uxkm/ui-react/components/CardHeader.jsx';
import Tag from '@uxkm/ui-react/components/Tag.jsx';

export function ProfileExample() {
  return (
    <Card variant="shadow" style={{ maxWidth: 320, width: '100%' }}>
      <CardHeader
        extra={
          <Button variant="ghost" size="sm" iconOnly ariaLabel="더 보기" iconBefore={MoreIcon} />
        }
      >
        <div className="card_header-row">
          <Avatar color="primary" initials="홍" ariaHidden />
          <div>
            <h3 className="card_title">홍길동</h3>
            <p className="card_subtitle">프론트엔드 개발자</p>
          </div>
        </div>
      </CardHeader>
      ...
    </Card>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: withDocsCanvasRender(
    <Card variant="shadow" style={{ maxWidth: 320, width: '100%' }}>
      <CardHeader
        extra={
          <Button variant="ghost" size="sm" iconOnly ariaLabel="더 보기" iconBefore={MoreIcon} />
        }
      >
        <div className="card_header-row">
          <Avatar color="primary" initials="홍" ariaHidden />
          <div>
            <h3 className="card_title">홍길동</h3>
            <p className="card_subtitle">프론트엔드 개발자</p>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <TagGroup tight>
          <Tag size="sm" color="primary" label="React" />
          <Tag size="sm" color="primary" label="TypeScript" />
          <Tag size="sm" color="default" label="SCSS" />
        </TagGroup>
      </CardBody>
      <CardFooter between>
        <span className="color_muted size_sm">서울 · 온라인</span>
        <Button variant="outline" color="primary" size="sm" label="팔로우" />
      </CardFooter>
    </Card>,
  ),
};

export const Clickable = {
  name: '클릭 가능',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'a 태그 또는 card_clickable로 전체 카드를 링크·버튼으로 만듭니다. hoverable과 함께 사용합니다.',
      },
      source: {
        code: `import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';

export function ClickableExample() {
  return (
    <div className="card_deck card_deck-2">
      <Card
        tag="a"
        href="#"
        hoverable
        className="card_clickable"
        onClick={(e) => e.preventDefault()}
      >
        <CardBody>
          <h3 className="card_title">링크 카드</h3>
          <p className="card_subtitle">클릭하면 상세 페이지로 이동합니다.</p>
        </CardBody>
      </Card>
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: withDocsCanvasRender(
    <div className="card_deck card_deck-2">
      <Card tag="a" href="#" hoverable className="card_clickable" onClick={(e) => e.preventDefault()}>
        <CardBody>
          <h3 className="card_title">링크 카드</h3>
          <p className="card_subtitle">클릭하면 상세 페이지로 이동합니다.</p>
        </CardBody>
      </Card>
      <Card hoverable variant="shadow" className="card_clickable" tabIndex={0} role="link">
        <CardBody>
          <h3 className="card_title">인터랙티브 카드</h3>
          <p className="card_subtitle">tabindex와 role로 키보드 접근을 지원합니다.</p>
        </CardBody>
      </Card>
    </div>,
  ),
};

export const Disabled = {
  name: '비활성',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'is-disabled로 비활성 상태를 표시합니다.',
      },
      source: {
        code: `import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';

export function DisabledExample() {
  return (
    <Card className="is-disabled" style={{ maxWidth: 280, width: '100%' }}>
      <CardBody>
        <h3 className="card_title">비활성 카드</h3>
        <p className="card_subtitle">현재 이용할 수 없습니다.</p>
      </CardBody>
    </Card>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: withDocsCanvasRender(
    <Card className="is-disabled" style={{ maxWidth: 280, width: '100%' }}>
      <CardBody>
        <h3 className="card_title">비활성 카드</h3>
        <p className="card_subtitle">현재 이용할 수 없습니다.</p>
      </CardBody>
    </Card>,
  ),
};

export const Grid = {
  name: '카드 그리드',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'card_deck으로 여러 카드를 그리드로 배치합니다. card_deck-2 · card_deck-3로 열 수를 조절합니다.',
      },
      source: {
        code: `import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';
import CardHeader from '@uxkm/ui-react/components/CardHeader.jsx';

export function GridExample() {
  return (
    <div className="card_deck">
      <Card hoverable>
        <CardHeader title="Feature A" />
        <CardBody>빠른 성능과 가벼운 번들 크기.</CardBody>
      </Card>
      <Card hoverable>
        <CardHeader title="Feature B" />
        <CardBody>접근성을 고려한 마크업 구조.</CardBody>
      </Card>
      <Card hoverable>
        <CardHeader title="Feature C" />
        <CardBody>Pure SCSS로 커스터마이즈 가능.</CardBody>
      </Card>
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: withDocsCanvasRender(
    <div className="card_deck">
      <Card hoverable>
        <CardHeader title="Feature A" />
        <CardBody>빠른 성능과 가벼운 번들 크기.</CardBody>
      </Card>
      <Card hoverable>
        <CardHeader title="Feature B" />
        <CardBody>접근성을 고려한 마크업 구조.</CardBody>
      </Card>
      <Card hoverable>
        <CardHeader title="Feature C" />
        <CardBody>Pure SCSS로 커스터마이즈 가능.</CardBody>
      </Card>
    </div>,
  ),
};
