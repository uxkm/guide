import { Component, computed, input, output } from '@angular/core';

const VARIANTS: Record<string, { tag: string; className: string }> = {
  text: { tag: 'p', className: '' },
  paragraph: { tag: 'p', className: 'typo_paragraph' },
  lead: { tag: 'p', className: 'typo_lead' },
  caption: { tag: 'p', className: 'typo_caption' },
  label: { tag: 'label', className: 'typo_label' },
  overline: { tag: 'p', className: 'typo_overline' },
  code: { tag: 'code', className: 'typo_code' },
  kbd: { tag: 'kbd', className: 'typo_kbd' },
  pre: { tag: 'pre', className: 'typo_pre' },
  strong: { tag: 'strong', className: 'typo_strong' },
  italic: { tag: 'em', className: 'typo_italic' },
  underline: { tag: 'span', className: 'typo_underline' },
  delete: { tag: 'del', className: 'typo_delete' },
  mark: { tag: 'mark', className: 'typo_mark' },
  sub: { tag: 'sub', className: 'typo_sub' },
  sup: { tag: 'sup', className: 'typo_sup' },
  small: { tag: 'small', className: 'typo_small' },
  link: { tag: 'a', className: 'typo_link' },
  blockquote: { tag: 'blockquote', className: 'typo_blockquote' },
};

@Component({
  selector: 'TypoText',
  standalone: true,
  template: `
    @switch (resolvedTag()) {
      @case ('a') {
        <a [class]="classes()" data-component="TypoText" [href]="href() || '#'" (click)="handleClick($event)">
          <ng-content>{{ label() }}</ng-content>
        </a>
      }
      @case ('label') {
        <label [class]="classes()" data-component="TypoText" [attr.for]="htmlFor()">
          <ng-content>{{ label() }}</ng-content>
        </label>
      }
      @case ('blockquote') {
        <blockquote [class]="classes()" data-component="TypoText" [attr.cite]="cite()">
          <ng-content>{{ label() }}</ng-content>
        </blockquote>
      }
      @case ('code') {
        <code [class]="classes()" data-component="TypoText"><ng-content>{{ label() }}</ng-content></code>
      }
      @case ('kbd') {
        <kbd [class]="classes()" data-component="TypoText"><ng-content>{{ label() }}</ng-content></kbd>
      }
      @case ('pre') {
        <pre [class]="classes()" data-component="TypoText"><ng-content>{{ label() }}</ng-content></pre>
      }
      @case ('strong') {
        <strong [class]="classes()" data-component="TypoText"><ng-content>{{ label() }}</ng-content></strong>
      }
      @case ('em') {
        <em [class]="classes()" data-component="TypoText"><ng-content>{{ label() }}</ng-content></em>
      }
      @case ('del') {
        <del [class]="classes()" data-component="TypoText"><ng-content>{{ label() }}</ng-content></del>
      }
      @case ('mark') {
        <mark [class]="classes()" data-component="TypoText"><ng-content>{{ label() }}</ng-content></mark>
      }
      @case ('sub') {
        <sub [class]="classes()" data-component="TypoText"><ng-content>{{ label() }}</ng-content></sub>
      }
      @case ('sup') {
        <sup [class]="classes()" data-component="TypoText"><ng-content>{{ label() }}</ng-content></sup>
      }
      @case ('small') {
        <small [class]="classes()" data-component="TypoText"><ng-content>{{ label() }}</ng-content></small>
      }
      @default {
        <p [class]="classes()" data-component="TypoText"><ng-content>{{ label() }}</ng-content></p>
      }
    }
  `,
})
export class TypoText {
  readonly hostClass = input<string>('');
  readonly variant = input<string>('text');
  readonly tag = input<string | undefined>(undefined);
  readonly color = input<string | undefined>(undefined);
  readonly size = input<string>('');
  readonly ellipsis = input<number | undefined>(undefined);
  readonly href = input<string | undefined>(undefined);
  readonly htmlFor = input<string | undefined>(undefined);
  readonly cite = input<string | undefined>(undefined);
  readonly label = input<string | undefined>(undefined);

  readonly click = output<Event>();

  readonly config = computed(() => VARIANTS[this.variant()] ?? VARIANTS['text']);
  readonly resolvedTag = computed(() => this.tag() || this.config().tag);

  readonly classes = computed(() => {
    const lines = Number(this.ellipsis());
    const ellipsisClass =
      lines === 1 ? 'text_ellipsis' : lines === 2 || lines === 3 ? `text_ellipsis-${lines}` : '';
    const sizeClass = ['xs', 'sm', 'lg', 'xl'].includes(this.size())
      ? `size_${this.size()}`
      : '';
    return [
      this.config().className,
      this.color() && `color_${this.color()}`,
      sizeClass,
      ellipsisClass,
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' ');
  });

  handleClick(event: Event) {
    if (this.variant() === 'link' && !this.href()) event.preventDefault();
    this.click.emit(event);
  }
}

export const Typography = TypoText;
export default TypoText;
