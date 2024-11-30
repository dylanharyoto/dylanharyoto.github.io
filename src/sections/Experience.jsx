import React from "react";
import ExperienceBox from "../components/ExperienceBox";
const experiences = [
  {
    companyLogo: "https://tinyurl.com/bdhxyf7m",
    companyName: "BNP Paribas",
    companyWeb: "https://www2.deloitte.com/cn/en.html",
    position: "Incoming Software Engineer Intern",
    timeline: "September 2024 - Present",
  },
  {
    companyLogo: "https://tinyurl.com/vpdpxzp5",
    companyName: "Deloitte",
    companyWeb: "https://www2.deloitte.com/cn/en.html",
    position: "Technology Consulting Intern",
    timeline: "September 2024 - Present",
    detail1:
      "Developed an interactive dashboard for companies to create customized office-based job simulation games using TypeScript, Next.js, and Tailwind.",
    detail2:
      "Ensured transactional atomicity in database operations using Mongoose, developed RESTful API endpoints with Express.js, and integrated AWS S3 for images.",
  },
  {
    companyLogo: "https://shorturl.at/Mkwil",
    companyName: "Career Hackers",
    companyWeb: "https://www.careerhackers.io/pro/",
    position: "Software Engineer Intern",
    timeline: "August 2024 - August 2024",
    detail1:
      "Developed an interactive dashboard for companies to create customized office-based job simulation games using TypeScript, Next.js, and Tailwind.",
    detail2:
      "Ensured transactional atomicity in database operations using Mongoose, developed RESTful API endpoints with Express.js, and integrated AWS S3 for images.",
  },
  {
    companyLogo: "https://shorturl.at/Voh68",
    companyName: "Castco Testing Centre Limited",
    companyWeb: "https://www.castco.com.hk/eng/home",
    position: "Software Engineer Intern",
    timeline: "June 2024 - June 2024",
    detail1:
      "Developed the back-end of the vehicle tracking system using Traccar on Linux, connecting to Microsoft SQL Server to store real-time vehicle tracking data.",
    detail2:
      "Enhanced filtering on three product registration apps by fixing backend SQL errors and adding front-end fields with undo functionality using Xamarin and C#.",
  },
  {
    companyLogo: "https://shorturl.at/3weB4",
    companyName: "Graduate School, The Hong Kong Polytechnic University",
    companyWeb: "https://www.polyu.edu.hk/en/gs/",
    position: "Undergraduate Researcher",
    timeline: "August 2023 - Present",
    detail1:
      "1 out of 100 selected from 400+ undergraduates to conduct research with a grant of HK$30,000.",
    detail2:
      "Designed an algorithm for intra-cell channel time scheduling (NP-Hard) with a 25% success rate.",
  },
  {
    companyLogo: "https://shorturl.at/c0Z4L",
    companyName: "Hutchison Port Holdings",
    companyWeb: "https://hutchisonports.com/en/",
    position: "Market Research Assistant",
    timeline: "June 2023 - August 2023",
    detail1:
      "Optimized the company’s strategic expansion plans by producing data visualizations and analysis of import/export statistics of potential countries using Tableau.",
    detail2:
      "Contributed to the shipping line monthly market reports by leveraging PowerBI to analyze and compare financial data from multiple shipping line companies.",
  },
  {
    companyLogo: "https://shorturl.at/wNuUF",
    companyName: "Dept. of Computing, The Hong Kong Polytechnic University",
    companyWeb: "https://www.polyu.edu.hk/comp/",
    position: "Student Research Assistant",
    timeline: "February 2023 - August 2023",
    detail1:
      "Installed LoRa communication on Raspberry Pi using MKR WAN 1310, enhancing the system’s wireless communication capabilities.",
    detail2:
      "Conducted an experiment on a server-client connection using SSH and X Window to optimize the communication.",
  },
];
const Experience = () => {
  return (
    <div id="experiences">
      <div className="heading">
        <h4>Journey of Success</h4>
        <p>Moments from My Career Path</p>
      </div>
      {experiences.map((experience, id) => (
        <ExperienceBox
          key={id}
          companyLogo={experience.companyLogo}
          companyName={experience.companyName}
          companyWeb={experience.companyWeb}
          position={experience.position}
          timeline={experience.timeline}
          detail1={experience.detail1}
          detail2={experience.detail2}
        />
      ))}
    </div>
  );
};

export default Experience;
