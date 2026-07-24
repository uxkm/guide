import {
  createContext,
  createElement,
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  deriveDemoCaptionFromNode,
  formatDemoComment,
  isCaptionMarker,
} from '@/utils/demo-caption';
import { formatAccordionCode } from '@/utils/format-accordion-code';
import { formatButtonCode } from '@/utils/format-button-code';
import { formatCarouselCode } from '@/utils/format-carousel-code';
import { formatIconCode, formatIconCodeFromDom, isIconDomNode } from '@/utils/format-icon-code';
import { formatNavbarCode } from '@/utils/format-navbar-code';
import { formatNavbarItemCode } from '@/utils/format-navbar-item-code';
import { formatNavbarListCode } from '@/utils/format-navbar-list-code';
import {
  formatCollapseExternalCode,
  formatCollapseGroupCode,
} from '@/utils/format-collapse-code';
import { formatPopoverCode, formatTooltipCode } from '@/utils/format-overlay-code';
import { formatDropdownCode } from '@/utils/format-dropdown-code';
import {
  formatDatePickerCode,
  formatDrawerCode,
  formatEmptyCode,
  formatAlertCode,
  formatModalCode,
  formatUploadCode,
} from '@/utils/format-overlay-component-code';
import { formatInputGroupCode } from '@/utils/format-input-code';
import { openComponentTag } from '@/utils/format-slot-component-code';
import { formatTabsCode } from '@/utils/format-tabs-code';
import { formatTableCode } from '@/utils/format-table-code';
import { resolveRegisteredCode } from '@/utils/resolve-demo-code';

const DemoCodeContext = createContext(null);

const demoSectionStores = new Map();

export function getDemoRegistryForElement(el) {
  if (!(el instanceof HTMLElement)) return null;

  const sectionRoot = el.closest('[data-demo-section]');
  const sectionId = sectionRoot?.getAttribute('data-demo-section');

  if (sectionId && demoSectionStores.has(sectionId)) {
    return demoSectionStores.get(sectionId).registry;
  }

  return null;
}

export function resolveRegistryForNode(node, registry) {
  const demoId = node?.dataset?.demoId;

  if (demoId && registry?.has(demoId)) {
    return registry;
  }

  const fallback = getDemoRegistryForElement(node);
  if (demoId && fallback?.has(demoId)) {
    return fallback;
  }

  return registry ?? fallback;
}

function resolveDemoElement(refValue) {
  if (!refValue) return null;
  if (refValue instanceof HTMLElement) return refValue;
  if (refValue.current instanceof HTMLElement) return refValue.current;
  if (refValue.$el instanceof HTMLElement) return refValue.$el;
  return null;
}

function resolveDemoContext(fromEl, injectedContext = null) {
  if (fromEl instanceof HTMLElement) {
    const sectionRoot = fromEl.closest('[data-demo-section]');
    const sectionId = sectionRoot?.getAttribute('data-demo-section');

    if (sectionId && demoSectionStores.has(sectionId)) {
      return demoSectionStores.get(sectionId);
    }
  }

  return injectedContext;
}

function createDemoCodeStore(sectionId) {
  const registry = new Map();
  let revision = 0;
  const listeners = new Set();

  function notify() {
    listeners.forEach((listener) => listener());
  }

  function register(id, code) {
    const resolved = resolveRegisteredCode(code);
    const prev = registry.get(id);
    const prevResolved = prev !== undefined ? resolveRegisteredCode(prev) : undefined;

    if (prevResolved === resolved) return;
    registry.set(id, code);
    revision += 1;
    notify();
  }

  function unregister(id) {
    if (!registry.has(id)) return;
    registry.delete(id);
    revision += 1;
    notify();
  }

  function buildCode(root) {
    if (!root) return '';
    return buildDemoCode(root, registry);
  }

  function subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  function getRevision() {
    return revision;
  }

  return { sectionId, registry, register, unregister, buildCode, subscribe, getRevision };
}

/** Vue slots 대응 — demo code formatter용 */
export function createDemoSlots(slotMap = {}) {
  const slots = {};

  Object.entries(slotMap).forEach(([name, value]) => {
    if (value === undefined || value === null || value === false) return;

    slots[name] = () => {
      if (typeof value === 'string' || typeof value === 'number') {
        return [{ children: String(value) }];
      }
      return [{ type: 'complex' }];
    };
  });

  return slots;
}

