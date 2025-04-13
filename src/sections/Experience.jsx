import React from "react";
import ExperienceBox from "../components/ExperienceBox";
import { experiences } from "../data/experiences";

const Experience = () => {
  return (
    <div id="experiences" className="py-16 md:py-24 bg-gradient-to-b from-transparent via-gray-900 to-transparent">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h4 className="text-3xl font-bold">Journey of Success</h4>
          <p className="text-lg text-gray-400">Moments from My Career Path</p>
        </div>
        <div className="space-y-12">
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
      </div>
    </div>
  );
};

export default Experience;