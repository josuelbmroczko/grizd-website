"use client";

import { useState } from "react";
import { tracks, site } from "@/lib/content";
import { SectionDivider } from "./Waveform";
import { ArrowUpRight } from "lucide-react";

export function MusicProduction() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <section id="music" className="bg-void py-24">
      <div className="mx-auto max-w-9xl px-9">
        <p className="eyebrow mb-3">Portfolio</p>
        <h2 className="font-display text-3xl text-silver-100 sm:text-4xl">
          Music Production
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {tracks.map((track) => {
            const isActive = playingId === track.id;

            return (
              <div
                key={track.id}
                onMouseEnter={() => {
                  if (typeof window !== 'undefined' && window.matchMedia('(min-width: 640px)').matches) {
                    setPlayingId(track.id);
                  }
                }}
                onMouseLeave={() => {
                  if (typeof window !== 'undefined' && window.matchMedia('(min-width: 640px)').matches) {
                    setPlayingId(null);
                  }
                }}
                onClick={() => {
                  if (typeof window !== 'undefined' && !window.matchMedia('(min-width: 640px)').matches) {
                    setPlayingId(track.id);
                  }
                }}
                className={`group relative flex aspect-square flex-col justify-end overflow-hidden rounded-2xl border border-hairline shadow-card transition-all duration-700 ease-out ${isActive ? 'col-span-2 sm:col-span-1' : ''}`}
              >
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ${isActive ? '' : 'group-hover:scale-110'}`}
                  style={{ backgroundImage: `url(${track.coverUrl})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${isActive ? 'from-black/90 via-black/20 to-transparent' : 'from-black/95 via-black/60 to-black/10 group-hover:opacity-90'}`} />

                <div className="relative z-10 flex h-full flex-col justify-end p-0">
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className={`absolute bottom-0 left-0 right-0 z-20 h-[152px] overflow-hidden rounded-b-2xl transition-all duration-700 delay-150 ease-out ${
                      isActive ? 'opacity-100 translate-y-0' : 'pointer-events-none translate-y-8 opacity-0'
                    }`}
                  >
                    {isActive && (
                      <iframe
                        src={`https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=0&autoplay=1`}
                        width="100%"
                        height="152"
                        style={{ border: 0, overflow: 'hidden' }}
                        scrolling="no"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        title={`Spotify player - track ${track.id}`}
                      />
                    )}
                  </div>

                  <div
                    className={`flex h-full w-full flex-col justify-end p-4 text-left transition-all duration-500 sm:p-5 ${
                      isActive ? 'pointer-events-none opacity-0' : 'opacity-100'
                    }`}
                  >
                    <div className="flex w-full items-start justify-between gap-3">
                      <h3 className="font-display text-sm font-bold leading-tight text-white sm:text-base line-clamp-2">
                        {track.title}
                      </h3>
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center text-[#1ed760] drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <svg className="h-full w-full" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.434-5.305-1.76-8.786-.963-.335.077-.67-.133-.746-.47-.077-.334.132-.67.47-.745 3.808-.87 7.076-.496 9.712 1.115.293.18.386.563.207.856zm1.236-2.756c-.227.368-.7.48-1.066.254-2.693-1.652-6.816-2.146-9.965-1.175-.407.125-.838-.102-.962-.51-.125-.406.102-.838.51-.962 3.593-1.107 8.163-.55 11.23 1.332.367.226.48.697.253 1.06zm.106-2.88c-3.226-1.913-8.543-2.09-11.616-1.157-.492.15-1.008-.126-1.158-.617-.15-.492.126-1.008.617-1.158 3.52-1.068 9.382-.865 13.082 1.33.444.264.59.852.327 1.296-.265.445-.853.592-1.297.327z" />
                        </svg>
                      </div>
                    </div>
                    <p className="mt-1 text-[10px] leading-relaxed text-silver-300 sm:text-xs line-clamp-2">
                      {track.role}
                    </p>
                    <p className="mt-1 font-mono text-[10px] text-silver-400">
                      {track.streams}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
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
