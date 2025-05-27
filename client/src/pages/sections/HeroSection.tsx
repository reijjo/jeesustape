import heroImage from "../../assets/hero.png";
import broken from "../../assets/images/broken.png";
import { Button } from "../../components/ui/button/Button";
import "./HeroSection.css";

export const HeroSection = () => {
  return (
    <section className="hero-section wrapper">
      <div className="hero-texts">
        <h1 className="hero-title">
          Ole oman elämäsi <span>jeesusteippi</span>
        </h1>
        <h6 className="hero-subtitle">
          Korjaa pikkuviat itse ilman turhia kuluja. Ota kuva ongelmasta tai
          kuvaile se tekoälylle ja saat ohjeet sen korjaamiseen askel
          askeleelta.
        </h6>
        <div className="hero-buttons">
          <Button children="Kokeile nyt" extraClass="btn-filled" />
          <Button children="Katso esimerkkejä" extraClass="btn-outline" />
        </div>
      </div>
      <picture className="hero-image-container">
        <div className="broken-overlay">
          <img src={broken} alt="Broken" />
        </div>
        <img className="hero-image" src={heroImage} alt="Hero" />
      </picture>
    </section>
  );
};
