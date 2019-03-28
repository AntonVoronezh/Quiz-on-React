import React, { Component } from "react";
import classes from "./Layout.css";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle.jsx";
import Drawer from "../../components/Navigation/Drawer/Drawer.jsx";

class Layout extends Component {
  state = { menu: false };

  toggleMenuHandler = () => {
    this.setState({ menu: !this.state.menu });
  };

  render() {
    return (
      <div className={classes.Layout}>
        <main>
        {/* <Drawer isOpen={this.state.menu} onClose={this.menuCloseHandler} /> */}

        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />

        <main>{this.props.children}</main>
        </main>
      </div>
    );
  }
}

export default Layout;
