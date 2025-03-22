import Event from "./Event.js";
import workshops from "../data/Workshops.json";
import React, { useState } from "react";
import styles from './Workshops.module.css';

export default function Workshops({ column_width, mobile_view }) {

  return (
    <div className={styles["workshops-width"]}>
      <div className={styles["workshops-with-title"]}>
        <h1 className={styles["workshops-title"]}> Workshops </h1>
        <div className={styles["workshops-container"]}>
          {workshops.map((workshop, index) => (
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
      <p>{workshop.description}</p>
    </div>
  )
}