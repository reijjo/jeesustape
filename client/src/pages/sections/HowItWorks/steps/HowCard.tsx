import type { ReactElement } from "react";
import "./HowCard.css";

interface HowCardProps {
  step: number;
  image?: string;
  icon?: ReactElement;
  title: string;
  text: string;
}

export const HowCard = ({ step, image, icon, title, text }: HowCardProps) => {
  return (
    <div className="how-it-works-card">
      <div className="how-it-works-card-number">
        <h5>{step}</h5>
      </div>
      {image && (
        <img
          src={image}
          alt="Step 1"
          className="how-it-works-card-image"
          title="Step 1"
          loading="lazy"
        />
      )}
      {icon && <div className="how-it-works-card-icon">{icon}</div>}
      <div className="how-it-works-card-texts">
        <h4 className="how-it-works-card-title">{title}</h4>
        <p className="how-it-works-card-text">{text}</p>
      </div>
    </div>
  );
};
