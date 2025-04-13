import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-gradient-to-b from-transparent via-[rgba(4,12,20,1)] to-transparent h-screen px-[5vh] md:px-[140px] xl:px-[40vh] py-[100px] pb-[170px] relative top-[-30vh] flex flex-col justify-start items-center gap-[90px]"
    >
      <div className="heading text-center leading-[60px]">
        <h4 className="text-[1.75rem] md:text-[2.25rem] p-0 m-0 font-thin">
          Inspiring Creations
        </h4>
        <p className="leading-[170%] text-base md:text-xl m-0 p-0">
          Ventures That Pushed Boundaries
        </p>
      </div>
      <div className="inner">
        <input type="radio" name="slider" id="s2" checked className="hidden" />
        <input type="radio" name="slider" id="s3" checked className="hidden" />
        <input type="radio" name="slider" id="s4" checked className="hidden" />
        <input type="radio" name="slider" id="s5" checked className="hidden" />
        <input type="radio" name="slider" id="s1" checked className="hidden" />
        <div className="boxes relative h-[300px] md:h-[370px] w-[155px] md:w-[600px] mb-5 perspective-[1500px] md:perspective-[1000px] flex justify-center items-center">
          <label
            htmlFor="s2"
            id="slide2"
            className="absolute h-full inset-x-0 cursor-pointer transition-transform duration-500 ease-in-out bg-dark-bg rounded-[20px] p-[5px] md:p-[30px] flex flex-col justify-start text-center items-center gap-[5px]"
          >
            <h4 className="text-[1.75rem] md:text-[2.25rem] p-0 m-0 font-thin">
              PolyShop
            </h4>
            <p className="leading-[170%] text-base md:text-xl m-0 p-0">
              User-friendly online shopping system.
            </p>
            <a
              href="https://github.com/dylanharyoto/Online-Shopping-System"
              target="_blank"
              className="text-white no-underline w-auto rounded-[20px] transition duration-500 hover:underline hover:cursor-pointer hover:text-custom-green"
            >
              <button className="cursor-pointer border-0 text-base font-semibold rounded-full px-5 py-2.5 m-1 bg-custom-green text-black transition duration-500">
                Learn More
              </button>
            </a>
            <video
              muted
              autoPlay
              loop
              className="rounded-t-[20px] shadow-[15px_15px_40px_rgba(0,0,0,0.5)] w-4/5 h-[150px] md:h-[250px] absolute bottom-0 object-cover transition-all duration-700"
            >
              <source src="p2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </label>
          <label
            htmlFor="s3"
            id="slide3"
            className="absolute h-full inset-x-0 cursor-pointer transition-transform duration-500 ease-in-out bg-dark-bg rounded-[20px] p-[5px] md:p-[30px] flex flex-col justify-start text-center items-center gap-[5px]"
          >
            <h4 className="text-[1.75rem] md:text-[2.25rem] p-0 m-0 font-thin">
              Taskly
            </h4>
            <p className="leading-[170%] text-base md:text-xl m-0 p-0">
              Command-line task management system.
            </p>
            <a
              href="https://github.com/dylanharyoto/Command-Line-Task-Management-System"
              target="_blank"
              className="text-white no-underline w-auto rounded-[20px] transition duration-500 hover:underline hover:cursor-pointer hover:text-custom-green"
            >
              <button className="cursor-pointer border-0 text-base font-semibold rounded-full px-5 py-2.5 m-1 bg-custom-green text-black transition duration-500">
                Learn More
              </button>
            </a>
            <video
              muted
              autoPlay
              loop
              className="rounded-t-[20px] shadow-[15px_15px_40px_rgba(0,0,0,0.5)] w-4/5 h-[150px] md:h-[250px] absolute bottom-0 object-cover transition-all duration-700"
            >
              <source src="p3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </label>
          <label
            htmlFor="s4"
            id="slide4"
            className="absolute h-full inset-x-0 cursor-pointer transition-transform duration-500 ease-in-out bg-dark-bg rounded-[20px] p-[5px] md:p-[30px] flex flex-col justify-start text-center items-center gap-[5px]"
          >
            <h4 className="text-[1.75rem] md:text-[2.25rem] p-0 m-0 font-thin">
              MonoPolyU
            </h4>
            <p className="leading-[170%] text-base md:text-xl m-0 p-0">
              The Monopoly Game
            </p>
            <a
              href="https://github.com/dylanharyoto/The-Monopoly-Game"
              target="_blank"
              className="text-white no-underline w-auto rounded-[20px] transition duration-500 hover:underline hover:cursor-pointer hover:text-custom-green"
            >
              <button className="cursor-pointer border-0 text-base font-semibold rounded-full px-5 py-2.5 m-1 bg-custom-green text-black transition duration-500">
                Learn More
              </button>
            </a>
            <video
              muted
              autoPlay
              loop
              className="rounded-t-[20px] shadow-[15px_15px_40px_rgba(0,0,0,0.5)] w-4/5 h-[150px] md:h-[250px] absolute bottom-0 object-cover transition-all duration-700"
            >
              <source src="p4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </label>
          <label
            htmlFor="s5"
            id="slide5"
            className="absolute h-full inset-x-0 cursor-pointer transition-transform duration-500 ease-in-out bg-dark-bg rounded-[20px] p-[5px] md:p-[30px] flex flex-col justify-start text-center items-center gap-[5px]"
          >
            <h4 className="text-[1.75rem] md:text-[2.25rem] p-0 m-0 font-thin">
              More to come!
            </h4>
            <p className="leading-[170%] text-base md:text-xl m-0 p-0">
              Visit my GitHub to see other projects!
            </p>
            <a
              href="https://github.com/dylanharyoto?tab=repositories"
              target="_blank"
              className="text-white no-underline w-auto rounded-[20px] transition duration-500 hover:underline hover:cursor-pointer hover:text-custom-green"
            >
              <button className="cursor-pointer border-0 text-base font-semibold rounded-full px-5 py-2.5 m-1 bg-custom-green text-black transition duration-500">
                Learn More
              </button>
            </a>
            <video
              muted
              autoPlay
              loop
              className="rounded-t-[20px] shadow-[15px_15px_40px_rgba(0,0,0,0.5)] w-4/5 h-[150px] md:h-[250px] absolute bottom-0 object-cover transition-all duration-700"
            >
              <source src="p5.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </label>
          <label
            htmlFor="s1"
            id="slide1"
            className="absolute h-full inset-x-0 cursor-pointer transition-transform duration-500 ease-in-out bg-custom-green text-dark-bg rounded-[20px] p-[5px] md:p-[30px] flex flex-col justify-start text-center items-center gap-[5px]"
          >
            <h4 className="text-[1.75rem] md:text-[2.25rem] p-0 m-0 font-thin">
              GoPark
            </h4>
            <p className="leading-[170%] text-base md:text-xl m-0 p-0">
              Smart parking app for traffic congestion.
            </p>
            <a
              href="https://hello-gopark.github.io/"
              target="_blank"
              className="text-dark-bg no-underline w-auto rounded-[20px] transition duration-500 hover:underline hover:cursor-pointer hover:text-white"
            >
              <button className="cursor-pointer border-0 text-base font-semibold rounded-full px-5 py-2.5 m-1 bg-dark-bg text-white transition duration-500">
                Learn More
              </button>
            </a>
            <video
              muted
              autoPlay
              loop
              className="rounded-t-[20px] shadow-[15px_15px_40px_rgba(0,0,0,0.5)] w-4/5 h-[150px] md:h-[250px] absolute bottom-0 object-cover transition-all duration-700"
            >
              <source src="p1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Projects;