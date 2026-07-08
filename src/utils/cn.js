/** className 조합 헬퍼 (Vue :class 배열·객체 패턴 대응) */
export function cn(...parts) {
  const classes = [];

  for (const part of parts) {
    if (!part) continue;

    if (typeof part === 'string') {
      classes.push(part);
      continue;
    }

    if (Array.isArray(part)) {
      const nested = cn(...part);
      if (nested) classes.push(nested);
      continue;
    }

    if (typeof part === 'object') {
      for (const [key, value] of Object.entries(part)) {
        if (value) classes.push(key);
      }
    }
  }

  return classes.join(' ');
}
