import React from "react";

import classes from "./Modal.module.scss";

interface IProps {
  children: React.ReactNode;
  open: boolean;
  onBackdropClick: () => void;
}

const Modal: React.FC<IProps> = ({
  children,
  open,
  onBackdropClick
}: IProps) => {
  return (
    <div
      className={classes.backdrop}
      onClick={onBackdropClick}
      style={open ? {} : { display: "none" }}
    >
      {children}
    </div>
  );
};

export default Modal;
