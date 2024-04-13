import React from "react";

function Header(){
    const h1 = {
        margin : "0px",
        padding: "0px",
        fontSize : "36px",
        fontStyle : "italic",
        fontWeight : "bold",
        textAlign : "right",
        marginBottom: "8px",
    }
    const h4 = {
        margin : "0px",
        padding: "0px",
        fontSize : "20px",
        fontStyle : "italic",
        fontWeight : "bold",
        textAlign : "right"
    }
    const img = {
        width: "130px",
        height: "130px",
        borderRadius: "10%",
        float: "left"
    }
    const title = {
        fontSize : "16px",
        fontWeight : "bold",
        color: "#7c7c7c",
        float: "right",
        lineHeight : "16px"
    }
    return (
        <header>
            <img style = {img} src="img/myphoto.jpg" alt="profile" />
            <h1 style = {h1}>김도균</h1>
            <h4 style = {h4}>2020875010</h4>
            <p style = {title}>소프트웨어학과 3학년</p>
            <br /><br /><br /><br/>
        </header>
    )
}

export default Header;