import React from 'react';

import classes from './WeatherDetails.module.css';
import Icon from '../../elements/Icon/Icon';
import Temperature from './Temperature/Temperature';
import Description from './Description/Description';
import Date from './Date/Date';

const weatherDetails = (props) => {
    return(
        <div className={classes.WeatherDetailsWrapper}>
            <div className={classes.WeatherIconWrapper}>
                <Icon />    
            </div>
            <div className={classes.WeatherDataWrapper}>
                <Temperature />
                <Description />
                <Date />
            </div>
        </div>
    );
}

export default weatherDetails;