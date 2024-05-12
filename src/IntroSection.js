import './IntroSection.css';
import React, { useRef } from 'react';

function IntroSection({image, text, index}) {

  const box_width = Math.min(700, window.innerWidth*.6);

  return (
    <div className="section" style={{ display: "flex", alignItems: "center", flexDirection: window.innerWidth < 1000 ? "column" : (index%2==0 ? "row-reverse" : "row"), maxWidth: `${box_width}px`}} >
      <p style={{color:"white", width:`${box_width-200}px`, marginLeft:"20px", marginRight:"20px", fontSize:"20px"}} > {text} </p>
      <img src={image} style={{height:"200px", width:"200px"}} />
    </div>
  );
}

export default IntroSection;