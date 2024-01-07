import logo from './logo.svg';
import './App.css';

function App() {
    const scrollSection = (sectionID) => {
        document.getElementById(sectionID).scrollIntoView({
            behavior: 'smooth'
        });
    };
  return (
    <div>
    <header>
        <a href="#opening"><h2>DDH</h2></a>
        <nav>
            <a onClick={() => scrollSection('about-me')}>About Me</a>
            <a onClick={() => scrollSection('experiences')}>Experiences</a>
            <a onClick={() => scrollSection('awards')}>Honors</a>
            <a onClick={() => scrollSection('contact')}>Contact</a>
        </nav>
    </header>
    <main>
        <div id="opening">
            <div className="content">
                <img src="dylan1.png" className="me"/>
                <div>
                    <h1>Hi there,<br/>I'm Dominicus Dylan Haryoto</h1>
                    <h3>Undergraduate Researcher @ PolyU Department of Computing</h3><hr/>
                </div>
            </div>
        </div>

        <div id="about-me">
            <h1>About Me</h1>
            <div className="content">
                <div>
                    <b>A freshman majoring in Computer Science at the Faculty of Engineering, The Hong Kong Polytechnic University.</b>
                    <p>Impact - the noun I would use to describe the inventions of the creators of modern society, providing solutions that enable people to live better lives. Outstanding grades and olympiad victories; those awards, while critical for my future career, are incapable of providing a long-term effect on society.</p>
                    <p>Choosing a Computer Science major strengthens my ability to address real-world problems by solving complex problems in coding. With this in mind, my enthusiasm drives me to become a problem-solver, a game-changer capable of resolving society&#39;s major problems.</p>
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
                    <h4>August 2023 - Present</h4>
                    <h2>Undergraduate Researcher</h2>
                    <h3>Graduate School, The Hong Kong Polytechnic University</h3>
                    <ul>
                        <li>Secured admission to the Undergraduate Research and Innovation Scheme with a grant of HK$30,000, supervised by Dr. Qixin Wang.</li>
                        <li>Currently researching and proving the NP-hardness of an algorithm for intra-cell channel time-slot scheduling for fire evacuation.</li>
                    </ul>
                </div> 
                <a href="https://www.polyu.edu.hk/en/gs/"><button>Visit Website</button></a> 
                <div className="dotline">
                    <div className="dot"></div>
                    <div className="line"></div>
                </div>
                <div>
                    <h4>June 2023 - August 2023</h4>
                    <h2>Market Research Assistant</h2>
                    <h3>Hutchison Port Holdings</h3>
                    <ul>
                        <li>Conducted extraction and analysis of financial data from shipping line companies, providing valuable reports for market research.</li>
                        <li>Contributed significantly to the company’s expansion plan by conducting in-depth analyses of countries and industry trends.</li>
                    </ul>
                </div> 
                <a href="https://hutchisonports.com/en/"><button>Visit Website</button></a> 
                <div className="dotline">
                    <div className="dot"></div>
                    <div className="line"></div>
                </div>
                <div>
                    <h4>February 2023 - August 2023</h4>
                    <h2>Student Research Assistant</h2>
                    <h3>Department of Computing, The Hong Kong Polytechnic University</h3>
                    <ul>
                        <li>Installed LoRa communication on Raspberry Pi using MKR WAN 1310, enhancing the system’s wireless communication capabilities.</li>
                        <li>Conducted an experiment on a server-client connection using SSH and X Window to optimize the communication infrastructure.</li>
                    </ul>
                </div> 
                <a href="https://www.polyu.edu.hk/en/gs/"><button>Visit Website</button></a> 
                <div className="dotline">
                    <div className="dot"></div>
                </div>
                <div>
                    <h4>September 2022 - December 2022</h4>
                    <h2>Data Entry Operator</h2>
                    <h3>Ministry of Foreign Affairs of the Republic of Indonesia</h3>
                    <ul>
                        <li>Entered the personal information of Indonesian laborers into the centralized database, showcasing a keen eye for detail and precision.</li>
                        <li>Utilized organizational skills to ensure high-quality information management, enhancing overall data integrity and reliability.</li>
                    </ul>
                </div> 
                <a href="https://kemlu.go.id/hongkong/lc"><button>Visit Website</button></a> 
                <h2 className="subtitle">Volunteer Experiences<hr/></h2>
                <div className="dotline">
                    <div className="dot"></div>
                    <div className="line"></div>
                </div> 
                <div>
                    <h4>August 2023 - Present</h4>
                    <h2>Vice President</h2>
                    <h3>Google Developer Student Clubs PolyU</h3>
                    <ul>
                        <li>Collaborate with technical leads to organize engaging workshops covering topics related to artificial intelligence.</li>
                        <li>Prepare and organize for the upcoming hackathon, PolyHack, ensuring a creative and collaborative environment for participants.</li>
                    </ul>
                </div> 
                <a href="https://gdsc.community.dev/the-hong-kong-polytechnic-university/"><button>Visit Website</button></a> 
                <div className="dotline">
                    <div className="dot"></div>
                    <div className="line"></div>
                </div> 
                <div>
                    <h4>December 2022 - Present</h4>
                    <h2>Class Representative</h2>
                    <h3>Department of Computing, The Hong Kong Polytechnic University</h3>
                    <ul>
                        <li>Chosen by faculty members to actively participate in semester meetings with professors addressing student learning experiences.</li>
                        <li>Actively gathering constructive feedback from peers to contribute to the continuous refinement of the curriculum.</li>
                    </ul>
                </div> 
                <a href="https://www.polyu.edu.hk/en/comp/"><button>Visit Website</button></a> 
                <div className="dotline">
                    <div className="dot"></div>
                    <div className="line"></div>
                </div> 
                <div>
                    <h4>March 2023 - August 2023</h4>
                    <h2>Project Volunteer</h2>
                    <h3>African Evangelistic Enterprise</h3>
                    <ul>
                        <li>Installed solar-powered electricity to 400 households in rural areas, illuminating lives and fostering sustainable energy solutions.</li>
                        <li>Implemented an advanced IoT system with an MPPT Controller, improving data tracking for more effective monitoring and analysis.</li>
                    </ul>
                </div> 
                <a href="https://www.aeerwanda.ngo/"><button>Visit Website</button></a>
                <div className="dotline">
                    <div className="dot"></div>
                    <div className="line"></div>
                </div> 
                <div>
                    <h4>November 2022 - June 2023</h4>
                    <h2>Innovation and Technology</h2>
                    <h3>PolyU E-Formula Racing Team - 理工大學電動方程式賽車隊</h3>
                    <ul>
                        <li>Crafted a curriculum tailored for primary and secondary school students, focusing on the development of RC Cars.</li>
                        <li>Spearheaded the modification and enhancement of the team’s website, with a keen emphasis on improving the UI/UX.</li>
                    </ul>
                </div> 
                <a href="https://hkpolyuracing.com"><button>Visit Website</button></a>

                <div className="dotline">
                    <div className="dot"></div>
                </div> 
                <div>
                    <h4>October 2022 - July 2023</h4>
                    <h2>Technical Lead</h2>
                    <h3>Google Developer Student Clubs PolyU</h3>
                    <ul>
                        <li>Facilitated introductory workshops on Lego Mindstorms EV3, catering to beginners and fostering hands-on learning experiences.</li>
                        <li>Collaborated seamlessly with executive committee members from other divisions to plan and prepare for upcoming events.</li>
                    </ul>
                </div> 
                <a href="https://gdsc.community.dev/the-hong-kong-polytechnic-university/"><button>Visit Website</button></a>
            </div>
        </div>

        <div id="awards">
            <h1>Honors</h1>
                
            <div className="content">
                <h2 className="subtitle">Scholarships<hr/></h2>
                <div className="box entry">
                    <div>
                        <h2>Dr Winnie S M Tang - PolyU Student Innovation & Entrepreneurship Scholarship</h2>
                        <h4>by PolyVentures | Dec 2023</h4>
                        <h3>Awarded: HK$5,000</h3>
                    </div>
                    <a href="https://drive.google.com/file/d/1CQD--1oebL4Md51DAOz4wKedydvUZNjv/view?usp=sharing" target="_blank"><button>View Certificate</button></a>&ensp;
                </div>
                <div className="box entry">
                    <div>
                        <h2>HKSAR Government Scholarship</h2>
                        <h4>by HKSAR Government | Dec 2023</h4>
                        <h3>Awarded: HK$80,000</h3>
                    </div>
                    <a href="" target="_blank"><button>View Certificate</button></a>&ensp;
                </div>  
                <div className="box entry">
                    <div>
                        <h2>Talent Development Scholarship</h2>
                        <h4>by HKSAR Government | April 2023</h4>
                        <h3>Awarded: HK$10,000</h3>
                    </div>
                    <a href="https://drive.google.com/file/d/1ZjEwMxhmooEevRZ4MArcTvCM55coraqg/view?usp=sharing" target="_blank"><button>View Certificate</button></a>&ensp;
                </div>    
                <h2 className="subtitle">Awards<hr/></h2>
                <div className="right">
                    <div>
                        <h2>PolyHack 2023</h2>
                        <h4>8 - 24 June 2023 | Hong Kong</h4><br/>
                        <b>3rd Place Winner, Best GIS Award, Most Innovative Award</b>
                        <p>Teams are asked to submit their project proposals that tackle the problem statement. Selected groups are then advanced 
                            to the Final Round, where they are required to pitch and showcase the solutions.</p>
                        <div>
                            <a href="https://drive.google.com/file/d/1HErYcWwfKGgewbn0lloPcT2nm_KOtVgy/view?usp=sharing" target="_blank"><button>View Certificate</button></a>&ensp;
                            <a href="https://youtu.be/xxEhxwO6BAs?si=Ntrc-qOUEicAGXlc" target="_blank"><button>Watch Video</button></a>
                        </div>   
                    </div>
                    <img src="a7.JPEG" className="image"/>
                </div>
                <div className="left">
                    <img src="a1.JPG" className="image"/>
                    <div>
                        <h2>World Robot Olympiad 2020</h2>
                        <h4>12 - 15 November 2020 | Montreal, Canada</h4><br/>
                        <b>Bronze Medalist & Rio Tinto Innovation Award</b>
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
                        <h4>8 - 10 November 2019 | Gyor, Hungary</h4><br/>
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
                        <b>Gold Medalist in Regular Senior</b>
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
                    <img src="l2.png" className="logo"/>
                    <h2>Introduction to R</h2>
                    <h4>by datacamp</h4>
                    <a href="https://www.datacamp.com/statement-of-accomplishment/course/20aaeeccdc7829429896ed64c583cf8951fa9579" target="_blank"><button>View Certificate</button></a>
                </div>

                <div className="entry">
                    <img src="l4.jpg" className="logo"/>
                    <h2>Fundamentals of Deep Learning</h2>
                    <h4>by Nvidia</h4>
                    <a href="https://courses.nvidia.com/certificates/00ca66473e0b4512863a6fde24baf468/" target="_blank"><button>View Certificate</button></a>
                </div>

                <div className="entry">
                    <img src="l2.png" className="logo"/>
                    <h2>Intermediate SQL</h2>
                    <h4>by datacamp</h4>
                    <a href="https://www.datacamp.com/statement-of-accomplishment/course/4b0015b86e8b7556b51f06e8b5a43a40843feb38" target="_blank"><button>View Certificate</button></a>
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
