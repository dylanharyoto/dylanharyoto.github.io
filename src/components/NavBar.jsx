import React, { useState } from "react";

const NavBar = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollSection = (sectionID) => {
    document.getElementById(sectionID).scrollIntoView({
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  return (
    <>
      <nav className="hidden lg:grid grid-cols-[25%_50%_25%] bg-card rounded-[40px] py-1.5 items-center shadow-[0_0_10px_rgba(255,255,255,0.5)] dark:shadow-[0_0_10px_rgba(0,0,0,0.5)]">
        <div className="flex justify-start items-center mx-2.5">
          <div className="min-w-[40px] h-[40px] rounded-full bg-theme flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="text-theme"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
              />
            </svg>
          </div>
          <a href="#opening" className="ml-2 text-lg text-theme">
            ddh
          </a>
        </div>
        <div className="flex justify-center items-center mx-2.5">
          <a
            onClick={() => scrollSection("about")}
            className="text-theme text-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            About
          </a>
          <a
            onClick={() => scrollSection("experiences")}
            className="text-theme text-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Experiences
          </a>
          <a
            onClick={() => scrollSection("projects")}
            className="text-theme text-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Projects
          </a>
          <a
            onClick={() => scrollSection("activities")}
            className="text-theme text-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Activities
          </a>
          <a
            onClick={() => scrollSection("awards")}
            className="text-theme text-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Awards
          </a>
        </div>
        <div className="flex justify-end items-center mx-2.5">
          <button onClick={toggleTheme}>
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="text-theme"
                viewBox="0 0 16 16"
              >
                <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="text-theme"
                viewBox="0 0 16 16"
              >
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {!isOpen && (
        <button
          className="lg:hidden fixed top-4 right-4 z-40"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="text-theme"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
      )}
      {isOpen && (
        <div className="fixed Hittin inset-0 bg-card z-30 flex flex-col items-center justify-center text-theme">
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="text-theme"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </button>
          <a
            onClick={() => scrollSection("about")}
            className="text-lg py-2 hover:underline hover:text-accent"
          >
            About
          </a>
          <a
            onClick={() => scrollSection("experiences")}
            className="text-lg py-2 hover:underline hover:text-accent"
          >
            Experiences
          </a>
          <a
            onClick={() => scrollSection("projects")}
            className="text-lg py-2 hover:underline hover:text-accent"
          >
            Projects
          </a>
          <a
            onClick={() => scrollSection("activities")}
            className="text-lg py-2 hover:underline hover:text-accent"
          >
            Activities
          </a>
          <a
            onClick={() => scrollSection("awards")}
            className="text-lg py-2 hover:underline hover:text-accent"
          >
            Awards
          </a>
          <button onClick={toggleTheme} className="mt-4">
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="text-theme"
                viewBox="0 0 16 16"
              >
                <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="text-theme"
                viewBox="0 0 16 16"
              >
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
              </svg>
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default NavBar;  