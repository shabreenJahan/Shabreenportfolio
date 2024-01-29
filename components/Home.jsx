import PHOTO from '../src/assets/PHOTO-.jpg';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'

export default function Home() {
     return <>
     
     <section id="intro">
          <div className="introContent">
          <span className="hello">Hello,</span><br/>
          <span className="introText">I am <span className="introName">Shabreen Jahan Mohammed</span> 
          <img src={PHOTO} alt="profile" className="bbg" width="750" height="750" align="right" />
          <br/>Python Backend Developer</span>
          <p className="introPara">I am a skilled and motivated Python backend developer with 3 years of experience in developing scalable and efficient backend systems</p>
          <Link><button className="btn"><img src={hire} alt="Hire me" width="100px" height="100px"/></button></Link>
        
        
        <p class="lead">
        <p>Please click on the button below to know more about me.</p>
          <a class="btn" href="/about" role="button">About Me</a>
        </p>

          </div>
          
     </section>
    

     </>
     }
    