import classes from "./serviceCard.module.css";
import Search from "../../../../asset/image/search.svg";

const ServiceCard = ({ image, word, title }) => {
  return (
    <div className={classes.main}>
      <img src={image} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{word}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
