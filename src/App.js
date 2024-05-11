import hacknight_logo from './assets/hacknight.png';
import hacknight_text from './assets/logo_text.png';
import './App.css';
import Question from './Question';
import Schedule from './Schedule';
import questions from './Questions.json';
import IntroSection from './IntroSection.js'
import intro_sections from './Intro.json';

import MiddleHills from './MiddleHills.js';

import React, { useState, useEffect } from 'react';
import sun_image from './assets/sun.png';
import clouds from './assets/clouds.png';

import hill_left_1 from './assets/hills/left/1.png';
import hill_left_3 from './assets/hills/left/3.png';
import hill_right_2 from './assets/hills/right/2.png';
import hill_right_4 from './assets/hills/right/4.png';

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
  }, [getColor, scrollY, viewHeight]);

  const mobile_view = viewWidth < 900;

  const hills_size = Math.min(viewWidth, viewHeight);

  const hill_height = Math.min(viewHeight/1.5, viewWidth/1.5);
  const hill_width_factor = hill_height/1024;

  const hills_left_width = hill_width_factor*1500;
  const hills_right_width = hill_width_factor*2000;

  const starting_x = .5;
  const starting_y = mobile_view ? Math.max(.12, (1 - (hills_size*1.2)/viewHeight)/2) : .05;

  const r_x = .9-starting_x;
  const r_y = 1-starting_y;

  const top_padding_num = 100*(r_y*(-Math.cos(scrollY*5.6))+(starting_y+1));
  const top_padding = `${top_padding_num}vh`;
  const left_padding = `${100*(r_x*(Math.sin(scrollY*5.6))+starting_x)}vw`;

  const transform_left = `translateX(calc(-100vw*${scrollY}))`;
  const transform_right = `translateX(calc(100vw*${scrollY}))`;

  const transform_down = `translateY(${hill_height*scrollY}px)`;



  const middle_hills_arr = Array.from({ length: viewWidth/(hill_width_factor*3000*.8) }, (_, index) => (
    <MiddleHills hill_height={hill_height} index={index} viewHeight={viewHeight} viewWidth={viewWidth} scrollY={scrollY} transform_left={transform_left} transform_right={transform_right} transform_down={transform_down} />
  ));
  
  return (
    <div className="App">
      {scrollY > 1000000 &&
        <div className="nav-bar" style={{opacity:`${Math.min((window.scrollY/viewHeight-.3)*2, 1)}`, display:"flex"}}>
          <img src={hacknight_logo} alt="HacKnight Logo" style={{paddingTop:"1vh", paddingLeft:"1vh", height:"8vh", width:"8vh"}}/>
          <img src={hacknight_text} alt="HacKnight" style={{paddingTop:"1vh", paddingLeft:"1vh", height:"8vh"}} />
        </div>
      }
      <div className="sunset-full">
        <div className="sunset-top">

          <div className="background">
            <div className="image-container">
              {scrollY < .5 &&
                <img className="sun" src={sun_image} alt="sun" style={{ top: top_padding, left: left_padding, height:`${Math.min(viewHeight*.2, viewWidth*.2)}px`}} />
              }
            </div>
            <img className="clouds" src={clouds} alt="clouds" style={{height:hills_size, width:hills_size, top:`${viewHeight - hills_size + (viewWidth > 600 && viewWidth < 900 ? 80 : 0)}px`, transform: transform_right}} />
            
            <div className="all-hills" style={{top:`${viewHeight-1024}px`}}>
              <div className="hill-container right">
                <img className="hill" src={hill_left_1} alt="hills" style={{height:hill_height, width:hills_left_width, zIndex:"-1", top:`${viewHeight-hill_height}px`, position:'fixed', transform: `${transform_left} ${transform_down}`}}/>
                <img className="hill" src={hill_left_3} alt="hills" style={{height:hill_height, width:hills_left_width, zIndex:"-3", top:`${viewHeight-hill_height}px`, position:'fixed', transform: `${transform_left} ${transform_down}`}}/>
              </div>

              {middle_hills_arr}

              <div className="hill-container left">
                <img className="hill" src={hill_right_2} alt="hills" style={{height:hill_height, width:hills_right_width, zIndex:"-2", top:`${viewHeight-hill_height}px`, left:`${viewWidth-hills_right_width}px`, position:'fixed', transform: `${transform_right} ${transform_down}`}}/>
                <img className="hill" src={hill_right_4} alt="hills" style={{height:hill_height, width:hills_right_width, zIndex:"-4", top:`${viewHeight-hill_height}px`, left:`${viewWidth-hills_right_width}px`, position:'fixed', transform: `${transform_right} ${transform_down}`}}/>
              </div>
            </div>
          </div>
        </div>

        <div className="header" style={{opacity:Math.max(1-scrollY*2, 0)}}>
          <div className="center-content">
            <img src={hacknight_text} alt="HacKnight" style={{width:`${mobile_view ? 90 : 40 }vw`, transform:"translateX(-1vw)" }} />
            {console.log(viewWidth)}
          </div>
          <p className="time-location">
            June 1-2, <a href="https://maps.app.goo.gl/yovXzF5TM46DzRep9" target="_blank" rel="noreferrer" style={{color:'yellow'}}>BB&N High School</a>
          </p>
          <p className="tagline">
            free! boston! prizes!
          </p>
          <p className="info">
            info
          </p>
          <div className="signup-button">
            <a href="https://forms.gle/pUeC3qFb2ZLw31Uc8" className="button-link" target="_blank" rel="noreferrer">Sign Up!</a>
        </div>

      </div>
      
      </div>

      <div className="site-content" style={{zIndex:"-5"}}>
        <div className="intro">
          {intro_sections.map((section, index) => (
            <IntroSection key={section.id} image={require(`${section.image}`)} text={section.text} index={index} />
          ))}
        </div>

        <Schedule/>

        <div className="faq" style={{width:`${Math.min(window.innerWidth-150, 800)}px`}}>
          <p className="schedule-title" style={{fontSize:"25px", color:"white", fontWeight:"bold"}}>
            FAQ
          </p>
          {questions.map((question) => <Question key={question.id} question={question.question} answer={question.answer}/>)}
        </div>
        <p style={{color:"white", fontSize:"20px"}}>
          Are your parents worried? Check out our <a href="https://docs.google.com/document/d/153dYEuwn99BKUlF328-Ua3jw0sY1UDIEqdfRUL9dRaQ/edit?usp=sharing/preview" target="_blank" rel="noreferrer" style={{color:"yellow"}}>Parent's Guide</a>!
        </p>
        <div className="footer" style={{paddingBottom:"10px"}}>
          <a href="https://bbns.org" target="_blank" rel="noreferrer">
            <img src="https://www.bbns.org/wp-content/uploads/2023/08/BBandN_logo-white.svg" className="bottom-logo" alt="BB&N Logo" height="100px"/>
          </a>
          <a href="https://hackclub.com" target="_blank" rel="noreferrer">
            <img src="https://assets.hackclub.com/flag-standalone-wtransparent.svg" className="bottom-logo" alt="Hack Club Logo" height="70px"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
