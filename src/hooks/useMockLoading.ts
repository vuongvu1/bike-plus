import { useState, useEffect, useCallback } from "react";

type UseMockLoading = (
  delay?: number
) => [boolean, (callback?: () => void) => void];

export const useMockLoading: UseMockLoading = (delay = 1000) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const startLoading = useCallback(
    (callback?: () => void) => {
      setLoading(true);

      setTimeout(() => {
        callback?.();
        setLoading(false);
      }, delay);
    },
    [delay]
  );

  return [isLoading, startLoading];
};
