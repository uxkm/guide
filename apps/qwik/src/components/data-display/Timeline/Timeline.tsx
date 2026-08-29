import { component$ } from '@builder.io/qwik';
/**
 * Timeline 원본 구현.
 * 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
const VALID_TAGS = new Set(['ol', 'ul']);

// 시간순 여부에 따라 ol·ul 루트를 선택하고 레이아웃 변형을 적용합니다.
export const Timeline = component$(({
  children, // TimelineItem 자식들입니다.
  card = false, // 카드형 타임라인입니다.
  alternate = false, // 좌우 교차 배치입니다.
  horizontal = false, // 가로 타임라인입니다.
  labelCol = false, // 라벨 열 레이아웃입니다.
  icon = false, // 아이콘 도트 모드입니다.
  iconSize = 'md', // 아이콘 도트 크기입니다.
  size = 'md', // sm · md · lg 크기입니다.
  tag = 'ol', // ol · ul 루트 태그입니다.
  class: className = '', // 추가 클래스입니다.
  ...props // 나머지 속성을 루트에 전달합니다.
}) {
  const Root = VALID_TAGS.has(tag) ? tag : 'ol';
  const classes = [
    'timeline',
    card && 'timeline_card',
    alternate && 'timeline_alternate',
    horizontal && 'timeline_horizontal',
    labelCol && 'timeline_label-col',
    icon && 'timeline_icon',
    icon && iconSize === 'sm' && 'timeline_icon-sm',
    size === 'sm' && 'timeline_sm',
    size === 'lg' && 'timeline_lg',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <Root {...props} class={classes} data-component="Timeline">
      {children}
    </Root>
  );
});

export const TimelineItem = component$(({
  color = 'primary', // 도트 색상입니다.
  title, // 항목 제목입니다.
  description, // 항목 설명입니다.
  time, // 시간 텍스트입니다.
  datetime, // time 요소의 datetime입니다.
  label, // 사이드 라벨 텍스트입니다.
  labelDatetime, // 라벨 time의 datetime입니다.
  active = false, // 활성 항목입니다.
  pending = false, // 대기·진행 중 항목입니다.
  outline = false, // 도트 외곽선 스타일입니다.
  dot, // 커스텀 도트 콘텐츠입니다.
  meta, // 메타 영역 콘텐츠입니다.
  children, // 항목 본문 콘텐츠입니다.
  class: className = '', // 추가 클래스입니다.
  ...props // 나머지 속성을 루트에 전달합니다.
}) {
  // 진행 상태와 도트 외형을 item·dot 클래스에 분리해 적용합니다.
  const itemClasses = ['timeline_item', active && 'is-active', pending && 'is-pending', className]
    .filter(Boolean)
    .join(' ');
  const dotClasses = ['timeline_dot', outline && 'timeline_dot-outline', color && `color_${color}`]
    .filter(Boolean)
    .join(' ');
  // 시간 값은 time 요소로, 장식용 도트는 접근성 트리에서 숨겨 렌더링합니다.
  return (
    <li {...props} class={itemClasses} data-component="TimelineItem">
      {label ? (
        <time class="timeline_label" dateTime={labelDatetime}>
          {label}
        </time>
      ) : null}
      {dot ? (
        <span class="timeline_dot" aria-hidden="true">
          {dot}
        </span>
      ) : (
        <span class={dotClasses} aria-hidden="true" />
      )}
      <div class="timeline_content">
        {children ?? (
          <>
            {time ? (
              <time class="timeline_time" dateTime={datetime}>
                {time}
              </time>
            ) : null}
            {title ? <p class="timeline_title">{title}</p> : null}
            {description ? <p class="timeline_desc">{description}</p> : null}
          </>
        )}
        {meta ? <div class="timeline_meta">{meta}</div> : null}
      </div>
    </li>
  );
});

export default Timeline;
