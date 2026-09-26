"use client";
import React from 'react'
import Link from "next/link";
import { usePlan } from "./PlanContext";
import { usePathname } from "next/navigation";
const Navbar = () => {
    const { plan, saved } = usePlan();
    const pathname = usePathname();
    return (
        <div className="navbar bg-[#0b0d0f] px-5 lg:px-12 border-b border-gray-800">
            <div className="navbar-start">
                <a className="flex items-center gap-2">
                    <img src="/logo.png" alt="FitLog Logo" className="w-9 h-9 object-contain" />
                    <span className="text-2xl font-bold">FITLOG</span>
                </a>
            </div>
            <div className="navbar-center">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/" className={pathname === "/" || pathname.startsWith("/workout/")
                            ? "bg-[#ccff00] text-black font-semibold" : ""}>
                            Workout
                        </Link>
                    </li>
                    <li>
                        <Link href="/my-plan" className={pathname === "/my-plan"
                            ? "bg-[#ccff00] text-black font-semibold" : ""}>
                            My Plan
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <Link href="/my-plan?tab=plan" className="btn btn-sm rounded-full bg-[#ccff00] text-black border-none">
                    Plan {plan.length}
                </Link>
                <Link href="/my-plan?tab=saved" className="btn btn-sm btn-outline rounded-full">
                    Saved {saved.length}
                </Link>
            </div>
        </div>
    );
};

export default Navbar;