"use client";

import { useEffect, useRef, useState } from "react";

type VideoSource = {
  src: string;
  type: "video/mp4" | "video/webm" | "video/ogg";
};

type Props = {
  src?: string;
  sources?: VideoSource[];
  poster?: string;
  className?: string;
  preload?: "none" | "metadata" | "auto";
  /** Explicit opt-in for muted autoplay; defaults to a poster-only video. */
  autoPlay?: boolean;
  ariaLabel?: string;
};

// Video stays an isolated client island. It loads and plays only when explicitly
// enabled and near the viewport; native scrolling remains untouched.
export function BackgroundVideo({
  src,
  sources,
  poster,
  className,
  preload = "none",
  autoPlay = false,
  ariaLabel = "Background video",
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !autoPlay) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "200px 0px", threshold: 0.01 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [autoPlay]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPlayback = () => {
      if (!autoPlay || !isVisible || mediaQuery.matches) {
        video.pause();
        return;
      }
      video.play().catch(() => undefined);
    };

    syncPlayback();
    mediaQuery.addEventListener("change", syncPlayback);
    return () => mediaQuery.removeEventListener("change", syncPlayback);
  }, [autoPlay, isVisible]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      muted
      autoPlay={autoPlay}
      playsInline
      loop
      preload={preload}
      aria-label={ariaLabel}
      tabIndex={-1}
    >
      {sources?.map(({ src: sourceSrc, type }) => (
        <source key={sourceSrc} src={sourceSrc} type={type} />
      ))}
      {src && !sources && <source src={src} type="video/mp4" />}
      {poster && (
        // The poster is a native video fallback, not a page image.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={poster} alt="" aria-hidden="true" />
      )}
    </video>
  );
}
