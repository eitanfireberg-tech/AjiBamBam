import { aboutCopy, brand, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/content";
import { useLang } from "@/lib/lang";

export function About() {
  const { t, tAlt } = useLang();

  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-line bg-bg px-4 py-16 md:px-8 md:py-24"
    >
      <p className="kicker mb-3">{t(aboutCopy.kicker)}</p>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="text-section text-fg">{t(aboutCopy.title)}</h2>
          <p className="mt-2 text-muted">{tAlt(aboutCopy.title)}</p>
          <p className="mt-6 kicker text-accent">{t(aboutCopy.aka)}</p>
          <p className="mt-1 text-sm text-faint">{t(brand.legal)}</p>
        </div>
        <div className="space-y-8 lg:col-span-7">
          <p className="font-serif text-lede font-light leading-relaxed text-fg">
            {t(aboutCopy.statement)}
          </p>
          <p
            className="font-serif text-xl font-light leading-relaxed text-muted"
            lang={tAlt(aboutCopy.statement) === aboutCopy.statement.he ? "he" : "en"}
          >
            {tAlt(aboutCopy.statement)}
          </p>
          <p className="max-w-xl text-sm leading-relaxed text-muted">{t(aboutCopy.bio)}</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="kicker inline-flex min-h-11 items-center text-fg underline decoration-line underline-offset-4 hover:text-accent"
          >
            {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>

      <div className="mt-12 grid gap-3 sm:grid-cols-2">
        <figure className="overflow-hidden bg-surface">
          <img
            src="/ig/with-painting.jpg"
            alt={t(aboutCopy.aka)}
            className="aspect-[3/4] h-auto w-full object-cover"
            loading="lazy"
          />
        </figure>
        <figure className="overflow-hidden bg-surface">
          <img
            src="/ig/reel-open-mind.jpg"
            alt={t(aboutCopy.title)}
            className="aspect-[3/4] h-auto w-full object-cover"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
