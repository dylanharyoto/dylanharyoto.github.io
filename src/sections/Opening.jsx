import React, { useState } from "react";
import { theme } from "../constants/theme";

const Opening = () => {
  const [email, setEmail] = useState("");
  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = async () => {
    if (!email) {
      alert("Please enter a valid email address!");
      return;
    }
    try {
      const response = await fetch(
        "https://personal-website-backend-pxub.onrender.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      if (response.ok) {
        alert("Confirmation email sent successfully!");
        setEmail("");
      } else {
        console.error("Failed to send the email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email: ", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div id="opening" className="relative px-[140px] h-screen bg-cover">
      <style>
        {`
          #opening {
            animation: animate 16s ease-in-out infinite;
          }
          @keyframes animate {
            0% { background-image: url(a1.JPG); }
            25% { background-image: url(a2.JPG); }
            50% { background-image: url(a3.JPG); }
            75% { background-image: url(a4.JPG); }
          }
        `}
      </style>
      <div
        id="opening-outer"
        className="absolute inset-0 w-full h-screen bg-black bg-opacity-70"
      >
        <div
          id="opening-inner"
          className="h-screen px-[140px] flex flex-col justify-center items-start"
        >
          <h4 className="text-[2.25rem] m-0 p-0 font-light">
            Hi there👋, I am
          </h4>
          <h1 className="text-[5rem] m-0 p-0 font-light">
            Dominicus <span className="text-primary">Dylan</span> Haryoto
          </h1>
          <h6 className="text-[1.5rem] m-0 p-0 font-light">
            Welcome to my personal collections. Let's connect!
          </h6>
          <hr className="w-full border-white" />
          <div className="w-full flex justify-center gap-2.5 mt-2.5">
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
              className="w-[40%] p-2.5 text-base border-2 border-white rounded-[40px] bg-transparent text-white placeholder:text-white placeholder:opacity-70"
            />
            <button
              onClick={handleSubmit}
              className="cursor-pointer border-0 text-base font-semibold rounded-[2.5rem] px-5 py-2.5 m-1.25 bg-primary text-black transition duration-500 hover:bg-opacity-80"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opening;