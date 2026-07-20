import { ref } from 'vue';

export const fluidHintOpen = ref(false);

let hintTimer = null;

export function showFluidHint() {
  fluidHintOpen.value = true;
  if (hintTimer) clearTimeout(hintTimer);
  hintTimer = setTimeout(() => {
    fluidHintOpen.value = false;
  }, 5000);
}

export function hideFluidHint() {
  fluidHintOpen.value = false;
  if (hintTimer) clearTimeout(hintTimer);
  hintTimer = null;
}
