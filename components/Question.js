import React, { useState } from "react";
import Image from 'next/image';
import styles from './Question.module.css';

import arrow_image from "../public/hero/arrow.svg";

export default function Question({ question, answer }) {
    const [showing, setShowing] = useState(false);

    function toggleDropdown() {
        setShowing(!showing);
    }

    return (
        <div>
            <div onClick={toggleDropdown} className={styles.question}>
                <Image
                    className={`${styles.arrow} ${showing ? styles.rotate : ''}`}
                    src={arrow_image}
                    alt="arrow"
                />
                <p>{question}</p>
            </div>
            {showing && (
                <div id="answer" className={styles.answer}>
                    {answer === "@@EMAIL@@" ?
                        <p>
                            Feel free to email us at{" "}
                            <a
                                href="mailto:hacknight@bbns.org"
                                style={{
                                    color: "white",
                                    textDecoration: "underline",
                                }}>
                                hacknight@bbns.org
                            </a>
                            !
                        </p>
                        :
                        <p>{answer}</p>
                    }
                </div>
            )}
        </div>
    );
}