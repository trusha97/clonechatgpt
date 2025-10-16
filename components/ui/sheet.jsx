"use client";
import React, { useState } from "react";
import { cn } from "../lib/utils"; // simple helper

export default function Sheet({
  side = "right",
  triggerText = "Open Sheet",
  title = "Sheet Title",
  description = "Sheet description goes here...",
  children,
}) {
  const [open, setOpen] = useState(false);

  const sideClasses = {
    right: "inset-y-0 right-0 h-full w-3/4 sm:max-w-sm border-l",
    left: "inset-y-0 left-0 h-full w-3/4 sm:max-w-sm border-r",
    top: "inset-x-0 top-0 h-auto border-b",
    bottom: "inset-x-0 bottom-0 h-auto border-t",
  };

  const animationClasses = {
    right: open ? "animate-slide-in-from-right" : "animate-slide-out-to-right",
    left: open ? "animate-slide-in-from-left" : "animate-slide-out-to-left",
    top: open ? "animate-slide-in-from-top" : "animate-slide-out-to-top",
    bottom: open ? "animate-slide-in-from-bottom" : "animate-slide-out-to-bottom",
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700"
      >
        {triggerText}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 animate-fade-in"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sheet Panel */}
      {open && (
        <div
          className={cn(
            "fixed z-50 flex flex-col gap-4 bg-white shadow-lg transition-all duration-300 ease-in-out",
            sideClasses[side],
            animationClasses[side]
          )}
        >
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 opacity-70 hover:opacity-100 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="flex flex-col gap-1.5 p-4 border-b">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm text-gray-500">{description}</p>
          </div>

          {/* Body */}
          <div className="flex-1 p-4 overflow-y-auto">{children}</div>

          {/* Footer */}
          <div className="mt-auto flex flex-col gap-2 p-4 border-t">
            <button
              onClick={() => setOpen(false)}
              className="rounded-md bg-gray-200 hover:bg-gray-300 px-4 py-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
