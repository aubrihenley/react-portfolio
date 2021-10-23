import React from "react";
import "bulma/css/bulma.min.css";
import "../../main.css";

export default function About() {
  return (
    <div className="section-dark about-me" id="about-me">
      <div className="container">
        <div className="column is-12 about-me">
          <h1 className="title has-text-centered section-title">About Me</h1>
        </div>
        <div className="columns is-multiline">
          <div
            className="column is-6 has-vertically-aligned-content"
            data-aos="fade-right"
          >
            <p className="is-larger">
              &emsp;&emsp;
              <strong>
                I am a full stack web developer. I have always had a love of
                learning which lead me to get my Bachelors of Education in 2007.
                After searching for a more creative outlet in my career that
                also incorporated my love for learning I started teaching myself
                to code.
              </strong>
            </p>
            <br />
            <p className="is-larger">
              After realizing that I enjoyed the challenge of coding I decided
              to take my learning to the next level and joined the full stack
              Web Developer Boot Camp at UNC Chapel Hill.
            </p>
            <br />
            <p className="is-larger">
              I am based out of Asheboro, North Carolina. In my free time I
              enjoy roller skating and hiking with my kids, reading, and
              crocheting.
            </p>
            <br />
            <div className="is-divider"></div>
            <div className="columns about-links">
              <div className="column">
                <ul className="heading">
                  <li>
                    <strong>Email Me: </strong>
                    <a href="mailto:aubri.henley@gmail.com">
                      aubri.henley@gmail.com
                    </a>
                  </li>
                  <li>
                    <strong>View my LinkedIn: </strong>
                    <a
                      className="subheading"
                      href="https://www.linkedin.com/in/aubri-henley/"
                    >
                      https://www.linkedin.com/in/aubri-henley/
                    </a>
                  </li>
                  <li>
                    <strong>Give me a ring: </strong>704-524-8940
                  </li>
                  <a href="https://docs.google.com/document/d/1gYcN1vdXPgFxCJhN4EI-Pa5HeLB3sL6xIDY8hXqmQOI/edit?usp=sharing">
                    <li>
                      <strong>View my Resume</strong>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div className="column is-6 right-image " data-aos="fade-left">
            <figure className="image is=128x128">
              <img
                className="is-rounded"
                src="./css/images/portrait-aubri.png"
                alt="Portrait of Aubri Henley"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
