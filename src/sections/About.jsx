import React, { useEffect } from "react";
import Typed from "typed.js";
import SectionHeading from "../components/SectionHeading";

const About = () => {
  useEffect(() => {
    const typed = new Typed("#typed-element", {
      strings: [
        "Hi there 👋, I'm Dominicus <span class='accent-text'>Dylan</span> Haryoto.",
        "Software Engineer Intern at <span class='accent-text'>BNP Paribas</span>.",
      ],
      typeSpeed: 45,
      backSpeed: 20,
      loop: true,
      smartBackspace: true,
      html: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="about"
      className="bg-theme min-h-screen w-full scroll-mt-24 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-36 2xl:px-60 pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-12 sm:pb-16 flex items-center"
    >
      <div className="w-full max-w-6xl mx-auto">
        <SectionHeading
          index="01"
          label="ABOUT"
          title="Unveiling the Real Me"
          subtitle="Revealing the Person Behind the Story"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Terminal-style intro */}
          <div className="order-2 md:order-1 w-full animate-fade-up">
            <div className="bg-card border border-soft rounded-xl shadow-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-soft bg-card-content">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                <span className="ml-3 font-mono text-xs text-muted">whoami.sh</span>
              </div>
              <div className="p-5 sm:p-6 font-mono text-sm sm:text-base leading-relaxed text-theme min-h-[120px]">
                <p className="text-muted mb-1">$ ./whoami</p>
                <p>
                  <span id="typed-element"></span>
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-muted max-w-prose mt-6">
              Since my first year, I have let my passion for business and
              technology lead me. I have served as the Vice President of the
              Google Developer Student Club, undergone an exchange study at
              Nanyang Technological University, participated in hackathons,
              and worked as an intern with medium-sized and large,
              international enterprises. Click{" "}
              <a
                className="accent-text font-semibold hover:underline"
                href="https://www.polyu.edu.hk/en/sao/student-resources-and-support-section/outstanding-student-academy/sharing-corner/"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>{" "}
              to learn more about me!
            </p>
          </div>

          {/* Profile image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-up">
            <div className="relative">
              <div className="absolute -inset-2 rounded-xl border border-soft" />
              <img
                src="/osa.jpg"
                alt="Profile"
                className="relative w-full max-w-[230px] sm:max-w-xs md:max-w-md lg:max-w-lg h-auto object-cover border-[3px] border-accent rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 mt-10 sm:mt-14">
          {[...Array(11)].map((_, i) => (
            <img
              key={i}
              src={`skill_${i + 1}.png`}
              alt={`Skill ${i + 1}`}
              className="h-6 sm:h-8 md:h-10 lg:h-12 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;