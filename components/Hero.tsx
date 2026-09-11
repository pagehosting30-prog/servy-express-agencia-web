import RouteMap from "./RouteMap";

export default function Hero() {
  return (
    <section className="bg-grain relative overflow-hidden py-16 md:py-20">
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-7 md:grid-cols-[1.05fr_0.95fr]">
        <div className="order-2 md:order-1">
          <span className="mb-4 flex items-center gap-2.5 text-[0.92rem] font-semibold text-teal-deep before:h-0.5 before:w-7 before:bg-terracotta before:content-['']">
            Desde Sincelejo, Sucre
          </span>
          <h1 className="max-w-[15ch] font-display text-[clamp(2.1rem,4vw,3.15rem)] font-semibold leading-[1.08]">
            Tu viaje empieza en la Sabana y llega hasta el mar y la montaña
          </h1>
          <p className="mt-5 max-w-[46ch] text-lg text-ink-soft">
            Combinamos transporte privado puerta a puerta con paquetes turísticos completos a Cartagena, Santa Marta y Medellín. Un solo contacto, todo coordinado.
          </p>
          <div className="mt-7 flex flex-wrap gap-3.5">
            <a
              href="#paquetes"
              className="inline-flex items-center gap-2 rounded-lg bg-terracotta px-5 py-3 font-semibold text-cream hover:bg-terracotta-deep"
            >
              Ver paquetes turísticos
            </a>
            <a
              href="#transporte"
              className="inline-flex items-center gap-2 rounded-lg border border-ink px-5 py-3 font-semibold text-ink hover:bg-ink hover:text-cream"
            >
              Cotizar transporte privado
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <RouteMap />
        </div>
      </div>
    </section>
  );
}
