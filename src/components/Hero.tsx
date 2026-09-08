import { site } from "@/lib/content";
import { EqBars } from "./Waveform";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-void bg-noise pt-24"
    >
      {/* Fundo: substitua por foto real do estúdio em /public/images/studio-bg.jpg
          e troque este div por <Image fill ... /> — ver ASSETS_TODO.md */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 20%, rgba(196,196,210,0.10) 0%, rgba(196,196,210,0) 60%), radial-gradient(50% 40% at 15% 85%, rgba(196,196,210,0.06) 0%, rgba(196,196,210,0) 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
        <div className="flex animate-fadeUp items-center gap-4">
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-hairline bg-panel-gradient shadow-glow md:h-20 md:w-20">
            {/* Substitua por <Image src="/images/kristi-portrait.jpg" ... /> quando tiver a foto */}
          </div>
          <EqBars className="opacity-70" />
        </div>

        <div className="animate-fadeUp [animation-delay:100ms]">
          <p className="eyebrow mb-4">Based in Albania</p>
          <h1 className="font-display text-5xl leading-[1.05] text-silver-100 sm:text-6xl md:text-7xl">
            {site.name}
          </h1>
          <p className="mt-4 font-mono text-sm tracking-wide text-silver-400 sm:text-base">
            {site.role}
          </p>
        </div>

        <p className="max-w-xl animate-fadeUp text-base leading-relaxed text-silver-400 [animation-delay:200ms] sm:text-lg">
          {site.tagline}
        </p>

        <div className="flex animate-fadeUp flex-wrap gap-4 [animation-delay:300ms]">
          <a
            href="#music"
            className="rounded-full bg-silver-gradient px-6 py-3 text-sm font-medium text-void transition hover:opacity-90"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="rounded-full border border-hairline px-6 py-3 text-sm font-medium text-silver-200 transition hover:border-silver-400"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
