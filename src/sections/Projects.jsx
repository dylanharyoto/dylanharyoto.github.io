import React, { useState } from "react";
import SectionHeading from "../components/SectionHeading";

const projects = [
  {
    title: "GoPark",
    description: "Smart parking app for traffic congestion.",
    link: "https://hello-gopark.github.io/",
    video: "/project_1.mp4",
  },
  {
    title: "PolyShop",
    description: "User-friendly online shopping system.",
    link: "https://github.com/dylanharyoto/Online-Shopping-System",
    video: "/project_2.mp4",
  },
  {
    title: "Taskly",
    description: "Command-line task management system.",
    link: "https://github.com/dylanharyoto/Command-Line-Task-Management-System",
    video: "/project_3.mp4",
  },
  {
    title: "MonoPolyU",
    description: "The Monopoly Game",
    link: "https://github.com/dylanharyoto/The-Monopoly-Game",
    video: "/project_4.mp4",
  },
  {
    title: "More to come!",
    description: "Visit my GitHub to see other projects!",
    link: "https://github.com/dylanharyoto?tab=repositories",
    video: "/p5.mp4",
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % projects.length);
  const prevSlide = () => setCurrent((current - 1 + projects.length) % projects.length);

  return (
    <section
      id="projects"
      className="bg-theme min-h-screen w-full scroll-mt-24 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-36 2xl:px-60 pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 text-theme"
    >
      <SectionHeading
        index="03"
        label="PROJECTS"
        title="Projects & Portfolio"
        subtitle="A showcase of my recent work"
      />

      <div className="relative mt-4 sm:mt-8 flex justify-center items-center w-full max-w-5xl mx-auto px-8 sm:px-10 md:px-12">
        <button
          onClick={prevSlide}
          aria-label="Previous project"
          className="absolute left-0 z-10 bg-card border border-soft hover:bg-accent-soft p-1.5 sm:p-3 rounded-full text-theme transition-all transform -translate-y-1/2 top-1/2"
        >
          ←
        </button>

        <div
          key={current}
          className="w-full bg-card border border-soft rounded-xl shadow-lg overflow-hidden animate-fade-up"
        >
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-soft bg-card-content">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
            <span className="ml-3 font-mono text-xs text-muted truncate">
              {projects[current].title.toLowerCase().replace(/\s+/g, "-")}.sh
            </span>
          </div>

          <div className="p-5 sm:p-8 flex flex-col items-center gap-4 text-center">
            <h4 className="font-display text-xl sm:text-2xl md:text-3xl text-theme font-semibold">
              {projects[current].title}
            </h4>
            <p className="text-sm sm:text-base md:text-lg text-muted">
              {projects[current].description}
            </p>

            <video
              key={projects[current].video}
              muted
              autoPlay
              loop
              playsInline
              className="w-full max-w-3xl aspect-video rounded-xl shadow-lg object-cover bg-black"
            >
              <source src={projects[current].video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <a href={projects[current].link} target="_blank" rel="noopener noreferrer" className="mt-2">
              <button className="btn-accent font-semibold py-2.5 px-6 rounded-full transition duration-300 hover:scale-105">
                Learn More
              </button>
            </a>
          </div>
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next project"
          className="absolute right-0 z-10 bg-card border border-soft hover:bg-accent-soft p-1.5 sm:p-3 rounded-full text-theme transition-all transform -translate-y-1/2 top-1/2"
        >
          →
        </button>
      </div>

      <div className="flex justify-center mt-6 sm:mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2.5 h-2.5 rounded-full mx-1.5 transition-all duration-300 ${
              current === index
                ? "bg-accent scale-125"
                : "bg-card-content border border-soft hover:border-accent"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;