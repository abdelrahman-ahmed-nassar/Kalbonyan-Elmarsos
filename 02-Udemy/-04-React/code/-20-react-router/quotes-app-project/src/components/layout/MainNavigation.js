import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to={"/quotes"} activeClassName={classes.active}>
              All quotes
            </NavLink>
          </li>
          <li>
            <NavLink to={"/new-quote"} activeClassName={classes.active}>
              Add a quotes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
