import React from "react";
import Flogo from "../../asset/image/flogo.svg";

const Footer = () => {
  return (
    <footer className="{classes.main}">
      <div>
        <img src={Flogo} alt="" />
        <h3>Trafalgar</h3>
        <p>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone.
        </p>
        <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
      </div>
      <div>
        <h3>Company</h3>
        <p>About</p>
        <p>Testimonials</p>
      </div>
    </footer>
  );
};

export default Footer;
