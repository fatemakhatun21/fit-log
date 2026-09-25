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
        <div className="flex flex-wrap gap-3 mt-8">
            <button
                onClick={handleAddToPlan}
                className="btn bg-[#ccff00] text-black border-none">
                Add to today&apos;s plan
            </button>
            <button
                onClick={handleSave}
                className="btn btn-outline">
                Save for later
            </button>
        </div>
    );
};

export default WorkoutActions;