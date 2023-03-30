import classes from "./healthcare.module.css";
import SecImg2 from "../../../asset/image/secImg2.png";
import Button from "../../button/button";

const Healthcare = () => {
  return (
    <div className={classes.main}>
      <div className={classes.healthcare}>
        <div>
          <img src={SecImg2} alt="icon" />
        </div>
        <div className={classes.text}>
          <h3>Leading healthcare providers</h3>
          <span></span>
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <div className={classes.btn}>
            <Button title="Learn more" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Healthcare;
