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
    <div className="grid grid-cols-[15%_5%_80%] md:grid-cols-[15%_5%_80%] gap-5">
      <div className="image-box relative">
        <div className="absolute -top-1.5 -left-1.5 h-[150px] w-[150px] border-[3px] border-[#34fb7b] rounded-xl"></div>
        <img src={companyLogo} className="h-[150px] w-[150px] border-[3px] border-[#34fb7b] rounded-xl z-2 relative" />
      </div>
      <div className="dotline hidden md:block">
        <div className="dot"></div>
        <div className="line"></div>
      </div>
      <div className="details flex flex-col justify-center ml-0 md:ml-5">
        <p className="text-base md:text-[1.25rem]"><span className="text-[#34fb7b]">{timeline}</span></p>
        <h5 className="text-[1.35rem] md:text-[1.75rem]">{position}</h5>
        <a href={companyWeb} target="_blank" className="hover:underline hover:text-[#34fb7b]">
          <p className="text-base md:text-[1.25rem]">
            <i>
              {companyName}{" "}
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
        {(detail1 || detail2) && <br />}
        <ul className="list-none pl-4 md:pl-5">
          {detail1 && <li className="before:content-['⇨'] before:pr-2"><p className="text-base md:text-[1.25rem]">{detail1}</p></li>}
          {detail2 && <li className="before:content-['⇨'] before:pr-2"><p className="text-base md:text-[1.25rem]">{detail2}</p></li>}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceBox;