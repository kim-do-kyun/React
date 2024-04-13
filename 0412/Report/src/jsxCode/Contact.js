import React from 'react';
import Createh2 from './Createh2';

function Contact() {
    const section = {
      marginBottom:"24px"
    }
    
    const style = {
      text : "left",
      width: "30px",
      height: "30px",
      float : "left"
    }
    return (
        <section style = {section}>
          <Createh2 text = "📲Contact"></Createh2>
          <div>
            <a href="tel:010-9417-6952"><img style = {style} src="img/phone.png" alt="phone" /></a>
            <a href="mailto:zetgi7dk5359@gmail.com" target="_blank"><img style = {style} src="img/gmail.png" alt="gmail" /></a>
            <a href="https://www.instagram.com/d_d_kyun/" target="_blank"><img style = {style} src="img/instagram.png" alt="instagram" /></a>
            <a href="https://github.com/kim-do-kyun" target="_blank"><img style = {style} src="img/github.png" alt="github" /></a>
            <br></br>
          </div>
      </section>
    );
}

export default Contact;