import React from "react";

const ActivityBox = ({
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
    <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden">
      <button
        onClick={toggleExpand}
        className="w-full flex items-center p-4 sm:p-6 hover:bg-gray-800 transition-colors duration-300"
      >
        <img
          src={imageName}
          alt={activityName}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-[#34fb7b] flex-shrink-0"
        />
        <div className="ml-4 sm:ml-6 text-left flex-1">
          <h4 className="text-lg sm:text-xl md:text-2xl font-semibold">
            {position}
          </h4>
          <a
            href={activityWeb}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base sm:text-lg text-gray-300 hover:text-[#34fb7b] inline-flex items-center"
            onClick={(e) => e.stopPropagation()} // Prevent link from triggering collapse
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
          className={`w-6 h-6 transform transition-transform duration-300 ${
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
      {/* Content */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-800 p-4 sm:p-6">
          <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg text-gray-200">
            <li>{detail1}</li>
            <li>{detail2}</li>
          </ul>
          <p className="mt-4 text-base sm:text-lg text-[#34fb7b]">
            {timeline} | {location}
          </p>
          <a
            href={activityWeb}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-[#34fb7b] text-black font-semibold py-2 px-4 rounded-full hover:bg-[#2de069] transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActivityBox;