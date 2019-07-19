import React from 'react';

import classes from './Temperature.module.css';

const temperature = (props) => {
    return(
        <div className={classes.TemperatureWrapper}>
            23<span className={classes.TemperatureSymbol}>°</span>
        </div>
    );
}

export default temperature;