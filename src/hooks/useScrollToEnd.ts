import { useEffect } from "react";

export const useScrollToEnd = (callback: () => void) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.innerHeight + document.documentElement.scrollTop;
      const offset = 50; // trigger callback when within 50px from the bottom

      if (scrollPosition >= document.documentElement.offsetHeight - offset) {
        callback();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [callback]);
};
