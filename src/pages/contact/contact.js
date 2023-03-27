import classes from "./contact.module.css";
import { Link } from "react-router-dom";
import contactImg from "../../asset/image/contactImg.png";
import Google from "../../asset/image/Google.svg";
import Facebook from "../../asset/image/Facebook.svg";
import { useState } from "react";

const Contact = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  // i use this function to get the values from each input, if you notice i spread the prevState i passed as argument inside the setValue function so i can get all my values
  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // i just created a submit function and pass it to the input button so when you fill and click on submit you can see your values in the console
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
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
            <form className={classes.form}>
              <div>
                <label>Name</label>
                <input
                  name="name"
                  value={value.name}
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={value.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={value.password}
                  onChange={handleChange}
                />
              </div>
              <input
                className={classes.submit}
                type="submit"
                value="Create"
                onClick={handleSubmit}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
