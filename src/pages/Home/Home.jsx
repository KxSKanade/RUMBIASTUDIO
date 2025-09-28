import React, { useRef, useState, useEffect } from "react";
import "./Home.css";

export default function App() {
  const trackRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const scrollAmount = 300;
  const handleLeft = () => {
    if (trackRef.current) trackRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };
  const handleRight = () => {
    if (trackRef.current) trackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        closeModal();
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Cerrar menú móvil al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && !e.target.closest('.nav')) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
    e.target.reset();
  };

  const year = new Date().getFullYear();

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="/">
            <span className="brand-logo" aria-hidden="true">🎓</span>
            <span className="brand-text">RUMBIA</span>
          </a>
          <nav className="nav-links">
            <a href="#beneficios">Beneficios</a>
            <a href="#valor">Mapa de valor</a>
            <a href="#comunidad">Comunidad</a>
            <a href="/login"><button className="btn btn-primary">Inicia Sesión</button></a>
          </nav>
          <button 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Menú de navegación"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#beneficios" onClick={() => setMobileMenuOpen(false)}>Beneficios</a>
          <a href="#valor" onClick={() => setMobileMenuOpen(false)}>Mapa de valor</a>
          <a href="#comunidad" onClick={() => setMobileMenuOpen(false)}>Comunidad</a>
          <a href="/login" onClick={() => setMobileMenuOpen(false)}>
            <button className="btn btn-primary">Inicia Sesión</button>
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>Orientación vocacional por <span className="grad">videollamada</span></h1>
              <p className="lead">
                Estudiantes de educación superior guían a adolescentes y jóvenes (12–27 años) de Perú e internacional.
                Aclara tus dudas y elige con seguridad tu camino.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary" onClick={openModal}>Reservar sesión</button>
                <a className="btn btn-ghost" href="#valor">Ver mapa de valor</a>
              </div>
              <ul className="quick-tags">
                <li>Perú</li><li>Freemium</li><li>Síncrono</li><li>Accesible</li>
              </ul>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="video-mock">
                <div className="video-topbar">
                  <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                </div>
                <div className="video-body">
                  <div className="video-main">Tu mentor</div>
                  <div className="video-side">
                    <div className="pill">Consejos reales</div>
                    <div className="pill">Experiencia cercana</div>
                    <div className="pill">Decide con seguridad</div>
                  </div>
                </div>
                <div className="video-toolbar">
                  <button title="Silenciar">🔇</button>
                  <button className="danger" title="Colgar">⏹</button>
                  <button title="Compartir pantalla">🖥️</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mentores container">
          <h2>Charlas Recomendadas</h2>

          <div className="carousel-container">
            <button className="carousel-arrow left" onClick={handleLeft}>←</button>

            <div className="carousel-track" id="carouselTrack" ref={trackRef}>
              <article className="mentor-card">
                <div className="card-img">
                  <img src="/igsistemas.jpeg" alt="Andrea · Ingeniería" />
                </div>
                <div className="card-body">
                  <div className="top-info">
                    <h3>Explora Ingeniería de Sistemas</h3>
                    <span className="price">S/20</span>
                  </div>
                  <p className="mentor-area">12/10/2025 · Inscripción hasta 10/10</p>
                  <p>Conoce herramientas, cursos clave y lo que no te cuentan de la carrera.</p>
                  <a href="/mentor1.html" className="btn-card">Inscribirme</a>
                </div>
                <div className="mentor-footer">
                  <img src="/mentor1.jpeg" className="avatar" alt="Andrea" />
                  <span className="username">@andrea_tech</span>
                </div>
              </article>

              <article className="mentor-card">
                <div className="card-img">
                  <img src="/medicina.jpeg" alt="Carlos · Innovación" />
                </div>
                <div className="card-body">
                  <div className="top-info">
                    <h3>Innovación y salud pública</h3>
                    <span className="price">S/15</span>
                  </div>
                  <p className="mentor-area">15/10/2025 · Inscripción hasta 13/10</p>
                  <p>Oportunidades reales para jóvenes en carreras de salud e innovación.</p>
                  <a href="/mentor2.html" className="btn-card">Inscribirme</a>
                </div>
                <div className="mentor-footer">
                  <img src="/mentor2.jpg" className="avatar" alt="Carlos" />
                  <span className="username">@carlos_med</span>
                </div>
              </article>

              <article className="mentor-card">
                <div className="card-img">
                  <img src="/psicologia.jpeg" alt="Ruben · Tecnología" />
                </div>
                <div className="card-body">
                  <div className="top-info">
                    <h3>Productividad universitaria</h3>
                    <span className="price">S/15</span>
                  </div>
                  <p className="mentor-area">18/10/2025 · Inscripción hasta 16/10</p>
                  <p>Descubre apps, hábitos y herramientas que te salvan el ciclo.</p>
                  <a href="/mentor3.html" className="btn-card">Inscribirme</a>
                </div>
                <div className="mentor-footer">
                  <img src="/mentor3.jpeg" className="avatar" alt="Ruben" />
                  <span className="username">@ruben.tech</span>
                </div>
              </article>

            </div>

            <button className="carousel-arrow right" onClick={handleRight}>→</button>
          </div>
        </section>

        <section id="valor" className="valor">
          <div className="container">
            <h2>Mapa de valor</h2>
            <div className="grid-3">
              <div className="stack">
                <ul className="list-ranked">
                  <li><span className="badge badge-essential">Esencial</span> Plataforma web con videollamadas en tiempo real.</li>
                  <li><span className="badge badge-essential">Esencial</span> Acceso a universitarios que comparten su experiencia.</li>
                  <li><span className="badge">Importante</span> Agenda en línea para reservar sesiones.</li>
                  <li><span className="badge">Importante</span> Biblioteca digital con recursos y guías.</li>
                  <li><span className="badge badge-nice">Agradable</span> Foro/comunidad para dudas rápidas.</li>
                  <li><span className="badge badge-nice">Agradable</span> Noticias de becas, ferias y universidades.</li>
                </ul>
              </div>
              <div className="stack">
                <ul className="list-ranked">
                  <li><span className="badge badge-essential">Esencial</span> Videollamadas personalizadas que reducen la incertidumbre.</li>
                  <li><span className="badge badge-essential">Esencial</span> Información verificada y confiable.</li>
                  <li><span className="badge">Importante</span> Asesoría cercana y motivacional.</li>
                  <li><span className="badge">Importante</span> Precios accesibles / freemium.</li>
                  <li><span className="badge badge-nice">Agradable</span> Interfaz intuitiva y atractiva.</li>
                </ul>
              </div>
              <div className="stack">
                <ul className="list-ranked">
                  <li><span className="badge badge-essential">Esencial</span> Orientación clara para decidir con seguridad.</li>
                  <li><span className="badge">Importante</span> Experiencias inspiradoras de universitarios.</li>
                  <li><span className="badge">Importante</span> Ahorro de tiempo centralizando información.</li>
                  <li><span className="badge badge-nice">Agradable</span> Conexión con una comunidad afín.</li>
                  <li><span className="badge badge-nice">Agradable</span> Gamificación: logros, insignias, retos.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="container beneficios">
          <h2>¿Por qué usar Rumbía?</h2>
          <div className="cards">
            <article className="card card-icon">
              <div className="i">💬</div>
              <h3>Conversaciones reales</h3>
              <p>Habla con quien ya está en la carrera que te interesa.</p>
            </article>
            <article className="card card-icon">
              <div className="i">📚</div>
              <h3>Recursos prácticos</h3>
              <p>Guías, rutas y comparativas para decidir mejor.</p>
            </article>
            <article className="card card-icon">
              <div className="i">⏱️</div>
              <h3>Reserva en minutos</h3>
              <p>Agenda en línea y recordatorios automáticos.</p>
            </article>
          </div>
        </section>

        <section className="agenda">
          <div className="container agenda-grid">
            <div>
              <h2>Reserva tu sesión</h2>
              <p>Selecciona área de interés y un horario disponible.</p>
              <form id="formReserva" className="form" onSubmit={handleSubmit}>
                <label>
                  Área de interés
                  <select name="area" required>
                    <option value="">Selecciona…</option>
                    <option>Ingenierías</option>
                    <option>Salud</option>
                    <option>Negocios</option>
                    <option>Artes & Diseño</option>
                    <option>Ciencias Sociales</option>
                    <option>Tecnología</option>
                  </select>
                </label>
                <label>
                  Fecha
                  <input type="date" name="fecha" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" placeholder="tucorreo@ejemplo.com" required />
                </label>
                <button className="btn btn-primary" type="submit">Confirmar reserva</button>
              </form>
            </div>

            <div className="slots" style={{padding: 0, margin: 0}}>
              <img src="/xd.jpg" alt="" style={{width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: 12}} />
            </div>
          </div>
        </section>

        <section id="comunidad" className="comunidad-section container">
          <h2 className="comunidad-title">Comunidad</h2>
          <div className="comunidad-cards">
            <article className="comunidad-card">
              <blockquote className="comunidad-quote">
                “Gracias a la sesión entendí la diferencia entre Ing. de Sistemas e Ing. de Software.
                Ahora sé qué cursos me esperan y qué me gusta más.”
              </blockquote>
              <div className="comunidad-avatar">
                <span className="avatar-inicial">J</span>
                <div className="avatar-info">
                  <strong>Joselyn (17)</strong>
                  <small>Secundaria · Trujillo</small>
                </div>
              </div>
            </article>

            <article className="comunidad-card">
              <blockquote className="comunidad-quote">
                “Me contaron la realidad de Medicina y opciones de becas. Fue directo y sin humo.”
              </blockquote>
              <div className="comunidad-avatar">
                <span className="avatar-inicial">M</span>
                <div className="avatar-info">
                  <strong>Matías (19)</strong>
                  <small>Preuniversitario · Lima</small>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="cta">
          <div className="container cta-box">
            <h2>¿Listo para elegir con seguridad?</h2>
            <p>Agenda una videollamada y resuelve tus dudas con alguien que ya vive esa carrera.</p>
            <button className="btn btn-light" onClick={openModal}>Agendar ahora</button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container foot">
          <small>© <span id="year">{year}</span> RUMBIA  · Educación que acompaña decisiones.</small>
          <nav className="foot-links">
            <a href="#">Términos</a>
            <a href="#">Privacidad</a>
            <a href="#">Contacto</a>
          </nav>
        </div>
      </footer>

      {modalOpen && (
        <div className="modal" role="dialog" aria-modal="true" style={{
          position: "fixed", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
          background: "rgba(0,0,0,0.45)", zIndex: 60
        }}>
          <div className="modal-card" style={{ background: "white", padding: 24, borderRadius: 8, maxWidth: 520, width: "90%" }}>
            <h3>¡Reserva recibida!</h3>
            <p>Te enviaremos un correo con la confirmación y el enlace de la videollamada.</p>
            <div style={{ marginTop: 16, display: "flex", justifyContent: "center" }}>
              <button className="btn btn-primary" onClick={closeModal}>Aceptar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
