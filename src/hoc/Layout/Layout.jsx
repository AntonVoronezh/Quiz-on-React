import React, { Component } from "react";
import classes from "./Layout.css";
import Quiz from "../../containers/Quiz/Quiz.jsx";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle.jsx";

class Layout extends Component {
  state = { menu: false };

  toggleMenuHandler = () => {
    this.setState({ menu: !this.state.menu });
  };

  render() {
    return (
      <div className={classes.Layout}>
        <main>
          <MenuToggle
            onToggle={this.toggleMenuHandler}
            isOpen={this.state.menu}
          />
          <Quiz />
        </main>
      </div>
    );
  }
}

export default Layout;
