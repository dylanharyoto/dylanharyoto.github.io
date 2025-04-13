import React, { useState } from "react";

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
      const response = await fetch("https://personal-website-backend-pxub.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
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
    <div
      id="opening"
      className="relative px-[5vh] md:px-[140px] h-screen bg-cover"
    >
      <div id="opening-outer" className="absolute inset-0 w-full h-screen bg-black/70">
        <div
          id="opening-inner"
          className="h-screen px-[5vh] md:px-[140px] flex flex-col justify-center items-start"
        >
          <h4 className="text-[1.75rem] md:text-[2.25rem] p-0 m-0 font-thin">
            Hi there👋, I am
          </h4>
          <h1 className="text-[3.86rem] md:text-[5rem] p-0 m-0 font-thin">
            Dominicus <span className="text-custom-green">Dylan</span> Haryoto
          </h1>
          <h6 className="text-[1.16rem] md:text-[1.5rem] p-0 m-0 font-thin">
            Welcome to my personal collections. Let's connect!
          </h6>
          <hr className="w-full" />
          <div className="w-full flex justify-center gap-2.5 mt-2.5">
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
              className="w-full md:w-[40%] p-2.5 text-base border-[3px] border-white rounded-[40px] bg-transparent text-white placeholder:text-white/70"
            />
            <a className="text-white no-underline w-auto rounded-[20px] transition duration-500 hover:underline hover:cursor-pointer hover:text-custom-green">
              <button
                onClick={handleSubmit}
                className="cursor-pointer border-0 text-base font-semibold rounded-full px-5 py-2.5 m-1 bg-custom-green text-black transition duration-500"
              >
                Send
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opening;