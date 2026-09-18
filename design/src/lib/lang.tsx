import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Copy, Lang } from "@/lib/content";

const STORAGE_KEY = "aji-lang";

type LangContextValue = {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (lang: Lang) => void;
  t: (copy: Copy) => string;
  tAlt: (copy: Copy) => string;
};

const LangContext = createContext<LangContextValue | null>(null);

function readStored(): Lang {
  if (typeof window === "undefined") return "en";
  return window.localStorage.getItem(STORAGE_KEY) === "he" ? "he" : "en";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    setLangState(readStored());
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang === "he" ? "he" : "en";
    root.dir = lang === "he" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo<LangContextValue>(() => {
    const dir = lang === "he" ? "rtl" : "ltr";
    return {
      lang,
      dir,
      setLang,
      t: (copy) => copy[lang],
      tAlt: (copy) => copy[lang === "en" ? "he" : "en"],
    };
  }, [lang, setLang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
