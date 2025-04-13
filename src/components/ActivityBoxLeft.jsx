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
    <div className="img-left flex flex-col md:flex-row items-center">
      <img
        src={imageName}
        className="rounded-[20px] shadow-[0_0_10px_rgba(255,255,255,0.5)] w-[300px] h-[225px] md:w-[580px] md:h-[435px]"
      />
      <div className="infos-right w-full md:w-1/2 flex flex-col gap-2.5 text-center md:text-right mt-2.5 md:mt-0">
        <div>
          <h4 className="text-[1.75rem] md:text-[2.25rem] p-0 m-0 font-thin">
            {position}
          </h4>
          <a
            href={activityWeb}
            target="_blank"
            className="text-white no-underline w-auto rounded-[20px] transition duration-500 hover:underline hover:cursor-pointer hover:text-custom-green"
          >
            <p className="leading-[170%] text-base md:text-xl m-0 p-0">
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
        <div className="details-right relative bg-[#040c14] text-white w-[90%] md:w-full p-5 rounded-[20px] text-justify shadow-[0_0_10px_rgba(255,255,255,0.5)] md:left-[-40px]">
          <ul className="list-none pl-4 m-0">
            <li>
              <p className="leading-[170%] text-base md:text-xl m-0 p-0">
                {detail1}
              </p>
            </li>
            <li>
              <p className="leading-[170%] text-base md:text-xl m-0 p-0">
                {detail2}
              </p>
            </li>
          </ul>
        </div>
        <div>
          <p className="leading-[170%] text-base md:text-xl m-0 p-0">
            <span className="text-custom-green">
              {timeline} | {location}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityBoxLeft;