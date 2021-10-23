import React from "react";
import "bulma/css/bulma.min.css";
import "../../main.css";

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      <div className="section-dark skills" id="skills">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-12 about-me">
              <h1 className="title has-text-centered section-title">Skills</h1>
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
