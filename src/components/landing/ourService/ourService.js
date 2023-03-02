import { serviceData } from "../../../constants/index.";
import classes from "./ourService.module.css";
import ServiceCard from "./serviceCard/serviceCard";

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
        <div>
          {serviceData.map((item, i) => (
            <ServiceCard {...item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
