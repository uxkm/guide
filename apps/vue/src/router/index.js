import { computed, onMounted, onUnmounted, ref } from 'vue';

const path = ref(typeof location !== 'undefined' ? location.pathname : '/');

function sync() {
  path.value = location.pathname;
}

export function navigate(to) {
  if (to === path.value) return;
  history.pushState(null, '', to);
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
