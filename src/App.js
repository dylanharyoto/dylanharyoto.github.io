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
          <div className="nav-left">
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
              <h6>ddh</h6>
            </a>
          </div>
          <div>
            <a onClick={() => scrollSection("about")}>About</a>
            <a onClick={() => scrollSection("experiences")}>Experiences</a>
            <a onClick={() => scrollSection("projects")}>Projects</a>
            <a onClick={() => scrollSection("activities")}>Activities</a>
            <a onClick={() => scrollSection("awards")}>Awards</a>
          </div>
          <div className="nav-right">
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
                  required
                />
                <a>
                  <button>Send</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="about">
          <div className="heading">
            <h4>Unveiling the Real Me</h4>
            <p>Revealing the Person Behind the Story</p>
          </div>
          <div className="details">
            <h6>
              I am a penultimate-year <span>Computer Science</span> student with
              a minor in <span>Finance</span> at{" "}
              <a
                href="https://www.topuniversities.com/universities/hong-kong-polytechnic-university"
                target="_blank"
              >
                <span>PolyU</span>
              </a>
              .
            </h6>
            <p>
              I work for 12 hours, followed by a 1-hour lunch, a 1-hour dinner,
              a 2-hour break, and 8 hours of sleep every day.{" "}
            </p>
            <h6>
              I am <span>ambitious</span> and <span>hardworking</span> to
              achieve my goals with an <span>optimistic</span> mindset.
            </h6>
            <p>
              Watch the video, find my coding skills below, and feel free to
              grab my resume{" "}
              <a href="./Resume.pdf" download>
                <span>here</span>
              </a>
              !
            </p>
          </div>
          <div className="wrapper">
            <iframe
              src="https://www.youtube.com/embed/5YIev0D1_ck"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="skills">
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
        </div>
        <div id="experiences">
          <div className="heading">
            <h4>Journey of Success</h4>
            <p>Moments from My Career Path</p>
          </div>
          {/* FIRST */}
          <div className="box">
            <div className="image-box">
              <div className="image-border"></div>
              <img src="" />
            </div>
            <div className="dotline">
              <div className="dot"></div>
              <div className="line"></div>
            </div>
            <div className="details">
              <p>
                <span>July 2024</span>
              </p>
              <h5>Incoming Software Engineer Intern</h5>
              <a href="https://www.careerhackers.io/pro/" target="_blank">
                <p>
                  <i>
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
                  </i>
                </p>
              </a>
            </div>
          </div>
          {/* SECOND */}
          <div className="box">
            <div className="image-box">
              <div className="image-border"></div>
              <img src="w4.png" />
            </div>
            <div className="dotline">
              <div className="dot"></div>
              <div className="line"></div>
            </div>
            <div className="details">
              <p>
                <span>June 2024 - Present</span>
              </p>
              <h5>Software Engineer Intern</h5>
              <a href="https://www.castco.com.hk/eng/home" target="_blank">
                <p>
                  <i>
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
                  </i>
                </p>
              </a>
              <br />
              <ul>
                <li>
                  <p>
                    Deployed <span>Traccar</span> on <span>Linux</span>,
                    connected to <span>Microsoft SQL Server</span>, and used{" "}
                    <span>API</span> in <span>JavaScript</span> for real-time
                    data.
                  </p>
                </li>
                <li>
                  <p>
                    Improved the internal company app for product registration
                    using <span>C#</span> and <span>SQL</span> by adding
                    detailed filtering options.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* THIRD */}
          <div className="box">
            <div className="image-box">
              <div className="image-border"></div>
              <img src="w3.png" />
            </div>
            <div className="dotline">
              <div className="dot"></div>
              <div className="line"></div>
            </div>
            <div className="details">
              <p>
                <span>August 2023 - Present</span>
              </p>
              <h5>Undergraduate Researcher</h5>
              <a href="https://www.polyu.edu.hk/en/gs/" target="_blank">
                <p>
                  <i>
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
                  </i>
                </p>
              </a>
              <br />
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
          </div>
          {/* FOURTH */}
          <div className="box">
            <div className="image-box">
              <div className="image-border"></div>
              <img src="w2.png" />
            </div>
            <div className="dotline">
              <div className="dot"></div>
              <div className="line"></div>
            </div>
            <div className="details">
              <p>
                <span>June 2023 - August 2023</span>
              </p>
              <h5>Data Analyst Intern</h5>
              <a href="https://hutchisonports.com/en/" target="_blank">
                <p>
                  <i>
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
                  </i>
                </p>
              </a>
              <br />
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
          </div>
          {/* FIFTH */}
          <div className="box">
            <div className="image-box">
              <div className="image-border"></div>
              <img src="w1.png" />
            </div>
            <div className="dotline">
              <div className="dot"></div>
            </div>
            <div className="details">
              <p>
                <span>February 2023 - August 2023</span>
              </p>
              <h5>Student Research Assistant</h5>
              <a href="https://www.polyu.edu.hk/comp/" target="_blank">
                <p>
                  <i>
                    Dept. of Computing, The Hong Kong Polytechnic University
                    {"  "}
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
                  </i>
                </p>
              </a>
              <br />
              <ul>
                <li>
                  <p>
                    Installed <span>LoRa</span> communication on{" "}
                    <span>Raspberry Pi</span> using <span>MKR WAN 1310</span>,
                    enhancing the system’s wireless communication capabilities.
                  </p>
                </li>
                <li>
                  <p>
                    Conducted an experiment on a server-client connection using
                    <span>SSH</span> and <span>X Window</span> to optimize the
                    communication.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="projects">
          <div className="heading">
            <h4>Inspiring Creations</h4>
            <p>Ventures That Pushed Boundaries</p>
          </div>
          <div className="inner">
            <input type="radio" name="slider" id="s2" checked />
            <input type="radio" name="slider" id="s3" checked />
            <input type="radio" name="slider" id="s4" checked />
            <input type="radio" name="slider" id="s5" checked />
            <input type="radio" name="slider" id="s1" checked />
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
                <h4>More to come!</h4>
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
            <h4>Leading by Example</h4>
            <p>Making a Difference through Guiding Others</p>
          </div>
          <div className="img-left">
            <img src="l1.jpg" />
            <div className="infos-right">
              <div>
                <h4>Student Ambassador</h4>
                <a href="https://competition.acrc.hku.hk/">
                  <p>
                    <i>
                      HSBC/HKU Business Case Competition{" "}
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
                    </i>
                  </p>
                </a>
              </div>
              <div className="details-right">
                <ul>
                  <li>
                    <p>
                      Selected as one of the 30+ student ambassadors in charge
                      of guiding case preparation and presentation.
                    </p>
                  </li>
                  <li>
                    <p>
                      Successfully guided my team from the preparation round to
                      reach the final round of the competition.
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  <span>May 2024 | Hong Kong SAR</span>
                </p>
              </div>
            </div>
          </div>
          <div className="img-right">
            <img src="l2.jpg" />
            <div className="infos-left">
              <div>
                <h4>Vice President</h4>
                <a
                  href="https://gdsc.community.dev/hong-kong-polytechnic-university-hong-kong-hong-kong/"
                  target="_blank"
                >
                  <p>
                    <i>
                      Google Developer Student Clubs PolyU{" "}
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
                    </i>
                  </p>
                </a>
              </div>
              <div className="details-left">
                <ul>
                  <li>
                    <p>
                      Selected from 100+ candidates to lead a team of technical
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
                <p>
                  <span>Aug 2023 - Present | Hong Kong SAR</span>
                </p>
              </div>
            </div>
          </div>
          <div className="img-left">
            <img src="l3.jpg" />
            <div className="infos-right">
              <div>
                <h4>Service Project Lead</h4>
                <a href="https://aeint.org/">
                  <p>
                    African Evangelistic Enterprise{" "}
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
              </div>
              <div className="details-right">
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
                <p>
                  <span>Mar 2023 - Aug 2023 | Rwanda, Africa</span>
                </p>
              </div>
            </div>
          </div>
          <div className="img-right">
            <img src="l4.jpg" />
            <div className="infos-left">
              <div>
                <h4>Technology Innovation Lead</h4>
                <a href="https://hkpolyuracing.com/">
                  <p>
                    <i>
                      PolyU E-Formula Racing Team{" "}
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
                    </i>
                  </p>
                </a>
              </div>
              <div className="details-left">
                <ul>
                  <li>
                    <p>
                      Developed RC car learnign curriculum catered specifically
                      for secondary school students.
                    </p>
                  </li>
                  <li>
                    <p>
                      Built the RC car using Arduino and provided online video
                      lectures and tutorials about basic soldering.
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  <span>Nov 2022 - Jun 2023 | Hong Kong SAR</span>
                </p>
              </div>
            </div>
          </div>
          <div className="img-left">
            <img src="l5.jpg" />
            <div className="infos-right">
              <div>
                <h4>Technical Lead</h4>
                <a
                  href="https://gdsc.community.dev/hong-kong-polytechnic-university-hong-kong-hong-kong/"
                  target="_blank"
                >
                  <p>
                    <i>
                      Google Developer Student Clubs PolyU{" "}
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
                    </i>
                  </p>
                </a>
              </div>
              <div className="details-right">
                <ul>
                  <li>
                    <p>
                      Hosted beginner workshop on robotics and programming using
                      Lego Mindstorms EV3 for 20+ non-tech students.
                    </p>
                  </li>
                  <li>
                    <p>
                      Collaborated with executive committees from other
                      divisions to plan and prepare for upcoming events.
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  <span>Oct 2022 - Jul 2023 | Hong Kong SAR</span>
                </p>
              </div>
            </div>
          </div>
          <div className="img-right">
            <img src="l6.jpg" />
            <div className="infos-left">
              <div>
                <h4>Country Representative</h4>
                <a href="https://wro-association.org/">
                  <p>
                    <i>
                      World Robot Olympiad{" "}
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
                    </i>
                  </p>
                </a>
              </div>
              <div className="details-left">
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
                <p>
                  <span>Jun 2019 - Nov 2020 | Gyor, Hungary</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="awards">
          <div className="heading">
            <h4>Celebrating Excellence</h4>
            <p>Honors and Recognitions that Shine Bright</p>
          </div>
          <div></div>
          <div></div>
          <div className="box">
            <img src="a9.jpg" />
            <div>
              <h5>
                <span>Presidential Student Leadership Award</span>
              </h5>
              <p>The Hong Kong Polytechnic University</p>
              <p>March 26, 2024</p>
            </div>
          </div>
          <div className="box">
            <img src="a8.jpg" />{" "}
            <div>
              <h5>
                <span>Merit Award - Digital Economy</span>
              </h5>
              <p>Hong Kong Techathon</p>
              <p>January 28, 2024</p>
            </div>
          </div>
          <div className="box">
            <img src="a7.jpg" />{" "}
            <div>
              <h5>
                <span>2nd Runner Up & Best GIS Award</span>
              </h5>
              <p>PolyHack</p>
              <p>June 24, 2023</p>
            </div>
          </div>
          <div className="box">
            <img src="a1.jpg" />{" "}
            <div>
              <h5>
                <span>Bronze Medalist & Best Innovation Award</span>
              </h5>
              <p>World Robot Olympiad</p>
              <p>November 15, 2020</p>
            </div>
          </div>
          <div className="box">
            <img src="a3.jpg" />{" "}
            <div>
              <h5>
                <span>Gold Medalist</span>
              </h5>
              <p>Indonesian Robotics Olympiad</p>
              <p>September 7, 2019</p>
            </div>
          </div>
          <div className="box">
            <img src="a4.jpg" />{" "}
            <div>
              <h5>
                <span>1st Place Winner</span>
              </h5>
              <p>Mechatronics Day 4.0</p>
              <p>October 21, 2018</p>
            </div>
          </div>
        </div>
      </main>
      <footer>
        {/* <div className="heading">
          <h4>Leading by Example</h4>
          <p>Making a Difference through Guiding Others</p>
        </div>
        <div className="fields">
          <input
            type="text"
            id="firstname"
            name="First Name"
            placeholder="First Name"
          />
          <input
            type="text"
            id="lastname"
            name="Last Name"
            placeholder="Last Name"
          />
          <input
            type="text"
            id="firstname"
            name="First Name"
            placeholder="First Name"
          />
          <input
            type="text"
            id="lastname"
            name="Last Name"
            placeholder="Last Name"
          />
        </div> */}
      </footer>
    </div>
  );
}

export default App;
