import { companyLogos } from "@/lib/content";

export function Companies() {
  const duplicatedPlatforms = [...companyLogos, ...companyLogos, ...companyLogos, ...companyLogos];
  return (
    <div className="py-12 overflow-hidden w-full">
      <div className="mx-auto w-full px-6">
        <div className="flex w-max items-center justify-center gap-x-16 opacity-60 grayscale transition-opacity hover:opacity-100 animate-marquee-right">
          {duplicatedPlatforms.map((platform, i) => (
            <div
              key={`${platform.name}-${i}`}
              className="flex h-16 w-32 shrink-0 items-center justify-center transition-transform hover:scale-110"
              title={platform.name}
            >
              <img 
                src={platform.src}
                alt={platform.name}
                className="max-h-12 max-w-full object-contain mix-blend-screen invert grayscale contrast-125 opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
