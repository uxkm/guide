import { createSlotComponentFormatter } from '@/utils/format-slot-component-code';

const formatDropdownCode = createSlotComponentFormatter('Dropdown', {
  defaults: { defaultOpen: false, closeOnSelect: false },
  booleanProps: new Set(['open', 'defaultOpen', 'disabled', 'fit', 'closeOnSelect']),
  slots: [
    { name: 'trigger', wrap: 'template' },
    { name: 'default', wrap: 'direct' },
  ],
});

export { formatDropdownCode };
