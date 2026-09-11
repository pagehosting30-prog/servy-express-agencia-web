import { packages, waLink } from "@/lib/data";

const topBg: Record<string, string> = {
  teal: "bg-teal",
  olive: "bg-olive",
  mango: "bg-mango",
};

export default function Packages() {
  return (
    <section id="paquetes" className="py-20">
      <div className="mx-auto max-w-6xl px-7">
        <div className="mb-11 max-w-[60ch]">
          <span className="mb-2.5 block text-[0.92rem] font-semibold text-terracotta-deep">
            Paquetes turísticos
          </span>
          <h2 className="font-display text-[clamp(1.7rem,3vw,2.3rem)] font-semibold">
            Todo incluido, salidas desde Sincelejo
          </h2>
          <p className="mt-3.5 text-[1.05rem] text-ink-soft">
            Transporte ida y vuelta, hospedaje y los planes que hacen la diferencia en cada destino. Precio final según temporada, fecha y tamaño del grupo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.destino}
              className="flex flex-col overflow-hidden rounded-card border border-ink bg-cream shadow-hard"
            >
              <div className={`${topBg[pkg.accent]} px-5 pb-4 pt-5 text-cream`}>
                <div className="text-[0.82rem] font-semibold opacity-90">{pkg.duracion}</div>
                <h3 className="mt-1.5 font-display text-[1.35rem] text-cream">{pkg.destino}</h3>
              </div>
              <div className="flex flex-1 flex-col gap-4 px-5 pb-6 pt-5">
                <p className="text-[0.94rem] text-ink-soft">{pkg.incluye}</p>
                <div className="mt-auto border-t border-dashed border-ink/15 pt-3.5">
                  <div className="font-display text-lg font-bold text-terracotta-deep">
                    ${pkg.precioMin} – ${pkg.precioMax} COP
                  </div>
                  <div className="text-[0.82rem] text-ink-soft">{pkg.unidad}</div>
                </div>
                <a
                  href={waLink(`Hola, quiero informacion sobre el paquete ${pkg.destino}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center justify-center rounded-lg bg-terracotta px-5 py-3 text-center font-semibold text-cream hover:bg-terracotta-deep"
                >
                  Consultar cupos
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
