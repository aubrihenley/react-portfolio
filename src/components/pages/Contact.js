import React from "react";
import "bulma/css/bulma.min.css";
import "../../main.css";

export default function Contact() {
  return (
    <div className="container">
      <h1 className="subtitle has-text-centered section-title">Contact Me</h1>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Text input"></input>
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            className="input"
            type="email"
            placeholder="Email input"
          ></input>
        </div>
      </div>
      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea className="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
      </div>
    </div>
  );
}
