import { EMAIL, PHONE_DISPLAY, waLink } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contacto" className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-7 py-20 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="mb-2.5 block text-[0.92rem] font-semibold text-mango">Contacto</span>
          <h2 className="font-display text-[clamp(1.7rem,3vw,2.2rem)] font-semibold text-cream">
            Cuéntanos a dónde vas
          </h2>
          <p className="mt-3.5 max-w-[48ch] text-[1.03rem] text-cream/80">
            Escríbenos por WhatsApp o correo con tu destino, fechas y número de personas, y te confirmamos disponibilidad y precio.
          </p>
        </div>

        <div className="rounded-card border border-cream/20 bg-cream/[0.06] p-7">
          <div className="flex items-center justify-between border-b border-cream/15 py-3.5">
            <span className="text-[0.82rem] text-cream/60">Teléfono comercial</span>
            <a className="font-semibold text-cream" href="tel:+573127087404">
              {PHONE_DISPLAY}
            </a>
          </div>
          <div className="flex items-center justify-between border-b border-cream/15 py-3.5">
            <span className="text-[0.82rem] text-cream/60">Correo electrónico</span>
            <a className="font-semibold text-cream" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </div>
          <div className="flex items-center justify-between py-3.5">
            <span className="text-[0.82rem] text-cream/60">Ubicación</span>
            <span className="font-semibold text-cream">Sincelejo, Sucre, Colombia</span>
          </div>
          <a
            href={waLink("Hola, quiero mas informacion sobre sus servicios")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex w-full items-center justify-center rounded-lg bg-terracotta px-5 py-3 font-semibold text-cream hover:bg-terracotta-deep"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
