"use client";

import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import { ic_ChatGPT } from "../icons/ChatGPT";
import { ic_NewChat } from "../icons/NewChat";
import { ic_Search } from "../icons/Search";
import { ic_Library } from "../icons/Library";
import { ic_Sora } from "../icons/Sora";
import { ic_GPT } from "../icons/GPT";
import { ic_NewProject } from "../icons/NewProject";
import { ic_SidebarOpen } from "../icons/SidebarOpen";
import { ic_SidebarClose } from "../icons/SidebarClose";
import { ic_Upgrade } from "../icons/Upgrade";
import { ic_Personalization } from "../icons/Personalization";
import { ic_Settings } from "../icons/Settings";
import { ic_Help } from "../icons/Help";
import { ic_Logout } from "../icons/Logout";
import { ic_Gmail } from "../icons/gmail";

const Sidepanel = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpenDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div
            className={clsx(
                "bg-gray-50 flex flex-col h-screen border-r border-gray-200 transition-all duration-200 overflow-y-auto",
                collapsed ? "w-[56px]" : "w-[260px]"
            )}
        >
            {/* --- Header --- */}
            <div className="sticky top-0 bg-gray-50 z-10">
                <div className="flex justify-between p-4 group">
                    <button className={clsx("cursor-pointer", { "group-hover:hidden": collapsed })}>
                        <div className="w-6 h-6 text-black">{ic_ChatGPT.icon()}</div>
                    </button>
                    <button
                        className={clsx("cursor-pointer", { "hidden group-hover:block": collapsed })}
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        <div className="w-6 h-6 text-gray-600">
                            {collapsed
                                ? ic_SidebarOpen.icon({ width: 16, height: 16 })
                                : ic_SidebarClose.icon({ width: 16, height: 16 })}
                        </div>
                    </button>
                </div>

                {/* --- Top Links --- */}
                <div className="px-2 space-y-1">
                    <Link href="/" className="px-2 rounded-sm flex items-center gap-3 py-2 text-sm w-full hover:bg-gray-200">
                        <div className="w-6 h-6 text-black">{ic_NewChat.icon()}</div>
                        {!collapsed && <span>New chat</span>}
                    </Link>

                    <Link href="/" className="px-2 rounded-sm flex items-center gap-3 py-2 text-sm w-full hover:bg-gray-200">
                        <div className="w-6 h-6 text-black">{ic_Search.icon()}</div>
                        {!collapsed && <span>Search chats</span>}
                    </Link>

                    <Link href="/" className="px-2 rounded-sm flex items-center gap-3 py-2 text-sm w-full hover:bg-gray-200">
                        <div className="w-6 h-6 text-black">{ic_Library.icon()}</div>
                        {!collapsed && <span>Library</span>}
                    </Link>
                </div>
            </div>

            {/* --- Middle Section --- */}
            {!collapsed && (
                <>
                    <div className="my-6 mx-2 space-y-1">
                        <Link href="/" className="px-2 rounded-sm flex gap-3 py-2 text-sm hover:bg-gray-200">
                            <div className="w-6 h-6 text-black">{ic_Sora.icon()}</div>
                            Sora
                        </Link>
                        <Link href="/" className="px-2 rounded-sm flex gap-3 py-2 text-sm hover:bg-gray-200">
                            <div className="w-6 h-6 text-black">{ic_GPT.icon()}</div>
                            GPTs
                        </Link>
                    </div>

                    <div className="my-6 mx-2 space-y-1">
                        <Link href="/" className="px-2 rounded-sm flex gap-3 py-2 text-sm hover:bg-gray-200">
                            <div className="w-6 h-6 text-black">{ic_NewProject.icon()}</div>
                            New Project
                        </Link>
                    </div>

                    <div className="my-6 mx-2">
                        <p className="px-2 text-gray-500 text-sm">Chats</p>
                    </div>
                </>
            )}

            {/* --- Bottom (Dropdown Section) --- */}
            <div ref={dropdownRef} className="relative mt-auto sticky bottom-0 bg-gray-50 border-t border-gray-200 p-2">
                <button
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className="flex items-center justify-between w-full cursor-pointer"
                >
                    <div className="flex items-center gap-2">
                        <div className="rounded-full w-7 h-7 bg-blue-400 text-white flex items-center justify-center">
                            T
                        </div>
                        {!collapsed && (
                            <div className="flex flex-col text-left">
                                <span className="text-sm">manshi p a</span>
                                <span className="text-xs text-gray-500">Free</span>
                            </div>
                        )}
                    </div>
                    {!collapsed && (
                        <button className="px-2 py-1 bg-white rounded-2xl border border-gray-300 text-xs font-medium cursor-pointer">
                            Upgrade
                        </button>
                    )}
                </button>

                {/* Dropdown Menu */}
                {openDropdown && !collapsed && (
                    <div className="absolute left-0 bottom-14 w-full bg-white shadow-lg border rounded-2xl py-2 px-3 z-50">
                        <ul className="text-sm text-gray-700">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">{ic_Gmail.icon()}aaafsfdsfds@gmail.com</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 ">
                                {ic_Upgrade.icon()}
                                <span>Upgrade plan</span>
                            </li>

                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                                {ic_Personalization.icon()}
                                <span>Personalization</span></li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">{ic_Settings.icon()}<span>Settings</span></li>
                            <hr className="my-1" />
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">{ic_Help.icon()}<span>Help</span></li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"> {ic_Logout.icon()}<span>Log out</span></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidepanel;
