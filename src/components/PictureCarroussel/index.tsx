import React, { useState, useEffect, useRef } from "react";
import "./style.css";

interface Props {
  tab: string[];
  className: string;
}

export default ({ tab, className }: Props) => {
  const [index, setIndex] = useState(0);

  const id = useRef<NodeJS.Timeout>();

  const indexRef = useRef<number>();

  useEffect(() => {
    indexRef.current = index;
  });

  const handleMouseOut = () => {
    if (id.current !== undefined) {
      clearInterval(id.current);
    }
  };

  return (
    <div className={`picture-carroussel ${className}`}>
      <img
        onMouseOver={() => {
          id.current = setInterval(() => {
            if (indexRef.current === tab.length - 1) {
              setIndex(0);
            } else {
              if (indexRef.current !== undefined) {
                setIndex(indexRef.current + 1);
              }
            }
          }, 2000);
        }}
        onMouseOut={handleMouseOut}
        className="images"
        src={require("../../assets/image/bags/" + tab[index])}
        alt="bag"
      />
      <div className="bullets">
        {tab.map((x, i) => {
          return (
            <div
              key={x}
              className={`bullet ${i === index ? "active" : "inactive"}`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
