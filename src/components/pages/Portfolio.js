import React from "react";
import "bulma/css/bulma.min.css";
import "../../main.css";
import AppliTrak from "../../images/AppliTrak.png";
import Weather from "../../images/weatherscreenshot.png";
import NoteTaker from "../../images/mainHTML.png";
import Gamer from "../../images/homepage.png";
import Workout from "../../images/home-page.png";
import Schedule from "../../images/WorkScheduler.png";

export default function Projects() {
  return (
    <div class="section-light my-work" id="my-work">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <br />
            <h1 class="title has-text-centered section-title">My Work</h1>
          </div>
          <div class="column is-4">
            <div class="card">
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src={AppliTrak} />
                </figure>
              </div>
              <div class="card-footer">
                <a
                  href="https://github.com/aubrihenley/job-application-tracker"
                  class="card-footer-item"
                >
                  <i class="fab fa-github fa-2x"></i>
                </a>
                <br />
                <a
                  href="https://immense-eyrie-11789.herokuapp.com/login"
                  class="card-footer-item"
                >
                  <i class="fa fa-rocket fa-2x"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="column is-4">
            <div class="card">
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src={NoteTaker} />
                </figure>
              </div>
              <div class="card-footer">
                <a
                  href="https://github.com/aubrihenley/Note-Taker"
                  class="card-footer-item"
                >
                  <i class="fab fa-github fa-2x"></i>
                </a>
                <br />
                <a
                  href="https://young-savannah-53005.herokuapp.com/"
                  class="card-footer-item"
                >
                  <i class="fa fa-rocket fa-2x"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="column is-4">
            <div class="card">
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src={Workout} />
                </figure>
              </div>
              <div class="card-footer">
                <a
                  href="https://github.com/aubrihenley/Workout-Tracker"
                  class="card-footer-item"
                >
                  <i class="fab fa-github fa-2x"></i>
                </a>
                <br />
                <a
                  href="https://pure-cliffs-13829.herokuapp.com/?id=6171ee986befc80016b85cdd"
                  class="card-footer-item"
                >
                  <i class="fa fa-rocket fa-2x"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="column is-4">
            <div class="card">
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src={Schedule} />
                </figure>
              </div>
              <div class="card-footer">
                <a
                  href="https://github.com/aubrihenley/work-day-scheduler"
                  class="card-footer-item"
                >
                  <i class="fab fa-github fa-2x"></i>
                </a>
                <br />
                <a
                  href="https://aubrihenley.github.io/work-day-scheduler/"
                  class="card-footer-item"
                >
                  <i class="fa fa-rocket fa-2x"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="column is-4">
            <div class="card">
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src={Gamer} />
                </figure>
              </div>
              <div class="card-footer">
                <a
                  href="https://github.com/aubrihenley/Confused-Gamer"
                  class="card-footer-item"
                >
                  <i class="fab fa-github fa-2x"></i>
                </a>
                <br />
                <a
                  href="https://rmmccar92.github.io/Confused-Gamer/"
                  class="card-footer-item"
                >
                  <i class="fa fa-rocket fa-2x"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="column is-4">
            <div class="card">
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src={Weather} />
                </figure>
              </div>
              <div class="card-footer">
                <a
                  href="https://github.com/aubrihenley/weather-dashboard"
                  class="card-footer-item"
                >
                  <i class="fab fa-github fa-2x"></i>
                </a>
                <br />
                <a
                  href="https://aubrihenley.github.io/weather-dashboard/"
                  class="card-footer-item"
                >
                  <i class="fa fa-rocket fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
