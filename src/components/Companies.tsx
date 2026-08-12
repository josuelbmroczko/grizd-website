import { companies } from "@/lib/content";

export function Companies() {
  const duplicatedCompanies = [...companies, ...companies];
  return (
    <section className="border-y border-hairline bg-charcoal py-6 overflow-hidden">
      <div className="mx-auto w-full px-6">
        <div className="flex w-max items-center justify-center gap-x-12 opacity-60 grayscale animate-marquee-right">
          {/* Substitua cada bloco pelo <Image src="/images/logos/xxx.png" ... />
              correspondente assim que os logos forem adicionados em /public/images/logos.
              Lista de empresas (ver lib/content.ts): {companies.join(", ")} */}
          {duplicatedCompanies.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex h-8 w-24 shrink-0 items-center justify-center font-mono text-[10px] uppercase tracking-widest text-silver-500"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
