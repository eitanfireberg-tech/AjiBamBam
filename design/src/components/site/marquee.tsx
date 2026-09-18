import { marqueeItems } from "@/lib/content";
import { useLang } from "@/lib/lang";

export function Marquee() {
  const { t, tAlt } = useLang();
  const loop = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden border-y border-line bg-bg py-3">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap px-6">
        {loop.map((item, i) => (
          <span key={`${item.en}-${i}`} className="kicker text-muted">
            {t(item)}
            <span className="mx-3 text-faint">·</span>
            <span className="text-faint">{tAlt(item)}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
