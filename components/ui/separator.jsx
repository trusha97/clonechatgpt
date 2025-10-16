"use client";

import React from "react";

export function Separator({
  className = "",
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  const baseStyles =
    "bg-gray-300 dark:bg-gray-700 shrink-0"; // default separator color
  const orientationStyles =
    orientation === "horizontal"
      ? "h-px w-full my-2"
      : "w-px h-full mx-2";

  return (
    <div
      role={decorative ? "none" : "separator"}
      aria-orientation={orientation}
      className={`${baseStyles} ${orientationStyles} ${className}`}
      {...props}
    />
  );
}

