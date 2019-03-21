import React from "react";
import classes from "./ActiveQuiz.css";

const ActiveQuiz = props => {
  return (
    <div className={classes.ActiveQuiz}>
      <span className={classes.Question}>
        <strong>Где смысл?</strong>
        <small>1 из 10</small>
      </span>
      <div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    </div>
  );
};

export default ActiveQuiz;
