import React from "react";
import "./footer.scss";

import equalityLogo from "../../assets/images/equality.png";
import letter from "../../assets/images/letter.png";
import zass from "../../assets/images/zass-logo2.png";
import fmp from "../../assets/images/fmp.png";

const Footer = (link1, link2) => {
  return (
    <footer className="footer-common">
      <div className="footer-quote">
        <p className="footer-quote-title">
          <span className="footer-emphasis">Súmate</span> a la lucha por la
          <span className="footer-emphasis"> igualdad </span>
        </p>
        <img src={equalityLogo} className="equality-logo" alt="" />
      </div>
      <div className="footer-items">
        <img alt="" src={zass} className="footer-logo" />
        <a
          href={link1}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={fmp}
            className="fmp-logo"
            alt="ir a federacion de mujeres progresistas"
          />
        </a>
        <a href={link2}>
          <img alt="Enviar email" src={letter} className="footer-logo" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
