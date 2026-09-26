"use client";
import { createContext, useContext, useEffect, useState } from "react";
const PlanContext = createContext();
export const PlanProvider = ({ children }) => {
    const [plan, setPlan] = useState([]);
    const [saved, setSaved] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const storedPlan = JSON.parse(localStorage.getItem("plan")) || [];
        const storedSaved = JSON.parse(localStorage.getItem("saved")) || [];
        setPlan(storedPlan);
        setSaved(storedSaved);
        setIsLoaded(true);
    }, []);
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("plan", JSON.stringify(plan));
            localStorage.setItem("saved", JSON.stringify(saved));
        }
    }, [plan, saved, isLoaded]);
    return (
        <PlanContext.Provider
            value={{
                plan, setPlan, saved, setSaved, isLoaded
                }}> {children}
        </PlanContext.Provider>
    );
};

export const usePlan = () => {
    return useContext(PlanContext);
};