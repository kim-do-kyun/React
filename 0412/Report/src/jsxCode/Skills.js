import React from 'react';
import Createh2 from './Createh2';

function Skills() {
    const section = {
      marginBottom : "24px"
    }
    const text = {
      lineHeight : "16px",
      fontSize : "15px",
      fontWeight : "bold",
      color : "black",
      marginBottom : "6px",
      textAlign : "left"
  }
    return (
      <section style = {section}>
        <Createh2 text = "📌SKILLS"></Createh2>
        <div className="float-wrap">
          <p className="text" style ={text}>Java, HTML/CSS/JS, C, Python</p>
        </div>
      </section>
    );
}

export default Skills;