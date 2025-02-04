import "./Question.css";
import arrow_image from "./assets/arrow.svg";
import React, { useState } from "react";

function Question({ question, answer }) {
    const [showing, setShowing] = useState(false);

    function toggleDropdown() {
        setShowing(!showing);
    }

    return (
        <div className="question-dropdown">
            <div onClick={toggleDropdown} className="question">
                <img
                    className={showing ? "arrow rotate" : "arrow"}
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