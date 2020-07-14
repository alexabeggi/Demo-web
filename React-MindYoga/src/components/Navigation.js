import React from 'react';
// import { NavLink } from 'react-router-dom';
import { HashLink as NavLink } from 'react-router-hash-link';
import Dropdown from 'react-bootstrap/Dropdown'
 
import './Navigation.css';

function Navigation(){
    return (
       <nav className="NavBar">
            <ul>
                <NavLink to="/#home" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} className="Nav-sections">Home</NavLink>
                <NavLink to="/#yoga" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} className="Nav-sections">Yoga</NavLink>
                <NavLink to="/#mindfulness" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} className="Nav-sections">Mindfulness</NavLink>
                <NavLink to="/#retreats" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} className="Nav-sections">Retreats</NavLink>
                <Dropdown drop="down" className="Nav-sections">
                    <Dropdown.Toggle><NavLink className="Nav-sections help">Help <svg xmlns="http://www.w3.org/2000/svg" viewBox="5 0 18 18" width="18" height="18" fill="white"><path d="M11.646 15.146L5.854 9.354a.5.5 0 01.353-.854h11.586a.5.5 0 01.353.854l-5.793 5.792a.5.5 0 01-.707 0z"></path></svg></NavLink></Dropdown.Toggle>
                        <Dropdown.Menu className="Nav-dropdown">
                            <Dropdown.Item eventKey="1"><NavLink className="about-us DropSec" to="/about">About us</NavLink></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><NavLink className="DropSec" to="/">FAQ</NavLink></Dropdown.Item>
                        </Dropdown.Menu>
                </Dropdown>
            </ul>
       </nav>
    );
}
 
export default Navigation;