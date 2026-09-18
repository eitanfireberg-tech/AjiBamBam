import { useEffect, useMemo, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  inquiryCopy,
  works,
} from "@/lib/content";
import { useLang } from "@/lib/lang";

type InquiryForm = {
  name: string;
  email: string;
  work: string;
  message: string;
};

const empty: InquiryForm = { name: "", email: "", work: "", message: "" };

export function Inquiry({ initialWork = "" }: { initialWork?: string }) {
  const { t, tAlt, lang } = useLang();
  const [form, setForm] = useState<InquiryForm>({ ...empty, work: initialWork });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (initialWork) setForm((current) => ({ ...current, work: initialWork }));
  }, [initialWork]);

  const note = useMemo(() => {
    const work = works.find((item) => item.slug === form.work);
    const workLine = work
      ? `${work.title.en} / ${work.title.he} (${work.size})`
      : "—";
    return [
      `AJI BAM BAM — inquiry`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Work: ${workLine}`,
      "",
      form.message,
    ].join("\n");
  }, [form]);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || form.message.trim().length < 8) {
      toast.error(lang === "he" ? "מלאו שם, דוא״ל והודעה." : "Name, email and a short note are required.");
      return;
    }
    const existing = JSON.parse(window.localStorage.getItem("aji-inquiries") ?? "[]") as unknown[];
    existing.push({ ...form, at: new Date().toISOString() });
    window.localStorage.setItem("aji-inquiries", JSON.stringify(existing));
    try {
      await navigator.clipboard.writeText(note);
    } catch {
      /* clipboard may be blocked in some embeds */
    }
    window.open(INSTAGRAM_URL, "_blank", "noopener,noreferrer");
    setSent(true);
    toast.success(t(inquiryCopy.sent));
  }

  return (
    <section
      id="inquiry"
      className="scroll-mt-20 border-t border-line bg-bg px-4 py-16 md:px-8 md:py-24"
    >
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="kicker mb-4">{t(inquiryCopy.kicker)}</p>
          <h2 className="text-section text-fg">{t(inquiryCopy.title)}</h2>
          <div className="mt-6 h-px w-full max-w-md bg-accent" />
          <div className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-2">
            <span className="kicker text-fg">{t(inquiryCopy.inquire)}</span>
            <span className="text-sm text-muted">{t(inquiryCopy.contactTbd)}</span>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex min-h-11 items-center text-sm text-fg underline decoration-line underline-offset-4 hover:text-accent"
          >
            {INSTAGRAM_HANDLE}
          </a>
        </div>

        <div className="flex items-end justify-end lg:col-span-5">
          <p
            className="font-serif text-4xl font-light text-fg md:text-5xl"
            lang="he"
            dir="rtl"
          >
            {tAlt(inquiryCopy.title)}
          </p>
        </div>
      </div>

      <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted">{t(inquiryCopy.lead)}</p>

      <form onSubmit={onSubmit} className="mt-10 grid max-w-2xl gap-5">
        <div>
          <Label htmlFor="inq-name">{t(inquiryCopy.name)}</Label>
          <Input
            id="inq-name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            required
          />
        </div>
        <div>
          <Label htmlFor="inq-email">{t(inquiryCopy.email)}</Label>
          <Input
            id="inq-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            required
          />
        </div>
        <div>
          <Label htmlFor="inq-work">{t(inquiryCopy.work)}</Label>
          <select
            id="inq-work"
            name="work"
            value={form.work}
            onChange={(e) => setForm((f) => ({ ...f, work: e.target.value }))}
            className="h-11 w-full rounded-sm border border-line bg-surface px-3 text-base text-fg focus-visible:border-accent focus-visible:outline-none"
          >
            <option value="">{t(inquiryCopy.workAny)}</option>
            {works.map((work) => (
              <option key={work.slug} value={work.slug}>
                {work.index} — {t(work.title)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="inq-message">{t(inquiryCopy.message)}</Label>
          <Textarea
            id="inq-message"
            name="message"
            value={form.message}
            placeholder={t(inquiryCopy.messagePh)}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            required
          />
        </div>
        <div className="pt-2">
          <Button type="submit">{sent ? t(inquiryCopy.sent) : t(inquiryCopy.submit)}</Button>
        </div>
      </form>
    </section>
  );
}
