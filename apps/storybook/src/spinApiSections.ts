import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';
const columns: ApiColumn[] = [{ key: 'name', label: '이름' }, { key: 'description', label: '설명' }, { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }];
const section = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });
export const spinApiSections: ApiSectionData[] = [
  section('Spin API', [{ name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: '스피너 크기입니다.' }, { name: 'tip · color', type: 'string', default: "— · 'primary'", description: '설명 문구와 의미 색상입니다.' }, { name: 'inline · block · overlay', type: 'boolean', default: 'false', description: '인라인, 전체 너비, 오버레이 배치입니다.' }, { name: 'ariaLabel', type: 'string', default: "'로딩 중'", description: '상태 접근성 이름입니다.' }]),
  section('SpinWrap API', [{ name: 'loading · block · blur', type: 'boolean', default: 'false', description: '로딩 표시, 최소 높이, 블러 효과입니다.' }, { name: 'tip · ariaLabel · children', type: 'string · ReactNode', default: '—', description: '오버레이 문구와 대상 콘텐츠입니다.' }]),
  section('HTML · Gulp', [{ name: 'spin · spin_indicator · spin_tip', type: 'class', default: '—', description: '스피너 루트, 표시기, 문구입니다.' }, { name: 'spin_wrap · spin_wrap-body · is-loading', type: 'class', default: '—', description: '컨테이너 오버레이 구조와 상태입니다.' }]),
  section('디자인 토큰', [{ name: '--spin-size · --spin-duration', type: 'length · time', default: '2rem · 0.8s', description: '표시기 크기와 회전 시간입니다.' }, { name: '--spin-overlay-bg · --spin-wrap-content-opacity', type: 'color · number', default: 'rgba(15,20,25,.72) · .45', description: '오버레이 배경과 콘텐츠 투명도입니다.' }]),
  section(
    'WebSquare API · XML',
    [
      {
        name: 'w2:group.spin',
        type: 'XML element · class',
        default: "role='status'",
        description: '스피너 루트입니다. aria-busy와 aria-live를 함께 사용합니다.',
      },
      {
        name: 'spin_indicator · spin_tip',
        type: 'class',
        default: '—',
        description: '회전 표시기와 설명 문구입니다.',
      },
      {
        name: 'w2:group.spin_wrap · spin_overlay · is-loading',
        type: 'XML element · class',
        default: '—',
        description: '콘텐츠 위 오버레이 래퍼와 로딩 상태입니다.',
      },
      {
        name: 'spin_sm · spin_lg · spin_inline · spin_block',
        type: 'class',
        default: '—',
        description: '크기와 배치 변형입니다.',
      },
    ],
    '화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.',
  ),
];
