import React from "react";
import ExperienceBox from "../components/ExperienceBox";

const experiences = [
  // ... (data remains unchanged)
];

const Experience = () => {
  return (
    <div
      id="experiences"
      className="px-[5vh] md:px-[140px] xl:px-[40vh] py-[100px] pb-[170px] relative h-auto bg-gradient-to-b from-transparent via-[rgba(12,28,36,1)] to-transparent top-[-20vh] flex flex-col gap-[70px] md:gap-[100px]"
    >
      <div className="heading text-center leading-[60px]">
        <h4 className="text-[1.75rem] md:text-[2.25rem] p-0 m-0 font-thin">
          Journey of Success
        </h4>
        <p className="leading-[170%] text-base md:text-xl m-0 p-0">
          Moments from My Career Path
        </p>
      </div>
      {experiences.map((experience, id) => (
        <ExperienceBox
          key={id}
          companyLogo={experience.companyLogo}
          companyName={experience.companyName}
          companyWeb={experience.companyWeb}
          position={experience.position}
          timeline={experience.timeline}
          detail1={experience.detail1}
          detail2={experience.detail2}
        />
      ))}
    </div>
  );
};

export default Experience;