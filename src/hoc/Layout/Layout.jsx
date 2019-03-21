import React, { Component } from "react";
import classes from "./Layout.css";
import Quiz from "../../containers/Quiz/Quiz.jsx";

class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <main>
          <Quiz />
        </main>
      </div>
    );
  }
}

export default Layout;
