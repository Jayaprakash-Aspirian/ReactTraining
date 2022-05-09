import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav className="navStyle">
          <ul className="nav-links">
            <Link to="home"><li>Home</li></Link>
            <Link to="shop"><li>Shop</li></Link>
            <Link to="about"><li>About</li></Link>
            <Link to="contact"><li>Contact</li></Link>
          </ul>
      </nav>
    )
  }
}
