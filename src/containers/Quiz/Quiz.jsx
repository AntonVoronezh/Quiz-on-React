import React, { Component } from "react";
import classes from "./Quiz.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz.jsx";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz.jsx";

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    results: {},
    answerState: null,
    isFinished: false,
    questions: [
      {
        id: 1,
        question: "Какого цвета небо?",
        answers: [
          { text: "Красное", id: 1 },
          { text: "Синее", id: 2 },
          { text: "Зелёное", id: 3 },
          { text: "Фиг его знает", id: 4 }
        ],
        rightAnswer: 2
      },
      {
        id: 2,
        question: "Когда основан Питер?",
        answers: [
          { text: "1701", id: 1 },
          { text: "1702", id: 2 },
          { text: "1703", id: 3 },
          { text: "1704", id: 4 }
        ],
        rightAnswer: 3
      }
    ]
  };

  onAnswerClickHandler = argId => {
    const question = this.state.questions[this.state.activeQuestion];

    const results = this.state.results;

    if (argId === question.rightAnswer) {
      if (!results[question.id]) {
        results[question.id] = "success";
      }

      this.setState({
        answerState: { [argId]: "success" },
        results
      });

      const timeout = window.setTimeout(() => {
        if (this.isFinished()) {
          this.setState({
            isFinished: !this.state.isFinished
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          });
        }

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      results[question.id] = "error";

      this.setState({
        answerState: { [argId]: "error" },
        results
      });
    }
  };

  isFinished() {
    return this.state.questions.length === this.state.activeQuestion + 1;
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      results: {},
      answerState: null,
      isFinished: false
    });
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QiuzWrapper}>
          <h1>Пройдите опрос</h1>
          {this.state.isFinished ? (
            <FinishedQuiz
              quizLenght={this.state.questions.length}
              results={this.state.results}
              questions={this.state.questions}
              onRetry={this.retryHandler}
            />
          ) : (
            <ActiveQuiz
              question={
                this.state.questions[this.state.activeQuestion].question
              }
              answers={this.state.questions[this.state.activeQuestion].answers}
              quizLenght={this.state.questions.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
              onAnswerClick={this.onAnswerClickHandler}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
