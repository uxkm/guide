export const docMeta = {
  title: 'Tabs | UXKM Guide',
  activeNav: 'tabs',
  pageTitle: 'Tabs',
};

import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import Button from '@uxkm/ui-react/components/Button.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import TabMenu from '@uxkm/ui-react/components/TabMenu.jsx';
import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';
import {
  tabMenuChildColumns,
  tabMenuChildren,
  tabMenuPropColumns,
  tabMenuProps,
  tabPanelChildColumns,
  tabPanelChildren,
  tabPanelPropColumns,
  tabPanelProps,
  tabsChildColumns,
  tabsChildren,
  tabsClassColumns,
  tabsClasses,
  tabsPropColumns,
  tabsProps,
  tabsTokenColumns,
  tabsTokens,
} from '@/doc/data/tabs-api';

const basicCode = `import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function BasicExample() {
  return (
    <Tabs ariaLabel="프로젝트 정보">
      <TabPanel label="개요" active>
        <p>프로젝트 개요와 목표를 설명하는 영역입니다. 탭을 클릭하거나 화살표 키로 전환할 수 있습니다.</p>
      </TabPanel>
      <TabPanel label="팀">
        <p>팀 구성원과 역할을 표시합니다.</p>
      </TabPanel>
      <TabPanel label="활동">
        <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
      </TabPanel>
    </Tabs>
  );
}`;

const dynamicCode = `import TabMenu from '@uxkm/ui-react/components/TabMenu.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

const dynamicItems = [
  { key: 'overview', label: '개요', active: true },
  { key: 'team', label: '팀' },
  { key: 'activity', label: '활동' },
];

export function DynamicExample() {
  return (
    <>
      <Tabs mode="dynamic" items={dynamicItems} ariaLabel="동적 탭 (items)" panel={({ item }) => {
        if (item?.key === 'overview') return <p>프로젝트 개요와 목표를 설명하는 영역입니다.</p>;
        if (item?.key === 'team') return <p>팀 구성원과 역할을 표시합니다.</p>;
        return <p>최근 활동 로그와 타임라인을 보여줍니다.</p>;
      }} />
      <Tabs
        mode="dynamic"
        ariaLabel="동적 탭 (TabMenu)"
        panel={({ value }) => {
          if (value === 'overview') return <p>TabMenu로 선언한 동적 패널 — 개요</p>;
          if (value === 'team') return <p>TabMenu로 선언한 동적 패널 — 팀</p>;
          return <p>TabMenu로 선언한 동적 패널 — 활동</p>;
        }}
      >
        <TabMenu label="개요" value="overview" active />
        <TabMenu label="팀" value="team" />
        <TabMenu label="활동" value="activity" />
      </Tabs>
    </>
  );
}`;

const indicatorSlideCode = `import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function IndicatorSlideExample() {
  return (
    <>
      <Tabs indicator="slide" ariaLabel="슬라이드 라인 탭">
        <TabPanel label="개요" active>
          <p>라인 스킨에서 하단 인디케이터가 탭 전환 시 슬라이드됩니다.</p>
        </TabPanel>
        <TabPanel label="팀">
          <p>팀 구성원과 역할을 표시합니다.</p>
        </TabPanel>
        <TabPanel label="활동">
          <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
        </TabPanel>
      </Tabs>
      <Tabs variant="pill" indicator="slide" ariaLabel="슬라이드 필 탭">
        <TabPanel label="목록" active>
          <p>필 스킨에서 배경 인디케이터가 이동합니다.</p>
        </TabPanel>
        <TabPanel label="그리드">
          <p>그리드 뷰 콘텐츠</p>
        </TabPanel>
        <TabPanel label="보드">
          <p>보드 뷰 콘텐츠</p>
        </TabPanel>
      </Tabs>
    </>
  );
}`;

