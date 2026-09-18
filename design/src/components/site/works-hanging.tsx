import { Link } from "@tanstack/react-router";
import { uiCopy, works } from "@/lib/content";
import { useLang } from "@/lib/lang";
import { WorkCaption } from "@/components/site/work-caption";

export function WorksHanging() {
  const { t, tAlt } = useLang();

  return (
    <section id="works" className="scroll-mt-16 border-t border-line bg-bg pt-16 md:pt-20">
      <div className="mb-8 flex items-end justify-between gap-4 px-4 md:px-8">
        <div>
          <p className="kicker mb-3 text-accent">{t(uiCopy.stills)}</p>
          <h2 className="text-section text-fg">{t(uiCopy.works)}</h2>
          <p className="mt-2 text-muted">{tAlt(uiCopy.works)}</p>
          <p className="mt-4 text-sm text-faint">{t(uiCopy.swipe)}</p>
        </div>
        <Link
          to="/works"
          className="kicker hidden min-h-11 items-center text-muted underline decoration-line underline-offset-4 hover:text-fg sm:inline-flex"
        >
          {t(uiCopy.inventory)}
        </Link>
      </div>

      <div className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto px-4 pb-16 md:px-8">
        {works.map((work, index) => (
          <article
            key={work.slug}
            className="w-[78vw] shrink-0 snap-center pe-4 sm:w-[52vw] lg:w-[34vw]"
          >
            <p className="kicker mb-4 text-accent">
              {work.index} / {String(works.length).padStart(2, "0")}
            </p>
            <Link
              to="/works/$slug"
              params={{ slug: work.slug }}
              className="flex h-[min(58svh,28rem)] items-center justify-center overflow-hidden bg-surface"
              aria-label={t(work.title)}
            >
              <img
                src={work.image}
                alt={t(work.title)}
                className="max-h-full max-w-full object-contain"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </Link>
            <WorkCaption work={work} />
          </article>
        ))}
      </div>

      <div className="px-4 pb-10 sm:hidden">
        <Link
          to="/works"
          className="kicker inline-flex min-h-11 items-center text-fg underline decoration-line underline-offset-4"
        >
          {t(uiCopy.inventory)}
        </Link>
      </div>
    </section>
  );
}
