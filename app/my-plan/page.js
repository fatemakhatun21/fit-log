"use client";
import { useState } from "react";
import Link from "next/link";
import { usePlan } from "../components/PlanContext";
import { toast } from "react-toastify";
import { Check, X } from "lucide-react";
const MyPlan = () => {
    const { plan, setPlan, saved, setSaved, isLoaded } = usePlan();
    const [activeTab, setActiveTab] = useState("plan");
    const [sortBy, setSortBy] = useState("duration");
    const currentList = activeTab === "plan" ? plan : saved;
    const sortedCurrentList = [...currentList].sort((a, b) => {
        if (sortBy === "duration") {
            return a.duration - b.duration;
        }

        if (sortBy === "calories") {
            return a.caloriesBurned - b.caloriesBurned;
        }

        if (sortBy === "rating") {
            return b.rating - a.rating;
        }

        return 0;
    });
    const totalMinutes = plan.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = plan.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );
    const handleDone = (id) => {
        const updatedPlan = plan.map((workout) =>
            workout.id === id
                ? { ...workout, done: true }
                : workout
        );

        setPlan(updatedPlan);
        toast.success("Workout marked as done");
    };
    const handleRemove = (id) => {
        if (activeTab === "plan") {
            setPlan(plan.filter((workout) => workout.id !== id));
        } else {
            setSaved(saved.filter((workout) => workout.id !== id));
        }
        toast.success("Workout removed");
    };
    if (!isLoaded) {
        return (
            <div className="flex items-center justify-center gap-3 py-20">
                <span className="loading loading-spinner loading-md"></span>
                <p>Loading workouts...</p>
            </div>
        );
    }
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
                    <p className="text-gray-400">Minutes</p>
                    <h2 className="text-3xl font-bold mt-2">{totalMinutes}</h2>
                </div>
                <div className="border border-gray-800 rounded-xl p-5">
                    <p className="text-gray-400">Calories</p>
                    <h2 className="text-3xl font-bold mt-2">{totalCalories}</h2>
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
            <div className="mt-6 flex justify-end">
                <div>
                    <label className="text-sm text-gray-400 mr-2">
                        Sort By
                    </label>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="select select-bordered bg-[#141719]">
                        <option value="duration">Duration</option>
                        <option value="calories">Calories</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
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
                    {sortedCurrentList.map((workout) => (
                        <div
                            key={workout.id}
                            className={`border border-gray-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center gap-4 ${workout.done ? "opacity-60" : ""
                                }`}>
                            <img src={workout.image} alt={workout.name} className="w-24 h-24 object-cover rounded-lg" />
                            <div className="flex-1">
                                <h2 className="text-xl font-bold">
                                    {workout.name}
                                </h2>
                                <p className="text-gray-400">
                                    {workout.equipment}
                                </p>
                                <p className="text-sm mt-2">
                                    {workout.duration} min · {workout.caloriesBurned} kcal · ⭐{" "}
                                    {workout.rating}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link
                                    href={`/workout/${workout.id}`}
                                    className="btn btn-sm btn-outline">
                                    View Details
                                </Link>
                                {activeTab === "plan" && (
                                    <button
                                        onClick={() => handleDone(workout.id)}
                                        className="btn btn-sm bg-[#ccff00] text-black border-none">
                                        <Check size={16} />
                                        Mark as Done
                                    </button>
                                )}
                                <button
                                    onClick={() => handleRemove(workout.id)}
                                    className="btn btn-sm btn-outline">
                                    <X size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )
            }
        </section>
    );
};

export default MyPlan;