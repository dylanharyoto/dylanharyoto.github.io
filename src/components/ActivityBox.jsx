import React from "react";

const ActivityBox = ({
  logo,
  imageName,
  position,
  activityName,
  activityWeb,
  detail1,
  detail2,
  timeline,
  location,
  isExpanded,
  toggleExpand,
}) => {
  return (
    <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-soft hover-lift transition-colors duration-300">
      <button
        onClick={toggleExpand}
        className="w-full flex items-center p-4 sm:p-6 hover:bg-accent-soft transition-colors duration-300 text-left"
      >
        <img
          src={logo}
          alt={activityName}
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 border-accent flex-shrink-0 object-cover"
        />
        <div className="ml-4 sm:ml-6 flex-1 min-w-0">
          <h4 className="font-display text-lg sm:text-xl md:text-2xl font-semibold text-theme">
            {position}
          </h4>
          <p className="text-sm sm:text-base md:text-lg text-muted">{activityName}</p>
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
          isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-card-content p-4 sm:p-6">
          <img
            src={imageName}
            alt={activityName}
            className="w-full h-48 sm:h-60 object-cover rounded-xl mb-4"
          />
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base md:text-lg text-theme">
            <li>{detail1}</li>
            <li>{detail2}</li>
          </ul>
          <p className="font-mono mt-4 text-sm sm:text-base text-accent">
            {timeline} · {location}
          </p>
          <a
            href={activityWeb}
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

export default ActivityBox;
