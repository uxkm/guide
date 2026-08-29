import { Component, computed, contentChildren, inject, input } from '@angular/core';
import { LIST_CONTEXT } from './list.component';

@Component({
  selector: 'ListItem',
  standalone: true,
  template: `
    @if (definitionPair()) {
      <dt [class]="titleClasses()" data-component="ListItem">{{ title() }}</dt>
      <dd class="list_desc">{{ description() }}</dd>
    } @else {
      @switch (rootTag()) {
        @case ('dt') {
          <dt [class]="itemClasses()" data-component="ListItem" [attr.role]="itemRole() ?? null">
            <ng-content select="[prefix]" />
            @if (hasContent()) {
              <div class="list_content">
                <ng-content>
                  @if (title()) { <span class="list_title">{{ title() }}</span> }
                  @if (meta()) { <span class="list_meta">{{ meta() }}</span> }
                  @if (description()) { <span class="list_desc">{{ description() }}</span> }
                </ng-content>
              </div>
            }
            @if (hasExtra()) { <span class="list_extra"><ng-content select="[extra]" /></span> }
            @if (hasActions()) { <span class="list_action"><ng-content select="[actions]" /></span> }
          </dt>
        }
        @case ('dd') {
          <dd [class]="itemClasses()" data-component="ListItem" [attr.role]="itemRole() ?? null">
            <ng-content select="[prefix]" />
            @if (hasContent()) {
              <div class="list_content">
                <ng-content>
                  @if (title()) { <span class="list_title">{{ title() }}</span> }
                  @if (meta()) { <span class="list_meta">{{ meta() }}</span> }
                  @if (description()) { <span class="list_desc">{{ description() }}</span> }
                </ng-content>
              </div>
            }
            @if (hasExtra()) { <span class="list_extra"><ng-content select="[extra]" /></span> }
            @if (hasActions()) { <span class="list_action"><ng-content select="[actions]" /></span> }
          </dd>
        }
        @case ('div') {
          <div [class]="itemClasses()" data-component="ListItem" role="listitem">
            <ng-content select="[prefix]" />
            @if (hasContent()) {
              <div class="list_content">
                <ng-content>
                  @if (title()) { <span class="list_title">{{ title() }}</span> }
                  @if (meta()) { <span class="list_meta">{{ meta() }}</span> }
                  @if (description()) { <span class="list_desc">{{ description() }}</span> }
                </ng-content>
              </div>
            }
            @if (hasExtra()) { <span class="list_extra"><ng-content select="[extra]" /></span> }
            @if (hasActions()) { <span class="list_action"><ng-content select="[actions]" /></span> }
          </div>
        }
        @default {
          <li [class]="itemClasses()" data-component="ListItem" [attr.role]="itemRole() ?? null">
            <ng-content select="[prefix]" />
            @if (hasContent()) {
              <div class="list_content">
                <ng-content>
                  @if (title()) { <span class="list_title">{{ title() }}</span> }
                  @if (meta()) { <span class="list_meta">{{ meta() }}</span> }
                  @if (description()) { <span class="list_desc">{{ description() }}</span> }
                </ng-content>
              </div>
            }
            @if (hasExtra()) { <span class="list_extra"><ng-content select="[extra]" /></span> }
            @if (hasActions()) { <span class="list_action"><ng-content select="[actions]" /></span> }
          </li>
        }
      }
    }
  `,
})
export class ListItem {
  readonly hostClass = input<string>('');
  readonly title = input<string | undefined>(undefined);
  readonly description = input<string | undefined>(undefined);
  readonly meta = input<string | undefined>(undefined);
  readonly tag = input<string>('auto');
  readonly role = input<string | undefined>(undefined);

  private readonly context = inject(LIST_CONTEXT, { optional: true });
  private readonly projected = contentChildren('*');
  private readonly prefixProjected = contentChildren('[prefix]');
  private readonly extraProjected = contentChildren('[extra]');
  private readonly actionsProjected = contentChildren('[actions]');

  readonly definitionPair = computed(
    () =>
      this.tag() === 'auto' &&
      this.context?.tag() === 'dl' &&
      Boolean(this.title() && this.description()),
  );

  readonly rootTag = computed(() => {
    const itemTag = this.tag();
    if (itemTag !== 'auto' && ['li', 'dt', 'dd'].includes(itemTag)) return itemTag;
    const parentTag = this.context?.tag() ?? 'ul';
    if (this.tag() === 'auto' && parentTag === 'dl') return this.title() ? 'dt' : 'dd';
    if (this.tag() === 'auto' && parentTag === 'div') return 'div';
    return 'li';
  });

  readonly hasContent = computed(() =>
    Boolean(
      this.title() ||
        this.description() ||
        this.meta() ||
        this.projected().length > 0,
    ),
  );

  readonly hasExtra = computed(() => this.extraProjected().length > 0);
  readonly hasActions = computed(() => this.actionsProjected().length > 0);

  readonly itemRole = computed(() =>
    this.role() ?? (this.context?.tag() === 'div' ? 'listitem' : undefined),
  );

  readonly titleClasses = computed(() =>
    ['list_title', this.hostClass()].filter(Boolean).join(' '),
  );

  readonly itemClasses = computed(() =>
    ['list_item', this.hostClass()].filter(Boolean).join(' '),
  );
}

export default ListItem;
