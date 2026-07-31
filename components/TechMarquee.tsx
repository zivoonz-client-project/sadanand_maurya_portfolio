import { techStrip } from "@/lib/data";

export default function TechMarquee() {
  const items = [...techStrip, ...techStrip];
  return (
    <div className="border-y border-border bg-surface/30 py-5">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee gap-4">
          {items.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-white/75"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
