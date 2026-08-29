import { Component, computed, contentChildren, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'TreeNode',
  standalone: true,
  template: `
    <li
      class="tree_item"
      data-component="TreeNode"
      role="treeitem"
      [attr.aria-expanded]="showToggle() ? isExpanded() : null"
    >
      <div
        [class]="rowClasses()"
      >
        @if (showToggle()) {
          <button
            type="button"
            [class]="toggleClasses()"
            [attr.aria-expanded]="isExpanded()"
            [attr.aria-label]="toggleLabel()"
            [disabled]="disabled() || null"
            (click)="toggle()"
          ></button>
        } @else {
          <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
        }
        <ng-content select="[prefix]" />
        @if (hasIcon()) {
          <span class="tree_icon" aria-hidden="true"><ng-content select="[icon]" /></span>
        }
        @if (link()) {
          <button type="button" class="tree_link" [disabled]="disabled() || null">
            <ng-content select="[label]">
              <span class="tree_label">{{ label() }}</span>
            </ng-content>
          </button>
        } @else {
          <ng-content select="[label]">
            <span class="tree_label">{{ label() }}</span>
          </ng-content>
        }
        @if (hasMeta()) {
          <span class="tree_meta">
            <ng-content select="[meta]">{{ meta() }}</ng-content>
          </span>
        }
      </div>
      @if (hasChildren()) {
        <ul class="tree" role="group" [hidden]="!isExpanded()">
          <ng-content />
        </ul>
      }
    </li>
  `,
})
export class TreeNode {
  readonly label = input<string | undefined>(undefined);
  readonly expanded = input<boolean | undefined>(undefined);
  readonly selected = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly expandable = input<boolean>(false);
  readonly plusToggle = input<boolean>(false);
  readonly toggleLabel = input<string | undefined>(undefined);
  readonly link = input<boolean>(false);
  readonly meta = input<string | undefined>(undefined);

  readonly expandedChange = output<boolean>();

  readonly isExpanded = signal(true);
  private readonly children = contentChildren('*');
  private readonly iconSlots = contentChildren('[icon]');
  private readonly metaSlots = contentChildren('[meta]');

  readonly hasChildren = computed(() => this.children().length > 0);
  readonly showToggle = computed(() => this.expandable() || this.hasChildren());
  readonly hasIcon = computed(() => this.iconSlots().length > 0);
  readonly hasMeta = computed(
    () => Boolean(this.meta()) || this.metaSlots().length > 0,
  );

  readonly rowClasses = computed(() =>
    ['tree_row', this.selected() && 'is-selected', this.disabled() && 'is-disabled']
      .filter(Boolean)
      .join(' '),
  );

  readonly toggleClasses = computed(() =>
    ['tree_toggle', this.plusToggle() && 'tree_toggle-plus'].filter(Boolean).join(' '),
  );

  constructor() {
    effect(() => {
      const value = this.expanded();
      if (value !== undefined) this.isExpanded.set(value !== false);
    });
  }

  toggle() {
    if (this.disabled()) return;
    const next = !this.isExpanded();
    this.isExpanded.set(next);
    this.expandedChange.emit(next);
  }
}

export default TreeNode;
