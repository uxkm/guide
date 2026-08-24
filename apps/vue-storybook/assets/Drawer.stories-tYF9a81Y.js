import{k as _e,l as Ae,u as ye,a as Ee,a8 as he,o as s,c as i,d as c,g as m,r as C,t as ke,e as z,w as xe,_ as we,p as P,s as Fe,q as o,n as S,j as d,h as ze}from"./iframe-BHuoLYUS.js";import{s as Pe,w as Se}from"./story-renders-C_n8_MI3.js";import{_ as Ne}from"./Tag-D0MNLatk.js";import{e as Re,a as Le}from"./ripple-api-Dpyr2TOk.js";import"./preload-helper-PMqzWbAN.js";const Oe=["id","data-drawer-backdrop","data-drawer-open-on-load","data-drawer-draggable","hidden"],Te={key:0,class:"drawer_handle","data-drawer-drag-handle":"",role:"presentation","aria-hidden":"true"},Ie={key:1,class:"drawer_header","data-demo-slot":"header"},$e={key:0,class:"drawer_extra","data-demo-slot":"extra"},qe={class:"drawer_body","data-demo-slot":"default"},t=Object.assign({inheritAttrs:!1},{__name:"Drawer",props:{ripple:_e,id:{type:String,required:!0},size:{type:String,default:"md",validator:r=>["sm","md","lg"].includes(r)},placement:{type:String,default:"right",validator:r=>["left","right","top","bottom"].includes(r)},noBackdrop:Boolean,openOnLoad:Boolean,draggable:Boolean,title:String,open:Boolean,footerAlign:{type:String,default:"end",validator:r=>["start","center","end","between","even"].includes(r)},footerRatio:{type:String,default:"1-1",validator:r=>["1-1","1-2","2-1"].includes(r)},footerNoPadBottom:Boolean},setup(r){const a=r,{rippleAttrs:Be}=Ae(a);ye();const p=Ee(),x=ze(null),F=`${a.id}-title`,k=d(()=>a.draggable&&a.placement==="bottom");he(a,x,p);const De=d(()=>({left:"drawer_placement-left",right:"drawer_placement-right",top:"drawer_placement-top",bottom:"drawer_placement-bottom"})[a.placement]),fe=d(()=>{const e=["drawer_panel",De.value];return a.size==="sm"&&e.push("drawer_sm"),a.size==="lg"&&e.push("drawer_lg"),k.value&&e.push("drawer_draggable"),e}),ge=d(()=>{const e=["drawer"];return a.open&&e.push("is-open"),p.class&&e.push(p.class),e}),be=d(()=>{const e=["drawer_footer"];return a.footerAlign&&a.footerAlign!=="end"&&e.push(`drawer_footer-${a.footerAlign}`),a.footerAlign==="even"&&a.footerRatio&&a.footerRatio!=="1-1"&&e.push(`drawer_footer-even-${a.footerRatio}`),a.footerNoPadBottom&&e.push("drawer_footer-no-pad-b"),e}),ve=d(()=>{const{class:e,...l}=p;return l});return(e,l)=>(s(),i("div",P({ref_key:"rootRef",ref:x,id:r.id,class:ge.value,"data-drawer":"","data-drawer-backdrop":r.noBackdrop?"false":void 0,"data-drawer-open-on-load":r.openOnLoad?"true":void 0,"data-drawer-draggable":k.value?"true":void 0,role:"dialog","aria-modal":"true","aria-labelledby":F,tabindex:"-1",hidden:!r.open||void 0},ve.value),[l[1]||(l[1]=c("div",{class:"drawer_backdrop","data-drawer-close":"","aria-hidden":"true"},null,-1)),c("div",{class:S(fe.value)},[k.value?(s(),i("div",Te,[...l[0]||(l[0]=[c("span",{class:"drawer_handle-bar"},null,-1)])])):m("",!0),e.$slots.header||r.title?(s(),i("div",Ie,[C(e.$slots,"header",{},()=>[c("h2",{class:"drawer_title",id:F},ke(r.title),1)]),e.$slots.extra?(s(),i("div",$e,[C(e.$slots,"extra")])):m("",!0),z(o,P({variant:"ghost","icon-only":"",class:"drawer_close","data-drawer-close":"","aria-label":"닫기"},Fe(Be)),{"icon-before":xe(()=>[z(we,{name:"close",size:"sm",class:"drawer_close-icon"})]),_:1},16)])):m("",!0),c("div",qe,[C(e.$slots,"default")]),e.$slots.footer?(s(),i("div",{key:2,class:S(be.value),"data-demo-slot":"footer"},[C(e.$slots,"footer")],2)):m("",!0)],2)],16,Oe))}});t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{exportName:"default",displayName:"Drawer",description:"",tags:{},props:[{name:"ripple",description:"클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본",type:{name:"rippleProp"}},{name:"id",type:{name:"string"},required:!0},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'md'"},values:["sm","md","lg"]},{name:"placement",type:{name:"string"},defaultValue:{func:!1,value:"'right'"},values:["left","right","top","bottom"]},{name:"noBackdrop",type:{name:"boolean"}},{name:"openOnLoad",type:{name:"boolean"}},{name:"draggable",description:'하단 패널 핸들·헤더 드래그로 펼침/접힘 (placement="bottom")',type:{name:"boolean"}},{name:"title",type:{name:"string"}},{name:"open",type:{name:"boolean"}},{name:"footerAlign",description:"푸터 버튼 정렬 (drawer_footer-*)",type:{name:"string"},defaultValue:{func:!1,value:"'end'"},values:["start","center","end","between","even"]},{name:"footerRatio",description:"균등 정렬(even)일 때 좌·우 비율 (drawer_footer-even-*)",type:{name:"string"},defaultValue:{func:!1,value:"'1-1'"},values:["1-1","1-2","2-1"]},{name:"footerNoPadBottom",description:"푸터 하단 패딩 제거 (drawer_footer-no-pad-b)",type:{name:"boolean"}}],slots:[{name:"header"},{name:"extra"},{name:"default"},{name:"footer"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/Drawer.vue"]});const Ve=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Me=[{name:"id",type:"string",default:"—",description:"루트 id (필수)"},{name:"title",type:"string",default:"—",description:"패널 제목 (drawer_title)"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"drawer_sm · drawer_lg"},{name:"placement",type:"'left' | 'right' | 'top' | 'bottom'",default:"right",description:"drawer_placement-*"},{name:"no-backdrop",type:"boolean",default:"false",description:'data-drawer-backdrop="false"'},{name:"open-on-load",type:"boolean",default:"false",description:'data-drawer-open-on-load="true"'},{name:"draggable",type:"boolean",default:"false",description:'하단 패널 핸들·헤더 드래그 펼침/접힘 (placement="bottom", data-drawer-draggable)'},{name:"open",type:"boolean",default:"false",description:"열림 상태 (is-open)"},{name:"footer-align",type:"'start' | 'center' | 'end' | 'between' | 'even'",default:"end",description:"푸터 정렬 (drawer_footer-start · center · between · even). between은 drawer_footer-group으로 좌·우 묶음"},{name:"footer-ratio",type:"'1-1' | '1-2' | '2-1'",default:"1-1",description:"균등 정렬(even) 좌·우 비율 (drawer_footer-even-1-2 · even-2-1)"},{name:"footer-no-pad-bottom",type:"boolean",default:"false",description:"푸터 하단 패딩 제거 (drawer_footer-no-pad-b). even과 함께 쓰면 좌우 패딩·간격도 제거"},Re],je=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],He=[{name:"header",description:"헤더 (title 대체)"},{name:"extra",description:"헤더 보조 영역 (drawer_extra)"},{name:"default",description:"본문 (drawer_body)"},{name:"footer",description:"하단 액션 (drawer_footer)"}],Je=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ue=[{name:"drawer · drawer_backdrop · drawer_panel",description:"루트·백드롭·패널"},{name:"drawer_header · drawer_title · drawer_extra · drawer_close",description:"헤더 파트"},{name:"drawer_body · drawer_footer",description:"본문·푸터"},{name:"drawer_footer-start · drawer_footer-center · drawer_footer-end · drawer_footer-between · drawer_footer-even",description:"푸터 정렬 (기본 end)"},{name:"drawer_footer-even-1-2 · drawer_footer-even-2-1",description:"균등 정렬 좌·우 비율 (기본 1:1)"},{name:"drawer_footer-no-pad-b",description:"푸터 하단 패딩 없음 (even 조합 시 좌우 패딩·간격 제거)"},{name:"drawer_footer-group",description:"병합 정렬용 좌·우 버튼 묶음"},{name:"drawer_placement-left · drawer_placement-right · drawer_placement-top · drawer_placement-bottom",description:"슬라이드 방향"},{name:"drawer_sm · drawer_lg",description:"패널 크기"},{name:"drawer_handle · drawer_handle-bar · drawer_draggable",description:"하단 드래그 핸들"},{name:"data-drawer · data-drawer-trigger · data-drawer-close",description:"JS 연동 속성"},{name:"data-drawer-open-on-load",description:"페이지 로드 후 자동 열기"},{name:"data-drawer-draggable · data-drawer-drag-handle",description:"하단 드래그 펼침/접힘"},{name:"is-open · is-opening · is-closing · is-stack-covered · is-expanded · is-dragging · hidden",description:"열림·닫힘·중첩 하위(백드롭 숨김)·드래그·애니메이션 상태"},...Le],Ge=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ke=[{name:"--drawer-z-index",default:"250",description:"레이어 순서"},{name:"--drawer-width · --drawer-width-sm · --drawer-width-lg",default:"24rem · 18rem · 36rem",description:"좌·우 패널 너비"},{name:"--drawer-height · --drawer-height-sm · --drawer-height-lg",default:"18rem · 14rem · 26rem",description:"상·하 패널 높이"},{name:"--drawer-height-expanded",default:"90%",description:"하단 드래그 펼침 높이"},{name:"--drawer-panel-duration-x · --drawer-panel-duration-y",default:"0.32s · 0.36s",description:"좌·우 / 상·하 슬라이드 시간"},{name:"--drawer-panel-easing-x · --drawer-panel-easing-y",default:"cubic-bezier(0.32, 0.72, 0, 1) · cubic-bezier(0.33, 1, 0.68, 1)",description:"방향별 이징"}],Qe=[{title:"API · Props",tables:[{columns:Ve,rows:Me,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:je,rows:He,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Je,rows:Ue,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Ge,rows:Ke,codeColumn:"name"}]}];function n(r){return Se(r,r)}function u(r){return`
    <div class="drawer_demo-frame">
      <div class="drawer_demo-content">
        ${r}
      </div>
    </div>
  `}const rr={title:"Components/피드백/Drawer",id:"components-drawer",component:t,tags:["autodocs"],argTypes:{id:{control:"text",type:{name:"string",summary:"string"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},placement:{control:"select",options:["left","right","top","bottom"],type:{name:"enum",summary:"'left' | 'right' | 'top' | 'bottom'"}},noBackdrop:{control:"boolean",type:{name:"boolean",summary:"boolean"}},openOnLoad:{control:"boolean",type:{name:"boolean",summary:"boolean"}},draggable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},title:{control:"text",type:{name:"string",summary:"string"}},open:{control:"boolean",type:{name:"boolean",summary:"boolean"}},footerAlign:{control:"select",options:["start","center","end","between","even"],type:{name:"enum",summary:"'start' | 'center' | 'end' | 'between' | 'even'"}},footerRatio:{control:"select",options:["1-1","1-2","2-1"],type:{name:"enum",summary:"'1-1' | '1-2' | '2-1'"}},footerNoPadBottom:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Qe}},w={parameters:{controls:{disable:!1}},args:{id:"story-drawer",size:"md",placement:"right",noBackdrop:!1,openOnLoad:!1,draggable:!1,title:"제목",open:!0,footerAlign:"end",footerRatio:"1-1",footerNoPadBottom:!1},render:(r,a)=>({components:{Drawer:t},setup(){return{args:Pe(a)}},template:`
      <div class="drawer_demo-frame">
        <div class="drawer_demo-content">
          <p>Controls로 open · placement · size · footerAlign · footerRatio · footerNoPadBottom을 조절하세요.</p>
        </div>
        <Drawer
          v-bind="args"
          :class="{ 'drawer_demo-static': args.open }"
        >
          <p>드로어 내용입니다.</p>
          <template #footer>
            <template v-if="args.footerAlign === 'between'">
              <div class="drawer_footer-group">
                <button type="button" class="btn btn_ghost color_danger" data-drawer-close>
                  <span class="btn_label">삭제</span>
                </button>
              </div>
              <div class="drawer_footer-group">
                <button type="button" class="btn btn_ghost" data-drawer-close>
                  <span class="btn_label">취소</span>
                </button>
                <button type="button" class="btn btn_filled color_primary" data-drawer-close>
                  <span class="btn_label">확인</span>
                </button>
              </div>
            </template>
            <template v-else>
              <button type="button" class="btn btn_ghost" data-drawer-close>
                <span class="btn_label">취소</span>
              </button>
              <button type="button" class="btn btn_filled color_primary" data-drawer-close>
                <span class="btn_label">확인</span>
              </button>
            </template>
          </template>
        </Drawer>
      </div>
    `})},B={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"data-drawer-trigger로 패널을 열고, 백드롭·닫기 버튼·Esc로 닫습니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{id:"story-drawer",size:"md",placement:"right",title:"제목"},render:n(()=>({components:{Button:o,Drawer:t},template:u(`
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
</template>`,language:"vue"}}},args:{id:"story-drawer",size:"md",placement:"right",title:"제목"},render:n(()=>({components:{Button:o,Drawer:t},template:u(`
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
    `)}))},f={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"drawer_sm · drawer_lg으로 패널 너비(또는 상·하 배치 시 높이)를 조정합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Drawer from '@uxkm/ui/components/Drawer.vue';
<\/script>

<template>
  <div class="drawer_demo-row">
    <Button variant="outline" size="sm" label="Small" data-drawer-trigger="#drawer-size-sm" aria-controls="drawer-size-sm" />
    <Button variant="outline" label="Default" data-drawer-trigger="#drawer-size-default" aria-controls="drawer-size-default" />
    <Button variant="outline" size="lg" label="Large" data-drawer-trigger="#drawer-size-lg" aria-controls="drawer-size-lg" />
  </div>
</template>`,language:"vue"}}},args:{id:"story-drawer",size:"md",placement:"right",title:"제목"},render:n(()=>({components:{Button:o,Drawer:t},template:u(`
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
    `)}))},g={name:"헤더·푸터",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"drawer_header · drawer_body · drawer_footer로 영역을 나눕니다. 푸터에 저장·취소 등 액션 버튼을 배치합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{id:"story-drawer",size:"md",placement:"right",title:"제목"},render:n(()=>({components:{Button:o,Drawer:t},template:u(`
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
    `)}))},b={name:"푸터 정렬",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"footer-align으로 푸터 버튼을 정렬합니다. start · center · end(기본) · between(좌·우 병합) · even(균등). even은 footer-ratio로 좌·우 비율(1-1 · 1-2 · 2-1)을 지정하고, footer-no-pad-bottom으로 하단 패딩을 제거할 수 있습니다. between은 drawer_footer-group으로 좌·우에 1~2개씩 묶습니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{id:"story-drawer",size:"md",placement:"bottom",title:"제목",footerAlign:"end",footerRatio:"1-1",footerNoPadBottom:!1},render:n(()=>({components:{Button:o,Drawer:t},template:`
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
    `}))},v={name:"헤더 추가 영역",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"drawer_extra에 보조 액션·메타 정보를 배치합니다. 제목과 닫기 버튼 사이에 위치합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{id:"story-drawer",size:"md",placement:"right",title:"제목"},render:n(()=>({components:{Button:o,Drawer:t,Tag:Ne},template:u(`
      <Button variant="outline" label="상세 보기" data-drawer-trigger="#drawer-extra" aria-controls="drawer-extra" />
      <Drawer id="drawer-extra" title="주문 #1042">
        <template #extra>
          <Tag variant="filled" color="success" label="완료" />
        </template>
        <p>상세 정보·상태 뱃지 등을 헤더 <code class="typo_code">drawer_extra</code>에 배치할 수 있습니다.</p>
      </Drawer>
    `)}))},_={name:"메뉴",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"Menu 컴포넌트와 조합해 모바일 내비게이션 패널을 구성합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{id:"story-drawer",size:"md",placement:"right",title:"제목"},render:n(()=>({components:{Button:o,Drawer:t,Icon:we},template:u(`
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
</template>`,language:"vue"}}},render:n(()=>({components:{Button:o,Drawer:t},template:u(`
      <p class="form_field-hint"><code class="typo_code">open-on-load</code> / <code class="typo_code">data-drawer-open-on-load="true"</code> — 가이드 페이지에서 자동 열기를 확인할 수 있습니다.</p>
      <Button variant="outline" size="sm" label="옵션 패널 미리보기" data-drawer-trigger="#drawer-open-on-load" aria-controls="drawer-open-on-load" />
      <Drawer id="drawer-open-on-load" size="sm" title="자동 열기 옵션">
        <p>실서비스에서는 온보딩·공지 등에 <code class="typo_code">open-on-load</code>를 사용합니다.</p>
      </Drawer>
    `)}))},y={name:"중첩 Drawer",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"열린 Drawer 안에서 다른 Drawer를 열 수 있습니다. 2단계가 열리면 1단계 백드롭은 숨겨지고, 2단계가 닫히면 다시 표시됩니다. Esc는 가장 위에 열린 패널부터 닫습니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:n(()=>({components:{Button:o,Drawer:t},template:u(`
      <Button variant="ghost" label="중첩 예시 열기" data-drawer-trigger="#drawer-nested-1" aria-controls="drawer-nested-1" />
      <Drawer id="drawer-nested-1" title="1단계 Drawer">
        <p>다음 단계 Drawer를 열어 중첩 동작을 확인하세요. 2단계가 열리면 이 백드롭은 잠시 숨겨집니다.</p>
        <Button variant="outline" label="2단계 열기" data-drawer-trigger="#drawer-nested-2" aria-controls="drawer-nested-2" />
      </Drawer>
      <Drawer id="drawer-nested-2" size="sm" title="2단계 Drawer">
        <p>중첩된 Drawer입니다. 닫으면 1단계 백드롭이 다시 표시됩니다. <kbd>Esc</kbd>를 누르면 이 패널부터 닫힙니다.</p>
        <template #footer>
          <Button variant="filled" color="primary" label="완료" data-drawer-close />
        </template>
      </Drawer>
    `)}))},E={name:"하단 드래그 시트",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'placement="bottom" + draggable로 핸들·헤더를 드래그합니다. 위로 끌면 펼치고, 아래로 끌면 접거나 닫습니다. 터치 슬라이드도 동일합니다.'},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{id:"story-drawer",size:"md",placement:"bottom",draggable:!0,title:"제목"},render:n(()=>({components:{Button:o,Drawer:t},template:u(`
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
    `)}))},h={name:"백드롭 없음",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"data-drawer-backdrop=&quot;false&quot;로 어두운 배경을 숨깁니다. 본문과 동시에 상호작용할 수 있습니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Drawer from '@uxkm/ui/components/Drawer.vue';
<\/script>

<template>
  <Button variant="ghost" label="백드롭 없이 열기" data-drawer-trigger="#drawer-no-backdrop" aria-controls="drawer-no-backdrop" />
  <Drawer id="drawer-no-backdrop" size="sm" title="백드롭 없음" no-backdrop>
    <p>본문을 가리지 않고 패널만 표시합니다.</p>
  </Drawer>
</template>`,language:"vue"}}},render:n(()=>({components:{Button:o,Drawer:t},template:u(`
      <Button variant="ghost" label="백드롭 없이 열기" data-drawer-trigger="#drawer-no-backdrop" aria-controls="drawer-no-backdrop" />
      <Drawer id="drawer-no-backdrop" size="sm" title="백드롭 없음" no-backdrop>
        <p>본문을 가리지 않고 패널만 표시합니다. 닫기 버튼이나 <kbd>Esc</kbd>로 닫으세요.</p>
      </Drawer>
    `)}))};var N,R,L;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
    open: true,
    footerAlign: "end",
    footerRatio: "1-1",
    footerNoPadBottom: false
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
          <p>Controls로 open · placement · size · footerAlign · footerRatio · footerNoPadBottom을 조절하세요.</p>
        </div>
        <Drawer
          v-bind="args"
          :class="{ 'drawer_demo-static': args.open }"
        >
          <p>드로어 내용입니다.</p>
          <template #footer>
            <template v-if="args.footerAlign === 'between'">
              <div class="drawer_footer-group">
                <button type="button" class="btn btn_ghost color_danger" data-drawer-close>
                  <span class="btn_label">삭제</span>
                </button>
              </div>
              <div class="drawer_footer-group">
                <button type="button" class="btn btn_ghost" data-drawer-close>
                  <span class="btn_label">취소</span>
                </button>
                <button type="button" class="btn btn_filled color_primary" data-drawer-close>
                  <span class="btn_label">확인</span>
                </button>
              </div>
            </template>
            <template v-else>
              <button type="button" class="btn btn_ghost" data-drawer-close>
                <span class="btn_label">취소</span>
              </button>
              <button type="button" class="btn btn_filled color_primary" data-drawer-close>
                <span class="btn_label">확인</span>
              </button>
            </template>
          </template>
        </Drawer>
      </div>
    \`
  })
}`,...(L=(R=w.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var O,T,I;B.parameters={...B.parameters,docs:{...(O=B.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(I=(T=B.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var $,q,V;D.parameters={...D.parameters,docs:{...($=D.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(V=(q=D.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var M,j,H;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(H=(j=f.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var J,U,G;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(G=(U=g.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var K,Q,W;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "푸터 정렬",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "footer-align으로 푸터 버튼을 정렬합니다. start · center · end(기본) · between(좌·우 병합) · even(균등). even은 footer-ratio로 좌·우 비율(1-1 · 1-2 · 2-1)을 지정하고, footer-no-pad-bottom으로 하단 패딩을 제거할 수 있습니다. between은 drawer_footer-group으로 좌·우에 1~2개씩 묶습니다."
      },
      source: {
        code: \`<script setup>
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
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    id: "story-drawer",
    size: "md",
    placement: "bottom",
    title: "제목",
    footerAlign: "end",
    footerRatio: "1-1",
    footerNoPadBottom: false
  },
  render: drawerDemo(() => ({
    components: {
      Button,
      Drawer
    },
    template: \`
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
    \`
  }))
}`,...(W=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Y,Z;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ae;_.parameters={..._.parameters,docs:{...(ee=_.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(re=_.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,oe,ne;A.parameters={...A.parameters,docs:{...(te=A.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ue,le,de;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
        story: "열린 Drawer 안에서 다른 Drawer를 열 수 있습니다. 2단계가 열리면 1단계 백드롭은 숨겨지고, 2단계가 닫히면 다시 표시됩니다. Esc는 가장 위에 열린 패널부터 닫습니다."
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
        <p>다음 단계 Drawer를 열어 중첩 동작을 확인하세요. 2단계가 열리면 이 백드롭은 잠시 숨겨집니다.</p>
        <Button variant="outline" label="2단계 열기" data-drawer-trigger="#drawer-nested-2" aria-controls="drawer-nested-2" />
      </Drawer>
      <Drawer id="drawer-nested-2" size="sm" title="2단계 Drawer">
        <p>중첩된 Drawer입니다. 닫으면 1단계 백드롭이 다시 표시됩니다. <kbd>Esc</kbd>를 누르면 이 패널부터 닫힙니다.</p>
        <template #footer>
          <Button variant="filled" color="primary" label="완료" data-drawer-close />
        </template>
      </Drawer>
    \`)
  }))
}`,...(de=(le=y.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var se,ie,ce;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var pe,me,Ce;h.parameters={...h.parameters,docs:{...(pe=h.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(Ce=(me=h.parameters)==null?void 0:me.docs)==null?void 0:Ce.source}}};const ar=["Playground","Basic","Placement","Size","Footer","FooterAlign","Extra","Menu","OpenOnLoad","Nested","DragSheet","NoBackdrop"];export{B as Basic,E as DragSheet,v as Extra,g as Footer,b as FooterAlign,_ as Menu,y as Nested,h as NoBackdrop,A as OpenOnLoad,D as Placement,w as Playground,f as Size,ar as __namedExportsOrder,rr as default};
