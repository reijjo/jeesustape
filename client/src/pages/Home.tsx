import "./Home.css";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorks/HowItWorksSection";

const Home = () => {
  return (
    <main className="home">
      <HeroSection />
      <HowItWorksSection />
    </main>
  );
};

export default Home;
