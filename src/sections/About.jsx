import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="bg-gradient-to-b from-transparent via-[rgba(4,12,20,1)] to-transparent h-auto md:h-screen px-[5vh] md:px-[140px] xl:px-[40vh] py-[100px] relative top-[-10vh] flex flex-col md:grid md:grid-cols-2 md:grid-rows-[10%_60%_10%_20%] gap-x-[50px] items-center"
    >
      <div className="heading col-span-2 text-center leading-[60px]">
        <h4 className="text-[1.75rem] md:text-[2.25rem] p-0 m-0 font-thin">
          Unveiling the Real Me
        </h4>
        <p className="leading-[170%] text-base md:text-xl m-0 p-0">
          Revealing the Person Behind the Story
        </p>
      </div>
      <div className="details flex flex-col gap-5 w-full">
        <h6 className="text-[1.16rem] md:text-[1.5rem] p-0 m-0 font-thin">
          I am a penultimate-year{" "}
          <span className="text-custom-green">Computer Science</span> student
          with a minor in <span className="text-custom-green">Finance</span> at{" "}
          <a
            href="https://www.topuniversities.com/universities/hong-kong-polytechnic-university"
            target="_blank"
            className="text-white no-underline w-auto rounded-[20px] transition duration-500 hover:underline hover:cursor-pointer hover:text-custom-green"
          >
            <span className="text-custom-green">PolyU</span>
          </a>
          .
        </h6>
        <p className="leading-[170%] text-base md:text-xl m-0 p-0">
          I work for 12 hours, followed by a 1-hour lunch, a 1-hour dinner, a
          2-hour break, and 8 hours of sleep every day.{" "}
        </p>
        <h6 className="text-[1.16rem] md:text-[1.5rem] p-0 m-0 font-thin">
          I am <span className="text-custom-green">ambitious</span> and{" "}
          <span className="text-custom-green">hardworking</span> to achieve my
          goals with an <span className="text-custom-green">optimistic</span>{" "}
          mindset.
        </h6>
        <p className="leading-[170%] text-base md:text-xl m-0 p-0">
          Watch the video, find my coding skills below, and feel free to grab
          my resume{" "}
          <a
            href="./Resume.pdf"
            download
            className="text-white no-underline w-auto rounded-[20px] transition duration-500 hover:underline hover:cursor-pointer hover:text-custom-green"
          >
            <span className="text-custom-green">here</span>
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
          className="absolute mx-auto w-[98.5%] h-[97%] border-[3px] border-custom-green rounded-[20px]"
        ></iframe>
      </div>
      <div className="skills relative flex flex-wrap justify-center items-center p-[10px_0] z-1 col-span-2 gap-y-3.5">
        <img src="s1.png" className="h-[25px] md:h-[40px] mx-2 md:mx-5" />
        <img src="s2.png" className="h-[25px] md:h-[40px] mx-2 md:mx-5" />
        <img src="s3.png" className="h-[25px] md:h-[40px] mx-2 md:mx-5" />
        <img src="s4.png" className="h-[25px] md:h-[40px] mx-2 md:mx-5" />
        <img src="s5.png" className="h-[25px] md:h-[40px] mx-2 md:mx-5" />
        <img src="s6.png" className="h-[25px] md:h-[40px] mx-2 md:mx-5" />
        <img src="s7.png" className="h-[25px] md:h-[40px] mx-2 md:mx-5" />
        <img src="s8.png" className="h-[25px] md:h-[40px] mx-2 md:mx-5" />
        <img src="s9.png" className="h-[25px] md:h-[40px] mx-2 md:mx-5" />
        <img src="s10.png" className="h-[25px] md:h-[40px] mx-2 md:mx-5" />
        <img src="s11.png" className="h-[25px] md:h-[40px] mx-2 md:mx-5" />
        <img src="s12.png" className="h-[25px] md:h-[40px] mx-2 md:mx-5" />
        <img src="s13.png" className="h-[25px] md:h-[40px] mx-2 md:mx-5" />
        <img src="s14.png" className="h-[25px] md:h-[40px] mx-2 md:mx-5" />
      </div>
    </div>
  );
};

export default About;