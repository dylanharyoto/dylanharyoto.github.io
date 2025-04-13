import React from "react";

const Awards = () => {
  return (
    <div
      id="awards"
      className="relative top-[-60vh] px-[5vh] md:px-[140px] xl:px-[40vh] py-[100px] pb-[170px] bg-gradient-to-b from-transparent via-[rgba(4,12,20,1)] to-transparent h-auto flex flex-col md:grid md:grid-cols-2 md:grid-rows-[70px_35px_450px] md:auto-rows-[450px] gap-5"
    >
      <div className="heading text-center col-span-2 leading-[60px]">
        <h4 className="text-[1.75rem] md:text-[2.25rem] p-0 m-0 font-thin">
          Celebrating Excellence
        </h4>
        <p className="leading-[170%] text-base md:text-xl m-0 p-0">
          Honors and Recognitions that Shine Bright
        </p>
      </div>
      <div></div>
      <div></div>
      <div className="box flex flex-col items-center w-full h-full bg-dark-bg rounded-[20px] gap-[15px] text-center shadow-[0_0_10px_rgba(255,255,255,0.5)]">
        <img
          src="a9.jpg"
          className="w-4/5 h-[180px] md:h-[325px] rounded-b-[20px]"
        />
        <div>
          <h5 className="text-[1.35rem] md:text-[1.75rem] p-0 m-0 font-thin">
            <span className="text-custom-green">
              Presidential Student Leadership Award
            </span>
          </h5>
          <p className="leading-[170%] text-base md:text-xl m-0 p-0">
            The Hong Kong Polytechnic University
          </p>
          <p className="leading-[170%] text-base md:text-xl m-0 p-0">
            March 26, 2024
          </p>
        </div>
      </div>
      <div className="box flex flex-col items-center w-full h-full bg-dark-bg rounded-[20px] gap-[15px] text-center shadow-[0_0_10px_rgba(255,255,255,0.5)]">
        <img
          src="a8.jpg"
          className="w-4/5 h-[180px] md:h-[325px] rounded-b-[20px]"
        />
        <div>
          <h5 className="text-[1.35rem] md:text-[1.75rem] p-0 m-0 font-thin">
            <span className="text-custom-green">
              Merit Award - Digital Economy
            </span>
          </h5>
          <p className="leading-[170%] text-base md:text-xl m-0 p-0">
            Hong Kong Techathon
          </p>
          <p className="leading-[170%] text-base md:text-xl m-0 p-0">
            January 28, 2024
          </p>
        </div>
      </div>
      <div className="box flex flex-col items-center w-full h-full bg-dark-bg rounded-[20px] gap-[15px] text-center shadow-[0_0_10px_rgba(255,255,255,0.5)]">
        <img
          src="a7.jpg"
          className="w-4/5 h-[180px] md:h-[325px] rounded-b-[20px]"
        />
        <div>
          <h5 className="text-[1.35rem] md:text-[1.75rem] p-0 m-0 font-thin">
            <span className="text-custom-green">
              2nd Runner Up & Best GIS Award
            </span>
          </h5>
          <p className="leading-[170%] text-base md:text-xl m-0 p-0">
            PolyHack
          </p>
          <p className="leading-[170%] text-base md:text-xl m-0 p-0">
            June 24, 2023
          </p>
        </div>
      </div>
      <div className="box flex flex-col items-center w-full h-full bg-dark-bg rounded-[20px] gap-[15px] text-center shadow-[0_0_10px_rgba(255,255,255,0.5)]">
        <img
          src="a1.jpg"
          className="w-4/5 h-[180px] md:h-[325px] rounded-b-[20px]"
        />
        <div>
          <h5 className="text-[1.35rem] md:text-[1.75rem] p-0 m-0 font-thin">
            <span className="text-custom-green">
              Bronze Medalist & Best Innovation Award
            </span>
          </h5>
          <p className="leading-[170%] text-base md:text-xl m-0 p-0">
            World Robot Olympiad
          </p>
          <p className="leading-[170%] text-base md:text-xl m-0 p-0">
            November 15, 2020
          </p>
        </div>
      </div>
      <div className="box flex flex-col items-center w-full h-full bg-dark-bg rounded-[20px] gap-[15px] text-center shadow-[0_0_10px_rgba(255,255,255,0.5)]">
        <img
          src="a3.jpg"
          className="w-4/5 h-[180px] md:h-[325px] rounded-b-[20px]"
        />
        <div>
          <h5 className="text-[1.35rem] md:text-[1.75rem] p-0 m-0 font-thin">
            <span className="text-custom-green">Gold Medalist</span>
          </h5>
          <p className="leading-[170%] text-base md:text-xl m-0 p-0">
            Indonesian Robotics Olympiad
          </p>
          <p className="leading-[170%] text-base md:text-xl m-0 p-0">
            September 7, 2019
          </p>
        </div>
      </div>
      <div className="box flex flex-col items-center w-full h-full bg-dark-bg rounded-[20px] gap-[15px] text-center shadow-[0_0_10px_rgba(255,255,255,0.5)]">
        <img
          src="a4.jpg"
          className="w-4/5 h-[180px] md:h-[325px] rounded-b-[20px]"
        />
        <div>
          <h5 className="text-[1.35rem] md:text-[1.75rem] p-0 m-0 font-thin">
            <span className="text-custom-green">1st Place Winner</span>
          </h5>
          <p className="leading-[170%] text-base md:text-xl m-0 p-0">
            Mechatronics Day 4.0
          </p>
          <p className="leading-[170%] text-base md:text-xl m-0 p-0">
            October 21, 2018
          </p>
        </div>
      </div>
    </div>
  );
};

export default Awards;