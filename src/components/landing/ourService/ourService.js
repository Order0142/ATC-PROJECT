import { serviceData } from "../../../constants/index.";
import classes from "./ourService.module.css";
import ServiceCard from "./serviceCard/serviceCard";
import Eclipse from "../../../asset/image/eclipse.svg";
import Dots from "../../../asset/image/dots.svg";
import Button from "../../button/button";

const OurService = () => {
  return (
    <div className={classes.main}>
      <div className={classes.service}>
        <div className={classes.serviceContent}>
          <h3>Our Services</h3>
          <p>
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </div>
        <div className={classes.cards}>
          {serviceData.map((item, i) => (
            <ServiceCard {...item} key={i} />
          ))}
        </div>
        <div className={classes.btn}>
          <Button title="Learn More" />
        </div>
        <img src={Eclipse} alt="icon" className={classes.eclipse} />
        <img src={Dots} alt="icon" className={classes.dot} />
      </div>
    </div>
  );
};

export default OurService;
