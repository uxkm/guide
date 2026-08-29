import { createEffect, createSignal, onCleanup, useContext } from 'solid-js';
/**
 * Snackbar 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';
import { SnackbarPlacementContext, snackbarPlacements } from './SnackbarRegion.jsx';

const colors = new Set(['info', 'success', 'warning', 'danger']); // 지원하는 의미 색상입니다.
const sizes = new Set(['sm', 'md', 'lg']); // 지원하는 크기입니다.
const motions = new Set(['fade', 'slide', 'none']); // 지원하는 등장·퇴장 효과입니다.
const placements = new Set(snackbarPlacements); // 지원하는 배치 위치입니다.
// 색상별 기본 아이콘 이름입니다.
const iconNames = {
  info: 'info',
  success: 'check-circle',
  warning: 'alert-triangle',
  danger: 'x-circle',
};

export function Snackbar({
  children, // message보다 우선하는 메시지 콘텐츠입니다.
  message, // 기본 메시지입니다.
  color = 'info', // 의미 색상입니다.
  size = 'md', // Snackbar 크기입니다.
  motion = 'fade', // 등장·퇴장 효과입니다.
  placement, // 위치 및 Slide 방향입니다. 없으면 Region을 따릅니다.
  duration = 0, // 자동 닫기 시간(ms)입니다. 0이면 유지합니다.
  role = 'status', // 접근성 역할입니다. alert면 assertive입니다.
  closable = false, // 닫기 버튼 표시 여부입니다.
  closeLabel = '알림 닫기', // 닫기 버튼의 접근성 이름입니다.
  showIcon = true, // 상태 아이콘 표시 여부입니다.
  round = false, // 캡슐형 모서리입니다.
  icon, // 기본 아이콘 대신 사용할 커스텀 아이콘입니다.
  action, // 후속 액션 노드 또는 close를 받는 렌더 함수입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onClose, // close · action · timeout 사유로 호출됩니다.
  onMouseEnter, // 호버 진입 시 외부 핸들러입니다.
  onMouseLeave, // 호버 이탈 시 외부 핸들러입니다.
  onFocusCapture, // 포커스 캡처 시 외부 핸들러입니다.
  onBlurCapture, // 블러 캡처 시 외부 핸들러입니다.
  onKeyDown, // 키 입력 시 외부 핸들러입니다.
  onAnimationEnd, // 애니메이션 종료 시 외부 핸들러입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // Region이 제공한 기본 placement입니다.
  const regionPlacement = useContext(SnackbarPlacementContext);
  let timerRef = null; // 자동 닫기 타이머 ID입니다.
  let startedAtRef = 0; // 타이머 시작 시각입니다.
  let remainingRef = 0; // 남은 자동 닫기 시간(ms)입니다.
  let closeRef = null; // 퇴장 완료 후 전달할 닫기 사유·이벤트입니다.
  const pauseReasonsRef = new Set(); // hover·focus 등 일시정지 사유입니다.
  const [visible, setVisible] = createSignal(true); // DOM 유지 여부입니다.
  // none이면 바로 open, 그 외에는 entering부터 시작합니다.
  const [phase, setPhase] = createSignal(motion === 'none' ? 'open' : 'entering');
  const resolvedColor = colors.has(color) ? color : 'info'; // 검증된 색상입니다.
  const resolvedSize = sizes.has(size) ? size : 'md'; // 검증된 크기입니다.
  const resolvedMotion = motions.has(motion) ? motion : 'fade'; // 검증된 모션입니다.
  // placement prop이 없으면 Region placement를 사용합니다.
  const resolvedPlacement = placements.has(placement) ? placement : regionPlacement;
  // duration은 0 이상의 유한 숫자만 허용합니다.
  const resolvedDuration = Number.isFinite(Number(duration)) ? Math.max(0, Number(duration)) : 0;

  // 진행 중인 자동 닫기 타이머를 지웁니다.
  const clearTimer = () => {
    if (timerRef !== null) window.clearTimeout(timerRef);
    timerRef = null;
  };
  // 퇴장 후 DOM을 제거하고 onClose를 호출합니다.
  const finishClose = () => {
    clearTimer();
    setVisible(false);
    const payload = closeRef;
    closeRef = null;
    onClose?.(payload?.reason ?? 'close', payload?.event);
  };
  // 닫기 요청: none이면 즉시, 아니면 leaving 애니메이션을 시작합니다.
  const dismiss = (reason, event) => {
    if (!visible() || phase() === 'leaving') return;
    clearTimer();
    closeRef = { reason, event };
    if (resolvedMotion === 'none') finishClose();
    else setPhase('leaving');
  };
  // 일시정지 사유가 없을 때만 남은 시간으로 타이머를 재개합니다.
  const startTimer = () => {
    if (remainingRef <= 0 || timerRef !== null || pauseReasonsRef.size > 0)
      return;
    startedAtRef = Date.now();
    timerRef = window.setTimeout(() => dismiss('timeout'), remainingRef);
  };
  // 호버·포커스 중에는 남은 시간을 줄이고 타이머를 멈춥니다.
  const pauseTimer = (reason) => {
    pauseReasonsRef.add(reason);
    if (timerRef === null) return;
    remainingRef = Math.max(0, remainingRef - (Date.now() - startedAtRef));
    clearTimer();
  };
  // 일시정지 사유를 제거하고 타이머를 재개합니다.
  const resumeTimer = (reason) => {
    pauseReasonsRef.delete(reason);
    startTimer();
  };

  // entering 단계가 끝나면 open으로 전환합니다(애니메이션 미지원 대비).
  createEffect(() => {
    if (phase() !== 'entering') return undefined;
    const id = window.setTimeout(() => setPhase('open'), 250);
    return () => window.clearTimeout(id);
  });
  // open이고 duration이 있으면 자동 닫기 타이머를 시작합니다.
  createEffect(() => {
    if (phase() !== 'open' || resolvedDuration === 0) return undefined;
    remainingRef = resolvedDuration;
    pauseReasonsRef.clear();
    startTimer();
    return clearTimer;
  });
  // 언마운트 시 타이머를 정리합니다.
  onCleanup(clearTimer);

  if (!visible()) return null;

  // 색상·크기·모션·위치·단계 클래스를 조합합니다.
  const classes = [
    'snackbar', // Snackbar 루트 클래스입니다.
    resolvedColor === 'danger' ? 'color_error' : `color_${resolvedColor}`, // 의미 색상입니다.
    resolvedSize !== 'md' && `snackbar_${resolvedSize}`, // md가 아닐 때만 크기 변형입니다.
    round && 'snackbar_round', // 캡슐형 모서리입니다.
    `snackbar_motion-${resolvedMotion}`, // 등장·퇴장 모션입니다.
    `snackbar_placement-${resolvedPlacement}`, // Slide 방향·배치입니다.
    `is-${phase()}`, // entering · open · leaving 단계입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 class 문자열로 만듭니다.
  // action이 함수면 close 헬퍼를 넘겨 렌더합니다.
  const actionContent =
    typeof action === 'function' ? action({ close: (event) => dismiss('action', event) }) : action;

  return (
    <div
      {...props}
      class={classes}
      data-component="Snackbar"
      role={role}
      aria-live={role === 'alert' ? 'assertive' : 'polite'}
      aria-atomic="true"
      aria-relevant="additions text"
      onMouseEnter={(event) => {
        pauseTimer('hover');
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event) => {
        resumeTimer('hover');
        onMouseLeave?.(event);
      }}
      onFocusCapture={(event) => {
        pauseTimer('focus');
        onFocusCapture?.(event);
      }}
      onBlurCapture={(event) => {
        // 포커스가 Snackbar 밖으로 나갔을 때만 재개합니다.
        if (!event.currentTarget.contains(event.relatedTarget)) resumeTimer('focus');
        onBlurCapture?.(event);
      }}
      onKeyDown={(event) => {
        if (closable && event.key === 'Escape') dismiss('close', event);
        onKeyDown?.(event);
      }}
      onAnimationEnd={(event) => {
        // 루트 애니메이션이 끝났을 때만 단계를 전환합니다.
        if (event.currentTarget === event.target) {
          if (phase() === 'entering') setPhase('open');
          if (phase() === 'leaving') finishClose();
        }
        onAnimationEnd?.(event);
      }}
    >
      {/* 상태 아이콘 영역입니다. */}
      {showIcon && (
        <span class="snackbar_icon-wrap" aria-hidden="true">
          {icon ?? <Icon name={iconNames[resolvedColor]} class="snackbar_icon" />}
        </span>
      )}
      <div class="snackbar_message">{children ?? message ?? 'Snackbar'}</div>
      {actionContent != null && <div class="snackbar_action">{actionContent}</div>}
      {closable && (
        <Button
          variant="ghost"
          iconOnly
          class="snackbar_close"
          ariaLabel={closeLabel}
          iconBefore={<Icon name="close" size="sm" />}
          onClick={(event) => dismiss('close', event)}
        />
      )}
    </div>
  );
}

export default Snackbar;
