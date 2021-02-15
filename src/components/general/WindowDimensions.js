import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [wait, setWait] = useState({
    timeout: false,
    rtime: null,
  });

  useEffect(() => {
    function handleResize() {
      setWait({ ...wait, rtime: new Date() });
      if (wait.timeout === false) {
        setWait({ ...wait, timeout: true });
        setTimeout(resizeend, 250);
      }
    }

    function resizeend() {
      if (new Date() - wait.rtime < 250) {
        setTimeout(resizeend, 250);
      } else {
        setWait({ ...wait, timeout: false });
        setWindowDimensions(getWindowDimensions());
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return windowDimensions;
}
