import React from 'react';
import './FlagIcon.css';

function FlagIcon(props) {
    return (
        <div className={`flag ${props.activeClassName}`}>
        </div >
    );
}

export default FlagIcon;