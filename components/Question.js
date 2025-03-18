import './Question.css';
import React, { useState } from "react";
import Image from 'next/image';

import arrow_image from "../public/hero/arrow.svg";

function Question({ question, answer }) {
    const [showing, setShowing] = useState(false);

    function toggleDropdown() {
        setShowing(!showing);
    }

    return (
        <div className="question-dropdown">
            <div onClick={toggleDropdown} className="question">
                <Image
                    className={`arrow ${showing ? "rotate" : ""}`}
                    src={arrow_image}
                    alt="arrow"
                />
                <p>{question}</p>
            </div>
            {showing && (
                <div id="answer" className="answer">
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

export default Question;