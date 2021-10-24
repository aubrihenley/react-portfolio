import React from "react";
import "../main.css";
import "bulma/css/bulma.min.css";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-wrapper" id="home">
      <section className="hero is-small">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="subtitle">Hey there, I'm</h1>
            <h2 className="title">Aubri</h2>
            <h1 className="subtitle profession">A FULL STACK DEVELOPER</h1>
          </div>
        </div>
        <div className="hero-foot ">
          <nav className="hero-foot--wrapper">
            <div className="columns">
              <div className="column is-12 hero-menu-desktop has-text-centered">
                <ul>
                  <li>
                    <NavLink exact to="/" activeClassName="active-link">
                      About Me
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/portfolio"
                      activeClassName="active-link"
                    >
                      Portfolio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/resume" activeClassName="active-link">
                      Resume
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/contact" activeClassName="active-link">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}
