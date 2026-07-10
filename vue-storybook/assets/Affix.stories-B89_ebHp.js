import{u as U,b as I,c as J,k as d,r as W,n as $,m as j,f as i,o as q,a as G}from"./vue.esm-bundler-BaZlnz8B.js";import{u as K,c as L}from"./useDemoCode-B9b0dRAo.js";import{_ as a}from"./Button-C3SXv-sJ.js";import"./useRipple-oORGvIsP.js";import"./Icon-D97OEunV.js";const C=Object.assign({inheritAttrs:!1},{__name:"Affix",props:{target:String,offsetTop:{type:[Number,String],default:0},offsetBottom:[Number,String],skin:{type:String,default:"",validator:t=>["","bar","anchor"].includes(t)},interactive:{type:Boolean,default:!0}},setup(t){const n=t,H=U(),e=I(),p=G(null),O=L("Affix",{defaults:{offsetTop:0,interactive:!0},booleanProps:new Set(["interactive"]),selfClosing:!1});K(O,n,H,p,e);const R=i(()=>{const u=["affix"];return e.class&&u.push(e.class),u}),T=i(()=>{const u=["affix_target"];return n.skin==="bar"&&u.push("affix_bar"),n.skin==="anchor"&&u.push("affix_anchor"),u}),V=i(()=>{const u={};return n.interactive&&(u["data-affix"]=""),n.target&&(u["data-target"]=n.target),n.offsetTop&&Number(n.offsetTop)!==0&&(u["data-offset-top"]=String(n.offsetTop)),n.offsetBottom!==void 0&&n.offsetBottom!==null&&n.offsetBottom!==""&&(u["data-offset-bottom"]=String(n.offsetBottom)),u}),N=i(()=>{const{class:u,...o}=e;return o});return(u,o)=>(q(),J("div",j({ref_key:"rootRef",ref:p,class:R.value},{...N.value,...V.value}),[o[0]||(o[0]=d("div",{class:"affix_placeholder","aria-hidden":"true",hidden:""},null,-1)),d("div",{class:$(T.value)},[W(u.$slots,"default")],2)],16))}}),Q=[{key:"name",label:"속성"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],X=[{name:"data-affix",type:"boolean",default:"—",description:"Affix 활성화. 루트 .affix 요소에 지정"},{name:"data-target",type:"string",default:"window",description:"스크롤 컨테이너 CSS 선택자. 생략 시 window 스크롤 기준"},{name:"data-offset-top",type:"number",default:"0",description:"상단 고정 시 뷰포트·컨테이너 상단과의 간격(px)"},{name:"data-offset-bottom",type:"number",default:"0",description:"하단 고정 시 하단과의 간격(px). 속성을 지정하면 하단 고정 모드"}],Y=[{key:"name",label:"요소"},{key:"description",label:"설명"}],Z=[{name:".affix",description:"루트 래퍼. data-affix · data-target · data-offset-* 속성을 지정"},{name:".affix_placeholder",description:'고정 시 레이아웃 점프 방지용 플레이스홀더 (aria-hidden="true", hidden)'},{name:".affix_target",description:"실제 고정·해제되는 대상. affix_bar 또는 affix_anchor 스킨과 조합"}],uu=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],nu=[{name:"affix_bar",description:"액션 바 스킨. 라벨 + 버튼 영역"},{name:"affix_bar-label",description:"바 좌측 라벨"},{name:"affix_bar-actions",description:"바 우측 버튼 그룹. Button 컴포넌트 조합"},{name:"affix_anchor",description:"섹션 앵커 링크 내비게이션 스킨"},{name:"is-affixed",description:"고정 상태 (루트 .affix에 JS가 자동 추가)"},{name:"is-fixed",description:"고정 상태 (.affix_target에 JS가 자동 추가)"}],Cu=[{title:"API · Data Attributes",tables:[{columns:Q,rows:X,codeColumn:"name"}]},{title:"API · 마크업 구조",tables:[{columns:Y,rows:Z,codeColumn:"name"}]},{title:"클래스 · 스킨",description:"OOCSS 구조 클래스와 스킨 클래스입니다. affix_bar-actions 안의 버튼은 Button 컴포넌트로 조합합니다.",tables:[{columns:uu,rows:nu,codeColumn:"name"}]}],su={title:"Components/기타/Affix",id:"components-affix",component:C,tags:["autodocs"],argTypes:{target:{control:"text",type:{name:"string",summary:"string"}},skin:{control:"select",options:["bar","anchor"],type:{name:"enum",summary:"'bar' | 'anchor'"}},interactive:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{layout:"padded",apiSections:Cu}},s={args:{target:"값",offsetTop:0,skin:"bar",interactive:!0},render:t=>({components:{Affix:C,Button:a},setup(){return{args:t}},template:`<div class="affix_demo-narrow">
      <div id="affix-scroll-playground" class="affix_demo-scroll">
        <div class="affix_demo-content">
          <p>스크롤하면 상단에 고정됩니다.</p>
          <Affix v-bind="args" target="#affix-scroll-playground" skin="bar">
            <span class="affix_bar-label">주문 #ORD-2024</span>
            <div class="affix_bar-actions">
              <Button variant="outline" size="sm" label="취소" />
              <Button variant="filled" color="primary" size="sm" label="결제" />
            </div>
          </Affix>
          <p>추가 콘텐츠 — 스크롤해 보세요.</p>
          <p>배송지 · 결제 수단 · 상품 정보</p>
          <p>교환·반품 안내</p>
        </div>
      </div>
    </div>`})},r={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"data-affix와 data-target으로 스크롤 영역을 연결합니다. 영역을 스크롤하면 .affix_target이 상단에 고정됩니다."},source:{code:`<script setup>
import Affix from '@uxkm/ui/components/Affix.vue';
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <div class="affix_demo-narrow">
    <div id="affix-scroll-basic" class="affix_demo-scroll">
      <div class="affix_demo-content">
        <p>주문 상세 페이지입니다. 아래로 스크롤하면 액션 바가 상단에 고정됩니다.</p>
        <p>배송지: 서울특별시 강남구 테헤란로 123, 4층</p>
        <p>결제 수단: 신용카드 (일시불) · 주문 금액 ₩42,000</p>
        <Affix target="#affix-scroll-basic" skin="bar">
          <span class="affix_bar-label">주문 #ORD-2024-0815</span>
          <div class="affix_bar-actions">
            <Button variant="outline" size="sm" label="취소" />
            <Button variant="filled" color="primary" size="sm" label="결제" />
          </div>
        </Affix>
        <p>상품명: 무선 이어폰 Pro · 수량 1 · ₩39,000</p>
        <p>배송비: ₩3,000 · 예상 도착: 2~3 영업일</p>
        <p>요청 사항: 부재 시 경비실에 맡겨 주세요.</p>
        <p>교환·반품은 수령 후 7일 이내 마이페이지에서 신청할 수 있습니다.</p>
        <p>문의: 고객센터 1588-0000 (평일 09:00–18:00)</p>
      </div>
    </div>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Affix:C,Button:a},template:`<div class="affix_demo-narrow">
      <div id="affix-scroll-basic" class="affix_demo-scroll">
        <div class="affix_demo-content">
          <p>주문 상세 페이지입니다. 아래로 스크롤하면 액션 바가 상단에 고정됩니다.</p>
          <p>배송지: 서울특별시 강남구 테헤란로 123, 4층</p>
          <p>결제 수단: 신용카드 (일시불) · 주문 금액 ₩42,000</p>

          <Affix target="#affix-scroll-basic" skin="bar">
            <span class="affix_bar-label">주문 #ORD-2024-0815</span>
            <div class="affix_bar-actions">
              <Button variant="outline" size="sm" label="취소" />
              <Button variant="filled" color="primary" size="sm" label="결제" />
            </div>
          </Affix>

          <p>상품명: 무선 이어폰 Pro · 수량 1 · ₩39,000</p>
          <p>배송비: ₩3,000 · 예상 도착: 2~3 영업일</p>
          <p>요청 사항: 부재 시 경비실에 맡겨 주세요.</p>
          <p>교환·반품은 수령 후 7일 이내 마이페이지에서 신청할 수 있습니다.</p>
          <p>문의: 고객센터 1588-0000 (평일 09:00–18:00)</p>
        </div>
      </div>
    </div>`})},f={name:"상단 오프셋",parameters:{demoPreview:{stack:!1},docs:{description:{story:"data-offset-top으로 뷰포트(또는 컨테이너) 상단과의 간격을 지정합니다. 고정 헤더 아래에 붙일 때 사용합니다."},source:{code:`<script setup>
import Affix from '@uxkm/ui/components/Affix.vue';
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <div class="affix_demo-narrow">
    <div id="affix-scroll-offset" class="affix_demo-scroll">
      <div class="affix_demo-content">
        <p>문서 편집 화면입니다. 스크롤 시 포맷 툴바가 상단에서 12px 떨어진 위치에 고정됩니다.</p>
        <p>제목: 2024년 3분기 실적 보고서</p>
        <p>작성자: 기획팀 · 최종 수정: 2024-08-15</p>
        <Affix target="#affix-scroll-offset" :offset-top="12" skin="bar">
          <Button variant="ghost" size="sm" icon-only aria-label="굵게">
            <template #icon-before>
              <svg
              class="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
              >
              <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
              <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
            </svg>
          </template>
        </Button>
        <Button variant="ghost" size="sm" icon-only aria-label="기울임">
          <template #icon-before>
            <svg
            class="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
            >
            <path d="M19 4h-9M14 20H5M15 4 9 20" />
          </svg>
        </template>
      </Button>
      <Button variant="ghost" size="sm" icon-only aria-label="밑줄">
        <template #icon-before>
          <svg
          class="icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
          >
          <path d="M6 3v7a6 6 0 0 0 12 0V3" />
          <path d="M4 21h16" />
        </svg>
      </template>
    </Button>
    <span
    class="affix_bar-label"
    style="font-weight: 400; color: var(--color-text-muted)"
    >
    서식
  </span>
  </Affix>
  <p>1. 개요 — 본 보고서는 2024년 3분기 매출·비용·이익 현황을 요약합니다.</p>
  <p>2. 매출 — 전년 동기 대비 12% 증가, 신규 고객 유입이 주요 성장 동력입니다.</p>
  <p>3. 비용 — 마케팅 비용이 전분기 대비 8% 상승했습니다.</p>
  <p>4. 전망 — 4분기 시즌 효과로 완만한 성장이 예상됩니다.</p>
  <p>5. 부록 — 상세 표·차트는 별첨 자료를 참고하세요.</p>
  </div>
  </div>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Affix:C,Button:a},template:`<div class="affix_demo-narrow">
      <div id="affix-scroll-offset" class="affix_demo-scroll">
        <div class="affix_demo-content">
          <p>문서 편집 화면입니다. 스크롤 시 포맷 툴바가 상단에서 12px 떨어진 위치에 고정됩니다.</p>
          <p>제목: 2024년 3분기 실적 보고서</p>
          <p>작성자: 기획팀 · 최종 수정: 2024-08-15</p>

          <Affix target="#affix-scroll-offset" :offset-top="12" skin="bar">
              <Button variant="ghost" size="sm" icon-only aria-label="굵게">
                <template #icon-before>
                  <svg
                    class="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    aria-hidden="true"
                  >
                    <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                    <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                  </svg>
                </template>
              </Button>
              <Button variant="ghost" size="sm" icon-only aria-label="기울임">
                <template #icon-before>
                  <svg
                    class="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    aria-hidden="true"
                  >
                    <path d="M19 4h-9M14 20H5M15 4 9 20" />
                  </svg>
                </template>
              </Button>
              <Button variant="ghost" size="sm" icon-only aria-label="밑줄">
                <template #icon-before>
                  <svg
                    class="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    aria-hidden="true"
                  >
                    <path d="M6 3v7a6 6 0 0 0 12 0V3" />
                    <path d="M4 21h16" />
                  </svg>
                </template>
              </Button>
              <span
                class="affix_bar-label"
                style="font-weight: 400; color: var(--color-text-muted)"
              >
                서식
              </span>
          </Affix>

          <p>1. 개요 — 본 보고서는 2024년 3분기 매출·비용·이익 현황을 요약합니다.</p>
          <p>2. 매출 — 전년 동기 대비 12% 증가, 신규 고객 유입이 주요 성장 동력입니다.</p>
          <p>3. 비용 — 마케팅 비용이 전분기 대비 8% 상승했습니다.</p>
          <p>4. 전망 — 4분기 시즌 효과로 완만한 성장이 예상됩니다.</p>
          <p>5. 부록 — 상세 표·차트는 별첨 자료를 참고하세요.</p>
        </div>
      </div>
    </div>`})},l={name:"앵커 내비게이션",parameters:{demoPreview:{stack:!1},docs:{description:{story:"affix_anchor 스킨으로 섹션 앵커 링크를 고정합니다. 긴 문서·설정 페이지의 목차에 적합합니다."},source:{code:`<script setup>
import Affix from '@uxkm/ui/components/Affix.vue';
<\/script>

<template>
  <div class="affix_demo-narrow">
    <div id="affix-scroll-anchor" class="affix_demo-scroll">
      <div class="affix_demo-content">
        <p>설정 페이지입니다. 아래 목차가 스크롤 시 상단에 고정됩니다.</p>
        <Affix target="#affix-scroll-anchor" skin="anchor">
          <nav aria-label="설정 섹션">
            <a href="#affix-sec-profile" class="link color_primary">프로필</a>
            <a href="#affix-sec-security" class="link">보안</a>
            <a href="#affix-sec-notify" class="link">알림</a>
            <a href="#affix-sec-billing" class="link">결제</a>
          </nav>
        </Affix>
        <p id="affix-sec-profile">
          <strong>프로필</strong> — 이름, 아바타, 소개 문구를 수정합니다.</p>
          <p id="affix-sec-security">
            <strong>보안</strong> — 비밀번호 변경과 2단계 인증을 설정합니다.</p>
            <p id="affix-sec-notify">
              <strong>알림</strong> — 이메일·푸시·SMS 수신 여부를 관리합니다.</p>
              <p id="affix-sec-billing">
                <strong>결제</strong> — 등록된 카드와 청구 내역을 확인합니다.</p>
                <p>모든 변경 사항은 저장 버튼을 눌러야 반영됩니다.</p>
              </div>
            </div>
          </div>
</template>`,language:"vue"}}},render:()=>({components:{Affix:C,Button:a},template:`<div class="affix_demo-narrow">
      <div id="affix-scroll-anchor" class="affix_demo-scroll">
        <div class="affix_demo-content">
          <p>설정 페이지입니다. 아래 목차가 스크롤 시 상단에 고정됩니다.</p>

          <Affix target="#affix-scroll-anchor" skin="anchor">
            <nav aria-label="설정 섹션">
              <a href="#affix-sec-profile" class="link color_primary">프로필</a>
              <a href="#affix-sec-security" class="link">보안</a>
              <a href="#affix-sec-notify" class="link">알림</a>
              <a href="#affix-sec-billing" class="link">결제</a>
            </nav>
          </Affix>

          <p id="affix-sec-profile"><strong>프로필</strong> — 이름, 아바타, 소개 문구를 수정합니다.</p>
          <p id="affix-sec-security"><strong>보안</strong> — 비밀번호 변경과 2단계 인증을 설정합니다.</p>
          <p id="affix-sec-notify"><strong>알림</strong> — 이메일·푸시·SMS 수신 여부를 관리합니다.</p>
          <p id="affix-sec-billing"><strong>결제</strong> — 등록된 카드와 청구 내역을 확인합니다.</p>
          <p>모든 변경 사항은 저장 버튼을 눌러야 반영됩니다.</p>
        </div>
      </div>
    </div>`})},B={name:"하단 고정",parameters:{demoPreview:{stack:!1},docs:{description:{story:"data-offset-bottom을 지정하면 요소가 컨테이너 하단에 고정됩니다. 모바일 하단 액션 바에 활용합니다."},source:{code:`<script setup>
import Affix from '@uxkm/ui/components/Affix.vue';
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <div class="affix_demo-narrow">
    <div id="affix-scroll-bottom" class="affix_demo-scroll">
      <div class="affix_demo-content">
        <p>장바구니입니다. 스크롤해도 결제 버튼이 하단에 고정됩니다.</p>
        <p>무선 이어폰 Pro × 1 — ₩39,000</p>
        <p>USB-C 케이블 × 2 — ₩12,000</p>
        <p>보조배터리 10,000mAh × 1 — ₩29,000</p>
        <p>배송비 — ₩3,000</p>
        <p>쿠폰 할인 — −₩5,000</p>
        <Affix target="#affix-scroll-bottom" :offset-bottom="0" skin="bar">
          <span class="affix_bar-label">합계 ₩78,000</span>
          <div class="affix_bar-actions">
            <Button
            variant="filled"
            color="primary"
            block
            label="결제하기"
            style="min-width: 7rem"
            />
          </div>
        </Affix>
        <p>결제 수단은 다음 단계에서 선택합니다.</p>
        <p>적립 예정 포인트: 780P</p>
      </div>
    </div>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Affix:C,Button:a},template:`<div class="affix_demo-narrow">
      <div id="affix-scroll-bottom" class="affix_demo-scroll">
        <div class="affix_demo-content">
          <p>장바구니입니다. 스크롤해도 결제 버튼이 하단에 고정됩니다.</p>
          <p>무선 이어폰 Pro × 1 — ₩39,000</p>
          <p>USB-C 케이블 × 2 — ₩12,000</p>
          <p>보조배터리 10,000mAh × 1 — ₩29,000</p>
          <p>배송비 — ₩3,000</p>
          <p>쿠폰 할인 — −₩5,000</p>

          <Affix target="#affix-scroll-bottom" :offset-bottom="0" skin="bar">
            <span class="affix_bar-label">합계 ₩78,000</span>
            <div class="affix_bar-actions">
              <Button
                variant="filled"
                color="primary"
                block
                label="결제하기"
                style="min-width: 7rem"
              />
            </div>
          </Affix>

          <p>결제 수단은 다음 단계에서 선택합니다.</p>
          <p>적립 예정 포인트: 780P</p>
        </div>
      </div>
    </div>`})},c={name:"페이지 스크롤",parameters:{demoPreview:{stack:!1},docs:{description:{story:"data-target을 생략하면 window 스크롤을 기준으로 동작합니다. 이 섹션 아래로 페이지를 스크롤하면 배너가 상단에 고정됩니다."},source:{code:`<script setup>
import Affix from '@uxkm/ui/components/Affix.vue';
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <div class="affix_demo-narrow">
    <p
    style="
    margin: 0 0 var(--space-md);
    font-size: var(--text-size-sm);
    color: var(--color-text-muted);
    "
    >
    아래 배너가 페이지 스크롤 시 상단(오프셋 64px)에 고정됩니다. 가이드 헤더 높이를 고려한 예시입니다.
  </p>
  <Affix
  :offset-top="64"
  skin="bar"
  style="
  --affix-target-bg: color-mix(in srgb, var(--color-accent) 10%, var(--color-surface));
  "
  >
  <span class="affix_bar-label" style="color: var(--color-accent-text)">
    🎉 신규 컴포넌트 가이드가 업데이트되었습니다
  </span>
  <div class="affix_bar-actions">
    <Button
    tag="a"
    href="/getting-started"
    variant="filled"
    color="primary"
    size="sm"
    label="시작하기"
    />
  </div>
  </Affix>
  <p
  style="
  margin: var(--space-md) 0 0;
  font-size: var(--text-size-sm);
  color: var(--color-text-muted);
  "
  >
  페이지를 계속 스크롤하여 고정·해제 동작을 확인하세요.
  </p>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Affix:C,Button:a},template:`<div class="affix_demo-narrow">
      <p
        style="
          margin: 0 0 var(--space-md);
          font-size: var(--text-size-sm);
          color: var(--color-text-muted);
        "
      >
        아래 배너가 페이지 스크롤 시 상단(오프셋 64px)에 고정됩니다. 가이드 헤더 높이를 고려한 예시입니다.
      </p>

      <Affix
        :offset-top="64"
        skin="bar"
        style="
          --affix-target-bg: color-mix(in srgb, var(--color-accent) 10%, var(--color-surface));
        "
      >
        <span class="affix_bar-label" style="color: var(--color-accent-text)">
          🎉 신규 컴포넌트 가이드가 업데이트되었습니다
        </span>
        <div class="affix_bar-actions">
          <Button
            tag="a"
            href="/getting-started"
            variant="filled"
            color="primary"
            size="sm"
            label="시작하기"
          />
        </div>
      </Affix>

      <p
        style="
          margin: var(--space-md) 0 0;
          font-size: var(--text-size-sm);
          color: var(--color-text-muted);
        "
      >
        페이지를 계속 스크롤하여 고정·해제 동작을 확인하세요.
      </p>
    </div>`})};var m,x,D;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    target: "값",
    offsetTop: 0,
    skin: "bar",
    interactive: true
  },
  render: args => ({
    components: {
      Affix,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="affix_demo-narrow">
      <div id="affix-scroll-playground" class="affix_demo-scroll">
        <div class="affix_demo-content">
          <p>스크롤하면 상단에 고정됩니다.</p>
          <Affix v-bind="args" target="#affix-scroll-playground" skin="bar">
            <span class="affix_bar-label">주문 #ORD-2024</span>
            <div class="affix_bar-actions">
              <Button variant="outline" size="sm" label="취소" />
              <Button variant="filled" color="primary" size="sm" label="결제" />
            </div>
          </Affix>
          <p>추가 콘텐츠 — 스크롤해 보세요.</p>
          <p>배송지 · 결제 수단 · 상품 정보</p>
          <p>교환·반품 안내</p>
        </div>
      </div>
    </div>\`
  })
}`,...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var A,v,E;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "data-affix와 data-target으로 스크롤 영역을 연결합니다. 영역을 스크롤하면 .affix_target이 상단에 고정됩니다."
      },
      source: {
        code: "<script setup>\\nimport Affix from '@uxkm/ui/components/Affix.vue';\\nimport Button from '@uxkm/ui/components/Button.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"affix_demo-narrow\\">\\n    <div id=\\"affix-scroll-basic\\" class=\\"affix_demo-scroll\\">\\n      <div class=\\"affix_demo-content\\">\\n        <p>주문 상세 페이지입니다. 아래로 스크롤하면 액션 바가 상단에 고정됩니다.</p>\\n        <p>배송지: 서울특별시 강남구 테헤란로 123, 4층</p>\\n        <p>결제 수단: 신용카드 (일시불) · 주문 금액 ₩42,000</p>\\n        <Affix target=\\"#affix-scroll-basic\\" skin=\\"bar\\">\\n          <span class=\\"affix_bar-label\\">주문 #ORD-2024-0815</span>\\n          <div class=\\"affix_bar-actions\\">\\n            <Button variant=\\"outline\\" size=\\"sm\\" label=\\"취소\\" />\\n            <Button variant=\\"filled\\" color=\\"primary\\" size=\\"sm\\" label=\\"결제\\" />\\n          </div>\\n        </Affix>\\n        <p>상품명: 무선 이어폰 Pro · 수량 1 · ₩39,000</p>\\n        <p>배송비: ₩3,000 · 예상 도착: 2~3 영업일</p>\\n        <p>요청 사항: 부재 시 경비실에 맡겨 주세요.</p>\\n        <p>교환·반품은 수령 후 7일 이내 마이페이지에서 신청할 수 있습니다.</p>\\n        <p>문의: 고객센터 1588-0000 (평일 09:00–18:00)</p>\\n      </div>\\n    </div>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Affix,
      Button
    },
    template: \`<div class="affix_demo-narrow">
      <div id="affix-scroll-basic" class="affix_demo-scroll">
        <div class="affix_demo-content">
          <p>주문 상세 페이지입니다. 아래로 스크롤하면 액션 바가 상단에 고정됩니다.</p>
          <p>배송지: 서울특별시 강남구 테헤란로 123, 4층</p>
          <p>결제 수단: 신용카드 (일시불) · 주문 금액 ₩42,000</p>

          <Affix target="#affix-scroll-basic" skin="bar">
            <span class="affix_bar-label">주문 #ORD-2024-0815</span>
            <div class="affix_bar-actions">
              <Button variant="outline" size="sm" label="취소" />
              <Button variant="filled" color="primary" size="sm" label="결제" />
            </div>
          </Affix>

          <p>상품명: 무선 이어폰 Pro · 수량 1 · ₩39,000</p>
          <p>배송비: ₩3,000 · 예상 도착: 2~3 영업일</p>
          <p>요청 사항: 부재 시 경비실에 맡겨 주세요.</p>
          <p>교환·반품은 수령 후 7일 이내 마이페이지에서 신청할 수 있습니다.</p>
          <p>문의: 고객센터 1588-0000 (평일 09:00–18:00)</p>
        </div>
      </div>
    </div>\`
  })
}`,...(E=(v=r.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var g,b,h;f.parameters={...f.parameters,docs:{...(g=f.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "상단 오프셋",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "data-offset-top으로 뷰포트(또는 컨테이너) 상단과의 간격을 지정합니다. 고정 헤더 아래에 붙일 때 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Affix from '@uxkm/ui/components/Affix.vue';\\nimport Button from '@uxkm/ui/components/Button.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"affix_demo-narrow\\">\\n    <div id=\\"affix-scroll-offset\\" class=\\"affix_demo-scroll\\">\\n      <div class=\\"affix_demo-content\\">\\n        <p>문서 편집 화면입니다. 스크롤 시 포맷 툴바가 상단에서 12px 떨어진 위치에 고정됩니다.</p>\\n        <p>제목: 2024년 3분기 실적 보고서</p>\\n        <p>작성자: 기획팀 · 최종 수정: 2024-08-15</p>\\n        <Affix target=\\"#affix-scroll-offset\\" :offset-top=\\"12\\" skin=\\"bar\\">\\n          <Button variant=\\"ghost\\" size=\\"sm\\" icon-only aria-label=\\"굵게\\">\\n            <template #icon-before>\\n              <svg\\n              class=\\"icon\\"\\n              viewBox=\\"0 0 24 24\\"\\n              fill=\\"none\\"\\n              stroke=\\"currentColor\\"\\n              stroke-width=\\"2\\"\\n              aria-hidden=\\"true\\"\\n              >\\n              <path d=\\"M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z\\" />\\n              <path d=\\"M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z\\" />\\n            </svg>\\n          </template>\\n        </Button>\\n        <Button variant=\\"ghost\\" size=\\"sm\\" icon-only aria-label=\\"기울임\\">\\n          <template #icon-before>\\n            <svg\\n            class=\\"icon\\"\\n            viewBox=\\"0 0 24 24\\"\\n            fill=\\"none\\"\\n            stroke=\\"currentColor\\"\\n            stroke-width=\\"2\\"\\n            aria-hidden=\\"true\\"\\n            >\\n            <path d=\\"M19 4h-9M14 20H5M15 4 9 20\\" />\\n          </svg>\\n        </template>\\n      </Button>\\n      <Button variant=\\"ghost\\" size=\\"sm\\" icon-only aria-label=\\"밑줄\\">\\n        <template #icon-before>\\n          <svg\\n          class=\\"icon\\"\\n          viewBox=\\"0 0 24 24\\"\\n          fill=\\"none\\"\\n          stroke=\\"currentColor\\"\\n          stroke-width=\\"2\\"\\n          aria-hidden=\\"true\\"\\n          >\\n          <path d=\\"M6 3v7a6 6 0 0 0 12 0V3\\" />\\n          <path d=\\"M4 21h16\\" />\\n        </svg>\\n      </template>\\n    </Button>\\n    <span\\n    class=\\"affix_bar-label\\"\\n    style=\\"font-weight: 400; color: var(--color-text-muted)\\"\\n    >\\n    서식\\n  </span>\\n  </Affix>\\n  <p>1. 개요 — 본 보고서는 2024년 3분기 매출·비용·이익 현황을 요약합니다.</p>\\n  <p>2. 매출 — 전년 동기 대비 12% 증가, 신규 고객 유입이 주요 성장 동력입니다.</p>\\n  <p>3. 비용 — 마케팅 비용이 전분기 대비 8% 상승했습니다.</p>\\n  <p>4. 전망 — 4분기 시즌 효과로 완만한 성장이 예상됩니다.</p>\\n  <p>5. 부록 — 상세 표·차트는 별첨 자료를 참고하세요.</p>\\n  </div>\\n  </div>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Affix,
      Button
    },
    template: \`<div class="affix_demo-narrow">
      <div id="affix-scroll-offset" class="affix_demo-scroll">
        <div class="affix_demo-content">
          <p>문서 편집 화면입니다. 스크롤 시 포맷 툴바가 상단에서 12px 떨어진 위치에 고정됩니다.</p>
          <p>제목: 2024년 3분기 실적 보고서</p>
          <p>작성자: 기획팀 · 최종 수정: 2024-08-15</p>

          <Affix target="#affix-scroll-offset" :offset-top="12" skin="bar">
              <Button variant="ghost" size="sm" icon-only aria-label="굵게">
                <template #icon-before>
                  <svg
                    class="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    aria-hidden="true"
                  >
                    <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                    <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                  </svg>
                </template>
              </Button>
              <Button variant="ghost" size="sm" icon-only aria-label="기울임">
                <template #icon-before>
                  <svg
                    class="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    aria-hidden="true"
                  >
                    <path d="M19 4h-9M14 20H5M15 4 9 20" />
                  </svg>
                </template>
              </Button>
              <Button variant="ghost" size="sm" icon-only aria-label="밑줄">
                <template #icon-before>
                  <svg
                    class="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    aria-hidden="true"
                  >
                    <path d="M6 3v7a6 6 0 0 0 12 0V3" />
                    <path d="M4 21h16" />
                  </svg>
                </template>
              </Button>
              <span
                class="affix_bar-label"
                style="font-weight: 400; color: var(--color-text-muted)"
              >
                서식
              </span>
          </Affix>

          <p>1. 개요 — 본 보고서는 2024년 3분기 매출·비용·이익 현황을 요약합니다.</p>
          <p>2. 매출 — 전년 동기 대비 12% 증가, 신규 고객 유입이 주요 성장 동력입니다.</p>
          <p>3. 비용 — 마케팅 비용이 전분기 대비 8% 상승했습니다.</p>
          <p>4. 전망 — 4분기 시즌 효과로 완만한 성장이 예상됩니다.</p>
          <p>5. 부록 — 상세 표·차트는 별첨 자료를 참고하세요.</p>
        </div>
      </div>
    </div>\`
  })
}`,...(h=(b=f.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var _,k,y;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "앵커 내비게이션",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "affix_anchor 스킨으로 섹션 앵커 링크를 고정합니다. 긴 문서·설정 페이지의 목차에 적합합니다."
      },
      source: {
        code: "<script setup>\\nimport Affix from '@uxkm/ui/components/Affix.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"affix_demo-narrow\\">\\n    <div id=\\"affix-scroll-anchor\\" class=\\"affix_demo-scroll\\">\\n      <div class=\\"affix_demo-content\\">\\n        <p>설정 페이지입니다. 아래 목차가 스크롤 시 상단에 고정됩니다.</p>\\n        <Affix target=\\"#affix-scroll-anchor\\" skin=\\"anchor\\">\\n          <nav aria-label=\\"설정 섹션\\">\\n            <a href=\\"#affix-sec-profile\\" class=\\"link color_primary\\">프로필</a>\\n            <a href=\\"#affix-sec-security\\" class=\\"link\\">보안</a>\\n            <a href=\\"#affix-sec-notify\\" class=\\"link\\">알림</a>\\n            <a href=\\"#affix-sec-billing\\" class=\\"link\\">결제</a>\\n          </nav>\\n        </Affix>\\n        <p id=\\"affix-sec-profile\\">\\n          <strong>프로필</strong> — 이름, 아바타, 소개 문구를 수정합니다.</p>\\n          <p id=\\"affix-sec-security\\">\\n            <strong>보안</strong> — 비밀번호 변경과 2단계 인증을 설정합니다.</p>\\n            <p id=\\"affix-sec-notify\\">\\n              <strong>알림</strong> — 이메일·푸시·SMS 수신 여부를 관리합니다.</p>\\n              <p id=\\"affix-sec-billing\\">\\n                <strong>결제</strong> — 등록된 카드와 청구 내역을 확인합니다.</p>\\n                <p>모든 변경 사항은 저장 버튼을 눌러야 반영됩니다.</p>\\n              </div>\\n            </div>\\n          </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Affix,
      Button
    },
    template: \`<div class="affix_demo-narrow">
      <div id="affix-scroll-anchor" class="affix_demo-scroll">
        <div class="affix_demo-content">
          <p>설정 페이지입니다. 아래 목차가 스크롤 시 상단에 고정됩니다.</p>

          <Affix target="#affix-scroll-anchor" skin="anchor">
            <nav aria-label="설정 섹션">
              <a href="#affix-sec-profile" class="link color_primary">프로필</a>
              <a href="#affix-sec-security" class="link">보안</a>
              <a href="#affix-sec-notify" class="link">알림</a>
              <a href="#affix-sec-billing" class="link">결제</a>
            </nav>
          </Affix>

          <p id="affix-sec-profile"><strong>프로필</strong> — 이름, 아바타, 소개 문구를 수정합니다.</p>
          <p id="affix-sec-security"><strong>보안</strong> — 비밀번호 변경과 2단계 인증을 설정합니다.</p>
          <p id="affix-sec-notify"><strong>알림</strong> — 이메일·푸시·SMS 수신 여부를 관리합니다.</p>
          <p id="affix-sec-billing"><strong>결제</strong> — 등록된 카드와 청구 내역을 확인합니다.</p>
          <p>모든 변경 사항은 저장 버튼을 눌러야 반영됩니다.</p>
        </div>
      </div>
    </div>\`
  })
}`,...(y=(k=l.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var w,F,z;B.parameters={...B.parameters,docs:{...(w=B.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "하단 고정",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "data-offset-bottom을 지정하면 요소가 컨테이너 하단에 고정됩니다. 모바일 하단 액션 바에 활용합니다."
      },
      source: {
        code: "<script setup>\\nimport Affix from '@uxkm/ui/components/Affix.vue';\\nimport Button from '@uxkm/ui/components/Button.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"affix_demo-narrow\\">\\n    <div id=\\"affix-scroll-bottom\\" class=\\"affix_demo-scroll\\">\\n      <div class=\\"affix_demo-content\\">\\n        <p>장바구니입니다. 스크롤해도 결제 버튼이 하단에 고정됩니다.</p>\\n        <p>무선 이어폰 Pro × 1 — ₩39,000</p>\\n        <p>USB-C 케이블 × 2 — ₩12,000</p>\\n        <p>보조배터리 10,000mAh × 1 — ₩29,000</p>\\n        <p>배송비 — ₩3,000</p>\\n        <p>쿠폰 할인 — −₩5,000</p>\\n        <Affix target=\\"#affix-scroll-bottom\\" :offset-bottom=\\"0\\" skin=\\"bar\\">\\n          <span class=\\"affix_bar-label\\">합계 ₩78,000</span>\\n          <div class=\\"affix_bar-actions\\">\\n            <Button\\n            variant=\\"filled\\"\\n            color=\\"primary\\"\\n            block\\n            label=\\"결제하기\\"\\n            style=\\"min-width: 7rem\\"\\n            />\\n          </div>\\n        </Affix>\\n        <p>결제 수단은 다음 단계에서 선택합니다.</p>\\n        <p>적립 예정 포인트: 780P</p>\\n      </div>\\n    </div>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Affix,
      Button
    },
    template: \`<div class="affix_demo-narrow">
      <div id="affix-scroll-bottom" class="affix_demo-scroll">
        <div class="affix_demo-content">
          <p>장바구니입니다. 스크롤해도 결제 버튼이 하단에 고정됩니다.</p>
          <p>무선 이어폰 Pro × 1 — ₩39,000</p>
          <p>USB-C 케이블 × 2 — ₩12,000</p>
          <p>보조배터리 10,000mAh × 1 — ₩29,000</p>
          <p>배송비 — ₩3,000</p>
          <p>쿠폰 할인 — −₩5,000</p>

          <Affix target="#affix-scroll-bottom" :offset-bottom="0" skin="bar">
            <span class="affix_bar-label">합계 ₩78,000</span>
            <div class="affix_bar-actions">
              <Button
                variant="filled"
                color="primary"
                block
                label="결제하기"
                style="min-width: 7rem"
              />
            </div>
          </Affix>

          <p>결제 수단은 다음 단계에서 선택합니다.</p>
          <p>적립 예정 포인트: 780P</p>
        </div>
      </div>
    </div>\`
  })
}`,...(z=(F=B.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var M,S,P;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "페이지 스크롤",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "data-target을 생략하면 window 스크롤을 기준으로 동작합니다. 이 섹션 아래로 페이지를 스크롤하면 배너가 상단에 고정됩니다."
      },
      source: {
        code: "<script setup>\\nimport Affix from '@uxkm/ui/components/Affix.vue';\\nimport Button from '@uxkm/ui/components/Button.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"affix_demo-narrow\\">\\n    <p\\n    style=\\"\\n    margin: 0 0 var(--space-md);\\n    font-size: var(--text-size-sm);\\n    color: var(--color-text-muted);\\n    \\"\\n    >\\n    아래 배너가 페이지 스크롤 시 상단(오프셋 64px)에 고정됩니다. 가이드 헤더 높이를 고려한 예시입니다.\\n  </p>\\n  <Affix\\n  :offset-top=\\"64\\"\\n  skin=\\"bar\\"\\n  style=\\"\\n  --affix-target-bg: color-mix(in srgb, var(--color-accent) 10%, var(--color-surface));\\n  \\"\\n  >\\n  <span class=\\"affix_bar-label\\" style=\\"color: var(--color-accent-text)\\">\\n    🎉 신규 컴포넌트 가이드가 업데이트되었습니다\\n  </span>\\n  <div class=\\"affix_bar-actions\\">\\n    <Button\\n    tag=\\"a\\"\\n    href=\\"/getting-started\\"\\n    variant=\\"filled\\"\\n    color=\\"primary\\"\\n    size=\\"sm\\"\\n    label=\\"시작하기\\"\\n    />\\n  </div>\\n  </Affix>\\n  <p\\n  style=\\"\\n  margin: var(--space-md) 0 0;\\n  font-size: var(--text-size-sm);\\n  color: var(--color-text-muted);\\n  \\"\\n  >\\n  페이지를 계속 스크롤하여 고정·해제 동작을 확인하세요.\\n  </p>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Affix,
      Button
    },
    template: \`<div class="affix_demo-narrow">
      <p
        style="
          margin: 0 0 var(--space-md);
          font-size: var(--text-size-sm);
          color: var(--color-text-muted);
        "
      >
        아래 배너가 페이지 스크롤 시 상단(오프셋 64px)에 고정됩니다. 가이드 헤더 높이를 고려한 예시입니다.
      </p>

      <Affix
        :offset-top="64"
        skin="bar"
        style="
          --affix-target-bg: color-mix(in srgb, var(--color-accent) 10%, var(--color-surface));
        "
      >
        <span class="affix_bar-label" style="color: var(--color-accent-text)">
          🎉 신규 컴포넌트 가이드가 업데이트되었습니다
        </span>
        <div class="affix_bar-actions">
          <Button
            tag="a"
            href="/getting-started"
            variant="filled"
            color="primary"
            size="sm"
            label="시작하기"
          />
        </div>
      </Affix>

      <p
        style="
          margin: var(--space-md) 0 0;
          font-size: var(--text-size-sm);
          color: var(--color-text-muted);
        "
      >
        페이지를 계속 스크롤하여 고정·해제 동작을 확인하세요.
      </p>
    </div>\`
  })
}`,...(P=(S=c.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};const ru=["Playground","Basic","Offset","Anchor","Bottom","Window"];export{l as Anchor,r as Basic,B as Bottom,f as Offset,s as Playground,c as Window,ru as __namedExportsOrder,su as default};
