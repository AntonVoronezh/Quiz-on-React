import React from "react";
import classes from "./AnswersList.css";
import AnswersItem from "./AnswersItem/AnswersItem.jsx";

const AnswersList = props => {
  return (
    <ul className={classes.AnswersList}>
      {props.answers.map((elem, i) => {
        return (
          <AnswersItem
            key={i}
            answer={elem}
            state={props.state ? props.state[elem.id] : null}
            onAnswerClick={props.onAnswerClick}
          />
        );
      })}
    </ul>
  );
};

export default AnswersList;
