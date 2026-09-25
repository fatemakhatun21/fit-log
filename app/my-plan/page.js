"use client";
import { useState } from "react";
import Link from "next/link";
import { usePlan } from "../components/PlanContext";
const MyPlan = () => {
    const { plan, saved } = usePlan();
    const [activeTab, setActiveTab] = useState("plan");

    const currentList = activeTab === "plan" ? plan : saved;

    const totalMinutes = plan.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = plan.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );
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
                    <h2 className="text-3xl font-bold mt-2">{plan.length}</h2>
                </div>
                <div className="border border-gray-800 rounded-xl p-5">
                    <p className="text-gray-400">{totalMinutes}</p>
                    <h2 className="text-3xl font-bold mt-2">0</h2>
                </div>
                <div className="border border-gray-800 rounded-xl p-5">
                    <p className="text-gray-400">{totalCalories}</p>
                    <h2 className="text-3xl font-bold mt-2">0</h2>
                </div>
            </div>
            <div className="tabs tabs-box mt-10 w-fit">
                <button
                    onClick={() => setActiveTab("plan")}
                    className={`tab ${activeTab === "plan" ? "tab-active" : ""}`}>
                    Today&apos;s Plan
                </button>
                <button
                    onClick={() => setActiveTab("saved")}
                    className={`tab ${activeTab === "saved" ? "tab-active" : ""}`}>
                    Saved
                </button>
            </div>
            {currentList.length === 0 ? (
                <div className="text-center py-20">
                    <h2 className="text-3xl font-bold">
                        NOTHING HERE YET
                    </h2>
                    <p className="text-gray-400 mt-3">
                        Browse the library and add a lift to get today moving.
                    </p>
                    <Link
                        href="/"
                        className="btn mt-6 bg-[#ccff00] text-black border-none">
                        Go to workouts
                    </Link>
                </div>
            ) : (
                <div className="mt-8 space-y-4">
                    {currentList.map((workout) => (
                        <div
                            key={workout.id}
                            className="border border-gray-800 rounded-xl p-4 flex items-center gap-4">
                            <img src={workout.image} alt={workout.name} className="w-24 h-24 object-cover rounded-lg"/>
                            <div>
                                <h2 className="text-xl font-bold">
                                    {workout.name}
                                </h2>
                                <p className="text-gray-400">
                                    {workout.equipment}
                                </p>
                                <p className="text-sm mt-2">
                                    {workout.duration} min · {workout.caloriesBurned} kcal · ⭐ {workout.rating}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default MyPlan;