import React from "react";

const Hero = () => {
    return (
        <section className="px-5 lg:px-12 py-12 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                <div>
                    <p className="text-[#ccff00] font-semibold tracking-widest mb-4">
                        WORKOUT LIBRARY
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                        TRAIN WITH INTENT. <br />
                        LOG EVERY SET.
                    </h1>
                    <p className="text-gray-400 mt-5 max-w-xl leading-7">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>
                    <a href="#library" className="btn mt-7 bg-[#ccff00] text-black border-none font-bold">
                        BROWSE WORKOUTS
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2">
                            <path d="M12 5v14" /> <path d="m19 12-7 7-7-7" />
                        </svg>
                    </a>
                </div>
                <div>
                    <img
                        src="/banner.png" alt="Workout Banner"
                        className="w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};
export default Hero;