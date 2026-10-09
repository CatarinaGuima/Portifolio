import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="page-width flex flex-wrap items-center justify-between gap-4 py-8 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <a href="#" className="link-line">
          Voltar ao topo
        </a>
      </div>
    </footer>
  );
}
