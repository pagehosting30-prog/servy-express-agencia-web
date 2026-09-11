export default function IntroBand() {
  return (
    <section className="bg-teal-deep text-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-7 py-16 md:grid-cols-2">
        <div>
          <span className="mb-2.5 block text-[0.92rem] font-semibold text-[#F2C879]">
            Dos servicios, una sola agencia
          </span>
          <h2 className="font-display text-[clamp(1.7rem,3vw,2.3rem)] font-semibold text-cream">
            No solo te llevamos: te llevamos bien
          </h2>
        </div>
        <p className="text-[1.05rem] text-cream/85">
          Servy Express nació en Sincelejo para resolver dos necesidades que casi siempre van juntas: moverse con seguridad desde la Sabana hacia otras ciudades, y tener un paquete turístico armado sin tener que llamar a cinco proveedores distintos. Coordinamos hospedaje, tours, alimentación y el transporte, ida y vuelta, con un solo punto de contacto.
        </p>
      </div>
    </section>
  );
}
