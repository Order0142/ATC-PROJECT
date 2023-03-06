import classes from "./serviceCard.module.css";


const ServiceCard = ({ image, word, title }) => {
  return (
    <div className={classes.main}>
      <img src={image} alt="icons" />
      <div>
        <h3>{title}</h3>
        <p>{word}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
