import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className="py-16 md:py-24 bg-gradient-to-b from-transparent via-gray-900 to-transparent"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h4 className="text-3xl font-bold">Inspiring Creations</h4>
          <p className="text-lg text-gray-400">
            Ventures That Pushed Boundaries
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "PolyShop",
              desc: "User-friendly online shopping system.",
              url: "https://github.com/dylanharyoto/Online-Shopping-System",
              video: "p2.mp4",
            },
            {
              title: "Taskly",
              desc: "Command-line task management system.",
              url: "https://github.com/dylanharyoto/Command-Line-Task-Management-System",
              video: "p3.mp4",
            },
            {
              title: "MonoPolyU",
              desc: "The Monopoly Game",
              url: "https://github.com/dylanharyoto/The-Monopoly-Game",
              video: "p4.mp4",
            },
            {
              title: "More to come!",
              desc: "Visit my GitHub to see other projects!",
              url: "https://github.com/dylanharyoto?tab=repositories",
              video: "p5.mp4",
            },
            {
              title: "GoPark",
              desc: "Smart parking app for traffic congestion.",
              url: "https://hello-gopark.github.io/",
              video: "p1.mp4",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 flex flex-col items-center text-center"
            >
              <h4 className="text-xl font-semibold">{project.title}</h4>
              <p className="text-gray-400">{project.desc}</p>
              <a href={project.url} target="_blank" className="mt-2">
                <button className="bg-green-400 text-black font-semibold py-2 px-4 rounded-full hover:bg-green-500 transition">
                  Learn More
                </button>
              </a>
              <video muted autoPlay loop className="w-full mt-4 rounded-2xl">
                <source src={`/videos/${project.video}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
