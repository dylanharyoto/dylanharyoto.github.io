import React from "react";

const Awards = () => {
  return (
    <div
      id="awards"
      className="relative top-[-50vh] px-10 md:px-36 py-24 pb-40 bg-gradient-to-b from-transparent via-[rgba(4,12,20,1)] to-transparent grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-[450px] auto-cols-[1fr_1fr]"
    >
      <div className="heading text-center col-span-2 leading-[60px]">
        <h4 className="text-2xl md:text-[2.25rem]">Celebrating Excellence</h4>
        <p className="text-lg md:text-[1.25rem]">Honors and Recognitions that Shine Bright</p>
      </div>
      <div></div>
      <div></div>
      <div className="box flex flex-col items-center w-full h-full bg-[#0c1c24] rounded-xl gap-4 text-center shadow-[0_0_10px_rgba(255,255,255,0.5)]">
        <img src="a9.jpg" className="w-4/5 h-[180px] md:h-[325px] rounded-b-xl" />
        <div>
          <h5 className="text-[1.35rem] md:text-[1.75rem]"><span className="text-[#34fb7b]">Presidential Student Leadership Award</span></h5>
          <p className="text-base md:text-[1.25rem]">The Hong Kong Polytechnic University</p>
          <p className="text-base md:text-[1.25rem]">March 26, 2024</p>
        </div>
      </div>
      <div className="box flex flex-col items-center w-full h-full bg-[#0c1c24] rounded-xl gap-4 text-center shadow-[0_0_10px_rgba(255,255,255,0.5)]">
        <img src="a8.jpg" className="w-4/5 h-[180px] md:h-[325px] rounded-b-xl" />
        <div>
          <h5 className="text-[1.35rem] md:text-[1.75rem]"><span className="text-[#34fb7b]">Merit Award - Digital Economy</span></h5>
          <p className="text-base md:text-[1.25rem]">Hong Kong Techathon</p>
          <p className="text-base md:text-[1.25rem]">January 28, 2024</p>
        </div>
      </div>
      <div className="box flex flex-col items-center w-full h-full bg-[#0c1c24] rounded-xl gap-4 text-center shadow-[0_0_10px_rgba(255,255,255,0.5)]">
        <img src="a7.jpg" className="w-4/5 h-[180px] md:h-[325px] rounded-b-xl" />
        <div>
          <h5 className="text-[1.35rem] md:text-[1.75rem]"><span className="text-[#34fb7b]">2nd Runner Up & Best GIS Award</span></h5>
          <p className="text-base md:text-[1.25rem]">PolyHack</p>
          <p className="text-base md:text-[1.25rem]">June 24, 2023</p>
        </div>
      </div>
      <div className="box flex flex-col items-center w-full h-full bg-[#0c1c24] rounded-xl gap-4 text-center shadow-[0_0_10px_rgba(255,255,255,0.5)]">
        <img src="a1.jpg" className="w-4/5 h-[180px] md:h-[325px] rounded-b-xl" />
        <div>
          <h5 className="text-[1.35rem] md:text-[1.75rem]"><span className="text-[#34fb7b]">Bronze Medalist & Best Innovation Award</span></h5>
          <p className="text-base md:text-[1.25rem]">World Robot Olympiad</p>
          <p className="text-base md:text-[1.25rem]">November 15, 2020</p>
        </div>
      </div>
      <div className="box flex flex-col items-center w-full h-full bg-[#0c1c24] rounded-xl gap-4 text-center shadow-[0_0_10px_rgba(255,255,255,0.5)]">
        <img src="a3.jpg" className="w-4/5 h-[180px] md:h-[325px] rounded-b-xl" />
        <div>
          <h5 className="text-[1.35rem] md:text-[1.75rem]"><span className="text-[#34fb7b]">Gold Medalist</span></h5>
          <p className="text-base md:text-[1.25rem]">Indonesian Robotics Olympiad</p>
          <p className="text-base md:text-[1.25rem]">September 7, 2019</p>
        </div>
      </div>
      <div className="box flex flex-col items-center w-full h-full bg-[#0c1c24] rounded-xl gap-4 text-center shadow-[0_0_10px_rgba(255,255,255,0.5)]">
        <img src="a4.jpg" className="w-4/5 h-[180px] md:h-[325px] rounded-b-xl" />
        <div>
          <h5 className="text-[1.35rem] md:text-[1.75rem]"><span className="text-[#34fb7b]">1st Place Winner</span></h5>
          <p className="text-base md:text-[1.25rem]">Mechatronics Day 4.0</p>
          <p className="text-base md:text-[1.25rem]">October 21, 2018</p>
        </div>
      </div>
    </div>
  );
};

export default Awards;