import React from "react";
import "./Nav.css";

class Nav extends React.Component {
  render() {
    const nav = this.props.nav;
    return (
      <nav>
        {Object.keys(nav).map(element => (
          <li>
            <a href={nav[element]}>{element}</a>
          </li>
        ))}
      </nav>
    );
  }
}

export default Nav;
