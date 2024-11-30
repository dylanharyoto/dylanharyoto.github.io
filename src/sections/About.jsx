import React from "react";

const About = () => {
  return (
    <div id="about">
      <div className="heading">
        <h4>Unveiling the Real Me</h4>
        <p>Revealing the Person Behind the Story</p>
      </div>
      <div className="details">
        <h6>
          I am a penultimate-year <span>Computer Science</span> student with a
          minor in <span>Finance</span> at{" "}
          <a
            href="https://www.topuniversities.com/universities/hong-kong-polytechnic-university"
            target="_blank"
          >
            <span>PolyU</span>
          </a>
          .
        </h6>
        <p>
          I work for 12 hours, followed by a 1-hour lunch, a 1-hour dinner, a
          2-hour break, and 8 hours of sleep every day.{" "}
        </p>
        <h6>
          I am <span>ambitious</span> and <span>hardworking</span> to achieve my
          goals with an <span>optimistic</span> mindset.
        </h6>
        <p>
          Watch the video, find my coding skills below, and feel free to grab my
          resume{" "}
          <a href="./Resume.pdf" download>
            <span>here</span>
          </a>
          !
        </p>
      </div>
      <div className="wrapper">
        <iframe
          src="https://www.youtube.com/embed/5YIev0D1_ck"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="skills">
        <img src="s1.png" />
        <img src="s2.png" />
        <img src="s3.png" />
        <img src="s4.png" />
        <img src="s5.png" />
        <img src="s6.png" />
        <img src="s7.png" />
        <img src="s8.png" />
        <img src="s9.png" />
        <img src="s10.png" />
        <img src="s11.png" />
        <img src="s12.png" />
        <img src="s13.png" />
        <img src="s14.png" />
      </div>
    </div>
  );
};

export default About;
