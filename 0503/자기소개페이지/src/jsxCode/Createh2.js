import React from 'react'

export default function Createh2(props) {
    const h2 = {
        margin : "0px",
        padding : "0px",
        fontSize : "20px",
        color : "#1e90ff",
        fontWeight : "400",
        marginBottom : "16px",
        borderBottom : "1px solid #3d3c3c",
        paddingBottom : "5px",
        textAlign : "left"
    }
    return (
        <h2 style = {h2}>
            {props.text}
        </h2>
    )
}