const layoutEqualCode = `import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function LayoutEqualExample() {
  return (
    <>
      <Tabs layout="equal" ariaLabel="균등 분할 탭">
        <TabPanel label="개요" active>
          <p>탭이 컨테이너 너비에 맞춰 균등하게 배치됩니다.</p>
        </TabPanel>
        <TabPanel label="팀 구성">
          <p>팀 구성원과 역할을 표시합니다.</p>
        </TabPanel>
        <TabPanel label="활동 로그">
          <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
        </TabPanel>
        <TabPanel label="설정">
          <p>프로젝트 설정을 관리합니다.</p>
        </TabPanel>
      </Tabs>
      <Tabs layout="equal" variant="pill" indicator="slide" ariaLabel="균등 분할 필 탭">
        <TabPanel label="일간" active>일간 통계</TabPanel>
        <TabPanel label="주간">주간 통계</TabPanel>
        <TabPanel label="월간">월간 통계</TabPanel>
        <TabPanel label="연간">연간 통계</TabPanel>
      </Tabs>
    </>
  );
}`;

const layoutScrollCode = `import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function LayoutScrollExample() {
  return (
    <Tabs layout="scroll" className="tabs_demo-narrow" ariaLabel="네비 스크롤 탭">
      <TabPanel label="홈" active>홈 패널</TabPanel>
      <TabPanel label="제품 소개">제품 패널</TabPanel>
      <TabPanel label="솔루션">솔루션 패널</TabPanel>
      <TabPanel label="가격 정책">가격 패널</TabPanel>
      <TabPanel label="고객 사례">고객 사례 패널</TabPanel>
      <TabPanel label="리소스 센터">리소스 패널</TabPanel>
      <TabPanel label="기술 지원">지원 패널</TabPanel>
    </Tabs>
  );
}`;

const cardCode = `import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function CardExample() {
  return (
    <Tabs variant="card" ariaLabel="계정 설정">
      <TabPanel label="프로필" active>
        <p>이름, 아바타, 소개 문구를 수정합니다.</p>
      </TabPanel>
      <TabPanel label="보안">
        <p>비밀번호 변경과 2단계 인증을 설정합니다.</p>
      </TabPanel>
      <TabPanel label="알림">
        <p>이메일·푸시 알림 수신 여부를 관리합니다.</p>
      </TabPanel>
    </Tabs>
  );
}`;

const pillCode = `import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function PillExample() {
  return (
    <Tabs variant="pill" ariaLabel="보기 모드">
      <TabPanel label="목록" active>
        <p className="tabs_panel-placeholder">목록 뷰 콘텐츠</p>
      </TabPanel>
      <TabPanel label="그리드">
        <p className="tabs_panel-placeholder">그리드 뷰 콘텐츠</p>
      </TabPanel>
      <TabPanel label="보드">
        <p className="tabs_panel-placeholder">보드 뷰 콘텐츠</p>
      </TabPanel>
    </Tabs>
  );
}`;

const sizeCode = `import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function SizeExample() {
  return (
    <>
      <Tabs size="sm" ariaLabel="Small 탭">
        <TabPanel label="Small A" active>Small 탭 패널</TabPanel>
        <TabPanel label="Small B">Small 탭 패널 B</TabPanel>
      </Tabs>
      <Tabs size="lg" ariaLabel="Large 탭">
        <TabPanel label="Large A" active>Large 탭 패널</TabPanel>
        <TabPanel label="Large B">Large 탭 패널 B</TabPanel>
      </Tabs>
    </>
  );
}`;

const iconCode = `import Icon from '@uxkm/ui-react/components/Icon.jsx';
import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function IconExample() {
  return (
    <Tabs ariaLabel="대시보드 섹션">
      <TabPanel label="대시보드" active icon={<Icon name="grid" />}>
        대시보드 요약 패널
      </TabPanel>
      <TabPanel label="사용자" icon={<Icon name="user" />}>
        사용자 목록 패널
      </TabPanel>
      <TabPanel label="문서" icon={<Icon name="book" />}>
        문서 목록 패널
      </TabPanel>
    </Tabs>
  );
}`;

const badgeCode = `import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function BadgeExample() {
  return (
    <Tabs ariaLabel="알림 센터">
      <TabPanel label="전체" active>전체 알림 목록</TabPanel>
      <TabPanel
        label="읽지 않음"
        badge={
          <span className="badge badge_count color_danger tabs_badge" aria-label="읽지 않은 알림 12건">
            12
          </span>
        }
      >
        읽지 않은 알림 12건
      </TabPanel>
      <TabPanel
        label="멘션"
        badge={<span className="badge badge_count color_primary tabs_badge">3</span>}
      >
        멘션 알림 3건
      </TabPanel>
    </Tabs>
  );
}`;

