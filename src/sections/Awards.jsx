import React, { useState } from "react";

const awards = [
  {
    image: "/a9.jpg",
    title: "Presidential Student Leadership Award",
    organization: "The Hong Kong Polytechnic University",
    date: "March 26, 2024",
    description: "Recognized for outstanding leadership and community impact.",
  },
  {
    image: "/a8.jpg",
    title: "Merit Award - Digital Economy",
    organization: "Hong Kong Techathon",
    date: "January 28, 2024",
    description: "Awarded for innovative solutions in digital transformation.",
  },
  {
    image: "/a7.jpg",
    title: "2nd Runner Up & Best GIS Award",
    organization: "PolyHack",
    date: "June 24, 2023",
    description: "Honored for excellence in geospatial technology and teamwork.",
  },
  {
    image: "/a1.jpg",
    title: "Bronze Medalist & Best Innovation Award",
    organization: "World Robot Olympiad",
    date: "November 15, 2020",
    description: "Celebrated for creative robotics design and execution.",
  },
  {
    image: "/a3.jpg",
    title: "Gold Medalist",
    organization: "Indonesian Robotics Olympiad",
    date: "September 7, 2019",
    description: "Achieved top honors in national robotics competition.",
  },
  {
    image: "/a4.jpg",
    title: "1st Place Winner",
    organization: "Mechatronics Day 4.0",
    date: "October 21, 2018",
    description: "Recognized for superior performance in mechatronics challenges.",
  },
];

const Awards = () => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    console.log("Clicked card, current state:", flipped);
    setFlipped((prev) => {
      const newState = !prev;
      console.log("New state:", newState);
      return newState;
    });
  };

  // Test with one card first
  const award = awards[0];

  return (
    <div
      id="awards"
      className="bg-[#0c1c24] min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 xl:px-36 2xl:px-60 py-10 sm:py-16 md:py-20 lg:pt-24 xl:pt-36 text-white"
    >
      <div className="text-center mb-8 sm:mb-12">
        <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          Celebrating Excellence
        </h4>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-2">
          Honors and Recognitions that Shine Bright
        </p>
      </div>
      <div className="grid grid-cols-1 max-w-sm mx-auto">
        <div style={{ perspective: "1000px" }}>
          <div
            className="relative w-full h-96 transition-transform duration-500 cursor-pointer"
            style={{
              transformStyle: "preserve-3d",
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
            onClick={toggleFlip}
          >
            {/* Front */}
            <div
              className="absolute inset-0 bg-gray-900 rounded-xl shadow-lg flex flex-col items-center p-4"
              style={{ backfaceVisibility: "hidden" }}
            >
              <img
                src={award.image}
                alt={award.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <h5 className="text-base sm:text-lg font-semibold text-[#34fb7b] mt-4 text-center">
                {award.title}
              </h5>
            </div>
            {/* Back */}
            <div
              className="absolute inset-0 bg-gray-800 rounded-xl shadow-lg flex flex-col items-center p-4"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <img
                src={award.image}
                alt={award.title}
                className="w-20 h-20 rounded-md border-2 border-[#34fb7b] object-cover"
              />
              <h5 className="text-base sm:text-lg font-semibold text-[#34fb7b] mt-2">
                {award.title}
              </h5>
              <p className="text-sm sm:text-base text-gray-300 mt-2">{award.organization}</p>
              <p className="text-sm sm:text-base text-gray-300">{award.date}</p>
              <p className="text-sm sm:text-base text-gray-200 mt-4 flex-1">{award.description}</p>
              <button
                className="bg-[#34fb7b] text-black font-semibold py-2 px-4 rounded-full hover:bg-[#2de069] transition duration-300 mt-4"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("Button clicked, no flip");
                }}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;