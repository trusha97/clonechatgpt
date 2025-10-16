"use client"

import React, { useState, useRef, useEffect, createContext, useContext } from "react";
import { ChevronDown, ChevronRight, Check, Circle } from "lucide-react";
import { cn } from "../lib/utils";

// Context for managing open submenus
const DropdownContext = createContext({ closeAll: () => {} });

export function DropdownMenu({ children }) {
  return <div className="relative inline-block text-left">{children}</div>;
}

export function DropdownMenuTrigger({ children, className, onClick }) {
  return (
    <button
      className={cn(
        "flex items-center text-lg font-medium rounded-md hover:bg-gray-100 p-2 outline-none cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
      <ChevronDown className="ml-1 h-5 w-5 text-gray-400" />
    </button>
  );
}

export function DropdownMenuContent({ children, className }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownContext.Provider value={{ closeAll: () => setOpen(false) }}>
      <div className="relative" ref={ref}>
        <div
          className={cn(
            "absolute mt-2 w-48 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg rounded-md border border-gray-200 dark:border-gray-700 z-50 py-1",
            className
          )}
        >
          {children}
        </div>
      </div>
    </DropdownContext.Provider>
  );
}

export function DropdownMenuLabel({ children, className }) {
  return (
    <div
      className={cn(
        "px-2 py-1.5 text-sm font-medium text-gray-500 dark:text-gray-400",
        className
      )}
    >
      {children}
    </div>
  );
}

export function DropdownMenuItem({
  children,
  className,
  onClick,
  inset,
  variant = "default",
}) {
  const { closeAll } = useContext(DropdownContext);
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-700",
        inset && "pl-8",
        variant === "destructive" && "text-red-600 hover:bg-red-100 dark:hover:bg-red-800",
        className
      )}
      onClick={(e) => {
        if (onClick) onClick(e);
        closeAll();
      }}
    >
      {children}
    </div>
  );
}

export function DropdownMenuCheckboxItem({ children, checked, onChange, className }) {
  const { closeAll } = useContext(DropdownContext);
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-700",
        className
      )}
      onClick={() => {
        if (onChange) onChange(!checked);
      }}
    >
      {checked && <Check className="w-4 h-4" />}
      {children}
    </div>
  );
}

export function DropdownMenuRadioItem({ children, selected, onSelect, className }) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-700",
        className
      )}
      onClick={() => {
        if (onSelect) onSelect();
      }}
    >
      {selected && <Circle className="w-3 h-3" />}
      {children}
    </div>
  );
}

export function DropdownMenuSeparator({ className }) {
  return <div className={cn("my-1 h-px bg-gray-200 dark:bg-gray-700", className)} />;
}

export function DropdownMenuShortcut({ children, className }) {
  return <span className={cn("ml-auto text-xs text-gray-400 tracking-widest", className)}>{children}</span>;
}

export function DropdownMenuSub({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {children(open)}
    </div>
  );
}

// export function DropdownMenuSub({ children }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div
//       className="relative"
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => setOpen(false)}
//     >
//       {children}
//     </div>
//   );
// }


export function DropdownMenuSubTrigger({ children, className }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-2 py-1.5 text-sm rounded-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700",
        className
      )}
    >
      {children}
      <ChevronRight className="w-4 h-4 ml-2" />
    </div>
  );
}

export function DropdownMenuSubContent({ children, className }) {
  return (
    <div
      className={cn(
        "absolute left-full top-0 mt-0 ml-1 w-48 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md py-1 z-50",
        className
      )}
    >
      {children}
    </div>
  );
}
