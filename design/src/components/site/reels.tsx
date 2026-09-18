import { useEffect, useState } from "react";
import { ExternalLink, Play, X } from "lucide-react";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  reelUrl,
  reels,
  reelsCopy,
  type Reel,
} from "@/lib/content";
import { useLang } from "@/lib/lang";
import { cn } from "@/lib/utils";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function Reels() {
  const { t, tAlt } = useLang();
  const [active, setActive] = useState<Reel>(reels[0]);
  const [screening, setScreening] = useState<Reel | null>(null);

  useEffect(() => {
    document.body.style.overflow = screening ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [screening]);

  useEffect(() => {
    if (!screening) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setScreening(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [screening]);

  return (
    <section id="reels" className="scroll-mt-16 border-t border-line bg-bg">
      <div className="px-4 pb-8 pt-16 md:px-8 md:pt-20">
        <p className="kicker mb-3 text-accent">{t(reelsCopy.kicker)}</p>
        <h2 className="max-w-3xl font-serif text-section font-light text-fg">
          {t(reelsCopy.title)}
        </h2>
        <p className="mt-2 font-serif text-xl font-light text-muted">{tAlt(reelsCopy.title)}</p>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">{t(reelsCopy.body)}</p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="kicker mt-6 inline-flex min-h-11 items-center text-fg underline decoration-line underline-offset-4 hover:text-accent"
        >
          {INSTAGRAM_HANDLE}
        </a>
      </div>

      <div className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto px-4 pb-12 lg:hidden">
        {reels.map((reel, index) => (
          <article
            key={reel.shortcode}
            className="flex w-[82vw] shrink-0 snap-center flex-col items-center px-2 sm:w-[48vw]"
          >
            <p className="kicker mb-4 text-accent">
              {pad(index + 1)} / {pad(reels.length)}
            </p>
            <button
              type="button"
              onClick={() => setScreening(reel)}
              className="group relative aspect-[9/16] w-full overflow-hidden bg-surface"
              aria-label={`${t(reelsCopy.play)}: ${t(reel.title)}`}
            >
              <img src={reel.poster} alt={t(reel.title)} className="size-full object-cover" />
              <span className="absolute inset-0 bg-bg/25" aria-hidden />
              <span className="absolute inset-0 flex items-center justify-center">
                <PlayDisc />
              </span>
            </button>
            <h3 className="mt-5 max-w-xs text-center font-serif text-xl font-light leading-snug text-fg">
              {t(reel.title)}
            </h3>
            <p className="mt-1 max-w-xs text-center text-sm text-muted">{t(reel.caption)}</p>
          </article>
        ))}
      </div>

      <div className="hidden lg:grid lg:grid-cols-12 lg:px-8 lg:pb-16">
        <aside className="col-span-1 flex items-center justify-center">
          <p className="rail text-faint" lang="he">
            אג׳י באם באם · אין לזה מילה
          </p>
        </aside>

        <div className="col-span-6 flex items-center justify-center py-4">
          <button
            type="button"
            onClick={() => setScreening(active)}
            className="group relative aspect-[9/16] h-[min(68svh,34rem)] overflow-hidden bg-surface"
            aria-label={`${t(reelsCopy.play)}: ${t(active.title)}`}
          >
            <img src={active.poster} alt={t(active.title)} className="size-full object-cover" />
            <span className="absolute inset-0 bg-bg/25" aria-hidden />
            <span className="absolute inset-0 flex items-center justify-center">
              <PlayDisc />
            </span>
            <span className="kicker absolute start-4 top-4 text-fg">{t(reelsCopy.playing)}</span>
          </button>
        </div>

        <div className="col-span-5 flex flex-col justify-center border-s border-line py-6 ps-8">
          <p className="kicker mb-6">{t(reelsCopy.program)}</p>
          <ol>
            {reels.map((reel, index) => {
              const selected = reel.shortcode === active.shortcode;
              return (
                <li key={reel.shortcode}>
                  <button
                    type="button"
                    onClick={() => setActive(reel)}
                    className={cn(
                      "grid w-full grid-cols-[2.5rem_1fr] gap-3 border-b border-line py-4 text-start transition-colors duration-150",
                      selected ? "text-fg" : "text-muted hover:text-fg",
                    )}
                  >
                    <span className={cn("kicker pt-1", selected ? "text-accent" : "text-faint")}>
                      {pad(index + 1)}
                    </span>
                    <span>
                      <span className="block font-serif text-lg font-light leading-snug">
                        {t(reel.title)}
                      </span>
                      <span className="mt-1 block text-xs text-muted">{tAlt(reel.title)}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
          <button
            type="button"
            onClick={() => setScreening(active)}
            className="kicker mt-8 inline-flex min-h-11 w-fit items-center text-accent"
          >
            {t(reelsCopy.play)}
          </button>
        </div>
      </div>

      {screening ? (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-bg"
          role="dialog"
          aria-modal="true"
          aria-label={t(screening.title)}
        >
          <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-8">
            <div>
              <p className="kicker text-accent">{t(reelsCopy.playing)}</p>
              <p className="mt-1 font-serif text-lg font-light text-fg">{t(screening.title)}</p>
            </div>
            <button
              type="button"
              onClick={() => setScreening(null)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center text-fg"
              aria-label={t(reelsCopy.close)}
            >
              <X className="size-5" strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex min-h-0 flex-1 items-center justify-center px-4 pb-8">
            <div className="relative w-full max-w-sm overflow-hidden bg-surface">
              <img
                src={screening.poster}
                alt={t(screening.title)}
                className="aspect-[9/16] w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-end gap-4 bg-bg/35 p-6">
                <a
                  href={reelUrl(screening.shortcode)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center gap-2 bg-fg px-5 text-sm font-medium text-bg"
                >
                  {t(reelsCopy.openIg)}
                  <ExternalLink className="size-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
          <p className="px-4 pb-8 text-center text-sm text-muted">{t(screening.caption)}</p>
        </div>
      ) : null}
    </section>
  );
}

function PlayDisc() {
  return (
    <span className="flex size-16 items-center justify-center rounded-full border border-fg/80 bg-bg/50 text-fg backdrop-blur-sm transition-transform duration-150 group-hover:scale-105">
      <Play className="ms-0.5 size-6 fill-fg" strokeWidth={1.5} />
    </span>
  );
}
