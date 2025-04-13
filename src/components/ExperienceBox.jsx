import React from "react";

const ExperienceBox = ({
  companyLogo,
  companyName,
  companyWeb,
  position,
  timeline,
  detail1,
  detail2,
}) => {
  return (
    <div className="flex items-start">
      <div className="relative mr-4">
        <img src={companyLogo} alt={companyName} className="w-24 h-24 rounded-2xl border-2 border-green-400" />
        <div className="absolute top-0 left-0 w-24 h-24 rounded-2xl border-2 border-green-400 -z-10 transform -translate-x-1 -translate-y-1"></div>
      </div>
      <div className="flex-1">
        <p className="text-gray-400"><span>{timeline}</span></p>
        <h5 className="text-xl font-semibold">{position}</h5>
        <a href={companyWeb} target="_blank" className="text-green-400 hover:underline">
          <p className="italic flex items-center">
            {companyName}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="ml-1"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
              />
              <path
                fillRule="evenodd"
                d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
              />
            </svg>
          </p>
        </a>
        {detail1 && detail2 && (
          <ul className="mt-2 list-disc list-inside text-gray-300">
            <li>{detail1}</li>
            <li>{detail2}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceBox;