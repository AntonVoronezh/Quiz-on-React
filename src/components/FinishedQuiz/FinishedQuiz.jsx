import React from "react";
import { Link } from "react-router-dom";
import classes from "./FinishedQuiz.css";
import Button from "../UI/Button/Button.jsx";

const FinishedQuiz = props => {
  const count = Object.keys(props.results).filter(
    elem => props.results[elem] === "success"
  );

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {props.questions.map((elem, i) => {
          return (
            <li key={i}>
              {elem.id}. {elem.question}
              <i
                className={`fa ${
                  props.results[elem.id] === "success"
                    ? "fa-check " + classes.success
                    : "fa-times " + classes.error
                }`}
              />
            </li>
          );
        })}
      </ul>
      <p>
        Правильно {count.length} из {props.quizLenght}
      </p>
      <Button type="primary" onRetry={props.onRetry}>
        повторить
      </Button>
      <Link to="/">
        <Button type="success">перейти в список тестов</Button>
      </Link>
    </div>
  );
};

export default FinishedQuiz;