const extraCode = `import Button from '@uxkm/ui-react/components/Button.jsx';
import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function ExtraExample() {
  return (
    <Tabs
      ariaLabel="파일 관리"
      extra={<Button variant="filled" color="primary" size="sm" label="업로드" />}
    >
      <TabPanel label="내 파일" active>내 파일 목록</TabPanel>
      <TabPanel label="공유됨">공유된 파일 목록</TabPanel>
      <TabPanel label="최근">최근 파일 목록</TabPanel>
    </Tabs>
  );
}`;

const scrollCode = `import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function ScrollExample() {
  return (
    <Tabs scrollable className="tabs_demo-narrow" ariaLabel="긴 탭 목록">
      <TabPanel label="홈" active>홈 패널</TabPanel>
      <TabPanel label="제품">제품 패널</TabPanel>
      <TabPanel label="솔루션">솔루션 패널</TabPanel>
      <TabPanel label="가격">가격 패널</TabPanel>
      <TabPanel label="고객 사례">고객 사례 패널</TabPanel>
      <TabPanel label="리소스">리소스 패널</TabPanel>
      <TabPanel label="지원">지원 패널</TabPanel>
    </Tabs>
  );
}`;

const disabledCode = `import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function DisabledExample() {
  return (
    <Tabs ariaLabel="권한별 탭">
      <TabPanel label="공개" active>공개 콘텐츠</TabPanel>
      <TabPanel label="팀">팀 전용 콘텐츠</TabPanel>
      <TabPanel label="관리자" disabled>관리자 전용 콘텐츠</TabPanel>
    </Tabs>
  );
}`;

const verticalCode = `import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function VerticalExample() {
  return (
    <>
      <Tabs vertical ariaLabel="수직 라인 탭">
        <TabPanel label="일반" active>
          <p>일반 설정 패널입니다.</p>
        </TabPanel>
        <TabPanel label="보안">
          <p>보안 설정 패널입니다.</p>
        </TabPanel>
        <TabPanel label="결제">
          <p>결제 설정 패널입니다.</p>
        </TabPanel>
      </Tabs>
      <Tabs vertical variant="card" ariaLabel="수직 카드 탭">
        <TabPanel label="문서" active>문서 관리 패널</TabPanel>
        <TabPanel label="미디어">미디어 관리 패널</TabPanel>
        <TabPanel label="아카이브">아카이브 패널</TabPanel>
      </Tabs>
    </>
  );
}`;

const dynamicItems = [
  { key: 'overview', label: '개요', active: true },
  { key: 'team', label: '팀' },
  { key: 'activity', label: '활동' },
];

