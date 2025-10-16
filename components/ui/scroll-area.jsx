
"use client";

import React from "react";
import { cn } from "../lib/utils";
export default function ScrollArea({ className, children }) {
  return (
    <div
      className={cn(
        "relative w-full h-full overflow-auto rounded-md scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-500 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
