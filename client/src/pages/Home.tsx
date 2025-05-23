import { Button } from "../components/ui/button/Button";
import "./Home.css";

const Home = () => {
  return (
    <main className="home">
      <section className="hero-section wrapper">
        <div className="hero-texts">
          <h1 className="hero-title">
            Ole oman elämäsi <span>jeesusteippi</span>
          </h1>
          <p className="hero-subtitle">
            Korjaa pikkuviat itse <span>ilman turhia kuluja</span>. Ota kuva
            ongelmasta ja tekoäly antaa ohjeet sen korjaamiseen askel
            askeleelta.
          </p>
          <div className="hero-buttons">
            <Button children="Kokeile nyt" extraClass="btn-filled btn-cta" />
          </div>
        </div>
        <picture>
          <img className="hero-image" src="/images/hero.png" alt="Hero" />
        </picture>
      </section>
    </main>
  );
};

export default Home;