export default function TabsDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Tabs</h1>
        <p className="lead">같은 맥락의 콘텐츠를 탭으로 전환하는 컴포넌트입니다. 라인·카드·필 스킨, 균등 분할·네비 스크롤 레이아웃, 아이콘·배지를 지원합니다.</p>
      </div>

      <DemoSection
        headingId="basic-heading"
        title="기본 (라인)"
        description={'tabs_line이 기본 스킨입니다. role="tablist" · role="tab" · role="tabpanel"과 aria-selected, aria-controls로 접근성을 보장합니다.'}
        code={basicCode}
      >
        <Tabs ariaLabel="프로젝트 정보">
          <TabPanel label="개요" active>
            <p>프로젝트 개요와 목표를 설명하는 영역입니다. 탭을 클릭하거나 화살표 키로 전환할 수 있습니다.</p>
          </TabPanel>
          <TabPanel label="팀">
            <p>팀 구성원과 역할을 표시합니다.</p>
          </TabPanel>
          <TabPanel label="활동">
            <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
          </TabPanel>
        </Tabs>
      </DemoSection>

      <DemoSection
        headingId="dynamic-heading"
        title="동적 패널"
        description={'mode="dynamic"은 탭 메뉴만 나열하고 패널은 하나입니다. 탭 클릭 시 panel 내용이 전환됩니다.'}
        code={dynamicCode}
        stack
      >
        <Tabs
          mode="dynamic"
          items={dynamicItems}
          defaultValue="overview"
          ariaLabel="동적 탭 (items)"
          panel={({ item }) => {
            if (item?.key === 'overview') return <p>프로젝트 개요와 목표를 설명하는 영역입니다.</p>;
            if (item?.key === 'team') return <p>팀 구성원과 역할을 표시합니다.</p>;
            return <p>최근 활동 로그와 타임라인을 보여줍니다.</p>;
          }}
        />
        <Tabs
          mode="dynamic"
          ariaLabel="동적 탭 (TabMenu)"
          panel={({ value }) => {
            if (value === 'overview') return <p>TabMenu로 선언한 동적 패널 — 개요</p>;
            if (value === 'team') return <p>TabMenu로 선언한 동적 패널 — 팀</p>;
            return <p>TabMenu로 선언한 동적 패널 — 활동</p>;
          }}
        >
          <TabMenu label="개요" value="overview" active />
          <TabMenu label="팀" value="team" />
          <TabMenu label="활동" value="activity" />
        </Tabs>
      </DemoSection>

      <DemoSection
        headingId="indicator-slide-heading"
        title="슬라이드 인디케이터"
        description={'indicator="slide"로 선택 탭 아래(또는 pill 배경) 인디케이터가 부드럽게 이동합니다. line·pill 스킨과 조합합니다.'}
        code={indicatorSlideCode}
        stack
      >
        <Tabs indicator="slide" ariaLabel="슬라이드 라인 탭">
          <TabPanel label="개요" active>
            <p>라인 스킨에서 하단 인디케이터가 탭 전환 시 슬라이드됩니다.</p>
          </TabPanel>
          <TabPanel label="팀">
            <p>팀 구성원과 역할을 표시합니다.</p>
          </TabPanel>
          <TabPanel label="활동">
            <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
          </TabPanel>
        </Tabs>
        <Tabs variant="pill" indicator="slide" ariaLabel="슬라이드 필 탭">
          <TabPanel label="목록" active>
            <p className="tabs_panel-placeholder">필 스킨에서 배경 인디케이터가 이동합니다.</p>
          </TabPanel>
          <TabPanel label="그리드">
            <p className="tabs_panel-placeholder">그리드 뷰 콘텐츠</p>
          </TabPanel>
          <TabPanel label="보드">
            <p className="tabs_panel-placeholder">보드 뷰 콘텐츠</p>
          </TabPanel>
        </Tabs>
      </DemoSection>

      <DemoSection
        headingId="layout-equal-heading"
        title="균등 분할"
        description={'layout="equal"로 탭 바 전체 너비에 탭을 균등 분할합니다. 라벨이 길면 말줄임됩니다.'}
        code={layoutEqualCode}
        stack
      >
        <Tabs layout="equal" ariaLabel="균등 분할 탭">
          <TabPanel label="개요" active>
            <p>탭이 컨테이너 너비에 맞춰 균등하게 배치됩니다.</p>
          </TabPanel>
          <TabPanel label="팀 구성">
            <p>팀 구성원과 역할을 표시합니다.</p>
          </TabPanel>
          <TabPanel label="활동 로그">
            <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
          </TabPanel>
          <TabPanel label="설정">
            <p>프로젝트 설정을 관리합니다.</p>
          </TabPanel>
        </Tabs>
        <Tabs layout="equal" variant="pill" indicator="slide" ariaLabel="균등 분할 필 탭">
          <TabPanel label="일간" active>일간 통계</TabPanel>
          <TabPanel label="주간">주간 통계</TabPanel>
          <TabPanel label="월간">월간 통계</TabPanel>
          <TabPanel label="연간">연간 통계</TabPanel>
        </Tabs>
      </DemoSection>

      <DemoSection
        headingId="layout-scroll-heading"
        title="네비 스크롤"
        description={'layout="scroll"은 탭이 넘칠 때 좌·우 버튼으로 스크롤합니다. 넘치지 않으면 버튼이 숨겨집니다.'}
        code={layoutScrollCode}
      >
        <Tabs layout="scroll" className="tabs_demo-narrow" ariaLabel="네비 스크롤 탭">
          <TabPanel label="홈" active>홈 패널</TabPanel>
          <TabPanel label="제품 소개">제품 패널</TabPanel>
          <TabPanel label="솔루션">솔루션 패널</TabPanel>
          <TabPanel label="가격 정책">가격 패널</TabPanel>
          <TabPanel label="고객 사례">고객 사례 패널</TabPanel>
          <TabPanel label="리소스 센터">리소스 패널</TabPanel>
          <TabPanel label="기술 지원">지원 패널</TabPanel>
        </Tabs>
      </DemoSection>

      <DemoSection
        headingId="card-heading"
        title="카드"
        description="tabs_card로 카드형 탭과 패널을 연결합니다. 폼·설정 화면에 적합합니다."
        code={cardCode}
      >
        <Tabs variant="card" ariaLabel="계정 설정">
          <TabPanel label="프로필" active>
            <p>이름, 아바타, 소개 문구를 수정합니다.</p>
          </TabPanel>
          <TabPanel label="보안">
            <p>비밀번호 변경과 2단계 인증을 설정합니다.</p>
          </TabPanel>
          <TabPanel label="알림">
            <p>이메일·푸시 알림 수신 여부를 관리합니다.</p>
          </TabPanel>
        </Tabs>
      </DemoSection>

      <DemoSection
        headingId="pill-heading"
        title="필"
        description="tabs_pill로 세그먼트 컨트롤 형태의 탭을 만듭니다. 뷰 전환·필터에 사용합니다."
        code={pillCode}
      >
        <Tabs variant="pill" ariaLabel="보기 모드">
          <TabPanel label="목록" active>
            <p className="tabs_panel-placeholder">목록 뷰 콘텐츠</p>
          </TabPanel>
          <TabPanel label="그리드">
            <p className="tabs_panel-placeholder">그리드 뷰 콘텐츠</p>
          </TabPanel>
          <TabPanel label="보드">
            <p className="tabs_panel-placeholder">보드 뷰 콘텐츠</p>
          </TabPanel>
        </Tabs>
      </DemoSection>

      <DemoSection
        headingId="size-heading"
        title="크기"
        description="tabs_sm · tabs_lg로 탭 바 스케일을 조절합니다."
        code={sizeCode}
        stack
      >
        <Tabs size="sm" ariaLabel="Small 탭">
          <TabPanel label="Small A" active>Small 탭 패널</TabPanel>
          <TabPanel label="Small B">Small 탭 패널 B</TabPanel>
        </Tabs>
        <Tabs size="lg" ariaLabel="Large 탭">
          <TabPanel label="Large A" active>Large 탭 패널</TabPanel>
          <TabPanel label="Large B">Large 탭 패널 B</TabPanel>
        </Tabs>
      </DemoSection>

      <DemoSection
        headingId="icon-heading"
        title="아이콘"
        description="tabs_icon으로 탭 앞에 아이콘을 배치합니다."
        code={iconCode}
      >
        <Tabs ariaLabel="대시보드 섹션">
          <TabPanel label="대시보드" active icon={<Icon name="grid" />}>
            대시보드 요약 패널
          </TabPanel>
          <TabPanel label="사용자" icon={<Icon name="user" />}>
            사용자 목록 패널
          </TabPanel>
          <TabPanel label="문서" icon={<Icon name="book" />}>
            문서 목록 패널
          </TabPanel>
        </Tabs>
      </DemoSection>

      <DemoSection
        headingId="badge-heading"
        title="배지"
        description="탭 버튼에 배지를 넣어 알림 수·상태를 표시합니다."
        code={badgeCode}
      >
        <Tabs ariaLabel="알림 센터">
          <TabPanel label="전체" active>전체 알림 목록</TabPanel>
          <TabPanel
            label="읽지 않음"
            badge={
              <span className="badge badge_count color_danger tabs_badge" aria-label="읽지 않은 알림 12건">12</span>
            }
          >
            읽지 않은 알림 12건
          </TabPanel>
          <TabPanel
            label="멘션"
            badge={<span className="badge badge_count color_primary tabs_badge">3</span>}
          >
            멘션 알림 3건
          </TabPanel>
        </Tabs>
      </DemoSection>

      <DemoSection
        headingId="extra-heading"
        title="추가 액션"
        description="tabs_extra로 탭 바 오른쪽에 버튼·링크 등 보조 액션을 배치합니다."
        code={extraCode}
      >
        <Tabs
          ariaLabel="파일 관리"
          extra={<Button variant="filled" color="primary" size="sm" label="업로드" />}
        >
          <TabPanel label="내 파일" active>내 파일 목록</TabPanel>
          <TabPanel label="공유됨">공유된 파일 목록</TabPanel>
          <TabPanel label="최근">최근 파일 목록</TabPanel>
        </Tabs>
      </DemoSection>

      <DemoSection
        headingId="scroll-heading"
        title="스크롤바"
        description={'scrollable과 layout="auto"를 함께 쓰면 스크롤바가 표시됩니다. 버튼 네비게이션은 layout="scroll"을 사용하세요.'}
        code={scrollCode}
      >
        <Tabs scrollable className="tabs_demo-narrow" ariaLabel="긴 탭 목록">
          <TabPanel label="홈" active>홈 패널</TabPanel>
          <TabPanel label="제품">제품 패널</TabPanel>
          <TabPanel label="솔루션">솔루션 패널</TabPanel>
          <TabPanel label="가격">가격 패널</TabPanel>
          <TabPanel label="고객 사례">고객 사례 패널</TabPanel>
          <TabPanel label="리소스">리소스 패널</TabPanel>
          <TabPanel label="지원">지원 패널</TabPanel>
        </Tabs>
      </DemoSection>

      <DemoSection
        headingId="disabled-heading"
        title="비활성"
        description="disabled 속성 또는 is-disabled 클래스로 탭을 비활성화합니다."
        code={disabledCode}
      >
        <Tabs ariaLabel="권한별 탭">
          <TabPanel label="공개" active>공개 콘텐츠</TabPanel>
          <TabPanel label="팀">팀 전용 콘텐츠</TabPanel>
          <TabPanel label="관리자" disabled>관리자 전용 콘텐츠</TabPanel>
        </Tabs>
      </DemoSection>

      <DemoSection
        headingId="vertical-heading"
        title="수직"
        description="tabs_vertical로 사이드바 형태의 탭을 구성합니다. 라인·카드 스킨과 조합할 수 있습니다."
        code={verticalCode}
        stack
      >
        <Tabs vertical ariaLabel="수직 라인 탭">
          <TabPanel label="일반" active>
            <p>일반 설정 패널입니다.</p>
          </TabPanel>
          <TabPanel label="보안">
            <p>보안 설정 패널입니다.</p>
          </TabPanel>
          <TabPanel label="결제">
            <p>결제 설정 패널입니다.</p>
          </TabPanel>
        </Tabs>
        <Tabs vertical variant="card" ariaLabel="수직 카드 탭">
          <TabPanel label="문서" active>문서 관리 패널</TabPanel>
          <TabPanel label="미디어">미디어 관리 패널</TabPanel>
          <TabPanel label="아카이브">아카이브 패널</TabPanel>
        </Tabs>
      </DemoSection>

      <ApiSection headingId="api-props-heading" title="API · Tabs Props">
        <ApiTable columns={tabsPropColumns} rows={tabsProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-panel-props-heading" title="API · TabPanel Props">
        <ApiTable columns={tabPanelPropColumns} rows={tabPanelProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-menu-props-heading" title="API · TabMenu Props">
        <ApiTable columns={tabMenuPropColumns} rows={tabMenuProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-children-heading" title="API · Tabs Children">
        <ApiTable columns={tabsChildColumns} rows={tabsChildren} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-panel-children-heading" title="API · TabPanel Children">
        <ApiTable columns={tabPanelChildColumns} rows={tabPanelChildren} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-menu-children-heading" title="API · TabMenu Children">
        <ApiTable columns={tabMenuChildColumns} rows={tabMenuChildren} codeColumn="name" />
      </ApiSection>

      <ApiSection
        headingId="api-classes-heading"
        title="클래스 · 속성"
        description="React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
      >
        <ApiTable columns={tabsClassColumns} rows={tabsClasses} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="tokens-heading" title="디자인 토큰">
        <ApiTable columns={tabsTokenColumns} rows={tabsTokens} codeColumn="name" />
      </ApiSection>
    </>
  );
}
