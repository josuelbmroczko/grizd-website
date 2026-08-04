import { site } from "@/lib/content";
import { Download } from "lucide-react";
import { SectionDivider } from "./Waveform";

export function Resume() {
  return (
    <section id="resume" className="bg-void py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="eyebrow mb-3">CV</p>
        <h2 className="font-display text-3xl text-silver-100 sm:text-4xl">Resume</h2>

        <a
          href={site.cvFile}
          download
          className="card-hover mt-8 inline-flex items-center gap-2 rounded-full bg-silver-gradient px-8 py-3.5 text-sm font-medium text-void"
        >
          <Download className="h-4 w-4" />
          Download my CV
        </a>

        {/* Coloque o arquivo do currículo em /public/cv/kristi-skendaj-cv.pdf */}
      </div>

      <div className="mt-24">
        <SectionDivider />
      </div>
    </section>
  );
}
