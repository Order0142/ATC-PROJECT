import classes from "./header.module.css";
import Logo from "../../asset/image/logo.svg";
import { NavLink } from "react-router-dom";
import Menu from "../../asset/image/Menu.svg";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={classes.main}>
      <div className={classes.header}>
        <div className={classes.logo}>
          <img src={Logo} alt="icon" />
        </div>
        <div className={`${classes.nav} ${open && classes.slide}`}>
          <nav>
            {navData.map((item, i) => (
              <NavLink to={item.link} key={i} onClick={() => setOpen(false)}>
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {open ? (
          <button className={classes.close} onClick={() => setOpen(false)}>
            <h3>X</h3>
          </button>
        ) : (
          <button className={classes.menu} onClick={() => setOpen(true)}>
            <img src={Menu} alt="menu" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;

const navData = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Find a Doctor",
    link: "/contact",
  },
  {
    name: "Apps",
    link: "/#",
  },
  {
    name: "Testimonials",
    link: "/",
  },
  {
    name: "About Us",
    link: "/",
  },
];
