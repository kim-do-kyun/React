import React from 'react';

function CreateInfo(props) {
    const text = {
        lineHeight : "16px",
        fontSize : "15px",
        fontWeight : "bold",
        color : "black",
        marginBottom : "6px",
        textAlign : "left"
    }
    return (
        <p className="text" style = {text}>
            {props.name} : {props.content}
        </p>
    );
}

export default CreateInfo;