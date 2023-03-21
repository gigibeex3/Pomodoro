import "./App.css";
import React, { useEffect } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import usePomodoroTimer from "./usePomodoroTimer";
import TimerControls from "./TimerControl";
import TimerSettings from "./TimerSettings";
import TimerDisplay from "./TimerDisplay";
import Alarm from "./alarm.mp3";

const Pomodoro = () => {
  const {
    timeRemaining,
    phase,
    phaseLengths,
    startTimer,
    stopTimer,
    switchPhase,
    handleSubmit,
    playSound,
    isRunning,
  } = usePomodoroTimer();

  const percentage = (timeRemaining / phaseLengths[phase]) * 100;

  useEffect(() => {
    const audio = new Audio(Alarm);
    if (playSound && isRunning) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [playSound, isRunning]);

  return (
    <div className="pomodoro-container">
      <div className="flex justify-center">
        <div className="timers btn-group m-auto my-9 border-none">
          <button
            className="switch-btn btn hover:text-white"
            onClick={() => switchPhase("work")}
          >
            Pomodoro
          </button>
          <button
            className="switch-btn btn hover:text-white"
            onClick={() => switchPhase("short break")}
          >
            Short Break
          </button>
          <button
            className="switch-btn btn hover:text-white"
            onClick={() => switchPhase("long break")}
          >
            Long Break
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-50 h-50 my-5">
          <TimerDisplay
            percentage={percentage}
            timeRemaining={timeRemaining}
            phase={phase}
          />
        </div>
      </div>
      <div className="my-5 flex flex-col items-center justify-center">
        <TimerControls startTimer={startTimer} stopTimer={stopTimer} />
        <div className="collapse mb-20">
          <input type="checkbox" />
          <div className="collapse-title m-auto flex justify-center px-4 text-xl font-medium">
            <IoSettingsOutline className="settings h-10 w-10" />
          </div>
          <div className="collapse-content">
            <TimerSettings onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
