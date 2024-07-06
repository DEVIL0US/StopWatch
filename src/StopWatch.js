import React, { useState, useEffect } from 'react';

export default function StopWatch() {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);

    useEffect(() => {
        let interval = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } 
        else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePause = () => {
        setIsActive(false);
    };

    const handleResume = () => {
        setIsActive(true);
    };
    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    return (
        <>
            <div >
                <span>
                    {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                </span>
                <span>
                    {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
                </span>
                <span>
                    {("0" + ((time / 10) % 100)).slice(-2)}
                </span>
            </div>

            <button
                onClick={handleStart}>
                Start
            </button>

            <button
                onClick={handlePause}>
                Pause
            </button>

            <button
                onClick={handleResume}>
                Resume
            </button>

            <button
                onClick={handleReset}>
                Reset
            </button>
        </>
    );
};
