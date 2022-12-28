import React from "react";
import dateformat from "dateformat";

import classes from "./Date.module.css";

const TodayDate = () => {
  return (
    <div className={classes.DateWrapper}>
      {dateformat(new Date(), "dddd, mmmm dd")}
    </div>
  );
};

export default TodayDate;
