import React, { useEffect } from "react";
import Typed from "typed.js";

const About = () => {
  useEffect(() => {
    const typed = new Typed("#typed-element", {
      strings: [
        "Hi there 👋, I am Dominicus <span class='accent-text'>Dylan</span> Haryoto",
        "A recent Summer Analyst at <span class='accent-text'>Jefferies</span>",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      smartBackspace: true,
      html: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      id="about"
      className="bg-theme h-screen px-4 sm:px-6 md:px-10 lg:px-20 xl:px-36 2xl:px-60 py-10 sm:py-16 md:py-20 lg:pt-24 xl:pt-36"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto_auto_auto] md:grid-rows-[auto_auto_auto] gap-y-4 sm:gap-y-6 md:gap-y-8 lg:gap-x-12 xl:gap-x-16 h-full">
        <div className="col-span-2 text-center row-start-1">
          <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-theme">
            Unveiling the Real Me
          </h4>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-2">
            Revealing the Person Behind the Story
          </p>
        </div>
        <div className="flex justify-center md:justify-end order-first md:order-none row-start-2 md:col-start-2 md:row-start-2 my-4 md:my-0">
          <img
            src="/osa.jpg"
            alt="Profile"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto border-[3px] border-accent rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start row-start-3 md:col-start-1 md:row-start-2 text-center md:text-left gap-y-4">
          <h1 className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl text-theme leading-tight sm:leading-snug">
            <span id="typed-element"></span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-prose">
            Since my first year, I have let my passion for finance and
            technology lead me. I have served as the Vice President of the
            Google Developer Student Club, undergone an exchange study at
            Nanyang Technological University, participated in hackathons, and
            worked as an intern with medium-sized and large, international
            enterprises. Click{" "}
            <a className='accent-text' href="https://www.polyu.edu.hk/en/sao/student-resources-and-support-section/outstanding-student-academy/sharing-corner/" target="_blank">
              here
            </a>{" "}
            to learn more about me!
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center col-span-2 row-start-4 md:row-start-3 gap-2 sm:gap-4 md:gap-6">
          <img
            src="skill_1.png"
            className="h-5 sm:h-6 md:h-8 lg:h-10 xl:h-10 mx-1 sm:mx-2 md:mx-4 lg:mx-5"
          />
          <img
            src="skill_2.png"
            className="h-5 sm:h-6 md:h-8 lg:h-10 xl:h-10 mx-1 sm:mx-2 md:mx-4 lg:mx-5"
          />
          <img
            src="skill_3.png"
            className="h-5 sm:h-6 md:h-8 lg:h-10 xl:h-10 mx-1 sm:mx-2 md:mx-4 lg:mx-5"
          />
          <img
            src="skill_4.png"
            className="h-5 sm:h-6 md:h-8 lg:h-10 xl:h-10 mx-1 sm:mx-2 md:mx-4 lg:mx-5"
          />
          <img
            src="skill_5.png"
            className="h-5 sm:h-6 md:h-8 lg:h-10 xl:h-10 mx-1 sm:mx-2 md:mx-4 lg:mx-5"
          />
          <img
            src="skill_6.png"
            className="h-5 sm:h-6 md:h-8 lg:h-10 xl:h-10 mx-1 sm:mx-2 md:mx-4 lg:mx-5"
          />
          <img
            src="skill_7.png"
            className="h-5 sm:h-6 md:h-8 lg:h-10 xl:h-10 mx-1 sm:mx-2 md:mx-4 lg:mx-5"
          />
          <img
            src="skill_8.png"
            className="h-5 sm:h-6 md:h-8 lg:h-10 xl:h-10 mx-1 sm:mx-2 md:mx-4 lg:mx-5"
          />
          <img
            src="skill_9.png"
            className="h-5 sm:h-6 md:h-8 lg:h-10 xl:h-10 mx-1 sm:mx-2 md:mx-4 lg:mx-5"
          />
          <img
            src="skill_10.png"
            className="h-5 sm:h-6 md:h-8 lg:h-10 xl:h-10 mx-1 sm:mx-2 md:mx-4 lg:mx-5"
          />
          <img
            src="skill_11.png"
            className="h-5 sm:h-6 md:h-8 lg:h-10 xl:h-10 mx-1 sm:mx-2 md:mx-4 lg:mx-5"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
