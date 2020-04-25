import React from "react";
import "./style.css";

import content from "../../assets/data/content.json";

export default () => (
  <footer className="footer">
    <div className="text">{content.contact.text.fr}</div>
    <a href={`mailto: ${content.contact.email}`} className="email">
      {content.contact.email}
    </a>
  </footer>
);
