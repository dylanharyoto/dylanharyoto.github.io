import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-gradient-to-b from-transparent via-[rgba(4,12,20,1)] to-transparent h-screen px-10 md:px-36 py-24 relative top-[-30vh] flex flex-col justify-start items-center gap-24"
    >
      <div className="heading text-center leading-[60px]">
        <h4 className="text-2xl md:text-[2.25rem]">Inspiring Creations</h4>
        <p className="text-lg md:text-[1.25rem]">Ventures That Pushed Boundaries</p>
      </div>
      <div className="inner w-full max-w-[600px] md:max-w-[600px]">
        <input type="radio" name="slider" id="s2" checked className="hidden" />
        <input type="radio" name="slider" id="s3" checked className="hidden" />
        <input type="radio" name="slider" id="s4" checked className="hidden" />
        <input type="radio" name="slider" id="s5" checked className="hidden" />
        <input type="radio" name="slider" id="s1" checked className="hidden" />
        <div className="boxes relative h-[300px] md:h-[370px] w-full perspective-[1500px] md:perspective-[1000px] flex justify-center items-center">
          <label htmlFor="s2" id="slide2" className="bg-[#0c1c24] rounded-xl p-4 md:p-7 flex flex-col justify-start items-center gap-1 text-center">
            <h4 className="text-2xl md:text-[2.25rem]">PolyShop</h4>
            <p className="text-base md:text-[1.25rem]">User-friendly online shopping system.</p>
            <a href="https://github.com/dylanharyoto/Online-Shopping-System" target="_blank">
              <button className="bg-[#34fb7b] text-black font-semibold py-2.5 px-5 rounded-full transition duration-500 hover:bg-[#2de069]">
                Learn More
              </button>
            </a>
            <video muted autoPlay loop className="absolute bottom-0 w-4/5 h-[150px] md:h-[250px] rounded-t-xl shadow-[15px_15px_40px_rgba(0,0,0,0.5)] object-cover transition-all duration-700">
              <source src="p2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </label>
          <label htmlFor="s3" id="slide3" className="bg-[#0c1c24] rounded-xl p-4 md:p-7 flex flex-col justify-start items-center gap-1 text-center">
            <h4 className="text-2xl md:text-[2.25rem]">Taskly</h4>
            <p className="text-base md:text-[1.25rem]">Command-line task management system.</p>
            <a href="https://github.com/dylanharyoto/Command-Line-Task-Management-System" target="_blank">
              <button className="bg-[#34fb7b] text-black font-semibold py-2.5 px-5 rounded-full transition duration-500 hover:bg-[#2de069]">
                Learn More
              </button>
            </a>
            <video muted autoPlay loop className="absolute bottom-0 w-4/5 h-[150px] md:h-[250px] rounded-t-xl shadow-[15px_15px_40px_rgba(0,0,0,0.5)] object-cover transition-all duration-700">
              <source src="p3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </label>
          <label htmlFor="s4" id="slide4" className="bg-[#0c1c24] rounded-xl p-4 md:p-7 flex flex-col justify-start items-center gap-1 text-center">
            <h4 className="text-2xl md:text-[2.25rem]">MonoPolyU</h4>
            <p className="text-base md:text-[1.25rem]">The Monopoly Game</p>
            <a href="https://github.com/dylanharyoto/The-Monopoly-Game" target="_blank">
              <button className="bg-[#34fb7b] text-black font-semibold py-2.5 px-5 rounded-full transition duration-500 hover:bg-[#2de069]">
                Learn More
              </button>
            </a>
            <video muted autoPlay loop className="absolute bottom-0 w-4/5 h-[150px] md:h-[250px] rounded-t-xl shadow-[15px_15px_40px_rgba(0,0,0,0.5)] object-cover transition-all duration-700">
              <source src="p4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </label>
          <label htmlFor="s5" id="slide5" className="bg-[#0c1c24] rounded-xl p-4 md:p-7 flex flex-col justify-start items-center gap-1 text-center">
            <h4 className="text-2xl md:text-[2.25rem]">More to come!</h4>
            <p className="text-base md:text-[1.25rem]">Visit my GitHub to see other projects!</p>
            <a href="https://github.com/dylanharyoto?tab=repositories" target="_blank">
              <button className="bg-[#34fb7b] text-black font-semibold py-2.5 px-5 rounded-full transition duration-500 hover:bg-[#2de069]">
                Learn More
              </button>
            </a>
            <video muted autoPlay loop className="absolute bottom-0 w-4/5 h-[150px] md:h-[250px] rounded-t-xl shadow-[15px_15px_40px_rgba(0,0,0,0.5)] object-cover transition-all duration-700">
              <source src="p5.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </label>
          <label htmlFor="s1" id="slide1" className="bg-[#34fb7b] text-[#0c1c24] rounded-xl p-4 md:p-7 flex flex-col justify-start items-center gap-1 text-center">
            <h4 className="text-2xl md:text-[2.25rem]">GoPark</h4>
            <p className="text-base md:text-[1.25rem]">Smart parking app for traffic congestion.</p>
            <a href="https://hello-gopark.github.io/" target="_blank">
              <button className="bg-[#0c1c24] text-white font-semibold py-2.5 px-5 rounded-full transition duration-500 hover:bg-[#1a2e38]">
                Learn More
              </button>
            </a>
            <video muted autoPlay loop className="absolute bottom-0 w-4/5 h-[150px] md:h-[250px] rounded-t-xl shadow-[15px_15px_40px_rgba(0,0,0,0.5)] object-cover transition-all duration-700">
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