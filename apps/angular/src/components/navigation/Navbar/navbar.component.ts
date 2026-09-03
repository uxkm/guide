import { Component, computed, input, signal } from '@angular/core';
import Button from '../../basic/Button/button.component';
import Icon from '../../basic/Icon/icon.component';

const SIZES = new Set(['sm', 'md', 'lg']);

@Component({
  selector: 'Navbar',
  standalone: true,
  imports: [Button, Icon],
  template: `
    <header
      [class]="classes()"
      [attr.aria-label]="accessibleName()"
      data-component="Navbar"
      [attr.data-navbar]="responsive() || null"
    >
      <div class="navbar_container">
        <a
          href="#"
          [class]="brandLinkClass()"
          [style]="brandLinkStyle()"
          [attr.aria-label]="brandLinkAriaLabel()"
          (click)="$event.preventDefault()"
        >
          @if (brandContent()) {
            <ng-container>{{ brandContent() }}</ng-container>
          } @else if (brandBackground()) {
            @if (brand()) {
              <span class="navbar_brand-sr">{{ brand() }}</span>
            }
          } @else if (brandSrc()) {
            <img class="navbar_brand-image" [src]="brandSrc()" [alt]="brandAlt() ?? brand() ?? ''" />
            @if (brand()) {
              <span class="navbar_brand-text">{{ brand() }}</span>
            }
          } @else {
            <ng-content select="[brand-icon]" />
            {{ brand() }}
          }
        </a>
        @if (responsive()) {
          <Button
            variant="ghost"
            iconOnly
            hostClass="navbar_toggle"
            [ariaLabel]="open() ? '메뉴 닫기' : '메뉴 열기'"
            [ariaExpanded]="open()"
            [ariaControls]="targetId()"
            (click)="toggleOpen()"
          >
            <Icon name="menu" size="sm" hostClass="navbar_toggle-icon-open" />
            <Icon name="close" size="sm" hostClass="navbar_toggle-icon-close" />
          </Button>
        }
        <div class="navbar_collapse" [id]="targetId()">
          <nav class="navbar_nav" [attr.aria-label]="accessibleName() + ' 주요 메뉴'">
            @if (items()) {
              <ng-container>{{ items() }}</ng-container>
            } @else {
              <ng-content />
            }
          </nav>
          @if (search()) {
            <div class="navbar_search"><ng-container>{{ search() }}</ng-container></div>
          }
          @if (actions()) {
            <div class="navbar_actions"><ng-container>{{ actions() }}</ng-container></div>
          }
        </div>
      </div>
    </header>
  `,
})
export class Navbar {
  readonly hostClass = input<string>('');
  readonly brand = input<string | undefined>(undefined);
  readonly brandSrc = input<string | undefined>(undefined);
  readonly brandAlt = input<string | undefined>(undefined);
  readonly brandBackground = input<string | undefined>(undefined);
  readonly ariaLabel = input<string | undefined>(undefined);
  readonly size = input<string>('md');
  readonly borderless = input<boolean>(false);
  readonly dark = input<boolean>(false);
  readonly sticky = input<boolean>(false);
  readonly responsive = input<boolean>(false);
  readonly collapseId = input<string | undefined>(undefined);
  readonly brandContent = input<unknown>(undefined);
  readonly items = input<unknown>(undefined);
  readonly search = input<unknown>(undefined);
  readonly actions = input<unknown>(undefined);

  readonly open = signal(false);
  private readonly generatedId = `navbar-collapse-${Math.random().toString(36).slice(2, 9)}`;

  readonly resolvedSize = computed(() => (SIZES.has(this.size()) ? this.size() : 'md'));
  readonly targetId = computed(() => this.collapseId() || this.generatedId);

  readonly accessibleName = computed(
    () => this.ariaLabel() || this.brandAlt() || (typeof this.brand() === 'string' ? this.brand() : '') || '사이트',
  );

  readonly brandLinkClass = computed(() =>
    ['navbar_brand', this.brandBackground() && 'navbar_brand-bg'].filter(Boolean).join(' '),
  );

  readonly brandLinkStyle = computed(() =>
    this.brandBackground()
      ? ({ '--navbar-brand-bg-image': `url("${this.brandBackground()}")` } as Record<string, string>)
      : undefined,
  );

  readonly brandLinkAriaLabel = computed(() =>
    this.brandBackground() && !this.brand() ? this.accessibleName() : undefined,
  );

  readonly classes = computed(() =>
    [
      'navbar',
      this.resolvedSize() !== 'md' && `navbar_${this.resolvedSize()}`,
      this.borderless() && 'navbar_borderless',
      this.dark() && 'navbar_dark',
      this.sticky() && 'navbar_sticky',
      this.open() && 'is-open',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  toggleOpen() {
    this.open.update((value) => !value);
  }
}

export default Navbar;
