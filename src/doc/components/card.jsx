export const docMeta = {
  title: 'Card | UXKM Guide',
  activeNav: 'card',
  pageTitle: 'Card',
};

import Avatar from '@/components/Avatar.jsx';
import Button from '@/components/Button.jsx';
import Card from '@/components/Card.jsx';
import CardBody from '@/components/CardBody.jsx';
import CardFooter from '@/components/CardFooter.jsx';
import CardHeader from '@/components/CardHeader.jsx';
import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import Stat from '@/components/Stat.jsx';
import Tag from '@/components/Tag.jsx';
import TagGroup from '@/components/TagGroup.jsx';
import { avatarSample } from '@images';
import Image from 'next/image';
import NextLink from 'next/link';
import {
  cardClassColumns,
  cardClasses,
  cardFooterPropColumns,
  cardFooterProps,
  cardFooterSlots,
  cardHeaderPropColumns,
  cardHeaderProps,
  cardHeaderSlots,
  cardBodyPropColumns,
  cardBodyProps,
  cardBodySlots,
  cardPropColumns,
  cardProps,
  cardSlotColumns,
  cardSlots,
  cardTokenColumns,
  cardTokens,
} from '@/doc/data/card-api';

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

const basicCode = "import Button from '@/components/Button.jsx';\nimport Card from '@/components/Card.jsx';\nimport CardBody from '@/components/CardBody.jsx';\nimport CardFooter from '@/components/CardFooter.jsx';\nimport CardHeader from '@/components/CardHeader.jsx';\n\nexport function BasicExample() {\n  return (\n    <Card style={{ maxWidth: 360, width: '100%' }}>\n      <CardHeader title=\"카드 제목\" subtitle=\"부제목 또는 메타 정보\" />\n      <CardBody>카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다.</CardBody>\n      <CardFooter>\n        <Button variant=\"filled\" color=\"primary\" size=\"sm\" label=\"확인\" />\n        <Button variant=\"ghost\" size=\"sm\" label=\"취소\" />\n      </CardFooter>\n    </Card>\n  );\n}";

const simpleCode = "import Card from '@/components/Card.jsx';\nimport CardBody from '@/components/CardBody.jsx';\n\nexport function SimpleExample() {\n  return (\n    <>\n      <Card variant=\"shadow\" size=\"compact\" style={{ maxWidth: 280, width: '100%' }}>\n        <CardBody>\n          <p className=\"card_title\">알림</p>\n          새로운 메시지가 도착했습니다. 확인해 주세요.\n        </CardBody>\n      </Card>\n      <Card size=\"compact\" style={{ maxWidth: 280, width: '100%' }}>\n        <CardBody>컴팩트 카드 — 좁은 패딩으로 밀도 높은 정보를 표시합니다.</CardBody>\n      </Card>\n    </>\n  );\n}";

const skinCode = "import Card from '@/components/Card.jsx';\nimport CardBody from '@/components/CardBody.jsx';\n\nexport function SkinExample() {\n  return (\n    <div className=\"card_deck card_deck-2\">\n      <Card>\n        <CardBody>기본 — 테두리 · 그림자</CardBody>\n      </Card>\n      <Card variant=\"shadow\">\n        <CardBody>Shadow — 그림자</CardBody>\n      </Card>\n      <Card className=\"card_elevated\">\n        <CardBody>Elevated — 강한 그림자</CardBody>\n      </Card>\n      <Card variant=\"flat\">\n        <CardBody>Ghost — 투명 배경</CardBody>\n      </Card>\n    </div>\n  );\n}";

const sizeCode = "import Card from '@/components/Card.jsx';\nimport CardBody from '@/components/CardBody.jsx';\nimport CardHeader from '@/components/CardHeader.jsx';\n\nexport function SizeExample() {\n  return (\n    <div className=\"card_deck card_deck-2\">\n      <Card size=\"sm\">\n        <CardHeader title=\"Small\" />\n        <CardBody>작은 카드 — 좁은 패딩과 작은 제목.</CardBody>\n      </Card>\n      <Card>\n        <CardHeader title=\"Medium\" />\n        <CardBody>기본 크기 카드입니다.</CardBody>\n      </Card>\n      <Card size=\"lg\">\n        <CardHeader title=\"Large\" />\n        <CardBody>큰 카드 — 넓은 패딩과 큰 제목.</CardBody>\n      </Card>\n    </div>\n  );\n}";

