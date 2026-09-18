import { Link } from "@tanstack/react-router";
import {
  availabilityCopy,
  uiCopy,
  type Work,
} from "@/lib/content";
import { useLang } from "@/lib/lang";
import { cn } from "@/lib/utils";

export function WorkCaption({
  work,
  className,
  showLink = true,
}: {
  work: Work;
  className?: string;
  showLink?: boolean;
}) {
  const { t, tAlt } = useLang();

  return (
    <div className={cn("mt-4 flex flex-col gap-1 text-start", className)}>
      <p className="kicker text-faint">{work.index}</p>
      <h3 className="font-serif text-xl font-normal text-fg md:text-2xl">{t(work.title)}</h3>
      <p className="text-sm text-muted" lang={tAlt(work.title) === work.title.he ? "he" : "en"}>
        {tAlt(work.title)}
      </p>
      <p className="mt-3 text-sm text-fg">
        {work.size}
        {work.year ? (
          <>
            <span className="text-faint"> · </span>
            {work.year}
          </>
        ) : null}
      </p>
      <p className="text-sm text-muted">{t(work.medium)}</p>
      <p className="max-w-prose text-sm leading-relaxed text-muted">{t(work.details)}</p>
      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
        <span className="kicker text-accent">{t(availabilityCopy[work.availability])}</span>
        <a
          href={work.instagram}
          target="_blank"
          rel="noreferrer"
          className="kicker min-h-11 inline-flex items-center text-muted underline decoration-line underline-offset-4 hover:text-fg"
        >
          {t(uiCopy.onInstagram)}
        </a>
        {showLink ? (
          <Link
            to="/works/$slug"
            params={{ slug: work.slug }}
            className="kicker min-h-11 inline-flex items-center text-fg underline decoration-line underline-offset-4 transition-colors duration-150 hover:text-accent hover:decoration-accent"
          >
            {t(uiCopy.viewWork)}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
