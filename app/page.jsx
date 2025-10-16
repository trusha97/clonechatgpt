// export default function Home() {
//   return (
//     <section className="max-w-3xl mx-auto">
//       <h1 className="text-4xl font-bold mb-4">CloneChatGPT</h1>
//       <p className="mb-6">This is a minimal Next.js + Tailwind CSS starter. Customize it as you like.</p>

//       <div className="space-y-4">
//         <div className="p-4 border rounded-lg bg-white shadow">
//           <h2 className="text-lg font-semibold">Example card</h2>
//           <p className="text-sm text-gray-600">Use this area to build your UI.</p>
//         </div>
//         <a className="inline-block px-4 py-2 rounded bg-blue-600 text-white" href="#">Get started</a>
//       </div>
//     </section>
//   )
// }



"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ Add this import
import { ChevronDown } from "lucide-react";
import { ic_ChatGPT } from "../components/icons/ChatGPT";
import Attach from "../components/Attach/Attach";
import SearchButton from "../components/SearchButton/SearchButton";
import StudyButton from "../components/StudyButton/StudyButton";
import VoiceButton from "../components/VoiceButton/VoiceButton"

export default function Home() {
  const router = useRouter(); // ✅ Initialize router
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col min-h-screen justify-between bg-white text-black">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-2 ">
        {/* Left side: Logo + ChatGPT Dropdown */}
        <div className="relative flex items-center gap-2" ref={dropdownRef}>
          <div className="w-7 h-7 rounded-full  flex items-center justify-center cursor-default">
            {ic_ChatGPT.icon()}
          </div>

          {/* ChatGPT text + dropdown trigger */}
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 cursor-pointer select-none"
          >
            <span className="font-medium text-base">ChatGPT</span>
            <ChevronDown
              size={18}
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </div>

          {/* Dropdown Card */}
          {open && (
            <div className="absolute top-12 left-0 w-72 bg-white rounded-xl shadow-lg border overflow-hidden z-20">
              {/* Banner section */}
              <div className="h-20 bg-gradient-to-r from-purple-300 via-pink-200 to-blue-200" />

              {/* Content */}
              <div className="p-4">
                <h3 className="text-base font-semibold">
                  Try advanced features for free
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Get smarter responses, upload files, create images, and more
                  by logging in.
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => router.push("/login")} // ✅ Navigate to login page
                    className="px-4 py-1.5 bg-black text-white rounded-full text-sm hover:bg-gray-800"
                  >
                    Log in
                  </button>

                  <button className="px-4 py-1.5 border border-gray-300 rounded-full text-sm hover:bg-gray-100">
                    Sign up for free
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right side buttons */}
        <div className="flex gap-2 ">
          <button
            onClick={() => router.push("/login")} // ✅ Navigate to login page
            className="px-4 py-1.5 bg-black text-white rounded-full text-sm hover:bg-gray-800"
          >
            Log in
          </button>

          <button className="px-4 py-1.5 border border-gray-300 rounded-full text-sm hover:bg-gray-100">
            Sign up for free
          </button>
        </div>
      </header>

      {/* Main section */}
      <main className="flex flex-col items-center justify-center text-center px-4 mb-40">
        <h1 className="text-2xl md:text-3xl font-normal mb-10">
          What’s on your mind today?
        </h1>

        <div className="w-full max-w-3xl flex flex-col items-center">
          <div className="relative w-full bg-white rounded-[28px] shadow-sm border flex flex-col items-center">
            <input
              type="text"
              placeholder="Ask anything"
              className="w-full px-6 py-4 text-gray-800 rounded-[28px] focus:outline-none"
            />
            <div className="flex items-center justify-between w-full px-3 pb-3">
              <div className="flex min-w-fit items-center gap-1.5 ps-0 pe-1.5">
                <Attach />
                <SearchButton />
                <StudyButton />
              </div>
              <div>
                <VoiceButton />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 py-4">
        By messaging ChatGPT, you agree to our{" "}
        <a href="#" className="underline hover:text-black">
          Terms
        </a>{" "}
        and have read our{" "}
        <a href="#" className="underline hover:text-black">
          Privacy Policy
        </a>
        .{" "}
        <a href="#" className="underline hover:text-black">
          Cookie Preferences
        </a>
        .
      </footer>
    </div>
  );
}