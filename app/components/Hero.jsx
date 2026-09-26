import React from "react";

const Hero = () => {
    return (
        <section className="px-5 sm:px-6 lg:px-12 py-10 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-10">
                <div className="text-center lg:text-left">
                    <p className="text-[#ccff00] text-sm sm:text-base font-semibold tracking-widest mb-3 lg:mb-4">
                        WORKOUT LIBRARY
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                        TRAIN WITH INTENT. <br className="hidden sm:block" />
                        LOG EVERY SET.
                    </h1>
                    <p className="text-gray-400 mt-4 lg:mt-5 max-w-xl mx-auto lg:mx-0 leading-7">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>
                    <a href="#library"
                        className="btn mt-6 lg:mt-7 bg-[#ccff00] text-black border-none font-bold">
                        BROWSE WORKOUTS
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2">
                            <path d="M12 5v14" />
                            <path d="m19 12-7 7-7-7" />
                        </svg>
                    </a>
                </div>
                <div className="w-full">
                    <img
                        src="/banner.png"
                        alt="Workout Banner"
                        className="w-full max-h-[500px] object-cover rounded-xl" />
                </div>
            </div>
        </section>
    );
};

export default Hero;