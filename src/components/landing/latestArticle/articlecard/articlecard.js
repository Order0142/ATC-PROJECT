import { Link } from "react-router-dom";
import classes from "./articlecard.module.css";

const ArticleCard = ({ image, word, title }) => {
  return (
    <div className={classes.main}>
      <img src={image} alt="icon" />
      <div className={classes.text}>
        <h3>{title}</h3>
        <p>{word}</p>
        <Link className={classes.link}>Read more &#129046;</Link>
      </div>
    </div>
  );
};

export default ArticleCard;