const accentCode = "import Card from '@/components/Card.jsx';\nimport CardBody from '@/components/CardBody.jsx';\n\nexport function AccentExample() {\n  return (\n    <div className=\"card_deck card_deck-2\">\n      <Card className=\"card_accent color_primary\">\n        <CardBody>\n          <p className=\"card_title\">정보</p>\n          시스템 업데이트가 예정되어 있습니다.\n        </CardBody>\n      </Card>\n      <Card className=\"card_accent color_success\">\n        <CardBody>\n          <p className=\"card_title\">성공</p>\n          작업이 정상적으로 완료되었습니다.\n        </CardBody>\n      </Card>\n      <Card className=\"card_accent color_warning\">\n        <CardBody>\n          <p className=\"card_title\">주의</p>\n          저장 공간이 부족합니다.\n        </CardBody>\n      </Card>\n      <Card className=\"card_accent color_danger\">\n        <CardBody>\n          <p className=\"card_title\">오류</p>\n          연결에 실패했습니다. 다시 시도해 주세요.\n        </CardBody>\n      </Card>\n    </div>\n  );\n}";

const mediaCode = "import Image from 'next/image';\nimport { avatarSample } from '@images';\nimport Button from '@/components/Button.jsx';\nimport Card from '@/components/Card.jsx';\nimport CardBody from '@/components/CardBody.jsx';\nimport CardFooter from '@/components/CardFooter.jsx';\nimport CardHeader from '@/components/CardHeader.jsx';\nimport Tag from '@/components/Tag.jsx';\n\nexport function MediaExample() {\n  return (\n    <Card\n      hoverable\n      variant=\"shadow\"\n      style={{ maxWidth: 320, width: '100%' }}\n      media={\n        <Image\n          className=\"card_media\"\n          src={avatarSample}\n          alt=\"프로젝트 Alpha 썸네일\"\n          width={320}\n          height={180}\n          sizes=\"(max-width: 768px) 100vw, 320px\"\n        />\n      }\n    >\n      <CardHeader>\n        <div className=\"card_header-row\">\n          <h3 className=\"card_title\">프로젝트 Alpha</h3>\n          <Tag size=\"sm\" color=\"primary\" label=\"진행 중\" />\n        </div>\n        <p className=\"card_subtitle\">업데이트 · 2일 전</p>\n      </CardHeader>\n      <CardBody>디자인 시스템 구축 및 컴포넌트 라이브러리 개발 프로젝트입니다.</CardBody>\n      <CardFooter between>\n        <span className=\"color_muted size_sm\">3명 참여</span>\n        <Button variant=\"text\" color=\"primary\" size=\"sm\" label=\"자세히\" />\n      </CardFooter>\n    </Card>\n  );\n}";

const horizontalCode = "import Card from '@/components/Card.jsx';\nimport CardBody from '@/components/CardBody.jsx';\nimport CardFooter from '@/components/CardFooter.jsx';\nimport CardHeader from '@/components/CardHeader.jsx';\n\nconst DocIcon = (\n  <svg className=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" aria-hidden=\"true\">\n    <path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\" />\n    <path d=\"M14 2v6h6\" />\n  </svg>\n);\n\nexport function HorizontalExample() {\n  return (\n    <Card\n      className=\"card_horizontal\"\n      variant=\"shadow\"\n      style={{ maxWidth: 480, width: '100%' }}\n      media={\n        <div className=\"card_media card_media-placeholder\" role=\"img\" aria-label=\"문서 썸네일\">\n          {DocIcon}\n        </div>\n      }\n    >\n      <div className=\"card_inner\">\n        <CardHeader title=\"가이드 문서\" />\n        <CardBody>HTML 컴포넌트 사용법과 접근성 가이드를 확인하세요.</CardBody>\n        <CardFooter>\n          <a href=\"#\" className=\"link color_primary size_sm\" onClick={(e) => e.preventDefault()}>\n            문서 보기\n          </a>\n        </CardFooter>\n      </div>\n    </Card>\n  );\n}";

