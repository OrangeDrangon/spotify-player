import React from "react";

import { headerCatagories } from "constants/headerCatagories.constant";

import classes from "./Header.module.scss";

interface IProps {
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

const Header: React.FC<IProps> = ({ setSelected }: IProps) => {
  return (
    <header className={classes.header}>
      <button
        className={classes.button}
        onClick={() => setSelected(headerCatagories.featured)}
      >
        Featured
      </button>
      <button
        className={classes.button}
        onClick={() => setSelected(headerCatagories.personal)}
      >
        Personal
      </button>
    </header>
  );
};

export default Header;
