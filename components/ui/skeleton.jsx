import React from "react";
// import { cn } from "@/lib/utils"; // utility to merge class names

function Skeleton({ className, ...props }) {
  return (
    <div
    data-slot="skeleton"
      className={("bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md", className)}
      {...props}
    />
  );
}

export default Skeleton;
