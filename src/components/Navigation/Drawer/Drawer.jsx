import React, { Component } from "react";
import classes from "./Drawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop.jsx";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Список", exact: true },
  { to: "/auth", label: "Авторизация", exact: false },
  { to: "/quiz-creator", label: "Создать опрос", exact: false }
];

class Drawer extends Component {
  renderLinks = () => {
    return links.map((elem, i) => {
      return (
        <li key={i}>
          <NavLink
            to={elem.to}
            exact={elem.exact}
            activeClassName={classes.active}
          >
            {elem.label}
          </NavLink>
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
