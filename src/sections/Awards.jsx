import React, { useState } from "react";

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
    console.log(`Clicked card ${index}, current state:`, flipped[index]);
    setFlipped((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      console.log(`New state for card ${index}:`, newState[index]);
      return newState;
    });
  };

  return (
    <div
      id="awards"
      className="bg-theme min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 xl:px-36 2xl:px-60 py-10 sm:py-16 md:py-20 lg:pt-24 xl:pt-36 text-theme"
    >
      <div className="text-center mb-8 sm:mb-12">
        <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-theme">
          Celebrating Excellence
        </h4>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-2">
          Honors and Recognitions that Shine Bright
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {awards.map((award, index) => (
          <div key={index} style={{ perspective: "1000px" }}>
            <div
              className="relative w-full min-h-[320px] transition-transform duration-500"
              style={{
                transformStyle: "preserve-3d",
                transform: flipped[index] ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 bg-card rounded-xl shadow-lg flex flex-col items-center p-3 sm:p-4"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-36 sm:h-40 object-cover rounded-xl"
                />
                <div className="flex-1 flex flex-col items-center justify-between min-h-0 w-full">
                  <div className="text-center">
                    <h5 className="text-sm sm:text-base font-semibold text-accent mt-2">
                      {award.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {award.organization}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      {award.date}
                    </p>
                  </div>
                  <button
                    className="btn-accent font-semibold py-1.5 px-3 text-sm rounded-full transition duration-300 mt-2"
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
                className="absolute inset-0 bg-card-content rounded-xl shadow-lg flex flex-col items-center p-3 sm:p-4"
                style={{
                  backfaceVisibility: "hidden",
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
                    <h5 className="text-sm sm:text-base font-semibold text-accent mt-2">
                      {award.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 mt-2">
                      {award.description}
                    </p>
                  </div>
                  <button
                    className="btn-accent font-semibold py-1.5 px-3 text-sm rounded-full transition duration-300 mt-2"
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
    </div>
  );
};

export default Awards;