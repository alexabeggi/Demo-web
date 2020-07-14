import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

import './About.css';
 
function About(){
    return (
       <div className="about">
            <header>
                <Logo />
                <Navigation />
            </header>
            <main>
                <p>  Do you need more info about yoga and mindfulness? We can recommend some references.  
                    <br></br> Do you want to participate in one of our retreats? Ask for info about dates.
                    <br></br>
                    <br></br>
                </p>
                    <div className="bar"> <p> </p></div>
                <p> You can send us and e-mail: <u> info@mindyoga.com </u> </p>
            </main>
            <Footer/>
       </div>
    );
}
 
export default About;