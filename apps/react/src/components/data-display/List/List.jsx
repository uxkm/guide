/**
 * List 원본 구현.
 * 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
import { createContext, Fragment, useContext } from 'react';

// 목록 종류마다 올바른 시맨틱 루트와 공통 변형 클래스를 선택합니다.
const VARIANT_TAG = { default: 'ul', bullet: 'ul', ordered: 'ol', definition: 'dl' };
const VARIANT_CLASS = {
  bullet: 'list_bullet',
  ordered: 'list_ordered',
  definition: 'list_definition',
};
const VALID_VARIANTS = new Set(Object.keys(VARIANT_TAG));
const VALID_TAGS = new Set(['ul', 'ol', 'dl', 'div']);

export const ListContext = createContext({ tag: 'ul', variant: 'default' });

// 목록 의미, 외형, 정의 목록 배치와 인라인 CSS 변수를 구성합니다.
export function List({
  children,
  bordered = false,
  split = false,
  block = false,
  size = 'md',
  variant = 'default',
  tag,
  layout = 'block',
  inlineLabelWidth,
  inlineGap,
  descAlign = 'left',
  className = '',
  style,
  role,
  ...props
}) {
  const resolvedVariant = VALID_VARIANTS.has(variant) ? variant : 'default';
  const Root = VALID_TAGS.has(tag) ? tag : VARIANT_TAG[resolvedVariant];
  // variant와 layout prop을 list_* 공통 클래스로 변환합니다.
  const classes = [
    'list',
    VARIANT_CLASS[resolvedVariant],
    bordered && 'list_bordered',
    split && 'list_divider',
    block && 'list_block',
    size === 'compact' && 'list_compact',
    layout === 'inline' && 'list_inline',
    resolvedVariant === 'definition' && descAlign === 'right' && 'list_desc-right',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const rootStyle = { ...style };
  if (layout === 'inline' && inlineLabelWidth)
    rootStyle['--list-inline-label-width'] = inlineLabelWidth;
  if (layout === 'inline' && inlineGap) rootStyle['--list-inline-gap'] = inlineGap;

  // ListItem이 부모 목록 의미에 맞는 태그를 고르도록 context를 제공합니다.
  return (
    <ListContext.Provider value={{ tag: Root, variant: resolvedVariant }}>
      <Root
        {...props}
        className={classes}
        data-component="List"
        role={role ?? (Root === 'div' ? 'list' : undefined)}
        style={rootStyle}
      >
        {children}
      </Root>
    </ListContext.Provider>
  );
}

export function ListItem({
  title,
  description,
  meta,
  tag = 'auto',
  prefix,
  extra,
  actions,
  children,
  className = '',
  role,
  ...props
}) {
  const context = useContext(ListContext);
  // 정의 목록의 title+description 조합은 형제 dt·dd 쌍으로 렌더링합니다.
  const definitionPair = tag === 'auto' && context.tag === 'dl' && Boolean(title && description);
  if (definitionPair) {
    return (
      <Fragment>
        <dt {...props} className={['list_title', className].filter(Boolean).join(' ')}>
          {title}
        </dt>
        <dd className="list_desc">{description}</dd>
      </Fragment>
    );
  }
  // 명시적 태그가 없으면 부모 ul·ol·dl·div 의미에 맞춰 항목 루트를 선택합니다.
  let Root = tag !== 'auto' && ['li', 'dt', 'dd'].includes(tag) ? tag : 'li';
  if (tag === 'auto' && context.tag === 'dl') Root = title ? 'dt' : 'dd';
  if (tag === 'auto' && context.tag === 'div') Root = 'div';
  const hasContent = Boolean(title || description || meta || children);
  return (
    <Root
      {...props}
      className={['list_item', className].filter(Boolean).join(' ')}
      data-component="ListItem"
      role={role ?? (context.tag === 'div' ? 'listitem' : undefined)}
    >
      {prefix}
      {hasContent ? (
        <div className="list_content">
          {children ?? (
            <>
              {title ? <span className="list_title">{title}</span> : null}
              {meta ? <span className="list_meta">{meta}</span> : null}
              {description ? <span className="list_desc">{description}</span> : null}
            </>
          )}
        </div>
      ) : null}
      {extra ? <span className="list_extra">{extra}</span> : null}
      {actions ? <span className="list_action">{actions}</span> : null}
    </Root>
  );
}

export default List;
