import { computed, onMounted, onUnmounted, ref } from 'vue';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const currentPath = () => (location.pathname.slice(base.length).replace(/\/$/, '') || '/');
export const routeHref = (to) => base + to;

const path = ref(typeof location !== 'undefined' ? currentPath() : '/');

function sync() {
  path.value = currentPath();
}

export function navigate(to) {
  if (to === path.value) return;
  history.pushState(null, '', routeHref(to));
  path.value = to;
  window.scrollTo(0, 0);
}

export function usePath() {
  onMounted(() => {
    sync();
    window.addEventListener('popstate', sync);
  });
  onUnmounted(() => {
    window.removeEventListener('popstate', sync);
  });
  return computed(() => path.value);
}

export function useNavigate() {
  return navigate;
}
