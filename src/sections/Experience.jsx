import React, { useState } from "react";
import ExperienceBox from "../components/ExperienceBox";
import SectionHeading from "../components/SectionHeading";

const experiences = [
  {
    companyLogo: "/logo_6.jpeg",
    companyName: "Jefferies",
    companyWeb: "https://www.jefferies.com/",
    position: "Technology Summer Analyst",
    timeline: "Jun 2025 - Aug 2025",
    detail1: "Developed a React.js platform with Express.js backend to deliver real-time RFQ metrics from KDB+ for APAC Fixed Income traders.",
    detail2: "Built a Python GUI tool to streamline ION MarketView batch configurations and implemented RFQ pricing analysis in ION MarketView.",
    skills: ["React.js", "Express.js", "KDB+", "ION MarketView"],
    country: "Hong Kong SAR"
  },
  {
    companyLogo: "/logo_1.jpeg",
    companyName: "BNP Paribas",
    companyWeb: "https://www.bnpparibas.com.hk/en/",
    position: "Software Engineer Intern",
    timeline: "Jan 2025 - Jun 2025",
    detail1: "Built a distributed caching system in KDB+/q integrated with a Pub/Sub architecture for more efficient storage and faster retrieval of trade executions.",
    detail2: "Developed an object-oriented order book with limit and market order functionalities in Java, supporting FIX protocol, and integrated the VWAP algo to automate execution.",
    skills: ["Java", "KDB+", "Pub/Sub", "FIX Protocol", "VWAP"],
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
    companyWeb: "https://www.castco.com.hk/eng/home",
    position: "Software Engineer Intern",
    timeline: "Jun 2024 - Jun 2024",
    detail1: "Created the back-end of the company's vehicle tracking system using Traccar on Linux, established a connection to Microsoft SQL Server, and retrieved real-time data using API.",
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
    detail1: "Optimized the company's strategic expansion plans by producing data visualizations and comprehensive analysis of import/export statistics of potential countries using Tableau.",
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
    <section
      id="experiences"
      className="bg-theme min-h-screen w-full scroll-mt-24 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-36 2xl:px-60 pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 text-theme"
    >
      <SectionHeading
        index="02"
        label="EXPERIENCE"
        title="Journey of Success"
        subtitle="Moments from My Career Path"
      />

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div
            className="hidden sm:block absolute left-3 top-2 bottom-2 w-px"
            style={{ backgroundColor: "var(--border-soft)" }}
          />

          <div className="space-y-6">
            {experiences.map((experience, index) => {
              const isCurrent = experience.timeline.toLowerCase().includes("present");
              return (
                <div key={index} className="relative flex gap-4 sm:gap-6">
                  <div className="hidden sm:flex flex-col items-center pt-6 w-6 flex-shrink-0">
                    <span
                      className={`w-3 h-3 rounded-full border-2 border-accent ${
                        isCurrent ? "bg-accent animate-pulse-dot" : "bg-theme"
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <ExperienceBox
                      {...experience}
                      isCurrent={isCurrent}
                      isExpanded={expanded === index}
                      toggleExpand={() => toggleExpand(index)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;