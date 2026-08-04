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
            <div
              key={project.driveUrl}
              className="card-hover group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-panel shadow-card"
            >
              <div className="relative flex aspect-video w-full overflow-hidden bg-panelLight">
                <iframe
                  src={project.driveUrl.replace("/view?usp=sharing", "/preview").replace("/view", "/preview")}
                  className="h-full w-full border-0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <p className="text-sm font-medium text-silver-100">{project.title}</p>
                <p className="text-xs leading-relaxed text-silver-400">{project.role}</p>
              </div>
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
