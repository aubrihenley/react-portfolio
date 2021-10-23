import React from "react";
import "../main.css";
import "bulma/css/bulma.min.css";

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
          <div className="hero-foot--wrapper">
            <div className="columns">
              <div className="column is-12 hero-menu-desktop has-text-centered">
                <ul>
                  <li>
                    <a href="/">About Me</a>
                  </li>
                  <li>
                    <a href="/portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="/resume">Resume</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
