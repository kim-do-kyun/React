import React from "react";
import CreateInfo from "./CreateInfo";
import Createh2 from "./Createh2";

function Infos(props){
    const section = {
        marginBottom : "24px"
    }

    return (
        <section style = {section}>
            <Createh2 text = "🔍INFO"></Createh2>
            <div>
                <CreateInfo name = "학교" content = "경성대학교"></CreateInfo>
                <CreateInfo name = "생년월일" content = "2001.04.17"></CreateInfo>
                <CreateInfo name = "거주지" content = "경남 김해"></CreateInfo>
                <CreateInfo name = "취미" content = "볼링, 게임"></CreateInfo>
            <br></br>
            </div>
        </section>
    )
}

export default Infos;