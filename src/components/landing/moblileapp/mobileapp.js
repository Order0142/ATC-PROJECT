import classes from "./mobileapp.module.css";
import Button from "../../button/button";

const Mobileapp = () => {
  return (
    <div className={classes.main}>
      <div className={classes.mobileapp}>
        <div>
          <h3>Download our mobile apps</h3>
          <span></span>
          <p>
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
          <Button title="Download" />
        </div>
        <div>
          <img src={null} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mobileapp;
