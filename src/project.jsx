import chatbot from '../src/assets/chatbot.png';
import Drowsiness from '../src/assets/Drowsiness.jpg';
 import taxifare from '../src/assets/taxifare.jpg';
// import project4 from '../src/assets/project4.jpg';
//import project5 from '../src/assets/project5.jpg';
//import project6 from '../src/assets/project6.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/project.css'
export default function Project() {
     return <>
     
     <section id="works">
         
          <h2 className="worksTitle">My Projects</h2>
          <span className="worksDesc">Welcome to my portfolio of projects, a showcase of my journey as a python developer. Here, you'll find a differ of projects ranging from web applications to data analysis, reflecting my passion for coding and problem-solving. Each project presented has been a stepping stone in my career, helping me to refine my skills in Python, JavaScript, and database management.</span> 
          <div className="worksImgs">
                   <img src={chatbot} alt="chabot" className="worksImg" />
                   <img src={Drowsiness} alt="Drowsiness" className="worksImg" />
                     <img src={taxifare} alt="TaxiFares" className="worksImg" />  
                   {/* <img src={project4} alt="project4" className="worksImg" /> */}
                   {/* <img src={project5} alt="project5" className="worksImg" /> */}
                   {/* <img src={project6} alt="project6" className="worksImg" /> */}
                  
               
               </div>

          <button className="workBtn">See More</button>
                  
                  
     </section>
    

     </>
    }
    