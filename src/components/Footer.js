import React from "react";
import "bulma/css/bulma.min.css";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/aubrihenley">
        <i class="fab fa-github fa-2x"></i>
      </a>
      <a href="https://www.linkedin.com/in/aubri-henley/">
        <i class="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="mailto:aubri.henley@gmail.com">
        <i class="fas fa-envelope-square fa-2x"></i>
      </a>
    </div>
  );
}
