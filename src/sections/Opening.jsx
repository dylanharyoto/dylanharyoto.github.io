import React, { useState, useEffect } from "react";
import Typed from "typed.js";

const Opening = () => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    const typed = new Typed("#typed-element", {
      strings: [
        "Hi there👋, I am Dominicus <span class='text-[#34fb7b]'>Dylan</span> Haryoto,<br/>a Software Engineer Intern at <span class='text-[#34fb7b]'>BNP Paribas</span>!",
        "Welcome to my personal collections. Let's connect!",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      smartBackspace: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
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
    <div id="opening" className="w-full relative h-screen bg-cover animate-bg-animate">
      <div className="w-full absolute inset-0 bg-black bg-opacity-70">
        <div className="w-full h-full flex flex-col justify-center items-start px-10 md:px-36">
          <h1 className="text-white text-[3.86rem] md:text-5xl leading-[4.5rem] md:leading-[5rem]">
            <span id="typed-element"></span>
          </h1>
          {/* <div className="flex flex-col md:flex-row gap-2.5 w-full">
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
              className="w-full md:w-2/5 p-2.5 text-white bg-transparent border-[3px] border-white rounded-full placeholder:text-white placeholder:opacity-70"
            />
            <button
              onClick={handleSubmit}
              className="bg-[#34fb7b] text-black font-semibold py-2.5 px-5 rounded-full transition duration-500 ease-in-out hover:bg-[#2de069]"
            >
              Send
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Opening;
