import NavBar  from '../components/NavBar';
import "../styles/About.css";

let About = () => {
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