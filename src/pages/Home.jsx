import "./Home.css";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">Nueva Colección 2025</p>
          <h1 className="hero-title">
            Lo mejor en <br />
            sneakers y ropa
          </h1>
          <a href="/sneakers" className="hero-btn">
            Ver colección
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;