import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <header>
        <a href="#opening"><h2>DDH</h2></a>
        <nav>
            <a href="#about-me">About Me</a>
            <a href="#experiences">Experiences</a>
            <a href="#awards">Awards</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    <main>
        <div id="opening">
            <div className="content">
                <img src="dylan1.png" className="me"/>
                <div>
                    <h1>Hi there,<br/>I'm Dominicus Dylan Haryoto</h1>
                    <h3>Computer Science Undergraduate at PolyU</h3><hr/>
                    <a href="#about-me"><button>About Me</button></a>
                </div>
            </div>
        </div>

        <div id="about-me">
            <h1>About Me</h1>
            <div className="content">
                <div>
                    <b>A freshman majoring in Computer Science at the Faculty of Engineering, The Hong Kong Polytechnic University.</b>
                    <p>Impact - the adjective I would use to describe the inventions of the creators of modern society, providing solutions that enable people to live better lives. Outstanding grades and olympiad victories; those awards, while critical for my future career, are incapable of providing a long-term effect on society.</p>
                    <p>Choosing a Computer Science major strengthens my ability to address real-world problems by solving complex problems in coding; challenging situations have always been my closest companion. With this in mind, my enthusiasm drives me to become a problem-solver, a game-changer capable of resolving society&#39;s major problems</p>
                    <a href="./Resume.pdf" download><button>Download Resume</button></a>
                </div>
                <div className="wrapper">
                    <iframe src="https://www.youtube.com/embed/5YIev0D1_ck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>

        <div id="experiences">
            <h1>Experiences</h1>
            <div className="content">
                <h2 className="subtitle">Work Experiences<hr/></h2>
                <div className="dotline">
                    <div className="dot"></div>
                    <div className="line"></div>
                </div>
                <div>
                    <h4>February 2023 - Present</h4>
                    <h2>Research Assistant</h2>
                    <h3>The Hong Kong Polytechnic University</h3>
                    <ul>
                        <li>Inputted the personal information of Indonesian labors into the government.</li>
                        <li>Worked with the internal teams to ensure that data is correct and consistent.</li>
                    </ul>
                </div> 
                <a href="https://www.polyu.edu.hk/en/comp/"><button>Visit Website</button></a> 
                <div className="dotline">
                    <div className="dot"></div>
                    <div className="line"></div>
                </div>
                <div>
                    <h4>September 2022 - December 2022</h4>
                    <h2>Data Entry Operator</h2>
                    <h3>Ministry of Foreign Affairs of the Republic of Indonesia</h3>
                    <ul>
                        <li>Inputted the personal information of Indonesian labors into the government.</li>
                        <li>Worked with the internal teams to ensure that data is correct and consistent.</li>
                    </ul>
                </div> 
                <a href="https://kemlu.go.id/hongkong/lc"><button>Visit Website</button></a> 
                <div className="dotline">
                    <div className="dot"></div>
                </div> 
                <div>
                    <h4>November 2022</h4>
                    <h2>Student Assistant</h2>
                    <h3>The Hong Kong Polytechnic University</h3>
                    <ul>
                        <li>Assisted guests for the International Conference of Service Learning from one venue to another.</li>
                        <li>Served guests for the International Conference of Service Learning with foods and drinks.</li>
                    </ul>
                </div> 
                <a href="https://www.polyu.edu.hk/sllo/icsl2022/"><button>Visit Website</button></a>
                <h2 className="subtitle">Volunteer Experiences<hr/></h2>
                <div className="dotline">
                    <div className="dot"></div>
                    <div className="line"></div>
                </div> 
                <div>
                    <h4>December 2022 - Present</h4>
                    <h2>Class Representative</h2>
                    <h3>Department of Computing, The Hong Kong Polytechnic University</h3>
                    <ul>
                        <li>Appointed as a continual class representative of the Department of Computing (COMP).</li>
                        <li>Collecting feedback from students about the academic curriculum for further improvement.</li>
                    </ul>
                </div> 
                <a href="https://www.polyu.edu.hk/en/comp/"><button>Visit Website</button></a> 

                <div className="dotline">
                    <div className="dot"></div>
                    <div className="line"></div>
                </div> 
                <div>
                    <h4>November 2022 - Present</h4>
                    <h2>STEM Education Initiative</h2>
                    <h3>PolyU E-Formula Racing Team - 理工大學電動方程式賽車隊</h3>
                    <ul>
                        <li>Developing the curriculum of RC Car construction for primary and secondary school students.</li>
                        <li>Experimenting using Arduino and Lego Mindstorms EV3 to build the RC Car.</li>
                    </ul>
                </div> 
                <a href="https://hkpolyuracing.com"><button>Visit Website</button></a>

                <div className="dotline">
                    <div className="dot"></div>
                </div> 
                <div>
                    <h4>October 2022 - Present</h4>
                    <h2>Technical Lead</h2>
                    <h3>Google Developer Student Club (GDSC) - PolyU</h3>
                    <ul>
                        <li>Introducing Lego Mindstorms EV3 for beginners through physical workshops.</li>
                        <li>Organizing events and preparing for upcoming competitions.</li>
                    </ul>
                </div> 
                <a href="https://gdsc.community.dev/the-hong-kong-polytechnic-university/"><button>Visit Website</button></a>
            </div>
        </div>

        <div id="awards">
            <h1>Awards</h1>
            <div className="content">
                <h2 className="subtitle">Competitions<hr/></h2>
                <div className="left">
                    <img src="a1.JPG" className="image"/>
                    <div>
                        <h2>World Robot Olympiad 2020</h2>
                        <h4>12 - 15 November 2020 | Montreal, Canada</h4><br/>
                        <b>Bronze Medal (3rd Place) in Regular Senior</b>
                        <p>It is the mission to design a robot that will need to locate the dike's weaknesses, 
                            find material to build reinforcement walls, install sandbags to protect houses, and notify their 
                            occupants that they have to evacuate.</p>
                        <div>
                            <a href="https://drive.google.com/file/d/1ptoGoisrxm6_9SSEPIXs8UCOUic5HP7K/view?usp=share_link" target="_blank"><button>View Certificate</button></a>&ensp;
                            <a href="https://youtu.be/u_6thGTL1FY" target="_blank"><button>Watch Video</button></a>
                        </div>   
                    </div>
                </div>
                <div className="right">
                    <div>
                        <h2>World Robot Olympiad 2019</h2>
                        <h4>8 - 10 November 2020 | Gyor, Hungary</h4><br/>
                        <b>Top 18th in Regular Senior</b>
                        <p>It is the mission to create a robot that modernizes the network within a city by installing
                                new wireless node devices and establishing an optical network between them.</p>
                        <div>
                            <a href="https://drive.google.com/file/d/1hSHcFeTnvNbnZvUr3iXFClPAooAuoTJb/view?usp=share_link" target="_blank"><button>View Certificate</button></a>&ensp;
                            <a href="https://youtu.be/CFJtxDJGZvk" target="_blank"><button>Watch Video</button></a>
                        </div>
                    </div>
                    <img src="a2.jpg" className="image"/>
                </div>
                <div className="left">
                    <img src="a3.JPG" className="image"/>
                    <div>
                        <h2>Indonesian Robotic Olympiad 2019</h2>
                        <h4>6 - 7 September 2019 | Surabaya, Indonesia</h4><br/>
                        <b>Gold Medal (1st Place) in Regular Senior</b>
                        <p>It is the mission to create a robot that modernizes the network within a city by installing
                            new wireless node devices and establishing an optical network between them.</p>
                        <div>
                            <a href="https://drive.google.com/file/d/1V7GEpbFfNJOZnRMy1buDauQFXe0PMoyM/view?usp=share_link" target="_blank"><button>View Certificate</button></a>&ensp;
                            <a href="https://youtu.be/ih-ab7itzrA" target="_blank"><button>Watch Video</button></a>
                        </div>   
                    </div>
                </div>
                <div className="right">
                    <div>
                        <h2>Mechatronics Day 4.0</h2>
                        <h4>19 - 21 October 2018 | Jakarta, Indonesia</h4><br/>
                        <b>First Winner in Wall-Following Bot</b>
                        <p>It is the mission to build robots which can follow the wall (which might be curved) and pass 
                            through various obstacles, including speed bump, bridge, and water. </p>
                        <div>
                            <a href="https://drive.google.com/file/d/1TjhbFPFsUwa1siwQt8V3pEkQP_pzUCo6/view?usp=share_link" target="_blank"><button>View Certificate</button></a>&ensp;
                            <a href="https://youtube.com/shorts/Oa0pXM7elh4?feature=share" target="_blank"><button>Watch Video</button></a>
                        </div>
                    </div>
                    <img src="a4.jpg" className="image"/>
                </div>
                <div className="left">
                    <img src="a5.jpeg" className="image"/>
                    <div className="details">
                        <h2>Indonesian Robotic Olympiad 2015</h2>
                        <h4>19 - 20 September 2015 | Surabaya, Indonesia</h4><br/>
                        <b>Sixth Place in Regular Elementary</b>
                        <p>It is the mission to build robots that can investigate and explore different environments.
                                This game challenges you to dive and explore under the sea for pearls. </p>
                        <div>
                            <a href="https://drive.google.com/file/d/1EQ-3OaHy4Z21CAFcMsZrWA9e5Mh7jMaX/view?usp=share_link" target="_blank"><button>View Certificate</button></a>&ensp;
                            <a href="https://gdsc.community.dev/the-hong-kong-polytechnic-university/" target="_blank"><button>Watch Video</button></a>
                        </div>   
                    </div>
                </div>
                <h2 className="subtitle">Certifications<hr/></h2>

                <div className="entry">
                    <img src="l4.jpg" className="logo"/>
                    <h2>Fundamentals of Deep Learning</h2>
                    <h4>by Nvidia</h4>
                    <a href="https://courses.nvidia.com/certificates/00ca66473e0b4512863a6fde24baf468/" target="_blank"><button>View Certificate</button></a>
                </div>

                <div className="entry">
                    <img src="l2.jpeg" className="logo"/>
                    <h2>Basic Technical Support</h2>
                    <h4>by Google</h4>
                    <a href="https://www.coursera.org/account/accomplishments/certificate/EMMG456QJVEA" target="_blank"><button>View Certificate</button></a>
                </div>

                <div className="entry">
                    <img src="l1.png" className="logo"/>
                    <h2>SQL (Basic)</h2>
                    <h4>by HackerRank</h4>
                    <a href="https://www.hackerrank.com/certificates/16b63a9a1fd4" target="_blank"><button>View Certificate</button></a>
                </div>

                <div className="entry">
                    <img src="l1.png" className="logo"/>
                    <h2>SQL (Intermediate)</h2>
                    <h4>by HackerRank</h4>
                    <a href="https://www.hackerrank.com/certificates/869795421230" target="_blank"><button>View Certificate</button></a>
                </div>

                <div className="entry">
                    <img src="l5.jpg" className="logo"/>
                    <h2>Computer Science Career Path</h2>
                    <h4>by Codecademy</h4>
                    <a href="https://www.codecademy.com/profiles/dylanharyoto/certificates/5b5001a11d176d7acd8b2bf8" target="_blank"><button>View Certificate</button></a>
                </div>

                <div className="entry">
                    <img src="l1.png" className="logo"/>
                    <h2>JavaScript (Basic)</h2>
                    <h4>by HackerRank</h4>
                    <a href="https://www.hackerrank.com/certificates/d259ffefc554" target="_blank"><button>View Certificate</button></a>
                </div>

                <div className="entry">
                    <img src="l3.png" className="logo"/>
                    <h2>JavaScript Algorithms and Data Structures</h2>
                    <h4>by freeCodeCamp</h4>
                    <a href="https://www.freecodecamp.org/certification/fcca841c612-da84-4761-9e71-ceff0cebc880/javascript-algorithms-and-data-structures" target="_blank"><button>View Certificate</button></a>
                </div>

                <div className="entry">
                    <img src="l1.png" className="logo"/>
                    <h2>Python (Basic)</h2>
                    <h4>by HackerRank</h4>
                    <a href="https://www.hackerrank.com/certificates/47f6062ab4b5" target="_blank"><button>View Certificate</button></a>
                </div>

                <div className="entry">
                    <img src="l3.png" className="logo"/>
                    <h2>Scientific Computing with Python</h2>
                    <h4>by freeCodeCamp</h4>
                    <a href="https://www.freecodecamp.org/certification/fcca841c612-da84-4761-9e71-ceff0cebc880/scientific-computing-with-python-v7" target="_blank"><button>View Certificate</button></a>
                </div>

            </div>
        </div>
        
        <div id="contact">
            <h1>I am open to collaboration.</h1>
            <div className="content">
                <h2 className="subtitle">Job Opportunities. Future Projects.<hr/></h2>
                <form action="https://formsubmit.co/dylanharyoto@gmail.com" method="POST">
                    <input type="text" placeholder="Full Name" name="name" required/>
                    <input type="text" placeholder="Email Address" name="email" required/>
                    <input type="text" placeholder="Subject" name="subject" required/>
                    <textarea name="message" rows="5" placeholder="Message" required></textarea>
                    <a name="submit"><button>Submit</button></a>
                </form>
                <img src="dylan2.png" className="me"/>
                <div>
                    <a href="https://www.linkedin.com/in/dylanharyoto/" target="_blank"><img src="i1.png" className="icon"/></a>
                    <a href="https://www.instagram.com/dylanharyoto/" target="_blank"><img src="i2.png" className="icon"/></a>
                    <a href="https://github.com/dylanharyoto?tab=repositories" target="_blank"><img src="i3.png" className="icon"/></a>
                </div>
            </div>
        </div>
    </main>

  </div>
  );
}

export default App;
