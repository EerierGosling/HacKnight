import hacknight_logo from './assets/hacknight.png';
import hacknight_text from './assets/logo_text.png';
import './App.css';
import Question from './Question'
import Schedule from './Schedule'
import questions from './Questions.json';

import React, { useState, useEffect } from 'react';
import sun_image from './assets/sun.png';
import hills_front from './assets/hills_front.png';
import hills_back from './assets/hills_back.png';
import hills_between from './assets/hills_between.png';
import clouds from './assets/clouds.png';

function App() {

  const starting_color = [167, 220, 255];
  const ending_color = [28, 33, 49];

  const getColor = (percentage) => {
    if (percentage > .25) {
      return `rgb(${ending_color[0]}, ${ending_color[1]}, ${ending_color[2]})`;
    }
    const r = Math.round(starting_color[0] + (ending_color[0] - starting_color[0]) * percentage*4);
    const g = Math.round(starting_color[1] + (ending_color[1] - starting_color[1]) * percentage*4);
    const b = Math.round(starting_color[2] + (ending_color[2] - starting_color[2]) * percentage*4);

    return `rgb(${r}, ${g}, ${b})`;
  }

  const [scrollY, setScrollY] = useState(0);
  const [viewWidth, setViewWidth] = useState();
  const [viewHeight, setViewHeight] = useState();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY/viewHeight);
      document.body.style.backgroundColor = getColor(scrollY);
    };

    const handleResize = () => {
      setViewWidth(window.innerWidth);
      setViewHeight(window.innerHeight);
    };

    handleScroll();
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('rezize', handleResize);
    };
  }, [getColor, scrollY]);

  const starting_x = .5;
  const starting_y = .05;

  const r_x = .9-starting_x;
  const r_y = 1-starting_y;

  const top_padding = `${Math.min(100*(r_y*(-Math.cos(scrollY*6.2))+(starting_y+1)), 100-20)}vh`;
  const left_padding = `${top_padding == viewHeight*(100-20) ? 100 : 100*(r_x*(Math.sin(scrollY*6.2))+starting_x)}vw`;

  const hills_size_num = Math.min(viewWidth, viewHeight);
  const hills_size = `${hills_size_num}px`;

  const hills_between_arr = Array.from({ length: Math.ceil(viewWidth/hills_size_num) }, (_, index) => (
    <img className="hills-back" src={hills_between} alt="hills" style={{height:hills_size, width:hills_size}} key={index} />
  ));
  
  return (
    <div className="App">
      <div className="sunset-full">
        <div className="image-container">
          <img className="sun-image" src={sun_image} alt="sun" style={{ top: top_padding, left: left_padding}} />
        </div>
        <img className="clouds" src={clouds} alt="clouds" style={{height:hills_size, width:hills_size}} />
        <div className="hills_back_all" style={{ display: 'flex' }} >
          {hills_between_arr}
          <img className="hills-back" src={hills_back} alt="hills" style={{height:hills_size, width:hills_size}} />
        </div>
        <img className="hills-front" src={hills_front} alt="hills" style={{height:hills_size, width:hills_size}} />

        <div className="header">
          <div className="center-content">
            {/* <img src={hacknight_logo} alt="HacKnight Logo" className="center-image" height="200px"/> */}
            <img src={hacknight_text} alt="HacKnight" style={{width:"40vw", transform:"translateX(-1vw)" }} />
            {console.log(viewWidth)}
          </div>
          <p className="time-location">
            June 1-2, <a href="https://maps.app.goo.gl/yovXzF5TM46DzRep9" style={{color:'yellow'}}>BB&N High School</a>
          </p>
          <p className="tagline">
            free! boston! prizes!
          </p>
          <p className="info">
            info
          </p>
          <div className="signup-button">
            <a href="https://forms.gle/pUeC3qFb2ZLw31Uc8" className="button-link">Sign Up!</a>
          </div>
        </div>
      </div>
      <div className="intro">

      </div>

      <Schedule/>

      <div className="faq">
        <p className="schedule-title" style={{fontSize:"25px", color:"white", fontWeight:"bold"}}>
          FAQ
        </p>
        {questions.map((question) => <Question question={question.question} answer={question.answer}/>)}
      </div>
      <p style={{color:"white", fontSize:"20px"}}>
        Are your parents worried? Check out our <a href="add the link!!" style={{color:"yellow"}}>Parent's Guide</a>!
      </p>
      <div className="footer" style={{paddingBottom:"10px"}}>
        <img src="https://www.bbns.org/wp-content/uploads/2023/08/BBandN_logo-white.svg" className="bottom-logo" alt="BB&N Logo" height="100px"/>
        <img src="https://assets.hackclub.com/flag-standalone-wtransparent.svg" className="bottom-logo" alt="Hack Club Logo" height="70px"/>
      </div>
    </div>
  );
}

export default App;
