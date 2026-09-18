import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Drawer } from "vaul";
import { Menu, X } from "lucide-react";
import { brand, INSTAGRAM_HANDLE, INSTAGRAM_URL, nav, uiCopy } from "@/lib/content";
import { useLang } from "@/lib/lang";
import { LangToggle } from "@/components/site/lang-toggle";
import { cn } from "@/lib/utils";

export function Header({ inverted = false }: { inverted?: boolean }) {
  const { t, tAlt } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 flex items-center justify-between gap-4 px-4 md:px-8",
        "h-16 md:h-20",
        inverted ? "bg-transparent" : "bg-bg/80 backdrop-blur-sm",
      )}
    >
      <Link
        to="/"
        className="min-h-11 flex flex-col justify-center leading-none"
        aria-label="Aji Bam Bam"
      >
        <span className="font-display text-sm font-medium tracking-wide text-fg" lang="he">
          {brand.name.he}
        </span>
        <span className="mt-1 kicker text-muted">{brand.name.en}</span>
      </Link>

      <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
        {nav.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="kicker inline-flex min-h-11 items-center px-3 text-fg transition-colors duration-150 hover:text-accent"
          >
            {t(item.label)}
          </a>
        ))}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="kicker inline-flex min-h-11 items-center px-3 text-muted transition-colors duration-150 hover:text-fg"
        >
          {INSTAGRAM_HANDLE}
        </a>
        <LangToggle />
      </nav>

      <Drawer.Root open={open} onOpenChange={setOpen}>
        <Drawer.Trigger
          className="inline-flex min-h-11 min-w-11 items-center justify-center text-fg lg:hidden"
          aria-label={t(uiCopy.menu)}
        >
          <Menu className="size-5" strokeWidth={1.5} />
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-50 bg-bg/70" />
          <Drawer.Content className="fixed inset-x-0 bottom-0 z-50 rounded-t-lg border-t border-line bg-surface px-6 pb-10 pt-4">
            <div className="mx-auto mb-6 h-1 w-10 rounded-full bg-line" />
            <div className="mb-6 flex items-center justify-between">
              <p className="kicker">{t(uiCopy.menu)}</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-11 min-w-11 items-center justify-center"
                aria-label="Close"
              >
                <X className="size-5" strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex flex-col">
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center justify-between border-b border-line text-2xl font-light"
                >
                  <span>{t(item.label)}</span>
                  <span className="kicker text-faint">{tAlt(item.label)}</span>
                </a>
              ))}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-14 items-center text-muted"
              >
                {INSTAGRAM_HANDLE}
              </a>
            </nav>
            <div className="mt-6">
              <LangToggle />
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </header>
  );
}
