import { aboutParagraphs, highlights } from "@/lib/content";
import { SectionDivider } from "./Waveform";

export function AboutMe() {
  return (
    <section id="about" className="bg-void py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-[280px_1fr]">
        <div>
          {/* Substitua por <Image src="/images/kristi-portrait.jpg" ... /> quando disponível */}
          <div className="aspect-[4/5] w-full max-w-[280px] rounded-2xl border border-hairline bg-panel-gradient shadow-card">
            <div className="flex h-full w-full items-center justify-center font-display text-4xl text-silver-500">
              KS
            </div>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-3">About</p>
          <h2 className="font-display text-3xl text-silver-100 sm:text-4xl">About Me</h2>

          <div className="mt-6 space-y-4">
            {aboutParagraphs.map((p, i) => (
              <p key={i} className="max-w-2xl leading-relaxed text-silver-400">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="card-hover rounded-xl border border-hairline bg-panel px-4 py-5 text-center shadow-card"
              >
                <p className="font-mono text-xl text-silver-100 sm:text-2xl">{h.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-silver-500">
                  {h.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24">
        <SectionDivider />
      </div>
    </section>
  );
}
