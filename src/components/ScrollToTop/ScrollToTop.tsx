import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window) {
      window.scrollTo(0, 0);
      window.history.scrollRestoration = "manual";
    }
  }, [pathname]);

  return null;
};
