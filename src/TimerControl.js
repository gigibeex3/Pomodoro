import React from "react";

const TimerControls = ({ startTimer, stopTimer }) => {
    return (
        <div className="my-5">
            <div className="flex gap-4">
                <button className="start-btn btn" onClick={startTimer}>
                    Start
                </button>
                <button className="stop-btn btn" onClick={stopTimer}>
                    Stop
                </button>
            </div>
        </div>
    );
};

export default TimerControls;
