import type { FrameworkExample } from './FrameworkCode';

type Code = { html: string; react: string; vue: string };

function makeStatExamples(key: string, code: Code): FrameworkExample[] {
  const needsIcon = code.react.includes('Icon') || code.vue.includes('Icon');
  const react = `import Stat from '@uxkm/react/stat';${needsIcon ? "\nimport Icon from '@uxkm/react/icon';" : ''}

export function Example() {
  return (
${code.react}
  );
}`;
  const vue = `<script setup>
import Stat from '@uxkm/vue/stat';${needsIcon ? "\nimport Icon from '@uxkm/vue/icon';" : ''}
</script>

<template>
${code.vue}
</template>`;

  // Gulp: stat macro 호출 변환
  const gulp = toGulp(code.html, key);

  return [
    { id: 'html', label: 'HTML', fileName: `apps/html/src/components/data-display/Stat/Stat.html · ${key}`, code: code.html },
    { id: 'gulp', label: 'Gulp', fileName: `apps/gulp/src/components/data-display/Stat/stat.njk · ${key}`, code: gulp },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/stat · ${key}`, code: vue },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/stat · ${key}`, code: vue },
    { id: 'react', label: 'React', fileName: `@uxkm/react/stat · ${key}`, code: react },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/stat · ${key}`, code: react }
  ];
}

/**
 * HTML → Gulp stat macro 변환.
 * 단일 <div class="stat ..."> 블록을 {{ stat(...) }} 호출로 변환합니다.
 * 그룹 래퍼(stat_group)는 그대로 유지합니다.
 */
function toGulp(html: string, _key: string): string {
  const statOpenTag = /<div class="stat([^"]*)"[^>]*data-component="Stat"[^>]*>/g;
  const divTag = /<\/?div\b[^>]*>/g;
  const replacements: Array<{ start: number; end: number; value: string }> = [];
  let statMatch: RegExpExecArray | null;

  // stat 내부에 value-row, header, body 같은 div가 있어도 실제 stat 종료 태그까지 찾습니다.
  while ((statMatch = statOpenTag.exec(html)) !== null) {
    const start = statMatch.index;
    const innerStart = statOpenTag.lastIndex;
    let depth = 1;
    let end = -1;

    divTag.lastIndex = innerStart;
    let divMatch: RegExpExecArray | null;
    while ((divMatch = divTag.exec(html)) !== null) {
      depth += divMatch[0].startsWith('</div') ? -1 : 1;
      if (depth === 0) {
        end = divTag.lastIndex;
        break;
      }
    }

    if (end === -1) continue;

    const classExtra = statMatch[1];
    const inner = html.slice(innerStart, end - divMatch![0].length);
    const args: string[] = [];

    // 클래스에서 속성 추출
    const classStr = `stat${classExtra}`;
    if (classStr.includes('stat_sm')) args.push("size='sm'");
    if (classStr.includes('stat_lg')) args.push("size='lg'");
    if (classStr.includes('stat_card')) args.push('card=true');
    if (classStr.includes('stat_shadow')) args.push('shadow=true');

    // 추가 클래스 (stat_, color_ 기본은 제외)
    const extra = classStr
      .replace(/\bstat\b/g, '')
      .replace(/\bstat_(sm|md|lg|card|shadow)\b/g, '')
      .trim();
    if (extra) args.push(`className='${extra}'`);

    // label
    const labelMatch = inner.match(/<span class="stat_label">([^<]*)<\/span>/);
    if (labelMatch) args.push(`title='${labelMatch[1]}'`);

    // prefix
    const prefixMatch = inner.match(/<span class="stat_prefix">([^<]*)<\/span>/);
    if (prefixMatch) args.push(`prefix='${prefixMatch[1]}'`);

    // value
    const valueMatch = inner.match(/<span class="stat_value">([^<]*)<\/span>/);
    if (valueMatch) args.push(`value='${valueMatch[1]}'`);

    // suffix
    const suffixMatch = inner.match(/<span class="stat_suffix">([^<]*)<\/span>/);
    if (suffixMatch) args.push(`suffix='${suffixMatch[1]}'`);

    // description with color
    const descMatch = inner.match(/<span class="stat_desc(?:\s+color_(\w+))?">([^<]*)<\/span>/);
    if (descMatch) {
      args.push(`description='${descMatch[2]}'`);
      if (descMatch[1]) args.push(`trendColor='${descMatch[1]}'`);
    }

    // trend
    const trendMatch = inner.match(/<span class="stat_trend(?:\s+color_(\w+))?">[^]*?<\/svg>([^<]*)<\/span>/);
    if (trendMatch) {
      args.push(`trend='${trendMatch[2].trim()}'`);
      if (trendMatch[1]) args.push(`trendColor='${trendMatch[1]}'`);
    }

    replacements.push({ start, end, value: `{{ stat(${args.join(', ')}) }}` });
    statOpenTag.lastIndex = end;
  }

  let result = html;
  for (const replacement of replacements.reverse()) {
    result = result.slice(0, replacement.start) + replacement.value + result.slice(replacement.end);
  }

  return `{% from "components/data-display/Stat/stat.njk" import stat %}\n\n${result.trim()}`;
}

const iconSvg = (path: string) => `<svg class="icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="${path}"></path></svg>`;

export const statFrameworkExamples = {
  basic: makeStatExamples('basic', {
    html: `<div class="stat" data-component="Stat">
  <span class="stat_label">총 사용자</span>
  <span class="stat_value">12,480</span>
  <span class="stat_desc">지난 30일 기준</span>
</div>`,
    react: `    <Stat title="총 사용자" value="12,480" description="지난 30일 기준" />`,
    vue: `  <Stat title="총 사용자" value="12,480" description="지난 30일 기준" />`
  }),
  prefixSuffix: makeStatExamples('prefixSuffix', {
    html: `<div class="stat_group stat_group-3">
  <div class="stat" data-component="Stat">
    <span class="stat_label">총 매출</span>
    <div class="stat_value-row">
      <span class="stat_prefix">₩</span>
      <span class="stat_value">4,280,000</span>
    </div>
    <span class="stat_desc color_success">+8.2%</span>
  </div>
  <div class="stat" data-component="Stat">
    <span class="stat_label">전환율</span>
    <div class="stat_value-row">
      <span class="stat_value">3.6</span>
      <span class="stat_suffix">%</span>
    </div>
    <span class="stat_desc color_danger">-0.4%p</span>
  </div>
  <div class="stat" data-component="Stat">
    <span class="stat_label">평균 응답 시간</span>
    <div class="stat_value-row">
      <span class="stat_value">128</span>
      <span class="stat_suffix">ms</span>
    </div>
  </div>
</div>`,
    react: `    <div className="stat_group stat_group-3">
      <Stat title="총 매출" prefix="₩" value="4,280,000" description="+8.2%" trendColor="success" />
      <Stat title="전환율" value="3.6" suffix="%" description="-0.4%p" trendColor="danger" />
      <Stat title="평균 응답 시간" value="128" suffix="ms" />
    </div>`,
    vue: `  <div class="stat_group stat_group-3">
    <Stat title="총 매출" prefix="₩" value="4,280,000" description="+8.2%" trend-color="success" />
    <Stat title="전환율" value="3.6" suffix="%" description="-0.4%p" trend-color="danger" />
    <Stat title="평균 응답 시간" value="128" suffix="ms" />
  </div>`
  }),
  trend: makeStatExamples('trend', {
    html: `<div class="stat_group stat_group-2">
  <div class="stat" data-component="Stat">
    <div class="stat_header">
      <span class="stat_label">신규 가입</span>
      <span class="stat_trend color_success">${iconSvg('m6 15 6-6 6 6')}+15.3%</span>
    </div>
    <span class="stat_value">1,234</span>
  </div>
  <div class="stat" data-component="Stat">
    <div class="stat_header">
      <span class="stat_label">이탈률</span>
      <span class="stat_trend color_danger">${iconSvg('M12 3 2.5 20h19L12 3ZM12 9v4m0 3h.01')}+0.3%p</span>
    </div>
    <span class="stat_value">2.4%</span>
  </div>
</div>`,
    react: `    <div className="stat_group stat_group-2">
      <Stat title="신규 가입" value="1,234" trend="+15.3%" trendColor="success" />
      <Stat title="이탈률" value="2.4%" trend="+0.3%p" trendColor="danger" trendIcon={<Icon name="warning" />} />
    </div>`,
    vue: `  <div class="stat_group stat_group-2">
    <Stat title="신규 가입" value="1,234" trend="+15.3%" trend-color="success" />
    <Stat title="이탈률" value="2.4%" trend="+0.3%p" trend-color="danger"><template #trend-icon><Icon name="warning" /></template></Stat>
  </div>`
  }),
  sizes: makeStatExamples('sizes', {
    html: `<div class="stat_group stat_group-3">
  <div class="stat stat_sm stat_card" data-component="Stat">
    <span class="stat_label">Small</span>
    <span class="stat_value">1,024</span>
  </div>
  <div class="stat stat_card" data-component="Stat">
    <span class="stat_label">Medium</span>
    <span class="stat_value">8,192</span>
  </div>
  <div class="stat stat_lg stat_card" data-component="Stat">
    <span class="stat_label">Large</span>
    <span class="stat_value">64K</span>
  </div>
</div>`,
    react: `    <div className="stat_group stat_group-3">
      <Stat size="sm" card title="Small" value="1,024" />
      <Stat card title="Medium" value="8,192" />
      <Stat size="lg" card title="Large" value="64K" />
    </div>`,
    vue: `  <div class="stat_group stat_group-3">
    <Stat size="sm" card title="Small" value="1,024" />
    <Stat card title="Medium" value="8,192" />
    <Stat size="lg" card title="Large" value="64K" />
  </div>`
  }),
  layouts: makeStatExamples('layouts', {
    html: `<div class="stat stat_horizontal stat_card" data-component="Stat">
  <span class="stat_label">활성 세션</span>
  <span class="stat_value">342</span>
</div>
<div class="stat stat_inline stat_card" data-component="Stat">
  <span class="stat_label">CPU 사용률</span>
  <div class="stat_value-row">
    <span class="stat_value">68</span>
    <span class="stat_suffix">%</span>
  </div>
</div>
<div class="stat stat_row stat_card stat_shadow" data-component="Stat">
  <span class="stat_icon-wrap color_primary">${iconSvg('M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21a8 8 0 0 1 16 0')}</span>
  <div class="stat_body">
    <span class="stat_label">신규 사용자</span>
    <span class="stat_value">1,284</span>
  </div>
</div>`,
    react: `    <>
      <Stat className="stat_horizontal" card title="활성 세션" value="342" />
      <Stat className="stat_inline" card title="CPU 사용률" value="68" suffix="%" />
      <Stat className="stat_row" card shadow><span className="stat_icon-wrap color_primary"><Icon name="user" /></span><div className="stat_body"><span className="stat_label">신규 사용자</span><span className="stat_value">1,284</span></div></Stat>
    </>`,
    vue: `  <Stat class="stat_horizontal" card title="활성 세션" value="342" />
  <Stat class="stat_inline" card title="CPU 사용률" value="68" suffix="%" />
  <Stat class="stat_row" card shadow><span class="stat_icon-wrap color_primary"><Icon name="user" /></span><div class="stat_body"><span class="stat_label">신규 사용자</span><span class="stat_value">1,284</span></div></Stat>`
  }),
  icon: makeStatExamples('icon', {
    html: `<div class="stat_group stat_group-2">
  <div class="stat stat_card" data-component="Stat">
    <span class="stat_icon">${iconSvg('m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z')}</span>
    <span class="stat_label">즐겨찾기</span>
    <span class="stat_value">128</span>
  </div>
  <div class="stat stat_row stat_card" data-component="Stat">
    <span class="stat_icon-wrap color_success">${iconSvg('m5 12 4 4L19 6')}</span>
    <div class="stat_body">
      <span class="stat_label">완료</span>
      <span class="stat_value">84</span>
    </div>
  </div>
</div>`,
    react: `    <div className="stat_group stat_group-2">
      <Stat card><span className="stat_icon"><Icon name="star" /></span><span className="stat_label">즐겨찾기</span><span className="stat_value">128</span></Stat>
      <Stat className="stat_row" card><span className="stat_icon-wrap color_success"><Icon name="check" /></span><div className="stat_body"><span className="stat_label">완료</span><span className="stat_value">84</span></div></Stat>
    </div>`,
    vue: `  <div class="stat_group stat_group-2">
    <Stat card><span class="stat_icon"><Icon name="star" /></span><span class="stat_label">즐겨찾기</span><span class="stat_value">128</span></Stat>
    <Stat class="stat_row" card><span class="stat_icon-wrap color_success"><Icon name="check" /></span><div class="stat_body"><span class="stat_label">완료</span><span class="stat_value">84</span></div></Stat>
  </div>`
  }),
  skins: makeStatExamples('skins', {
    html: `<div class="stat_group stat_group-4">
  <div class="stat stat_card" data-component="Stat">
    <span class="stat_label">기본 카드</span>
    <span class="stat_value">1,200</span>
  </div>
  <div class="stat stat_card stat_shadow" data-component="Stat">
    <span class="stat_label">Shadow</span>
    <span class="stat_value">980</span>
  </div>
  <div class="stat stat_card stat_borderless" data-component="Stat">
    <span class="stat_label">Borderless</span>
    <span class="stat_value">456</span>
  </div>
  <div class="stat stat_card stat_accent color_primary" data-component="Stat">
    <span class="stat_label">Accent</span>
    <span class="stat_value">789</span>
    <span class="stat_desc">강조 지표</span>
  </div>
</div>`,
    react: `    <div className="stat_group stat_group-4">
      <Stat card title="기본 카드" value="1,200" />
      <Stat card shadow title="Shadow" value="980" />
      <Stat card className="stat_borderless" title="Borderless" value="456" />
      <Stat card className="stat_accent color_primary" title="Accent" value="789" description="강조 지표" />
    </div>`,
    vue: `  <div class="stat_group stat_group-4">
    <Stat card title="기본 카드" value="1,200" />
    <Stat card shadow title="Shadow" value="980" />
    <Stat card class="stat_borderless" title="Borderless" value="456" />
    <Stat card class="stat_accent color_primary" title="Accent" value="789" description="강조 지표" />
  </div>`
  }),
  group: makeStatExamples('group', {
    html: `<div class="stat_group stat_group-4">
  <div class="stat stat_card stat_shadow" data-component="Stat">
    <span class="stat_label">총 매출</span>
    <div class="stat_value-row">
      <span class="stat_prefix">₩</span>
      <span class="stat_value">4.2M</span>
    </div>
    <span class="stat_desc color_success">+8.2%</span>
  </div>
  <div class="stat stat_card stat_shadow" data-component="Stat">
    <span class="stat_label">신규 가입</span>
    <span class="stat_value">1,234</span>
    <span class="stat_desc color_success">+15.3%</span>
  </div>
  <div class="stat stat_card stat_shadow" data-component="Stat">
    <span class="stat_label">이탈률</span>
    <div class="stat_value-row">
      <span class="stat_value">2.4</span>
      <span class="stat_suffix">%</span>
    </div>
    <span class="stat_desc color_danger">+0.3%p</span>
  </div>
  <div class="stat stat_card stat_shadow" data-component="Stat">
    <span class="stat_label">활성 사용자</span>
    <span class="stat_value">8,901</span>
    <span class="stat_desc color_muted">변동 없음</span>
  </div>
</div>
<div class="stat_group stat_group-4 stat_group-divider">
  <div class="stat" data-component="Stat">
    <span class="stat_label">방문</span>
    <span class="stat_value">24.5K</span>
  </div>
  <div class="stat" data-component="Stat">
    <span class="stat_label">페이지뷰</span>
    <span class="stat_value">89.2K</span>
  </div>
  <div class="stat" data-component="Stat">
    <span class="stat_label">전환</span>
    <span class="stat_value">1,842</span>
  </div>
  <div class="stat" data-component="Stat">
    <span class="stat_label">매출</span>
    <span class="stat_value">₩12M</span>
  </div>
</div>`,
    react: `    <>
      <div className="stat_group stat_group-4">
        <Stat card shadow title="총 매출" prefix="₩" value="4.2M" description="+8.2%" trendColor="success" />
        <Stat card shadow title="신규 가입" value="1,234" description="+15.3%" trendColor="success" />
        <Stat card shadow title="이탈률" value="2.4" suffix="%" description="+0.3%p" trendColor="danger" />
        <Stat card shadow title="활성 사용자" value="8,901" description="변동 없음" trendColor="muted" />
      </div>
      <div className="stat_group stat_group-4 stat_group-divider">
        <Stat title="방문" value="24.5K" /><Stat title="페이지뷰" value="89.2K" /><Stat title="전환" value="1,842" /><Stat title="매출" value="₩12M" />
      </div>
    </>`,
    vue: `  <div class="stat_group stat_group-4">
    <Stat card shadow title="총 매출" prefix="₩" value="4.2M" description="+8.2%" trend-color="success" />
    <Stat card shadow title="신규 가입" value="1,234" description="+15.3%" trend-color="success" />
    <Stat card shadow title="이탈률" value="2.4" suffix="%" description="+0.3%p" trend-color="danger" />
    <Stat card shadow title="활성 사용자" value="8,901" description="변동 없음" trend-color="muted" />
  </div>
  <div class="stat_group stat_group-4 stat_group-divider">
    <Stat title="방문" value="24.5K" /><Stat title="페이지뷰" value="89.2K" /><Stat title="전환" value="1,842" /><Stat title="매출" value="₩12M" />
  </div>`
  })
};
