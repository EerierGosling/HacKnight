import './IntroSection.css';
import React, { useRef } from 'react';

function IntroSection({image, title, text, index, column_width}) {

  const box_width = Math.min(700, window.innerWidth*.6);

  return (
    <div className="section" style={{ display: "flex", alignItems: "center", flexDirection: window.innerWidth < 1000 ? "column" : (index%2==0 ? "row-reverse" : "row"), width: column_width, justifyContent: "center"}} >
      <div style={{color:"white", width:`${box_width-200}px`, paddingLeft:"40px", paddingRight:"40px", fontSize:"20px", width:column_width}}>
        <p style={{fontSize:"25px", fontWeight:"bold"}}>{title}</p>
        <p> {text} </p>
      </div>
      <img src={image} style={{height:"200px", width:"200px"}} />
    </div>
  );
}

export default IntroSection;