
"use client";

import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";

// TooltipProvider is optional wrapper if you want global tooltip context
function TooltipProvider({ children }) {
  return <div className="relative">{children}</div>;
}

// Tooltip wrapper
function Tooltip({ children }) {
  return <>{children}</>;
}

// Trigger component
function TooltipTrigger({ children, onMouseEnter, onMouseLeave }) {
  return React.cloneElement(children, {
    onMouseEnter,
    onMouseLeave,
  });
}

// TooltipContent component
function TooltipContent({ children, className = "", sideOffset = 8 }) {
  const [visible, setVisible] = useState(false);
  const triggerRef = useRef(null);

  return (
    <>
      <TooltipTrigger
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <span ref={triggerRef}>{children[0]}</span>
      </TooltipTrigger>

      {visible &&
        triggerRef.current &&
        createPortal(
          <div
            className={`absolute z-50 w-fit bg-gray-900 text-white rounded-md px-3 py-1.5 text-xs text-center animate-fadeIn ${className}`}
            style={{
              top:
                triggerRef.current.getBoundingClientRect().bottom +
                sideOffset +
                window.scrollY,
              left:
                triggerRef.current.getBoundingClientRect().left +
                triggerRef.current.offsetWidth / 2 +
                window.scrollX,
              transform: "translateX(-50%)",
            }}
          >
            {children[1]}
            {/* Arrow */}
            <div className="absolute w-2.5 h-2.5 bg-gray-900 rotate-45 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
          </div>,
          document.body
        )}
    </>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
