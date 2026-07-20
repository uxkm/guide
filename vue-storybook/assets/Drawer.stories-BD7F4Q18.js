import{k as we,l as De,u as ge,a as fe,a9 as be,c as d,d as s,f as m,r as C,h as F,w as ve,p as z,s as Ae,q as n,n as Ee,g as i,o as c,t as ye,_ as ie,i as _e}from"./iframe-CAswI7Qe.js";import{s as ke,w as he}from"./story-renders-DjeoaiCa.js";import{_ as xe}from"./Tag-CUdCnuDd.js";import{e as Fe,a as ze}from"./ripple-api-Dpyr2TOk.js";import"./preload-helper-PMqzWbAN.js";const Se=["id","data-drawer-backdrop","data-drawer-open-on-load","data-drawer-draggable","hidden"],Pe={key:0,class:"drawer_handle","data-drawer-drag-handle":"",role:"presentation","aria-hidden":"true"},Te={key:1,class:"drawer_header","data-demo-slot":"header"},Le={key:0,class:"drawer_extra","data-demo-slot":"extra"},Ie={class:"drawer_body","data-demo-slot":"default"},Oe={key:2,class:"drawer_footer","data-demo-slot":"footer"},a=Object.assign({inheritAttrs:!1},{__name:"Drawer",props:{ripple:we,id:{type:String,required:!0},size:{type:String,default:"md",validator:r=>["sm","md","lg"].includes(r)},placement:{type:String,default:"right",validator:r=>["left","right","top","bottom"].includes(r)},noBackdrop:Boolean,openOnLoad:Boolean,draggable:Boolean,title:String,open:Boolean},setup(r){const t=r,{rippleAttrs:ce}=De(t);ge();const p=fe(),h=_e(null),x=`${t.id}-title`,k=i(()=>t.draggable&&t.placement==="bottom");be(t,h,p);const pe=i(()=>({left:"drawer_placement-left",right:"drawer_placement-right",top:"drawer_placement-top",bottom:"drawer_placement-bottom"})[t.placement]),me=i(()=>{const e=["drawer_panel",pe.value];return t.size==="sm"&&e.push("drawer_sm"),t.size==="lg"&&e.push("drawer_lg"),k.value&&e.push("drawer_draggable"),e}),Ce=i(()=>{const e=["drawer"];return t.open&&e.push("is-open"),p.class&&e.push(p.class),e}),Be=i(()=>{const{class:e,...l}=p;return l});return(e,l)=>(c(),d("div",z({ref_key:"rootRef",ref:h,id:r.id,class:Ce.value,"data-drawer":"","data-drawer-backdrop":r.noBackdrop?"false":void 0,"data-drawer-open-on-load":r.openOnLoad?"true":void 0,"data-drawer-draggable":k.value?"true":void 0,role:"dialog","aria-modal":"true","aria-labelledby":x,tabindex:"-1",hidden:!r.open||void 0},Be.value),[l[1]||(l[1]=s("div",{class:"drawer_backdrop","data-drawer-close":"","aria-hidden":"true"},null,-1)),s("div",{class:Ee(me.value)},[k.value?(c(),d("div",Pe,[...l[0]||(l[0]=[s("span",{class:"drawer_handle-bar"},null,-1)])])):m("",!0),e.$slots.header||r.title?(c(),d("div",Te,[C(e.$slots,"header",{},()=>[s("h2",{class:"drawer_title",id:x},ye(r.title),1)]),e.$slots.extra?(c(),d("div",Le,[C(e.$slots,"extra")])):m("",!0),F(n,z({variant:"ghost","icon-only":"",class:"drawer_close","data-drawer-close":"","aria-label":"닫기"},Ae(ce)),{"icon-before":ve(()=>[F(ie,{name:"close",size:"sm",class:"drawer_close-icon"})]),_:1},16)])):m("",!0),s("div",Ie,[C(e.$slots,"default")]),e.$slots.footer?(c(),d("div",Oe,[C(e.$slots,"footer")])):m("",!0)],2)],16,Se))}}),$e=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],qe=[{name:"id",type:"string",default:"—",description:"루트 id (필수)"},{name:"title",type:"string",default:"—",description:"패널 제목 (drawer_title)"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"drawer_sm · drawer_lg"},{name:"placement",type:"'left' | 'right' | 'top' | 'bottom'",default:"right",description:"drawer_placement-*"},{name:"no-backdrop",type:"boolean",default:"false",description:'data-drawer-backdrop="false"'},{name:"open-on-load",type:"boolean",default:"false",description:'data-drawer-open-on-load="true"'},{name:"draggable",type:"boolean",default:"false",description:'하단 패널 핸들·헤더 드래그 펼침/접힘 (placement="bottom", data-drawer-draggable)'},{name:"open",type:"boolean",default:"false",description:"열림 상태 (is-open)"},Fe],Ne=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Re=[{name:"header",description:"헤더 (title 대체)"},{name:"extra",description:"헤더 보조 영역 (drawer_extra)"},{name:"default",description:"본문 (drawer_body)"},{name:"footer",description:"하단 액션 (drawer_footer)"}],Me=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ve=[{name:"drawer · drawer_backdrop · drawer_panel",description:"루트·백드롭·패널"},{name:"drawer_header · drawer_title · drawer_extra · drawer_close",description:"헤더 파트"},{name:"drawer_body · drawer_footer",description:"본문·푸터"},{name:"drawer_placement-left · drawer_placement-right · drawer_placement-top · drawer_placement-bottom",description:"슬라이드 방향"},{name:"drawer_sm · drawer_lg",description:"패널 크기"},{name:"drawer_handle · drawer_handle-bar · drawer_draggable",description:"하단 드래그 핸들"},{name:"data-drawer · data-drawer-trigger · data-drawer-close",description:"JS 연동 속성"},{name:"data-drawer-open-on-load",description:"페이지 로드 후 자동 열기"},{name:"data-drawer-draggable · data-drawer-drag-handle",description:"하단 드래그 펼침/접힘"},{name:"is-open · is-opening · is-closing · is-expanded · is-dragging · hidden",description:"열림·닫힘·드래그·애니메이션 상태"},...ze],He=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],je=[{name:"--drawer-z-index",default:"250",description:"레이어 순서"},{name:"--drawer-width · --drawer-width-sm · --drawer-width-lg",default:"24rem · 18rem · 36rem",description:"좌·우 패널 너비"},{name:"--drawer-height · --drawer-height-sm · --drawer-height-lg",default:"18rem · 14rem · 26rem",description:"상·하 패널 높이"},{name:"--drawer-height-expanded",default:"90%",description:"하단 드래그 펼침 높이"},{name:"--drawer-panel-duration-x · --drawer-panel-duration-y",default:"0.32s · 0.36s",description:"좌·우 / 상·하 슬라이드 시간"},{name:"--drawer-panel-easing-x · --drawer-panel-easing-y",default:"cubic-bezier(0.32, 0.72, 0, 1) · cubic-bezier(0.33, 1, 0.68, 1)",description:"방향별 이징"}],Je=[{title:"API · Props",tables:[{columns:$e,rows:qe,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:Ne,rows:Re,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Me,rows:Ve,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:He,rows:je,codeColumn:"name"}]}];function u(r){return he(r,r)}function o(r){return`
    <div class="drawer_demo-frame">
      <div class="drawer_demo-content">
        ${r}
      </div>
    </div>
  `}const Xe={title:"Components/피드백/Drawer",id:"components-drawer",component:a,tags:["autodocs"],argTypes:{id:{control:"text",type:{name:"string",summary:"string"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},placement:{control:"select",options:["left","right","top","bottom"],type:{name:"enum",summary:"'left' | 'right' | 'top' | 'bottom'"}},noBackdrop:{control:"boolean",type:{name:"boolean",summary:"boolean"}},openOnLoad:{control:"boolean",type:{name:"boolean",summary:"boolean"}},draggable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},title:{control:"text",type:{name:"string",summary:"string"}},open:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Je}},B={parameters:{controls:{disable:!1}},args:{id:"story-drawer",size:"md",placement:"right",noBackdrop:!1,openOnLoad:!1,draggable:!1,title:"제목",open:!0},render:(r,t)=>({components:{Drawer:a},setup(){return{args:ke(t)}},template:`
      <div class="drawer_demo-frame">
        <div class="drawer_demo-content">
          <p>Controls로 open · placement · size를 조절하세요.</p>
        </div>
        <Drawer
          v-bind="args"
          :class="{ 'drawer_demo-static': args.open }"
        >
          <p>드로어 내용입니다.</p>
        </Drawer>
      </div>
    `})},w={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"data-drawer-trigger로 패널을 열고, 백드롭·닫기 버튼·Esc로 닫습니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{id:"story-drawer",size:"md",placement:"right",title:"제목"},render:u(()=>({components:{Button:n,Drawer:a},template:o(`
      <Button variant="filled" color="primary" label="Drawer 열기" data-drawer-trigger="#drawer-basic" aria-controls="drawer-basic" />
      <Drawer id="drawer-basic" title="기본 Drawer">
        <p>Drawer 패널 본문입니다. 상세 정보·폼·설정 등 보조 작업에 적합합니다.</p>
        <p>백드롭을 클릭하거나 닫기 버튼, <kbd>Esc</kbd> 키로 패널을 닫을 수 있습니다.</p>
        <template #footer>
          <Button variant="ghost" label="취소" data-drawer-close />
          <Button variant="filled" color="primary" label="확인" data-drawer-close />
        </template>
      </Drawer>
    `)}))},D={name:"위치",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"drawer_placement-left · -right · -top · -bottom으로 슬라이드 방향을 지정합니다. 상·하는 둥근 모서리·하단은 드래그 핸들이 표시됩니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{id:"story-drawer",size:"md",placement:"right",title:"제목"},render:u(()=>({components:{Button:n,Drawer:a},template:o(`
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
        <p>기본 위치입니다. 상세 보기·편집 폼에 자주 사용합니다.</p>
      </Drawer>
      <Drawer id="drawer-place-top" placement="top" title="상단 패널">
        <p>검색·필터 바 등 상단에서 내려오는 패널입니다.</p>
      </Drawer>
      <Drawer id="drawer-place-bottom" placement="bottom" title="하단 패널">
        <p>모바일 액션 시트·공유 패널 등에 적합합니다.</p>
      </Drawer>
    `)}))},g={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"drawer_sm · drawer_lg으로 패널 너비(또는 상·하 배치 시 높이)를 조정합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Drawer from '@uxkm/ui/components/Drawer.vue';
<\/script>

<template>
  <div class="drawer_demo-row">
    <Button variant="outline" size="sm" label="Small" data-drawer-trigger="#drawer-size-sm" aria-controls="drawer-size-sm" />
    <Button variant="outline" label="Default" data-drawer-trigger="#drawer-size-default" aria-controls="drawer-size-default" />
    <Button variant="outline" size="lg" label="Large" data-drawer-trigger="#drawer-size-lg" aria-controls="drawer-size-lg" />
  </div>
</template>`,language:"vue"}}},args:{id:"story-drawer",size:"md",placement:"right",title:"제목"},render:u(()=>({components:{Button:n,Drawer:a},template:o(`
      <div class="drawer_demo-row">
        <Button variant="outline" size="sm" label="Small" data-drawer-trigger="#drawer-size-sm" aria-controls="drawer-size-sm" />
        <Button variant="outline" label="Default" data-drawer-trigger="#drawer-size-default" aria-controls="drawer-size-default" />
        <Button variant="outline" size="lg" label="Large" data-drawer-trigger="#drawer-size-lg" aria-controls="drawer-size-lg" />
      </div>
      <Drawer id="drawer-size-sm" size="sm" title="Small">
        <p><code class="typo_code">drawer_sm</code> — 좁은 보조 패널</p>
      </Drawer>
      <Drawer id="drawer-size-default" title="Default">
        <p>기본 너비 24rem</p>
      </Drawer>
      <Drawer id="drawer-size-lg" size="lg" title="Large">
        <p><code class="typo_code">drawer_lg</code> — 넓은 상세·폼 패널</p>
      </Drawer>
    `)}))},f={name:"헤더·푸터",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"drawer_header · drawer_body · drawer_footer로 영역을 나눕니다. 푸터에 저장·취소 등 액션 버튼을 배치합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{id:"story-drawer",size:"md",placement:"right",title:"제목"},render:u(()=>({components:{Button:n,Drawer:a},template:o(`
      <Button variant="filled" color="primary" label="항목 편집" data-drawer-trigger="#drawer-footer" aria-controls="drawer-footer" />
      <Drawer id="drawer-footer" title="항목 편집">
        <div class="form_layout form_layout-vertical">
          <div class="form_field">
            <label class="form_field-label" for="drawer-item-name">이름</label>
            <input class="input" type="text" id="drawer-item-name" placeholder="항목 이름" />
          </div>
          <div class="form_field">
            <label class="form_field-label" for="drawer-item-desc">설명</label>
            <textarea class="textarea" id="drawer-item-desc" rows="4" placeholder="간단한 설명"></textarea>
          </div>
        </div>
        <template #footer>
          <Button variant="ghost" label="취소" data-drawer-close />
          <Button variant="filled" color="primary" label="저장" data-drawer-close />
        </template>
      </Drawer>
    `)}))},b={name:"헤더 추가 영역",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"drawer_extra에 보조 액션·메타 정보를 배치합니다. 제목과 닫기 버튼 사이에 위치합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{id:"story-drawer",size:"md",placement:"right",title:"제목"},render:u(()=>({components:{Button:n,Drawer:a,Tag:xe},template:o(`
      <Button variant="outline" label="상세 보기" data-drawer-trigger="#drawer-extra" aria-controls="drawer-extra" />
      <Drawer id="drawer-extra" title="주문 #1042">
        <template #extra>
          <Tag variant="filled" color="success" label="완료" />
        </template>
        <p>상세 정보·상태 뱃지 등을 헤더 <code class="typo_code">drawer_extra</code>에 배치할 수 있습니다.</p>
      </Drawer>
    `)}))},v={name:"메뉴",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"Menu 컴포넌트와 조합해 모바일 내비게이션 패널을 구성합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{id:"story-drawer",size:"md",placement:"right",title:"제목"},render:u(()=>({components:{Button:n,Drawer:a,Icon:ie},template:o(`
      <Button variant="outline" icon-only aria-label="메뉴 열기" data-drawer-trigger="#drawer-menu" aria-controls="drawer-menu">
        <template #icon-before>
          <Icon name="menu" />
        </template>
      </Button>
      <Drawer id="drawer-menu" placement="left" title="앱 메뉴">
        <nav class="menu menu_vertical menu_compact" aria-label="앱 메뉴">
          <ul class="menu_list">
            <li class="menu_item">
              <a href="#" class="menu_link is-active" aria-current="page" @click.prevent>
                <span class="menu_label">대시보드</span>
              </a>
            </li>
            <li class="menu_item">
              <a href="#" class="menu_link" @click.prevent>
                <span class="menu_label">분석</span>
              </a>
            </li>
            <li class="menu_item">
              <a href="#" class="menu_link" @click.prevent>
                <span class="menu_label">설정</span>
              </a>
            </li>
          </ul>
        </nav>
      </Drawer>
    `)}))},A={name:"로드 시 자동 열기 (옵션)",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"data-drawer-open-on-load=&quot;true&quot;를 지정하면 페이지 로드 후 해당 Drawer를 자동으로 열 수 있습니다. 기본값은 비활성입니다. (Docs에서는 미리보기를 가리지 않도록 수동 트리거로 확인합니다.)"},source:{code:`<script setup>
import Drawer from '@uxkm/ui/components/Drawer.vue';
<\/script>

<template>
  <Drawer id="drawer-open-on-load" size="sm" title="자동 열기 옵션" open-on-load>
    <p>페이지 로드 후 자동으로 열립니다.</p>
  </Drawer>
</template>`,language:"vue"}}},render:u(()=>({components:{Button:n,Drawer:a},template:o(`
      <p class="form_field-hint"><code class="typo_code">open-on-load</code> / <code class="typo_code">data-drawer-open-on-load="true"</code> — 가이드 페이지에서 자동 열기를 확인할 수 있습니다.</p>
      <Button variant="outline" size="sm" label="옵션 패널 미리보기" data-drawer-trigger="#drawer-open-on-load" aria-controls="drawer-open-on-load" />
      <Drawer id="drawer-open-on-load" size="sm" title="자동 열기 옵션">
        <p>실서비스에서는 온보딩·공지 등에 <code class="typo_code">open-on-load</code>를 사용합니다.</p>
      </Drawer>
    `)}))},E={name:"중첩 Drawer",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"열린 Drawer 안에서 다른 Drawer를 열 수 있습니다. Esc는 가장 위에 열린 패널부터 닫습니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:u(()=>({components:{Button:n,Drawer:a},template:o(`
      <Button variant="ghost" label="중첩 예시 열기" data-drawer-trigger="#drawer-nested-1" aria-controls="drawer-nested-1" />
      <Drawer id="drawer-nested-1" title="1단계 Drawer">
        <p>다음 단계 Drawer를 열어 중첩 동작을 확인하세요.</p>
        <Button variant="outline" label="2단계 열기" data-drawer-trigger="#drawer-nested-2" aria-controls="drawer-nested-2" />
      </Drawer>
      <Drawer id="drawer-nested-2" size="sm" title="2단계 Drawer">
        <p>중첩된 Drawer입니다. <kbd>Esc</kbd>를 누르면 이 패널부터 닫힙니다.</p>
        <template #footer>
          <Button variant="filled" color="primary" label="완료" data-drawer-close />
        </template>
      </Drawer>
    `)}))},y={name:"하단 드래그 시트",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'placement="bottom" + draggable로 핸들·헤더를 드래그합니다. 위로 끌면 펼치고, 아래로 끌면 접거나 닫습니다. 터치 슬라이드도 동일합니다.'},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{id:"story-drawer",size:"md",placement:"bottom",draggable:!0,title:"제목"},render:u(()=>({components:{Button:n,Drawer:a},template:o(`
      <p class="form_field-hint">핸들 또는 제목 영역을 위·아래로 드래그(터치 슬라이드)해 보세요.</p>
      <Button variant="filled" color="primary" label="드래그 시트 열기" data-drawer-trigger="#drawer-drag" aria-controls="drawer-drag" />
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
    `)}))},_={name:"백드롭 없음",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"data-drawer-backdrop=&quot;false&quot;로 어두운 배경을 숨깁니다. 본문과 동시에 상호작용할 수 있습니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Drawer from '@uxkm/ui/components/Drawer.vue';
<\/script>

<template>
  <Button variant="ghost" label="백드롭 없이 열기" data-drawer-trigger="#drawer-no-backdrop" aria-controls="drawer-no-backdrop" />
  <Drawer id="drawer-no-backdrop" size="sm" title="백드롭 없음" no-backdrop>
    <p>본문을 가리지 않고 패널만 표시합니다.</p>
  </Drawer>
</template>`,language:"vue"}}},render:u(()=>({components:{Button:n,Drawer:a},template:o(`
      <Button variant="ghost" label="백드롭 없이 열기" data-drawer-trigger="#drawer-no-backdrop" aria-controls="drawer-no-backdrop" />
      <Drawer id="drawer-no-backdrop" size="sm" title="백드롭 없음" no-backdrop>
        <p>본문을 가리지 않고 패널만 표시합니다. 닫기 버튼이나 <kbd>Esc</kbd>로 닫으세요.</p>
      </Drawer>
    `)}))};var S,P,T;B.parameters={...B.parameters,docs:{...(S=B.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    id: "story-drawer",
    size: "md",
    placement: "right",
    noBackdrop: false,
    openOnLoad: false,
    draggable: false,
    title: "제목",
    open: true
  },
  render: (_args, context) => ({
    components: {
      Drawer
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: \`
      <div class="drawer_demo-frame">
        <div class="drawer_demo-content">
          <p>Controls로 open · placement · size를 조절하세요.</p>
        </div>
        <Drawer
          v-bind="args"
          :class="{ 'drawer_demo-static': args.open }"
        >
          <p>드로어 내용입니다.</p>
        </Drawer>
      </div>
    \`
  })
}`,...(T=(P=B.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var L,I,O;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "data-drawer-trigger로 패널을 열고, 백드롭·닫기 버튼·Esc로 닫습니다."
      },
      source: {
        code: \`<script setup>
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
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    id: "story-drawer",
    size: "md",
    placement: "right",
    title: "제목"
  },
  render: drawerDemo(() => ({
    components: {
      Button,
      Drawer
    },
    template: frameDemo(\`
      <Button variant="filled" color="primary" label="Drawer 열기" data-drawer-trigger="#drawer-basic" aria-controls="drawer-basic" />
      <Drawer id="drawer-basic" title="기본 Drawer">
        <p>Drawer 패널 본문입니다. 상세 정보·폼·설정 등 보조 작업에 적합합니다.</p>
        <p>백드롭을 클릭하거나 닫기 버튼, <kbd>Esc</kbd> 키로 패널을 닫을 수 있습니다.</p>
        <template #footer>
          <Button variant="ghost" label="취소" data-drawer-close />
          <Button variant="filled" color="primary" label="확인" data-drawer-close />
        </template>
      </Drawer>
    \`)
  }))
}`,...(O=(I=w.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var $,q,N;D.parameters={...D.parameters,docs:{...($=D.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "위치",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "drawer_placement-left · -right · -top · -bottom으로 슬라이드 방향을 지정합니다. 상·하는 둥근 모서리·하단은 드래그 핸들이 표시됩니다."
      },
      source: {
        code: \`<script setup>
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
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    id: "story-drawer",
    size: "md",
    placement: "right",
    title: "제목"
  },
  render: drawerDemo(() => ({
    components: {
      Button,
      Drawer
    },
    template: frameDemo(\`
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
        <p>기본 위치입니다. 상세 보기·편집 폼에 자주 사용합니다.</p>
      </Drawer>
      <Drawer id="drawer-place-top" placement="top" title="상단 패널">
        <p>검색·필터 바 등 상단에서 내려오는 패널입니다.</p>
      </Drawer>
      <Drawer id="drawer-place-bottom" placement="bottom" title="하단 패널">
        <p>모바일 액션 시트·공유 패널 등에 적합합니다.</p>
      </Drawer>
    \`)
  }))
}`,...(N=(q=D.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var R,M,V;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "drawer_sm · drawer_lg으로 패널 너비(또는 상·하 배치 시 높이)를 조정합니다."
      },
      source: {
        code: \`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Drawer from '@uxkm/ui/components/Drawer.vue';
<\/script>

<template>
  <div class="drawer_demo-row">
    <Button variant="outline" size="sm" label="Small" data-drawer-trigger="#drawer-size-sm" aria-controls="drawer-size-sm" />
    <Button variant="outline" label="Default" data-drawer-trigger="#drawer-size-default" aria-controls="drawer-size-default" />
    <Button variant="outline" size="lg" label="Large" data-drawer-trigger="#drawer-size-lg" aria-controls="drawer-size-lg" />
  </div>
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    id: "story-drawer",
    size: "md",
    placement: "right",
    title: "제목"
  },
  render: drawerDemo(() => ({
    components: {
      Button,
      Drawer
    },
    template: frameDemo(\`
      <div class="drawer_demo-row">
        <Button variant="outline" size="sm" label="Small" data-drawer-trigger="#drawer-size-sm" aria-controls="drawer-size-sm" />
        <Button variant="outline" label="Default" data-drawer-trigger="#drawer-size-default" aria-controls="drawer-size-default" />
        <Button variant="outline" size="lg" label="Large" data-drawer-trigger="#drawer-size-lg" aria-controls="drawer-size-lg" />
      </div>
      <Drawer id="drawer-size-sm" size="sm" title="Small">
        <p><code class="typo_code">drawer_sm</code> — 좁은 보조 패널</p>
      </Drawer>
      <Drawer id="drawer-size-default" title="Default">
        <p>기본 너비 24rem</p>
      </Drawer>
      <Drawer id="drawer-size-lg" size="lg" title="Large">
        <p><code class="typo_code">drawer_lg</code> — 넓은 상세·폼 패널</p>
      </Drawer>
    \`)
  }))
}`,...(V=(M=g.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var H,j,J;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "헤더·푸터",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "drawer_header · drawer_body · drawer_footer로 영역을 나눕니다. 푸터에 저장·취소 등 액션 버튼을 배치합니다."
      },
      source: {
        code: \`<script setup>
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
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    id: "story-drawer",
    size: "md",
    placement: "right",
    title: "제목"
  },
  render: drawerDemo(() => ({
    components: {
      Button,
      Drawer
    },
    template: frameDemo(\`
      <Button variant="filled" color="primary" label="항목 편집" data-drawer-trigger="#drawer-footer" aria-controls="drawer-footer" />
      <Drawer id="drawer-footer" title="항목 편집">
        <div class="form_layout form_layout-vertical">
          <div class="form_field">
            <label class="form_field-label" for="drawer-item-name">이름</label>
            <input class="input" type="text" id="drawer-item-name" placeholder="항목 이름" />
          </div>
          <div class="form_field">
            <label class="form_field-label" for="drawer-item-desc">설명</label>
            <textarea class="textarea" id="drawer-item-desc" rows="4" placeholder="간단한 설명"></textarea>
          </div>
        </div>
        <template #footer>
          <Button variant="ghost" label="취소" data-drawer-close />
          <Button variant="filled" color="primary" label="저장" data-drawer-close />
        </template>
      </Drawer>
    \`)
  }))
}`,...(J=(j=f.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};var G,K,Q;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "헤더 추가 영역",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "drawer_extra에 보조 액션·메타 정보를 배치합니다. 제목과 닫기 버튼 사이에 위치합니다."
      },
      source: {
        code: \`<script setup>
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
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    id: "story-drawer",
    size: "md",
    placement: "right",
    title: "제목"
  },
  render: drawerDemo(() => ({
    components: {
      Button,
      Drawer,
      Tag
    },
    template: frameDemo(\`
      <Button variant="outline" label="상세 보기" data-drawer-trigger="#drawer-extra" aria-controls="drawer-extra" />
      <Drawer id="drawer-extra" title="주문 #1042">
        <template #extra>
          <Tag variant="filled" color="success" label="완료" />
        </template>
        <p>상세 정보·상태 뱃지 등을 헤더 <code class="typo_code">drawer_extra</code>에 배치할 수 있습니다.</p>
      </Drawer>
    \`)
  }))
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,W,X;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "메뉴",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "Menu 컴포넌트와 조합해 모바일 내비게이션 패널을 구성합니다."
      },
      source: {
        code: \`<script setup>
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
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    id: "story-drawer",
    size: "md",
    placement: "right",
    title: "제목"
  },
  render: drawerDemo(() => ({
    components: {
      Button,
      Drawer,
      Icon
    },
    template: frameDemo(\`
      <Button variant="outline" icon-only aria-label="메뉴 열기" data-drawer-trigger="#drawer-menu" aria-controls="drawer-menu">
        <template #icon-before>
          <Icon name="menu" />
        </template>
      </Button>
      <Drawer id="drawer-menu" placement="left" title="앱 메뉴">
        <nav class="menu menu_vertical menu_compact" aria-label="앱 메뉴">
          <ul class="menu_list">
            <li class="menu_item">
              <a href="#" class="menu_link is-active" aria-current="page" @click.prevent>
                <span class="menu_label">대시보드</span>
              </a>
            </li>
            <li class="menu_item">
              <a href="#" class="menu_link" @click.prevent>
                <span class="menu_label">분석</span>
              </a>
            </li>
            <li class="menu_item">
              <a href="#" class="menu_link" @click.prevent>
                <span class="menu_label">설정</span>
              </a>
            </li>
          </ul>
        </nav>
      </Drawer>
    \`)
  }))
}`,...(X=(W=v.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;A.parameters={...A.parameters,docs:{...(Y=A.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "로드 시 자동 열기 (옵션)",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "data-drawer-open-on-load=&quot;true&quot;를 지정하면 페이지 로드 후 해당 Drawer를 자동으로 열 수 있습니다. 기본값은 비활성입니다. (Docs에서는 미리보기를 가리지 않도록 수동 트리거로 확인합니다.)"
      },
      source: {
        code: \`<script setup>
import Drawer from '@uxkm/ui/components/Drawer.vue';
<\/script>

<template>
  <Drawer id="drawer-open-on-load" size="sm" title="자동 열기 옵션" open-on-load>
    <p>페이지 로드 후 자동으로 열립니다.</p>
  </Drawer>
</template>\`,
        language: 'vue'
      }
    }
  },
  render: drawerDemo(() => ({
    components: {
      Button,
      Drawer
    },
    template: frameDemo(\`
      <p class="form_field-hint"><code class="typo_code">open-on-load</code> / <code class="typo_code">data-drawer-open-on-load="true"</code> — 가이드 페이지에서 자동 열기를 확인할 수 있습니다.</p>
      <Button variant="outline" size="sm" label="옵션 패널 미리보기" data-drawer-trigger="#drawer-open-on-load" aria-controls="drawer-open-on-load" />
      <Drawer id="drawer-open-on-load" size="sm" title="자동 열기 옵션">
        <p>실서비스에서는 온보딩·공지 등에 <code class="typo_code">open-on-load</code>를 사용합니다.</p>
      </Drawer>
    \`)
  }))
}`,...(ee=(Z=A.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,te;E.parameters={...E.parameters,docs:{...(re=E.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "중첩 Drawer",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "열린 Drawer 안에서 다른 Drawer를 열 수 있습니다. Esc는 가장 위에 열린 패널부터 닫습니다."
      },
      source: {
        code: \`<script setup>
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
</template>\`,
        language: 'vue'
      }
    }
  },
  render: drawerDemo(() => ({
    components: {
      Button,
      Drawer
    },
    template: frameDemo(\`
      <Button variant="ghost" label="중첩 예시 열기" data-drawer-trigger="#drawer-nested-1" aria-controls="drawer-nested-1" />
      <Drawer id="drawer-nested-1" title="1단계 Drawer">
        <p>다음 단계 Drawer를 열어 중첩 동작을 확인하세요.</p>
        <Button variant="outline" label="2단계 열기" data-drawer-trigger="#drawer-nested-2" aria-controls="drawer-nested-2" />
      </Drawer>
      <Drawer id="drawer-nested-2" size="sm" title="2단계 Drawer">
        <p>중첩된 Drawer입니다. <kbd>Esc</kbd>를 누르면 이 패널부터 닫힙니다.</p>
        <template #footer>
          <Button variant="filled" color="primary" label="완료" data-drawer-close />
        </template>
      </Drawer>
    \`)
  }))
}`,...(te=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,ue,oe;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: "하단 드래그 시트",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "placement=\\"bottom\\" + draggable로 핸들·헤더를 드래그합니다. 위로 끌면 펼치고, 아래로 끌면 접거나 닫습니다. 터치 슬라이드도 동일합니다."
      },
      source: {
        code: \`<script setup>
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
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    id: "story-drawer",
    size: "md",
    placement: "bottom",
    draggable: true,
    title: "제목"
  },
  render: drawerDemo(() => ({
    components: {
      Button,
      Drawer
    },
    template: frameDemo(\`
      <p class="form_field-hint">핸들 또는 제목 영역을 위·아래로 드래그(터치 슬라이드)해 보세요.</p>
      <Button variant="filled" color="primary" label="드래그 시트 열기" data-drawer-trigger="#drawer-drag" aria-controls="drawer-drag" />
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
    \`)
  }))
}`,...(oe=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:oe.source}}};var le,de,se;_.parameters={..._.parameters,docs:{...(le=_.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: "백드롭 없음",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "data-drawer-backdrop=&quot;false&quot;로 어두운 배경을 숨깁니다. 본문과 동시에 상호작용할 수 있습니다."
      },
      source: {
        code: \`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Drawer from '@uxkm/ui/components/Drawer.vue';
<\/script>

<template>
  <Button variant="ghost" label="백드롭 없이 열기" data-drawer-trigger="#drawer-no-backdrop" aria-controls="drawer-no-backdrop" />
  <Drawer id="drawer-no-backdrop" size="sm" title="백드롭 없음" no-backdrop>
    <p>본문을 가리지 않고 패널만 표시합니다.</p>
  </Drawer>
</template>\`,
        language: 'vue'
      }
    }
  },
  render: drawerDemo(() => ({
    components: {
      Button,
      Drawer
    },
    template: frameDemo(\`
      <Button variant="ghost" label="백드롭 없이 열기" data-drawer-trigger="#drawer-no-backdrop" aria-controls="drawer-no-backdrop" />
      <Drawer id="drawer-no-backdrop" size="sm" title="백드롭 없음" no-backdrop>
        <p>본문을 가리지 않고 패널만 표시합니다. 닫기 버튼이나 <kbd>Esc</kbd>로 닫으세요.</p>
      </Drawer>
    \`)
  }))
}`,...(se=(de=_.parameters)==null?void 0:de.docs)==null?void 0:se.source}}};const Ye=["Playground","Basic","Placement","Size","Footer","Extra","Menu","OpenOnLoad","Nested","DragSheet","NoBackdrop"];export{w as Basic,y as DragSheet,b as Extra,f as Footer,v as Menu,E as Nested,_ as NoBackdrop,A as OpenOnLoad,D as Placement,B as Playground,g as Size,Ye as __namedExportsOrder,Xe as default};
