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
    <div className="bg-card rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <button
        onClick={toggleExpand}
        className="w-full flex items-center p-4 sm:p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
      >
        <img
          src={logo}
          alt={activityName}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-accent flex-shrink-0"
        />
        <div className="ml-4 sm:ml-6 text-left flex-1">
          <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-theme">
            {position}
          </h4>
          <a
            href={activityWeb}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 hover:text-accent inline-flex items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {activityName}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="ml-1 inline"
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
          isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-card-content p-4 sm:p-6">
          <img
            src={imageName}
            alt={activityName}
            className="w-full h-full object-cover rounded-xl mb-4"
          />
          <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg text-gray-700 dark:text-gray-200">
            <li>{detail1}</li>
            <li>{detail2}</li>
          </ul>
          <p className="mt-4 text-base sm:text-lg text-accent">
            {timeline} | {location}
          </p>
          <a
            href={activityWeb}
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

export default ActivityBox;