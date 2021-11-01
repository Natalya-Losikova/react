import React from "react";

export const Message = ({ message, onCmcClick}) => {
    
    return (
        <h2 onClick={onCmcClick}>{message}</h2>
    )
}