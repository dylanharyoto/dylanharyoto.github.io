import React from "react";

const ActivityBoxRight = ({
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
    <div className="flex flex-col md:flex-row-reverse items-center">
      <img src={imageName} className="w-[300px] md:w-[580px] h-[225px] md:h-[435px] rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
      <div className="infos-left w-full md:w-1/2 flex flex-col gap-2.5 text-center md:text-left mt-2.5 md:mt-0">
        <div>
          <h4 className="text-2xl md:text-[2.25rem]">{position}</h4>
          <a href={activityWeb} target="_blank" className="hover:underline hover:text-[#34fb7b]">
            <p className="text-base md:text-[1.25rem]">
              <i>
                {activityName}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-box-arrow-up-right inline"
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
              </i>
            </p>
          </a>
        </div>
        <div className="details-left bg-[#040c14] text-white w-full md:w-[90%] p-5 rounded-xl text-justify shadow-[0_0_10px_rgba(255,255,255,0.5)] relative">
          <ul className="list-none pl-4 md:pl-5">
            <li className="before:content-['⇨'] before:pr-2"><p className="text-base md:text-[1.25rem]">{detail1}</p></li>
            <li className="before:content-['⇨'] before:pr-2"><p className="text-base md:text-[1.25rem]">{detail2}</p></li>
          </ul>
        </div>
        <div>
          <p className="text-base md:text-[1.25rem]">
            <span className="text-[#34fb7b]">{timeline} | {location}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityBoxRight;