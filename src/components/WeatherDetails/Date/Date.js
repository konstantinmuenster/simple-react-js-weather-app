import React from 'react';

import dateformat from 'dateformat';

import classes from './Date.module.css';

const date = (props) => {
    const today = new Date();
    return(
        <div className={classes.DateWrapper}>
            {dateformat(today, "dddd, mmmm dd")} 
        </div>
    );
}

export default date;