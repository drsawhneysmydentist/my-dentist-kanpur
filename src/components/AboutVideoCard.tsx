import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

/**
 * Lazy-loaded, autoplaying vertical video card for the About section.
 * - Loads/plays only once scrolled into view (IntersectionObserver).
 * - Muted autoplay + loop + playsInline (mobile inline playback, autoplay policy compliant).
 * - Visible mute/unmute toggle.
 * - Portrait 9:16 card with rounded corners + subtle border to match site style.
 */
export function AboutVideoCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "150px", threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay can be blocked in rare cases; fail silently, poster stays visible.
        });
      }
    }
  }, [isInView]);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-[9/16] w-full max-w-sm overflow-hidden rounded-xl border border-foreground/10 bg-foreground/5 shadow-soft"
    >
      {isInView ? (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/videos/karuna-dr-reel.mp4"
          poster="/videos/karuna-video-poster.webp"
          muted
          loop
          playsInline
          autoPlay
          preload="none"
          aria-label="Dr. Karuna Singh Sawhny introduction video"
        >
          Your browser does not support embedded video.
        </video>
      ) : (
        <img
          src="/videos/karuna-video-poster.webp"
          alt="Dr. Karuna Singh Sawhny introduction video"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      )}

      {isInView && (
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-background/80 text-foreground shadow-soft backdrop-blur transition-colors hover:bg-background"
        >
          {isMuted ? <VolumeX className="h-4.5 w-4.5" /> : <Volume2 className="h-4.5 w-4.5" />}
        </button>
      )}
    </div>
  );
}
