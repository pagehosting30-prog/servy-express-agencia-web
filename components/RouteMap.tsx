export default function RouteMap() {
  return (
    <figure className="rounded-card border border-ink/15 bg-cream p-5 shadow-hard-lg">
      <svg
        viewBox="0 0 420 320"
        role="img"
        aria-label="Mapa de rutas desde Sincelejo hacia Cartagena, Santa Marta y Medellín"
        className="w-full"
      >
        <line x1="150" y1="180" x2="90" y2="55" stroke="#0F5C52" strokeWidth="2.5" strokeDasharray="1 9" strokeLinecap="round" />
        <line x1="150" y1="180" x2="270" y2="45" stroke="#0F5C52" strokeWidth="2.5" strokeDasharray="1 9" strokeLinecap="round" />
        <line x1="150" y1="180" x2="335" y2="245" stroke="#6E7C2C" strokeWidth="2.5" strokeDasharray="1 9" strokeLinecap="round" />

        <circle cx="150" cy="180" r="8" fill="#C1502E" />
        <circle cx="150" cy="180" r="14" fill="none" stroke="#C1502E" strokeWidth="1.5" opacity="0.5" />
        <text x="150" y="206" textAnchor="middle" fontFamily="Work Sans, sans-serif" fontWeight={700} fontSize="13" fill="#2B2118">
          Sincelejo
        </text>

        <circle cx="90" cy="55" r="6" fill="#0F5C52" />
        <text x="90" y="38" textAnchor="middle" fontFamily="Work Sans, sans-serif" fontWeight={600} fontSize="12.5" fill="#2B2118">
          Cartagena
        </text>
        <text x="120" y="118" textAnchor="middle" fontFamily="Work Sans, sans-serif" fontSize="10.5" fill="#55493A">
          ~3.5 h
        </text>

        <circle cx="270" cy="45" r="6" fill="#0F5C52" />
        <text x="272" y="28" textAnchor="middle" fontFamily="Work Sans, sans-serif" fontWeight={600} fontSize="12.5" fill="#2B2118">
          Santa Marta
        </text>
        <text x="228" y="107" textAnchor="middle" fontFamily="Work Sans, sans-serif" fontSize="10.5" fill="#55493A">
          ~6 h
        </text>

        <circle cx="335" cy="245" r="6" fill="#6E7C2C" />
        <text x="352" y="240" textAnchor="start" fontFamily="Work Sans, sans-serif" fontWeight={600} fontSize="12.5" fill="#2B2118">
          Medellín
        </text>
        <text x="255" y="220" textAnchor="middle" fontFamily="Work Sans, sans-serif" fontSize="10.5" fill="#55493A">
          ~9 h
        </text>

        <circle cx="365" cy="60" r="16" fill="#E29321" opacity="0.85" />
      </svg>
      <figcaption className="mt-2.5 text-center text-[0.82rem] text-ink-soft">
        Salidas coordinadas desde Sincelejo hacia el Caribe y el interior del país.
      </figcaption>
    </figure>
  );
}
