import { useState, useEffect } from "react";

const usePomodoroTimer = () => {
    const [timeRemaining, setTimeRemaining] = useState(25 * 60); // 25 minutes in seconds
    const [isRunning, setIsRunning] = useState(false);
    const [phase, setPhase] = useState("work"); // 'work' or 'break'
    const [phaseLengths, setPhaseLengths] = useState({
        work: 25 * 60, // 25 minutes in seconds
        "short break": 5 * 60, // 5 minutes in seconds
        "long break": 15 * 60, // 15 minutes in seconds
    });
    const [playSound, setPlaySound] = useState(false); //alarm

    useEffect(() => {
        // reset the display to what is entered in the form
        setTimeRemaining(phaseLengths[phase]);
    }, [phase, phaseLengths]);

    useEffect(() => {
        let timer = null;
        if (isRunning && timeRemaining > 0) {
            timer = setInterval(() => {
                setTimeRemaining(timeRemaining - 1);
            }, 1000);
        } else {
            clearInterval(timer);
            if (timeRemaining === 0) {
                setPlaySound(true);
            }
        }
        return () => clearInterval(timer);
    }, [isRunning, timeRemaining]);

    useEffect(() => {
        if (!isRunning) {
            setPlaySound(false);
        }
    }, [isRunning]);

    function startTimer() {
        setIsRunning(true);
    }

    function stopTimer() {
        setIsRunning(false);
        setPlaySound(false); // stop the alarm sound
    }

    function switchPhase(phaseName) {
        switch (phaseName) {
            case "work":
                setPhase("work");
                setTimeRemaining(phaseLengths["work"]);
                break;
            case "short break":
                setPhase("short break");
                setTimeRemaining(phaseLengths["short break"]);
                break;
            case "long break":
                setPhase("long break");
                setTimeRemaining(phaseLengths["long break"]);
                break;
            default:
                prompt("uh oh! something went wrong");
                break;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newPhaseLengths = {
            work: Number(formData.get("work-length")) * 60,
            "short break": Number(formData.get("short-break-length")) * 60,
            "long break": Number(formData.get("long-break-length")) * 60,
        };
        setPhaseLengths(newPhaseLengths);
    }

    return {
        timeRemaining,
        isRunning,
        phase,
        phaseLengths,
        startTimer,
        stopTimer,
        switchPhase,
        handleSubmit,
        playSound,
    };
};

export default usePomodoroTimer;
