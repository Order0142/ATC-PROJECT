import classes from "./contact.module.css";
import { Link } from "react-router-dom";
import Button from "../../components/button/button";

const Contact = () => {
  return (
    <div>
      <div>
        <div>
          <h2>welcome to our community</h2>
          <p>Create account and connect with Plantians</p>
          <img src={null} alt="" />
        </div>
        <div>
          <div>
            <h1>Get Started</h1>
            <p>Already have an account?</p>
            <span className={classes.signIn}>
              <Link>Sign in</Link>
            </span>
          </div>
          <div>
            <span>
              <Button title="Sign up with Google" />
            </span>
            <span>
              <Button title="Sign up with Facebook" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
