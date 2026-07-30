<script>
export const docMeta = {
  title: 'Drawer | HTML Components',
  activeNav: 'drawer',
  pageTitle: 'Drawer',
};
</script>

<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import GuideCodeBlock from '@/components/guide/GuideCodeBlock.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
import Drawer from '@uxkm/ui/components/Drawer.vue';
import {
  drawerClassColumns,
  drawerClasses,
  drawerPropColumns,
  drawerProps,
  drawerSlotColumns,
  drawerSlots,
  drawerTokenColumns,
  drawerTokens,
  markupCode,
} from '@/doc/data/drawer-api';

const basicCode = `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Drawer from '@uxkm/ui/components/Drawer.vue';
<\/script>

<template>
  <Button variant="filled" color="primary" label="Drawer 열기" data-drawer-trigger="#drawer-basic" aria-controls="drawer-basic" />
  <Drawer id="drawer-basic" title="기본 Drawer">
    <p>Drawer 패널 본문입니다.</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-drawer-close />
      <Button variant="filled" color="primary" label="확인" data-drawer-close />
    </template>
  </Drawer>
</template>`;

const placementCode = `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Drawer from '@uxkm/ui/components/Drawer.vue';
<\/script>

<template>
  <div class="drawer_demo-row">
    <Button variant="outline" label="왼쪽" data-drawer-trigger="#drawer-place-left" aria-controls="drawer-place-left" />
    <Button variant="outline" label="오른쪽" data-drawer-trigger="#drawer-place-right" aria-controls="drawer-place-right" />
    <Button variant="outline" label="위" data-drawer-trigger="#drawer-place-top" aria-controls="drawer-place-top" />
    <Button variant="outline" label="아래" data-drawer-trigger="#drawer-place-bottom" aria-controls="drawer-place-bottom" />
  </div>
  <Drawer id="drawer-place-left" placement="left" title="왼쪽 패널">
    <p>화면 왼쪽에서 슬라이드됩니다.</p>
  </Drawer>
  <Drawer id="drawer-place-right" placement="right" title="오른쪽 패널">
    <p>기본 위치입니다.</p>
  </Drawer>
  <Drawer id="drawer-place-top" placement="top" title="상단 패널">
    <p>검색·필터 바 등 상단에서 내려오는 패널입니다.</p>
  </Drawer>
  <Drawer id="drawer-place-bottom" placement="bottom" title="하단 패널">
    <p>모바일 액션 시트·공유 패널 등에 적합합니다.</p>
  </Drawer>
</template>`;

const sizeCode = `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Drawer from '@uxkm/ui/components/Drawer.vue';
<\/script>

<template>
  <div class="drawer_demo-row">
    <Button variant="outline" size="sm" label="Small" data-drawer-trigger="#drawer-size-sm" aria-controls="drawer-size-sm" />
    <Button variant="outline" label="Default" data-drawer-trigger="#drawer-size-default" aria-controls="drawer-size-default" />
    <Button variant="outline" size="lg" label="Large" data-drawer-trigger="#drawer-size-lg" aria-controls="drawer-size-lg" />
  </div>
</template>`;

const footerCode = `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Drawer from '@uxkm/ui/components/Drawer.vue';
<\/script>

<template>
  <Button variant="filled" color="primary" label="항목 편집" data-drawer-trigger="#drawer-footer" aria-controls="drawer-footer" />
  <Drawer id="drawer-footer" title="항목 편집">
    <p>폼 본문</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-drawer-close />
      <Button variant="filled" color="primary" label="저장" data-drawer-close />
    </template>
  </Drawer>
</template>`;

