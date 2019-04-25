import React from "react";

import classes from "./Card.module.scss";

interface IProps {
  children: React.ReactNode;
  containerClass?: string;
}

const Card: React.FC<IProps> = ({ children, containerClass }: IProps) => {
  return (
    <div
      className={`${containerClass ? containerClass : ""} ${classes.container}`}
    >
      {children}
    </div>
  );
};

export default Card;
