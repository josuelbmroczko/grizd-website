import { tracks, site } from "@/lib/content";
import { SectionDivider } from "./Waveform";
import { ArrowUpRight } from "lucide-react";

export function MusicProduction() {
  return (
    <section id="music" className="bg-void py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow mb-3">Portfolio</p>
        <h2 className="font-display text-3xl text-silver-100 sm:text-4xl">
          Music Production
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="card-hover flex flex-col overflow-hidden rounded-2xl border border-hairline bg-panel shadow-card"
            >
              <iframe
                src={`https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=0`}
                width="100%"
                height="152"
                style={{ border: 0, overflow: "hidden" }}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                scrolling="no"
                title={`Spotify player - track ${track.id}`}
              />
              <div className="flex flex-1 flex-col gap-2 p-4">
                <p className="text-xs leading-relaxed text-silver-300">{track.role}</p>
                <p className="mt-auto font-mono text-[11px] text-silver-500">
                  {track.streams}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={site.fullCredits}
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover flex items-center gap-2 rounded-full border border-hairline bg-panel px-6 py-3 text-sm text-silver-200 shadow-card"
          >
            Full Credits
            <ArrowUpRight className="h-4 w-4 text-silver-400" />
          </a>
        </div>
      </div>

      <div className="mt-24">
        <SectionDivider />
      </div>
    </section>
  );
}