const footerAlignCode = `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Drawer from '@uxkm/ui/components/Drawer.vue';
<\/script>

<template>
  <!-- 좌측 -->
  <Drawer id="drawer-footer-start" title="좌측 정렬" placement="bottom" footer-align="start" open>
    <p>footer-align="start"</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-drawer-close />
      <Button variant="filled" color="primary" label="확인" data-drawer-close />
    </template>
  </Drawer>

  <!-- 가운데 -->
  <Drawer id="drawer-footer-center" title="가운데 정렬" placement="bottom" footer-align="center" open>
    <p>footer-align="center"</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-drawer-close />
      <Button variant="filled" color="primary" label="확인" data-drawer-close />
    </template>
  </Drawer>

  <!-- 우측 (기본) -->
  <Drawer id="drawer-footer-end" title="우측 정렬" placement="bottom" open>
    <p>footer-align="end" (기본)</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-drawer-close />
      <Button variant="filled" color="primary" label="확인" data-drawer-close />
    </template>
  </Drawer>

  <!-- 병합: 좌 1 / 우 2 -->
  <Drawer id="drawer-footer-between" title="병합 정렬" placement="bottom" footer-align="between" open>
    <p>footer-align="between" + drawer_footer-group</p>
    <template #footer>
      <div class="drawer_footer-group">
        <Button variant="ghost" color="danger" label="삭제" data-drawer-close />
      </div>
      <div class="drawer_footer-group">
        <Button variant="ghost" label="취소" data-drawer-close />
        <Button variant="filled" color="primary" label="확인" data-drawer-close />
      </div>
    </template>
  </Drawer>

  <!-- 균등 1:1 -->
  <Drawer id="drawer-footer-even" title="균등 1:1" placement="bottom" footer-align="even" open>
    <p>footer-align="even" · footer-ratio="1-1"</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-drawer-close />
      <Button variant="filled" color="primary" label="확인" data-drawer-close />
    </template>
  </Drawer>

  <!-- 균등 1:2 -->
  <Drawer id="drawer-footer-even-1-2" title="균등 1:2" placement="bottom" footer-align="even" footer-ratio="1-2" open>
    <p>footer-ratio="1-2" — 좌 1 / 우 2</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-drawer-close />
      <Button variant="filled" color="primary" label="확인" data-drawer-close />
    </template>
  </Drawer>

  <!-- 균등 2:1 -->
  <Drawer id="drawer-footer-even-2-1" title="균등 2:1" placement="bottom" footer-align="even" footer-ratio="2-1" open>
    <p>footer-ratio="2-1" — 좌 2 / 우 1</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-drawer-close />
      <Button variant="filled" color="primary" label="확인" data-drawer-close />
    </template>
  </Drawer>

  <!-- 하단 패딩 없음 + 균등 -->
  <Drawer id="drawer-footer-no-pad" title="하단 패딩 없음" placement="bottom" footer-align="even" footer-no-pad-bottom open>
    <p>footer-no-pad-bottom + even</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-drawer-close />
      <Button variant="filled" color="primary" label="확인" data-drawer-close />
    </template>
  </Drawer>
</template>`;

const extraCode = `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Drawer from '@uxkm/ui/components/Drawer.vue';
import Tag from '@uxkm/ui/components/Tag.vue';
<\/script>

<template>
  <Button variant="outline" label="상세 보기" data-drawer-trigger="#drawer-extra" aria-controls="drawer-extra" />
  <Drawer id="drawer-extra" title="주문 #1042">
    <template #extra>
      <Tag variant="filled" color="success" label="완료" />
    </template>
    <p>상세 정보</p>
  </Drawer>
</template>`;

const menuCode = `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Drawer from '@uxkm/ui/components/Drawer.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Button variant="outline" icon-only aria-label="메뉴 열기" data-drawer-trigger="#drawer-menu" aria-controls="drawer-menu">
    <template #icon-before>
      <Icon name="menu" />
    </template>
  </Button>
  <Drawer id="drawer-menu" placement="left" title="앱 메뉴">
    <p>메뉴 본문</p>
  </Drawer>
</template>`;

const openOnLoadCode = `<script setup>
import Drawer from '@uxkm/ui/components/Drawer.vue';
<\/script>

<template>
  <Drawer id="drawer-open-on-load" size="sm" title="자동 열기 옵션" open-on-load>
    <p>페이지 로드 후 자동으로 열립니다.</p>
  </Drawer>
</template>`;

