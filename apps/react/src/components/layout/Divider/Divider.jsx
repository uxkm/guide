/**
 * Divider 원본 구현.
 * 레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
 */
// 레이블 정렬과 루트 태그로 허용하는 값만 CSS·요소 선택에 반영합니다.
const ORIENTATIONS = new Set(['', 'left', 'right']); // 지원하는 레이블 위치입니다.
const TAGS = new Set(['auto', 'hr', 'div', 'span']); // 지원하는 루트 태그 모드입니다.

export function Divider({
  as, // 지정하면 루트 요소를 강제로 바꿉니다.
  tag = 'auto', // auto면 내용·방향에 따라 hr/div/span을 고릅니다.
  vertical = false, // 세로 구분선으로 표시합니다.
  dashed = false, // 점선 스타일을 적용합니다.
  plain = false, // 레이블 굵기를 낮춥니다.
  orient, // 레이블 위치(left·right)를 지정합니다.
  orientation = '', // orient의 이전 호환 이름입니다.
  label, // children이 없을 때 표시할 레이블입니다.
  children, // 구분선 가운데 표시할 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // children이 있으면 우선하고, 없으면 label을 사용합니다.
  const content = children ?? label;
  // orient가 있으면 우선하고, 없으면 orientation 별칭을 사용합니다.
  const resolvedOrient = orient ?? orientation;
  const resolvedTag = TAGS.has(tag) ? tag : 'auto';
  // as가 있으면 최우선이고, 아니면 tag·vertical·content로 루트 태그를 결정합니다.
  const Root =
    as || (resolvedTag !== 'auto' ? resolvedTag : vertical ? 'span' : content ? 'div' : 'hr');

  // 방향·점선·plain·레이블 위치 클래스를 조합합니다.
  const classes = [
    'divider', // 구분선 기본 클래스입니다.
    vertical && 'divider_vertical', // 세로 구분선 변형입니다.
    dashed && 'divider_dashed', // 점선 변형입니다.
    plain && 'divider_plain', // 레이블 굵기를 낮추는 변형입니다.
    ORIENTATIONS.has(resolvedOrient) && resolvedOrient && `divider_orient-${resolvedOrient}`, // 검증된 레이블 위치입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // 세로선은 장식 요소로 보조 기술에서 제외합니다.
  const accessibility = vertical ? { 'aria-hidden': 'true' } : {};

  // hr에는 자식을 두지 않고, 그 외에는 콘텐츠를 렌더링합니다.
  return (
    <Root className={classes} data-component="Divider" {...accessibility} {...props}>
      {Root === 'hr' ? null : content}
    </Root>
  );
}

export default Divider;
