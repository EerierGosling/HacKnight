import "./Schedule.css";
import Event from "./Event";
import events from "./Events.json";
import React, { useState } from "react";

function Schedule({ column_width, mobile_view }) {
    const [showing_events, setShowingEvents] = useState(events.learnathon);

    function changeToLearnathon() {
        setShowingEvents(events.learnathon);
    }
    function changeToHackathon() {
        setShowingEvents(events.hackathon);
    }

    return (
        <div
            className="schedule-container"
            style={{
                width:
                    window.innerWidth < 1000
                        ? window.innerWidth - 100
                        : column_width,
            }}>
            <h1
                className="schedule-title"
                style={{
                    fontSize: "40px",
                    color: "white",
                    fontWeight: "bold",
                }}>
                Schedule
            </h1>
            <p
                style={{
                    fontSize: "16px",
                    color: "white",
                    fontStyle: "italic",
                }}
            >
              The schedule is subject to change and will be updated as we get closer to the event. All times are in Eastern Daylight Time (EDT).
            </p>
            <div className="schedule-options" style={{ display: "flex"}}>
                <p
                    className="schedule-type"
                    onClick={changeToLearnathon}
                    style={{
                        color:
                            showing_events === events.learnathon
                                ? "rgb(255, 234, 100)"
                                : "white",
                        cursor:
                            showing_events === events.learnathon
                                ? ""
                                : "pointer",
                        paddingRight: "30px"
                    }}>
                    Learnathon
                </p>
                <p
                    className="schedule-type"
                    onClick={changeToHackathon}
                    style={{
                        color:
                            showing_events === events.hackathon
                                ? "rgb(255, 234, 100)"
                                : "white",
                        cursor:
                            showing_events === events.hackathon
                                ? ""
                                : "pointer",
                    }}>
                    Hackathon
                </p>
            </div>

            <p
                style={{
                    fontSize: "13px",
                    color: "white"
                }}
            >
              Click <span style={{fontStyle:"italic"}}>Hackathon</span> or <span style={{fontStyle:"italic"}}>Learnathon</span> to see the different schedules!
            </p>

            <p
                style={{
                    fontSize: "18px",
                    color: "white",
                    fontStyle: "italic",
                }}>
                {showing_events === events.learnathon
                    ? "Saturday, June 1"
                    : "Saturday, June 1 (6 PM) — Sunday, June 2 (6 PM)"}
            </p>
            <p
                style={{
                    fontSize: "14px",
                    color: "white",
                }}
            >
                {showing_events === events.hackathon
                    ? "Hackathon workshops and talks will be added closer to the event."
                    : ""}
            </p>

            <div className="schedule-content">
                {" "}
                {showing_events.map((event, index) => (
                    <Event
                        start_time={event.start_time}
                        end_time={event.end_time}
                        title={event.title}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}

export default Schedule;
