import React from "react";
import styles from './IntroSection.module.css'

export default function IntroSection({ image, title, text, index, column_width, alt }) {
    // const box_width = Math.min(700, window.innerWidth * 0.6);

    const width =
        window.innerWidth < 1000 ? window.innerWidth - 80 : column_width;

    return (
        <div
            className={styles.section}
            style={{
                flexDirection:
                    window.innerWidth < 1000
                        ? "column"
                        : index % 2 === 0
                            ? "row"
                            : "row-reverse",
                width: width,
            }}>
            <img
                src={image}
                style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "20px",
                }}
                alt={alt}
            />
            <div
                style={{
                    color: "white",
                    // width: `${box_width - 200}px`,
                    paddingLeft: "40px",
                    paddingRight: "40px",
                    fontSize: "20px",
                    width: width,
                }}>
                <p style={{ fontSize: "25px", fontWeight: "bold" }}>{title}</p>
                <p> {text} </p>
            </div>
        </div>
    );
}
