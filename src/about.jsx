import BBG from '../src/assets/BBG.jfif';
import django from '../src/assets/django.png';
import flask from '../src/assets/flask.jpg';
import resume from '../src/assets/resume.pdf';
import app from '../src/assets/app.png';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/about.css'
export default function About() {
     return <>
     
     <section id="skill">
         
          <span className="skillTitle">What I do</span>
          <span className="skillDesc">I am  Shabreen Jahan, a passionate Python back-end developer with a knack for building scalable and efficient web applications.With a Bachelor’s degree in Computer Science and over 3 years of experience in back-end development, I have upgraded my skills in Python, working with frameworks like Django and Flask</span> 
          <div className="skillBar">
               <img src={django} alt="UIDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Django</h2>
               <p>Django is a free and open-source, Python-based web framework that runs on a web server. It follows the model–template–views architectural pattern.</p>
               </div>

          </div>
          
          <div className="skillBar">
               <img src={flask} alt="WebDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Flask</h2>
               <p>Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions..</p>
               </div>

          </div>
          <a href={resume} target="_blank">View My Resume</a>

          
                  
     </section>
    

     </>
    }
    