import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <Link
        to="/featured"
        className={classes.button}
      >
        Featured
      </Link>
      <Link
        to="/personal"
        className={classes.button}
      >
        Personal
      </Link>
    </header>
  );
};

export default Header;
