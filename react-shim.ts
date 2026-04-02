import * as React from './node_modules/react/index.js';
export * from './node_modules/react/index.js';

export function use<T>(promise: Promise<T>): T {
  // @ts-ignore
  if (promise.status === 'fulfilled') {
    // @ts-ignore
    return promise.value as T;
  }
  // @ts-ignore
  if (promise.status === 'rejected') {
    // @ts-ignore
    throw promise.reason;
  }
  // @ts-ignore
  promise.status = 'pending';
  promise.then(
    (res: any) => {
      // @ts-ignore
      promise.status = 'fulfilled';
      // @ts-ignore
      promise.value = res;
    },
    (err: any) => {
      // @ts-ignore
      promise.status = 'rejected';
      // @ts-ignore
      promise.reason = err;
    }
  );
  throw promise;
}

export function useEffectEvent<T extends Function>(fn: T): T {
  const ref = React.useRef<T>(fn);
  React.useLayoutEffect(() => { ref.current = fn; });
  return React.useCallback((...args: any[]) => (ref.current as any)(...args), []) as unknown as T;
}

export default React;
