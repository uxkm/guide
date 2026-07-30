/**
 * 자주 쓰는 stroke SVG 아이콘 (viewBox 0 0 24 24 · stroke-width 2).
 * Material Symbols / Lucide 스타일 outline 경로.
 *
 * @typedef {{ tag: string, attrs: Record<string, string | number> }} IconElement
 */

/** @type {Record<string, IconElement[]>} */
export const commonIconPaths = {
  search: [
    { tag: 'circle', attrs: { cx: 11, cy: 11, r: 8 } },
    { tag: 'path', attrs: { d: 'm21 21-4.35-4.35' } },
  ],
  plus: [{ tag: 'path', attrs: { d: 'M12 5v14M5 12h14' } }],
  minus: [{ tag: 'path', attrs: { d: 'M5 12h14' } }],
  close: [{ tag: 'path', attrs: { d: 'M18 6 6 18M6 6l12 12' } }],
  check: [{ tag: 'path', attrs: { d: 'M20 6 9 17l-5-5' } }],
  edit: [
    { tag: 'path', attrs: { d: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' } },
    { tag: 'path', attrs: { d: 'M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z' } },
  ],
  trash: [
    { tag: 'path', attrs: { d: 'M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' } },
  ],
  copy: [
    { tag: 'rect', attrs: { x: 9, y: 9, width: 13, height: 13, rx: 2, ry: 2 } },
    { tag: 'path', attrs: { d: 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' } },
  ],
  save: [
    { tag: 'path', attrs: { d: 'M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z' } },
    { tag: 'polyline', attrs: { points: '17 21 17 13 7 13 7 21' } },
    { tag: 'polyline', attrs: { points: '7 3 7 8 15 8' } },
  ],
  download: [
    { tag: 'path', attrs: { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' } },
    { tag: 'polyline', attrs: { points: '7 10 12 15 17 10' } },
    { tag: 'line', attrs: { x1: 12, y1: 15, x2: 12, y2: 3 } },
  ],
  upload: [
    { tag: 'path', attrs: { d: 'M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8' } },
    { tag: 'polyline', attrs: { points: '16 6 12 2 8 6' } },
    { tag: 'line', attrs: { x1: 12, y1: 2, x2: 12, y2: 15 } },
  ],
  share: [
    { tag: 'circle', attrs: { cx: 18, cy: 5, r: 3 } },
    { tag: 'circle', attrs: { cx: 6, cy: 12, r: 3 } },
    { tag: 'circle', attrs: { cx: 18, cy: 19, r: 3 } },
    { tag: 'line', attrs: { x1: 8.59, y1: 13.51, x2: 15.42, y2: 17.49 } },
    { tag: 'line', attrs: { x1: 15.41, y1: 6.51, x2: 8.59, y2: 10.49 } },
  ],
  link: [
    { tag: 'path', attrs: { d: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' } },
    { tag: 'path', attrs: { d: 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' } },
  ],
  'external-link': [
    { tag: 'path', attrs: { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' } },
    { tag: 'polyline', attrs: { points: '15 3 21 3 21 9' } },
    { tag: 'line', attrs: { x1: 10, y1: 14, x2: 21, y2: 3 } },
  ],
  filter: [{ tag: 'polygon', attrs: { points: '22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3' } }],
  refresh: [
    { tag: 'path', attrs: { d: 'M21 12a9 9 0 1 1-2.64-6.36' } },
    { tag: 'path', attrs: { d: 'M21 3v6h-6' } },
  ],
  undo: [
    { tag: 'path', attrs: { d: 'M3 7v6h6' } },
    { tag: 'path', attrs: { d: 'M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13' } },
  ],
  redo: [
    { tag: 'path', attrs: { d: 'M21 7v6h-6' } },
    { tag: 'path', attrs: { d: 'M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13' } },
  ],
  printer: [
    { tag: 'polyline', attrs: { points: '6 9 6 2 18 2 18 9' } },
    { tag: 'path', attrs: { d: 'M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2' } },
    { tag: 'rect', attrs: { x: 6, y: 14, width: 12, height: 8 } },
  ],
  paperclip: [
    { tag: 'path', attrs: { d: 'm21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48' } },
  ],
  'arrow-left': [{ tag: 'path', attrs: { d: 'M19 12H5M12 19l-7-7 7-7' } }],
  'arrow-right': [{ tag: 'path', attrs: { d: 'M5 12h14M12 5l7 7-7 7' } }],
  'arrow-up': [{ tag: 'path', attrs: { d: 'M12 19V5M5 12l7-7 7 7' } }],
  'arrow-down': [{ tag: 'path', attrs: { d: 'M12 5v14M19 12l-7 7-7-7' } }],
  'chevron-left': [{ tag: 'path', attrs: { d: 'M15 18l-6-6 6-6' } }],
  'chevron-right': [{ tag: 'path', attrs: { d: 'M9 18l6-6-6-6' } }],
  'chevron-up': [{ tag: 'path', attrs: { d: 'M18 15l-6-6-6 6' } }],
  'chevron-down': [{ tag: 'path', attrs: { d: 'M6 9l6 6 6-6' } }],
  menu: [
    { tag: 'line', attrs: { x1: 3, y1: 12, x2: 21, y2: 12 } },
    { tag: 'line', attrs: { x1: 3, y1: 6, x2: 21, y2: 6 } },
    { tag: 'line', attrs: { x1: 3, y1: 18, x2: 21, y2: 18 } },
  ],
  'more-vertical': [
    { tag: 'circle', attrs: { cx: 12, cy: 12, r: 1 } },
    { tag: 'circle', attrs: { cx: 12, cy: 5, r: 1 } },
    { tag: 'circle', attrs: { cx: 12, cy: 19, r: 1 } },
  ],
  'more-horizontal': [
    { tag: 'circle', attrs: { cx: 12, cy: 12, r: 1 } },
    { tag: 'circle', attrs: { cx: 19, cy: 12, r: 1 } },
    { tag: 'circle', attrs: { cx: 5, cy: 12, r: 1 } },
  ],
  grid: [
    { tag: 'rect', attrs: { x: 3, y: 3, width: 7, height: 7 } },
    { tag: 'rect', attrs: { x: 14, y: 3, width: 7, height: 7 } },
    { tag: 'rect', attrs: { x: 14, y: 14, width: 7, height: 7 } },
    { tag: 'rect', attrs: { x: 3, y: 14, width: 7, height: 7 } },
  ],
  list: [
    { tag: 'line', attrs: { x1: 8, y1: 6, x2: 21, y2: 6 } },
    { tag: 'line', attrs: { x1: 8, y1: 12, x2: 21, y2: 12 } },
    { tag: 'line', attrs: { x1: 8, y1: 18, x2: 21, y2: 18 } },
    { tag: 'circle', attrs: { cx: 3, cy: 6, r: 1, fill: 'currentColor', stroke: 'none' } },
    { tag: 'circle', attrs: { cx: 3, cy: 12, r: 1, fill: 'currentColor', stroke: 'none' } },
    { tag: 'circle', attrs: { cx: 3, cy: 18, r: 1, fill: 'currentColor', stroke: 'none' } },
  ],
  home: [
    { tag: 'path', attrs: { d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' } },
    { tag: 'polyline', attrs: { points: '9 22 9 12 15 12 15 22' } },
  ],
  settings: [
    { tag: 'circle', attrs: { cx: 12, cy: 12, r: 3 } },
    { tag: 'path', attrs: { d: 'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z' } },
  ],
  user: [
    { tag: 'path', attrs: { d: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' } },
    { tag: 'circle', attrs: { cx: 12, cy: 7, r: 4 } },
  ],
  users: [
    { tag: 'path', attrs: { d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' } },
    { tag: 'circle', attrs: { cx: 9, cy: 7, r: 4 } },
    { tag: 'path', attrs: { d: 'M23 21v-2a4 4 0 0 0-3-3.87' } },
    { tag: 'path', attrs: { d: 'M16 3.13a4 4 0 0 1 0 7.75' } },
  ],
  mail: [
    { tag: 'path', attrs: { d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' } },
    { tag: 'polyline', attrs: { points: '22,6 12,13 2,6' } },
  ],
  phone: [{ tag: 'path', attrs: { d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' } }],
  bell: [
    { tag: 'path', attrs: { d: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9' } },
    { tag: 'path', attrs: { d: 'M13.73 21a2 2 0 0 1-3.46 0' } },
  ],
  message: [
    { tag: 'path', attrs: { d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' } },
  ],
  send: [
    { tag: 'line', attrs: { x1: 22, y1: 2, x2: 11, y2: 13 } },
    { tag: 'polygon', attrs: { points: '22 2 15 22 11 13 2 9 22 2' } },
  ],
  info: [
    { tag: 'circle', attrs: { cx: 12, cy: 12, r: 10 } },
    { tag: 'path', attrs: { d: 'M12 16v-4' } },
    { tag: 'circle', attrs: { cx: 12, cy: 8, r: 1, fill: 'currentColor', stroke: 'none' } },
  ],
  'help-circle': [
    { tag: 'circle', attrs: { cx: 12, cy: 12, r: 10 } },
    { tag: 'path', attrs: { d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3' } },
    { tag: 'circle', attrs: { cx: 12, cy: 17, r: 1, fill: 'currentColor', stroke: 'none' } },
  ],
  'alert-circle': [
    { tag: 'circle', attrs: { cx: 12, cy: 12, r: 10 } },
    { tag: 'line', attrs: { x1: 12, y1: 8, x2: 12, y2: 12 } },
    { tag: 'circle', attrs: { cx: 12, cy: 16, r: 1, fill: 'currentColor', stroke: 'none' } },
  ],
  'alert-triangle': [
    { tag: 'path', attrs: { d: 'M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z' } },
    { tag: 'path', attrs: { d: 'M12 9v4' } },
    { tag: 'circle', attrs: { cx: 12, cy: 17, r: 1, fill: 'currentColor', stroke: 'none' } },
  ],
  'check-circle': [
    { tag: 'path', attrs: { d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14' } },
    { tag: 'path', attrs: { d: 'M22 4 12 14.01l-3-3' } },
  ],
  'x-circle': [
    { tag: 'circle', attrs: { cx: 12, cy: 12, r: 10 } },
    { tag: 'path', attrs: { d: 'm15 9-6 6M9 9l6 6' } },
  ],
  star: [
    { tag: 'polygon', attrs: { points: '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' } },
  ],
  heart: [
    { tag: 'path', attrs: { d: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' } },
  ],
  bookmark: [{ tag: 'path', attrs: { d: 'M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z' } }],
  'thumb-up': [
    { tag: 'path', attrs: { d: 'M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z' } },
    { tag: 'path', attrs: { d: 'M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3' } },
  ],
  eye: [
    { tag: 'path', attrs: { d: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' } },
    { tag: 'circle', attrs: { cx: 12, cy: 12, r: 3 } },
  ],
  'eye-off': [
    { tag: 'path', attrs: { d: 'M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94' } },
    { tag: 'path', attrs: { d: 'M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19' } },
    { tag: 'line', attrs: { x1: 1, y1: 1, x2: 23, y2: 23 } },
    { tag: 'path', attrs: { d: 'M14.12 14.12a3 3 0 1 1-4.24-4.24' } },
  ],
  lock: [
    { tag: 'rect', attrs: { x: 3, y: 11, width: 18, height: 11, rx: 2, ry: 2 } },
    { tag: 'path', attrs: { d: 'M7 11V7a5 5 0 0 1 10 0v4' } },
  ],
  unlock: [
    { tag: 'rect', attrs: { x: 3, y: 11, width: 18, height: 11, rx: 2, ry: 2 } },
    { tag: 'path', attrs: { d: 'M7 11V7a5 5 0 0 1 9.9-1' } },
  ],
  'log-in': [
    { tag: 'path', attrs: { d: 'M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4' } },
    { tag: 'polyline', attrs: { points: '10 17 15 12 10 7' } },
    { tag: 'line', attrs: { x1: 15, y1: 12, x2: 3, y2: 12 } },
  ],
  'log-out': [
    { tag: 'path', attrs: { d: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' } },
    { tag: 'polyline', attrs: { points: '16 17 21 12 16 7' } },
    { tag: 'line', attrs: { x1: 21, y1: 12, x2: 9, y2: 12 } },
  ],
  calendar: [
    { tag: 'rect', attrs: { x: 3, y: 4, width: 18, height: 18, rx: 2, ry: 2 } },
    { tag: 'line', attrs: { x1: 16, y1: 2, x2: 16, y2: 6 } },
    { tag: 'line', attrs: { x1: 8, y1: 2, x2: 8, y2: 6 } },
    { tag: 'line', attrs: { x1: 3, y1: 10, x2: 21, y2: 10 } },
  ],
  clock: [
    { tag: 'circle', attrs: { cx: 12, cy: 12, r: 10 } },
    { tag: 'polyline', attrs: { points: '12 6 12 12 16 14' } },
  ],
  folder: [{ tag: 'path', attrs: { d: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z' } }],
  file: [
    { tag: 'path', attrs: { d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' } },
    { tag: 'polyline', attrs: { points: '14 2 14 8 20 8' } },
  ],
  image: [
    { tag: 'rect', attrs: { x: 3, y: 3, width: 18, height: 18, rx: 2, ry: 2 } },
    { tag: 'circle', attrs: { cx: 8.5, cy: 8.5, r: 1.5 } },
    { tag: 'polyline', attrs: { points: '21 15 16 10 5 21' } },
  ],
  camera: [
    { tag: 'path', attrs: { d: 'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z' } },
    { tag: 'circle', attrs: { cx: 12, cy: 13, r: 4 } },
  ],
  'map-pin': [
    { tag: 'path', attrs: { d: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' } },
    { tag: 'circle', attrs: { cx: 12, cy: 10, r: 3 } },
  ],
  globe: [
    { tag: 'circle', attrs: { cx: 12, cy: 12, r: 10 } },
    { tag: 'line', attrs: { x1: 2, y1: 12, x2: 22, y2: 12 } },
    { tag: 'path', attrs: { d: 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' } },
  ],
  cart: [
    { tag: 'circle', attrs: { cx: 9, cy: 21, r: 1 } },
    { tag: 'circle', attrs: { cx: 20, cy: 21, r: 1 } },
    { tag: 'path', attrs: { d: 'M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6' } },
  ],
  'credit-card': [
    { tag: 'rect', attrs: { x: 1, y: 4, width: 22, height: 16, rx: 2, ry: 2 } },
    { tag: 'line', attrs: { x1: 1, y1: 10, x2: 23, y2: 10 } },
  ],
  tag: [
    { tag: 'path', attrs: { d: 'M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z' } },
    { tag: 'circle', attrs: { cx: 7, cy: 7, r: 1, fill: 'currentColor', stroke: 'none' } },
  ],
  sun: [
    { tag: 'circle', attrs: { cx: 12, cy: 12, r: 5 } },
    { tag: 'line', attrs: { x1: 12, y1: 1, x2: 12, y2: 3 } },
    { tag: 'line', attrs: { x1: 12, y1: 21, x2: 12, y2: 23 } },
    { tag: 'line', attrs: { x1: 4.22, y1: 4.22, x2: 5.64, y2: 5.64 } },
    { tag: 'line', attrs: { x1: 18.36, y1: 18.36, x2: 19.78, y2: 19.78 } },
    { tag: 'line', attrs: { x1: 1, y1: 12, x2: 3, y2: 12 } },
    { tag: 'line', attrs: { x1: 21, y1: 12, x2: 23, y2: 12 } },
    { tag: 'line', attrs: { x1: 4.22, y1: 19.78, x2: 5.64, y2: 18.36 } },
    { tag: 'line', attrs: { x1: 18.36, y1: 5.64, x2: 19.78, y2: 4.22 } },
  ],
  moon: [{ tag: 'path', attrs: { d: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' } }],
  cloud: [{ tag: 'path', attrs: { d: 'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z' } }],
  book: [{ tag: 'path', attrs: { d: 'M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20' } }],
  'zoom-in': [
    { tag: 'circle', attrs: { cx: 11, cy: 11, r: 8 } },
    { tag: 'line', attrs: { x1: 21, y1: 21, x2: 16.65, y2: 16.65 } },
    { tag: 'line', attrs: { x1: 11, y1: 8, x2: 11, y2: 14 } },
    { tag: 'line', attrs: { x1: 8, y1: 11, x2: 14, y2: 11 } },
  ],
  'zoom-out': [
    { tag: 'circle', attrs: { cx: 11, cy: 11, r: 8 } },
    { tag: 'line', attrs: { x1: 21, y1: 21, x2: 16.65, y2: 16.65 } },
    { tag: 'line', attrs: { x1: 8, y1: 11, x2: 14, y2: 11 } },
  ],
  maximize: [
    { tag: 'path', attrs: { d: 'M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3' } },
  ],
};

// 별칭 (기존 데모 호환)
commonIconPaths.delete = commonIconPaths.trash;

/** 갤러리 표시 순서 */
export const commonIconGallery = [
  // 기본 액션
  'search', 'plus', 'minus', 'close', 'check', 'edit', 'trash', 'delete', 'copy', 'save',
  'download', 'upload', 'share', 'link', 'external-link', 'filter', 'refresh',
  'undo', 'redo', 'printer', 'paperclip',
  // 방향 · 탐색
  'arrow-left', 'arrow-right', 'arrow-up', 'arrow-down',
  'chevron-left', 'chevron-right', 'chevron-up', 'chevron-down',
  // 레이아웃 · 메뉴
  'menu', 'more-vertical', 'more-horizontal', 'grid', 'list', 'home', 'settings',
  // 사용자 · 커뮤니케이션
  'user', 'users', 'mail', 'phone', 'bell', 'message', 'send',
  // 상태 · 피드백
  'info', 'help-circle', 'alert-circle', 'alert-triangle', 'check-circle', 'x-circle',
  // 즐겨찾기 · 반응
  'star', 'heart', 'bookmark', 'thumb-up',
  // 보안 · 인증
  'eye', 'eye-off', 'lock', 'unlock', 'log-in', 'log-out',
  // 날짜 · 파일
  'calendar', 'clock', 'folder', 'file', 'image', 'camera',
  // 위치 · 쇼핑
  'map-pin', 'globe', 'cart', 'credit-card', 'tag',
  // 테마 · 기타
  'sun', 'moon', 'cloud', 'book', 'zoom-in', 'zoom-out', 'maximize',
];
