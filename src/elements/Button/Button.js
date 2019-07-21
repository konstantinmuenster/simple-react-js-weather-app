import React from 'react'

import classes from './Button.module.css';

const button = (props) => {
    let buttonClasses = [
        classes.ButtonWrapper,
        (props.position === 'onForm') ? classes.FormButtonWrapper : null
    ];
    return(
        <div className={buttonClasses.join(' ')}>
            <button 
                type={props.type} 
                name={props.name}
                onClick={props.clicked}>{props.children}</button>
        </div>
    );
}

export default button;