const webzineCode = `import Card from '@/components/Card.jsx';
import CardBody from '@/components/CardBody.jsx';

export function WebzineExample({ media }) {
  return (
    <Card
      layout="webzine"
      variant="shadow"
      media={media}
      title="도시를 바꾸는 작은 디자인"
      subtitle="Design Journal · 2026.07.31"
      style={{ maxWidth: 680, width: '100%' }}
    >
      <CardBody>
        일상의 동선과 경험을 개선하는 공공 디자인 사례를 깊이 있게 소개합니다.
      </CardBody>
    </Card>
  );
}`;

const newsListCode = `import Card from '@/components/Card.jsx';
import CardBody from '@/components/CardBody.jsx';

export function NewsListExample({ firstMedia, secondMedia }) {
  return (
    <div className="card_news-list">
      <Card
        layout="news"
        media={firstMedia}
        title="디자인 시스템 업데이트"
        subtitle="제품 소식 · 10분 전"
      >
        <CardBody>접근성 토큰과 컴포넌트 API가 개선되었습니다.</CardBody>
      </Card>
      <Card
        layout="news"
        mediaPosition="right"
        media={secondMedia}
        title="새로운 가이드 공개"
        subtitle="가이드 · 1시간 전"
      >
        <CardBody>콘텐츠 작성과 레이아웃 원칙을 확인하세요.</CardBody>
      </Card>
    </div>
  );
}`;

const mediaPositionCode = `import Card from '@/components/Card.jsx';
import CardBody from '@/components/CardBody.jsx';

export function MediaPositionExample({ media }) {
  return (
    <div className="card_deck card_deck-2">
      <Card mediaPosition="left" mediaDivider={false} media={media} title="이미지 좌측 · 구분선 없음">
        <CardBody>미디어 다음에 콘텐츠를 배치합니다.</CardBody>
      </Card>
      <Card mediaPosition="right" mediaDivider={false} media={media} title="이미지 우측 · 구분선 없음">
        <CardBody>콘텐츠 다음에 미디어를 배치합니다.</CardBody>
      </Card>
    </div>
  );
}`;

const productListCode = `import Button from '@/components/Button.jsx';
import Card from '@/components/Card.jsx';
import CardBody from '@/components/CardBody.jsx';
import CardFooter from '@/components/CardFooter.jsx';

export function ProductListExample({ firstMedia, secondMedia }) {
  return (
    <div className="card_product-list">
      <Card
        layout="product"
        mediaDivider={false}
        media={firstMedia}
        title="라이트 러닝 재킷"
        subtitle="무료 배송"
      >
        <CardBody lineClamp={2}>
          가볍고 통기성이 좋은 데일리 러닝 재킷입니다. 생활 방수 소재를 적용했습니다.
        </CardBody>
        <CardFooter justify="between">
          <p className="card_price">
            <data value="89000">89,000원</data>
            <del className="card_price-original">
              <data value="109000">109,000원</data>
            </del>
          </p>
          <Button variant="filled" size="sm" label="담기" />
        </CardFooter>
      </Card>
      <Card
        layout="product"
        mediaDivider={false}
        media={secondMedia}
        title="데일리 백팩"
        subtitle="오늘 출발"
      >
        <CardBody lineClamp={1}>
          노트북 수납과 생활 방수를 지원하는 가벼운 데일리 백팩입니다.
        </CardBody>
        <CardFooter justify="between">
          <p className="card_price">
            <data value="64000">64,000원</data>
          </p>
          <Button variant="outline" size="sm" label="상세보기" />
        </CardFooter>
      </Card>
    </div>
  );
}`;

const lineClampCode = `import Card from '@/components/Card.jsx';
import CardBody from '@/components/CardBody.jsx';
import CardHeader from '@/components/CardHeader.jsx';

const description =
  '디자인 시스템은 제품 전반의 일관성을 높이고 반복되는 의사결정을 줄여 팀이 더 빠르게 사용자 문제에 집중하도록 돕습니다. 구성 요소와 사용 원칙을 하나의 언어로 정리하면 디자이너와 개발자가 같은 기준으로 협업할 수 있으며, 새로운 기능을 추가할 때도 품질을 안정적으로 유지할 수 있습니다.';

export function LineClampExample() {
  return (
    <div className="card_deck card_deck-3">
      <Card>
        <CardHeader title="한 줄 말줄임" />
        <CardBody lineClamp={1}>{description}</CardBody>
      </Card>
      <Card>
        <CardHeader title="두 줄 말줄임" />
        <CardBody lineClamp={2}>{description}</CardBody>
      </Card>
      <Card>
        <CardHeader title="세 줄 말줄임" />
        <CardBody lineClamp={3}>{description}</CardBody>
      </Card>
    </div>
  );
}`;

