import React, { Component } from "react";
import classes from "./Quiz.css";

class Quiz extends Component {
  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QiuzWrapper}>
          <h1>Пройдите опрос</h1>
        </div>
      </div>
    );
  }
}

export default Quiz;
