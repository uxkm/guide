import { createSlotComponentFormatter } from '@/utils/format-slot-component-code';

const formatDropdownCode = createSlotComponentFormatter('Dropdown', {
  booleanProps: new Set(['open', 'disabled', 'fit']),
  slots: [
    { name: 'trigger', wrap: 'template' },
    { name: 'default', wrap: 'direct' },
  ],
});

export { formatDropdownCode };