const clampDescription =
  '디자인 시스템은 제품 전반의 일관성을 높이고 반복되는 의사결정을 줄여 팀이 더 빠르게 사용자 문제에 집중하도록 돕습니다. 구성 요소와 사용 원칙을 하나의 언어로 정리하면 디자이너와 개발자가 같은 기준으로 협업할 수 있으며, 새로운 기능을 추가할 때도 품질을 안정적으로 유지할 수 있습니다.';

const iconDemoCode = "import Card from '@/components/Card.jsx';\nimport CardBody from '@/components/CardBody.jsx';\nimport Stat from '@/components/Stat.jsx';\n\nconst BoltIcon = (\n  <svg className=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\">\n    <path d=\"M13 2L3 14h9l-1 8 10-12h-9l1-8z\" />\n  </svg>\n);\n\nconst ShieldIcon = (\n  <svg className=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\">\n    <path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\" />\n  </svg>\n);\n\nexport function IconExample() {\n  return (\n    <div className=\"card_deck\">\n      <Card variant=\"shadow\" hoverable>\n        <CardBody>\n          <span className=\"card_icon color_primary\" aria-hidden=\"true\">\n            {BoltIcon}\n          </span>\n          <h3 className=\"card_title\">빠른 성능</h3>\n          <p className=\"card_subtitle\">가벼운 번들, 빠른 로딩</p>\n        </CardBody>\n      </Card>\n      <Card variant=\"shadow\" hoverable>\n        <CardBody>\n          <span className=\"card_icon color_success\" aria-hidden=\"true\">\n            {ShieldIcon}\n          </span>\n          <h3 className=\"card_title\">접근성</h3>\n          <p className=\"card_subtitle\">WCAG 2.2 AA 기준</p>\n        </CardBody>\n      </Card>\n      <Card variant=\"shadow\">\n        <CardBody>\n          <Stat title=\"월간 활성 사용자\" value=\"24.5K\" description=\"+18.2%\" trendColor=\"success\" />\n        </CardBody>\n      </Card>\n    </div>\n  );\n}";

const profileCode = `import Avatar from '@/components/Avatar.jsx';
import Button from '@/components/Button.jsx';
import Card from '@/components/Card.jsx';
import CardBody from '@/components/CardBody.jsx';
import CardFooter from '@/components/CardFooter.jsx';
import CardHeader from '@/components/CardHeader.jsx';
import Icon from '@/components/Icon.jsx';
import Tag from '@/components/Tag.jsx';
import TagGroup from '@/components/TagGroup.jsx';

export function ProfileExample() {
  return (
    <Card variant="shadow" style={{ maxWidth: 320, width: '100%' }}>
      <CardHeader
        extra={
          <Button
            variant="ghost"
            size="sm"
            iconOnly
            ariaLabel="더 보기"
            iconBefore={<Icon name="more-horizontal" />}
          />
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
      <CardFooter ratio="2:1">
        <span className="color_muted size_sm">서울 · 온라인</span>
        <Button variant="outline" color="primary" size="sm" label="팔로우" />
      </CardFooter>
    </Card>
  );
}`;

const footerLayoutCode = `import Button from '@/components/Button.jsx';
import Card from '@/components/Card.jsx';
import CardBody from '@/components/CardBody.jsx';
import CardFooter from '@/components/CardFooter.jsx';

export function FooterLayoutExample() {
  return (
    <div className="card_deck">
      <Card>
        <CardBody>단일 액션</CardBody>
        <CardFooter full justify="center">
          <Button variant="filled" label="전체 너비 액션" />
        </CardFooter>
      </Card>
      <Card>
        <CardBody>균등 분할</CardBody>
        <CardFooter ratio="1:1" flush>
          <Button variant="ghost" label="취소" />
          <Button variant="filled" label="확인" />
        </CardFooter>
      </Card>
      <Card>
        <CardBody>상황별 비율</CardBody>
        <CardFooter ratio="1:2">
          <Button variant="ghost" label="이전" />
          <Button variant="filled" label="다음 단계" />
        </CardFooter>
      </Card>
    </div>
  );
}`;

