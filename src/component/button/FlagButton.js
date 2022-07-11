import React from 'react'

import './Button.css';

const STYLES = ['btn-pt', 'btn-en', 'btn-es', 'btn-us', 'btn-in', 'btn-cn']

export const FlagButton = ({
    onClick,
    flagButtonStyle,
    type,
    value
}) => {
    const checkFlagButtonStyle = STYLES.includes(flagButtonStyle)? flagButtonStyle: STYLES[0];
    return(
        <button
        className={`btn ${checkFlagButtonStyle}`}
        onClick={onClick}
        type = {type}
        value={value}
        >
        </button>
    )
}