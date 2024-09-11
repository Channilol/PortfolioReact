import "./Hero.css";
import HeroName from "./HeroName/HeroName";
import Slider from "../Slider/Slider";
import HeroSurname from "./HeroSurname/HeroSurname";

const Hero = () => {
  return (
    <div className="hero">
      <HeroName />
      <Slider />
      <HeroSurname />
    </div>
  );
};
export default Hero;
