import React from "react";
import { headerCatagories } from "components/App/App.component";

// import classes from "./Header.module.scss";

interface IProps {
  setSelected: React.Dispatch<React.SetStateAction<number>>
}

const Header: React.FC<IProps> = ({ setSelected }: IProps) => {
  return <header>
    <button onClick={() => setSelected(headerCatagories.featured)}>Featured</button>
    <button onClick={() => setSelected(headerCatagories.personal)}>Personal</button>
  </header>;
};

export default Header;
