import { useState, useEffect } from "react";

const useIsOnline = () => {
  const [onLine, setOnLine] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", () => {
      setOnLine(true);
    });

    window.addEventListener("offline", () => {
      setOnLine(false);
    });

    return () => {
      window.removeEventListener("online", () => {});
      window.removeEventListener("offline", () => {});
    };
  }, []);

  return onLine;
};

export default useIsOnline;
