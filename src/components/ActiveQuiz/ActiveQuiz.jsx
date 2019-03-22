import React from "react";
import classes from "./ActiveQuiz.css";
import AnswersList from "./AnswersList/AnswersList.jsx";

const ActiveQuiz = props => {

  return (
    <div className={classes.ActiveQuiz}>
      <span className={classes.Question}>
        <strong>{props.question}</strong>
        <small>
          {props.answerNumber} из {props.quizLenght}
        </small>
      </span>
      <AnswersList
        answers={props.answers}
        state={props.state}
        onAnswerClick={props.onAnswerClick}
      />
    </div>
  );
};

export default ActiveQuiz;
