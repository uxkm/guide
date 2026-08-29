import { toChildArray, isSolidChild, mergeChildProps } from '../../../utils/solid-react-compat.jsx';
/**
 * Steps 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
import StepsItem from './StepsItem.jsx';

const directions = new Set(['horizontal', 'vertical']); // 지원하는 진행 방향입니다.
const sizes = new Set(['sm', 'md', 'lg']); // 지원하는 단계 크기입니다.

export function Steps({
  current, // 현재 활성 단계 번호(1부터)입니다.
  direction = 'horizontal', // 가로 또는 세로 배치를 선택합니다.
  size = 'md', // 단계 표시의 크기를 지정합니다.
  dot = false, // 점형 인디케이터를 사용할지 여부입니다.
  iconStyle = false, // 아이콘 강조 스타일을 사용할지 여부입니다.
  navigable = false, // 완료·활성 단계를 클릭으로 이동할지 여부입니다.
  align = '', // center면 제목을 가운데 정렬합니다.
  ariaLabel, // 단계 목록의 접근 가능한 이름을 지정합니다.
  items = [], // 선언형으로 전달할 단계 항목 배열입니다.
  children, // StepsItem 등 자식으로 구성한 단계입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onChange, // 탐색 가능한 단계에서 이동할 때 호출할 콜백입니다.
  ...props // id, aria-* 등 나머지 속성을 ol에 전달합니다.
}) {
  const resolvedDirection = directions.has(direction) ? direction : 'horizontal'; // 검증된 방향입니다.
  const resolvedSize = sizes.has(size) ? size : 'md'; // 검증된 크기입니다.

  // 방향·크기·점형·아이콘·탐색·정렬 클래스를 조합합니다.
  const classes = [
    'steps', // Steps 레이아웃을 활성화하는 필수 클래스입니다.
    resolvedDirection === 'vertical' && 'steps_vertical', // 세로 방향 변형입니다.
    resolvedSize !== 'md' && `steps_${resolvedSize}`, // 기본 md가 아닐 때 크기 변형입니다.
    dot && 'steps_dot', // 점형 인디케이터 변형입니다.
    iconStyle && 'steps_icon-style', // 아이콘 강조 변형입니다.
    navigable && 'steps_navigable', // 클릭 탐색 가능 변형입니다.
    align === 'center' && 'steps_align-center', // 가운데 정렬 변형입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 class 문자열로 만듭니다.

  // items가 있으면 StepsItem으로 매핑하고, 없으면 유효한 children을 사용합니다.
  const source = items.length
    ? items.map((item) => <StepsItem key={item.key ?? item.title} {...item} />)
    : toChildArray(children).filter(isSolidChild);

  return (
    <ol {...props} class={classes} aria-label={ariaLabel} data-component="Steps" data-steps>
      {source().map((child, index) => {
        const step = index + 1; // 1부터 시작하는 단계 번호입니다.
        // 명시 status가 없으면 current와의 비교로 finished·active·wait를 정합니다.
        const status =
          child.props.status ??
          (current == null
            ? 'wait'
            : step < current
              ? 'finished'
              : step === current
                ? 'active'
                : 'wait');
        return mergeChildProps(child, {
          index: child.props.index ?? step,
          status,
          isLast: index === source().length - 1,
          navigable,
          onClick:
            status === 'wait'
              ? undefined
              : (event) => {
                  child.props.onClick?.(event);
                  if (status !== 'active') onChange?.(step);
                },
        });
      })}
    </ol>
  );
}

export default Steps;
