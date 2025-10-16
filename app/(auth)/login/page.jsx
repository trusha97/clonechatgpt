"use client"

import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen  dark:bg-gray-900">
      {/* Header */}
      {/* <header className="p-4 text-2xl font-bold text-gray-900 dark:text-white ">
        ChatGPT
      </header> */}

      {/* Main Login Box */}
      <div className="max-w-xs mx-auto text-center mt-16">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Log in or sign up
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm leading-5">
          You'll get smarter responses and can upload files, images and more.
        </p>

        <div className="mt-7">
          {/* Email Form */}
          <form>
            <input
              type="email"
              placeholder="Email address"
              className="border border-gray-300 dark:border-gray-700 p-3 w-full rounded-full placeholder:text-gray-400 outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            <button
              type="submit"
              className="rounded-full bg-black dark:bg-white w-full p-3 text-white dark:text-black my-7 cursor-pointer transition hover:opacity-90"
            >
              Continue
            </button>
          </form>

          {/* OR divider */}
          <div className="flex gap-2 items-center">
            <div className="flex-1 h-[1px] bg-gray-200 dark:bg-gray-700"></div>
            <div className="px-1 font-bold text-xs text-gray-800 dark:text-gray-300">OR</div>
            <div className="flex-1 h-[1px] bg-gray-200 dark:bg-gray-700"></div>
          </div>

          {/* Social login buttons */}
          <div className="mt-7 space-y-3">
            <SocialButton imgSrc="https://auth-cdn.oaistatic.com/assets/google-logo-NePEveMl.svg" label="Continue with Google" />
            <SocialButton imgSrc="https://auth-cdn.oaistatic.com/assets/microsoft-logo-BUXxQnXH.svg" label="Continue with Microsoft Account" />
            <SocialButton imgSrc="https://auth-cdn.oaistatic.com/assets/apple-logo-vertically-balanced-rwLdlt8P.svg" label="Continue with Apple" />
            <SocialButton svgIcon={<PhoneIcon />} label="Continue with Phone" />
          </div>
        </div>

        {/* Footer links */}
        <div className="mt-16 flex justify-center items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
          <a href="/" className="underline underline-offset-1">
            Terms of Use
          </a>
          <span>|</span>
          <a href="/" className="underline underline-offset-1">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

// Social button component
const SocialButton = ({ imgSrc, svgIcon, label }) => (
  <button className="flex items-center justify-center gap-2 border dark:border-gray-700 p-2 rounded-full w-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
    {imgSrc && <img src={imgSrc} alt={label} className="w-5 h-5" />}
    {svgIcon && svgIcon}
    <span className="text-gray-900 dark:text-white">{label}</span>
  </button>
);

// Phone SVG
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 text-gray-900 dark:text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7-7m0 0l7 7M10 1v18m4-4H6" />
  </svg>
);

export default Login;
