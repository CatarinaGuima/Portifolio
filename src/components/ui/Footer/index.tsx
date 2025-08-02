export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 text-sm opacity-80 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Catarina Guimarães. Todos os direitos reservados.</p>
        <p>Feito com Next.js & Tailwind.</p>
      </div>
    </footer>
  );
}
