import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollSection = (sectionID) => {
    document.getElementById(sectionID).scrollIntoView({
      behavior: "smooth",
    });
    setIsOpen(false); // Close menu after clicking a link
  };

  return (
    <>
      <nav className="grid grid-cols-[25%_50%_25%] bg-[#212121] rounded-[40px] py-1.5 items-center shadow-[0_0_10px_rgba(255,255,255,0.5)]">
        <div className="flex justify-start items-center mx-2.5">
          <div className="min-w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="black"
              className="bi bi-gender-male"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
              />
            </svg>
          </div>
          <a href="#opening" className="text-lg">
            ddh
          </a>
        </div>
        <div className="flex justify-center items-center mx-2.5">
          <a onClick={() => scrollSection("about")} className="text-white text-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-[#555]">
            About
          </a>
          <a onClick={() => scrollSection("experiences")} className="text-white text-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-[#555]">
            Experiences
          </a>
          <a onClick={() => scrollSection("projects")} className="text-white text-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-[#555]">
            Projects
          </a>
          <a onClick={() => scrollSection("activities")} className="text-white text-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-[#555]">
            Activities
          </a>
          <a onClick={() => scrollSection("awards")} className="text-white text-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-[#555]">
            Awards
          </a>
        </div>
        <div className="flex justify-end items-center mx-2.5">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="white"
              className="bi bi-moon"
              viewBox="0 0 16 16"
            >
              <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
            </svg>
          </a>
        </div>
      </nav>
      {/* Hamburger menu for small screens */}
      <button
        className="md:hidden fixed top-4 right-4 z-40"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="white"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-[#212121] z-30 flex flex-col items-center justify-center">
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="white"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </button>
          <a onClick={() => scrollSection("about")} className="text-white text-lg py-2 hover:underline hover:text-[#34fb7b]">
            About
          </a>
          <a onClick={() => scrollSection("experiences")} className="text-white text-lg py-2 hover:underline hover:text-[#34fb7b]">
            Experiences
          </a>
          <a onClick={() => scrollSection("projects")} className="text-white text-lg py-2 hover:underline hover:text-[#34fb7b]">
            Projects
          </a>
          <a onClick={() => scrollSection("activities")} className="text-white text-lg py-2 hover:underline hover:text-[#34fb7b]">
            Activities
          </a>
          <a onClick={() => scrollSection("awards")} className="text-white text-lg py-2 hover:underline hover:text-[#34fb7b]">
            Awards
          </a>
        </div>
      )}
    </>
  );
};

export default NavBar;