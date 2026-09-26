import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";

const WorkoutCard = ({ workout }) => {
    return (
        <Link href={`/workout/${workout.id}`}>
            <div className="card bg-[#141719] border border-gray-800 overflow-hidden cursor-pointer">
                <figure>
                    <img src={workout.image} alt={workout.name}
                        className="w-full h-48 sm:h-56 object-cover" />
                </figure>

                <div className="card-body">
                    <div className="flex gap-2 flex-wrap">
                        {workout.muscleGroups.map((group) => (
                            <span
                                key={group} className="badge badge-outline text-[#ccff00] border-[#ccff00]">
                                {group}
                            </span>
                        ))}
                    </div>
                    <h2 className="card-title uppercase mt-2">
                        {workout.name}
                    </h2>
                    <p className="text-gray-400">
                        {workout.equipment}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-300">
                        <div className="flex items-center gap-1">
                            <Clock size={16} />
                            <span>{workout.duration} min</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <Flame size={16} />
                            <span>{workout.caloriesBurned} kcal</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <Star size={16} />
                            <span>{workout.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;