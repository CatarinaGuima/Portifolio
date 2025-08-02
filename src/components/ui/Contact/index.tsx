export default function Contact() {
  return (
    <section id="contato" className="section">
      <div className="container grid gap-6 md:grid-cols-2">
        <h2 className="section-title">Contato</h2>
        <div className="space-y-4">
          <p>Quer trocar uma ideia ou colaborar em um projeto?</p>
          <div className="flex gap-3">
            <a className="btn btn-primary" href="mailto:seuemail@exemplo.com">E-mail</a>
            <a className="btn btn-ghost" href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn btn-ghost" href="https://github.com/catarinaguima" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
