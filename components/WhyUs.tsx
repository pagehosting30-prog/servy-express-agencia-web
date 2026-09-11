const items = [
  {
    title: "Salimos desde Sincelejo",
    text: "Coordinación directa desde la Sabana, sin intermediarios ni terminales de paso. Hablas con quien organiza tu viaje.",
  },
  {
    title: "Vehículos y buses verificados",
    text: "Revisamos cada vehículo y conductor antes de la salida, tanto en los paquetes como en el transporte expreso.",
  },
  {
    title: "Precios claros por rango",
    text: "El valor final depende de fecha, temporada y número de personas, pero siempre lo confirmamos antes de reservar.",
  },
];

export default function WhyUs() {
  return (
    <section id="nosotros" className="py-20">
      <div className="mx-auto max-w-6xl px-7">
        <div className="mb-11 max-w-[60ch]">
          <span className="mb-2.5 block text-[0.92rem] font-semibold text-terracotta-deep">
            Por qué viajar con nosotros
          </span>
          <h2 className="font-display text-[clamp(1.7rem,3vw,2.3rem)] font-semibold">
            Coordinación real, no solo una reserva
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="border-l-[3px] border-terracotta pl-5">
              <h3 className="mb-2.5 text-[1.15rem] font-semibold">{item.title}</h3>
              <p className="text-[0.98rem] text-ink-soft">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
