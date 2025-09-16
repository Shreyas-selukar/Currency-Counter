import React from "react";
export default function Header({ onToggleTheme, theme }) {
  return (
    <header className="w-full py-6">
      <div className="container flex items-center justify-between">
        <h1 className="text-2xl font-extrabold">Where in the world?</h1>
        <button
          onClick={onToggleTheme}
          className="flex items-center gap-2 text-sm py-2 px-3 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
            />
          </svg>
          <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </div>
    </header>
  );
}
