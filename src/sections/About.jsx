import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="bg-gradient-to-b from-transparent via-[rgba(4,12,20,1)] to-transparent h-screen px-10 md:px-36 py-24 relative top-[-10vh] grid grid-cols-1 md:grid-cols-2 grid-rows-[10%_60%_10%_20%] gap-x-12 md:gap-x-50"
    >
      <div className="heading col-span-2 text-center leading-[60px]">
        <h4 className="text-2xl md:text-[2.25rem]">Unveiling the Real Me</h4>
        <p className="text-lg md:text-[1.25rem]">Revealing the Person Behind the Story</p>
      </div>
      <div className="details flex flex-col gap-5 w-full">
        <h6 className="text-lg md:text-[1.5rem]">
          I am a penultimate-year <span className="text-[#34fb7b]">Computer Science</span> student with a
          minor in <span className="text-[#34fb7b]">Finance</span> at{" "}
          <a
            href="https://www.topuniversities.com/universities/hong-kong-polytechnic-university"
            target="_blank"
            className="hover:underline hover:text-[#34fb7b]"
          >
            <span className="text-[#34fb7b]">PolyU</span>
          </a>
          .
        </h6>
        <p className="text-base md:text-[1.25rem] leading-[170%]">
          I work for 12 hours, followed by a 1-hour lunch, a 1-hour dinner, a
          2-hour break, and 8 hours of sleep every day.
        </p>
        <h6 className="text-lg md:text-[1.5rem]">
          I am <span className="text-[#34fb7b]">ambitious</span> and{" "}
          <span className="text-[#34fb7b]">hardworking</span> to achieve my
          goals with an <span className="text-[#34fb7b]">optimistic</span> mindset.
        </h6>
        <p className="text-base md:text-[1.25rem] leading-[170%]">
          Watch the video, find my coding skills below, and feel free to grab my
          resume{" "}
          <a href="./Resume.pdf" download className="hover:underline hover:text-[#34fb7b]">
            <span className="text-[#34fb7b]">here</span>
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
          className="absolute w-[98.5%] h-[97%] border-[3px] border-[#34fb7b] rounded-xl"
        ></iframe>
      </div>
      <div className="skills flex flex-wrap justify-center items-center py-2.5 z-1 col-span-2 gap-y-4">
        <img src="s1.png" className="h-6 md:h-10 mx-2 md:mx-5" />
        <img src="s2.png" className="h-6 md:h-10 mx-2 md:mx-5" />
        <img src="s3.png" className="h-6 md:h-10 mx-2 md:mx-5" />
        <img src="s4.png" className="h-6 md:h-10 mx-2 md:mx-5" />
        <img src="s5.png" className="h-6 md:h-10 mx-2 md:mx-5" />
        <img src="s6.png" className="h-6 md:h-10 mx-2 md:mx-5" />
        <img src="s7.png" className="h-6 md:h-10 mx-2 md:mx-5" />
        <img src="s8.png" className="h-6 md:h-10 mx-2 md:mx-5" />
        <img src="s9.png" className="h-6 md:h-10 mx-2 md:mx-5" />
        <img src="s10.png" className="h-6 md:h-10 mx-2 md:mx-5" />
        <img src="s11.png" className="h-6 md:h-10 mx-2 md:mx-5" />
        <img src="s12.png" className="h-6 md:h-10 mx-2 md:mx-5" />
        <img src="s13.png" className="h-6 md:h-10 mx-2 md:mx-5" />
        <img src="s14.png" className="h-6 md:h-10 mx-2 md:mx-5" />
      </div>
    </div>
  );
};

export default About;