import React, { Component } from "react";
import classes from "./Drawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop.jsx";

const links = [11, 222, 333];

class Drawer extends Component {
  renderLinks = () => {
    return links.map((elem, i) => {
      return (
        <li key={i}>
          <a>Ссылка {elem}</a>
        </li>
      );
    });
  };

  render() {
    const cls = [classes.Drawer];

    // eslint-disable-next-line no-unused-expressions
    !this.props.isOpen ? cls.push(classes.close) : null;

    return (
      <React.Fragment>
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks()}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop /> : null}
      </React.Fragment>
    );
  }
}

export default Drawer;
