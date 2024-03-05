import { useState, useEffect, useCallback } from "react";

type UseMockLoading = [boolean, (callback?: () => void) => void];

export const useMockLoading = (
  delay = 1000,
  initialLoading = true
): UseMockLoading => {
  const [isLoading, setLoading] = useState(initialLoading);

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
