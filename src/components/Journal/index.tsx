import React from "react";

import "./style.css";

interface Journal {
  title: string;
  date: string;
  scans: string[];
}

interface Props {
  journal: Journal;
}

export default ({ journal }: Props) => {
  return (
    <div className="journal">
      {journal.scans.reverse().map((page, i, tab) => (
        <img
          className={`page${tab.length - 1 - i}`}
          src={require("../../assets/image/press/" + page)}
          alt="journal page"
        />
      ))}
    </div>
  );
};
