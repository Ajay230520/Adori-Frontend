import React, { useState, useEffect } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

const LoadingScreen = () => {
    const [progress, setProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoaded(true), 1000); // fades out in 1 second
                    return 100;
                }
                return prevProgress + 20; // increase progress by 20%
            });
        }, 300);

        return () => clearInterval(interval);
    }, []);

    if (isLoaded) return null; // Hide the loading screen when fully loaded

    return (
        <div
            className={`fixed inset-0 bg-black flex flex-col items-center justify-center text-white z-50 font-sans transition-opacity duration-1000 ${
                progress === 100 ? 'opacity-0' : 'opacity-100'
            }`}
        >
            <h1 className="goldman-bold text-5xl tracking-widest mb-[30vh]">ALDORI</h1>
            <h1
                className={`text-5xl font-bold mb-4 goldman-regular ${progress >= 10 ? 'animate-blink' : ''}`}
            >
                Loading...
            </h1>
            <div className="relative w-4/5">
                {/* Bottom White Line */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-white opacity-50"></div>

                {/* Progress Bar */}
                <ProgressBar
                    className="goldman-bold"
                    completed={progress}
                    width="100%"
                    height="6px"
                    baseBgColor="transparent" // makes the progress bar background transparent so the line shows
                    bgColor="lightgreen"
                    labelColor="#FFF"
                    labelAlignment="outside"
                />
            </div>
        </div>
    );
};

export default LoadingScreen;
