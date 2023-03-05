import classes from "./hero.module.css";
import HeroImage from "../../../asset/image/heroImage.png"

const Hero = () => {
  return (
    <div className={classes.main}>
      <div className={classes.hero}>
      <div className={classes.text}>
        <h3>Virtual healthcare for you</h3>
        <p>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <button>Consult today</button>
      </div>
      <div>
        <img src={HeroImage} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Hero;
