import React from 'react'

import classes from './SearchBar.module.css';
import InputField from '../../elements/InputField/InputField';
import Button from '../../elements/Button/Button';

const searchBar = (props) => {
    return(
        <div className={classes.SearchBarWrapper}>
            <InputField />
            <Button name="searchSubmit" type="submit" position="onForm">Set</Button>
        </div>
    );
}

export default searchBar;