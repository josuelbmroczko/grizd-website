import { site, beatGenres } from "@/lib/content";
import { SectionDivider } from "./Waveform";
import { ArrowUpRight } from "lucide-react";

export function BeatStore() {
  return (
    <section className="bg-void py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow mb-3">Store</p>
        <h2 className="font-display text-3xl text-silver-100 sm:text-4xl">Beat Store</h2>

        <p className="mt-4 max-w-2xl text-silver-400">
          I create professional beats and custom instrumentals for independent and
          signed artists worldwide.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {beatGenres.map((genre) => (
            <span
              key={genre}
              className="rounded-full border border-hairline px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-silver-400"
            >
              {genre}
            </span>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-hairline bg-panel shadow-card">
          <iframe
            src={site.beatstoreEmbed}
            width="100%"
            height="800"
            style={{ maxWidth: "1024px", border: 0, display: "block", margin: "0 auto" }}
            title="GrizD BeatStars store"
            loading="lazy"
          />
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={site.beatstore}
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover flex items-center gap-2 rounded-full bg-silver-gradient px-6 py-3 text-sm font-medium text-void"
          >
            Browse Beat Store
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mt-24">
        <SectionDivider />
      </div>
    </section>
  );
}
