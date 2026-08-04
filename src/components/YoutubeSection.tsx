import { site } from "@/lib/content";
import { SectionDivider } from "./Waveform";

export function YoutubeSection() {
  return (
    <section className="bg-void py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow mb-3">Behind the scenes</p>
        <h2 className="font-display text-3xl text-silver-100 sm:text-4xl">YouTube</h2>

        <div className="mt-10 overflow-hidden rounded-2xl border border-hairline bg-panel shadow-card">
          <div className="flex flex-col items-start justify-between gap-4 border-b border-hairline p-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm text-silver-100">{site.youtubeHandle}</p>
              <p className="mt-1 font-mono text-xs text-silver-500">
                {site.youtubeSubs} • {site.youtubeViews}
              </p>
            </div>
            <a
              href={site.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-hairline px-5 py-2 text-xs uppercase tracking-widest text-silver-300 transition hover:border-silver-400 hover:text-silver-100"
            >
              Visit Channel
            </a>
          </div>

          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed?listType=user_uploads&list=ProdbyGrizD"
              title="ProdbyGrizD - YouTube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="mt-24">
        <SectionDivider />
      </div>
    </section>
  );
}