function useDemoCodeRegistration(registerFn, options = {}) {
  const injectedContext = useContext(DemoCodeContext);
  const demoId = useId();
  const { when } = options;
  const activeContextRef = useRef(null);
  const revision = useDemoRevision(injectedContext);

  useLayoutEffect(() => {
    const payload = registerFn();
    void revision;

    if (!payload) {
      activeContextRef.current?.unregister(demoId);
      activeContextRef.current = null;
      return undefined;
    }

    const { el, context: explicitContext, code } = payload;
    const context = explicitContext ?? resolveDemoContext(el, injectedContext);

    if (activeContextRef.current && activeContextRef.current !== context) {
      activeContextRef.current.unregister(demoId);
    }

    activeContextRef.current = context;

    if (!context) return undefined;

    if (!el || (when && !when())) {
      context.unregister(demoId);
      return undefined;
    }

    el.dataset.demoId = demoId;
    context.register(demoId, code);

    return () => {
      activeContextRef.current?.unregister(demoId);
      activeContextRef.current = null;
    };
  });
}

function useDemoRevision(context) {
  const [, setTick] = useState(0);

  useEffect(() => {
    if (!context?.subscribe) return undefined;
    return context.subscribe(() => setTick((value) => value + 1));
  }, [context]);

  return context?.getRevision?.() ?? 0;
}

function serializeAttrs(el) {
  const parts = [];

  if (el.className) {
    parts.push(`class="${el.className}"`);
  }

  [...el.attributes].forEach((attr) => {
    if (attr.name === 'class' || attr.name.startsWith('data-')) return;
    parts.push(`${attr.name}="${attr.value}"`);
  });

  return parts.length ? ` ${parts.join(' ')}` : '';
}

function dedentBlock(text) {
  const lines = text.split('\n');
  const indents = lines
    .filter((line) => line.trim())
    .map((line) => line.match(/^(\s*)/)?.[1].length ?? 0);

  if (!indents.length) return '';

  const min = Math.min(...indents);
  return lines
    .map((line) => (line.trim() ? line.slice(min) : ''))
    .join('\n')
    .trimEnd();
}

function indentBlock(text, level) {
  const dedented = dedentBlock(text);
  if (!dedented) return '';

  const pad = '  '.repeat(level);
  return dedented
    .split('\n')
    .map((line) => (line.trim() ? pad + line : ''))
    .join('\n');
}

const VOID_TAGS = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]);

function isSelfClosingComponentCode(code) {
  return /\/>\s*$/.test(code.trim());
}

function hasSlotTemplates(code) {
  return /<template\s+#/.test(code);
}

