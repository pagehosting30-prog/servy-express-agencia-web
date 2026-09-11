export const WHATSAPP_NUMBER = "573127087404";
export const PHONE_DISPLAY = "312 708 7404";
export const EMAIL = "contabilidadservicorozal@gmail.com";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type Package = {
  accent: "teal" | "olive" | "mango";
  destino: string;
  duracion: string;
  incluye: string;
  precioMin: string;
  precioMax: string;
  unidad: string;
};

export const packages: Package[] = [
  {
    accent: "teal",
    destino: "Cartagena + Barú e Islas",
    duracion: "3 días / 2 noches",
    incluye:
      "Bus ida y vuelta, hospedaje, pasadía en lancha a las Islas del Rosario, día de playa en Playa Blanca (Barú) y alimentación base.",
    precioMin: "680.000",
    precioMax: "980.000",
    unidad: "por persona",
  },
  {
    accent: "olive",
    destino: "Medellín + Guatapé",
    duracion: "4 días / 3 noches",
    incluye:
      "Transporte ida y vuelta, hospedaje, Graffitour por la Comuna 13, tour a Guatapé y El Peñol, y transporte urbano incluido.",
    precioMin: "970.000",
    precioMax: "1.415.000",
    unidad: "por persona",
  },
  {
    accent: "mango",
    destino: "Santa Marta + Taganga",
    duracion: "3 días / 2 noches",
    incluye:
      "Bus ida y vuelta, hospedaje, visita a Taganga y Playa Grande, entrada al Parque Tayrona y alimentación base.",
    precioMin: "770.000",
    precioMax: "1.050.000",
    unidad: "por persona",
  },
];

export type TransportRoute = {
  destino: string;
  duracion: string;
  precioMin: string;
  precioMax: string;
};

export const transportRoutes: TransportRoute[] = [
  { destino: "Cartagena", duracion: "~3.5 horas", precioMin: "450.000", precioMax: "600.000" },
  { destino: "Santa Marta", duracion: "~6 horas", precioMin: "800.000", precioMax: "1.100.000" },
  { destino: "Medellín", duracion: "~9 horas", precioMin: "1.400.000", precioMax: "1.800.000" },
];
