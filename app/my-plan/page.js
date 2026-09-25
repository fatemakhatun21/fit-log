import Link from "next/link";
const MyPlan = () => {
    return (
        <section className="px-5 lg:px-12 py-12">
            <div>
                <h1 className="text-4xl lg:text-5xl font-bold">
                    MY PLAN
                </h1>
                <p className="text-gray-400 mt-2">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                <div className="border border-gray-800 rounded-xl p-5">
                    <p className="text-gray-400">Exercises</p>
                    <h2 className="text-3xl font-bold mt-2">0</h2>
                </div>
                <div className="border border-gray-800 rounded-xl p-5">
                    <p className="text-gray-400">Minutes</p>
                    <h2 className="text-3xl font-bold mt-2">0</h2>
                </div>
                <div className="border border-gray-800 rounded-xl p-5">
                    <p className="text-gray-400">Calories</p>
                    <h2 className="text-3xl font-bold mt-2">0</h2>
                </div>
            </div>
            <div className="tabs tabs-box mt-10 w-fit">
                <button className="tab tab-active">
                    Today&apos;s Plan
                </button>

                <button className="tab">
                    Saved
                </button>
            </div>
            <div className="text-center py-20">
                <h2 className="text-3xl font-bold">
                    NOTHING HERE YET
                </h2>
                <p className="text-gray-400 mt-3">
                    Browse the library and add a lift to get today moving.
                </p>
                <Link href="/" className="btn mt-6 bg-[#ccff00] text-black border-none">
                    Go to workouts
                </Link>
            </div>
        </section>
    );
};

export default MyPlan;