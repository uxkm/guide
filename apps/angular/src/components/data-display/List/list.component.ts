import {
  Component,
  computed,
  contentChildren,
  forwardRef,
  inject,
  InjectionToken,
  input,
  Signal,
} from '@angular/core';

const VARIANT_TAG: Record<string, string> = {
  default: 'ul',
  bullet: 'ul',
  ordered: 'ol',
  definition: 'dl',
};
const VARIANT_CLASS: Record<string, string> = {
  bullet: 'list_bullet',
  ordered: 'list_ordered',
  definition: 'list_definition',
};
const VALID_VARIANTS = new Set(Object.keys(VARIANT_TAG));
const VALID_TAGS = new Set(['ul', 'ol', 'dl', 'div']);

export interface ListContextValue {
  tag: Signal<string>;
  variant: Signal<string>;
}

export const LIST_CONTEXT = new InjectionToken<ListContextValue>('ListContext');

@Component({
  selector: 'List',
  standalone: true,
  template: `
    @switch (rootTag()) {
      @case ('ul') {
        <ul
          [class]="classes()"
          data-component="List"
          [attr.role]="role() ?? null"
          [style]="rootStyle()"
        >
          <ng-content />
        </ul>
      }
      @case ('ol') {
        <ol
          [class]="classes()"
          data-component="List"
          [attr.role]="role() ?? null"
          [style]="rootStyle()"
        >
          <ng-content />
        </ol>
      }
      @case ('dl') {
        <dl
          [class]="classes()"
          data-component="List"
          [attr.role]="role() ?? null"
          [style]="rootStyle()"
        >
          <ng-content />
        </dl>
      }
      @default {
        <div
          [class]="classes()"
          data-component="List"
          [attr.role]="role() ?? 'list'"
          [style]="rootStyle()"
        >
          <ng-content />
        </div>
      }
    }
  `,
  providers: [{ provide: LIST_CONTEXT, useExisting: forwardRef(() => List) }],
})
export class List {
  readonly hostClass = input<string>('');
  readonly bordered = input<boolean>(false);
  readonly split = input<boolean>(false);
  readonly block = input<boolean>(false);
  readonly size = input<string>('md');
  readonly variant = input<string>('default');
  readonly tag = input<string | undefined>(undefined);
  readonly layout = input<string>('block');
  readonly inlineLabelWidth = input<string | undefined>(undefined);
  readonly inlineGap = input<string | undefined>(undefined);
  readonly descAlign = input<string>('left');
  readonly role = input<string | undefined>(undefined);

  readonly resolvedVariant = computed(() =>
    VALID_VARIANTS.has(this.variant()) ? this.variant() : 'default',
  );

  readonly rootTag = computed(() => {
    const explicit = this.tag();
    if (explicit && VALID_TAGS.has(explicit)) return explicit;
    return VARIANT_TAG[this.resolvedVariant()];
  });

  readonly classes = computed(() =>
    [
      'list',
      VARIANT_CLASS[this.resolvedVariant()],
      this.bordered() && 'list_bordered',
      this.split() && 'list_divider',
      this.block() && 'list_block',
      this.size() === 'compact' && 'list_compact',
      this.layout() === 'inline' && 'list_inline',
      this.resolvedVariant() === 'definition' &&
        this.descAlign() === 'right' &&
        'list_desc-right',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  readonly rootStyle = computed(() => {
    const style: Record<string, string> = {};
    if (this.layout() === 'inline' && this.inlineLabelWidth()) {
      style['--list-inline-label-width'] = this.inlineLabelWidth()!;
    }
    if (this.layout() === 'inline' && this.inlineGap()) {
      style['--list-inline-gap'] = this.inlineGap()!;
    }
    return style;
  });
}

export default List;
