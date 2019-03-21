import React from "react";
import classes from "./ActiveQuiz.css";

const ActiveQuiz = props => {
  return (
    <div className={classes.ActiveQuiz}>
      Вопрос
      <span className={classes.Question}>
        <strong>Где смысл?</strong>
        <small>1 из 10</small>
      </span>
    </div>
  );
};

export default ActiveQuiz;
