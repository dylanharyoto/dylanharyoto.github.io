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
  isCurrent,
  isExpanded,
  toggleExpand,
}) => {
  return (
    <div
      className={`bg-card rounded-xl shadow-lg overflow-hidden border hover-lift transition-colors duration-300 ${
        isCurrent ? "border-accent" : "border-soft"
      }`}
    >
      <button
        onClick={toggleExpand}
        className="w-full flex items-center p-4 sm:p-6 hover:bg-accent-soft transition-colors duration-300 text-left"
      >
        <img
          src={companyLogo}
          alt={companyName}
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 border-accent flex-shrink-0 object-cover"
        />
        <div className="ml-4 sm:ml-6 flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h5 className="font-display text-lg sm:text-xl md:text-2xl font-semibold text-theme">
              {position}
            </h5>
            {isCurrent && (
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wide text-accent border border-accent rounded-full px-2 py-0.5">
                active
              </span>
            )}
          </div>
          <p className="text-sm sm:text-base md:text-lg text-muted">{companyName}</p>
        </div>
        <svg
          className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 ml-2 transform transition-transform duration-300 text-muted ${
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
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="font-mono text-xs sm:text-sm px-2.5 py-1 rounded-full border border-accent text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base md:text-lg text-theme">
            {detail1 && <li>{detail1}</li>}
            {detail2 && <li>{detail2}</li>}
          </ul>
          <p className="font-mono mt-4 text-sm sm:text-base text-accent">
            {timeline} {country && `· ${country}`}
          </p>
          <a
            href={companyWeb}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block btn-accent font-semibold py-2 px-4 rounded-full transition duration-300 hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExperienceBox;
