import { useState, useEffect } from "react";

const MOBILE_WIDTH = 576;
const TABLET_WIDTH = 992;

export const useDevice = () => {
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < MOBILE_WIDTH) {
        setDevice("mobile");
      } else if (width < TABLET_WIDTH) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return device;
};
