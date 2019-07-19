import React from 'react';

import classes from './Header.module.css';
import Logo from '../../elements/Logo/Logo';

const header = (props) => {
    return(
        <header className={classes.Header}>
            <Logo colorScheme='light' />
        </header>
    ); 
}

export default header;