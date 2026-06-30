import React, { useState, useEffect } from "react";
import Typed from "typed.js";

const Opening = () => {
  const [email, setEmail] = useState("");
  
  useEffect(() => {
    const typed = new Typed("#typed-element", {
      strings: [
        "Hi there👋, I am Dominicus <span class='accent-text'>Dylan</span> Haryoto,<br/>a Software Engineer Intern at <span class='accent-text'>BNP Paribas</span>!",
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

  return (
    <div id="opening" className="w-full relative min-h-screen bg-cover animate-bg-animate">
      <div className="w-full absolute inset-0 bg-black bg-opacity-70">
        <div className="w-full h-full flex flex-col justify-center items-start px-6 sm:px-10 md:px-20 lg:px-36">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl leading-tight md:leading-[5rem] max-w-4xl">
            <span id="typed-element"></span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Opening;