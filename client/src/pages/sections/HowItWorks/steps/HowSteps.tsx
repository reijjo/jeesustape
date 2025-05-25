import "./HowSteps.css";
import patrik from "../../../../assets/images/giphy.webp";
import { Camera, Brain, Wrench } from "lucide-react";

import { HowCard } from "./HowCard";

export const HowSteps = () => {
  const howStepData = [
    {
      step: 1,
      image: patrik,
      title: "Unohda tämä fiilis",
      text: "Ja siirry seuraavaan kohtaan",
    },
    {
      step: 2,
      icon: <Camera size="3rem" strokeWidth={1} />,
      title: "Lataa kuva",
      text: "Ota kuva esimerkiksi rikkinäisestä hanasta tai muusta ongelmasta tai kuvaile se tekoälylle",
    },
    {
      step: 3,
      icon: <Brain size="3rem" strokeWidth={1} />,
      title: "AI tekee diagnosiin",
      text: "Tekoäly analysoi kuvan ja etsii ongelmaan ratkaisun",
    },
    {
      step: 4,
      icon: <Wrench size="3rem" strokeWidth={1} />,
      title: "Seuraa ohjeita",
      text: "Saat ohjeet ongelman korjaamiseen askel askeleelta",
    },
  ];

  return (
    <div className="how-it-works-steps">
      {howStepData.map(({ step, image, icon, title, text }) => (
        <HowCard
          key={step}
          step={step}
          image={image}
          icon={icon}
          title={title}
          text={text}
        />
      ))}
    </div>
  );
};
