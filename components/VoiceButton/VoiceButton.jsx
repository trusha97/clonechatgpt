"use client";

import React from "react";

export default function VoiceButton() {
  return (
    <div className="flex items-center gap-2 [grid-area:trailing]">
      <div className="ml-auto flex items-center gap-1.5">
        <div className="min-w-[36px]" data-testid="composer-speech-button-container">
          <span data-state="closed">
            <button
              data-testid="composer-speech-button"
              aria-label="Start voice mode"
              className="relative flex h-9 items-center justify-center rounded-full min-w-8 p-2 bg-[#ececec] hover:opacity-80 disabled:text-gray-50 disabled:opacity-30"
              style={{ viewTransitionName: "var(--vt-composer-speech-button)" }}
            >
              <div className="flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                >
                  <path d="M7.167 15.416V4.583a.75.75 0 0 1 1.5 0v10.833a.75.75 0 0 1-1.5 0Zm4.166-2.5V7.083a.75.75 0 0 1 1.5 0v5.833a.75.75 0 0 1-1.5 0ZM3 11.25V8.75a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0Zm12.5 0V8.75a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0Z" />
                </svg>
              </div>
              <span className="ps-1 pe-1 text-[13px] font-semibold whitespace-nowrap [[data-collapse-labels]_&]:sr-only">
                Voice
              </span>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

