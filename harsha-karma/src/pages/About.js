import NavBar  from '../components/NavBar';
import Project from '../components/Project';
import "../styles/About.css";

import packageHoundLogo from '../media/PackagehoundLogo.jpg';
import heartCrossLogo from '../media/HeartcrossLogo.png';
import playsyncLogo from '../media/Playsync.png';

function About() {
    return(
        <div>
            <header>
                <NavBar/>
            </header>
            <body className='aboutBody'>
            <h1>Skills and Achievements</h1>
            
            <p>
            <br></br> 
            I studied Honors BSc Computer Science at Wilfrid Laurier University and have been working since the summer of 2021.
            <br></br>
            Although the majority of my work has been surrounding full-stack web applications, I'm also extremely passionate about embedded systems and low-level programming.
            <br></br><br></br>
            
            <strong>Languages:</strong> JavaScript, Rust, Python, Java, C
            <br></br><br></br>
            <strong>Frameworks:</strong> MERN (JS), Rocket | Axum (Rust) | Flask (Python)
            <br></br><br></br>
            <strong>Achievements:</strong> <br></br>
            RBC 2022 Digital Individual Performance Award <br></br>
            RBC 2023 Leadership Model Award Recipient
            </p>
            <h1>
            Notable Projects
            </h1>
            <div className='projectSection'>
                <Project imgSrc={packageHoundLogo} alt="" desc="Our hack for uOttaHack3, Package Hound was a package tracking tool that came with a Android App.
    It had multiple key components, the tile itself, a device represent a step in the delivery process,
    and an Android app."></Project>
                <Project imgSrc={heartCrossLogo} alt="" desc="Made for StarterHacks. HeartCross was a platform we created that enabled the family and friends of those"></Project>
                <Project imgSrc={playsyncLogo} alt="" desc="Created for uOttaHack4, Playsync was designed to be a platform for people to play together asynchronously."></Project>
            </div>
            <h1>
             My Socials
            </h1>   
            <div className='socials'>
                <img className='socialLogos' src={require('../../src/media/linkedInLogo.png')}  alt='Moon'/>
                <img className='socialLogos' src={require('../../src/media/GithubLogo.png')}  alt='Moon'/>
                <img className='socialLogos' src={require('../../src/media/DevpostLogo.png')}  alt='Moon'/>
            </div>
        </body>
        </div>
        
    );
}

export default About;