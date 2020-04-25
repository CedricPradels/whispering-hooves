import React from "react";
import "./style.css";

import heroImage from "../../assets/image/hero1.jpg";

import content from "../../assets/data/content.json";

export default () => {
  return (
    <header className="header">
      <nav className="nav">
        {content.nav.fr.map((item) => (
          <div key={item} className="item">
            {item}
          </div>
        ))}
      </nav>
      <img className="hero" src={heroImage} alt="Hero banner" />
      <div className="title-box">
        <h1 className="title">
          <span className="term1">{content.title.split(" ")[0]}</span>{" "}
          <span className="term2">{content.title.split(" ")[1]}</span>
        </h1>
        <h2 className="subtitle">{content.subtitle.fr}</h2>
      </div>
    </header>
  );
};
