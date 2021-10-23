import React from "react";
import "bulma/css/bulma.min.css";
import "../../main.css";
import Portrait from "../../images/portrait-aubri.png";

export default function About() {
  return (
    <div className="section-dark about-me" id="about-me">
      <div className="container">
        <div className="column is-12 about-me">
          <h1 className="title has-text-centered section-title">About Me</h1>
        </div>
        <div className="columns is-multiline">
          <div className="column is-6 has-vertically-aligned-content">
            <p className="is-larger">
              I am a full stack web developer. I have always had a love of
              learning which lead me to get my Bachelors of Education in 2007.
              After searching for a more creative outlet in my career that also
              incorporated my love for learning I started teaching myself to
              code.
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
            <div className="columns about-links"></div>
          </div>
          <div className="column is-6 right-image ">
            <figure className="image is=128x128">
              <img
                className="is-rounded"
                src={Portrait}
                alt="Portrait of Aubri Henley"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
