export default function Footer() {
  return (
    <footer className="border-t border-cream/15 bg-ink py-7 text-[0.85rem] text-cream/55">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2.5 px-7">
        <span>© {new Date().getFullYear()} Servy Express Agencia · Corozal, Sucre</span>
        <span>Transporte privado y paquetes turísticos</span>
      </div>
    </footer>
  );
}
