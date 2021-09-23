import React from "react";
import "./textCard.scss";

const TextCard = ({ items }) => {
  return (
    <ul className="links-ul">
      {items.map((i) => {
        return (
          <li key={i.id} className="list-element">
            <p className="card-text">{i.text} </p>
            <p className="card-subtext">{i.survivor}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default TextCard;
