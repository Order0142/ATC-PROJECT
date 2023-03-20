import classes from "./contact.module.css";
import { Link } from "react-router-dom";
import contactImg from "../../asset/image/contactImg.png";
import Google from "../../asset/image/Google.svg";
import Facebook from "../../asset/image/Facebook.svg";

const Contact = () => {
  return (
    <div className={classes.main}>
      <div className={classes.contact}>
        <div className={classes.imgSec}>
          <h1>
            Welcome to
            <br />
            our community
          </h1>
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
              <button>
                <img src={Google} alt="" />
                Sign up with Google
              </button>
            </span>
            <span>
              <button>
                <img src={Facebook} alt="" />
                Sign up with Facebook
              </button>
            </span>
            <p>Or</p>
            <form>
              <div>
                <label>Name</label>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <label>Email</label>
                <input type="text" placeholder="Email" />
              </div>
              <div>
                <label>Name</label>
                <input type="password" placeholder="Password" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
