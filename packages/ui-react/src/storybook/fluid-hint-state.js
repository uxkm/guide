const listeners = new Set();

let hintOpen = false;
let hintTimer = null;

function notify() {
  listeners.forEach((listener) => listener(hintOpen));
}

export function subscribeFluidHint(listener) {
  listeners.add(listener);
  listener(hintOpen);
  return () => listeners.delete(listener);
}

export function showFluidHint() {
  hintOpen = true;
  notify();

  if (hintTimer) clearTimeout(hintTimer);
  hintTimer = setTimeout(() => {
    hintOpen = false;
    notify();
  }, 5000);
}

export function hideFluidHint() {
  hintOpen = false;
  notify();

  if (hintTimer) clearTimeout(hintTimer);
  hintTimer = null;
}
