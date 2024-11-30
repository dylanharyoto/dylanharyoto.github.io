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
    <div className="box">
      <div className="image-box">
        <div className="image-border"></div>
        <img src={companyLogo} />
      </div>
      <div className="dotline">
        <div className="dot"></div>
        <div className="line"></div>
      </div>
      <div className="details">
        <p>
          <span>{timeline}</span>
        </p>
        <h5>{position}</h5>
        <a href={companyWeb} target="_blank">
          <p>
            <i>
              {companyName}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-box-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                />
                <path
                  fill-rule="evenodd"
                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                />
              </svg>
            </i>
          </p>
        </a>
        <br />
        <ul>
          <li>
            <p>{detail1}</p>
          </li>
          <li>
            <p>{detail2}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExperienceBox;
