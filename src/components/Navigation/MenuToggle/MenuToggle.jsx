import React from "react";
import classes from "./MenuToggle.css";
import Drawer from "../Drawer/Drawer.jsx";

const MenuToggle = props => {
  const cls = [classes.MenuToggle, "fa"];

  props.isOpen ? cls.push(`fa-times ${classes.open}`) : cls.push("fa-bars");

  return (
    <div className={cls.join(" ")} onClick={props.onToggle}>
      <Drawer isOpen={props.isOpen} />
    </div>
  );
};

export default MenuToggle;
