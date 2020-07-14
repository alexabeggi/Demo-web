import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css';

function Footer(){
    return (
        <footer className="Foot">
            <ul>
                <li><p className="NamaSec">Namaste</p></li>
                <li><NavLink className="NamaSec" to="/follow"><p>Follow us</p></NavLink></li>
            </ul>
        </footer>
    );
}
 
export default Footer;