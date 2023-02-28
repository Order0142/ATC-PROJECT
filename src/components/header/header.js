import classes from "./header.module.css";
import Logo from "../../asset/image/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.main}>
      <div className={classes.header}>
        <div>
          <img src={Logo} alt="icon" />
        </div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Find a Doctor</NavLink>
          <NavLink>Apps</NavLink>
          <NavLink>Testimonials</NavLink>
          <NavLink>About us</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
