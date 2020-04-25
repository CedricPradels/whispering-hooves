import React from "react";
import content from "../../assets/data/content.json";

import "./style.css";

export default () => {
  return (
    <section className="section">
      <h2 className="title">{content.intention.title.fr}</h2>
      <div className="wrapper">
        <div className="text">
          {content.intention.text.fr.map((p, i) => (
            <p key={String(i)} className="par">
              {p}
            </p>
          ))}
        </div>
        <img
          src={require("../../assets/image/" + content.intention.picture)}
          alt={"leather bag"}
          className="image"
        />
      </div>
    </section>
  );
};
