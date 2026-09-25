"use client";
import { useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";

const Library = () => {
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.abcz.workers.dev/api/fitlog")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setWorkouts(data);
                setLoading(false);
            });
    }, []);

    return (
        <section id="library" className="px-5 lg:px-12 py-16">

            <h2 className="text-4xl font-bold">
                THE LIBRARY
            </h2>

            <p className="text-gray-400 mt-2">
                Twelve lifts covering every major muscle group.
            </p>

            {loading && (
                <p className="mt-10">
                    Loading workouts...
                </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {workouts.map((workout) => (
                    <WorkoutCard
                        key={workout.id}
                        workout={workout}
                    />
                ))}
            </div>

        </section>
    );
};

export default Library;