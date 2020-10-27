import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./nav.module.css";


class Nav extends Component {
  render() {
    return (
      <div className="left">
        <nav className="navcont">
          <ul className="nav">
            <NavLink activeClassName="active" to="/about">
              <li className="navitems">
                <p><i className="fas fa-info-circle fa-2x">&nbsp;<span className='options'>About</span></i></p>
              </li>
            </NavLink>
            <NavLink activeClassName="active" to="/judgement">
              <li className="navitems">
                <p><i className="fas fa-gavel fa-2x">&nbsp;<span className='options'>JudgementCriteria</span></i></p>
              </li>
            </NavLink>
            <NavLink activeClassName="active" to="/rules">
              <li className="navitems">
                <p><i className="fas fa-book fa-2x">&nbsp;&nbsp;<span className='options'>Rules</span></i></p>
              </li>
            </NavLink>
            <NavLink activeClassName="active" to="/register">
              <li className="navitems">
                <p><i className="fas fa-user-plus fa-2x">&nbsp;<span className='options'>Register</span></i></p>
              </li>
            </NavLink>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
