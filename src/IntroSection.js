import './IntroSection.css';

function IntroSection({image, text}) {

  return (
    <div className="question-dropdown" style={{ display: "flex", alignItems: "center"}} >
      <img src={image} style={{height:"200px", width:"200px"}} />
      <p style={{color:"white", maxWidth: `${Math.min(700, window.innerWidth*.4)}px`, marginLeft:"20px"}}> {text} </p>
    </div>
  );
}

export default IntroSection;