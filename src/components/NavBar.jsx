import React from "react";

const NavBar = () => {
  const scrollSection = (sectionID) => {
    document.getElementById(sectionID).scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <nav className="grid bg-gray-800 rounded-[40px] py-1 grid-cols-[25%_50%_25%] items-center shadow-[0_0_10px_rgba(255,255,255,0.5)]">
      <div className="nav-left flex justify-start items-center mx-2.5">
        <div className="icon-circle min-w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center">
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
        <a
          href="#opening"
          className="text-lg text-white no-underline p-2 transition-colors duration-300 hover:cursor-pointer hover:bg-gray-600"
        >
          <h6 className="text-[1.5rem] p-0 m-0 font-thin">ddh</h6>
        </a>
      </div>
      <div className="flex justify-center items-center mx-2.5">
        <a
          onClick={() => scrollSection("about")}
          className="text-lg text-white no-underline p-2 transition-colors duration-300 hover:cursor-pointer hover:bg-gray-600"
        >
          About
        </a>
        <a
          onClick={() => scrollSection("experiences")}
          className="text-lg text-white no-underline p-2 transition-colors duration-300 hover:cursor-pointer hover:bg-gray-600"
        >
          Experiences
        </a>
        <a
          onClick={() => scrollSection("projects")}
          className="text-lg text-white no-underline p-2 transition-colors duration-300 hover:cursor-pointer hover:bg-gray-600"
        >
          Projects
        </a>
        <a
          onClick={() => scrollSection("activities")}
          className="text-lg text-white no-underline p-2 transition-colors duration-300 hover:cursor-pointer hover:bg-gray-600"
        >
          Activities
        </a>
        <a
          onClick={() => scrollSection("awards")}
          className="text-lg text-white no-underline p-2 transition-colors duration-300 hover:cursor-pointer hover:bg-gray-600"
        >
          Awards
        </a>
      </div>
      <div className="nav-right flex justify-end items-center mx-2.5">
        <a className="text-lg text-white no-underline p-2 transition-colors duration-300 hover:cursor-pointer hover:bg-gray-600">
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
  );
};

export default NavBar;