import OS from '../src/assets/OS.jpg';
import JNTU from '../src/assets/JNTU.png';
import '../src/index.css'
import '../src/education.css'


export default function Education() {
      return <>
     
     <section id="education">
         
          <span className="eduTitle">My Qualifications</span>
           
          <div className="eduBar">
                <img src={OS} alt="OU university" className="eduBarImg" /> 
               <div className="eduBarText">
               <h2>Masters in Computer Science</h2>
               
               
               </div>

          </div>
          
          <div className="eduBar">
                <img src={JNTU} alt="WebDesign" className="eduBarImg" /> 
               <div className="eduBarText">
               <h2>Bachlors in Computer Sciencek</h2>
               </div>

          </div>

    
     </section>
    

     </>
     }
    