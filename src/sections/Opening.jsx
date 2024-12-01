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
    <div id="opening">
      <div id="opening-outer">
        <div id="opening-inner">
          <h4>Hi there&#128075;, I am</h4>
          <h1>
            Dominicus <span>Dylan</span> Haryoto
          </h1>
          <h6>Welcome to my personal collections. Let's connect!</h6>
          <hr />
          <div>
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
            />
            <a>
              <button onClick={handleSubmit}>Send</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opening;
