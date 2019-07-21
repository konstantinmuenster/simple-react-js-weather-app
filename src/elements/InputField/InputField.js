import React from 'react'

import classes from './InputField.module.css';
import assetMapping from '../../assets/assetMapping.json';

const inputField = (props) => {
    return (
        <div className={classes.InputFieldWrapper}>
            <label htmlFor={props.name}>{props.label}</label>
            <input
                type={props.type}
                id={props.name}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.handleChange}
                style={(props.error) ? {'borderBottomColor': assetMapping.colors.error} : null}
                required />
        </div>
    );
}

export default inputField;