import React from "react";

const Awards = () => {
  return (
    <div
      id="awards"
      className="py-16 md:py-24 bg-gradient-to-b from-transparent via-gray-900 to-transparent"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h4 className="text-3xl font-bold">Celebrating Excellence</h4>
          <p className="text-lg text-gray-400">
            Honors and Recognitions that Shine Bright
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              img: "a9.jpg",
              title: "Presidential Student Leadership Award",
              org: "The Hong Kong Polytechnic University",
              date: "March 26, 2024",
            },
            {
              img: "a8.jpg",
              title: "Merit Award - Digital Economy",
              org: "Hong Kong Techathon",
              date: "January 28, 2024",
            },
            {
              img: "a7.jpg",
              title: "2nd Runner Up & Best GIS Award",
              org: "PolyHack",
              date: "June 24, 2023",
            },
            {
              img: "a1.jpg",
              title: "Bronze Medalist & Best Innovation Award",
              org: "World Robot Olympiad",
              date: "November 15, 2020",
            },
            {
              img: "a3.jpg",
              title: "Gold Medalist",
              org: "Indonesian Robotics Olympiad",
              date: "September 7, 2019",
            },
            {
              img: "a4.jpg",
              title: "1st Place Winner",
              org: "Mechatronics Day 4.0",
              date: "October 21, 2018",
            },
          ].map((award, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 text-center"
            >
              <img
                src={`/images/${award.img}`}
                alt={award.title}
                className="w-full h-48 object-cover rounded-2xl mb-4"
              />
              <h5 className="text-xl font-semibold">
                <span className="text-green-400">{award.title}</span>
              </h5>
              <p className="text-gray-400">{award.org}</p>
              <p className="text-gray-500 text-sm">{award.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
