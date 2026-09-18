import { useLang } from "@/lib/lang";
import { cn } from "@/lib/utils";

export function LangToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div
      className={cn("flex items-center gap-1 text-kicker tracking-kicker uppercase", className)}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        className={cn(
          "min-h-11 min-w-11 px-1 transition-colors duration-150",
          lang === "en" ? "text-fg" : "text-muted hover:text-fg",
        )}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <span className="text-faint" aria-hidden>
        /
      </span>
      <button
        type="button"
        onClick={() => setLang("he")}
        className={cn(
          "min-h-11 min-w-11 px-1 transition-colors duration-150",
          lang === "he" ? "text-fg" : "text-muted hover:text-fg",
        )}
        aria-pressed={lang === "he"}
      >
        עב
      </button>
    </div>
  );
}
