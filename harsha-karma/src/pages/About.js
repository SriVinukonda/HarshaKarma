import NavBar  from '../components/NavBar';
import Project from '../components/Project';
import Slider from '../components/Slider';

import "../styles/About.css";

import packageHoundLogo from '../media/PackagehoundLogo.jpg';
import heartCrossLogo from '../media/HeartcrossLogo.png';
import playsyncLogo from '../media/Playsync.png';

// ***** Does it not make more sense to send in the actual information to slider instead of a list of projects????? *****
let projects = [
<Project imgSrc={packageHoundLogo} alt="Package Hound Logo" 
desc="Our hack for uOttaHack3, Package Hound was a package tracking tool that came with a Android App.
It had multiple key components, the tile itself, a device represent a step in the delivery process,
and an Android app."
tech="Java/Android - Paho MQTT"
repo="https://github.com/leviaviv28/uOttaHack3">
</Project>,
<Project imgSrc={heartCrossLogo} alt="Heartcross Logo" 
desc="Made for StarterHacks 2020. HeartCross was a platform we created that enabled the family and friends of those
affected by disasters to check on the person(s). The plan was to use information from
the local organizations dealing with the disaster relief."
tech="JS/Web - GCP"
repo="https://github.com/StevennTran/StarterHacks2020">
</Project>,

<Project imgSrc={playsyncLogo} alt="Playsync Logo" 
desc="Created for uOttaHack4, Playsync was designed to be a platform for people to play together asynchronously. We
utilized a pub/sub architecture to propogate the changes from the game controller to the subscribers and
a JS framework for the game controller."
tech="JS/Desktop - MQTT"
repo="https://github.com/russellgoldman/Plasync"
></Project>]

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
                <br></br><br></br>
                Although the majority of my work has been surrounding full-stack web applications, I'm also extremely passionate about embedded systems and low-level programming.
                <br></br><br></br>
                <strong>Languages:</strong> JavaScript, Rust, Python, Java, C
                <br></br><br></br>
                <strong>Frameworks:</strong> MERN (JS), Rocket | Axum (Rust) , Flask (Python)
                <br></br><br></br>
                <strong>Achievements:</strong> 
                <br></br><br></br>
                RBC 2022 Digital Individual Performance Award <br></br>
                RBC 2023 Leadership Model Award Recipient
                </p>

                <h1>
                <br></br>
                Notable Projects
                <br></br>
                </h1>
                <div className='projectSection'>
                    <Slider projects={projects}></Slider>
                </div>
                <h1 style={{marginTop:'3vh'}}>
                My Socials
                </h1>   
                <div  className='socials'>
                    <a href='https://www.linkedin.com/in/srivinukonda/'><img className='socialLogos' src={require('../../src/media/linkedInLogo.png')} alt='Moon'/></a>
                    <a href='https://github.com/SriVinukonda'><img className='socialLogos' src={require('../../src/media/GithubLogo.png')}  alt='Moon'/></a>
                </div>
        </body>
        </div>
        
    );
}

export default About;