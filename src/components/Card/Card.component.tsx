import React from "react";

import classes from "./Card.module.scss";

interface IProps {
  children: React.ReactNode;
  containerClass?: string;
}

const Card: React.FC<IProps> = ({ children, containerClass }: IProps) => {
  return (
    <div
      className={`${classes.container} ${containerClass ? containerClass : ""}`}
    >
      {children}
    </div>
  );
};

export default Card;
