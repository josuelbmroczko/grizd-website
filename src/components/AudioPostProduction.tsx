import { videoProjects } from "@/lib/content";
import { SectionDivider } from "./Waveform";
import { PlayCircle } from "lucide-react";

export function AudioPostProduction() {
  return (
    <section id="audio" className="bg-void py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow mb-3">Post-Production</p>
        <h2 className="font-display text-3xl text-silver-100 sm:text-4xl">
          Audio Editing &amp; Post-Production
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {videoProjects.map((project) => (
            <a
              key={project.driveUrl}
              href={project.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-panel shadow-card"
            >
              {/* Substitua por thumbnail/embed real do vídeo quando disponível.
                  Por ora, o card abre o arquivo do Google Drive em nova aba. */}
              <div className="relative flex aspect-video items-center justify-center bg-panelLight">
                <PlayCircle className="h-10 w-10 text-silver-500 transition group-hover:text-silver-200" />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <p className="text-sm font-medium text-silver-100">{project.title}</p>
                <p className="text-xs leading-relaxed text-silver-400">{project.role}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <SectionDivider />
      </div>
    </section>
  );
}
