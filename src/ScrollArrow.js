import React, { useState, useEffect } from 'react';

import './ScrollArrow.css';
import arrow_image from "./assets/arrow.svg"

function ScrollArrow() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (window.scrollY == 0) {
      setShow(true);
    }
    else {
      setShow(false);
    }
  }

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {

      setShow(false);

      // Reset the timer on scroll
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Set the timer
      timeoutId = setTimeout(() => {
        handleShow();
      }, 5000); // 10000 ms or 10 seconds
    };

    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup function to remove the scroll listener and clear timeout
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={`arrow-container ${show ? 'show' : ''}`}>
    <img className="scroll-arrow" src={arrow_image} alt="Arrow" />
  </div>
  );
}

export default ScrollArrow;
