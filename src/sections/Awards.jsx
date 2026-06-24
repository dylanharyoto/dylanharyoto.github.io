import React, { useState } from "react";
import SectionHeading from "../components/SectionHeading";

const awards = [
  {
    image: "/award_1.jpg",
    title: "Presidential Student Leadership Award",
    organization: "The Hong Kong Polytechnic University",
    date: "March 26, 2024",
    description: "Recognized for outstanding leadership and community impact.",
  },
  {
    image: "/award_2.jpg",
    title: "Merit Award - Digital Economy",
    organization: "Hong Kong Techathon",
    date: "January 28, 2024",
    description: "Awarded for innovative solutions in digital transformation.",
  },
  {
    image: "/award_3.jpg",
    title: "2nd Runner Up & Best GIS Award",
    organization: "PolyHack",
    date: "June 24, 2023",
    description: "Honored for excellence in geospatial technology and teamwork.",
  },
  {
    image: "/award_4.jpg",
    title: "Bronze Medalist & Best Innovation",
    organization: "World Robot Olympiad",
    date: "November 15, 2020",
    description: "Celebrated for creative robotics design and execution.",
  },
  {
    image: "/award_5.jpg",
    title: "Gold Medalist",
    organization: "Indonesian Robotics Olympiad",
    date: "September 7, 2019",
    description: "Achieved top honors in national robotics competition.",
  },
  {
    image: "/award_6.jpg",
    title: "1st Place Winner",
    organization: "Mechatronics Day 4.0",
    date: "October 21, 2018",
    description: "Recognized for superior performance in mechatronics challenges.",
  },
];

const Awards = () => {
  const [flipped, setFlipped] = useState(new Array(awards.length).fill(false));

  const toggleFlip = (index) => {
    setFlipped((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <section
      id="awards"
      className="bg-theme min-h-screen w-full scroll-mt-24 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-36 2xl:px-60 pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 text-theme"
    >
      <SectionHeading
        index="05"
        label="RECOGNITION"
        title="Celebrating Excellence"
        subtitle="Honors and Recognitions that Shine Bright"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {awards.map((award, index) => (
          <div key={index} style={{ perspective: "1000px" }}>
            <div
              className="relative w-full min-h-[320px] sm:min-h-[340px] transition-transform duration-500"
              style={{
                transformStyle: "preserve-3d",
                transform: flipped[index] ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 bg-card border border-soft rounded-xl shadow-lg flex flex-col items-center p-3 sm:p-4"
                style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
              >
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-36 sm:h-40 object-cover rounded-xl"
                />
                <div className="flex-1 flex flex-col items-center justify-between min-h-0 w-full">
                  <div className="text-center">
                    <h5 className="font-display text-sm sm:text-base font-semibold text-accent mt-2">
                      {award.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-muted mt-1">{award.organization}</p>
                    <p className="font-mono text-xs sm:text-sm text-muted">{award.date}</p>
                  </div>
                  <button
                    className="btn-accent font-semibold py-1.5 px-3 text-sm rounded-full transition duration-300 hover:scale-105 mt-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFlip(index);
                    }}
                  >
                    Show Details
                  </button>
                </div>
              </div>
              {/* Back */}
              <div
                className="absolute inset-0 bg-card-content border border-soft rounded-xl shadow-lg flex flex-col items-center p-3 sm:p-4"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-16 h-16 rounded-md border-2 border-accent object-cover"
                />
                <div className="flex-1 flex flex-col items-center justify-between min-h-0 w-full">
                  <div className="text-center">
                    <h5 className="font-display text-sm sm:text-base font-semibold text-accent mt-2">
                      {award.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-theme mt-2">{award.description}</p>
                  </div>
                  <button
                    className="btn-accent font-semibold py-1.5 px-3 text-sm rounded-full transition duration-300 hover:scale-105 mt-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFlip(index);
                    }}
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;