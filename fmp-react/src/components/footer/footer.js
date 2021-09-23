import React from "react";
import "./footer.scss";

import equalityLogo from "../../assets/images/equality.png";

const Footer = ({ items }) => (
  <footer className="footer-common">
    <div className="footer-quote">
      <p className="footer-quote-title">
        <span className="footer-emphasis">Súmate</span> a la lucha por la
        <span className="footer-emphasis"> igualdad </span>
      </p>
      <img src={equalityLogo} className="equality-logo" alt="" />
    </div>
    <ul className="footer-items">
      {items.map((i) => {
        return (
          <li key={i.id}>
            {i.a ? (
              <a href={i.a} target="_blank" rel="noreferrer">
                <img alt={i.alt} src={i.src} className={`${i.additionalClass} footer-logo`}/>{" "}
              </a>
            ) : (
              <img alt={i.alt} src={i.src} className="footer-logo" />
            )}
          </li>
        );
      })}
    </ul>
  </footer>
);
export default Footer;
