import React, { useState } from "react";
import ExperienceBox from "../components/ExperienceBox";
import SectionHeading from "../components/SectionHeading";

const experiences = [
  {
    companyLogo: "/pinnacle_logo.jpeg",
    companyName: "Pinnacle Investment",
    companyWeb: "https://www.pinnacle.id/",
    position: "Intern",
    timeline: "Jun 2026 - Present",
    description: "Built an extensible Python framework for processing high-frequency tick data into time bars, implementing market microstructure indicators like order book and order flow imbalance through bar-level aggregation and best bid/ask classification.",
    skills: ["Python", "Market Microstructure", "Tick Data"],
    country: "Indonesia"
  },
  {
    companyLogo: "/societe_generale_logo.jpeg",
    companyName: "Societe Generale",
    companyWeb: "https://www.societegenerale.com/en",
    position: "Intern",
    timeline: "Feb 2026 - May 2026",
    description: "Developed health-check APIs and a cached RESTful endpoint in C# for an exotics application's migration to Azure, and migrated its event expiry system from Spring Boot 2.x to 3.x using Spring Security and Jakarta Servlet.",
    skills: ["C#", "Azure", "Spring Boot", "Grafana"],
    country: "Hong Kong SAR"
  },
  {
    companyLogo: "/binance_logo.jpeg",
    companyName: "Binance",
    companyWeb: "https://www.binance.com/",
    position: "Intern",
    timeline: "Nov 2025 - Feb 2026",
    description: "Built Java microservices for a bank account approval workflow, a Redis-backed refund retry mechanism with job scheduling and state machines, and a balance reconciliation module for real-time wallet monitoring.",
    skills: ["Java", "Microservices", "Redis", "REST APIs"],
    country: "Hong Kong SAR"
  },
  {
    companyLogo: "/jefferies_logo.jpeg",
    companyName: "Jefferies",
    companyWeb: "https://www.jefferies.com/",
    position: "Intern",
    timeline: "Jun 2025 - Aug 2025",
    description: "Built a React.js and Express.js platform delivering trader performance metrics from KDB+, automated daily RFQ reports with KDB+ queries, and developed a Python GUI tool for configuring ION MarketView batches.",
    skills: ["React.js", "Express.js", "KDB+", "Python"],
    country: "Hong Kong SAR"
  },
  {
    companyLogo: "/logo_1.jpeg",
    companyName: "BNP Paribas",
    companyWeb: "https://www.bnpparibas.com.hk/en/",
    position: "Intern",
    timeline: "Jan 2025 - Jun 2025",
    description: "Built a distributed KDB+ caching system with discovery and gateway load balancing, a qSQL-based partition rebalancing algorithm, and an object-oriented Java order book supporting FIX protocol and VWAP execution.",
    skills: ["KDB+/q", "Java", "FIX Protocol", "VWAP"],
    country: "Hong Kong SAR"
  },
  {
    companyLogo: "/logo_2.jpeg",
    companyName: "Deloitte",
    companyWeb: "https://www2.deloitte.com/cn/en.html",
    position: "Intern",
    timeline: "Sep 2024 - Jan 2025",
    description: "Assisted in developing data quality and governance frameworks for clients while researching data mesh principles to identify decentralized data architecture solutions.",
    skills: ["Data Governance", "Data Mesh", "Research"],
    country: "Hong Kong SAR"
  },
  {
    companyLogo: "/logo_3.jpeg",
    companyName: "Career Hackers",
    companyWeb: "https://www.careerhackers.io/pro/",
    position: "Intern",
    timeline: "Aug 2024 - Aug 2024",
    description: "Developed an interactive dashboard with TypeScript, Next.js, and Tailwind for customized job simulation games, backed by RESTful Express.js APIs with Mongoose and AWS S3 integration.",
    skills: ["TypeScript", "Next.js", "Express.js", "AWS S3"],
    country: "Hong Kong SAR"
  },
  {
    companyLogo: "/logo_4.jpeg",
    companyName: "Castco Testing Centre Limited",
    companyWeb: "https://www.castco.com.hk/eng/home",
    position: "Intern",
    timeline: "Jun 2024 - Jun 2024",
    description: "Built the back-end of a vehicle tracking system using Traccar on Linux with Microsoft SQL Server, and enhanced filtering across three product registration apps using Xamarin and C#.",
    skills: ["Traccar", "Linux", "SQL Server", "C#"],
    country: "Hong Kong SAR"
  },
  {
    companyLogo: "/logo_5.jpeg",
    companyName: "Hutchison Port Holdings",
    companyWeb: "https://hutchisonports.com/en/",
    position: "Intern",
    timeline: "Jun 2023 - Aug 2023",
    description: "Produced Tableau and Power BI data visualizations analyzing import/export statistics and shipping line financials to support strategic expansion plans and monthly market reports.",
    skills: ["Tableau", "Power BI", "Data Visualization"],
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