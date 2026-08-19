export function initSkeleton(root = document) {
  return [...root.querySelectorAll('[data-component="Skeleton"]')];
}
