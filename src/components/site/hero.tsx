import { brand, heroCopy } from "@/lib/content";
import { useLang } from "@/lib/lang";
import { KenBurns } from "@/components/site/ken-burns";

export function Hero() {
  const { t, tAlt, lang } = useLang();

  return (
    <section className="relative min-h-svh overflow-hidden bg-bg">
      <KenBurns
        src="/works/hero.jpg"
        alt={t(heroCopy.line1)}
        className="absolute inset-0"
        priority
      />
      <div className="absolute inset-0 bg-bg/55" aria-hidden />
      <div
        className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-bg to-transparent"
        aria-hidden
      />

      <p
        className="rail pointer-events-none absolute end-3 top-24 hidden text-fg/40 md:end-6 md:block"
        lang="he"
      >
        אג׳י באם באם
      </p>

      <div className="relative z-10 flex min-h-svh flex-col justify-end px-4 pb-10 pt-24 md:px-8 md:pb-14">
        <p className="kicker mb-6 text-fg/80">{t(heroCopy.kicker)}</p>

        <h1 className="max-w-4xl">
          <span className="sr-only">{t(brand.name)}</span>
          <span
            className="text-display block text-fg"
            lang="he"
            dir="rtl"
            style={{ textAlign: lang === "he" ? "right" : "left" }}
          >
            {brand.stackedHe.map((line, i) => (
              <span key={`${line}-${i}`} className="block">
                {line}
              </span>
            ))}
          </span>
        </h1>

        <div className="mt-8 max-w-md space-y-3">
          <p className="font-serif text-lede font-light text-fg">{t(heroCopy.line1)}</p>
          <p
            className="font-serif text-lg font-light text-muted md:text-xl"
            lang={lang === "en" ? "he" : "en"}
          >
            {tAlt(heroCopy.line1)}
          </p>
          <div className="h-px w-16 bg-accent" />
          <p className="pt-1 text-sm text-muted">{t(heroCopy.line2)}</p>
          <p className="text-sm text-faint">{tAlt(heroCopy.line2)}</p>
        </div>

        <a
          href="#reels"
          className="kicker mt-10 inline-flex min-h-11 w-fit items-center text-fg transition-colors duration-150 hover:text-accent"
        >
          {t(heroCopy.scroll)}
        </a>
      </div>
    </section>
  );
}
