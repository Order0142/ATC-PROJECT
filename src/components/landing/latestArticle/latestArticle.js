import { articleCard } from "../../../constants/index.";
import classes from "./latestArticle.module.css";
import Articlecard from "./articlecard/articlecard";

const LatestArticle = () => {
  return (
    <div className={classes.main}>
      <div className={classes.article}>
        <div className={classes.articleContent}>
          <h3>Check out our latest article</h3>
        </div>
        <div className={classes.cards}>
          {articleCard.map((item, i) => (
            <Articlecard {...item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestArticle;
