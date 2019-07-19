import React from 'react'

import classes from './InputField.module.css';

const inputField = (props) => {
    return (
        <div className={classes.InputFieldWrapper}>
            <label htmlFor="city">Location</label>
            <input
                type="text"
                form="searchForm"
                id="city"
                name="city"
                placeholder="Enter a city"
                value="Hamburg"
                required />
        </div>
    );
}

export default inputField;