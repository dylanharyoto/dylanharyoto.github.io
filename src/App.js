import logo from "./logo.svg";
import "./App.css";

function App() {
  const scrollSection = (sectionID) => {
    document.getElementById(sectionID).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div id="body">
      <header>
        <nav>
          <div id="nav-left">
            <div className="icon-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="black"
                class="bi bi-gender-male"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
                />
              </svg>
            </div>
            <a href="#opening">
              <h6>dylanharyoto</h6>
            </a>
          </div>
          <div>
            <a onClick={() => scrollSection("about")}>About</a>
            <a onClick={() => scrollSection("experiences")}>Experiences</a>
            <a onClick={() => scrollSection("projects")}>Projects</a>
            <a onClick={() => scrollSection("activities")}>Activities</a>
            <a onClick={() => scrollSection("awards")}>Awards</a>
          </div>
          <div id="nav-right">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="white"
                class="bi bi-moon"
                viewBox="0 0 16 16"
              >
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
              </svg>
            </a>
          </div>
        </nav>
      </header>
      <main>
        <div id="opening">
          <div id="opening-outer">
            <div id="opening-inner">
              <h6>Hello &#128075;, I am</h6>
              <h1>
                Dominicus <span>Dylan</span> Haryoto
              </h1>
              <h5>Software Engineer Intern @ Career Hackers</h5>
              <hr />
              <div>
                <input
                  type="text"
                  placeholder="Email Address"
                  name="email"
                  required
                />
                <button>Send</button>
              </div>
            </div>
          </div>
        </div>
        <div id="about">
          {/* <div className="heading">
            <h4>Welcome. This is Dylan.</h4>
            <p>Dominicus Dylan Haryoto</p>
          </div> */}
          <div>
            <h6>
              I'm a <span>penultimate-year</span> undergraduate majoring in{" "}
              <span>Computer Science</span> with a minor of <span>Finance</span>{" "}
              at The Hong Kong Polytechnic University.
            </h6>
            <p>
              I enjoy working! Yes, you heard it right. I absolutely love
              working on projects, especially those that can have a positive
              impact on society. It's like solving the pressing issues
              experienced by everyone!
            </p>
            <h6>
              I am <span>ambitious</span> and <span>hardworking</span> to
              achieve my goals with an <span>optimistic</span> mindset.
            </h6>
            <p>
              By the way, check out the video on the --{">"}, which marks the
              first major milestone in my life!
            </p>
            <div>
              <a href="./Resume.pdf" download>
                <button>
                  You can also grab my amazing <span>Resume</span> here!
                </button>
              </a>
            </div>
          </div>
          <div className="wrapper">
            <iframe
              src="https://www.youtube.com/embed/5YIev0D1_ck"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <p>my vid</p>
          </div>
        </div>
        <div id="skills">
          <img src="s1.png" />
          <img src="s2.png" />
          <img src="s3.png" />
          <img src="s4.png" />
          <img src="s5.png" />
          <img src="s6.png" />
          <img src="s7.png" />
          <img src="s8.png" />
          <img src="s9.png" />
          <img src="s10.png" />
          <img src="s11.png" />
          <img src="s12.png" />
          <img src="s13.png" />
          <img src="s14.png" />
        </div>
        <div id="experiences">
          {/* FIRST */}
          <div className="images">
            {/* <img src="w11.png" alt="Image 1" className="image1" />
            <img src="w12.png" alt="Image 2" className="image2" /> */}
          </div>
          <div className="dotline">
            <div className="dot"></div>
            <div className="line"></div>
          </div>
          <div className="details">
            <p>July 2024</p>
            <h5>Incoming Software Engineer Intern</h5>
            <a href="https://www.careerhackers.io/pro/">
              <p>
                Career Hackers{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </p>
            </a>

            {/* <ul>
              <li>
                <p>
                  Secured admission to the Undergraduate Research and Innovation
                  Scheme with a grant of HK$30,000, supervised by Dr. Qixin
                  Wang.
                </p>
              </li>
              <li>
                <p>
                  Currently researching and proving the NP-hardness of an
                  algorithm for intra-cell channel time-slot scheduling for fire
                  evacuation.
                </p>
              </li>
            </ul> */}
          </div>
          {/* SECOND */}
          <div className="images">
            <img src="w4.png" className="image1" />
            <img src="w4.png" className="image2" />
          </div>
          <div className="dotline">
            <div className="dot"></div>
            <div className="line"></div>
          </div>
          <div className="details">
            <p>June 2024 - Present</p>
            <h5>Software Engineer Intern</h5>
            <a href="https://www.castco.com.hk/eng/home">
              <p>
                Castco Testing Centre Limited{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </p>
            </a>
            <ul>
              <li>
                <p>
                  Deployed <span>Traccar</span> on <span>Linux</span>, connected
                  to <span>Microsoft SQL Server</span>, and used{" "}
                  <span>API</span> in <span>JavaScript</span> for real-time
                  data.
                </p>
              </li>
              <li>
                <p>
                  Improved the internal company app for product registration
                  using <span>C#</span> and <span>SQL</span> by adding detailed
                  filtering options.
                </p>
              </li>
            </ul>
          </div>
          {/* THIRD */}
          <div className="images">
            <img src="w31.png" className="image1" />
            <img src="w32.png" className="image2" />
          </div>
          <div className="dotline">
            <div className="dot"></div>
            <div className="line"></div>
          </div>
          <div className="details">
            <p>August 2023 - Present</p>
            <h5>Undergraduate Researcher</h5>
            <a href="https://www.polyu.edu.hk/en/gs/">
              <p>
                Graduate School, The Hong Kong Polytechnic University{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </p>
            </a>
            <ul>
              <li>
                <p>
                  <span>1 out of 100</span> selected from <span>400+</span>{" "}
                  undergraduates to conduct research with a grant of{" "}
                  <span>HK$30,000</span>.
                </p>
              </li>
              <li>
                <p>
                  Designed an algorithm for intra-cell channel time scheduling{" "}
                  <span>(NP-Hard)</span> with a <span>25%</span> success rate.
                </p>
              </li>
            </ul>
          </div>
          {/* FOURTH */}
          <div className="images">
            <img src="w21.png" className="image1" />
            <img src="w22.png" className="image2" />
          </div>
          <div className="dotline">
            <div className="dot"></div>
            <div className="line"></div>
          </div>
          <div className="details">
            <p>June 2023 - August 2023</p>
            <h5>Data Analyst Intern</h5>
            <a href="https://hutchisonports.com/en/">
              <p>
                Hutchison Port Holdings{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </p>
            </a>
            <ul>
              <li>
                <p>
                  Utilized <span>PowerBI</span> to perform data analysis and
                  comparison on financial data from shipping line companies.
                </p>
              </li>
              <li>
                <p>
                  Used <span>Tableau</span> and released market reports about
                  import and export statistics of potential countries for
                  expansion.
                </p>
              </li>
            </ul>
          </div>
          {/* FIFTH */}
          <div className="images">
            <img src="w1.png" className="image1" />
            <img src="w1.png" className="image2" />
          </div>
          <div className="dotline">
            <div className="dot"></div>
          </div>
          <div className="details">
            <p>February 2023 - August 2023</p>
            <h5>Student Research Assistant</h5>
            <a href="https://www.polyu.edu.hk/comp/">
              <p>
                Department of Computing, The Hong Kong Polytechnic University{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </p>
            </a>
            <ul>
              <li>
                <p>
                  Installed LoRa communication on Raspberry Pi using MKR WAN
                  1310, enhancing the system’s wireless communication
                  capabilities.
                </p>
              </li>
              <li>
                <p>
                  Conducted an experiment on a server-client connection using
                  SSH and X Window to optimize the communication infrastructure.
                </p>
              </li>
            </ul>
          </div>

          {/* 
          <div className="dotline">
            <div className="dot"></div>
            <div className="line"></div>
          </div>
          <div>
            <h4>August 2023 - Present</h4>
            <h2>Vice President</h2>
            <h3>Google Developer Student Clubs PolyU</h3>
            <ul>
              <li>
                Collaborate with technical leads to organize engaging workshops
                covering topics related to artificial intelligence.
              </li>
              <li>
                Prepare and organize for the upcoming hackathon, PolyHack,
                ensuring a creative and collaborative environment for
                participants.
              </li>
            </ul>
          </div>
          <a href="https://gdsc.community.dev/the-hong-kong-polytechnic-university/">
            <button>Visit Website</button>
          </a>
          <div className="dotline">
            <div className="dot"></div>
            <div className="line"></div>
          </div>
          <div>
            <h4>December 2022 - Present</h4>
            <h2>Class Representative</h2>
            <h3>
              Department of Computing, The Hong Kong Polytechnic University
            </h3>
            <ul>
              <li>
                Chosen by faculty members to actively participate in semester
                meetings with professors addressing student learning
                experiences.
              </li>
              <li>
                Actively gathering constructive feedback from peers to
                contribute to the continuous refinement of the curriculum.
              </li>
            </ul>
          </div>
          <a href="https://www.polyu.edu.hk/en/comp/">
            <button>Visit Website</button>
          </a>
          <div className="dotline">
            <div className="dot"></div>
            <div className="line"></div>
          </div>
          <div>
            <h4>March 2023 - August 2023</h4>
            <h2>Project Volunteer</h2>
            <h3>African Evangelistic Enterprise</h3>
            <ul>
              <li>
                Installed solar-powered electricity to 400 households in rural
                areas, illuminating lives and fostering sustainable energy
                solutions.
              </li>
              <li>
                Implemented an advanced IoT system with an MPPT Controller,
                improving data tracking for more effective monitoring and
                analysis.
              </li>
            </ul>
          </div>
          <a href="https://www.aeerwanda.ngo/">
            <button>Visit Website</button>
          </a>
          <div className="dotline">
            <div className="dot"></div>
            <div className="line"></div>
          </div>
          <div>
            <h4>November 2022 - June 2023</h4>
            <h2>Innovation and Technology</h2>
            <h3>PolyU E-Formula Racing Team - 理工大學電動方程式賽車隊</h3>
            <ul>
              <li>
                Crafted a curriculum tailored for primary and secondary school
                students, focusing on the development of RC Cars.
              </li>
              <li>
                Spearheaded the modification and enhancement of the team’s
                website, with a keen emphasis on improving the UI/UX.
              </li>
            </ul>
          </div>
          <a href="https://hkpolyuracing.com">
            <button>Visit Website</button>
          </a>
          <div className="dotline">
            <div className="dot"></div>
          </div>
          <div>
            <h4>October 2022 - July 2023</h4>
            <h2>Technical Lead</h2>
            <h3>Google Developer Student Clubs PolyU</h3>
            <ul>
              <li>
                Facilitated introductory workshops on Lego Mindstorms EV3,
                catering to beginners and fostering hands-on learning
                experiences.
              </li>
              <li>
                Collaborated seamlessly with executive committee members from
                other divisions to plan and prepare for upcoming events.
              </li>
            </ul>
          </div>
          <a href="https://gdsc.community.dev/the-hong-kong-polytechnic-university/">
            <button>Visit Website</button>
          </a> */}
        </div>
        <div id="projects">
          <div className="heading">
            <h4>Built & Designed with Creativity</h4>
            <p>Click to see more.</p>
          </div>
          <div className="inner">
            <input type="radio" name="slider" id="s1" />
            <input type="radio" name="slider" id="s2" />
            <input type="radio" name="slider" id="s3" />
            <input type="radio" name="slider" id="s4" />
            <input type="radio" name="slider" id="s5" />
            <div class="boxes">
              <label htmlFor="s2" id="slide2">
                <h4>PolyShop</h4>
                <p>User-friendly online shopping system.</p>
                <a
                  href="https://github.com/dylanharyoto/Online-Shopping-System"
                  target="_blank"
                >
                  <button>Learn More</button>
                </a>
                <video muted autoPlay loop>
                  <source src="p2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </label>
              <label htmlFor="s3" id="slide3">
                <h4>Taskly</h4>
                <p>Command-line task management system.</p>
                <a
                  href="https://github.com/dylanharyoto/Command-Line-Task-Management-System"
                  target="_blank"
                >
                  <button>Learn More</button>
                </a>
                <video muted autoPlay loop>
                  <source src="p3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </label>
              <label htmlFor="s4" id="slide4">
                <h4>PolyWallet</h4>
                <p>User-friendly personal expense tracker</p>
                <a
                  href="https://github.com/dylanharyoto/Personal-Expense-Tracker"
                  target="_blank"
                >
                  <button>Learn More</button>
                </a>
                <video muted autoPlay loop>
                  <source src="p4.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </label>
              <label htmlFor="s5" id="slide5">
                <h4>More to come !</h4>
                <p>Visit my GitHub to see other projects!</p>
                <a
                  href="https://github.com/dylanharyoto?tab=repositories"
                  target="_blank"
                >
                  <button>Learn More</button>
                </a>
                <video muted autoPlay loop>
                  <source src="p5.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </label>
              <label htmlFor="s1" id="slide1">
                <h4>GoPark</h4>
                <p>Smart parking app for traffic congestion.</p>
                <a href="https://hello-gopark.github.io/" target="_blank">
                  <button>Learn More</button>
                </a>
                <video muted autoPlay loop>
                  <source src="p1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </label>
            </div>
          </div>
        </div>
        <div id="activities">
          <div className="heading">
            <h4>Built & Designed with Creativity</h4>
            <p>Click to see more.</p>
          </div>
          <div className="img-left">
            <img src="a1.jpg" />
            <div className="infos-right">
              <div>
                <h5>Student Ambassador</h5>
                <p>HSBC/HKU Business Case Competition</p>
              </div>
              <div className="details-right">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque in iaculis ante. Proin tempor accumsan felis vel
                  commodo. Duis vel odio eleifend, consequat est ut, luctus
                  velit. Nulla tincidunt elementum erat vel commodo.
                </p>
              </div>
              <div>
                <p>May 2024</p>
                <p>Hong Kong SAR</p>
              </div>
            </div>
          </div>
          <div className="img-right">
            <img src="a1.jpg" />
            <div className="infos-left">
              <div>
                <h5>Vice President</h5>
                <p>Google Developer Student Clubs PolyU</p>
              </div>
              <div className="details-left">
                <p>
                  Google Developer Student Clubs is a program by Google that
                  supports student-led communities interested in technology.
                </p>
                <ul>
                  <li>
                    <p>
                      Selected from 100 candidates to lead a team of technical
                      leads in organizing tech-related workshops.
                    </p>
                  </li>
                  <li>
                    <p>
                      Organized 5+ tech workshops accessible to 20,000+
                      undergraduates, masters, PhDs, and faculty members.
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <p>Aug 2023 - Present</p>
                <p>Hong Kong SAR</p>
              </div>
            </div>
          </div>
          <div className="img-left">
            <img src="a1.jpg" />
            <div className="infos-right">
              <div>
                <h5>Electrical Engineer</h5>
                <p>African Evangelistic Enterprise </p>
              </div>
              <div className="details-right">
                <p>
                  African Evangelistic Enterprise is an organization that
                  focuses on evangelism and community development across Africa.
                </p>
                <ul>
                  <li>
                    <p>
                      Led a team to install solar-powered electricity to 400+
                      rural households, providing light during dark hours.
                    </p>
                  </li>
                  <li>
                    <p>
                      Collaborated with technical team to implement an IoT
                      system with MPPT and intranet for remote monitoring.
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <p>Mar 2023 - Aug 2023</p>
                <p>Rwanda, Africa</p>
              </div>
            </div>
          </div>
          <div className="img-right">
            <img src="a1.jpg" />
            <div className="infos-left">
              <div>
                <h5>Technology Innovation Lead</h5>
                <p>PolyU E-Formula Racing Team - 理工大學電動方程式賽車隊</p>
              </div>
              <div className="details-left">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque in iaculis ante. Proin tempor accumsan felis vel
                  commodo. Duis vel odio eleifend, consequat est ut, luctus
                  velit. Nulla tincidunt elementum erat vel commodo.
                </p>
              </div>
              <div>
                <p>Nov 2022 - Jun 2023</p>
                <p>Hong Kong SAR</p>
              </div>
            </div>
          </div>
          <div className="img-left">
            <img src="a1.jpg" />
            <div className="infos-right">
              <div>
                <h5>Technical Lead</h5>
                <p>Google Developer Student Club PolyU</p>
              </div>
              <div className="details-right">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque in iaculis ante. Proin tempor accumsan felis vel
                  commodo. Duis vel odio eleifend, consequat est ut, luctus
                  velit. Nulla tincidunt elementum erat vel commodo.
                </p>
              </div>
              <div>
                <p>Oct 2022 - Jul 2023</p>
                <p>Hong Kong SAR</p>
              </div>
            </div>
          </div>
          <div className="img-right">
            <img src="a1.jpg" />
            <div className="infos-left">
              <div>
                <h5>Country Representative</h5>
                <p>World Robot Olympiad</p>
              </div>
              <div className="details-left">
                <p>
                  The World Robot Olympiad is an international robotics
                  competition through robot design and programming.
                </p>
                <ul>
                  <li>
                    <p>
                      Led the team through planning, task delegation, and
                      execution strategies, achieved top 18 in final round.
                    </p>
                  </li>
                  <li>
                    <p>
                      Responsible for robot design and logic programming,
                      successfully scored full points for the mission.
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <p>Jun 2019 - Nov 2020</p>
                <p>Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
        <div id="awards">
          <div className="heading">
            <h4>Built & Designed with Creativity</h4>
            <p>Click to see more.</p>
          </div>
          <div className="box">
            <img src="a9.jpg" />
            <div>
              <h5>Presidential Student Leadership Award</h5>
              <p>The Hong Kong Polytechnic University</p>
              <p>March 26, 2024</p>
            </div>
          </div>
          <div className="box">
            <img src="a8.jpg" />{" "}
            <div>
              <h5>Merit Award - Digital Economy</h5>
              <p>Hong Kong Techathon</p>
              <p>January 28, 2024</p>
            </div>
          </div>
          <div className="box">
            <img src="a7.jpeg" />{" "}
            <div>
              <h5>2nd Runner Up & Best GIS Award</h5>
              <p>PolyHack</p>
              <p>June 24, 2023</p>
            </div>
          </div>
          <div className="box">
            <img src="a1.jpg" />{" "}
            <div>
              <h5>Bronze Medalist & Best Innovation Award</h5>
              <p>World Robot Olympiad</p>
              <p>November 15, 2020</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
