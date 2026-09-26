"use client";

import React from "react";
import Link from "next/link";
import { usePlan } from "./PlanContext";
import { usePathname } from "next/navigation";
const Navbar = () => {
    const { plan, saved } = usePlan();
    const pathname = usePathname();
    return (
        <div className="navbar bg-[#0b0d0f] px-3 sm:px-5 lg:px-12 border-b border-gray-800">
            <div className="navbar-start">
                <div className="dropdown md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        ☰
                    </div>
                    <ul tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-[#141719] rounded-box z-20 mt-3 w-52 p-2 shadow">
                        <li>
                            <Link href="/">
                                Workout
                            </Link>
                        </li>
                        <li>
                            <Link href="/my-plan">
                                My Plan
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link href="/" className="flex items-center gap-2">
                    <img src="/logo.png" alt="FitLog Logo"
                        className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
                    <span className="hidden sm:block text-xl lg:text-2xl font-bold">
                        FITLOG
                    </span>
                </Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/" className={pathname === "/" || pathname.startsWith("/workout/")
                            ? "bg-[#ccff00] text-black font-semibold" : ""}>
                            Workout
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/my-plan"
                            className={pathname === "/my-plan" ? "bg-[#ccff00] text-black font-semibold" : ""}>
                            My Plan
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end gap-1 sm:gap-2">
                <Link href="/my-plan?tab=plan" className="btn btn-xs sm:btn-sm rounded-full bg-[#ccff00] text-black border-none">
                    Plan {plan.length}
                </Link>
                <Link href="/my-plan?tab=saved"
                    className="btn btn-xs sm:btn-sm btn-outline rounded-full">
                    Saved {saved.length}
                </Link>
            </div>
        </div>
    );
};

export default Navbar;