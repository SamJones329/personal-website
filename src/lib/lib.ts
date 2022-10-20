// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CallbackArgs = any[]
type Callback = (...args: CallbackArgs) => void

/**
 * Assumes first arg is event
 * @param callback 
 * @param intervalMs 
 * @param alwaysPreventDefault 
 * @returns 
 */
function throttleEvent(callback: Callback, intervalMs: number, alwaysPreventDefault=false) {
  let enableCall = true;

  return function(this: Callback, ...args: CallbackArgs) {
    if (!enableCall) {
      if(alwaysPreventDefault) args[0].preventDefault();
      return;
    }

    enableCall = false;
    callback.apply(this, args);
    setTimeout(() => enableCall = true, intervalMs);
  }
}

export { throttleEvent };