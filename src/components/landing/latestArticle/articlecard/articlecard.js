import classes from "./articlecard.module.css";

const Articlecard = ({ image, title, word}) => {
  return (
    <div className={classes.main}>
      <img src={image} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{word}</p>
        <link>Read more &#129046;</link>
      </div>
    </div>
  );
};

export default Articlecard;