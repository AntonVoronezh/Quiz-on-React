import React from "react";
import classes from "./Button.css";

const Button = props => {
  const cls = [classes.Button, classes[props.type]];

  return (
    <button className={cls.join(" ")} onClick={props.onRetry}>
      {props.children}
    </button>
  );
};

export default Button;