const clickableCode = "import NextLink from 'next/link';\nimport Card from '@/components/Card.jsx';\nimport CardBody from '@/components/CardBody.jsx';\n\nexport function ClickableExample() {\n  return (\n    <div className=\"card_deck card_deck-2\">\n      <Card\n        as={NextLink}\n        href=\"/components/avatar\"\n        hoverable\n        className=\"card_clickable\"\n      >\n        <CardBody>\n          <h3 className=\"card_title\">Next.js 링크 카드</h3>\n          <p className=\"card_subtitle\">클라이언트 내비게이션으로 Avatar 문서에 이동합니다.</p>\n        </CardBody>\n      </Card>\n      <Card\n        as=\"button\"\n        type=\"button\"\n        hoverable\n        variant=\"shadow\"\n        className=\"card_clickable\"\n        onClick={() => console.log('card action')}\n      >\n        <CardBody>\n          <h3 className=\"card_title\">버튼 카드</h3>\n          <p className=\"card_subtitle\">네이티브 button으로 키보드 동작을 지원합니다.</p>\n        </CardBody>\n      </Card>\n    </div>\n  );\n}";

const disabledCode = "import Card from '@/components/Card.jsx';\nimport CardBody from '@/components/CardBody.jsx';\n\nexport function DisabledExample() {\n  return (\n    <Card className=\"is-disabled\" style={{ maxWidth: 280, width: '100%' }}>\n      <CardBody>\n        <h3 className=\"card_title\">비활성 카드</h3>\n        <p className=\"card_subtitle\">현재 이용할 수 없습니다.</p>\n      </CardBody>\n    </Card>\n  );\n}";

const gridCode = "import Card from '@/components/Card.jsx';\nimport CardBody from '@/components/CardBody.jsx';\nimport CardHeader from '@/components/CardHeader.jsx';\n\nexport function GridExample() {\n  return (\n    <div className=\"card_deck\">\n      <Card hoverable>\n        <CardHeader title=\"Feature A\" />\n        <CardBody>빠른 성능과 가벼운 번들 크기.</CardBody>\n      </Card>\n      <Card hoverable>\n        <CardHeader title=\"Feature B\" />\n        <CardBody>접근성을 고려한 마크업 구조.</CardBody>\n      </Card>\n      <Card hoverable>\n        <CardHeader title=\"Feature C\" />\n        <CardBody>Pure SCSS로 커스터마이즈 가능.</CardBody>\n      </Card>\n    </div>\n  );\n}";

