import classes from "./mobileapp.module.css";
import Button from "../../button/button";
import SecImg3 from "../../../asset/image/secImg3.png";

const Mobileapp = () => {
  return (
    <div className={classes.main}>
      <div className={classes.mobileapp}>
        <div className={classes.text}>
          <h3>Download our mobile apps.</h3>
          <span></span>
          <p>
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely.
          </p>
          <div className={classes.btn}>
            <Button title="Download &#129047;" />
          </div>
        </div>
        <div>
          <img src={SecImg3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mobileapp;
