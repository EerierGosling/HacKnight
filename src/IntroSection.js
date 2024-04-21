import './IntroSection.css';
import React, { useRef } from 'react';

function IntroSection({image, text, index}) {

  const box_width = Math.min(700, window.innerWidth*.6);

  return (
    <div className="question-dropdown" style={{ display: "flex", alignItems: "center", maxWidth: `${box_width}px`}} >
      {index%2 == 0 &&  <img src={image} style={{height:"200px", width:"200px"}} />}
      <p style={{color:"white", width:`${box_width-200}px`, marginLeft:"20px", marginRight:"20px", fontSize:"20px"}} > {text} </p>
      {index%2 != 0 &&  <img src={image} style={{height:"200px", width:"200px"}} />}
    </div>
  );
}

export default IntroSection;