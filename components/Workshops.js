import Event from "./Event.js";
import workshops from "../data/Workshops.json";
import React, { useState } from "react";
import styles from './Workshops.module.css';

export default function Workshops({ column_width, mobile_view }) {

  return (
    <div className={styles["workshops-width"]}>
      <div className={styles["workshops-with-title"]}>
        <h1 className={styles["workshops-title"]}> Workshops </h1>
        <h2 className={styles["workshops-block"]}> Block 1 </h2>
        <div className={styles["workshops-container"]}>
          {workshops.filter(workshop => workshop.block === 1).map((workshop, index) => (
            <Workshop
              index={index}
              workshop={workshop}
            />
          ))}
        </div>
        <h2 className={styles["workshops-block"]}> Block 2 </h2>
        <div className={styles["workshops-container"]}>
          {workshops.filter(workshop => workshop.block === 2).map((workshop, index) => (
            <Workshop
              index={index}
              workshop={workshop}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Workshop({ workshop }) {



  return (
    <div className={styles["workshop"]}>
      <h2>{workshop.title}</h2>
      <h4>{workshop.leader} -{" "}
        {workshop.emails.map((email, index) => (
          <React.Fragment key={email}>
            {index > 0 && ', '}
            <a href={`mailto:${email}`} style={{ color: "white", textDecoration: "underline" }}>{email}</a>
          </React.Fragment>
        ))}
      </h4>
      <p>{workshop.description}</p>
    </div>
  )
}