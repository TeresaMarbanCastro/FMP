import React from "react";
import "./linkList.scss";

const LinkList = ({ items }) => (
  <ul className="links-ul">
    {items.map((i) => {
      return (
        <li key={i.name} className="list-element">
          <a href={i.link} target="_blank" rel="noreferrer">
            {i.name}
          </a>
        </li>
      );
    })}
  </ul>
);

export default LinkList;
