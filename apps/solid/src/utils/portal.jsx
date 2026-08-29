import { Portal } from 'solid-js/web';

export function renderPortal(content, mount) {
  if (!mount) return content;
  return <Portal mount={mount}>{content}</Portal>;
}
