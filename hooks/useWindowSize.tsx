import { useState, useEffect } from "react";

type GetWindowSizeType = () => { width: number; height: number };

const getWindowSize: GetWindowSizeType = () => {
  if (typeof window == "undefined") return { width: -1, height: -1 };

  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const onResize = () => {
      setWindowSize(getWindowSize());
    };

    window?.addEventListener("resize", onResize);
    return () => window?.removeEventListener("resize", onResize);
  }, []);

  return windowSize;
}
