import React, { useEffect, useRef, useState } from "react";

export const RenderOnViewportEntry = ({
  renderChild,
  threshold = 0,
  root,
  rootMargin = "0px 0px 0px 0px",
}: {
  renderChild: React.ReactNode;
  threshold?: number;
  root?: string;
  rootMargin?: string;
}) => {
  const [entered, setEntered] = useState(false);
  const ref = useRef(null);

  const observer = new IntersectionObserver(
    ([entry]) => {
      setEntered(entry.isIntersecting);
    },
    { threshold, root: root ? document.getElementById(root) : null, rootMargin }
  );

  useEffect(() => {
    const element = ref.current;
    const observerInstance = observer;

    if (entered) {
      observerInstance.disconnect();
      return;
    }

    if (element && !entered) {
      observerInstance.observe(element);
    }

    return () => observerInstance.disconnect();
  }, [entered, ref, observer]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
      ref={ref}
    >
      {entered && <>{renderChild}</>}
    </div>
  );
};
