import { companies } from "@/lib/content";

export function Companies() {
  return (
    <section className="border-y border-hairline bg-charcoal py-12">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow mb-8 text-center">Trusted by</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60 grayscale">
          {/* Substitua cada bloco pelo <Image src="/images/logos/xxx.png" ... />
              correspondente assim que os logos forem adicionados em /public/images/logos.
              Lista de empresas (ver lib/content.ts): {companies.join(", ")} */}
          {companies.map((name) => (
            <div
              key={name}
              className="flex h-8 w-24 items-center justify-center font-mono text-[10px] uppercase tracking-widest text-silver-500"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
