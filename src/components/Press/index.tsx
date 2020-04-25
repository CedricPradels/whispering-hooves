import React from "react";
import "./style.css";

import content from "../../assets/data/content.json";

import Journal from "../../components/Journal";

export default () => {
  return (
    <section className="press">
      <h2 className="title">
        <span className="hrule"></span>
        <div className="text">{content.press.title.fr}</div>
        <span className="hrule"></span>
      </h2>

      <div className="wrapper">
        {content.press.journals.map((journal) => (
          <Journal journal={journal} />
        ))}
      </div>
    </section>
  );
};
