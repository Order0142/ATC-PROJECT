import classes from "./articlecard.module.css";

export const Articlecard = () => {
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
