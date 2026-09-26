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
                <ul className="menu menu-horizontal px-1 gap-2">
                    <li>
                        <Link href="/" className={pathname === "/" || pathname.startsWith("/workout/")
                            ? "bg-[#263300] text-[#ccff00] font-semibold rounded-full px-4" : ""}>
                            Workout
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/my-plan"
                            className={pathname === "/my-plan" ? "bg-[#263300] text-[#ccff00] font-semibold rounded-full px-4" : ""}>
                            My Plan
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end gap-4 sm:gap-5">

                <Link
                    href="/my-plan?tab=plan"
                    className="flex items-center gap-2 text-sm text-gray-300">
                    <span>Plan</span>
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#ccff00] text-black text-xs font-bold">
                        {plan.length}
                    </span>
                </Link>
                <Link
                    href="/my-plan?tab=saved"
                    className="flex items-center gap-2 text-sm text-gray-400">
                    <span>Saved</span>
                    <span className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-600 text-xs">
                        {saved.length}
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;