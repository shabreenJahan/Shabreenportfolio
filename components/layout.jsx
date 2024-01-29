import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/logo.png';
export default function Layout() {
 return (
 <>
 
 
 <nav>
    
 <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Education</Link>| <Link to="/project">Project</Link>|<Link to="/service">Service</Link>| <Link to="/contact">Contact</Link>
 </nav>
 < img src={logo}alt="logo" className="logo" width="80px" height="80px"/>
 <h2>Portfolio Assignment</h2>
 <hr />
 
 </>
 
 );
}
