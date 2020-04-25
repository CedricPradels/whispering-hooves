import React, { useRef } from "react";
import "./style.css";

import { ChevronRight, ChevronLeft } from "react-feather";

import content from "../../assets/data/content.json";
import PictureCarroussel from "../PictureCarroussel";

export default () => {
  const wrapperRef = useRef<any>(null);
  return (
    <section className="collection">
      <h2 className="title">
        <span className="hrule"></span>
        <div className="text">{content.collection.title.fr}</div>
        <span className="hrule"></span>
      </h2>
      <div className="bags">
        <div
          className="scroll scroll-left"
          onClick={() => {
            if (wrapperRef.current !== null) {
              wrapperRef.current.scrollBy(-200, 0);
            }
          }}
        >
          <ChevronLeft size={55} />
        </div>
        <div ref={wrapperRef} className="wrapper" id="wrapper">
          {content.collection.bags.map((pictures, i) => (
            <PictureCarroussel
              key={String(i)}
              className="picture"
              tab={pictures}
            />
          ))}
        </div>
        <div
          className="scroll scroll-right"
          onClick={() => {
            if (wrapperRef.current !== null) {
              wrapperRef.current.scrollBy(200, 0);
            }
          }}
        >
          <ChevronRight size={55} />
        </div>
      </div>
    </section>
  );
};
