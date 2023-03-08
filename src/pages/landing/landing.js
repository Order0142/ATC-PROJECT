import Carousel from "../../components/landing/carousel/carousel";
import Hero from "../../components/landing/hero/hero";
import OurService from "../../components/landing/ourService/ourService";
import Healthcare from "../../components/landing/healthcare/healthcare"
import Mobileapp from "../../components/landing/moblileapp/mobileapp";

const Landing = () => {
  return (
    <div>
      <Hero />
      <OurService />
      <Healthcare />
      <Mobileapp />
      <Carousel />
    </div>
  );
};

export default Landing;
