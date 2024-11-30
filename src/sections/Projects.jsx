import React from "react";

const Projects = () => {
  return (
    <div id="projects">
      <div className="heading">
        <h4>Inspiring Creations</h4>
        <p>Ventures That Pushed Boundaries</p>
      </div>
      <div className="inner">
        <input type="radio" name="slider" id="s2" checked />
        <input type="radio" name="slider" id="s3" checked />
        <input type="radio" name="slider" id="s4" checked />
        <input type="radio" name="slider" id="s5" checked />
        <input type="radio" name="slider" id="s1" checked />
        <div class="boxes">
          <label htmlFor="s2" id="slide2">
            <h4>PolyShop</h4>
            <p>User-friendly online shopping system.</p>
            <a
              href="https://github.com/dylanharyoto/Online-Shopping-System"
              target="_blank"
            >
              <button>Learn More</button>
            </a>
            <video muted autoPlay loop>
              <source src="p2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </label>
          <label htmlFor="s3" id="slide3">
            <h4>Taskly</h4>
            <p>Command-line task management system.</p>
            <a
              href="https://github.com/dylanharyoto/Command-Line-Task-Management-System"
              target="_blank"
            >
              <button>Learn More</button>
            </a>
            <video muted autoPlay loop>
              <source src="p3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </label>
          <label htmlFor="s4" id="slide4">
            <h4>MonoPolyU</h4>
            <p>The Monopoly Game</p>
            <a
              href="https://github.com/dylanharyoto/The-Monopoly-Game"
              target="_blank"
            >
              <button>Learn More</button>
            </a>
            <video muted autoPlay loop>
              <source src="p4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </label>
          <label htmlFor="s5" id="slide5">
            <h4>More to come!</h4>
            <p>Visit my GitHub to see other projects!</p>
            <a
              href="https://github.com/dylanharyoto?tab=repositories"
              target="_blank"
            >
              <button>Learn More</button>
            </a>
            <video muted autoPlay loop>
              <source src="p5.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </label>
          <label htmlFor="s1" id="slide1">
            <h4>GoPark</h4>
            <p>Smart parking app for traffic congestion.</p>
            <a href="https://hello-gopark.github.io/" target="_blank">
              <button>Learn More</button>
            </a>
            <video muted autoPlay loop>
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
