import './Intro_Section.css';

function Intro_Section({image, text}) {

  return (
    <div className="question-dropdown">
      <img src={image} style={{}} />
      <p> {text} </p>
    </div>
  );
}

export default Intro_Section;