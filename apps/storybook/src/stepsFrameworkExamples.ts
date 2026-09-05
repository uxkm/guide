import type { FrameworkExample } from './FrameworkCode';
const names = ['basic', 'simple', 'vertical', 'dot', 'icon', 'navigable', 'error', 'align', 'size', 'state'] as const;
type Name = (typeof names)[number];
type Item = [string, string, 'finished' | 'active' | 'wait' | 'error', string?];
const sets: Record<Name, Item[]> = {
  basic: [['장바구니','상품 확인','finished'],['배송 정보','주소 입력','finished'],['결제','결제 수단 선택','active'],['완료','주문 확인','wait']],
  simple: [['이메일 인증','','finished'],['프로필 설정','','active'],['완료','','wait']],
  vertical: [['기본 정보','프로젝트 이름과 설명을 입력합니다.','finished'],['팀 구성','멤버를 초대하고 역할을 지정합니다.','active'],['저장소 연결','Git 저장소를 연동합니다.','wait'],['검토 및 생성','설정을 확인하고 프로젝트를 만듭니다.','wait']],
  dot: [['주문 접수','6월 20일 09:12','finished'],['배송 준비','6월 20일 14:30','finished'],['배송 중','예상 도착 6월 21일','active'],['배송 완료','대기 중','wait']],
  icon: [['계정 생성','이메일 인증 완료','finished','user'],['팀 초대','동료를 초대하세요','active','mail'],['첫 프로젝트','프로젝트를 만드세요','wait','grid']],
  navigable: [['환경','개발 · 스테이징','finished'],['알림','수신 채널 설정','active'],['확인','설정 검토','wait']],
  error: [['주문 확인','상품 및 수량 확인','finished'],['결제 실패','카드 승인이 거절되었습니다','error'],['완료','주문 접수','wait']],
  align: [['기획','요구사항 정의','finished'],['개발','기능 구현','finished'],['QA','품질 검증','active'],['출시','프로덕션 배포','wait']],
  size: [['1단계','','finished'],['2단계','','active'],['3단계','','wait']],
  state: [['is-finished','완료된 단계','finished'],['is-active','현재 진행 단계','active'],['is-wait','아직 도달하지 않은 단계','wait'],['is-error','오류가 발생한 단계','error']],
};
const iconSvg = (name: string) => { const path = name === 'check' ? 'm5 12 4 4L19 6' : name === 'close' ? 'm6 6 12 12M18 6 6 18' : name === 'user' ? 'M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8M4 21a8 8 0 0 1 16 0' : name === 'mail' ? 'M3 5h18v14H3zM3 7l9 6 9-6' : 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z'; return `<svg class="icon steps_icon" data-component="Icon" data-icon="${name}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${path}"></path></svg>`; };
const htmlSteps = (items: Item[], classes = '', label = '진행 단계', navigable = false) => `<ol class="steps${classes}${navigable ? ' steps_navigable' : ''}" aria-label="${label}" data-component="Steps" data-steps>${items.map(([title, desc, status, custom], index) => { const indicator = custom ? iconSvg(custom) : status === 'finished' ? iconSvg('check') : status === 'error' ? iconSvg('close') : `<span class="steps_index">${index + 1}</span>`; const head = `<span class="steps_head"><span class="steps_indicator" aria-hidden="true">${indicator}</span>${index < items.length - 1 ? '<span class="steps_tail" aria-hidden="true"></span>' : ''}</span>`; const content = `<span class="steps_content"><span class="steps_title">${title}</span>${desc ? `<span class="steps_desc">${desc}</span>` : ''}</span>`; return `<li class="steps_item is-${status}" data-step-index="${index + 1}"${status === 'active' && !navigable ? ' aria-current="step"' : ''}>${navigable ? `<button type="button" class="steps_trigger"${status === 'wait' ? ' disabled' : ''}${status === 'active' ? ' aria-current="step"' : ''}>${head}${content}</button>` : `${head}${content}`}</li>`; }).join('')}</ol>`;
const html: Record<Name,string> = {
  basic: htmlSteps(sets.basic, '', '주문 진행 단계'), simple: htmlSteps(sets.simple, '', '회원가입 단계'), vertical: htmlSteps(sets.vertical, ' steps_vertical steps_demo-narrow', '프로젝트 생성 단계'), dot: htmlSteps(sets.dot, ' steps_dot', '배송 추적 단계'), icon: htmlSteps(sets.icon, ' steps_icon-style', '온보딩 단계'), navigable: htmlSteps(sets.navigable, '', '설정 마법사 — 탐색 가능', true), error: htmlSteps(sets.error, '', '결제 단계 — 오류'), align: htmlSteps(sets.align, ' steps_align-center', '출시 단계'), size: `${htmlSteps(sets.size, ' steps_sm', 'Small 단계')}\n${htmlSteps([['요구사항','범위 및 일정 확정','finished'],['디자인','UI 키트 제작','active'],['개발','구현 및 테스트','wait']], ' steps_lg', 'Large 단계')}`, state: sets.state.map((item) => htmlSteps([item], '', `상태 예시 — ${item[0]}`)).join('\n'),
};
type GulpStepsOptions = { direction?: 'vertical'; size?: 'sm' | 'lg'; dot?: boolean; iconStyle?: boolean; navigable?: boolean; align?: 'center'; ariaLabel?: string; className?: string };
const gulpStepsImport = `{% from "components/navigation/Steps/steps.njk" import steps, step %}`;
const gulpSteps = (items: Item[], options: GulpStepsOptions = {}) => {
  const args = [options.direction && `direction='${options.direction}'`, options.size && `size='${options.size}'`, options.dot && 'dot=true', options.iconStyle && 'iconStyle=true', options.navigable && 'navigable=true', options.align && `align='${options.align}'`, options.ariaLabel && `ariaLabel='${options.ariaLabel}'`, options.className && `className='${options.className}'`].filter(Boolean).join(', ');
  const itemCode = items.map(([title, description, status, icon], index) => `  {{ step(title='${title}'${description ? `, description='${description}'` : ''}, status='${status}', index=${index + 1}${index === items.length - 1 ? ', last=true' : ''}${options.navigable ? ', navigable=true' : ''}${icon ? `, icon='${icon}'` : ''}) }}`).join('\n');
  return `${gulpStepsImport}

{% call steps(${args}) %}
${itemCode}
{% endcall %}`;
};
const gulp: Record<Name,string> = {
  basic: gulpSteps(sets.basic, { ariaLabel: '주문 진행 단계' }),
  simple: gulpSteps(sets.simple, { ariaLabel: '회원가입 단계' }),
  vertical: gulpSteps(sets.vertical, { direction: 'vertical', className: 'steps_demo-narrow', ariaLabel: '프로젝트 생성 단계' }),
  dot: gulpSteps(sets.dot, { dot: true, ariaLabel: '배송 추적 단계' }),
  icon: gulpSteps(sets.icon, { iconStyle: true, ariaLabel: '온보딩 단계' }),
  navigable: gulpSteps(sets.navigable, { navigable: true, ariaLabel: '설정 마법사 — 탐색 가능' }),
  error: gulpSteps(sets.error, { ariaLabel: '결제 단계 — 오류' }),
  align: gulpSteps(sets.align, { align: 'center', ariaLabel: '출시 단계' }),
  size: gulpSteps(sets.size, { size: 'sm', ariaLabel: 'Small 단계' }) + '\n\n' + gulpSteps([['요구사항','범위 및 일정 확정','finished'],['디자인','UI 키트 제작','active'],['개발','구현 및 테스트','wait']], { size: 'lg', ariaLabel: 'Large 단계' }),
  state: sets.state.map((item) => gulpSteps([item], { ariaLabel: `상태 예시 — ${item[0]}` })).join('\n\n'),
};
const reactItems = (items: Item[], custom = false) => items.map(([title, description, status, icon]) => `<StepsItem title="${title}"${description ? ` description="${description}"` : ''} status="${status}"${custom && icon ? ` icon={<Icon name="${icon}" className="steps_icon" />}` : ''} />`).join('');
const vueItems = (items: Item[], custom = false) => items.map(([title, description, status, icon]) => custom && icon ? `<StepsItem title="${title}"${description ? ` description="${description}"` : ''} status="${status}"><template #icon><Icon name="${icon}" class="steps_icon" /></template></StepsItem>` : `<StepsItem title="${title}"${description ? ` description="${description}"` : ''} status="${status}" />`).join('');
const attrs: Record<Name,string> = { basic:'ariaLabel="주문 진행 단계"', simple:'ariaLabel="회원가입 단계"', vertical:'direction="vertical" className="steps_demo-narrow" ariaLabel="프로젝트 생성 단계"', dot:'dot ariaLabel="배송 추적 단계"', icon:'iconStyle ariaLabel="온보딩 단계"', navigable:'current={current} navigable onChange={setCurrent} ariaLabel="설정 마법사 — 탐색 가능"', error:'ariaLabel="결제 단계 — 오류"', align:'align="center" ariaLabel="출시 단계"', size:'size="sm" ariaLabel="Small 단계"', state:'ariaLabel="상태 요약"' };
const react: Record<Name,string> = Object.fromEntries(names.map((key) => [key, `<Steps ${attrs[key]}>${reactItems(sets[key], key === 'icon')}</Steps>`])) as Record<Name,string>;
react.navigable = `<Steps current={current} navigable onChange={setCurrent} ariaLabel="설정 마법사 — 탐색 가능"><StepsItem title="환경" description="개발 · 스테이징" /><StepsItem title="알림" description="수신 채널 설정" /><StepsItem title="확인" description="설정 검토" /></Steps>`;
react.size = `<Steps size="sm" ariaLabel="Small 단계">${reactItems(sets.size)}</Steps>\n<Steps size="lg" ariaLabel="Large 단계">${reactItems([['요구사항','범위 및 일정 확정','finished'],['디자인','UI 키트 제작','active'],['개발','구현 및 테스트','wait']])}</Steps>`;
react.state = sets.state.map((item) => `<Steps ariaLabel="상태 예시 — ${item[0]}">${reactItems([item])}</Steps>`).join('\n');
const vueAttrs = (value: string) => value.replaceAll('ariaLabel=', 'aria-label=').replaceAll('className=', 'class=').replace('iconStyle', 'icon-style');
const vue: Record<Name,string> = Object.fromEntries(names.map((key) => [key, `<Steps ${vueAttrs(attrs[key].replace('current={current} navigable onChange={setCurrent}', 'v-model:current="current" navigable'))}>${vueItems(sets[key], key === 'icon')}</Steps>`])) as Record<Name,string>;
vue.navigable = `<Steps v-model:current="current" navigable aria-label="설정 마법사 — 탐색 가능"><StepsItem title="환경" description="개발 · 스테이징" /><StepsItem title="알림" description="수신 채널 설정" /><StepsItem title="확인" description="설정 검토" /></Steps>`;
vue.size = `<Steps size="sm" aria-label="Small 단계">${vueItems(sets.size)}</Steps>\n<Steps size="lg" aria-label="Large 단계">${vueItems([['요구사항','범위 및 일정 확정','finished'],['디자인','UI 키트 제작','active'],['개발','구현 및 테스트','wait']])}</Steps>`;
vue.state = sets.state.map((item) => `<Steps aria-label="상태 예시 — ${item[0]}">${vueItems([item])}</Steps>`).join('\n');
function examples(key: Name): FrameworkExample[] { const needIcon = key === 'icon'; const interactive = key === 'navigable'; const reactCode = `${interactive ? "import { useState } from 'react';\n" : ''}import { Steps, StepsItem } from '@uxkm/react/steps';${needIcon ? "\nimport Icon from '@uxkm/react/icon';" : ''}\n\nexport function Example() { ${interactive ? 'const [current, setCurrent] = useState(2); ' : ''}return <>${react[key]}</>; }`; const vueCode = `<script setup>\n${interactive ? "import { ref } from 'vue';\n" : ''}import { Steps, StepsItem } from '@uxkm/vue/steps';${needIcon ? "\nimport Icon from '@uxkm/vue/icon';" : ''}${interactive ? '\nconst current = ref(2);' : ''}\n</script>\n<template>\n${vue[key]}\n</template>`; return [{id:'html',label:'HTML',fileName:`Steps.html · ${key}`,code:html[key]},{id:'gulp',label:'Gulp',fileName:`steps.njk · ${key}`,code:gulp[key]},{id:'vue',label:'Vue',fileName:`@uxkm/vue/steps · ${key}`,code:vueCode},{id:'nuxt',label:'Nuxt',fileName:`@uxkm/vue/steps · ${key}`,code:vueCode},{id:'react',label:'React',fileName:`@uxkm/react/steps · ${key}`,code:reactCode},{id:'next',label:'Next',fileName:`@uxkm/react/steps · ${key}`,code:reactCode}]; }
export const stepsFrameworkExamples = Object.fromEntries(names.map((key) => [key, examples(key)])) as Record<Name, FrameworkExample[]>;
