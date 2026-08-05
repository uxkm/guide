import { createComponentFormatter } from '@/utils/format-component-code';

export const formatTimelineCode = createComponentFormatter('Timeline', {
  defaults: { size: 'md', tag: 'ol', iconSize: 'md' },
  booleanProps: new Set(['card', 'alternate', 'horizontal', 'labelCol', 'icon']),
  slotContent: { default: '...' },
  selfClosing: false,
});

export const formatTimelineItemCode = createComponentFormatter('TimelineItem', {
  defaults: { color: 'primary' },
  booleanProps: new Set(['active', 'pending', 'outline']),
  slotContent: {
    default: '...',
    dot: '...',
    meta: '...',
  },
  selfClosing: true,
});
