import { Link } from "react-router-dom";
import classes from "./articleCard.module.css";

const ArticleCard = ({ image, word, title}) => {
  return (
    <div className={classes.main}>
      <img src={image} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{word}</p>
        <Link>Read more &#129046</Link>
      </div>
    </div>
  );
};

export default ArticleCard;
