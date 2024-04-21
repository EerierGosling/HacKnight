import './Question.css';
import React, { useState } from 'react';

function Question({question, answer}) {
  const [showing, setShowing] = useState(false);

  function toggleDropdown() {
    setShowing(!showing);
    console.log("anything");
  }

  return (
    <div className="question-dropdown">
      <div onClick={toggleDropdown} className="question">
        <p>{showing ? "▼" : "►"} {question}</p>
      </div>
      {showing && 
        <div id="answer" className="answer">
          <p>{answer}</p>
        </div>
      }
    </div>
  );
}

export default Question;