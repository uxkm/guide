/**
 * Rate 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
import { useEffect, useId, useMemo, useState } from 'react';

const VALID_SIZES = new Set(['sm', 'md', 'lg']); // 지원하는 크기 이름입니다.
const STAR_PATH =
  'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'; // 별 아이콘 path입니다.

function StarGraphic({ half = false }) {
  // 빈 별·채움 별·반별 오버레이를 하나의 그래픽으로 구성합니다.
  return (
    <span className="rate_star-graphic" aria-hidden="true">
      <svg className="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d={STAR_PATH} />
      </svg>
      <svg className="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor">
        <path d={STAR_PATH} />
      </svg>
      {half && (
        <span className="rate_star-icon-half">
          <svg className="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d={STAR_PATH} />
          </svg>
        </span>
      )}
    </span>
  );
}

export function Rate({
  value, // 제어 컴포넌트의 현재 별점입니다.
  defaultValue, // 비제어 컴포넌트의 초기 별점입니다.
  count = 5, // 표시할 별의 개수입니다.
  allowHalf = false, // 0.5점 단위 선택을 허용합니다.
  clearable = false, // 선택 초기화 버튼을 표시합니다.
  readOnly = false, // 읽기 전용 표시 모드입니다.
  readonly = false, // readOnly의 이전 호환 이름입니다.
  disabled = false, // 선택을 비활성으로 만들어 조작을 막습니다.
  size = 'md', // 별과 값 텍스트 크기입니다.
  legend, // fieldset 범례 텍스트입니다.
  name, // radio 그룹 이름입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ripple = true, // 클릭 파장 효과를 표시할지 여부입니다.
  onChange, // 별점 선택 또는 초기화 콜백입니다.
  ...props // aria-label 등 나머지 루트 속성을 전달합니다.
}) {
  // 그룹 이름, 별 개수, 크기, 읽기 전용 여부와 현재 값을 준비합니다.
  const generatedName = useId();
  const groupName = name || generatedName;
  const resolvedCount = Number(count) > 0 ? Number(count) : 5; // 유효한 별 개수입니다.
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md'; // 지원 범위로 보정한 크기입니다.
  const isReadonly = readOnly || readonly; // 최종 읽기 전용 여부입니다.
  const [currentValue, setCurrentValue] = useState(value ?? defaultValue);
  const stars = useMemo(
    () => Array.from({ length: resolvedCount }, (_, index) => index + 1),
    [resolvedCount],
  );

  // 외부 value가 바뀌면 내부 선택 값을 동기화합니다.
  useEffect(() => {
    if (value !== undefined) setCurrentValue(value);
  }, [value]);

  // 크기·반별·초기화·읽기 전용 상태를 공통 클래스로 변환합니다.
  const classes = [
    'rate', // 별점 루트 필수 클래스입니다.
    resolvedSize === 'sm' && 'rate_sm', // 작은 크기 변형입니다.
    resolvedSize === 'lg' && 'rate_lg', // 큰 크기 변형입니다.
    allowHalf && 'rate_allow-half', // 반별 선택 변형입니다.
    clearable && 'rate_clearable', // 초기화 버튼 표시 모드입니다.
    isReadonly && 'is-readonly', // 읽기 전용 상태 클래스입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' ');

  function update(next) {
    // 내부 상태와 외부 콜백을 함께 갱신합니다.
    setCurrentValue(next);
    onChange?.(next);
  }

  // 읽기 전용은 radio 없이 채움·반별 상태로만 표시합니다.
  if (isReadonly)
    return (
      <div
        {...props}
        className={classes}
        data-component="Rate"
        role="img"
        aria-label={props['aria-label'] || `${resolvedCount}점 만점 중 ${currentValue ?? 0}점`}
      >
        <div className="rate_stars">
          {stars.map((star) => {
            const state =
              (currentValue ?? 0) >= star
                ? 'is-filled'
                : allowHalf && (currentValue ?? 0) >= star - 0.5
                  ? 'is-half'
                  : '';
            return (
              <span key={star} className={['rate_star-readonly', state].filter(Boolean).join(' ')}>
                <StarGraphic half={state === 'is-half'} />
              </span>
            );
          })}
        </div>
        {currentValue != null && <span className="rate_value">{currentValue}</span>}
      </div>
    );

  // 편집 가능 모드는 fieldset과 radio로 별점을 선택합니다.
  return (
    <fieldset
      {...props}
      className={classes}
      data-component="Rate"
      data-ripple={ripple ? 'true' : undefined}
      disabled={disabled}
    >
      {legend && <legend className="rate_legend">{legend}</legend>}
      <div className="rate_control">
        <div className="rate_stars">
          {stars.map((star) => (
            <label key={star} className="rate_star" data-ripple={ripple ? 'true' : undefined}>
              {/* 반별 허용 시 0.5점용 숨김 radio를 함께 둡니다. */}
              {allowHalf && (
                <input
                  type="radio"
                  className="rate_input rate_input-half"
                  name={groupName}
                  value={star - 0.5}
                  checked={currentValue === star - 0.5}
                  disabled={disabled}
                  onChange={() => update(star - 0.5)}
                />
              )}
              <input
                type="radio"
                className="rate_input"
                name={groupName}
                value={star}
                checked={currentValue === star}
                disabled={disabled}
                onChange={() => update(star)}
              />
              {/* 포인터로 왼쪽·오른쪽 반을 직접 고를 수 있는 히트 영역입니다. */}
              {allowHalf && (
                <>
                  <button
                    type="button"
                    className="rate_star-half rate_star-half-left"
                    tabIndex={-1}
                    aria-hidden="true"
                    disabled={disabled}
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      update(star - 0.5);
                    }}
                  />
                  <button
                    type="button"
                    className="rate_star-half rate_star-half-right"
                    tabIndex={-1}
                    aria-hidden="true"
                    disabled={disabled}
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      update(star);
                    }}
                  />
                </>
              )}
              <StarGraphic half={allowHalf} />
              <span className="rate_star-label">{star}점</span>
            </label>
          ))}
        </div>
        {clearable && (
          <button
            type="button"
            className="rate_clear"
            data-ripple={ripple ? 'true' : undefined}
            aria-label="별점 초기화"
            title="초기화"
            onClick={() => update(undefined)}
          >
            <svg
              className="rate_clear-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        )}
        {currentValue != null && <output className="rate_value">{currentValue}점</output>}
      </div>
    </fieldset>
  );
}

export default Rate;
