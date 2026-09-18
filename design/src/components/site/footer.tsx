import { brand, INSTAGRAM_HANDLE, INSTAGRAM_URL, nav } from "@/lib/content";
import { useLang } from "@/lib/lang";

export function Footer() {
  const { t, tAlt } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg px-4 py-10 md:px-8">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-lg text-fg" lang="he">
            {t(brand.name)}
          </p>
          <p className="kicker mt-1 text-muted">{t(brand.legal)}</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {nav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="kicker inline-flex min-h-11 items-center text-muted hover:text-fg"
            >
              {t(item.label)}
            </a>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="kicker inline-flex min-h-11 items-center text-muted hover:text-fg"
          >
            {INSTAGRAM_HANDLE}
          </a>
        </nav>
      </div>
      <p className="mt-8 text-xs text-faint">
        © {year} {t(brand.legal)} · {tAlt(brand.name)}
      </p>
    </footer>
  );
}
