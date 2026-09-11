import { transportRoutes, waLink } from "@/lib/data";

export default function Transport() {
  return (
    <section id="transporte" className="bg-sand-deep py-20">
      <div className="mx-auto max-w-6xl px-7">
        <div className="mb-11 max-w-[60ch]">
          <span className="mb-2.5 block text-[0.92rem] font-semibold text-terracotta-deep">
            Transporte expreso
          </span>
          <h2 className="font-display text-[clamp(1.7rem,3vw,2.3rem)] font-semibold">
            Vehículo privado, puerta a puerta
          </h2>
          <p className="mt-3.5 text-[1.05rem] text-ink-soft">
            Para 1 a 4 personas, directo desde Sincelejo, sin paradas ni terminales. Ideal para viajes de trabajo, entregas urgentes o cuando prefieres no depender de horarios de bus.
          </p>
        </div>

        <div className="overflow-hidden rounded-card border border-ink bg-cream">
          {transportRoutes.map((route, i) => (
            <div
              key={route.destino}
              className={`grid grid-cols-1 items-center gap-2.5 px-6 py-5 md:grid-cols-[1.4fr_0.7fr_1.1fr_1fr_auto] md:gap-5 ${
                i > 0 ? "border-t border-ink/15" : ""
              }`}
            >
              <div className="font-display text-[1.15rem] font-semibold">
                Sincelejo → {route.destino}
                <small className="mt-0.5 block font-body text-[0.82rem] font-medium text-ink-soft">
                  Solo ida
                </small>
              </div>
              <div className="text-[0.85rem] font-semibold text-teal-deep">{route.duracion}</div>
              <div className="text-[0.88rem] text-ink-soft">1 a 4 personas</div>
              <div>
                <span className="block font-display text-[1.05rem] font-bold text-terracotta-deep">
                  ${route.precioMin} – ${route.precioMax}
                </span>
                <span className="block text-[0.78rem] text-ink-soft">COP / trayecto</span>
              </div>
              <a
                href={waLink(`Hola, quiero cotizar un transporte privado Sincelejo - ${route.destino}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center justify-center rounded-lg border border-ink px-4 py-2.5 text-[0.88rem] font-semibold text-ink hover:bg-ink hover:text-cream"
              >
                Cotizar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
