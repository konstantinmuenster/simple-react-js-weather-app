import React from "react";
import classes from "./WeatherDetails.module.css";
import Icon from "../../elements/Icon/Icon";
import Temperature from "./Temperature/Temperature";
import Description from "./Description/Description";
import TodayDate from "./Date/Date";

const WeatherDetails = ({ data }) => {
  return (
    <div className={classes.WeatherDetailsWrapper}>
      <div className={classes.WeatherIconWrapper}>
        <Icon type={data.description} />
      </div>
      <div className={classes.WeatherDataWrapper}>
        <Temperature degrees={data.temperature} />
        <Description type={data.description} />
        <TodayDate />
      </div>
    </div>
  );
};

export default WeatherDetails;
