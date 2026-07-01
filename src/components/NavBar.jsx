import React, { useState } from "react";

const navLinks = [
  { id: "about", label: "about" },
  { id: "experiences", label: "experience" },
  // { id: "projects", label: "projects" },
  { id: "activities", label: "activities" },
  { id: "awards", label: "awards" },
];

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
  </svg>
);

const TrafficLights = () => (
  <span className="flex gap-1.5">
    <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
    <span className="w-2.5 h-2.5 rounded-full bg-accent" />
  </span>
);

const NavBar = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollSection = (sectionID) => {
    document.getElementById(sectionID)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop nav — terminal tab bar */}
      <nav className="hidden lg:grid grid-cols-[22%_56%_22%] items-center bg-card border border-soft rounded-full py-2 px-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.45)]">
        <div className="flex items-center gap-2 pl-2 min-w-0">
          <TrafficLights />
          <button
            onClick={() => scrollSection("about")}
            className="font-mono text-sm text-theme tracking-tight whitespace-nowrap"
          >
            ddh<span className="text-accent">.dev</span>
          </button>
        </div>

        <div className="flex justify-center items-center gap-1 font-mono text-sm">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollSection(link.id)}
              className="group px-3 py-1.5 rounded-full text-theme opacity-80 hover:opacity-100 hover:text-accent transition-all duration-200 whitespace-nowrap"
            >
              <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {">"}
              </span>{" "}
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex justify-end items-center pr-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full text-theme hover:bg-accent-soft transition-colors duration-200"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile trigger */}
      {!isOpen && (
        <button
          className="lg:hidden fixed top-4 right-4 z-40 bg-card border border-soft rounded-full p-2.5 shadow-lg"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-theme" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
      )}

      {/* Mobile overlay menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-theme z-50 flex flex-col text-theme">
          <div className="flex items-center justify-between px-5 py-4 border-b border-soft">
            <span className="flex items-center gap-2 font-mono text-sm">
              <TrafficLights />
              menu.sh
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-accent-soft transition-colors"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="text-theme" viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-1 px-6 font-mono">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollSection(link.id)}
                className="text-left text-2xl py-3 border-b border-soft hover:text-accent transition-colors"
              >
                <span className="text-accent">$</span> cd {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="m-6 flex items-center justify-center gap-2 font-mono text-sm border border-soft rounded-full py-3 hover:bg-accent-soft transition-colors"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            switch to {theme === "dark" ? "light" : "dark"} mode
          </button>
        </div>
      )}
    </>
  );
};

export default NavBar;