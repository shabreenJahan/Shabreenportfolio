import API from '../src/assets/API.png';
import database from '../src/assets/database.jpg';
import cloud from '../src/assets/cloud.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/service.css'
export default function Service() {
     return <>
     
     <section id="ser">
         
          <h2 className="servicesTitle">Services Offered</h2>
          <span className="servicesDesc">Crafting Robust Backend Solutions with Python Excellence</span> 
          <div className="serBar">
                 <img src={API} alt="API development" className="eduBarImg" /> 
               <div className="serBarText">
               <h2>API Development and Integration</h2>
               <p>Custom API development for seamless integration between different software systems, ensuring efficient, secure data exchange and functionality.</p>
                </div>

          </div>
          
          <div className="serBar">
                <img src={database} alt="Database" className="eduBarImg" /> 
               <div className="serBarText">
               <h2>Database Design and Management</h2>
               <p>Designing robust database architectures and managing data effectively for optimal performance and scalability.</p>
               </div>
            </div>
            <div className="serBar">
                <img src={cloud} alt="Cloud" className="eduBarImg" />  
               <div className="serBarText">
               <h2>Cloud-Based Solutions</h2>
               <p>Developing and deploying applications on cloud platforms, offering scalable and flexible solutions tailored to client needs.</p>
               </div>

          </div>
          
                  
                  
     </section>
    

     </>
    }
