"use client";
import { usePlan } from "./PlanContext";
import { toast } from "react-toastify";
const WorkoutActions = ({ workout }) => {
    const { plan, setPlan, saved, setSaved } = usePlan();
    const handleAddToPlan = () => {
        const alreadyAdded = plan.find((item) => item.id === workout.id);
        if (alreadyAdded) {
            toast.warning("Workout already added to today's plan");
            return;
        }
        if (plan.length >= 5) {
            toast.warning("Today's plan can contain maximum 5 workouts");
            return;
        }
        setPlan([...plan, workout]);
        toast.success("Added to today's plan");
    };
    const handleSave = () => {
        const alreadySaved = saved.find((item) => item.id === workout.id);
        if (alreadySaved) {
            toast.warning("Workout already saved");
            return;
        }
        setSaved([...saved, workout]);
        toast.success("Saved for later");
    };
    return (
        <div className="flex flex-col sm:flex-row gap-3 mt-8">

            <button
                onClick={handleAddToPlan}
                className="btn bg-[#ccff00] text-black border-none gap-2"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                </svg>

                Add to today&apos;s plan
            </button>

            <button
                onClick={handleSave}
                className="btn btn-outline gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
                Save for later
            </button>

        </div>
    );
};

export default WorkoutActions;