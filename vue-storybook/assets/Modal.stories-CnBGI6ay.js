import{k as po,l as Bo,u as fo,a as bo,ab as Do,o as A,c as M,d as s,r as _,t as vo,e as k,w as go,_ as Ao,p as F,s as Mo,q as l,g as z,n as _o,j as E,h as Eo}from"./iframe-3tmFy2e1.js";import{s as yo,w as ho}from"./story-renders-ww3py-Dw.js";import{e as ko,a as Fo}from"./ripple-api-Dpyr2TOk.js";import"./preload-helper-PMqzWbAN.js";const zo=["id","data-modal-backdrop","hidden"],xo={class:"modal_dialog"},wo={key:0,class:"modal_header","data-demo-slot":"header"},Po={class:"modal_body","data-demo-slot":"default"},t=Object.assign({inheritAttrs:!1},{__name:"Modal",props:{ripple:po,id:{type:String,required:!0},size:{type:String,default:"md",validator:a=>["sm","md","lg","fullscreen"].includes(a)},scrollable:Boolean,backdrop:{type:Boolean,default:!0},title:String,open:Boolean,footerAlign:{type:String,default:"end",validator:a=>["start","center","end","between","even"].includes(a)},footerRatio:{type:String,default:"1-1",validator:a=>["1-1","1-2","2-1"].includes(a)},footerNoPadBottom:Boolean},setup(a){const e=a,{rippleAttrs:mo}=Bo(e);fo();const d=bo(),y=Eo(null),h=`${e.id}-title`;Do(e,y,d);const io=E(()=>{const o=["modal"];return e.size==="sm"&&o.push("modal_sm"),e.size==="lg"&&o.push("modal_lg"),e.size==="fullscreen"&&o.push("modal_fullscreen"),e.scrollable&&o.push("modal_scrollable"),e.open&&o.push("is-open"),d.class&&o.push(d.class),o}),Co=E(()=>{const o=["modal_footer"];return e.footerAlign&&e.footerAlign!=="end"&&o.push(`modal_footer-${e.footerAlign}`),e.footerAlign==="even"&&e.footerRatio&&e.footerRatio!=="1-1"&&o.push(`modal_footer-even-${e.footerRatio}`),e.footerNoPadBottom&&o.push("modal_footer-no-pad-b"),o}),co=E(()=>{const{class:o,...r}=d;return r});return(o,r)=>(A(),M("div",F({ref_key:"rootRef",ref:y,id:a.id,class:io.value,"data-modal":"","data-modal-backdrop":a.backdrop?void 0:"false",role:"dialog","aria-modal":"true","aria-labelledby":h,tabindex:"-1",hidden:!a.open||void 0},co.value),[r[0]||(r[0]=s("div",{class:"modal_backdrop","data-modal-close":"","aria-hidden":"true"},null,-1)),s("div",xo,[o.$slots.header||a.title?(A(),M("div",wo,[_(o.$slots,"header",{},()=>[s("h2",{class:"modal_title",id:h},vo(a.title),1)]),k(l,F({variant:"ghost","icon-only":"",class:"modal_close","data-modal-close":"","aria-label":"닫기"},Mo(mo)),{"icon-before":go(()=>[k(Ao,{name:"close",size:"sm",class:"modal_close-icon"})]),_:1},16)])):z("",!0),s("div",Po,[_(o.$slots,"default")]),o.$slots.footer?(A(),M("div",{key:1,class:_o(Co.value),"data-demo-slot":"footer"},[_(o.$slots,"footer")],2)):z("",!0)])],16,zo))}});t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{exportName:"default",displayName:"Modal",description:"",tags:{},props:[{name:"ripple",description:"클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본",type:{name:"rippleProp"}},{name:"id",type:{name:"string"},required:!0},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'md'"},values:["sm","md","lg","fullscreen"]},{name:"scrollable",type:{name:"boolean"}},{name:"backdrop",description:'백드롭 표시. false 시 data-modal-backdrop="false"',type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"title",type:{name:"string"}},{name:"open",type:{name:"boolean"}},{name:"footerAlign",description:"푸터 버튼 정렬 (modal_footer-*)",type:{name:"string"},defaultValue:{func:!1,value:"'end'"},values:["start","center","end","between","even"]},{name:"footerRatio",description:"균등 정렬(even)일 때 좌·우 비율 (modal_footer-even-*)",type:{name:"string"},defaultValue:{func:!1,value:"'1-1'"},values:["1-1","1-2","2-1"]},{name:"footerNoPadBottom",description:"푸터 하단 패딩 제거 (modal_footer-no-pad-b)",type:{name:"boolean"}}],slots:[{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/Modal.vue"]});const So=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],No=[{name:"id",type:"string",default:"—",description:"루트 id (필수, data-modal-trigger 연결)"},{name:"title",type:"string",default:"—",description:"기본 헤더 제목 (modal_title)"},{name:"size",type:"'sm' | 'md' | 'lg' | 'fullscreen'",default:"md",description:"modal_sm · modal_lg · modal_fullscreen"},{name:"scrollable",type:"boolean",default:"false",description:"본문 스크롤 (modal_scrollable)"},{name:"backdrop",type:"boolean",default:"true",description:'백드롭 표시 (false → data-modal-backdrop="false")'},{name:"open",type:"boolean",default:"false",description:"열림 상태 (is-open, hidden 해제)"},{name:"footer-align",type:"'start' | 'center' | 'end' | 'between' | 'even'",default:"end",description:"푸터 정렬 (modal_footer-start · center · between · even). between은 modal_footer-group으로 좌·우 묶음"},{name:"footer-ratio",type:"'1-1' | '1-2' | '2-1'",default:"1-1",description:"균등 정렬(even) 좌·우 비율 (modal_footer-even-1-2 · even-2-1)"},{name:"footer-no-pad-bottom",type:"boolean",default:"false",description:"푸터 하단 패딩 제거 (modal_footer-no-pad-b). even과 함께 쓰면 좌우 패딩·간격도 제거"},ko],Ro=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Lo=[{name:"header",description:"헤더 (title 대체)"},{name:"default",description:"본문 (modal_body)"},{name:"footer",description:"하단 액션 (modal_footer)"}],$o=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Vo=[{name:"modal · modal_backdrop · modal_dialog",description:"루트·백드롭·대화상자"},{name:"modal_header · modal_title · modal_close · modal_body · modal_footer",description:"구조 파트"},{name:"modal_footer-start · modal_footer-center · modal_footer-end · modal_footer-between · modal_footer-even",description:"푸터 정렬 (기본 end)"},{name:"modal_footer-even-1-2 · modal_footer-even-2-1",description:"균등 정렬 좌·우 비율 (기본 1:1)"},{name:"modal_footer-no-pad-b",description:"푸터 하단 패딩 없음 (even 조합 시 좌우 패딩·간격 제거)"},{name:"modal_footer-group",description:"병합 정렬용 좌·우 버튼 묶음"},{name:"modal_sm · modal_lg · modal_fullscreen · modal_scrollable",description:"크기·스크롤"},{name:"data-modal · data-modal-trigger · data-modal-close",description:"JS 연동 속성"},{name:"is-open · is-stack-covered · hidden",description:"열림·중첩 하위(백드롭 숨김)·닫힘 상태"},{name:'role="dialog" · aria-modal="true"',description:"접근성 시맨틱"},...Fo],Oo=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Io=[{name:"--modal-z-index",default:"300",description:"레이어 순서"},{name:"--modal-width · --modal-width-sm · --modal-width-lg",default:"32rem · 24rem · 48rem",description:"대화상자 너비"},{name:"--modal-bg · --modal-radius · --modal-shadow",default:"—",description:"배경·모서리·그림자"}],To=[{title:"API · Props",tables:[{columns:So,rows:No,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:Ro,rows:Lo,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:$o,rows:Vo,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Oo,rows:Io,codeColumn:"name"}]}];function u(a){return ho(a,a)}function n(a){return`
    <div class="modal_demo-frame">
      <div class="modal_demo-content">
        ${a}
      </div>
    </div>
  `}const Uo={title:"Components/피드백/Modal",id:"components-modal",component:t,tags:["autodocs"],argTypes:{id:{control:"text",type:{name:"string",summary:"string"}},size:{control:"select",options:["sm","md","lg","fullscreen"],type:{name:"enum",summary:"'sm' | 'md' | 'lg' | 'fullscreen'"}},scrollable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},backdrop:{control:"boolean",type:{name:"boolean",summary:"boolean"}},title:{control:"text",type:{name:"string",summary:"string"}},open:{control:"boolean",type:{name:"boolean",summary:"boolean"}},footerAlign:{control:"select",options:["start","center","end","between","even"],type:{name:"enum",summary:"'start' | 'center' | 'end' | 'between' | 'even'"}},footerRatio:{control:"select",options:["1-1","1-2","2-1"],type:{name:"enum",summary:"'1-1' | '1-2' | '2-1'"}},footerNoPadBottom:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:To}},m={parameters:{controls:{disable:!1}},args:{id:"story-modal",size:"md",scrollable:!1,backdrop:!0,title:"제목",open:!0,footerAlign:"end",footerRatio:"1-1",footerNoPadBottom:!1},render:(a,e)=>({components:{Modal:t},setup(){return{args:yo(e)}},template:`
      <div class="modal_demo-frame">
        <div class="modal_demo-content">
          <p>Controls로 open · size · scrollable · backdrop · footerAlign · footerRatio · footerNoPadBottom을 조절하세요.</p>
        </div>
        <Modal
          v-bind="args"
          :class="{ 'modal_demo-static': args.open }"
        >
          <p>모달 본문입니다.</p>
          <template #footer>
            <template v-if="args.footerAlign === 'between'">
              <div class="modal_footer-group">
                <button type="button" class="btn btn_ghost color_danger" data-modal-close>
                  <span class="btn_label">삭제</span>
                </button>
              </div>
              <div class="modal_footer-group">
                <button type="button" class="btn btn_ghost" data-modal-close>
                  <span class="btn_label">취소</span>
                </button>
                <button type="button" class="btn btn_filled color_primary" data-modal-close>
                  <span class="btn_label">확인</span>
                </button>
              </div>
            </template>
            <template v-else>
              <button type="button" class="btn btn_ghost" data-modal-close>
                <span class="btn_label">취소</span>
              </button>
              <button type="button" class="btn btn_filled color_primary" data-modal-close>
                <span class="btn_label">확인</span>
              </button>
            </template>
          </template>
        </Modal>
      </div>
    `})},i={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"data-modal-trigger로 대화상자를 열고, 백드롭·닫기 버튼·Esc로 닫습니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <Button variant="filled" color="primary" label="모달 열기" data-modal-trigger="#modal-basic" aria-controls="modal-basic" />
  <Modal id="modal-basic" title="알림">
    <p>Modal 대화상자 본문입니다.</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>
</template>`,language:"vue"}}},args:{id:"story-modal",size:"md",title:"제목"},render:u(()=>({components:{Button:l,Modal:t},template:n(`
      <Button variant="filled" color="primary" label="모달 열기" data-modal-trigger="#modal-basic" aria-controls="modal-basic" />
      <Modal id="modal-basic" title="알림">
        <p>Modal 대화상자 본문입니다. 백드롭을 클릭하거나 닫기 버튼, <kbd>Esc</kbd> 키로 닫을 수 있습니다.</p>
        <template #footer>
          <Button variant="ghost" label="취소" data-modal-close />
          <Button variant="filled" color="primary" label="확인" data-modal-close />
        </template>
      </Modal>
    `)}))},C={name:"열린 상태",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"open prop으로 is-open 클래스를 추가하고 hidden을 해제합니다. 문서·스토리 미리보기에서는 modal_demo-frame 안에서 열린 모습을 확인합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <Modal id="modal-open" title="알림" open>
    <p>열린 상태의 Modal입니다.</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>
</template>`,language:"vue"}}},args:{id:"story-modal",size:"md",title:"제목",open:!0},render:u(()=>({components:{Button:l,Modal:t},template:n(`
      <div class="modal_demo-content">
        <p>open prop으로 대화상자가 열린 상태를 미리 보여 줍니다.</p>
      </div>
      <Modal id="modal-open" title="알림" open class="modal_demo-static">
        <p>열린 상태의 Modal입니다. 백드롭·헤더·푸터 구성을 한눈에 확인할 수 있습니다.</p>
        <template #footer>
          <Button variant="ghost" label="취소" data-modal-close />
          <Button variant="filled" color="primary" label="확인" data-modal-close />
        </template>
      </Modal>
    `)}))},c={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"modal_sm · modal_lg · modal_fullscreen으로 대화상자 너비를 조정합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <div class="modal_demo-row">
    <Button variant="outline" size="sm" label="Small" data-modal-trigger="#modal-size-sm" aria-controls="modal-size-sm" />
    <Button variant="outline" label="Default" data-modal-trigger="#modal-size-default" aria-controls="modal-size-default" />
    <Button variant="outline" size="lg" label="Large" data-modal-trigger="#modal-size-lg" aria-controls="modal-size-lg" />
    <Button variant="outline" label="Fullscreen" data-modal-trigger="#modal-size-fullscreen" aria-controls="modal-size-fullscreen" />
  </div>
  <Modal id="modal-size-sm" size="sm" title="Small">
    <p>좁은 너비</p>
  </Modal>
  <Modal id="modal-size-default" title="Default">
    <p>기본 너비 32rem</p>
  </Modal>
  <Modal id="modal-size-lg" size="lg" title="Large">
    <p>넓은 너비</p>
  </Modal>
  <Modal id="modal-size-fullscreen" size="fullscreen" title="Fullscreen">
    <p>뷰포트 전체</p>
  </Modal>
</template>`,language:"vue"}}},args:{id:"story-modal",size:"md",title:"제목"},render:u(()=>({components:{Button:l,Modal:t},template:n(`
      <div class="modal_demo-row">
        <Button variant="outline" size="sm" label="Small" data-modal-trigger="#modal-size-sm" aria-controls="modal-size-sm" />
        <Button variant="outline" label="Default" data-modal-trigger="#modal-size-default" aria-controls="modal-size-default" />
        <Button variant="outline" size="lg" label="Large" data-modal-trigger="#modal-size-lg" aria-controls="modal-size-lg" />
        <Button variant="outline" label="Fullscreen" data-modal-trigger="#modal-size-fullscreen" aria-controls="modal-size-fullscreen" />
      </div>
      <Modal id="modal-size-sm" size="sm" title="Small">
        <p><code class="typo_code">modal_sm</code> — 확인·간단한 알림에 적합한 좁은 너비입니다.</p>
      </Modal>
      <Modal id="modal-size-default" title="Default">
        <p>기본 너비 32rem</p>
      </Modal>
      <Modal id="modal-size-lg" size="lg" title="Large">
        <p><code class="typo_code">modal_lg</code> — 상세 보기·넓은 폼·테이블 미리보기 등에 사용합니다.</p>
      </Modal>
      <Modal id="modal-size-fullscreen" size="fullscreen" title="Fullscreen">
        <p><code class="typo_code">modal_fullscreen</code> — 뷰포트 전체를 사용하는 대화상자입니다.</p>
        <template #footer>
          <Button variant="ghost" label="닫기" data-modal-close />
        </template>
      </Modal>
    `)}))},p={name:"헤더·푸터",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"modal_header · modal_body · modal_footer로 영역을 나눕니다. 푸터에 액션 버튼을 배치합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <Button variant="filled" color="primary" label="새 항목 추가" data-modal-trigger="#modal-footer" aria-controls="modal-footer" />
  <Modal id="modal-footer" title="새 항목 추가">
    <p>폼 본문</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="저장" data-modal-close />
    </template>
  </Modal>
</template>`,language:"vue"}}},args:{id:"story-modal",size:"md",title:"제목"},render:u(()=>({components:{Button:l,Modal:t},template:n(`
      <Button variant="filled" color="primary" label="새 항목 추가" data-modal-trigger="#modal-footer" aria-controls="modal-footer" />
      <Modal id="modal-footer" title="새 항목 추가">
        <div class="form_field">
          <label class="form_field-label" for="modal-item-name">이름</label>
          <input class="input" type="text" id="modal-item-name" placeholder="항목 이름" />
        </div>
        <div class="form_field">
          <label class="form_field-label" for="modal-item-desc">설명</label>
          <textarea class="textarea" id="modal-item-desc" rows="3" placeholder="간단한 설명"></textarea>
        </div>
        <template #footer>
          <Button variant="ghost" label="취소" data-modal-close />
          <Button variant="filled" color="primary" label="저장" data-modal-close />
        </template>
      </Modal>
    `)}))},B={name:"푸터 정렬",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"footer-align으로 푸터 버튼을 정렬합니다. start · center · end(기본) · between(좌·우 병합) · even(균등). even은 footer-ratio로 좌·우 비율(1-1 · 1-2 · 2-1)을 지정하고, footer-no-pad-bottom으로 하단 패딩을 제거할 수 있습니다. between은 modal_footer-group으로 좌·우에 1~2개씩 묶습니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <!-- 좌측 -->
  <Modal id="modal-footer-start" title="좌측 정렬" footer-align="start" open>
    <p>footer-align="start"</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>

  <!-- 가운데 -->
  <Modal id="modal-footer-center" title="가운데 정렬" footer-align="center" open>
    <p>footer-align="center"</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>

  <!-- 우측 (기본) -->
  <Modal id="modal-footer-end" title="우측 정렬" open>
    <p>footer-align="end" (기본)</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>

  <!-- 병합: 좌 1 / 우 2 -->
  <Modal id="modal-footer-between" title="병합 정렬" footer-align="between" open>
    <p>footer-align="between" + modal_footer-group</p>
    <template #footer>
      <div class="modal_footer-group">
        <Button variant="ghost" color="danger" label="삭제" data-modal-close />
      </div>
      <div class="modal_footer-group">
        <Button variant="ghost" label="취소" data-modal-close />
        <Button variant="filled" color="primary" label="확인" data-modal-close />
      </div>
    </template>
  </Modal>

  <!-- 균등 1:1 -->
  <Modal id="modal-footer-even" title="균등 1:1" footer-align="even" open>
    <p>footer-align="even" · footer-ratio="1-1"</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>

  <!-- 균등 1:2 -->
  <Modal id="modal-footer-even-1-2" title="균등 1:2" footer-align="even" footer-ratio="1-2" open>
    <p>footer-ratio="1-2" — 좌 1 / 우 2</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>

  <!-- 균등 2:1 -->
  <Modal id="modal-footer-even-2-1" title="균등 2:1" footer-align="even" footer-ratio="2-1" open>
    <p>footer-ratio="2-1" — 좌 2 / 우 1</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>

  <!-- 하단 패딩 없음 + 균등 -->
  <Modal id="modal-footer-no-pad" title="하단 패딩 없음" footer-align="even" footer-no-pad-bottom open>
    <p>footer-no-pad-bottom + even</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>
</template>`,language:"vue"}}},args:{id:"story-modal",size:"md",title:"제목",footerAlign:"end",footerRatio:"1-1",footerNoPadBottom:!1},render:u(()=>({components:{Button:l,Modal:t},template:`
      <div class="modal_demo-stack">
        <div class="modal_demo-frame modal_demo-frame-compact">
          <Modal id="modal-footer-start" title="좌측 정렬" footer-align="start" open class="modal_demo-static">
            <p><code class="typo_code">footer-align="start"</code></p>
            <template #footer>
              <Button variant="ghost" label="취소" data-modal-close />
              <Button variant="filled" color="primary" label="확인" data-modal-close />
            </template>
          </Modal>
        </div>
        <div class="modal_demo-frame modal_demo-frame-compact">
          <Modal id="modal-footer-center" title="가운데 정렬" footer-align="center" open class="modal_demo-static">
            <p><code class="typo_code">footer-align="center"</code></p>
            <template #footer>
              <Button variant="ghost" label="취소" data-modal-close />
              <Button variant="filled" color="primary" label="확인" data-modal-close />
            </template>
          </Modal>
        </div>
        <div class="modal_demo-frame modal_demo-frame-compact">
          <Modal id="modal-footer-end" title="우측 정렬" open class="modal_demo-static">
            <p><code class="typo_code">footer-align="end"</code> (기본)</p>
            <template #footer>
              <Button variant="ghost" label="취소" data-modal-close />
              <Button variant="filled" color="primary" label="확인" data-modal-close />
            </template>
          </Modal>
        </div>
        <div class="modal_demo-frame modal_demo-frame-compact">
          <Modal id="modal-footer-between" title="병합 정렬" footer-align="between" open class="modal_demo-static">
            <p><code class="typo_code">between</code> — 좌 1 / 우 2</p>
            <template #footer>
              <div class="modal_footer-group">
                <Button variant="ghost" color="danger" label="삭제" data-modal-close />
              </div>
              <div class="modal_footer-group">
                <Button variant="ghost" label="취소" data-modal-close />
                <Button variant="filled" color="primary" label="확인" data-modal-close />
              </div>
            </template>
          </Modal>
        </div>
        <div class="modal_demo-frame modal_demo-frame-compact">
          <Modal id="modal-footer-between-2" title="병합 정렬" footer-align="between" open class="modal_demo-static">
            <p><code class="typo_code">between</code> — 좌 2 / 우 1</p>
            <template #footer>
              <div class="modal_footer-group">
                <Button variant="ghost" label="도움말" data-modal-close />
                <Button variant="ghost" color="danger" label="삭제" data-modal-close />
              </div>
              <div class="modal_footer-group">
                <Button variant="filled" color="primary" label="확인" data-modal-close />
              </div>
            </template>
          </Modal>
        </div>
        <div class="modal_demo-frame modal_demo-frame-compact">
          <Modal id="modal-footer-even" title="균등 1:1" footer-align="even" open class="modal_demo-static">
            <p><code class="typo_code">even</code> · <code class="typo_code">footer-ratio="1-1"</code></p>
            <template #footer>
              <Button variant="ghost" label="취소" data-modal-close />
              <Button variant="filled" color="primary" label="확인" data-modal-close />
            </template>
          </Modal>
        </div>
        <div class="modal_demo-frame modal_demo-frame-compact">
          <Modal id="modal-footer-even-1-2" title="균등 1:2" footer-align="even" footer-ratio="1-2" open class="modal_demo-static">
            <p><code class="typo_code">footer-ratio="1-2"</code> — 좌 1 / 우 2</p>
            <template #footer>
              <Button variant="ghost" label="취소" data-modal-close />
              <Button variant="filled" color="primary" label="확인" data-modal-close />
            </template>
          </Modal>
        </div>
        <div class="modal_demo-frame modal_demo-frame-compact">
          <Modal id="modal-footer-even-2-1" title="균등 2:1" footer-align="even" footer-ratio="2-1" open class="modal_demo-static">
            <p><code class="typo_code">footer-ratio="2-1"</code> — 좌 2 / 우 1</p>
            <template #footer>
              <Button variant="ghost" label="취소" data-modal-close />
              <Button variant="filled" color="primary" label="확인" data-modal-close />
            </template>
          </Modal>
        </div>
        <div class="modal_demo-frame modal_demo-frame-compact">
          <Modal id="modal-footer-no-pad" title="하단 패딩 없음" footer-align="even" footer-no-pad-bottom open class="modal_demo-static">
            <p><code class="typo_code">footer-no-pad-bottom</code> + even</p>
            <template #footer>
              <Button variant="ghost" label="취소" data-modal-close />
              <Button variant="filled" color="primary" label="확인" data-modal-close />
            </template>
          </Modal>
        </div>
      </div>
    `}))},f={name:"확인 대화상자",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"삭제·취소 등 되돌릴 수 없는 작업 전에 사용자 확인을 받습니다. modal_sm으로 좁은 레이아웃을 사용합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <Button variant="filled" color="danger" label="삭제" data-modal-trigger="#modal-confirm" aria-controls="modal-confirm" />
  <Modal id="modal-confirm" size="sm" title="항목 삭제">
    <p>이 작업은 되돌릴 수 없습니다. 정말 삭제하시겠습니까?</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="danger" label="삭제" data-modal-close />
    </template>
  </Modal>
</template>`,language:"vue"}}},args:{id:"story-modal",size:"sm",title:"제목"},render:u(()=>({components:{Button:l,Modal:t},template:n(`
      <Button variant="filled" color="danger" label="삭제" data-modal-trigger="#modal-confirm" aria-controls="modal-confirm" />
      <Modal id="modal-confirm" size="sm" title="항목 삭제" aria-describedby="modal-confirm-desc">
        <p id="modal-confirm-desc">이 작업은 되돌릴 수 없습니다. 정말 삭제하시겠습니까?</p>
        <template #footer>
          <Button variant="ghost" label="취소" data-modal-close />
          <Button variant="filled" color="danger" label="삭제" data-modal-close />
        </template>
      </Modal>
    `)}))},b={name:"폼",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"입력 필드가 포함된 대화상자입니다. Form Layout · Input 컴포넌트와 조합합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <Button variant="outline" label="프로필 편집" data-modal-trigger="#modal-form" aria-controls="modal-form" />
  <Modal id="modal-form" title="프로필 편집">
    <p>폼 본문</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="저장" data-modal-close />
    </template>
  </Modal>
</template>`,language:"vue"}}},args:{id:"story-modal",size:"md",title:"제목"},render:u(()=>({components:{Button:l,Modal:t},template:n(`
      <Button variant="outline" label="프로필 편집" data-modal-trigger="#modal-form" aria-controls="modal-form" />
      <Modal id="modal-form" title="프로필 편집">
        <div class="form_layout form_layout-vertical">
          <div class="form_field">
            <label class="form_field-label" for="modal-profile-name">이름</label>
            <input class="input" type="text" id="modal-profile-name" value="홍길동" />
          </div>
          <div class="form_field">
            <label class="form_field-label" for="modal-profile-email">이메일</label>
            <input class="input" type="email" id="modal-profile-email" value="hong@example.com" />
          </div>
          <div class="form_field">
            <label class="form_field-label" for="modal-profile-bio">소개</label>
            <textarea class="textarea" id="modal-profile-bio" rows="3" placeholder="자기소개를 입력하세요"></textarea>
          </div>
        </div>
        <template #footer>
          <Button variant="ghost" label="취소" data-modal-close />
          <Button variant="filled" color="primary" label="저장" data-modal-close />
        </template>
      </Modal>
    `)}))},D={name:"스크롤 본문",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"modal_scrollable을 루트에 추가하면 본문이 길 때 modal_body 안에서 스크롤됩니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <Button variant="ghost" label="이용 약관 보기" data-modal-trigger="#modal-scroll" aria-controls="modal-scroll" />
  <Modal id="modal-scroll" scrollable title="이용 약관">
    <p>긴 본문…</p>
    <template #footer>
      <Button variant="ghost" label="거부" data-modal-close />
      <Button variant="filled" color="primary" label="동의" data-modal-close />
    </template>
  </Modal>
</template>`,language:"vue"}}},args:{id:"story-modal",size:"md",scrollable:!0,title:"제목"},render:u(()=>({components:{Button:l,Modal:t},template:n(`
      <Button variant="ghost" label="이용 약관 보기" data-modal-trigger="#modal-scroll" aria-controls="modal-scroll" />
      <Modal id="modal-scroll" scrollable title="이용 약관">
        <p>제1조 (목적) 본 약관은 서비스 이용과 관련하여 회사와 이용자 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.</p>
        <p>제2조 (정의) 본 약관에서 사용하는 용어의 정의는 다음과 같습니다. ① "서비스"란 회사가 제공하는 모든 온라인 서비스를 의미합니다. ② "이용자"란 본 약관에 따라 서비스를 이용하는 회원 및 비회원을 말합니다.</p>
        <p>제3조 (약관의 효력) 본 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다.</p>
        <p>제4조 (서비스의 제공) 회사는 다음과 같은 서비스를 제공합니다. 정보 제공, 커뮤니티, 기타 회사가 정하는 서비스.</p>
        <p>제5조 (서비스의 중단) 회사는 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절 등의 사유가 발생한 경우 서비스의 제공을 일시적으로 중단할 수 있습니다.</p>
        <p>제6조 (회원가입) 이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 본 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.</p>
        <p>제7조 (회원 탈퇴 및 자격 상실) 회원은 회사에 언제든지 탈퇴를 요청할 수 있으며 회사는 즉시 회원탈퇴를 처리합니다.</p>
        <p>제8조 (개인정보보호) 회사는 관련 법령이 정하는 바에 따라 이용자의 개인정보를 보호하기 위해 노력합니다.</p>
        <p>제9조 (회사의 의무) 회사는 법령과 본 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며, 지속적이고 안정적으로 서비스를 제공하기 위해 노력합니다.</p>
        <p>제10조 (이용자의 의무) 이용자는 관계 법령, 본 약관의 규정, 이용안내 및 서비스와 관련하여 공지한 주의사항을 준수하여야 합니다.</p>
        <template #footer>
          <Button variant="ghost" label="거부" data-modal-close />
          <Button variant="filled" color="primary" label="동의" data-modal-close />
        </template>
      </Modal>
    `)}))},v={name:"중첩 Modal",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"열린 Modal 안에서 다른 Modal을 열 수 있습니다. 2단계가 열리면 1단계 백드롭은 숨겨지고, 2단계가 닫히면 다시 표시됩니다. Esc는 가장 위에 열린 대화상자부터 닫습니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <Button variant="ghost" label="중첩 예시 열기" data-modal-trigger="#modal-nested-1" aria-controls="modal-nested-1" />
  <Modal id="modal-nested-1" title="1단계 Modal">
    <p>다음 단계 Modal을 열어 중첩 동작을 확인하세요.</p>
    <template #footer>
      <Button variant="ghost" label="닫기" data-modal-close />
      <Button variant="outline" label="2단계 열기" data-modal-trigger="#modal-nested-2" aria-controls="modal-nested-2" />
    </template>
  </Modal>
  <Modal id="modal-nested-2" size="sm" title="2단계 Modal">
    <p>중첩된 Modal입니다.</p>
    <template #footer>
      <Button variant="filled" color="primary" label="완료" data-modal-close />
    </template>
  </Modal>
</template>`,language:"vue"}}},args:{id:"story-modal",size:"md",title:"제목"},render:u(()=>({components:{Button:l,Modal:t},template:n(`
      <Button variant="ghost" label="중첩 예시 열기" data-modal-trigger="#modal-nested-1" aria-controls="modal-nested-1" />
      <Modal id="modal-nested-1" title="1단계 Modal">
        <p>다음 단계 Modal을 열어 중첩 동작을 확인하세요. 2단계가 열리면 이 백드롭은 잠시 숨겨집니다.</p>
        <template #footer>
          <Button variant="ghost" label="닫기" data-modal-close />
          <Button variant="outline" label="2단계 열기" data-modal-trigger="#modal-nested-2" aria-controls="modal-nested-2" />
        </template>
      </Modal>
      <Modal id="modal-nested-2" size="sm" title="2단계 Modal">
        <p>중첩된 Modal입니다. 닫으면 1단계 백드롭이 다시 표시됩니다. <kbd>Esc</kbd>를 누르면 이 대화상자부터 닫힙니다.</p>
        <template #footer>
          <Button variant="filled" color="primary" label="완료" data-modal-close />
        </template>
      </Modal>
    `)}))},g={name:"백드롭 없음",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:':backdrop="false"로 어두운 배경을 숨깁니다. 본문과 동시에 상호작용할 수 있습니다.'},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <Button variant="ghost" label="백드롭 없이 열기" data-modal-trigger="#modal-no-backdrop" aria-controls="modal-no-backdrop" />
  <Modal id="modal-no-backdrop" size="sm" title="백드롭 없음" :backdrop="false">
    <p>본문을 가리지 않고 대화상자만 표시합니다.</p>
  </Modal>
</template>`,language:"vue"}}},args:{id:"story-modal",size:"sm",backdrop:!1,title:"제목"},render:u(()=>({components:{Button:l,Modal:t},template:n(`
      <Button variant="ghost" label="백드롭 없이 열기" data-modal-trigger="#modal-no-backdrop" aria-controls="modal-no-backdrop" />
      <Modal id="modal-no-backdrop" size="sm" title="백드롭 없음" :backdrop="false">
        <p>본문을 가리지 않고 대화상자만 표시합니다. 닫기 버튼이나 <kbd>Esc</kbd>로 닫으세요.</p>
      </Modal>
    `)}))};var x,w,P;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    id: "story-modal",
    size: "md",
    scrollable: false,
    backdrop: true,
    title: "제목",
    open: true,
    footerAlign: "end",
    footerRatio: "1-1",
    footerNoPadBottom: false
  },
  render: (_args, context) => ({
    components: {
      Modal
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: \`
      <div class="modal_demo-frame">
        <div class="modal_demo-content">
          <p>Controls로 open · size · scrollable · backdrop · footerAlign · footerRatio · footerNoPadBottom을 조절하세요.</p>
        </div>
        <Modal
          v-bind="args"
          :class="{ 'modal_demo-static': args.open }"
        >
          <p>모달 본문입니다.</p>
          <template #footer>
            <template v-if="args.footerAlign === 'between'">
              <div class="modal_footer-group">
                <button type="button" class="btn btn_ghost color_danger" data-modal-close>
                  <span class="btn_label">삭제</span>
                </button>
              </div>
              <div class="modal_footer-group">
                <button type="button" class="btn btn_ghost" data-modal-close>
                  <span class="btn_label">취소</span>
                </button>
                <button type="button" class="btn btn_filled color_primary" data-modal-close>
                  <span class="btn_label">확인</span>
                </button>
              </div>
            </template>
            <template v-else>
              <button type="button" class="btn btn_ghost" data-modal-close>
                <span class="btn_label">취소</span>
              </button>
              <button type="button" class="btn btn_filled color_primary" data-modal-close>
                <span class="btn_label">확인</span>
              </button>
            </template>
          </template>
        </Modal>
      </div>
    \`
  })
}`,...(P=(w=m.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var S,N,R;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
        story: "data-modal-trigger로 대화상자를 열고, 백드롭·닫기 버튼·Esc로 닫습니다."
      },
      source: {
        code: \`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <Button variant="filled" color="primary" label="모달 열기" data-modal-trigger="#modal-basic" aria-controls="modal-basic" />
  <Modal id="modal-basic" title="알림">
    <p>Modal 대화상자 본문입니다.</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    id: "story-modal",
    size: "md",
    title: "제목"
  },
  render: modalDemo(() => ({
    components: {
      Button,
      Modal
    },
    template: frameDemo(\`
      <Button variant="filled" color="primary" label="모달 열기" data-modal-trigger="#modal-basic" aria-controls="modal-basic" />
      <Modal id="modal-basic" title="알림">
        <p>Modal 대화상자 본문입니다. 백드롭을 클릭하거나 닫기 버튼, <kbd>Esc</kbd> 키로 닫을 수 있습니다.</p>
        <template #footer>
          <Button variant="ghost" label="취소" data-modal-close />
          <Button variant="filled" color="primary" label="확인" data-modal-close />
        </template>
      </Modal>
    \`)
  }))
}`,...(R=(N=i.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var L,$,V;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "열린 상태",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "open prop으로 is-open 클래스를 추가하고 hidden을 해제합니다. 문서·스토리 미리보기에서는 modal_demo-frame 안에서 열린 모습을 확인합니다."
      },
      source: {
        code: \`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <Modal id="modal-open" title="알림" open>
    <p>열린 상태의 Modal입니다.</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    id: "story-modal",
    size: "md",
    title: "제목",
    open: true
  },
  render: modalDemo(() => ({
    components: {
      Button,
      Modal
    },
    template: frameDemo(\`
      <div class="modal_demo-content">
        <p>open prop으로 대화상자가 열린 상태를 미리 보여 줍니다.</p>
      </div>
      <Modal id="modal-open" title="알림" open class="modal_demo-static">
        <p>열린 상태의 Modal입니다. 백드롭·헤더·푸터 구성을 한눈에 확인할 수 있습니다.</p>
        <template #footer>
          <Button variant="ghost" label="취소" data-modal-close />
          <Button variant="filled" color="primary" label="확인" data-modal-close />
        </template>
      </Modal>
    \`)
  }))
}`,...(V=($=C.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var O,I,T;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
        story: "modal_sm · modal_lg · modal_fullscreen으로 대화상자 너비를 조정합니다."
      },
      source: {
        code: \`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <div class="modal_demo-row">
    <Button variant="outline" size="sm" label="Small" data-modal-trigger="#modal-size-sm" aria-controls="modal-size-sm" />
    <Button variant="outline" label="Default" data-modal-trigger="#modal-size-default" aria-controls="modal-size-default" />
    <Button variant="outline" size="lg" label="Large" data-modal-trigger="#modal-size-lg" aria-controls="modal-size-lg" />
    <Button variant="outline" label="Fullscreen" data-modal-trigger="#modal-size-fullscreen" aria-controls="modal-size-fullscreen" />
  </div>
  <Modal id="modal-size-sm" size="sm" title="Small">
    <p>좁은 너비</p>
  </Modal>
  <Modal id="modal-size-default" title="Default">
    <p>기본 너비 32rem</p>
  </Modal>
  <Modal id="modal-size-lg" size="lg" title="Large">
    <p>넓은 너비</p>
  </Modal>
  <Modal id="modal-size-fullscreen" size="fullscreen" title="Fullscreen">
    <p>뷰포트 전체</p>
  </Modal>
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    id: "story-modal",
    size: "md",
    title: "제목"
  },
  render: modalDemo(() => ({
    components: {
      Button,
      Modal
    },
    template: frameDemo(\`
      <div class="modal_demo-row">
        <Button variant="outline" size="sm" label="Small" data-modal-trigger="#modal-size-sm" aria-controls="modal-size-sm" />
        <Button variant="outline" label="Default" data-modal-trigger="#modal-size-default" aria-controls="modal-size-default" />
        <Button variant="outline" size="lg" label="Large" data-modal-trigger="#modal-size-lg" aria-controls="modal-size-lg" />
        <Button variant="outline" label="Fullscreen" data-modal-trigger="#modal-size-fullscreen" aria-controls="modal-size-fullscreen" />
      </div>
      <Modal id="modal-size-sm" size="sm" title="Small">
        <p><code class="typo_code">modal_sm</code> — 확인·간단한 알림에 적합한 좁은 너비입니다.</p>
      </Modal>
      <Modal id="modal-size-default" title="Default">
        <p>기본 너비 32rem</p>
      </Modal>
      <Modal id="modal-size-lg" size="lg" title="Large">
        <p><code class="typo_code">modal_lg</code> — 상세 보기·넓은 폼·테이블 미리보기 등에 사용합니다.</p>
      </Modal>
      <Modal id="modal-size-fullscreen" size="fullscreen" title="Fullscreen">
        <p><code class="typo_code">modal_fullscreen</code> — 뷰포트 전체를 사용하는 대화상자입니다.</p>
        <template #footer>
          <Button variant="ghost" label="닫기" data-modal-close />
        </template>
      </Modal>
    \`)
  }))
}`,...(T=(I=c.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var j,q,H;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
        story: "modal_header · modal_body · modal_footer로 영역을 나눕니다. 푸터에 액션 버튼을 배치합니다."
      },
      source: {
        code: \`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <Button variant="filled" color="primary" label="새 항목 추가" data-modal-trigger="#modal-footer" aria-controls="modal-footer" />
  <Modal id="modal-footer" title="새 항목 추가">
    <p>폼 본문</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="저장" data-modal-close />
    </template>
  </Modal>
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    id: "story-modal",
    size: "md",
    title: "제목"
  },
  render: modalDemo(() => ({
    components: {
      Button,
      Modal
    },
    template: frameDemo(\`
      <Button variant="filled" color="primary" label="새 항목 추가" data-modal-trigger="#modal-footer" aria-controls="modal-footer" />
      <Modal id="modal-footer" title="새 항목 추가">
        <div class="form_field">
          <label class="form_field-label" for="modal-item-name">이름</label>
          <input class="input" type="text" id="modal-item-name" placeholder="항목 이름" />
        </div>
        <div class="form_field">
          <label class="form_field-label" for="modal-item-desc">설명</label>
          <textarea class="textarea" id="modal-item-desc" rows="3" placeholder="간단한 설명"></textarea>
        </div>
        <template #footer>
          <Button variant="ghost" label="취소" data-modal-close />
          <Button variant="filled" color="primary" label="저장" data-modal-close />
        </template>
      </Modal>
    \`)
  }))
}`,...(H=(q=p.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var J,U,G;B.parameters={...B.parameters,docs:{...(J=B.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
        story: "footer-align으로 푸터 버튼을 정렬합니다. start · center · end(기본) · between(좌·우 병합) · even(균등). even은 footer-ratio로 좌·우 비율(1-1 · 1-2 · 2-1)을 지정하고, footer-no-pad-bottom으로 하단 패딩을 제거할 수 있습니다. between은 modal_footer-group으로 좌·우에 1~2개씩 묶습니다."
      },
      source: {
        code: \`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <!-- 좌측 -->
  <Modal id="modal-footer-start" title="좌측 정렬" footer-align="start" open>
    <p>footer-align="start"</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>

  <!-- 가운데 -->
  <Modal id="modal-footer-center" title="가운데 정렬" footer-align="center" open>
    <p>footer-align="center"</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>

  <!-- 우측 (기본) -->
  <Modal id="modal-footer-end" title="우측 정렬" open>
    <p>footer-align="end" (기본)</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>

  <!-- 병합: 좌 1 / 우 2 -->
  <Modal id="modal-footer-between" title="병합 정렬" footer-align="between" open>
    <p>footer-align="between" + modal_footer-group</p>
    <template #footer>
      <div class="modal_footer-group">
        <Button variant="ghost" color="danger" label="삭제" data-modal-close />
      </div>
      <div class="modal_footer-group">
        <Button variant="ghost" label="취소" data-modal-close />
        <Button variant="filled" color="primary" label="확인" data-modal-close />
      </div>
    </template>
  </Modal>

  <!-- 균등 1:1 -->
  <Modal id="modal-footer-even" title="균등 1:1" footer-align="even" open>
    <p>footer-align="even" · footer-ratio="1-1"</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>

  <!-- 균등 1:2 -->
  <Modal id="modal-footer-even-1-2" title="균등 1:2" footer-align="even" footer-ratio="1-2" open>
    <p>footer-ratio="1-2" — 좌 1 / 우 2</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>

  <!-- 균등 2:1 -->
  <Modal id="modal-footer-even-2-1" title="균등 2:1" footer-align="even" footer-ratio="2-1" open>
    <p>footer-ratio="2-1" — 좌 2 / 우 1</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>

  <!-- 하단 패딩 없음 + 균등 -->
  <Modal id="modal-footer-no-pad" title="하단 패딩 없음" footer-align="even" footer-no-pad-bottom open>
    <p>footer-no-pad-bottom + even</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    id: "story-modal",
    size: "md",
    title: "제목",
    footerAlign: "end",
    footerRatio: "1-1",
    footerNoPadBottom: false
  },
  render: modalDemo(() => ({
    components: {
      Button,
      Modal
    },
    template: \`
      <div class="modal_demo-stack">
        <div class="modal_demo-frame modal_demo-frame-compact">
          <Modal id="modal-footer-start" title="좌측 정렬" footer-align="start" open class="modal_demo-static">
            <p><code class="typo_code">footer-align="start"</code></p>
            <template #footer>
              <Button variant="ghost" label="취소" data-modal-close />
              <Button variant="filled" color="primary" label="확인" data-modal-close />
            </template>
          </Modal>
        </div>
        <div class="modal_demo-frame modal_demo-frame-compact">
          <Modal id="modal-footer-center" title="가운데 정렬" footer-align="center" open class="modal_demo-static">
            <p><code class="typo_code">footer-align="center"</code></p>
            <template #footer>
              <Button variant="ghost" label="취소" data-modal-close />
              <Button variant="filled" color="primary" label="확인" data-modal-close />
            </template>
          </Modal>
        </div>
        <div class="modal_demo-frame modal_demo-frame-compact">
          <Modal id="modal-footer-end" title="우측 정렬" open class="modal_demo-static">
            <p><code class="typo_code">footer-align="end"</code> (기본)</p>
            <template #footer>
              <Button variant="ghost" label="취소" data-modal-close />
              <Button variant="filled" color="primary" label="확인" data-modal-close />
            </template>
          </Modal>
        </div>
        <div class="modal_demo-frame modal_demo-frame-compact">
          <Modal id="modal-footer-between" title="병합 정렬" footer-align="between" open class="modal_demo-static">
            <p><code class="typo_code">between</code> — 좌 1 / 우 2</p>
            <template #footer>
              <div class="modal_footer-group">
                <Button variant="ghost" color="danger" label="삭제" data-modal-close />
              </div>
              <div class="modal_footer-group">
                <Button variant="ghost" label="취소" data-modal-close />
                <Button variant="filled" color="primary" label="확인" data-modal-close />
              </div>
            </template>
          </Modal>
        </div>
        <div class="modal_demo-frame modal_demo-frame-compact">
          <Modal id="modal-footer-between-2" title="병합 정렬" footer-align="between" open class="modal_demo-static">
            <p><code class="typo_code">between</code> — 좌 2 / 우 1</p>
            <template #footer>
              <div class="modal_footer-group">
                <Button variant="ghost" label="도움말" data-modal-close />
                <Button variant="ghost" color="danger" label="삭제" data-modal-close />
              </div>
              <div class="modal_footer-group">
                <Button variant="filled" color="primary" label="확인" data-modal-close />
              </div>
            </template>
          </Modal>
        </div>
        <div class="modal_demo-frame modal_demo-frame-compact">
          <Modal id="modal-footer-even" title="균등 1:1" footer-align="even" open class="modal_demo-static">
            <p><code class="typo_code">even</code> · <code class="typo_code">footer-ratio="1-1"</code></p>
            <template #footer>
              <Button variant="ghost" label="취소" data-modal-close />
              <Button variant="filled" color="primary" label="확인" data-modal-close />
            </template>
          </Modal>
        </div>
        <div class="modal_demo-frame modal_demo-frame-compact">
          <Modal id="modal-footer-even-1-2" title="균등 1:2" footer-align="even" footer-ratio="1-2" open class="modal_demo-static">
            <p><code class="typo_code">footer-ratio="1-2"</code> — 좌 1 / 우 2</p>
            <template #footer>
              <Button variant="ghost" label="취소" data-modal-close />
              <Button variant="filled" color="primary" label="확인" data-modal-close />
            </template>
          </Modal>
        </div>
        <div class="modal_demo-frame modal_demo-frame-compact">
          <Modal id="modal-footer-even-2-1" title="균등 2:1" footer-align="even" footer-ratio="2-1" open class="modal_demo-static">
            <p><code class="typo_code">footer-ratio="2-1"</code> — 좌 2 / 우 1</p>
            <template #footer>
              <Button variant="ghost" label="취소" data-modal-close />
              <Button variant="filled" color="primary" label="확인" data-modal-close />
            </template>
          </Modal>
        </div>
        <div class="modal_demo-frame modal_demo-frame-compact">
          <Modal id="modal-footer-no-pad" title="하단 패딩 없음" footer-align="even" footer-no-pad-bottom open class="modal_demo-static">
            <p><code class="typo_code">footer-no-pad-bottom</code> + even</p>
            <template #footer>
              <Button variant="ghost" label="취소" data-modal-close />
              <Button variant="filled" color="primary" label="확인" data-modal-close />
            </template>
          </Modal>
        </div>
      </div>
    \`
  }))
}`,...(G=(U=B.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var K,Q,W;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "확인 대화상자",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "삭제·취소 등 되돌릴 수 없는 작업 전에 사용자 확인을 받습니다. modal_sm으로 좁은 레이아웃을 사용합니다."
      },
      source: {
        code: \`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <Button variant="filled" color="danger" label="삭제" data-modal-trigger="#modal-confirm" aria-controls="modal-confirm" />
  <Modal id="modal-confirm" size="sm" title="항목 삭제">
    <p>이 작업은 되돌릴 수 없습니다. 정말 삭제하시겠습니까?</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="danger" label="삭제" data-modal-close />
    </template>
  </Modal>
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    id: "story-modal",
    size: "sm",
    title: "제목"
  },
  render: modalDemo(() => ({
    components: {
      Button,
      Modal
    },
    template: frameDemo(\`
      <Button variant="filled" color="danger" label="삭제" data-modal-trigger="#modal-confirm" aria-controls="modal-confirm" />
      <Modal id="modal-confirm" size="sm" title="항목 삭제" aria-describedby="modal-confirm-desc">
        <p id="modal-confirm-desc">이 작업은 되돌릴 수 없습니다. 정말 삭제하시겠습니까?</p>
        <template #footer>
          <Button variant="ghost" label="취소" data-modal-close />
          <Button variant="filled" color="danger" label="삭제" data-modal-close />
        </template>
      </Modal>
    \`)
  }))
}`,...(W=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "폼",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "입력 필드가 포함된 대화상자입니다. Form Layout · Input 컴포넌트와 조합합니다."
      },
      source: {
        code: \`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <Button variant="outline" label="프로필 편집" data-modal-trigger="#modal-form" aria-controls="modal-form" />
  <Modal id="modal-form" title="프로필 편집">
    <p>폼 본문</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="저장" data-modal-close />
    </template>
  </Modal>
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    id: "story-modal",
    size: "md",
    title: "제목"
  },
  render: modalDemo(() => ({
    components: {
      Button,
      Modal
    },
    template: frameDemo(\`
      <Button variant="outline" label="프로필 편집" data-modal-trigger="#modal-form" aria-controls="modal-form" />
      <Modal id="modal-form" title="프로필 편집">
        <div class="form_layout form_layout-vertical">
          <div class="form_field">
            <label class="form_field-label" for="modal-profile-name">이름</label>
            <input class="input" type="text" id="modal-profile-name" value="홍길동" />
          </div>
          <div class="form_field">
            <label class="form_field-label" for="modal-profile-email">이메일</label>
            <input class="input" type="email" id="modal-profile-email" value="hong@example.com" />
          </div>
          <div class="form_field">
            <label class="form_field-label" for="modal-profile-bio">소개</label>
            <textarea class="textarea" id="modal-profile-bio" rows="3" placeholder="자기소개를 입력하세요"></textarea>
          </div>
        </div>
        <template #footer>
          <Button variant="ghost" label="취소" data-modal-close />
          <Button variant="filled" color="primary" label="저장" data-modal-close />
        </template>
      </Modal>
    \`)
  }))
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var oo,ao,eo;D.parameters={...D.parameters,docs:{...(oo=D.parameters)==null?void 0:oo.docs,source:{originalSource:`{
  name: "스크롤 본문",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "modal_scrollable을 루트에 추가하면 본문이 길 때 modal_body 안에서 스크롤됩니다."
      },
      source: {
        code: \`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <Button variant="ghost" label="이용 약관 보기" data-modal-trigger="#modal-scroll" aria-controls="modal-scroll" />
  <Modal id="modal-scroll" scrollable title="이용 약관">
    <p>긴 본문…</p>
    <template #footer>
      <Button variant="ghost" label="거부" data-modal-close />
      <Button variant="filled" color="primary" label="동의" data-modal-close />
    </template>
  </Modal>
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    id: "story-modal",
    size: "md",
    scrollable: true,
    title: "제목"
  },
  render: modalDemo(() => ({
    components: {
      Button,
      Modal
    },
    template: frameDemo(\`
      <Button variant="ghost" label="이용 약관 보기" data-modal-trigger="#modal-scroll" aria-controls="modal-scroll" />
      <Modal id="modal-scroll" scrollable title="이용 약관">
        <p>제1조 (목적) 본 약관은 서비스 이용과 관련하여 회사와 이용자 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.</p>
        <p>제2조 (정의) 본 약관에서 사용하는 용어의 정의는 다음과 같습니다. ① "서비스"란 회사가 제공하는 모든 온라인 서비스를 의미합니다. ② "이용자"란 본 약관에 따라 서비스를 이용하는 회원 및 비회원을 말합니다.</p>
        <p>제3조 (약관의 효력) 본 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다.</p>
        <p>제4조 (서비스의 제공) 회사는 다음과 같은 서비스를 제공합니다. 정보 제공, 커뮤니티, 기타 회사가 정하는 서비스.</p>
        <p>제5조 (서비스의 중단) 회사는 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절 등의 사유가 발생한 경우 서비스의 제공을 일시적으로 중단할 수 있습니다.</p>
        <p>제6조 (회원가입) 이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 본 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.</p>
        <p>제7조 (회원 탈퇴 및 자격 상실) 회원은 회사에 언제든지 탈퇴를 요청할 수 있으며 회사는 즉시 회원탈퇴를 처리합니다.</p>
        <p>제8조 (개인정보보호) 회사는 관련 법령이 정하는 바에 따라 이용자의 개인정보를 보호하기 위해 노력합니다.</p>
        <p>제9조 (회사의 의무) 회사는 법령과 본 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며, 지속적이고 안정적으로 서비스를 제공하기 위해 노력합니다.</p>
        <p>제10조 (이용자의 의무) 이용자는 관계 법령, 본 약관의 규정, 이용안내 및 서비스와 관련하여 공지한 주의사항을 준수하여야 합니다.</p>
        <template #footer>
          <Button variant="ghost" label="거부" data-modal-close />
          <Button variant="filled" color="primary" label="동의" data-modal-close />
        </template>
      </Modal>
    \`)
  }))
}`,...(eo=(ao=D.parameters)==null?void 0:ao.docs)==null?void 0:eo.source}}};var to,lo,uo;v.parameters={...v.parameters,docs:{...(to=v.parameters)==null?void 0:to.docs,source:{originalSource:`{
  name: "중첩 Modal",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "열린 Modal 안에서 다른 Modal을 열 수 있습니다. 2단계가 열리면 1단계 백드롭은 숨겨지고, 2단계가 닫히면 다시 표시됩니다. Esc는 가장 위에 열린 대화상자부터 닫습니다."
      },
      source: {
        code: \`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <Button variant="ghost" label="중첩 예시 열기" data-modal-trigger="#modal-nested-1" aria-controls="modal-nested-1" />
  <Modal id="modal-nested-1" title="1단계 Modal">
    <p>다음 단계 Modal을 열어 중첩 동작을 확인하세요.</p>
    <template #footer>
      <Button variant="ghost" label="닫기" data-modal-close />
      <Button variant="outline" label="2단계 열기" data-modal-trigger="#modal-nested-2" aria-controls="modal-nested-2" />
    </template>
  </Modal>
  <Modal id="modal-nested-2" size="sm" title="2단계 Modal">
    <p>중첩된 Modal입니다.</p>
    <template #footer>
      <Button variant="filled" color="primary" label="완료" data-modal-close />
    </template>
  </Modal>
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    id: "story-modal",
    size: "md",
    title: "제목"
  },
  render: modalDemo(() => ({
    components: {
      Button,
      Modal
    },
    template: frameDemo(\`
      <Button variant="ghost" label="중첩 예시 열기" data-modal-trigger="#modal-nested-1" aria-controls="modal-nested-1" />
      <Modal id="modal-nested-1" title="1단계 Modal">
        <p>다음 단계 Modal을 열어 중첩 동작을 확인하세요. 2단계가 열리면 이 백드롭은 잠시 숨겨집니다.</p>
        <template #footer>
          <Button variant="ghost" label="닫기" data-modal-close />
          <Button variant="outline" label="2단계 열기" data-modal-trigger="#modal-nested-2" aria-controls="modal-nested-2" />
        </template>
      </Modal>
      <Modal id="modal-nested-2" size="sm" title="2단계 Modal">
        <p>중첩된 Modal입니다. 닫으면 1단계 백드롭이 다시 표시됩니다. <kbd>Esc</kbd>를 누르면 이 대화상자부터 닫힙니다.</p>
        <template #footer>
          <Button variant="filled" color="primary" label="완료" data-modal-close />
        </template>
      </Modal>
    \`)
  }))
}`,...(uo=(lo=v.parameters)==null?void 0:lo.docs)==null?void 0:uo.source}}};var no,ro,so;g.parameters={...g.parameters,docs:{...(no=g.parameters)==null?void 0:no.docs,source:{originalSource:`{
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
        story: ":backdrop=\\"false\\"로 어두운 배경을 숨깁니다. 본문과 동시에 상호작용할 수 있습니다."
      },
      source: {
        code: \`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <Button variant="ghost" label="백드롭 없이 열기" data-modal-trigger="#modal-no-backdrop" aria-controls="modal-no-backdrop" />
  <Modal id="modal-no-backdrop" size="sm" title="백드롭 없음" :backdrop="false">
    <p>본문을 가리지 않고 대화상자만 표시합니다.</p>
  </Modal>
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    id: "story-modal",
    size: "sm",
    backdrop: false,
    title: "제목"
  },
  render: modalDemo(() => ({
    components: {
      Button,
      Modal
    },
    template: frameDemo(\`
      <Button variant="ghost" label="백드롭 없이 열기" data-modal-trigger="#modal-no-backdrop" aria-controls="modal-no-backdrop" />
      <Modal id="modal-no-backdrop" size="sm" title="백드롭 없음" :backdrop="false">
        <p>본문을 가리지 않고 대화상자만 표시합니다. 닫기 버튼이나 <kbd>Esc</kbd>로 닫으세요.</p>
      </Modal>
    \`)
  }))
}`,...(so=(ro=g.parameters)==null?void 0:ro.docs)==null?void 0:so.source}}};const Go=["Playground","Basic","Open","Size","Footer","FooterAlign","Confirm","Form","Scroll","Nested","NoBackdrop"];export{i as Basic,f as Confirm,p as Footer,B as FooterAlign,b as Form,v as Nested,g as NoBackdrop,C as Open,m as Playground,D as Scroll,c as Size,Go as __namedExportsOrder,Uo as default};
