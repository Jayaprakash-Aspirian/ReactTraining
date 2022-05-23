import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav className="navStyle">
          <ul className="nav-links">
            <Link to="login"><li>Login</li></Link>
            <Link to="signup"><li>Signup</li></Link>
          </ul>

      </nav>
    )
  }
}