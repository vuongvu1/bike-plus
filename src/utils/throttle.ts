/* eslint-disable @typescript-eslint/no-explicit-any */
type ThrottleFunction = (...args: any[]) => void;

export function throttle(
  func: ThrottleFunction,
  delay: number
): ThrottleFunction {
  let timeoutId: ReturnType<typeof setTimeout> | null;
  let lastArgs: any[];

  return function throttled(...args: any[]) {
    lastArgs = args;

    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        func(...lastArgs);
        timeoutId = null;
      }, delay);
    }
  };
}
