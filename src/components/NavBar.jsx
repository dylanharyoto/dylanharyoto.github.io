import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollSection = (sectionID) => {
    document.getElementById(sectionID).scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 rounded-full p-2 md:p-4 shadow-lg max-w-4xl mx-auto mt-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-white rounded-full p-2">
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
          <a href="#opening" className="ml-2 text-lg font-semibold">ddh</a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a onClick={() => scrollSection("about")} className="hover:text-green-400 cursor-pointer">About</a>
          <a onClick={() => scrollSection("experiences")} className="hover:text-green-400 cursor-pointer">Experiences</a>
          <a onClick={() => scrollSection("projects")} className="hover:text-green-400 cursor-pointer">Projects</a>
          <a onClick={() => scrollSection("activities")} className="hover:text-green-400 cursor-pointer">Activities</a>
          <a onClick={() => scrollSection("awards")} className="hover:text-green-400 cursor-pointer">Awards</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
        <div className="hidden md:block">
          <a className="cursor-pointer">
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
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-2">
          <a onClick={() => scrollSection("about")} className="hover:text-green-400 cursor-pointer">About</a>
          <a onClick={() => scrollSection("experiences")} className="hover:text-green-400 cursor-pointer">Experiences</a>
          <a onClick={() => scrollSection("projects")} className="hover:text-green-400 cursor-pointer">Projects</a>
          <a onClick={() => scrollSection("activities")} className="hover:text-green-400 cursor-pointer">Activities</a>
          <a onClick={() => scrollSection("awards")} className="hover:text-green-400 cursor-pointer">Awards</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;