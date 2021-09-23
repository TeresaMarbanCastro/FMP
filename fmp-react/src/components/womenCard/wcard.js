import React from "react";
import "./wcard.scss";

const WCard = ({ items }) => {
  return (
    <div className="cards-container">
      {items.map((i) => {
        return (
          <div className="card" key={i.name}>
            <img src={i.source} alt={i.name} />
            <h3 className="title">{i.name}</h3>
            <p className="description">{i.expertise}</p>
          </div>
        );
      })}
    </div>
  );
};
export default WCard;
