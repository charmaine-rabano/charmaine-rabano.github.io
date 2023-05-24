import { useState, useEffect } from "react";

function useIsInViewport(r) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  let observer = null;
  if (typeof window !== "undefined") {
    observer = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting)
    );
  }

  useEffect(() => {
    observer.observe(r.current);

    return () => {
      observer.disconnect();
    };
  }, [r, observer]);

  return isIntersecting;
}

export default useIsInViewport;
