/** 2024년 6월 데모용 날짜 그리드 데이터 */
export const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

const JUNE_2024_FULL = [
  { day: 26, otherMonth: true, disabled: true },
  { day: 27, otherMonth: true, disabled: true },
  { day: 28, otherMonth: true, disabled: true },
  { day: 29, otherMonth: true, disabled: true },
  { day: 30, otherMonth: true, disabled: true },
  { day: 31, otherMonth: true, disabled: true },
  { day: 1 },
  { day: 2 },
  { day: 3 },
  { day: 4 },
  { day: 5 },
  { day: 6 },
  { day: 7 },
  { day: 8 },
  { day: 9 },
  { day: 10 },
  { day: 11 },
  { day: 12 },
  { day: 13 },
  { day: 14 },
  { day: 15, today: true },
  { day: 16 },
  { day: 17 },
  { day: 18, selected: true },
  { day: 19 },
  { day: 20 },
  { day: 21 },
  { day: 22 },
  { day: 23 },
  { day: 24 },
  { day: 25, disabled: true },
  { day: 26 },
  { day: 27 },
  { day: 28 },
  { day: 29 },
  { day: 30 },
  { day: 1, otherMonth: true, disabled: true },
  { day: 2, otherMonth: true, disabled: true },
  { day: 3, otherMonth: true, disabled: true },
  { day: 4, otherMonth: true, disabled: true },
  { day: 5, otherMonth: true, disabled: true },
  { day: 6, otherMonth: true, disabled: true },
];

function applyOverrides(days, overrides = {}) {
  const {
    selected,
    today,
    disabled = [],
    events = [],
    rangeStart,
    rangeEnd,
  } = overrides;

  return days.map((cell) => {
    const d = cell.day;
    const inCurrentMonth = !cell.otherMonth;
    const dayNum = inCurrentMonth ? d : null;

    const next = { ...cell };

    if (selected !== undefined && dayNum === selected) {
      next.selected = true;
    }
    if (today !== undefined && dayNum === today) {
      next.today = true;
    }
    if (dayNum && disabled.includes(dayNum)) {
      next.disabled = true;
    }
    if (dayNum && events.includes(dayNum)) {
      next.event = true;
    }

    if (rangeStart !== undefined && rangeEnd !== undefined && dayNum) {
      if (dayNum === rangeStart) {
        next.selected = true;
        next.rangeStart = true;
      } else if (dayNum === rangeEnd) {
        next.selected = true;
        next.rangeEnd = true;
      } else if (dayNum > rangeStart && dayNum < rangeEnd) {
        next.inRange = true;
      }
    }

    return next;
  });
}

export function june2024Days(overrides) {
  return applyOverrides(JUNE_2024_FULL, overrides);
}

export function partialMonthDays(count, { today, selected } = {}) {
  return Array.from({ length: count }, (_, i) => {
    const day = i + 1;
    return {
      day,
      today: day === today,
      selected: day === selected,
    };
  });
}

export const JUNE_WEEK_DAYS = [
  { day: 9 },
  { day: 10 },
  { day: 11 },
  { day: 12, selected: true, event: true },
  { day: 13 },
  { day: 14 },
  { day: 15, today: true },
];

export const JUNE_WEEK_LABEL = '6월 9일 ~ 15일';

export const EVENT_DAYS = [5, 12, 15, 18, 20, 28];

/** 이중 패널 데모 — 6월(범위 10~30, 7월 1~6일 in-range) */
export function juneDualDays() {
  return june2024Days({ rangeStart: 10, rangeEnd: 30 }).map((cell) => {
    const next = { ...cell, today: false };

    if (!cell.otherMonth && cell.day !== 10 && cell.day !== 30) {
      next.selected = false;
    }

    if (cell.otherMonth && cell.day <= 6) {
      next.inRange = true;
      next.disabled = false;
    }

    return next;
  });
}

/** 이중 패널 데모 — 7월(범위 6월 30 ~ 7월 6) */
export function julyDualDays() {
  const days = [{ day: 30, otherMonth: true, inRange: true }];
  for (let d = 1; d <= 6; d += 1) {
    days.push({
      day: d,
      inRange: true,
      ...(d === 6 ? { selected: true, rangeEnd: true } : {}),
    });
  }
  for (let d = 7; d <= 31; d += 1) days.push({ day: d });
  for (let d = 1; d <= 10; d += 1) {
    days.push({ day: d, otherMonth: true, disabled: true });
  }
  return days;
}

export function disabledPartialDays(count, { today, selected } = {}) {
  return partialMonthDays(count, { today, selected }).map((cell) => ({
    ...cell,
    disabled: true,
  }));
}
