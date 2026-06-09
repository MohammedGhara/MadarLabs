import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const VIDEO_SRC = "/324254_medium.mp4";

/**
 * Full-bleed looping video for the hero, with a dark scrim so headline and CTAs stay legible.
 * Video source is deferred until after first paint to protect LCP/FCP.
 */
const HeroVideoBackground = () => {
  const { dir } = useLanguage();
  const rtl = dir === "rtl";
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const schedule = () => setShouldLoadVideo(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(schedule, { timeout: 1200 });
      return () => window.cancelIdleCallback(id);
    }
    const timer = window.setTimeout(schedule, 400);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !shouldLoadVideo) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (mq.matches) {
        el.pause();
      } else {
        void el.play().catch(() => {
          /* autoplay blocked — first user gesture can start elsewhere */
        });
      }
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [shouldLoadVideo]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#020617]" aria-hidden>
      <video
        ref={videoRef}
        className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        style={{ objectPosition: rtl ? "70% center" : "30% center" }}
        autoPlay
        muted
        loop
        playsInline
        preload={shouldLoadVideo ? "metadata" : "none"}
        disablePictureInPicture
      >
        {shouldLoadVideo ? <source src={VIDEO_SRC} type="video/mp4" /> : null}
      </video>
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-950/88 via-slate-950/72 to-slate-950/92"
        aria-hidden
      />
      <div
        className={cn(
          "absolute inset-0 bg-[radial-gradient(ellipse_95%_85%_at_32%_18%,rgba(15,23,42,0.78),transparent_58%)]",
          rtl &&
            "bg-[radial-gradient(ellipse_95%_85%_at_68%_18%,rgba(15,23,42,0.78),transparent_58%)]"
        )}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_100%_85%,rgba(2,6,23,0.55),transparent)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"
        aria-hidden
      />
    </div>
  );
};

export default HeroVideoBackground;
