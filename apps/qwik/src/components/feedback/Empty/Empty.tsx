import { component$ } from '@builder.io/qwik';
/**
 * Empty 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import Icon from '../../basic/Icon/Icon.tsx';

const sizes = new Set(['sm', 'md', 'lg']); // 지원하는 빈 상태 크기입니다.

// 기본 빈 상태 아이콘입니다.
export const EmptyImage = component$(() {
  return <Icon name="inbox" />;
});

export const Empty = component$(({
  description, // 간단한 빈 상태 안내 문구입니다.
  size = 'md', // 아이콘과 여백 크기입니다.
  simple = false, // 아이콘 없는 설명 전용 변형입니다.
  block = false, // 전체 너비 배치입니다.
  icon, // 사용자가 교체할 수 있는 아이콘입니다.
  image, // icon의 이전 호환 이름입니다.
  footer, // 후속 액션 영역입니다.
  children, // description 대신 여러 노드로 구성할 설명입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  const resolvedSize = sizes.has(size) ? size : 'md'; // 검증된 크기입니다.
  // 크기·간단형·블록 클래스를 조합합니다.
  const classes = [
    'empty', // Empty 루트 클래스입니다.
    resolvedSize !== 'md' && `empty_${resolvedSize}`, // md가 아닐 때만 크기 변형입니다.
    simple && 'empty_simple', // 아이콘 없는 간단형입니다.
    block && 'empty_block', // 전체 너비 배치입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.
  // children이 있으면 description보다 우선합니다.
  const content = children ?? description;
  return (
    <div {...props} class={classes} data-component="Empty" role="status">
      {/* simple이 아닐 때만 아이콘/이미지 영역을 표시합니다. */}
      {!simple && (
        <div class="empty_image" data-slot="icon" aria-hidden="true">
          {icon ?? image ?? <EmptyImage />}
        </div>
      )}
      {/* 설명 영역: children이 있으면 그대로, 없으면 p로 description을 감쌉니다. */}
      {content != null && (
        <div class="empty_desc" data-slot="description">
          {children ?? <p>{description}</p>}
        </div>
      )}
      {footer != null && <div class="empty_footer">{footer}</div>}
    </div>
  );
});

export default Empty;