export default function CardDoc() {
  return (
    <>
      <div className="page_intro">
          <h1>Card</h1>
          <p className="lead">콘텐츠 블록을 담는 카드 컴포넌트입니다.</p>
        </div>

        <DemoSection
          headingId="basic-heading"
          title="기본"
          description="card_header · card_body · card_footer 구조를 가집니다."
          code={basicCode}
        >
          <Card style={{ maxWidth: '360px', width: '100%' }}>
            <CardHeader title="카드 제목" subtitle="부제목 또는 메타 정보" />
            <CardBody>
              카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다.
            </CardBody>
            <CardFooter>
              <Button variant="filled" color="primary" size="sm" label="확인" />
              <Button variant="ghost" size="sm" label="취소" />
            </CardFooter>
          </Card>
        </DemoSection>

        <DemoSection
          headingId="simple-heading"
          title="간단"
          description="header나 footer 없이 body만 사용하는 단순 카드입니다."
          code={simpleCode}
        >
          <Card variant="shadow" size="compact" style={{ maxWidth: '280px', width: '100%' }}>
            <CardBody>
              <p className="card_title">알림</p>
              새로운 메시지가 도착했습니다. 확인해 주세요.
            </CardBody>
          </Card>

          <Card size="compact" style={{ maxWidth: '280px', width: '100%' }}>
            <CardBody>
              컴팩트 카드 — 좁은 패딩으로 밀도 높은 정보를 표시합니다.
            </CardBody>
          </Card>
        </DemoSection>

        <DemoSection
          headingId="skin-heading"
          title="스킨"
          description="기본은 테두리·그림자가 적용됩니다. variant로 외형을 조절합니다."
          code={skinCode}
        >
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
        </DemoSection>

        <DemoSection
          headingId="size-heading"
          title="크기"
          description="size로 패딩과 제목 크기를 조절합니다."
          code={sizeCode}
        >
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
        </DemoSection>

        <DemoSection
          headingId="accent-heading"
          title="강조 테두리"
          description="card_accent와 color_*로 왼쪽 강조선을 적용합니다."
          code={accentCode}
        >
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
          </div>
        </DemoSection>

        <DemoSection
          headingId="media-heading"
          title="미디어"
          description="media prop으로 상단 이미지·썸네일(card_media) 영역을 추가합니다. Next Image도 그대로 전달할 수 있습니다."
          code={mediaCode}
        >
          <Card
            hoverable
            variant="shadow"
            style={{ maxWidth: '320px', width: '100%' }}
            media={
              <Image
                className="card_media"
                src={avatarSample}
                alt="프로젝트 Alpha 썸네일"
                width={320}
                height={180}
                sizes="(max-width: 768px) 100vw, 320px"
              />
            }
          >
            <CardHeader>
              <div className="card_header-row">
                <h3 className="card_title">프로젝트 Alpha</h3>
                <Tag size="sm" color="primary" label="진행 중" />
              </div>
              <p className="card_subtitle">업데이트 · 2일 전</p>
            </CardHeader>
            <CardBody>
              디자인 시스템 구축 및 컴포넌트 라이브러리 개발 프로젝트입니다.
            </CardBody>
            <CardFooter between>
              <span className="color_muted size_sm">3명 참여</span>
              <Button variant="text" color="primary" size="sm" label="자세히" />
            </CardFooter>
          </Card>
        </DemoSection>

        <DemoSection
          headingId="horizontal-heading"
          title="가로"
          description="card_horizontal로 미디어와 콘텐츠를 나란히 배치합니다. card_inner로 본문을 감쌉니다."
          code={horizontalCode}
        >
          <Card
            className="card_horizontal"
            variant="shadow"
            style={{ maxWidth: '480px', width: '100%' }}
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
        </DemoSection>

        <DemoSection
          headingId="webzine-heading"
          title="웹진형"
          description="layout=&quot;webzine&quot;은 넓은 상단 이미지와 강조된 제목·본문으로 에디토리얼 콘텐츠를 구성합니다."
          code={webzineCode}
        >
          <Card
            layout="webzine"
            variant="shadow"
            media={
              <div className="card_media card_media-placeholder" role="img" aria-label="웹진 대표 이미지">
                {DocIcon}
              </div>
            }
            title="도시를 바꾸는 작은 디자인"
            subtitle="Design Journal · 2026.07.31"
            style={{ maxWidth: '680px', width: '100%' }}
          >
            <CardBody>
              일상의 동선과 경험을 개선하는 공공 디자인 사례를 깊이 있게 소개합니다.
            </CardBody>
          </Card>
        </DemoSection>

        <DemoSection
          headingId="news-list-heading"
          title="뉴스 리스트형"
          description="layout=&quot;news&quot;는 밀도 높은 가로형 뉴스 항목을 만듭니다. 기본 이미지는 좌측이며 mediaPosition으로 우측 배치도 가능합니다."
          code={newsListCode}
          stack
        >
          <div className="card_news-list">
            <Card
              layout="news"
              media={
                <div className="card_media card_media-placeholder" role="img" aria-label="업데이트 뉴스 이미지">
                  {BoltIcon}
                </div>
              }
              title="디자인 시스템 업데이트"
              subtitle="제품 소식 · 10분 전"
            >
              <CardBody>접근성 토큰과 컴포넌트 API가 개선되었습니다.</CardBody>
            </Card>
            <Card
              layout="news"
              mediaPosition="right"
              media={
                <div className="card_media card_media-placeholder" role="img" aria-label="가이드 뉴스 이미지">
                  {DocIcon}
                </div>
              }
              title="새로운 가이드 공개"
              subtitle="가이드 · 1시간 전"
            >
              <CardBody>콘텐츠 작성과 레이아웃 원칙을 확인하세요.</CardBody>
            </Card>
          </div>
        </DemoSection>

        <DemoSection
          headingId="media-position-heading"
          title="이미지 좌측 · 우측"
          description="mediaPosition을 left 또는 right로 지정하면 Card가 미디어와 콘텐츠 래퍼를 자동으로 구성합니다. mediaDivider={false}로 이미지 경계선을 제거할 수 있습니다."
          code={mediaPositionCode}
          stack
        >
          <div className="card_deck card_deck-2">
            <Card
              mediaPosition="left"
              mediaDivider={false}
              media={
                <div className="card_media card_media-placeholder" role="img" aria-label="좌측 배치 이미지">
                  {DocIcon}
                </div>
              }
              title="이미지 좌측 · 구분선 없음"
            >
              <CardBody>미디어 다음에 콘텐츠를 배치합니다.</CardBody>
            </Card>
            <Card
              mediaPosition="right"
              mediaDivider={false}
              media={
                <div className="card_media card_media-placeholder" role="img" aria-label="우측 배치 이미지">
                  {DocIcon}
                </div>
              }
              title="이미지 우측 · 구분선 없음"
            >
              <CardBody>콘텐츠 다음에 미디어를 배치합니다.</CardBody>
            </Card>
          </div>
        </DemoSection>

        <DemoSection
          headingId="product-list-heading"
          title="상품 리스트형"
          description="layout=&quot;product&quot;는 상품 이미지·설명·가격·액션을 밀도 높은 가로 목록으로 구성합니다."
          code={productListCode}
          stack
        >
          <div className="card_product-list">
            <Card
              layout="product"
              mediaDivider={false}
              media={
                <div className="card_media card_media-placeholder" role="img" aria-label="라이트 러닝 재킷 상품 이미지">
                  {BoltIcon}
                </div>
              }
              title="라이트 러닝 재킷"
              subtitle="무료 배송"
            >
              <CardBody lineClamp={2}>
                가볍고 통기성이 좋은 데일리 러닝 재킷입니다. 생활 방수 소재를 적용했습니다.
              </CardBody>
              <CardFooter justify="between">
                <p className="card_price">
                  <data value="89000">89,000원</data>
                  <del className="card_price-original">
                    <data value="109000">109,000원</data>
                  </del>
                </p>
                <Button variant="filled" size="sm" label="담기" />
              </CardFooter>
            </Card>
            <Card
              layout="product"
              mediaDivider={false}
              media={
                <div className="card_media card_media-placeholder" role="img" aria-label="데일리 백팩 상품 이미지">
                  {DocIcon}
                </div>
              }
              title="데일리 백팩"
              subtitle="오늘 출발"
            >
              <CardBody lineClamp={1}>
                노트북 수납과 생활 방수를 지원하는 가벼운 데일리 백팩입니다.
              </CardBody>
              <CardFooter justify="between">
                <p className="card_price">
                  <data value="64000">64,000원</data>
                </p>
                <Button variant="outline" size="sm" label="상세보기" />
              </CardFooter>
            </Card>
          </div>
        </DemoSection>

        <DemoSection
          headingId="line-clamp-heading"
          title="내용 말줄임"
          description="CardBody의 lineClamp로 내용 영역을 1줄·2줄·3줄까지 표시한 뒤 말줄임 처리합니다."
          code={lineClampCode}
          stack
        >
          <div className="card_deck card_deck-3">
            <Card>
              <CardHeader title="한 줄 말줄임" />
              <CardBody lineClamp={1}>{clampDescription}</CardBody>
            </Card>
            <Card>
              <CardHeader title="두 줄 말줄임" />
              <CardBody lineClamp={2}>{clampDescription}</CardBody>
            </Card>
            <Card>
              <CardHeader title="세 줄 말줄임" />
              <CardBody lineClamp={3}>{clampDescription}</CardBody>
            </Card>
          </div>
        </DemoSection>

        <DemoSection
          headingId="icon-heading"
          title="아이콘 · 통계"
          description="card_icon · card_stat으로 기능 소개·지표 카드를 구성합니다."
          code={iconDemoCode}
        >
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
          </div>
        </DemoSection>

        <DemoSection
          headingId="profile-heading"
          title="프로필"
          description="CardHeader extra prop으로 헤더 우측 액션(card_extra)을 배치합니다."
          code={profileCode}
        >
          <Card variant="shadow" style={{ maxWidth: '320px', width: '100%' }}>
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
            <CardFooter ratio="2:1">
              <span className="color_muted size_sm">서울 · 온라인</span>
              <Button variant="outline" color="primary" size="sm" label="팔로우" />
            </CardFooter>
          </Card>
        </DemoSection>

        <DemoSection
          headingId="footer-layout-heading"
          title="푸터 레이아웃"
          description="justify로 좌·중앙·우·양끝 정렬하고, full로 단일 항목을 100% 확장합니다. ratio는 1:1 · 1:2 · 2:1 분할을, flush는 패딩 제거를 적용합니다."
          code={footerLayoutCode}
          stack
        >
          <div className="card_deck">
            <Card>
              <CardBody>단일 액션</CardBody>
              <CardFooter full justify="center">
                <Button variant="filled" label="전체 너비 액션" />
              </CardFooter>
            </Card>
            <Card>
              <CardBody>균등 분할</CardBody>
              <CardFooter ratio="1:1" flush>
                <Button variant="ghost" label="취소" />
                <Button variant="filled" label="확인" />
              </CardFooter>
            </Card>
            <Card>
              <CardBody>상황별 비율</CardBody>
              <CardFooter ratio="1:2">
                <Button variant="ghost" label="이전" />
                <Button variant="filled" label="다음 단계" />
              </CardFooter>
            </Card>
          </div>
        </DemoSection>

        <DemoSection
          headingId="clickable-heading"
          title="클릭 가능"
          description="as로 Next Link 또는 네이티브 button을 지정해 카드 전체를 올바른 링크·버튼으로 만듭니다."
          code={clickableCode}
        >
          <div className="card_deck card_deck-2">
            <Card
              as={NextLink}
              href="/components/avatar"
              hoverable
              className="card_clickable"
            >
              <CardBody>
                <h3 className="card_title">Next.js 링크 카드</h3>
                <p className="card_subtitle">클라이언트 내비게이션으로 Avatar 문서에 이동합니다.</p>
              </CardBody>
            </Card>
            <Card
              as="button"
              type="button"
              hoverable
              variant="shadow"
              className="card_clickable"
              onClick={() => {}}
            >
              <CardBody>
                <h3 className="card_title">버튼 카드</h3>
                <p className="card_subtitle">네이티브 button으로 키보드 동작을 지원합니다.</p>
              </CardBody>
            </Card>
          </div>
        </DemoSection>

        <DemoSection
          headingId="disabled-heading"
          title="비활성"
          description="is-disabled로 비활성 상태를 표시합니다."
          code={disabledCode}
        >
          <Card className="is-disabled" style={{ maxWidth: '280px', width: '100%' }}>
            <CardBody>
              <h3 className="card_title">비활성 카드</h3>
              <p className="card_subtitle">현재 이용할 수 없습니다.</p>
            </CardBody>
          </Card>
        </DemoSection>

        <DemoSection
          headingId="grid-heading"
          title="카드 그리드"
          description="card_deck으로 여러 카드를 그리드로 배치합니다. card_deck-2 · card_deck-3로 열 수를 조절합니다."
          code={gridCode}
          stack
        >
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
        </DemoSection>

        <ApiSection headingId="api-props-heading" title="API · Card Props">
          <ApiTable columns={cardPropColumns} rows={cardProps} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-header-props-heading" title="API · CardHeader Props">
          <ApiTable columns={cardHeaderPropColumns} rows={cardHeaderProps} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-body-props-heading" title="API · CardBody Props">
          <ApiTable columns={cardBodyPropColumns} rows={cardBodyProps} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-footer-props-heading" title="API · CardFooter Props">
          <ApiTable columns={cardFooterPropColumns} rows={cardFooterProps} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-slots-heading" title="API · Card Children">
          <ApiTable columns={cardSlotColumns} rows={cardSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-header-slots-heading" title="API · CardHeader Children">
          <ApiTable columns={cardSlotColumns} rows={cardHeaderSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-body-slots-heading" title="API · CardBody Children">
          <ApiTable columns={cardSlotColumns} rows={cardBodySlots} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-footer-slots-heading" title="API · CardFooter Children">
          <ApiTable columns={cardSlotColumns} rows={cardFooterSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection
          headingId="api-classes-heading"
          title="클래스 · 속성"
          description="React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
        >
          <ApiTable columns={cardClassColumns} rows={cardClasses} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="tokens-heading" title="디자인 토큰">
          <ApiTable columns={cardTokenColumns} rows={cardTokens} codeColumn="name" />
        </ApiSection>
    </>
  );
}
