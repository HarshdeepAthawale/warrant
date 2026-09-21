import { Reveal } from "@/components/ui/reveal";

type Item = { title: string; body: string };

export function FeatureList({
  items,
  startIndex = 1,
}: {
  items: Item[];
  startIndex?: number;
}) {
  return (
    <div className="mt-12 border-t border-border">
      {items.map((item, i) => (
        <Reveal key={item.title}>
          <div className="group grid grid-cols-1 items-baseline gap-x-10 gap-y-2 border-b border-border py-7 transition-colors sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.45fr)]">
            <div className="flex items-baseline gap-4">
              <span className="mono text-[0.78rem] tabular-nums text-faint">
                {String(startIndex + i).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-medium text-ink sm:text-[1.4rem]">
                {item.title}
              </h3>
            </div>
            <p className="text-[0.98rem] leading-relaxed text-muted">{item.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
