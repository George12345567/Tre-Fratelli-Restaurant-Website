"use client";

import { useEffect, type ReactNode } from "react";
import { useAnimate } from "motion/react-mini";
import { fadeMotion } from "./config";

type Props = {
  children: ReactNode;
  className?: string;
  duration?: number;
  translateY?: number;
};

// SSR is fully visible, including with JS disabled. Use only for noncritical content.
export function MotionFade({
  children,
  className,
  duration = fadeMotion.duration,
  translateY = fadeMotion.translateY,
}: Props) {
  const [scope, animate] = useAnimate<HTMLDivElement>();

  useEffect(() => {
    const element = scope.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element) return;

    const animation = preference.matches ? undefined : animate(element, {
      opacity: [0.7, 1],
      transform: [`translateY(${translateY}px)`, "translateY(0px)"],
    }, { duration, ease: fadeMotion.ease });

    const restore = () => {
      animation?.stop();
      element.style.opacity = "1";
      element.style.transform = "none";
    };
    const onChange = () => { if (preference.matches) restore(); };
    preference.addEventListener("change", onChange);
    return () => {
      preference.removeEventListener("change", onChange);
      restore();
    };
  }, [animate, duration, scope, translateY]);

  return <div ref={scope} className={className}>{children}</div>;
}
