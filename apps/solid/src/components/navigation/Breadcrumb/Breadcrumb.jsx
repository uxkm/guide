import { toChildArray, isSolidChild, mergeChildProps } from '../../../utils/solid-react-compat.jsx';
/**
 * Breadcrumb 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
import BreadcrumbItem from './BreadcrumbItem.jsx';

const separators = new Set(['chevron', 'slash', 'dot']); // 지원하는 구분 기호입니다.
const sizes = new Set(['sm', 'md', 'lg']); // 지원하는 경로 크기입니다.

export function Breadcrumb({
  items = [], // 선언형으로 전달할 경로 항목 배열입니다.
  ariaLabel = '경로', // 내비게이션의 접근 가능한 이름을 지정합니다.
  separator = 'chevron', // 항목 사이에 표시할 구분 기호를 선택합니다.
  size = 'md', // 경로 텍스트의 크기를 지정합니다.
  children, // BreadcrumbItem 등 자식으로 구성한 경로입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 nav에 전달합니다.
}) {
  const resolvedSeparator = separators.has(separator) ? separator : 'chevron'; // 검증된 구분 기호입니다.
  const resolvedSize = sizes.has(size) ? size : 'md'; // 검증된 크기입니다.

  // 구분 기호·크기 변형 클래스를 조합합니다.
  const classes = [
    'breadcrumb', // Breadcrumb 레이아웃을 활성화하는 필수 클래스입니다.
    resolvedSeparator !== 'chevron' && `breadcrumb_sep-${resolvedSeparator}`, // 기본 chevron이 아닐 때 구분 기호입니다.
    resolvedSize !== 'md' && `breadcrumb_${resolvedSize}`, // 기본 md가 아닐 때 크기 변형입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 class 문자열로 만듭니다.

  // items가 있으면 BreadcrumbItem으로 매핑하고, 없으면 유효한 children을 사용합니다.
  const content = items.length
    ? items.map((item, index) => (
        <BreadcrumbItem
          key={item.key ?? `${item.label}-${index}`}
          {...item}
          current={item.current ?? index === items.length - 1}
        />
      ))
    : toChildArray(children).filter(isSolidChild);

  return (
    <nav {...props} class={classes} aria-label={ariaLabel} data-component="Breadcrumb">
      <ol class="breadcrumb_list">{content}</ol>
    </nav>
  );
}

export default Breadcrumb;