const nestedCode = `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Drawer from '@uxkm/ui/components/Drawer.vue';
<\/script>

<template>
  <Button variant="ghost" label="중첩 예시 열기" data-drawer-trigger="#drawer-nested-1" aria-controls="drawer-nested-1" />
  <Drawer id="drawer-nested-1" title="1단계 Drawer">
    <Button variant="outline" label="2단계 열기" data-drawer-trigger="#drawer-nested-2" aria-controls="drawer-nested-2" />
  </Drawer>
  <Drawer id="drawer-nested-2" size="sm" title="2단계 Drawer">
    <p>중첩된 Drawer입니다.</p>
  </Drawer>
</template>`;

const dragSheetCode = `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Drawer from '@uxkm/ui/components/Drawer.vue';
<\/script>

<template>
  <Button variant="filled" color="primary" label="드래그 시트 열기" data-drawer-trigger="#drawer-drag" aria-controls="drawer-drag" />
  <Drawer id="drawer-drag" placement="bottom" draggable title="공유 · 액션">
    <p>상단 핸들이나 헤더를 위로 드래그하면 펼쳐지고, 아래로 드래그하면 접히거나 닫힙니다.</p>
    <template #footer>
      <Button variant="ghost" label="닫기" data-drawer-close />
      <Button variant="filled" color="primary" label="공유" data-drawer-close />
    </template>
  </Drawer>
</template>`;

const noBackdropCode = `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Drawer from '@uxkm/ui/components/Drawer.vue';
<\/script>

<template>
  <Button variant="ghost" label="백드롭 없이 열기" data-drawer-trigger="#drawer-no-backdrop" aria-controls="drawer-no-backdrop" />
  <Drawer id="drawer-no-backdrop" size="sm" title="백드롭 없음" no-backdrop>
    <p>본문을 가리지 않고 패널만 표시합니다.</p>
  </Drawer>
</template>`;

</script>

<template>
  <div class="page_intro">
  <h1>Drawer</h1>
  <p class="lead">화면 가장자리에서 슬라이드되어 나타나는 패널 컴포넌트입니다. 상세 보기·폼·모바일 메뉴·필터·설정 등 보조 UI에 사용하며, 기본 위치는 오른쪽(<code class="typo_code">drawer_placement-right</code>)입니다. 방향별 슬라이드·백드롭 페이드 애니메이션과 <code class="typo_code">role="dialog"</code> · <code class="typo_code">aria-modal</code> 접근성을 제공합니다.</p>
