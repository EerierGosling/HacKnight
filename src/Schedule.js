import './Schedule.css';
import Event from './Event';
import events from './Events.json';
import React, { useState } from 'react';

function Schedule({colunm_width}) {
  const [showing_events, setShowingEvents] = useState(events.learnathon);

  function changeToLearnathon() {
    setShowingEvents(events.learnathon);
  }
  function changeToHackathon() {
    setShowingEvents(events.hackathon);
  }

  return (
    <div className="schedule-container" style={{width: colunm_width}}>
        <p className="schedule-title" style={{fontSize:"40px", color:"white", fontWeight:"bold"}}>
          Schedule
        </p>
        <div className="schedule-options" style={{display: 'flex'}}>
            <p className="schedule-type" onClick={changeToLearnathon} style={{color: showing_events===events.learnathon ? "rgb(255, 234, 100)" : "white", cursor: showing_events===events.learnathon ? "" : "pointer", paddingRight:"30px"}}>Learnathon</p>
            <p className="schedule-type" onClick={changeToHackathon} style={{color: showing_events===events.hackathon ? "rgb(255, 234, 100)" : "white", cursor: showing_events===events.hackathon ? "" : "pointer"}}>Hackathon</p>
        </div>

        <p style={{fontSize:"18px", color:"white", fontStyle:"italic"}}>
          {showing_events === events.learnathon ? "Saturday, June 1" : "Saturday, June 1 (6 PM) — Sunday, June 2 (6 PM)" }
        </p>
        
        <div className="schedule-content"> {
          showing_events.map((event, index) => <Event time={event.time} title={event.title} index={index} />)
        }
        </div>
      </div>
  );
}

export default Schedule;