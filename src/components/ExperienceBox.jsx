import React from "react";

const ExperienceBox = ({
  companyLogo,
  companyName,
  companyWeb,
  position,
  timeline,
  detail1,
  detail2,
  skills,
  country,
  isExpanded,
  toggleExpand,
}) => {
  return (
    <div className="bg-card rounded-xl shadow-lg overflow-hidden">
      <button
        onClick={toggleExpand}
        className="w-full flex items-center p-4 sm:p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
      >
        <img
          src={companyLogo}
          alt={companyName}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-4 border-accent flex-shrink-0"
        />
        <div className="ml-4 sm:ml-6 text-left flex-1">
          <h5 className="text-lg sm:text-xl md:text-2xl font-semibold text-theme">
            {position}
          </h5>
          <a
            href={companyWeb}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 hover:text-accent"
            onClick={(e) => e.stopPropagation()}
          >
            {companyName}
          </a>
        </div>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 text-gray-600 dark:text-gray-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-card-content p-4 sm:p-6">
          {skills && skills.length > 0 && (
            <div className="mb-4">
              <div className="inline-flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent text-white border border-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
          <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg text-gray-700 dark:text-gray-200">
            {detail1 && <li>{detail1}</li>}
            {detail2 && <li>{detail2}</li>}
          </ul>
          <p className="mt-4 text-base sm:text-lg text-accent">
            {timeline} {country && `| ${country}`}
          </p>
          <a
            href={companyWeb}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block btn-accent font-semibold py-2 px-4 rounded-full transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExperienceBox;