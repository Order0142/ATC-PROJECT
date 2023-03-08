import classes from "./healthcare.module.css";
import SecImg2 from "../../../asset/image/secImg2.png"

const Healthcare = () => {
  return (
    <div className={classes.main}>
      <div className={classes.healthcare}>
        <div>
          <img src={SecImg2} alt="icon" />
        </div>
        <div>
          <h3>Leading healthcare providers</h3>
          <span></span>
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Healthcare;
