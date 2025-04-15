import React, { useState } from "react";
import ExperienceBox from "../components/ExperienceBox";

const experiences = [
  {
    companyLogo: "/logo_1.jpeg",
    companyName: "BNP Paribas",
    companyWeb: "https://www.bnpparibas.com.hk/en/",
    position: "Software Engineer Intern",
    timeline: "Jan 2025 - Present",
    detail1: "Building a distributed caching system (Hazelcast) in KDB+ integrated with a Pub/Sub architecture for more efficient storage and faster retrieval of trade executions.",
    detail2: "Developed an object-oriented order book with limit and market order functionalities in Java, supporting FIX protocol, and integrated the VWAP algo to automate execution.",
    skills: ["Java", "KDB+", "Hazelcast", "Pub/Sub", "FIX Protocol", "VWAP"],
    country: "Hong Kong SAR"
  },
  {
    companyLogo: "/logo_2.jpeg",
    companyName: "Deloitte",
    companyWeb: "https://www2.deloitte.com/cn/en.html",
    position: "Tech Consultant Intern",
    timeline: "Sep 2024 - Jan 2025",
    detail1: "Assisted in developing data quality and governance frameworks for clients to ensure data management practices align with industry standards and regulatory requirements.",
    detail2: "Conducted in-depth research on data mesh, exploring its principles and applications to identify innovative data architecture solutions that promote decentralized data ownership.",
    skills: ["Data Governance", "Data Mesh", "Data Quality Frameworks", "Research"],
    country: "Hong Kong SAR"
  },
  {
    companyLogo: "/logo_3.jpeg",
    companyName: "Career Hackers",
    companyWeb: "https://www.careerhackers.io/pro/",
    position: "Software Engineer Intern",
    timeline: "Aug 2024 - Aug 2024",
    detail1: "Enabled flexibility by developing an interactive dashboard for companies to create customized office-based job simulation games using TypeScript, Next.js, and Tailwind.",
    detail2: "Ensured transactional atomicity in database operations using Mongoose while developing RESTful API endpoints with Express.js, and integrated AWS S3 for images and PDF.",
    skills: ["TypeScript", "Next.js", "Tailwind CSS", "Mongoose", "Express.js", "AWS S3", "REST APIs"],
    country: "Hong Kong SAR"
  },
  {
    companyLogo: "/logo_4.jpeg",
    companyName: "Castco Testing Centre Limited",
    country: "Hong Kong SAR",
    companyWeb: "https://www.castco.com.hk/eng/home",
    position: "Software Engineer Intern",
    timeline: "Jun 2024 - Jun 2024",
    detail1: "Created the back-end of the company’s vehicle tracking system using Traccar on Linux, established a connection to Microsoft SQL Server, and retrieved real-time data using API.",
    detail2: "Enhanced filtering in 3 product registration apps by resolving SQL errors and adding filtering fields with undo functionality using Xamarin and C#.",
    skills: ["Traccar", "Linux", "Microsoft SQL Server", "APIs", "Xamarin", "C#", "SQL"],
    country: "Hong Kong SAR"
  },
  {
    companyLogo: "/logo_5.jpeg",
    companyName: "Hutchison Port Holdings",
    companyWeb: "https://hutchisonports.com/en/",
    position: "Data Analyst Intern",
    timeline: "Jun 2023 - Aug 2023",
    detail1: "Optimized the company’s strategic expansion plans by producing data visualizations and comprehensive analysis of import/export statistics of potential countries using Tableau.",
    detail2: "Contributed to the shipping line section of the monthly market reports by leveraging PowerBI to analyze and compare financial data from multiple shipping line companies.",
    skills: ["Tableau", "PowerBI", "Data Visualization", "Market Analysis"],
    country: "Hong Kong SAR"
  },
];

const Experience = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div
      id="experiences"
      className="bg-theme min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 xl:px-36 2xl:px-60 py-10 sm:py-16 md:py-20 lg:pt-24 xl:pt-36 text-theme"
    >
      <div className="text-center mb-8 sm:mb-12">
        <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-theme">
          Journey of Success
        </h4>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-2">
          Moments from My Career Path
        </p>
      </div>
      <div className="space-y-4 max-w-3xl mx-auto">
        {experiences.map((experience, index) => (
          <ExperienceBox
            key={index}
            {...experience}
            isExpanded={expanded === index}
            toggleExpand={() => toggleExpand(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;