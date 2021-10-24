import React from "react";
import "bulma/css/bulma.min.css";
import "../../main.css";

export default function Resume() {
  return (
    <div>
      <br />
      <h1 className="subtitle has-text-centered section-title">
        View My Resume
      </h1>
      <div className="has-text-centered">
        <a
          className="button is-primary is-light is-large is-outlined"
          href="https://docs.google.com/document/d/1gYcN1vdXPgFxCJhN4EI-Pa5HeLB3sL6xIDY8hXqmQOI/edit?usp=sharing"
        >
          Click Here!
        </a>
      </div>
      <br />
      <br />
      <div className="section-dark skills" id="skills">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-12 about-me">
              <h1 className="subtitle has-text-centered section-title">
                Skills
              </h1>
            </div>
            <div className="column">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                width="100"
                height="100"
                alt="HTML5"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg"
                width="100"
                height="100"
                alt="Bulma"
              />
            </div>
            <div className="column">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                width="100"
                height="100"
                alt="BootStrap"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                width="100"
                height="100"
                alt="CSS3"
              />
            </div>
            <div className="column">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg"
                width="100"
                height="100"
                alt="Handlebars"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                width="100"
                height="100"
                alt="React"
              />
            </div>
            <div className="column">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                width="100"
                height="100"
                alt="JavaScript"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                width="100"
                height="100"
                alt="Node.js"
              />
            </div>
            <div className="column">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                width="100"
                height="100"
                alt="mySQL"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"
                width="100"
                height="100"
                alt="Sequelize"
              />
            </div>
            <div className="column">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
                width="100"
                height="100"
                alt="Express"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                width="100"
                height="100"
                alt="MondgoDB"
              />
            </div>
            <div className="column">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
                width="100"
                height="100"
                alt="Illustrator"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
                width="100"
                height="100"
                alt="PhotoShop"
              />
            </div>
            <div className="column">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
                width="100"
                height="100"
                alt="Canva"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                width="100"
                height="100"
                alt="GitHub"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
