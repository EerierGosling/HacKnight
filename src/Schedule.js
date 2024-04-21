import './Schedule.css';
import Event from './Event';
import events from './Events.json';
import React, { useState } from 'react';

function Schedule() {
  const [showing_events, setShowingEvents] = useState(events.learnathon);

  function changeToLearnathon() {
    setShowingEvents(events.learnathon);
  }
  function changeToHackathon() {
    setShowingEvents(events.hackathon);
  }

  return (
    <div className="schedule-container" style={{width:`${Math.min(window.innerWidth-150, 800)}px`}}>
        <p className="schedule-title" style={{fontSize:"40px", color:"white", fontWeight:"bold"}}>
          Schedule
        </p>
        <div style={{display: 'flex'}}>
            <p className="schedule-type" onClick={changeToLearnathon} style={{color: showing_events===events.learnathon ? "rgb(255, 234, 100)" : "white", paddingRight:"30px"}}>Learnathon</p>
            <p className="schedule-type" onClick={changeToHackathon} style={{color: showing_events===events.hackathon ? "rgb(255, 234, 100)" : "white"}}>Hackathon</p>
        </div>
        
        <div className="schedule-content"> {
          showing_events.map((event) => <Event time={event.time} title={event.title}/>)
        }
        </div>
      </div>
  );
}

export default Schedule;