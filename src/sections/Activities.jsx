import React, { useState } from "react";
import ActivityBox from "../components/ActivityBox";

const activities = [
  {
    logo: "/hsbc_logo.png",
    imageName: "/activity_1.jpg",
    position: "Student Ambassador",
    activityName: "HSBC/HKU Business Case Competition",
    activityWeb: "https://competition.acrc.hku.hk/",
    detail1: "Selected as one of the 30+ student ambassadors in charge of guiding case preparation and presentation.",
    detail2: "Successfully guided my team from the preparation round to reach the final round of the competition.",
    timeline: "May 2024",
    location: "Hong Kong SAR",
  },
  {
    logo: "/google_logo.png",
    imageName: "/activity_2.jpg",
    position: "Vice President",
    activityName: "Google Developer Student Clubs PolyU",
    activityWeb: "https://gdsc.community.dev/hong-kong-polytechnic-university-hong-kong-hong-kong/",
    detail1: "Selected from 100+ candidates to lead a team of technical leads in organizing tech-related workshops.",
    detail2: "Organized 5+ tech workshops accessible to 20,000+ undergraduates, masters, PhDs, and faculty members.",
    timeline: "Aug 2023 - Present",
    location: "Hong Kong SAR",
  },
  {
    logo: "/aee_logo.png",
    imageName: "/activity_3.jpg",
    position: "Service Project Lead",
    activityName: "African Evangelistic Enterprise",
    activityWeb: "https://aeint.org/",
    detail1: "Led a team to install solar-powered electricity to 400+ rural households, providing light during dark hours.",
    detail2: "Collaborated with technical team to implement an IoT system with MPPT and intranet for remote monitoring.",
    timeline: "Mar 2023 - Aug 2023",
    location: "Rwanda, Africa",
  },
  {
    logo: "/polyu_racing_logo.png",
    imageName: "/activity_4.jpg",
    position: "Technology Innovation Lead",
    activityName: "PolyU E-Formula Racing Team",
    activityWeb: "https://hkpolyuracing.com/",
    detail1: "Developed RC car learning curriculum catered specifically for secondary school students.",
    detail2: "Built the RC car using Arduino and provided online video lectures and tutorials about basic soldering.",
    timeline: "Nov 2022 - Jun 2023",
    location: "Hong Kong SAR",
  },
  {
    logo: "/google_logo.png",
    imageName: "/activity_5.jpg",
    position: "Technical Lead",
    activityName: "Google Developer Student Clubs PolyU",
    activityWeb: "https://gdsc.community.dev/hong-kong-polytechnic-university-hong-kong-hong-kong/",
    detail1: "Hosted beginner workshop on robotics and programming using Lego Mindstorms EV3 for 20+ non-tech students.",
    detail2: "Collaborated with executive committees from other divisions to plan and prepare for upcoming events.",
    timeline: "Oct 2022 - Jul 2023",
    location: "Hong Kong SAR",
  },
  {
    logo: "/wro_logo.png",
    imageName: "/activity_6.jpg",
    position: "Country Representative",
    activityName: "World Robot Olympiad",
    activityWeb: "https://wro-association.org/",
    detail1: "Led the team through planning, task delegation, and execution strategies, achieved top 18 in final round.",
    detail2: "Responsible for robot design and logic programming, successfully scored full points for the mission.",
    timeline: "Jun 2019 - Nov 2020",
    location: "Gyor, Hungary",
  },
];

const Activities = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div
      id="activities"
      className="bg-theme min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 xl:px-36 2xl:px-60 py-10 sm:py-16 md:py-20 lg:pt-24 xl:pt-36 text-theme"
    >
      <div className="text-center mb-8 sm:mb-12">
        <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-theme">
          Leading by Example
        </h4>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-2">
          Making a Difference through Guiding Others
        </p>
      </div>
      <div className="space-y-4 max-w-3xl mx-auto">
        {activities.map((activity, index) => (
          <ActivityBox
            key={index}
            {...activity}
            isExpanded={expanded === index}
            toggleExpand={() => toggleExpand(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Activities;