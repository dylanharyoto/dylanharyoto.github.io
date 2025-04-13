import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="bg-gradient-to-b from-transparent via-gradientDark to-gradientDark h-screen px-[140px] py-[100px] relative top-[-10vh] grid items-center grid-cols-2 gap-x-[50px]"
    >
      <div className="heading col-span-2 text-center leading-[60px]">
        <h4 className="text-[2.25rem] m-0 p-0 font-light">
          Unveiling the Real Me
        </h4>
        <p className="text-[1.25rem] m-0 p-0 leading-[170%]">
          Revealing the Person Behind the Story
        </p>
      </div>
      <div className="details flex flex-col gap-5 w-full">
        <h6 className="text-[1.5rem] m-0 p-0 font-light">
          I am a penultimate-year{" "}
          <span className="text-primary">Computer Science</span> student with a
          minor in <span className="text-primary">Finance</span> at{" "}
          <a
            href="https://www.topuniversities.com/universities/hong-kong-polytechnic-university"
            target="_blank"
            className="text-white hover:text-primary transition duration-500 rounded-[20px]"
          >
            <span className="text-primary">PolyU</span>
          </a>
          .
        </h6>
        <p className="text-[1.25rem] m-0 p-0 leading-[170%]">
          I work for 12 hours, followed by a 1-hour lunch, a 1-hour dinner, a
          2-hour break, and 8 hours of sleep every day.
        </p>
        <h6 className="text-[1.5rem] m-0 p-0 font-light">
          I am <span className="text-primary">ambitious</span> and{" "}
          <span className="text-primary">hardworking</span> to achieve my goals
          with an <span className="text-primary">optimistic</span> mindset.
        </h6>
        <p className="text-[1.25rem] m-0 p-0 leading-[170%]">
          Watch the video, find my coding skills below, and feel free to grab my
          resume{" "}
          <a
            href="./Resume.pdf"
            download
            className="text-white hover:text-primary transition duration-500 rounded-[20px]"
          >
            <span className="text-primary">here</span>
          </a>
          !
        </p>
      </div>
      <div className="wrapper relative pb-[56.25%] w-full">
        <iframe
          src="https://www.youtube.com/embed/5YIev0D1_ck"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute m-auto w-[98.5%] h-[97%] border-2 border-primary rounded-[20px]"
        ></iframe>
      </div>
      <div className="skills relative flex flex-wrap justify-center items-center py-2.5 z-1 col-span-2">
        {Array.from({ length: 14 }, (_, i) => (
          <img
            key={i}
            src={`s${i + 1}.png`}
            className="h-10 mx-5"
            alt={`skill-${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default About;