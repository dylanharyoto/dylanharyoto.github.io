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
    <div className="box grid grid-cols-[15%_5%_80%]">
      <div className="image-box relative">
        <div className="image-border absolute -top-[5px] -left-[5px] h-[150px] w-[150px] border-[3px] border-custom-green rounded-[20px]"></div>
        <img
          src={companyLogo}
          className="h-[150px] w-[150px] border-[3px] border-custom-green rounded-[20px] relative z-[2]"
        />
      </div>
      <div className="dotline w-[35px] h-full p-[70px_20px] hidden md:block">
        <div className="dot w-[10px] h-[10px] border-[5px] border-custom-green rounded-full mx-auto"></div>
        <div className="line w-[10%] h-[132%] bg-custom-green mx-auto"></div>
      </div>
      <div className="details ml-5 flex flex-col justify-center">
        <p>
          <span className="text-custom-green">{timeline}</span>
        </p>
        <h5 className="text-[1.75rem] p-0 m-0 font-thin">{position}</h5>
        <a
          href={companyWeb}
          target="_blank"
          className="text-white no-underline w-auto rounded-[20px] transition duration-500 hover:underline hover:cursor-pointer hover:text-custom-green"
        >
          <p>
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
        <br />
        <ul className="list-none pl-4 m-0">
          <li>
            <p className="leading-[170%] text-xl m-0 p-0">{detail1}</p>
          </li>
          <li>
            <p className="leading-[170%] text-xl m-0 p-0">{detail2}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExperienceBox;