import React from "react";
import ActivityBoxLeft from "../components/ActivityBoxLeft";
import ActivityBoxRight from "../components/ActivityBoxRight";

const Activities = () => {
  return (
    <div
      id="activities"
      className="relative top-[-45vh] h-auto bg-gradient-to-b from-transparent via-[rgba(12,28,36,1)] to-transparent px-[5vh] md:px-[140px] xl:px-[40vh] py-[100px] pb-[170px] flex flex-col gap-[70px]"
    >
      <div className="heading text-center leading-[60px]">
        <h4 className="text-[1.75rem] md:text-[2.25rem] p-0 m-0 font-thin">
          Leading by Example
        </h4>
        <p className="leading-[170%] text-base md:text-xl m-0 p-0">
          Making a Difference through Guiding Others
        </p>
      </div>
      <ActivityBoxLeft
        imageName="l1.jpg"
        position="Student Ambassador"
        activityName="HSBC/HKU Business Case Competition"
        activityWeb="https://competition.acrc.hku.hk/"
        detail1="Selected as one of the 30+ student ambassadors in charge of guiding case preparation and presentation."
        detail2="Successfully guided my team from the preparation round to reach the final round of the competition."
        timeline="May 2024"
        location="Hong Kong SAR"
      />
      <ActivityBoxRight
        imageName="l2.jpg"
        position="Vice President"
        activityName="Google Developer Student Clubs PolyU"
        activityWeb="https://gdsc.community.dev/hong-kong-polytechnic-university-hong-kong-hong-kong/"
        detail1="Selected from 100+ candidates to lead a team of technical leads in organizing tech-related workshops."
        detail2="Organized 5+ tech workshops accessible to 20,000+ undergraduates, masters, PhDs, and faculty members."
        timeline="Aug 2023 - Present"
        location="Hong Kong SAR"
      />
      <ActivityBoxLeft
        imageName="l3.jpg"
        position="Service Project Lead"
        activityName="African Evangelistic Enterprise"
        activityWeb="https://aeint.org/"
        detail1="Led a team to install solar-powered electricity to 400+ rural households, providing light during dark hours."
        detail2="Collaborated with technical team to implement an IoT system with MPPT and intranet for remote monitoring."
        timeline="Mar 2023 - Aug 2023"
        location="Rwanda, Africa"
      />
      <ActivityBoxRight
        imageName="l4.jpg"
        position="Technology Innovation Lead"
        activityName="PolyU E-Formula Racing Team"
        activityWeb="https://hkpolyuracing.com/"
        detail1="Developed RC car learning curriculum catered specifically for secondary school students."
        detail2="Built the RC car using Arduino and provided online video lectures and tutorials about basic soldering."
        timeline="Nov 2022 - Jun 2023"
        location="Hong Kong SAR"
      />
      <ActivityBoxLeft
        imageName="l5.jpg"
        position="Technical Lead"
        activityName="Google Developer Student Clubs PolyU"
        activityWeb="https://gdsc.community.dev/hong-kong-polytechnic-university-hong-kong-hong-kong/"
        detail1="Hosted beginner workshop on robotics and programming using Lego Mindstorms EV3 for 20+ non-tech students."
        detail2="Collaborated with executive committees from other divisions to plan and prepare for upcoming events."
        timeline="Oct 2022 - Jul 2023"
        location="Hong Kong SAR"
      />
      <ActivityBoxRight
        imageName="l6.jpg"
        position="Country Representative"
        activityName="World Robot Olympiad"
        activityWeb="https://wro-association.org/"
        detail1="Led the team through planning, task delegation, and execution strategies, achieved top 18 in final round."
        detail2="Responsible for robot design and logic programming, successfully scored full points for the mission."
        timeline="Jun 2019 - Nov 2020"
        location="Gyor, Hungary"
      />
    </div>
  );
};

export default Activities;