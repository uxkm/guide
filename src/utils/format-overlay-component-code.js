import { createSlotComponentFormatter } from '@/utils/format-slot-component-code';

export const formatModalCode = createSlotComponentFormatter('Modal', {
  defaults: { size: 'md', backdrop: true },
  booleanProps: new Set(['scrollable', 'open']),
  falseExplicitProps: new Set(['backdrop']),
  skipProps: ['title'],
  slots: [
    { name: 'header', wrap: 'template' },
    { name: 'default', wrap: 'direct' },
    { name: 'footer', wrap: 'template' },
  ],
});

export const formatDrawerCode = createSlotComponentFormatter('Drawer', {
  defaults: { size: 'md', placement: 'right' },
  booleanProps: new Set(['noBackdrop', 'openOnLoad', 'open']),
  skipProps: ['title'],
  slots: [
    { name: 'header', wrap: 'template' },
    { name: 'default', wrap: 'direct' },
    { name: 'footer', wrap: 'template' },
  ],
});

export const formatUploadCode = createSlotComponentFormatter('Upload', {
  defaults: { variant: 'button', size: 'md' },
  booleanProps: new Set(['disabled', 'fit', 'multiple', 'dragover', 'error']),
  slots: [
    { name: 'trigger', wrap: 'template' },
    { name: 'hint', wrap: 'direct' },
    { name: 'default', wrap: 'direct' },
    { name: 'cards', wrap: 'direct' },
  ],
});

export const formatDatePickerCode = createSlotComponentFormatter('DatePicker', {
  defaults: { size: 'md' },
  booleanProps: new Set(['disabled', 'error', 'success', 'open', 'fit', 'block', 'inline', 'clearable', 'panelWide']),
  slots: [{ name: 'panel', wrap: 'direct' }],
});

export const formatEmptyCode = createSlotComponentFormatter('Empty', {
  defaults: { size: 'md' },
  booleanProps: new Set(['simple', 'block']),
  slots: [
    { name: 'image', wrap: 'template' },
    { name: 'footer', wrap: 'template' },
  ],
});

export const formatAlertCode = createSlotComponentFormatter('Alert', {
  defaults: { color: 'info', size: 'md', role: 'alert' },
  booleanProps: new Set(['closable', 'showIcon', 'ripple']),
  skipProps: ['role'],
  slots: [{ name: 'icon', wrap: 'template' }],
});
