/**
 * React-style child/portal helpers for ported Qwik components.
 */
import { component$, Slot, useVisibleTask$, type JSXOutput, type QRL } from '@builder.io/qwik';

export function toChildArray(children: JSXOutput | JSXOutput[] | undefined) {
  if (children == null) return [];
  return Array.isArray(children) ? children : [children];
}

export function isQwikElement(value: unknown): value is JSXOutput {
  return value != null && (typeof value === 'object' || typeof value === 'function' || typeof value === 'string');
}

export function mergeElementProps(
  element: JSXOutput,
  props: Record<string, unknown>,
): JSXOutput {
  if (element == null || typeof element !== 'object') return element;
  const existing = (element as { props?: Record<string, unknown> }).props ?? {};
  return {
    ...(element as object),
    props: { ...existing, ...props },
  } as JSXOutput;
}

export const Portal = component$<{ mount?: Element | null }>(({ mount }) => {
  useVisibleTask$(({ cleanup }) => {
    const target = mount;
    const host = document.querySelector('[data-qwik-portal-host]');
    if (!target || !host) return;
    target.appendChild(host);
    cleanup(() => {
      if (host.parentNode === target) target.removeChild(host);
    });
  });

  return (
    <div data-qwik-portal-host="" style={{ display: 'contents' }}>
      <Slot />
    </div>
  );
});