</div>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="data-drawer-trigger로 패널을 열고, 백드롭·닫기 버튼·Esc로 닫습니다."
    :code="basicCode"
  >
    <Button variant="filled" color="primary" label="Drawer 열기" data-drawer-trigger="#drawer-basic" aria-controls="drawer-basic" />
  </DemoSection>

  <DemoSection
    heading-id="placement-heading"
    title="위치"
    description="drawer_placement-left · -right · -top · -bottom으로 슬라이드 방향을 지정합니다. 상·하는 둥근 모서리·하단은 드래그 핸들이 표시됩니다."
    stack
    :code="placementCode"
  >
    <div class="drawer_demo-row">
      <Button variant="outline" label="왼쪽" data-drawer-trigger="#drawer-place-left" aria-controls="drawer-place-left" />
      <Button variant="outline" label="오른쪽" data-drawer-trigger="#drawer-place-right" aria-controls="drawer-place-right" />
      <Button variant="outline" label="위" data-drawer-trigger="#drawer-place-top" aria-controls="drawer-place-top" />
      <Button variant="outline" label="아래" data-drawer-trigger="#drawer-place-bottom" aria-controls="drawer-place-bottom" />
    </div>
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="drawer_sm · drawer_lg으로 패널 너비(또는 상·하 배치 시 높이)를 조정합니다."
    :code="sizeCode"
  >
    <div class="drawer_demo-row">
      <Button variant="outline" size="sm" label="Small" data-drawer-trigger="#drawer-size-sm" aria-controls="drawer-size-sm" />
      <Button variant="outline" label="Default" data-drawer-trigger="#drawer-size-default" aria-controls="drawer-size-default" />
      <Button variant="outline" size="lg" label="Large" data-drawer-trigger="#drawer-size-lg" aria-controls="drawer-size-lg" />
    </div>
  </DemoSection>

  <DemoSection
    heading-id="footer-heading"
    title="헤더·푸터"
    description="drawer_header · drawer_body · drawer_footer로 영역을 나눕니다. 푸터에 저장·취소 등 액션 버튼을 배치합니다."
    :code="footerCode"
  >
    <Button variant="filled" color="primary" label="항목 편집" data-drawer-trigger="#drawer-footer" aria-controls="drawer-footer" />
  </DemoSection>

  <DemoSection
    heading-id="footer-align-heading"
    title="푸터 정렬"
    description="footer-align으로 푸터 버튼을 정렬합니다. start · center · end(기본) · between(좌·우 병합) · even(균등). even은 footer-ratio로 좌·우 비율(1-1 · 1-2 · 2-1)을 지정하고, footer-no-pad-bottom으로 하단 패딩을 제거할 수 있습니다. between은 drawer_footer-group으로 좌·우에 1~2개씩 묶습니다."
    :code="footerAlignCode"
    stack
  >
    <div class="drawer_demo-stack">
      <div class="drawer_demo-frame drawer_demo-frame-compact">
        <Drawer id="drawer-footer-start" title="좌측 정렬" placement="bottom" footer-align="start" open class="drawer_demo-static">
          <p><code class="typo_code">footer-align="start"</code></p>
          <template #footer>
            <Button variant="ghost" label="취소" data-drawer-close />
            <Button variant="filled" color="primary" label="확인" data-drawer-close />
          </template>
        </Drawer>
      </div>
      <div class="drawer_demo-frame drawer_demo-frame-compact">
        <Drawer id="drawer-footer-center" title="가운데 정렬" placement="bottom" footer-align="center" open class="drawer_demo-static">
          <p><code class="typo_code">footer-align="center"</code></p>
          <template #footer>
            <Button variant="ghost" label="취소" data-drawer-close />
            <Button variant="filled" color="primary" label="확인" data-drawer-close />
          </template>
        </Drawer>
      </div>
      <div class="drawer_demo-frame drawer_demo-frame-compact">
        <Drawer id="drawer-footer-end" title="우측 정렬" placement="bottom" open class="drawer_demo-static">
          <p><code class="typo_code">footer-align="end"</code> (기본)</p>
          <template #footer>
            <Button variant="ghost" label="취소" data-drawer-close />
            <Button variant="filled" color="primary" label="확인" data-drawer-close />
          </template>
        </Drawer>
      </div>
      <div class="drawer_demo-frame drawer_demo-frame-compact">
        <Drawer id="drawer-footer-between" title="병합 정렬" placement="bottom" footer-align="between" open class="drawer_demo-static">
          <p><code class="typo_code">between</code> — 좌 1 / 우 2</p>
          <template #footer>
            <div class="drawer_footer-group">
              <Button variant="ghost" color="danger" label="삭제" data-drawer-close />
            </div>
            <div class="drawer_footer-group">
              <Button variant="ghost" label="취소" data-drawer-close />
              <Button variant="filled" color="primary" label="확인" data-drawer-close />
            </div>
          </template>
        </Drawer>
      </div>
      <div class="drawer_demo-frame drawer_demo-frame-compact">
        <Drawer id="drawer-footer-between-2" title="병합 정렬" placement="bottom" footer-align="between" open class="drawer_demo-static">
          <p><code class="typo_code">between</code> — 좌 2 / 우 1</p>
          <template #footer>
            <div class="drawer_footer-group">
              <Button variant="ghost" label="도움말" data-drawer-close />
              <Button variant="ghost" color="danger" label="삭제" data-drawer-close />
            </div>
            <div class="drawer_footer-group">
              <Button variant="filled" color="primary" label="확인" data-drawer-close />
            </div>
          </template>
        </Drawer>
      </div>
      <div class="drawer_demo-frame drawer_demo-frame-compact">
        <Drawer id="drawer-footer-even" title="균등 1:1" placement="bottom" footer-align="even" open class="drawer_demo-static">
          <p><code class="typo_code">even</code> · <code class="typo_code">footer-ratio="1-1"</code></p>
          <template #footer>
            <Button variant="ghost" label="취소" data-drawer-close />
            <Button variant="filled" color="primary" label="확인" data-drawer-close />
          </template>
        </Drawer>
      </div>
      <div class="drawer_demo-frame drawer_demo-frame-compact">
        <Drawer id="drawer-footer-even-1-2" title="균등 1:2" placement="bottom" footer-align="even" footer-ratio="1-2" open class="drawer_demo-static">
          <p><code class="typo_code">footer-ratio="1-2"</code> — 좌 1 / 우 2</p>
          <template #footer>
            <Button variant="ghost" label="취소" data-drawer-close />
            <Button variant="filled" color="primary" label="확인" data-drawer-close />
          </template>
        </Drawer>
      </div>
      <div class="drawer_demo-frame drawer_demo-frame-compact">
        <Drawer id="drawer-footer-even-2-1" title="균등 2:1" placement="bottom" footer-align="even" footer-ratio="2-1" open class="drawer_demo-static">
          <p><code class="typo_code">footer-ratio="2-1"</code> — 좌 2 / 우 1</p>
          <template #footer>
            <Button variant="ghost" label="취소" data-drawer-close />
            <Button variant="filled" color="primary" label="확인" data-drawer-close />
          </template>
        </Drawer>
      </div>
      <div class="drawer_demo-frame drawer_demo-frame-compact">
        <Drawer id="drawer-footer-no-pad" title="하단 패딩 없음" placement="bottom" footer-align="even" footer-no-pad-bottom open class="drawer_demo-static">
          <p><code class="typo_code">footer-no-pad-bottom</code> + even</p>
          <template #footer>
            <Button variant="ghost" label="취소" data-drawer-close />
            <Button variant="filled" color="primary" label="확인" data-drawer-close />
          </template>
        </Drawer>
      </div>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="extra-heading"
    title="헤더 추가 영역"
    description="drawer_extra에 보조 액션·메타 정보를 배치합니다. 제목과 닫기 버튼 사이에 위치합니다."
    :code="extraCode"
  >
    <Button variant="outline" label="상세 보기" data-drawer-trigger="#drawer-extra" aria-controls="drawer-extra" />
  </DemoSection>

  <DemoSection
    heading-id="menu-heading"
    title="메뉴"
    description="Menu 컴포넌트와 조합해 모바일 내비게이션 패널을 구성합니다."
    :code="menuCode"
  >
    <Button variant="outline" icon-only aria-label="메뉴 열기" data-drawer-trigger="#drawer-menu" aria-controls="drawer-menu">
      <template #icon-before><Icon name="menu" /></template>
    </Button>
  </DemoSection>

  <DemoSection
    heading-id="open-on-load-heading"
    title="로드 시 자동 열기 (옵션)"
    description="data-drawer-open-on-load=&quot;true&quot;를 지정하면 페이지 로드 후 해당 Drawer를 자동으로 열 수 있습니다. 기본값은 비활성입니다."
    :code="openOnLoadCode"
  >
    <p class="form_field-hint">아래 예시는 옵션 동작 확인용입니다.</p>
  </DemoSection>

  <DemoSection
    heading-id="nested-heading"
    title="중첩 Drawer"
    description="열린 Drawer 안에서 다른 Drawer를 열 수 있습니다. 2단계가 열리면 1단계 백드롭은 숨겨지고, 2단계가 닫히면 다시 표시됩니다. Esc는 가장 위에 열린 패널부터 닫습니다."
    :code="nestedCode"
  >
    <Button variant="ghost" label="중첩 예시 열기" data-drawer-trigger="#drawer-nested-1" aria-controls="drawer-nested-1" />
  </DemoSection>

  <DemoSection
    heading-id="drag-sheet-heading"
    title="하단 드래그 시트"
    description="placement=&quot;bottom&quot; + draggable로 핸들·헤더를 드래그합니다. 위로 끌면 펼치고, 아래로 끌면 접거나 닫습니다. 터치 슬라이드도 동일합니다."
    :code="dragSheetCode"
  >
    <Button variant="filled" color="primary" label="드래그 시트 열기" data-drawer-trigger="#drawer-drag" aria-controls="drawer-drag" />
  </DemoSection>

  <DemoSection
    heading-id="no-backdrop-heading"
    title="백드롭 없음"
    description="data-drawer-backdrop=&quot;false&quot;로 어두운 배경을 숨깁니다. 본문과 동시에 상호작용할 수 있습니다."
    :code="noBackdropCode"
  >
    <Button variant="ghost" label="백드롭 없이 열기" data-drawer-trigger="#drawer-no-backdrop" aria-controls="drawer-no-backdrop" />
  </DemoSection>

  <!-- 기본 -->
  <Drawer id="drawer-basic" title="기본 Drawer">
    <p>Drawer 패널 본문입니다. 상세 정보·폼·설정 등 보조 작업에 적합합니다.</p>
    <p>백드롭을 클릭하거나 닫기 버튼, <kbd>Esc</kbd> 키로 패널을 닫을 수 있습니다.</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-drawer-close />
      <Button variant="filled" color="primary" label="확인" data-drawer-close />
    </template>
  </Drawer>
  
  <!-- 위치: 왼쪽 -->
  <div class="drawer" id="drawer-place-left" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-place-left-title" tabindex="-1" hidden>
    <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
    <div class="drawer_panel drawer_placement-left">
      <div class="drawer_header">
        <h2 class="drawer_title" id="drawer-place-left-title">왼쪽 패널</h2>
        <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
          <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div class="drawer_body">
        <p>화면 왼쪽에서 슬라이드됩니다.</p>
      </div>
    </div>
  </div>
  
  <!-- 위치: 오른쪽 -->
  <div class="drawer" id="drawer-place-right" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-place-right-title" tabindex="-1" hidden>
    <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
    <div class="drawer_panel drawer_placement-right">
      <div class="drawer_header">
        <h2 class="drawer_title" id="drawer-place-right-title">오른쪽 패널</h2>
        <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
          <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div class="drawer_body">
        <p>기본 위치입니다. 상세 보기·편집 폼에 자주 사용합니다.</p>
      </div>
    </div>
  </div>
  
  <!-- 위치: 위 -->
  <div class="drawer" id="drawer-place-top" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-place-top-title" tabindex="-1" hidden>
    <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
    <div class="drawer_panel drawer_placement-top">
      <div class="drawer_header">
        <h2 class="drawer_title" id="drawer-place-top-title">상단 패널</h2>
        <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
          <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div class="drawer_body">
        <p>검색·필터 바 등 상단에서 내려오는 패널입니다.</p>
      </div>
    </div>
  </div>
  
  <!-- 위치: 아래 -->
  <div class="drawer" id="drawer-place-bottom" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-place-bottom-title" tabindex="-1" hidden>
    <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
    <div class="drawer_panel drawer_placement-bottom">
      <div class="drawer_header">
        <h2 class="drawer_title" id="drawer-place-bottom-title">하단 패널</h2>
        <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
          <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div class="drawer_body">
        <p>모바일 액션 시트·공유 패널 등에 적합합니다.</p>
      </div>
    </div>
  </div>
  
  <!-- 크기 -->
  <div class="drawer" id="drawer-size-sm" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-size-sm-title" tabindex="-1" hidden>
    <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
    <div class="drawer_panel drawer_placement-right drawer_sm">
      <div class="drawer_header">
        <h2 class="drawer_title" id="drawer-size-sm-title">Small</h2>
        <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
          <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div class="drawer_body">
        <p><code class="typo_code">drawer_sm</code> — 좁은 보조 패널</p>
      </div>
    </div>
  </div>
  
  <div class="drawer" id="drawer-size-default" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-size-default-title" tabindex="-1" hidden>
    <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
    <div class="drawer_panel drawer_placement-right">
      <div class="drawer_header">
        <h2 class="drawer_title" id="drawer-size-default-title">Default</h2>
        <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
          <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div class="drawer_body">
        <p>기본 너비 24rem</p>
      </div>
    </div>
  </div>
  
  <div class="drawer" id="drawer-size-lg" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-size-lg-title" tabindex="-1" hidden>
    <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
    <div class="drawer_panel drawer_placement-right drawer_lg">
      <div class="drawer_header">
        <h2 class="drawer_title" id="drawer-size-lg-title">Large</h2>
        <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
          <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div class="drawer_body">
        <p><code class="typo_code">drawer_lg</code> — 넓은 상세·폼 패널</p>
      </div>
    </div>
  </div>
  
  <!-- 헤더·푸터 -->
  <div class="drawer" id="drawer-footer" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-footer-title" tabindex="-1" hidden>
    <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
    <div class="drawer_panel drawer_placement-right">
      <div class="drawer_header">
        <h2 class="drawer_title" id="drawer-footer-title">항목 편집</h2>
        <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
          <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div class="drawer_body">
        <div class="form_layout form_layout-vertical">
          <div class="form_field">
            <label class="form_field-label" for="drawer-item-name">이름</label>
            <input class="input" type="text" id="drawer-item-name" placeholder="항목 이름" />
          </div>
          <div class="form_field">
            <label class="form_field-label" for="drawer-item-desc">설명</label>
            <textarea class="textarea" id="drawer-item-desc" rows="4" placeholder="간단한 설명"></textarea>
          </div>
          <div class="form_field">
            <label class="form_field-label" for="drawer-item-status">상태</label>
            <select class="input" id="drawer-item-status">
              <option>활성</option>
              <option>비활성</option>
              <option>보관</option>
            </select>
          </div>
        </div>
      </div>
      <div class="drawer_footer">
        <button type="button" class="btn btn_ghost" data-drawer-close><span class="btn_label">취소</span></button>
        <button type="button" class="btn btn_filled color_primary" data-drawer-close><span class="btn_label">저장</span></button>
      </div>
    </div>
  </div>
  
  <!-- 헤더 추가 영역 -->
  <div class="drawer" id="drawer-extra" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-extra-title" tabindex="-1" hidden>
    <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
    <div class="drawer_panel drawer_placement-right">
      <div class="drawer_header">
        <h2 class="drawer_title" id="drawer-extra-title">주문 #1042</h2>
        <div class="drawer_extra">
          <span class="tag tag_filled color_success">완료</span>
        </div>
        <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
          <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div class="drawer_body">
        <dl class="stat stat_horizontal">
          <div class="stat_item">
            <dt class="stat_label">주문일</dt>
            <dd class="stat_value">2026-06-26</dd>
          </div>
          <div class="stat_item">
            <dt class="stat_label">금액</dt>
            <dd class="stat_value">₩128,000</dd>
          </div>
          <div class="stat_item">
            <dt class="stat_label">결제</dt>
            <dd class="stat_value">카드</dd>
          </div>
        </dl>
        <p>상세 정보·상태 뱃지 등을 헤더 <code class="typo_code">drawer_extra</code>에 배치할 수 있습니다.</p>
      </div>
    </div>
  </div>
  
  <!-- 메뉴 -->
  <div class="drawer" id="drawer-menu" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-menu-title" tabindex="-1" hidden>
    <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
    <div class="drawer_panel drawer_placement-left">
      <div class="drawer_header">
        <h2 class="drawer_title" id="drawer-menu-title">앱 메뉴</h2>
        <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
          <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div class="drawer_body" style="padding-top: 0;">
        <nav class="menu menu_vertical menu_compact" aria-label="앱 메뉴">
          <ul class="menu_list">
            <li class="menu_item">
              <a href="#" @click.prevent class="menu_link is-active" aria-current="page">
                <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
                </svg>
                <span class="menu_label">대시보드</span>
              </a>
            </li>
            <li class="menu_item">
              <a href="#" @click.prevent class="menu_link">
                <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M3 3v18h18"/><path d="M7 16l4-8 4 4 6-10"/>
                </svg>
                <span class="menu_label">분석</span>
              </a>
            </li>
            <li class="menu_item">
              <a href="#" @click.prevent class="menu_link">
                <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                </svg>
                <span class="menu_label">사용자</span>
              </a>
            </li>
            <li class="menu_divider" role="separator"></li>
            <li class="menu_item">
              <a href="#" @click.prevent class="menu_link">
                <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
                <span class="menu_label">설정</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>

  <!-- 옵션: 로드 시 자동 열기 -->
  <Drawer id="drawer-open-on-load" size="sm" title="자동 열기 옵션" open-on-load>
    <p>이 패널은 <code class="typo_code">data-drawer-open-on-load="true"</code> 예시입니다.</p>
    <p>실서비스에서는 온보딩, 공지, 필수 확인 패널 등에 선택적으로 사용할 수 있습니다.</p>
  </Drawer>

  <!-- 중첩 Drawer -->
  <div class="drawer" id="drawer-nested-1" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-nested-1-title" tabindex="-1" hidden>
    <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
    <div class="drawer_panel drawer_placement-right">
      <div class="drawer_header">
        <h2 class="drawer_title" id="drawer-nested-1-title">1단계 Drawer</h2>
        <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
          <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div class="drawer_body">
        <p>다음 단계 Drawer를 열어 중첩 동작을 확인하세요.</p>
        <button type="button" class="btn btn_outline" data-drawer-trigger="#drawer-nested-2" aria-controls="drawer-nested-2" aria-expanded="false">
          <span class="btn_label">2단계 열기</span>
        </button>
      </div>
    </div>
  </div>
  
  <div class="drawer" id="drawer-nested-2" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-nested-2-title" tabindex="-1" hidden>
    <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
    <div class="drawer_panel drawer_placement-right drawer_sm">
      <div class="drawer_header">
        <h2 class="drawer_title" id="drawer-nested-2-title">2단계 Drawer</h2>
        <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
          <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div class="drawer_body">
        <p>중첩된 Drawer입니다. <kbd>Esc</kbd>를 누르면 이 패널부터 닫힙니다.</p>
      </div>
      <div class="drawer_footer">
        <button type="button" class="btn btn_filled color_primary" data-drawer-close><span class="btn_label">완료</span></button>
      </div>
    </div>
  </div>

  <!-- 하단 드래그 시트 -->
  <Drawer id="drawer-drag" placement="bottom" draggable title="공유 · 액션">
    <p>상단 핸들이나 헤더를 <strong>위로</strong> 드래그하면 시트가 펼쳐집니다.</p>
    <p><strong>아래로</strong> 드래그하면 기본 높이로 접히고, 더 내리면 닫힙니다.</p>
    <ul>
      <li>링크 복사</li>
      <li>메시지 보내기</li>
      <li>다른 앱으로 공유</li>
    </ul>
    <template #footer>
      <Button variant="ghost" label="닫기" data-drawer-close />
      <Button variant="filled" color="primary" label="공유" data-drawer-close />
    </template>
  </Drawer>
  
  <!-- 백드롭 없음 -->
  <Drawer id="drawer-no-backdrop" size="sm" title="백드롭 없음" no-backdrop>
    <p>본문을 가리지 않고 패널만 표시합니다. 닫기 버튼이나 <kbd>Esc</kbd>로 닫으세요.</p>
  </Drawer>

  <section class="section" aria-labelledby="usage-heading">
    <h2 id="usage-heading">마크업</h2>
      <p>트리거 버튼과 Drawer 루트를 <code class="typo_code">id</code> · <code class="typo_code">aria-controls</code>로 연결합니다. 기본은 닫힌 상태(<code class="typo_code">hidden</code>)이며, 클릭 이벤트로 열립니다.</p>

      <GuideCodeBlock>{{ markupCode }}</GuideCodeBlock>
  </section>

  <ApiSection heading-id="api-props-heading" title="API · Props">
    <ApiTable :columns="drawerPropColumns" :rows="drawerProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Slots">
    <ApiTable :columns="drawerSlotColumns" :rows="drawerSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="drawerClassColumns" :rows="drawerClasses" code-column="name" />
    <p class="form_field-hint" style="margin-top: var(--space-md);">
      닫기: 백드롭 · <code class="typo_code">data-drawer-close</code> · <kbd>Esc</kbd>.
      열기·닫기 시 방향별 슬라이드와 백드롭 페이드가 적용됩니다.
      중첩 시 <kbd>Esc</kbd>는 최상위 패널부터 닫습니다.
    </p>
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="drawerTokenColumns" :rows="drawerTokens" code-column="name" />
  </ApiSection>
</template>
