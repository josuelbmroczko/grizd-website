import { expertise } from "@/lib/content";
import { SectionDivider } from "./Waveform";

export function Expertise() {
  return (
    <section className="bg-void py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow mb-3">What I do</p>
        <h2 className="font-display text-3xl text-silver-100 sm:text-4xl">Expertise</h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="card-hover rounded-2xl border border-hairline bg-panel p-6 shadow-card"
            >
              <h3 className="font-display text-lg text-silver-100">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-silver-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <SectionDivider />
      </div>
    </section>
  );
}
