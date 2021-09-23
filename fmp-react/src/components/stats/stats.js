import React, { Fragment } from "react";
import StatsCard from "./statsCard";
import "./stats.scss";

const Stats = ({ items }) => {
  return (
    <div className="stats-box-container">
      {items.map((i) => {
        return (
          <Fragment key={i.percentage}>
            <StatsCard
              percentage={i.percentage}
              text={i.text}
              style={i.style}
            />
          </Fragment>
        );
      })}
    </div>
  );
};
export default Stats;
