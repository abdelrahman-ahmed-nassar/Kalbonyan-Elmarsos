import { useState } from "react";
import logo from "../../assets/logos/download1.png";

import classes from "./Navbar.module.scss";

import { HiX } from "react-icons/hi";
import { CgMenuRightAlt } from "react-icons/cg";

const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const menuClickHandler = () => {
    setNavIsOpen((prev) => {
      return !prev;
    });
  };

  const icon = navIsOpen ? (
    <HiX className={classes.icon} onClick={menuClickHandler} />
  ) : (
    <CgMenuRightAlt className={classes.icon} onClick={menuClickHandler} />
  );

  return (
    <nav className={classes["nav"]}>
      <div className={classes["nav__logo-container"]}>
        <a href="#" className={classes["nav__logo"]}>
          <img src={logo} alt="logo" />
        </a>
      </div>
      {icon}
      <ul
        className={
          navIsOpen
            ? `${classes["nav__list"]} ${classes["nav__list--active"]}`
            : classes["nav__list"]
        }
      >
        {["about", "services", "skills", "projects", "contact"].map((item) => {
          return (
            <li key={item + "-link"} className={classes["nav__item"]}>
              <a href={`#${item}`} onClick={menuClickHandler}>
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
