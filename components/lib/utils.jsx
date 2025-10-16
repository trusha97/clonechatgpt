// import { clsx } from "clsx";
// import { twMerge } from "tailwind-merge";

// export function cn(...inputs) {
//   return twMerge(clsx(inputs));
// }



"use client";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names safely with Tailwind and basic fallback.
 * - If twMerge and clsx are available → merges Tailwind classes properly.
 * - Otherwise → joins truthy class names.
 */
export function cn(...classes) {
  try {
    // Use advanced merge if libraries exist
    return twMerge(clsx(classes));
  } catch (error) {
    // Fallback simple join if something fails
    return classes.filter(Boolean).join(" ");
  }
}
