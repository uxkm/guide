export function resolveRegisteredCode(registered) {
  if (typeof registered === 'function') {
    return registered();
  }

  return registered;
}
