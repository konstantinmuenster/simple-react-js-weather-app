import React from 'react';

import classes from './Icon.module.css';

const icon = (props) => {
    return(
        <img 
            src={require('../../assets/images/Rainy.svg')} 
            alt="Rainy Icon"
            className={classes.Icon} />
    );
}

export default icon;