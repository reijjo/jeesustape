import "./HowItWorksSection.css";
// import patrik from "../../../assets/images/giphy.webp";
import { HowSteps } from "./steps/HowSteps";

export const HowItWorksSection = () => (
  <section id="how-it-works" className="how-it-works-section">
    <div className="wrapper how-it-works-grid">
      <div className="how-it-works-texts">
        <h3 className="how-it-works-header">
          Neljä simppeliä askelta korjaukseen
        </h3>
        <h6>Ei arvailuja ja turhia YouTube tutoriaaleja vaan selkeät ohjeet</h6>
      </div>
      {/* <div className="how-it-works-steps">
        <div className="how-it-works-card">
          <div className="how-it-works-card-number">
            <h5>1</h5>
          </div>
          <img
            src={patrik}
            alt="Step 1"
            className="how-it-works-card-image"
            title="Step 1"
            loading="lazy"
          />
          <div className="how-it-works-card-texts">
            <h4 className="how-it-works-card-title">Unohda tämä fiilis</h4>
            <p className="how-it-works-card-text">
              Ja siirry seuraavaan kohtaan
            </p>
          </div>
        </div>
      </div> */}
      <HowSteps />
    </div>
  </section>
);
