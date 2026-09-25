const WorkoutDetails = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(
        `https://api.abcz.workers.dev/api/fitlog/${id}`
    );

    const workout = await res.json();

    return (
        <section className="px-5 lg:px-12 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div>
                    <img
                        src={workout.image}
                        alt={workout.name}
                        className="w-full rounded-xl object-cover"
                    />
                </div>
                <div>
                    <h1 className="text-4xl lg:text-5xl font-bold uppercase">
                        {workout.name}
                    </h1>
                    <p className="text-gray-400 mt-4 leading-7">
                        {workout.description}
                    </p>
                    <div className="flex gap-2 mt-5 flex-wrap">
                        {workout.muscleGroups.map((group) => (
                            <span
                                key={group}
                                className="badge badge-outline border-[#ccff00] text-[#ccff00]">
                                {group}
                            </span>
                        ))}
                    </div>
                    <div className="mt-8">
                        <h2 className="text-xl font-bold mb-4">
                            KEY SPECS
                        </h2>
                        <div className="border border-gray-800 rounded-xl overflow-hidden">
                            <div className="flex justify-between p-4 border-b border-gray-800">
                                <span className="text-gray-400">EQUIPMENT</span>
                                <span>{workout.equipment}</span>
                            </div>
                            <div className="flex justify-between p-4 border-b border-gray-800">
                                <span className="text-gray-400">DIFFICULTY</span>
                                <span>{workout.difficulty}</span>
                            </div>
                            <div className="flex justify-between p-4 border-b border-gray-800">
                                <span className="text-gray-400">SETS</span>
                                <span>{workout.sets}</span>
                            </div>
                            <div className="flex justify-between p-4 border-b border-gray-800">
                                <span className="text-gray-400">REPS</span>
                                <span>{workout.reps}</span>
                            </div>
                            <div className="flex justify-between p-4 border-b border-gray-800">
                                <span className="text-gray-400">DURATION</span>
                                <span>{workout.duration} min</span>
                            </div>
                            <div className="flex justify-between p-4 border-b border-gray-800">
                                <span className="text-gray-400">CALORIES</span>
                                <span>{workout.caloriesBurned} kcal</span>
                            </div>
                            <div className="flex justify-between p-4">
                                <span className="text-gray-400">RATING</span>
                                <span>{workout.rating}</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-xl font-bold mb-4">
                            INSTRUCTIONS
                        </h2>
                        <ol className="space-y-3 list-decimal list-inside text-gray-300">
                            {workout.instructions.map((instruction, index) => (
                                <li key={index}>
                                    {instruction}
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-8">
                        <button className="btn bg-[#ccff00] text-black border-none">
                            Add to today&apos;s plan
                        </button>
                        <button className="btn btn-outline">
                            Save for later
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkoutDetails;