import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import formatTime from "./formatTime.js";

const TimerDisplay = ({ percentage, timeRemaining, phase }) => {
    const red = "#F59387";
    const green = "#97A670";

    return (
        <CircularProgressbar
            value={percentage}
            className="h-full w-full"
            text={formatTime(timeRemaining)}
            strokeWidth={10}
            styles={buildStyles({
                textColor: "black",
                pathColor: phase === "work" ? red : green,
                tailColor: "rgba(255,255,255,.2)",
            })}
        />
    );
};

export default TimerDisplay;
