import React from "react";
import "./statsCard.scss";

const StatsCard = ({ percentage, text }) => {
  return (
    <>
      <div className="card stats-card-container">
        <div className={`donut-chart chart${percentage}`}>
          <div className="quad one"></div>
          <div className="quad two"></div>
          <div className="quad three"></div>
          <div className="quad four"></div>
          <div className="quad top"></div>
          <div className="chart-center"></div>
        </div>
        <p className="statistics-text">{text}</p>
      </div>
    </>
  );
};
export default StatsCard;
