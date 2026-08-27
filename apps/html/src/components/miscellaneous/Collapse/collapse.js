/**
 * Collapse 원본 구현.
 * 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다.
 */
import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';

function panelParts(panel) {
  return {
    trigger: panel.querySelector('.collapse_trigger'),
    body: panel.querySelector('.collapse_body'),
  };
}

function isDisabled(panel) {
  const { trigger } = panelParts(panel);
  return (
    panel.classList.contains('is-disabled') ||
    trigger?.disabled ||
    trigger?.getAttribute('aria-disabled') === 'true'
  );
}

function setPanelOpen(panel, open, slide, animate = true) {
  const { trigger, body } = panelParts(panel);
  panel.classList.toggle('is-open', open);
  trigger?.setAttribute('aria-expanded', String(open));
  if (!body) return;
  if (slide) setSlideRegionOpen(body, open, animate);
  else body.hidden = !open;
}

function initGroup(group) {
  if (group.dataset.collapseReady === 'true') return;
  group.dataset.collapseReady = 'true';
  const panels = [...group.querySelectorAll(':scope > .collapse_panel')];
  const slide = group.dataset.effect === 'slide';
  const accordion = group.hasAttribute('data-collapse-accordion');

  panels.forEach((panel) => {
    const { trigger } = panelParts(panel);
    if (!trigger) return;
    setPanelOpen(panel, trigger.getAttribute('aria-expanded') === 'true', slide, false);

    trigger.addEventListener('click', () => {
      if (isDisabled(panel)) return;
      const willOpen = trigger.getAttribute('aria-expanded') !== 'true';
      if (willOpen && accordion) {
        panels.forEach((other) => {
          const otherTrigger = panelParts(other).trigger;
          if (
            other !== panel &&
            !isDisabled(other) &&
            otherTrigger?.getAttribute('aria-expanded') === 'true'
          ) {
            setPanelOpen(other, false, slide);
          }
        });
      }
      setPanelOpen(panel, willOpen, slide);
      group.dispatchEvent(
        new CustomEvent('collapse:toggle', { bubbles: true, detail: { panel, open: willOpen } }),
      );
    });

    trigger.addEventListener('keydown', (event) => {
      const triggers = panels
        .filter((entry) => !isDisabled(entry))
        .map((entry) => panelParts(entry).trigger);
      const index = triggers.indexOf(trigger);
      let next = null;
      if (event.key === 'ArrowDown') next = triggers[(index + 1) % triggers.length];
      else if (event.key === 'ArrowUp')
        next = triggers[(index - 1 + triggers.length) % triggers.length];
      else if (event.key === 'Home') next = triggers[0];
      else if (event.key === 'End') next = triggers.at(-1);
      if (next) {
        event.preventDefault();
        next.focus();
      }
    });
  });
}

function initExternal(trigger, root) {
  if (trigger.dataset.collapseTriggerReady === 'true') return;
  const targetId = trigger.getAttribute('aria-controls');
  const target = targetId
    ? (root.querySelector(`#${CSS.escape(targetId)}`) ?? document.getElementById(targetId))
    : null;
  if (!target?.classList.contains('collapse')) return;
  trigger.dataset.collapseTriggerReady = 'true';
  const slide = target.dataset.effect === 'slide' || trigger.dataset.effect === 'slide';
  const setOpen = (open, animate = true) => {
    trigger.setAttribute('aria-expanded', String(open));
    target.classList.toggle('is-open', open);
    if (slide) setSlideRegionOpen(target, open, animate);
    else target.hidden = !open;
  };
  setOpen(trigger.getAttribute('aria-expanded') === 'true', false);
  trigger.addEventListener('click', () => {
    const open = trigger.getAttribute('aria-expanded') !== 'true';
    setOpen(open);
    trigger.dispatchEvent(
      new CustomEvent('collapse:toggle', { bubbles: true, detail: { target, open } }),
    );
  });
}

export function initCollapse(root = document) {
  root.querySelectorAll('[data-collapse]').forEach(initGroup);
  root
    .querySelectorAll('[data-collapse-trigger]')
    .forEach((trigger) => initExternal(trigger, root));
}
