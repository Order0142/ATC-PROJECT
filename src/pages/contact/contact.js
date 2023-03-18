import classes from "./contact.module.css";
import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import contactImg from "../../asset/image/contactImg.png"

const Contact = () => {
  return (
    <div className={classes.main}>
      <div className={classes.contact}>
        <div className={classes.imgSec}>
          <h1>Welcome to<br />our community</h1>
          <p>Create account and connect with Plantians</p>
          <img src={contactImg} alt="" />
        </div>
        <div className={classes.formSec}>
          <div className={classes.formsec1}>
            <h1>Get Started</h1>
            <p>
              Already have an account?{" "}
              <span className={classes.signIn}>
                <Link>Sign in</Link>
              </span>
            </p>
          </div>
          <div className={classes.signUp}>
            <span>
              <Button title="Sign up with Google" />
            </span>
            <span>
              <Button title="Sign up with Facebook" />
            </span>
            <p>Or</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
