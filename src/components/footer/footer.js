import React from "react";
import classes from "./footer.module.css";
import Flogo from "../../asset/image/flogo.svg";

const Footer = () => {
  return (
    <footer className={classes.main}>
      <div className={classes.footer}>
        <div>
          <img src={Flogo} alt="" />
          <p>
            Trafalgar provides progressive, and affordable
            <br /> healthcare, accessible on mobile and online
            <br /> for everyone.
          </p>
          <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
        </div>
        <div>
          <h3>Company</h3>
          <p>About</p>
          <p>Testimonials</p>
          <p>Find a doctor</p>
          <p>App</p>
        </div>
        <div>
          <h3>Regions</h3>
          <p>Indonesia</p>
          <p>Singapore</p>
          <p>Hongkong</p>
          <p>Canada</p>
        </div>
        <div>
          <h3>Help</h3>
          <p>Help center</p>
          <p>Contact support</p>
          <p>Instructions</p>
          <p>How it works</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
