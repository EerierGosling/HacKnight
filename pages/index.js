import Image from 'next/image';
import Head from 'next/head';

import React, { useState, useEffect } from 'react';

import Question from '../components/Question';
import Schedule from '../components/Schedule';
import Workshops from '../components/Workshops';
import ScrollArrow from '../components/ScrollArrow.js';
import IntroSection from '../components/IntroSection.js';
import MiddleHills from '../components/MiddleHills.js';

import intro_sections from '../data/Intro.json';
import questions from '../data/Questions.json';

import hacknight_logo from '../public/hacknight.png';
import hacknight_text from '../public/logo_text.png';
import moon_image from '../public/hero/moon.png';
import clouds from '../public/hero/clouds.png';
import hill_left_1 from '../public/hero/hills/left/1.png';
import hill_left_3 from '../public/hero/hills/left/3.png';
import hill_right_2 from '../public/hero/hills/right/2.png';
import hill_right_4 from '../public/hero/hills/right/4.png';

export default function Content() {

  const [scrollY, setScrollY] = useState(0);
  const [viewWidth, setViewWidth] = useState();
  const [viewHeight, setViewHeight] = useState();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setScrollY(Math.max(window.scrollY / viewHeight, 0));
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
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [scrollY, viewHeight]);

  if (!isMounted) {
    return null; // Return null during SSR and until the component has mounted
  }

  const mobile_view = viewWidth < 1000;

  const hills_size = Math.min(viewWidth, viewHeight);

  const hill_height = Math.min(viewHeight / 1.5, viewWidth / 1.5);
  const hill_width_factor = hill_height / 1024;

  const hills_left_width = hill_width_factor * 1500;
  const hills_right_width = hill_width_factor * 2000;

  const starting_x = .5;
  const starting_y = mobile_view ? Math.max(.12, (1 - (hills_size * 1.2) / viewHeight) / 2) : .05;

  const r_x = 1.2 * (1 - starting_x);
  const r_y = 1 - starting_y;

  const top_padding_num = 100 * (r_y * (-Math.cos(scrollY * 1.5)) + (starting_y + 1));
  const top_padding = `${top_padding_num}vh`;
  const left_padding = `${100 * (r_x * (Math.sin(scrollY * 1.5)) + starting_x)}vw`;

  // const scroll_freeze = Math.min(scrollY, .72);

  const transform_left = `translateX(calc(-100vw*${Math.max(scrollY * .5, 0)}))`;
  const transform_right = `translateX(calc(100vw*${Math.max(scrollY * .5, 0)}))`;

  const transform_down = `translateY(${hill_height * Math.max(scrollY * .5, 0)}px)`;

  const column_width = Math.min(window.innerWidth - 200, 800);

  const middle_hills_arr = Array.from({ length: viewWidth / (hill_width_factor * 3000 * .8) }, (_, index) => (
    <MiddleHills key={index} hill_height={hill_height} index={index} viewHeight={viewHeight} viewWidth={viewWidth} scrollY={scrollY} transform_left={transform_left} transform_right={transform_right} transform_down={transform_down} />
  ));

  return (
    <>
      <Head>
        <title>HacKnight</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="/hacknight.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="May 31-June 1 in the Boston area."
        />
      </Head>
      <div className="App">

        <div className="nav-bar" style={{ opacity: `${Math.min((window.scrollY / viewHeight - .3) * 2, 1)}`, display: "flex", position: "fixed", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <Image src={hacknight_logo} alt="HacKnight Logo" style={{ paddingLeft: "1vh", height: "8vh", width: "8vh" }} />
            {!mobile_view &&
              <Image src={hacknight_text} alt="HacKnight" style={{ paddingLeft: "1vh", height: "8vh", width: "auto" }} />
            }
          </div>

          <div className="signup-button">
            <button className="button-link-nav" onClick={() => window.location.href = '/signup'}>Sign Up!</button>
          </div>
        </div>

        {scrollY <= 1 &&
          <div className="sunset-full">
            <div className="sunset">
              <div className="image-container">
                {scrollY < 1 &&
                  <Image className="moon" src={moon_image} alt="moon" style={{ top: top_padding, left: left_padding, height: `${Math.min(viewHeight * .2, viewWidth * .2)}px`, width: "auto" }} />
                }
              </div>

              <Image className="clouds" src={clouds} alt="clouds" style={{ height: hills_size, width: hills_size, top: `${viewHeight - hills_size + (viewWidth > 600 && viewWidth < 1000 ? 80 : 0)}px`, transform: transform_right }} />

              <div className="all-hills" style={{ top: `${viewHeight - 1024}px`, display: 'flex' }}>
                <Image className="hill" src={hill_left_1} alt="hills" style={{ height: hill_height, width: hills_left_width, zIndex: "-1", top: `${viewHeight - hill_height}px`, left: 0, transform: `${transform_left} ${transform_down}` }} />
                <Image className="hill" src={hill_left_3} alt="hills" style={{ height: hill_height, width: hills_left_width, zIndex: "-3", top: `${viewHeight - hill_height}px`, left: 0, transform: `${transform_left} ${transform_down}` }} />

                {middle_hills_arr}

                <Image className="hill" src={hill_right_2} alt="hills" style={{ height: hill_height, width: hills_right_width, zIndex: "-2", top: `${viewHeight - hill_height}px`, left: `${viewWidth - hills_right_width}px`, transform: `${transform_right} ${transform_down}` }} />
                <Image className="hill" src={hill_right_4} alt="hills" style={{ height: hill_height, width: hills_right_width, zIndex: "-4", top: `${viewHeight - hill_height}px`, left: `${viewWidth - hills_right_width}px`, transform: `${transform_right} ${transform_down}` }} />

              </div>
            </div>

            {1 - scrollY * 2 > 0 &&
              <div className="header" style={{ opacity: Math.max(1 - scrollY * 2, 0) }}>
                <Image className="wordmark-top" src={hacknight_text} alt="HacKnight" />
                <p className="tagline">
                  Code the Knight away!
                </p>
                <p className="time-location">
                  May 31 - June 1, 2025 at <a href="https://maps.app.goo.gl/yovXzF5TM46DzRep9" target="_blank" rel="noreferrer" style={{ color: 'yellow' }}>BB&N High School</a> in the Boston Area
                </p>
                <div className="signup-button">
                  <button className="button-link" onClick={() => window.location.href = '/signup'}>Sign Up!</button>
                </div>
              </div>
            }

          </div>
        }

        <div style={{ height: viewHeight, width: "100%", display: "flex", position: "fixed", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", color: "white", pointerEvents: "none" }}>
          <ScrollArrow />
        </div>

        <div style={{ height: viewHeight }}></div>

        <div className="site-content" style={{ justifyContent: "center", alignItems: "center", zIndex: 10 }}>
          <div className="intro">

            <div style={{ width: column_width + 110, paddingBottom: "40px" }}>

              <p style={{ fontSize: "35px", color: "white", fontWeight: "bold", paddingBottom: "10px" }}>
                HacKnight has two parts: <br></br>
                The <span className="accent-text">Learnathon</span> and the <span className="accent-text">Hackathon</span>.
              </p>


              <p style={{ fontSize: "25px", color: "white", width: mobile_view ? window.innerWidth - 80 : column_width, paddingLeft: mobile_view ? "0px" : "30px" }}>
                During the <span className="accent-text">Learnathon</span>, you can come to <b>workshops</b> hosted by BB&N students, <b>learn new skills</b>, and talk to guest speakers!
              </p>

              <p style={{ fontSize: "25px", color: "white", width: mobile_view ? window.innerWidth - 80 : column_width, paddingLeft: mobile_view ? "0px" : "30px" }}>
                During the <span className="accent-text">Hackathon</span>, you can come <b>build your own project</b> and compete to <b>win prizes</b>!
                <p style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)" }}>You have the option to hack for 24 hours, (the overnight hackathon) or 9 (the day hackathon).</p>
              </p>
            </div>


            {intro_sections.map((section, index) => (
              <IntroSection
                key={section.id}
                image={`/${section.image}`}
                title={section.title}
                text={section.text}
                index={index}
                column_width={column_width}
                alt={section.alt}
              />
            ))}
          </div>

          <Schedule column_width={column_width} mobile_view={mobile_view} />

          <Workshops column_width={column_width} />

          {/* <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: window.innerWidth < 1000 ? window.innerWidth-100 : column_width}}>
              <p style={{color: "white", fontSize: "30px", textAlign: "center"}}>
                Check out our workshops <a href="https://docs.google.com/document/d/1kk1hw4DBa5mL0YpR7kIsxWMjsTWw-VJ8CjBdsl5qWwc/preview" target="_blank" rel="noreferrer" style={{color: "yellow"}}>here</a>!
              </p>
            </div>
          </div> */}

          <div className="faq" style={{ width: window.innerWidth < 1000 ? window.innerWidth - 100 : column_width }}>
            <h1 className="faq-title">
              FAQ
            </h1>
            {questions.map((question) => <Question key={question.id} question={question.question} answer={question.answer} />)}
          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: window.innerWidth < 1000 ? window.innerWidth - 100 : column_width }}>
              <p style={{ color: "white", fontSize: "20px", textAlign: "center" }}>
                Are your parents worried? Check out our <a href="https://docs.google.com/document/d/1HFM-9BbNoR7ELdUT5aJk4wnBbjg88wpMcC4UpYXopsw/preview" target="_blank" rel="noreferrer" style={{ color: "yellow" }}>Parent's Guide</a>!
              </p>
            </div>
          </div>

          <div className="footer" style={{ paddingBottom: "10px" }}>
            <a href="https://bbns.org" target="_blank" rel="noreferrer">
              <Image src="https://www.bbns.org/wp-content/uploads/2023/08/BBandN_logo-white.svg" className="bottom-logo" alt="BB&N Logo" width={100} height={100} />
            </a>
            <a href="https://hackclub.com" target="_blank" rel="noreferrer">
              <Image src="https://assets.hackclub.com/flag-standalone-wtransparent.svg" className="bottom-logo" alt="Hack Club Logo" width={150} height={150} />
            </a>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: window.innerWidth < 1000 ? window.innerWidth - 100 : column_width }}>
              <p style={{ color: "white", opacity: ".8", fontSize: "15px", textAlign: "center" }}>
                Want to see how we made this website? Check out our <a href="https://github.com/EerierGosling/HacKnight" target="_blank" rel="noreferrer" style={{ color: "yellow" }}>GitHub Repo</a>!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}