import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Reveal, Eyebrow } from "../Reveal";
import poster1 from "@/assets/films/poster-1.jpg";
import poster4 from "@/assets/films/poster-4.jpg";
import poster7 from "@/assets/films/poster-7.jpg";
// Playback order within each card is the uploaded file numbering (1→2→3, 4→5→6,
// 7→8→9) — strictly sequential, never re-sorted.
import film1 from "@/assets/films/wedding-film-1.mp4";
import film2 from "@/assets/films/wedding-film-2.mp4";
import film3 from "@/assets/films/wedding-film-3.mp4";
import film4 from "@/assets/films/wedding-film-4.mp4";
import film5 from "@/assets/films/wedding-film-5.mp4";
import film6 from "@/assets/films/wedding-film-6.mp4";
import film7 from "@/assets/films/wedding-film-7.mp4";
import film8 from "@/assets/films/wedding-film-8.mp4";
import film9 from "@/assets/films/wedding-film-9.mp4";

const films = [
  {
    poster: poster1,
    playlist: [film1, film2, film3],
    place: "Wedding Highlights",
    duration: "3:42",
  },
  {
    poster: poster4,
    playlist: [film4, film5, film6],
    place: "Luxury Weddings",
    duration: "4:18",
  },
  {
    poster: poster7,
    playlist: [film7, film8, film9],
    place: "Grand Celebrations",
    duration: "5:07",
  },
];

export function Films() {
  return (
    <section className="relative bg-warm-brown py-28 text-ivory sm:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Wedding Films</Eyebrow>
          <h2 className="mt-6 font-display text-4xl text-ivory sm:text-6xl">
            Real Moments. Real Celebrations.{" "}
            <span className="italic text-champagne">Real Results.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-ivory/70">
            Every event tells a unique story. Explore real weddings, engagements, and celebrations
            beautifully captured by SD Event &amp; Photography. These highlights showcase our actual
            work, creativity, and the unforgettable moments we&apos;ve helped create.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {films.map((f, i) => (
            <Reveal key={f.place} delay={i * 0.1}>
              <FilmCard {...f} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FilmCard({
  poster,
  playlist,
  place,
  duration,
}: {
  poster: string;
  playlist: string[];
  place: string;
  duration: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  // Lazy-load: nothing is fetched until the card nears the viewport.
  const [shouldLoad, setShouldLoad] = useState(false);
  const [unmuted, setUnmuted] = useState(false);
  // Which clip in the numbered playlist (1→2→3…) is currently playing.
  const [clipIndex, setClipIndex] = useState(0);

  const play = () =>
    videoRef.current?.play().catch(() => {
      /* Autoplay can be blocked before user interaction; muted playback
         retries automatically as soon as the video is ready. */
    });

  // Autoplay only while the card is actually visible, pause off-screen —
  // keeps scrolling smooth by not decoding video that isn't on screen.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          play();
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.35, rootMargin: "100px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // When a clip finishes, advance to the next one in strict numeric order;
  // after the last clip, loop back to the first for continuous playback
  // with no blank frame in between.
  const handleEnded = () => {
    setClipIndex((prev) => (prev + 1) % playlist.length);
  };

  // Whenever the active clip changes, load and play it immediately so there's
  // no gap between videos.
  useEffect(() => {
    if (!shouldLoad) return;
    const el = videoRef.current;
    if (!el) return;
    el.load();
    play();
  }, [clipIndex, shouldLoad]);

  return (
    <div
      ref={containerRef}
      className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-ink/60"
    >
      {shouldLoad && (
        <video
          ref={videoRef}
          src={playlist[clipIndex]}
          poster={poster}
          muted={!unmuted}
          autoPlay
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          onEnded={handleEnded}
          className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-[1200ms] [backface-visibility:hidden] [transform:translateZ(0)] group-hover:scale-110"
        />
      )}
      {!shouldLoad && (
        <img
          src={poster}
          alt={`Wedding film highlight — ${place}`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-[1200ms] [backface-visibility:hidden] [transform:translateZ(0)] group-hover:scale-110 group-hover:opacity-90"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

      {/* Mute toggle — the only interactive control, hidden until hover/tap so
          the card reads as a clean autoplaying reel by default. */}
      {shouldLoad && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setUnmuted((prev) => !prev);
          }}
          aria-label={unmuted ? "Mute video" : "Unmute video"}
          aria-pressed={unmuted}
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-ivory/40 bg-ink/40 text-ivory opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
        >
          {unmuted ? <Volume2 size={16} /> : <VolumeX size={16} />}
        </button>
      )}

      <a
        href="#contact"
        className="absolute inset-x-0 bottom-0 p-6"
        aria-label={`Enquire about this wedding film — ${place}`}
      >
        <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.28em] text-champagne">
          <span>{place}</span>
          <span>{duration}</span>
        </div>
      </a>
    </div>
  );
}
