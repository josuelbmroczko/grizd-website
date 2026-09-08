import { site } from "@/lib/content";
import { SectionDivider } from "./Waveform";
import { Eye, Video, Youtube } from "lucide-react";

export function YoutubeSection() {
  return (
    <section className="bg-void py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void"></div>
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4 flex flex-col items-start gap-8">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-charcoal flex items-center justify-center border border-hairline overflow-hidden shadow-card">
                <img src="/logo.png" alt="GrizD Logo" className="h-full w-full object-contain p-2" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white">{site.youtubeHandle}</h3>
                <p className="text-sm text-silver-300 font-mono mt-1">{site.youtubeSubs}</p>
              </div>
            </div>

            <div className="flex flex-col gap-6 w-full">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-hairline bg-panel/50 text-silver-200 backdrop-blur-sm">
                  <Eye className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-xl font-bold text-white">{site.youtubeViews}</p>
                  <p className="text-[10px] text-silver-400 uppercase tracking-widest mt-0.5">Total views</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-hairline bg-panel/50 text-silver-200 backdrop-blur-sm">
                  <Video className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-xl font-bold text-white">100+</p>
                  <p className="text-[10px] text-silver-400 uppercase tracking-widest mt-0.5">Videos</p>
                </div>
              </div>
            </div>

            <a
              href={site.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold text-black transition-all hover:scale-105 hover:bg-silver-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <Youtube className="h-5 w-5 text-[#FF0000]" />
              SUBSCRIBE
            </a>
          </div>

          <div className="lg:col-span-8 w-full relative">
            <div className="overflow-hidden rounded-2xl border border-hairline bg-panel shadow-2xl aspect-video w-full transition-transform hover:scale-[1.02] duration-500 relative z-10">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${site.youtubeFeaturedVideo}`}
                title="ProdbyGrizD - YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            {/* Subtle glow behind video */}
            <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full scale-90 z-0"></div>
          </div>

        </div>
      </div>

      <div className="mt-24 relative z-10">
        <SectionDivider />
      </div>
    </section>
  );
}