function hasUnfilledSlotPlaceholders(code) {
  const hasDefaultPlaceholder = /\n  (?:\.\.\.|…)/.test(code);

  if (hasSlotTemplates(code)) {
    const hasTemplatePlaceholder = [
      ...code.matchAll(/<template\s+#([\w-]+)>([\s\S]*?)<\/template>/g),
    ].some(([, , inner]) => isPlaceholderSlotContent(inner));

    return hasTemplatePlaceholder || hasDefaultPlaceholder;
  }

  return hasDefaultPlaceholder;
}

function isPlaceholderSlotContent(text) {
  const trimmed = text.trim();
  if (trimmed === '...' || trimmed === '…' || /^<!--[\s\S]*-->$/s.test(trimmed)) {
    return true;
  }

  return /^<p>…<\/p>$/.test(trimmed);
}

function isMergeableComponentBody(code) {
  const trimmed = code.trim();
  if (isSelfClosingComponentCode(trimmed)) return false;

  const match = trimmed.match(/^<[^>]+>([\s\S]*)<\/[A-Za-z][\w-]*>\s*$/);
  if (!match) return false;

  const inner = match[1].replace(/<template\s+#[\w-]+>[\s\S]*?<\/template>/g, '').trim();
  return !inner;
}

function serializeSlotRegion(node, registry) {
  return [...node.childNodes]
    .map((child) => {
      if (child.nodeType === Node.ELEMENT_NODE && child.classList?.contains('upload_input')) {
        return '';
      }
      return serializeNode(child, resolveRegistryForNode(child, registry) ?? registry, 0);
    })
    .filter(Boolean);
}

function fillSlotPlaceholders(registered, rootNode, registry) {
  let result = dedentBlock(registered);
  const templates = [...result.matchAll(/<template\s+#([\w-]+)>([\s\S]*?)<\/template>/g)];

  templates.forEach(([, slotName, inner]) => {
    if (!isPlaceholderSlotContent(inner)) return;

    const slotHost = rootNode.querySelector(`[data-demo-slot="${slotName}"]`);
    if (!slotHost) return;

    const childBlocks = serializeSlotRegion(slotHost, registry);
    if (!childBlocks.length) return;

    const content = childBlocks.map((block) => indentBlock(block, slotName === 'default' ? 1 : 2)).join('\n');
    const replacement =
      slotName === 'default'
        ? content
        : [`  <template #${slotName}>`, content, '  </template>'].join('\n');

    result = result.replace(
      new RegExp(`<template #${slotName}>[\\s\\S]*?<\\/template>`),
      replacement,
    );
  });

  if (/\n  (?:\.\.\.|…)/.test(result)) {
    const slotHost = rootNode.querySelector('[data-demo-slot="default"]');
    if (slotHost) {
      const childBlocks = serializeSlotRegion(slotHost, registry);
      if (childBlocks.length) {
        const content = childBlocks.map((block) => indentBlock(block, 1)).join('\n');
        result = result.replace(/\n  (?:\.\.\.|…)/, `\n${content}`);
      }
    }
  }

  return result;
}

function mergeComponentCodeWithChildren(registered, childLines) {
  const trimmed = dedentBlock(registered);

  if (isSelfClosingComponentCode(trimmed)) {
    const openTag = trimmed.replace(/\s*\/>\s*$/, '>');
    const name = openTag.match(/^<(\w+)/)?.[1] ?? 'Component';
    const children = childLines.map((child) => indentBlock(child, 1)).join('\n');
    return [`${openTag}`, children, `</${name}>`].join('\n');
  }

  const match = trimmed.match(/^<([^>]+)>([\s\S]*)<\/(\w+)>\s*$/);
  if (!match) {
    return trimmed;
  }

  const [, openAttrs, inner, closeName] = match;
  if (inner.trim()) {
    return trimmed;
  }

  const children = childLines.map((child) => indentBlock(child, 1)).join('\n');
  return [`<${openAttrs}>`, children, `</${closeName}>`].join('\n');
}

function hasDeclarativeProps(code) {
  return /^<\w+[^>]+\s[\w:.@-]+=/.test(code.trim());
}

function collectRegisteredChildLines(node, registry) {
  const lines = [];

  function walk(element) {
    [...element.children].forEach((child) => {
      if (child.dataset?.demoFragmentPart !== undefined) return;

      const childDemoId = child.dataset?.demoId;
      const resolvedRegistry = resolveRegistryForNode(child, registry);

      if (childDemoId && resolvedRegistry?.has(childDemoId)) {
        if (child.hasAttribute('data-demo-slot')) {
          return;
        }

        const serialized = serializeNode(child, resolvedRegistry, 0);
        if (serialized) lines.push(serialized);
        return;
      }

      walk(child);
    });
  }

  walk(node);
  return lines;
}

function serializeElementNode(node, registry, level) {
  const tag = node.tagName.toLowerCase();
  const attrs = serializeAttrs(node);
  const pad = '  '.repeat(level);

  if (VOID_TAGS.has(tag)) {
    return `${pad}<${tag}${attrs}>`;
  }

  const childLines = [...node.childNodes]
    .map((child) => serializeNode(child, registry, level + 1))
    .filter(Boolean);

  const open = `${pad}<${tag}${attrs}>`;
  const close = `${pad}</${tag}>`;

  if (!childLines.length) {
    return open + close;
  }

  return [open, ...childLines, close].join('\n');
}

function serializeNode(node, registry, level = 0) {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent.trim();
    return text ? indentBlock(text, level) : '';
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return '';
  }

  if (node.dataset?.demoFragmentPart !== undefined) {
    return '';
  }

  if (isCaptionMarker(node)) {
    return '';
  }

  const demoId = node.dataset?.demoId;
  const resolvedRegistry = resolveRegistryForNode(node, registry);

  if (demoId && resolvedRegistry?.has(demoId)) {
    const registered = resolvedRegistry.get(demoId);
    let resolved = dedentBlock(resolveRegisteredCode(registered));
    const childLines = [...node.childNodes]
      .map((child) => serializeNode(child, resolvedRegistry, 0))
      .filter(Boolean);
    const registeredChildLines = collectRegisteredChildLines(node, resolvedRegistry);

    if (hasUnfilledSlotPlaceholders(resolved)) {
      resolved = fillSlotPlaceholders(resolved, node, resolvedRegistry);
    } else if (registeredChildLines.length && isMergeableComponentBody(resolved)) {
      resolved = mergeComponentCodeWithChildren(resolved, registeredChildLines);
    }

    if (
      childLines.length &&
      isMergeableComponentBody(resolved) &&
      !isSelfClosingComponentCode(resolved) &&
      !hasSlotTemplates(resolved) &&
      !hasDeclarativeProps(resolved)
    ) {
      resolved = mergeComponentCodeWithChildren(resolved, childLines);
    } else if (
      isSelfClosingComponentCode(resolved) &&
      !hasSlotTemplates(resolved) &&
      !hasDeclarativeProps(resolved)
    ) {
      const linesToMerge = childLines.length ? childLines : registeredChildLines;
      if (linesToMerge.length) {
        resolved = mergeComponentCodeWithChildren(resolved, linesToMerge);
      }
    }

    return indentBlock(resolved, level);
  }

  if (isIconDomNode(node)) {
    const iconCode = formatIconCodeFromDom(node);
    if (iconCode) return indentBlock(iconCode, level);
  }

  return serializeElementNode(node, resolvedRegistry ?? registry, level);
}

function getMeaningfulNodes(root) {
  return [...root.childNodes].filter((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      return Boolean(node.textContent.trim());
    }

    return node.nodeType === Node.ELEMENT_NODE;
  });
}

function buildDemoCode(root, registry) {
  const nodes = getMeaningfulNodes(root);
  const elements = nodes.filter((node) => node.nodeType === Node.ELEMENT_NODE && !isCaptionMarker(node));
  const shouldAnnotate = elements.length >= 2;
  const output = [];
  let exampleIndex = 0;

  nodes.forEach((node, index) => {
    if (isCaptionMarker(node)) {
      const text = node.dataset.demoCaption || node.textContent.trim();
      if (text) output.push(formatDemoComment(text));
      return;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) return;

    const prev = index > 0 ? nodes[index - 1] : null;

    if (shouldAnnotate && (!prev || !isCaptionMarker(prev))) {
      const caption = deriveDemoCaptionFromNode(node, registry);

      if (caption) {
        output.push(formatDemoComment(caption));
      } else {
        exampleIndex += 1;
        output.push(formatDemoComment(`예시 ${exampleIndex}`));
      }
    }

    const serialized = serializeNode(node, registry, 0);
    if (serialized) output.push(serialized);
  });

  return output.join('\n\n');
}

export function DemoCodeProvider({ children, sectionId: sectionIdProp }) {
  const generatedId = useId();
  const sectionId = sectionIdProp ?? generatedId;

  const store = useMemo(() => {
    const created = createDemoCodeStore(sectionId);
    demoSectionStores.set(sectionId, created);
    return created;
  }, [sectionId]);

  useEffect(() => {
    demoSectionStores.set(sectionId, store);
    return () => {
      demoSectionStores.delete(sectionId);
    };
  }, [sectionId, store]);

  return createElement(DemoCodeContext.Provider, { value: store }, children);
}

export function useProvideDemoCode() {
  const generatedId = useId();
  const storeRef = useRef(null);

  if (!storeRef.current) {
    storeRef.current = createDemoCodeStore(generatedId);
    demoSectionStores.set(generatedId, storeRef.current);
  }

  useEffect(() => {
    return () => {
      demoSectionStores.delete(generatedId);
    };
  }, [generatedId]);

  return storeRef.current;
}

export function useButtonDemoCode(props, slots, buttonRef, attrs = {}) {
  return useDemoCodeRegistration(() => {
    const el = resolveDemoElement(buttonRef);
    if (!el) return null;

    return {
      el,
      code: formatButtonCode(props, slots, attrs, {
        'icon-before': slots['icon-before']?.(),
        'icon-after': slots['icon-after']?.(),
      }),
    };
  });
}

export function useAccordionDemoCode(props, itemsRef, rootRef, attrs = {}) {
  return useDemoCodeRegistration(() => {
    const el = resolveDemoElement(rootRef);
    if (!el) return null;

    const items = itemsRef.current ?? itemsRef;
    items?.forEach?.((item) => {
      void item.isOpen?.value ?? item.isOpen;
    });

    return {
      el,
      code: formatAccordionCode(props, items, attrs),
    };
  });
}

export function useCollapseGroupDemoCode(props, panelsRef, rootRef, attrs = {}) {
  return useDemoCodeRegistration(() => {
    const el = resolveDemoElement(rootRef);
    if (!el) return null;

    const panels = panelsRef.current ?? panelsRef;
    panels?.forEach?.((panel) => {
      void panel.isOpen?.value ?? panel.isOpen;
    });

    return {
      el,
      code: formatCollapseGroupCode(props, panels, attrs),
    };
  });
}

export function useCollapseExternalDemoCode(props, rootRef, attrs = {}, isOpenRef = null) {
  return useDemoCodeRegistration(() => {
    const el = resolveDemoElement(rootRef);
    if (!el) return null;

    void (isOpenRef?.current ?? isOpenRef?.value ?? isOpenRef);

    return {
      el,
      code: formatCollapseExternalCode(props, attrs, isOpenRef),
    };
  });
}

export function useIconDemoCode(props, rootRef, attrs = {}) {
  const injectedContext = useContext(DemoCodeContext);
  const revision = useDemoRevision(injectedContext);

  return useDemoCodeRegistration(() => {
    const el = resolveDemoElement(rootRef);
    if (!el) return null;

    void revision;
    const context = resolveDemoContext(el, injectedContext);

    return {
      el,
      context,
      code: () => formatIconCode(props, attrs, el),
    };
  });
}

export function useNavbarListDemoCode(rootRef) {
  const injectedContext = useContext(DemoCodeContext);
  const revision = useDemoRevision(injectedContext);

  return useDemoCodeRegistration(() => {
    const el = resolveDemoElement(rootRef);
    if (!el) return null;

    void revision;
    const context = resolveDemoContext(el, injectedContext);

    return {
      el,
      code: () => formatNavbarListCode(el, context?.registry),
    };
  });
}

export function useNavbarItemDemoCode(props, rootRef) {
  const injectedContext = useContext(DemoCodeContext);
  const revision = useDemoRevision(injectedContext);

  return useDemoCodeRegistration(() => {
    const el = resolveDemoElement(rootRef);
    if (!el) return null;

    void revision;
    const context = resolveDemoContext(el, injectedContext);

    return {
      el,
      code: () => formatNavbarItemCode(props, el, context?.registry),
    };
  });
}

export function useNavbarDemoCode(props, rootRef, attrs = {}) {
  const injectedContext = useContext(DemoCodeContext);
  const revision = useDemoRevision(injectedContext);

  return useDemoCodeRegistration(() => {
    const el = resolveDemoElement(rootRef);
    if (!el) return null;

    void revision;
    const context = resolveDemoContext(el, injectedContext);

    return {
      el,
      code: () => formatNavbarCode(props, attrs, el, context?.registry),
    };
  });
}

export function useTableDemoCode(props, slots, rootRef, attrs = {}) {
  const injectedContext = useContext(DemoCodeContext);
  const revision = useDemoRevision(injectedContext);

  return useDemoCodeRegistration(() => {
    const el = resolveDemoElement(rootRef);
    if (!el) return null;

    void revision;
    const context = resolveDemoContext(el, injectedContext);

    return {
      el,
      context,
      code: () => formatTableCode(props, slots, attrs, el, context?.registry),
    };
  });
}

export function useComponentDemoCode(formatter, props, slots, rootRef, attrs = {}, options = {}) {
  const { when } = options;

  return useDemoCodeRegistration(
    () => {
      if (!formatter) return null;

      const el = resolveDemoElement(rootRef);
      if (!el) return null;

      return {
        el,
        code: formatter(props, slots, attrs),
      };
    },
    {
      when: when ? () => when(props) : undefined,
    },
  );
}

export function usePopoverDemoCode(props, rootRef, attrs = {}) {
  const injectedContext = useContext(DemoCodeContext);
  const revision = useDemoRevision(injectedContext);

  return useDemoCodeRegistration(() => {
    const el = resolveDemoElement(rootRef);
    if (!el) return null;

    void revision;
    const context = resolveDemoContext(el, injectedContext);

    return {
      el,
      code: () =>
        formatPopoverCode(props, attrs, el, getDemoRegistryForElement(el) ?? context?.registry),
    };
  });
}

export function useDropdownDemoCode(props, rootRef, attrs = {}) {
  const injectedContext = useContext(DemoCodeContext);
  const revision = useDemoRevision(injectedContext);

  return useDemoCodeRegistration(() => {
    const el = resolveDemoElement(rootRef);
    if (!el) return null;

    void revision;
    const context = resolveDemoContext(el, injectedContext);

    return {
      el,
      code: () =>
        formatDropdownCode(props, attrs, el, getDemoRegistryForElement(el) ?? context?.registry),
    };
  });
}

function useSlotComponentDemoCode(formatter, props, rootRef, attrs = {}) {
  const injectedContext = useContext(DemoCodeContext);
  const revision = useDemoRevision(injectedContext);

  return useDemoCodeRegistration(() => {
    const el = resolveDemoElement(rootRef);
    if (!el) return null;

    void revision;
    const context = resolveDemoContext(el, injectedContext);

    return {
      el,
      code: () =>
        formatter(props, attrs, el, getDemoRegistryForElement(el) ?? context?.registry),
    };
  });
}

export function useModalDemoCode(props, rootRef, attrs = {}) {
  return useSlotComponentDemoCode(formatModalCode, props, rootRef, attrs);
}

export function useDrawerDemoCode(props, rootRef, attrs = {}) {
  return useSlotComponentDemoCode(formatDrawerCode, props, rootRef, attrs);
}

export function useUploadDemoCode(props, rootRef, attrs = {}) {
  return useSlotComponentDemoCode(formatUploadCode, props, rootRef, attrs);
}

export function useDatePickerDemoCode(props, rootRef, attrs = {}) {
  return useSlotComponentDemoCode(formatDatePickerCode, props, rootRef, attrs);
}

export function useEmptyDemoCode(props, rootRef, attrs = {}) {
  return useSlotComponentDemoCode(formatEmptyCode, props, rootRef, attrs);
}

export function useAlertDemoCode(props, rootRef, attrs = {}) {
  return useSlotComponentDemoCode(formatAlertCode, props, rootRef, attrs);
}

export function useTabsDemoCode(props, rootRef, attrs = {}) {
  return useSlotComponentDemoCode(formatTabsCode, props, rootRef, attrs);
}

export function useInputDemoCode(props, rootRef, attrs = {}) {
  const injectedContext = useContext(DemoCodeContext);
  const revision = useDemoRevision(injectedContext);

  return useDemoCodeRegistration(() => {
    const el = resolveDemoElement(rootRef);
    if (!el) return null;

    void revision;
    const context = resolveDemoContext(el, injectedContext);
    const registry = getDemoRegistryForElement(el) ?? context?.registry;

    return {
      el,
      code: () => {
        if (el.classList.contains('input_group')) {
          return formatInputGroupCode(props, attrs, el, registry);
        }

        return openComponentTag('Input', props, attrs, {
          defaults: { size: 'md', type: 'text' },
          booleanProps: new Set(['disabled', 'error', 'block']),
          skipProps: ['modelValue'],
        });
      },
    };
  });
}

export function useTooltipDemoCode(props, rootRef, attrs = {}) {
  const injectedContext = useContext(DemoCodeContext);
  const revision = useDemoRevision(injectedContext);

  return useDemoCodeRegistration(() => {
    const el = resolveDemoElement(rootRef);
    if (!el) return null;

    void revision;
    const context = resolveDemoContext(el, injectedContext);

    return {
      el,
      code: () =>
        formatTooltipCode(props, attrs, el, getDemoRegistryForElement(el) ?? context?.registry),
    };
  });
}

export function useCarouselDemoCode(props, slideCountRef, rootRef, attrs = {}) {
  return useDemoCodeRegistration(() => {
    const el = resolveDemoElement(rootRef);
    if (!el) return null;

    const slideCount = slideCountRef?.current ?? slideCountRef?.value ?? slideCountRef;

    return {
      el,
      code: formatCarouselCode(props, slideCount, attrs),
    };
  });
}

export { useProvideDemoCode as useDemoCode };
