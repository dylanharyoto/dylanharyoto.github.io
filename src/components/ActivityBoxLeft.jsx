import React from "react";

const ActivityBoxLeft = ({
  imageName,
  position,
  activityName,
  activityWeb,
  detail1,
  detail2,
  timeline,
  location,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <img src={imageName} alt={activityName} className="w-full md:w-1/2 rounded-2xl shadow-lg" />
      <div className="w-full md:w-1/2 text-right">
        <h4 className="text-2xl font-semibold">{position}</h4>
        <a href={activityWeb} target="_blank" className="text-green-400 hover:underline">
          <p className="italic flex items-center justify-end">
            {activityName}
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
        <ul className="mt-2 list-disc list-inside text-gray-300">
          <li>{detail1}</li>
          <li>{detail2}</li>
        </ul>
        <p className="mt-2 text-gray-400">
          <span>{timeline} | {location}</span>
        </p>
      </div>
    </div>
  );
};

export default ActivityBoxLeft;