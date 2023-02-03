import { useRef } from "react";
import React from "react";
import  Axios from "axios";
import FileDownload from "js-file-download";


function HomePage() {

    const home = useRef(null);
    const about = useRef(null);
    const projects = useRef (null);
    const contact = useRef (null);
    // const resume = useRef (null);

    const scrollToSection = (elementRef) => {
        window.scrollTo ({
          top: elementRef.current.offsetTop,
          behavior: "smooth",
        });
      };

    const download=(e) => {
        e.preventDefault();
        Axios({
            url:"http://localhost:3000",
            method: "GET",
            responseType:"blob"
       }).then((res) =>{
        console.log(res);
            FileDownload(res.data, "HanhResume.png")
       })
      }

    return (
        <div className="App ">
            <div ref={home} className="hero">
                <nav>
                <h2 onClick = {() => scrollToSection(home)} className="logo">Hanh<span>Dinh</span></h2>
                    <ul>
                        <li onClick = {() => scrollToSection(home)} className="link">Home</li>
                        <li onClick = {() => scrollToSection(about)} className="link">About</li>
                        <li onClick = {() => scrollToSection(projects)} className="link">Projects</li>
                        <li onClick = {() => scrollToSection(contact)} className="link">Contact</li>
                    </ul>
                    <button onClick={(e)=>download(e)} type="button">Resume</button>
                </nav>
            </div>

            <section className="top-container">
                <div>
                    <img className="profile-img" src="images/profile-img.png" alt="profile-img"/>
                </div>
                <div>
                    <span className="hey">Hello,</span>
                    <h1>I'm Hanh.</h1>
                    <br/>
                    <h3>a <span>Fullstack Web Developer</span> based in Pittsburgh, Pennsylvania.</h3> 
                </div>
                
            </section>

            {/* <div className="middle-container"> */}
                <div  ref={about} className="profile">
                    <img className="profile-picture" src="Images/Hanh.png" alt="Hanh Dinh"/>
                    <h2>Hi there,</h2>
                    <p className="intro">My name is <span><strong>Hanh</strong></span>, a <span><strong>Fullstack Web Developer</strong></span> based in Pittsburgh, PA who enjoys building web applications and specializes in the MERN stack.</p>
                    <br/>
                    <p className="intro">I'm a very positive, highly motivated person with a strong desire to continue learning and challenging myself</p>
                    <br/>
                    <p className="intro">Outside work, I really enjoy creating delicious food, playing chess and hanging out in bookstores.</p>
                </div>

                <hr/>

                <div ref={projects} className="myProjects">
                    <div className="projectsTitle">
                        <h2 className="white-text">Fullstack Web Developer Porfolio</h2>
                    </div>
                    <div className="projects">
                        <div className="project-box">
                            <div className="project-box-top">
                                <img className="project-img" src="Images/languageshot.png" alt="languageshot-img"/>             
                            </div>
                            <div className="project-box-bottom">
                                <div>
                                    <h3 className="black-text">Language Shot</h3>
                                    <p>Language App for travelers (MERN Web App)</p>
                                </div>
                                <div>
                                    <ul className="tools">
                                        <li className="tool-name">JavaScript</li>
                                        <li className="tool-name">MongoDB</li>
                                        <li className="tool-name">Express</li>
                                        <li className="tool-name">React</li>
                                        <li className="tool-name">Node.js</li>
                                        <li className="tool-name">HTML5</li>
                                        <li className="tool-name">CSS3</li>
                                        <li className="tool-name">REST API</li>                     
                                    </ul>
                                </div>   
                                <div>
                                <a className="view-project" href="https://languageshot.netlify.app/">View Project</a>
                                </div> 
                            </div>
                        </div>

                        <div className="project-box">
                            <div className="project-box-top">
                                <img  src="Images/myrunway.png" alt="myrunway-img"/>
                            </div>
                            <div className="project-box-bottom">
                                <div>
                                    <h3 className="black-text">MyRunWay</h3>
                                    <p className="interpretation-skill-discription">Social Media App for fashion lover</p>
                                </div>
                                <div>
                                    <ul className="tools">
                                        <li className="tool-name">JavaScript</li>
                                        <li className="tool-name">MongoDB</li>
                                        <li className="tool-name">Express</li>
                                        <li className="tool-name">HTML5</li>
                                        <li className="tool-name">CSS3</li>
                                        <li className="tool-name">Bootstrap</li>   
                                        <li className="tool-name">Handlebars</li>                  
                                    </ul>
                                </div>
                                <div>
                                <a className="view-project" href="https://languageshot.netlify.app/">View Project</a>
                                </div>
                            </div>    
                        </div>

                        <div className="project-box">
                            <div className="project-box-top">
                                <img className="babybuffetgame-img" src="Images/babybuffetgame.png" alt="babybuffetgame-img"/>
                            </div>
                            <div className="project-box-bottom">
                                <div>
                                <h3 className="black-text">A Baby Buffet Game</h3>
                                <p className="interpretation-skill-discription">A simple game built with JavaScript and HTML canvas for graphics</p>
                                </div>
                                <div>
                                    <ul className="tools">
                                        <li className="tool-name">JavaScript</li>
                                        <li className="tool-name">HTML5</li>
                                        <li className="tool-name">CSS3</li>
                                        <li className="tool-name">Canvas</li>                
                                    </ul>
                                </div>
                                <div>
                                <a className="view-project" href="https://hanhdinh1.github.io/A-Baby-Buffet-Game/">View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>

                <hr/>

                <div ref={contact} className="contact-me">
                    <h2 className="black-text">Let's get in touch</h2>
                    <h3 className="black-text">I am currently available for work</h3>
                    <p className= "contact-message">Feel free to contact me. I'll get back to you as soon as I can. That's a promise!</p>
                    <a className="btn" href="mailto:ms.myhanh89@gmail.com">CONTACT HANH</a>
                </div>
            {/* </div> */}

            <div className="bottom-container">
                <a className="footer-link" href="https://www.linkedin.com/">LinkedIn</a>
                <a className="footer-link" href="https://github.com/HanhDinh1">Github</a>
                <a className="footer-link" href="https://profile.ironhack.com/hanh-dinh">Website</a>
                <p className="copyright">© 2023 Hanh Dinh.</p>
            </div>
        </div>
    );
}

export default HomePage;
