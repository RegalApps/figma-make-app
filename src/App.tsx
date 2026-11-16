import { useState } from "react";

const artwork = "/assets/76de2.png";

export default function App() {
  const [isAutomatic, setIsAutomatic] = useState(true);

  return (
    <main className="stage">
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__artwork"
          src={artwork}
          alt=""
          width="2816"
          height="1250"
          draggable="false"
        />

        <div className="sr-only">
          <h1 id="hero-title">Sales performance on auto.</h1>
          <p>Instant insights and deal-closing power for your team.</p>
        </div>

        <button
          className="automation-toggle"
          type="button"
          aria-pressed={isAutomatic}
          aria-label={`Automatic sales insights are ${isAutomatic ? "on" : "off"}. Click to ${
            isAutomatic ? "turn them off" : "turn them on"
          }.`}
          onClick={() => setIsAutomatic((current) => !current)}
        >
          {isAutomatic ? "ON" : "OFF"}
        </button>
      </section>
    </main>
  );
}
