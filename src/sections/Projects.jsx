import React, { useState } from "react";

const projects = [
  {
    title: "PolyShop",
    description: "User-friendly online shopping system.",
    link: "https://github.com/dylanharyoto/Online-Shopping-System",
    video: "p2.mp4",
  },
  {
    title: "Taskly",
    description: "Command-line task management system.",
    link: "https://github.com/dylanharyoto/Command-Line-Task-Management-System",
    video: "p3.mp4",
  },
  {
    title: "MonoPolyU",
    description: "The Monopoly Game",
    link: "https://github.com/dylanharyoto/The-Monopoly-Game",
    video: "p4.mp4",
  },
  {
    title: "More to come!",
    description: "Visit my GitHub to see other projects!",
    link: "https://github.com/dylanharyoto?tab=repositories",
    video: "p5.mp4",
  },
  {
    title: "GoPark",
    description: "Smart parking app for traffic congestion.",
    link: "https://hello-gopark.github.io/",
    video: "p1.mp4",
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % projects.length);
  const prevSlide = () => setCurrent((current - 1 + projects.length) % projects.length);

  return (
    <div
      id="projects"
      className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 xl:px-36 2xl:px-60 py-10 sm:py-16 md:py-20 lg:pt-24 xl:pt-36 text-white"
    >
      <div className="text-center">
        <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          Journey of Success
        </h4>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-2">
          Moments from My Career Path
        </p>
      </div>
      <div className="relative mt-8 text-black">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white"
        >
          ←
        </button>
        <div className="w-11/12 md:w-3/4 mx-auto bg-white rounded-xl p-4 md:p-7 flex flex-col justify-start items-center gap-1 text-center">
          <h4 className="text-2xl md:text-[2.25rem]">{projects[current].title}</h4>
          <p className="text-base md:text-[1.25rem]">{projects[current].description}</p>
          <video
            muted
            autoPlay
            loop
            className="w-full h-[150px] md:h-[250px] rounded-xl shadow-[15px_15px_40px_rgba(0,0,0,0.5)] object-cover"
          >
            <source src={projects[current].video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <a href={projects[current].link} target="_blank" rel="noopener noreferrer">
            <button className="bg-[#34fb7b] text-black font-semibold py-2.5 px-5 rounded-full transition duration-500 hover:bg-[#2de069]">
              Learn More
            </button>
          </a>
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white"
        >
          →
        </button>
        <div className="flex justify-center mt-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                current === index ? "bg-[#34fb7b]" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;