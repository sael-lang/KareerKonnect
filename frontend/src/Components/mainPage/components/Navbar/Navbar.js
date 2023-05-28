import React, { useState } from 'react';
import { Link } from "react-router-dom";

import styles from "./Navbar.css";
// eslint-disable-next-line
const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <>
            <nav className='navbar1'>



                <h3 className='Mainlogo'><img src={require('../../images/logo.png')} alt="navbarImg" className="Mainlogocolor" /></h3>
                <ul className={isMobile ? 'nav_links_mobile' : 'nav_links'}
                    onClick={() => setIsMobile(false)}>

                    {/* <div className='home dropdown px-5'>
                        <li>Employers</li>
                        <div className="dropdown-content">
                            <Link to="/personalDetails">Personal Information</Link>
                            <Link to="/postJob">Post Job</Link>
                            <Link to="/candidateSearch">Search candidates</Link>
                        </div>
                    </div>
                    <div className='home dropdown px-5' >
                        <li>JobSeeker</li>
                        <div className="dropdown-content">
                            <Link to="/JobSeeker_DashBoard">MyDashBoard</Link>
                            <Link to="/JobSeek_View">MyProfile</Link>
                            <Link to="showjob">Find Job</Link>
                        </div>
                    </div>
                    <div className='home dropdown px-5' >
                        <li>Students</li>
                        <div className="dropdown-content">
                            <Link to="/StdDashBoard">MyDashBoard</Link>
                            <Link to="/view/63ccfecccc0df9b656e11bf5">MyProfile</Link>
                            <Link to="">Find Job</Link>
                            <Link to="/StdViewResearcher">Find Researchers</Link>
                        </div>
                    </div>
                    <div className='home dropdown px-5'>
                        <li>Researchers</li>
                        <div className="dropdown-content">
                            <Link to="/RpersonalDetails">Researcher Info</Link>
                            <Link to="/RpostJob">Post Research Ad</Link>
                            <Link to="/candidateRSearch">Search candidates</Link>
                        </div>
                    </div> */}
                    <Link to="/signup" className='contact'>
                        <li>Signup</li>
                    </Link>
                    <Link to="/signin" className='contact '>
                        <li>Signin</li>
                    </Link>
                </ul>
                <button className='mobile-menu-icon Navbutton' onClick={
                    () => setIsMobile(!isMobile)
                }>
                    {
                        isMobile ? (<i className="fas fa-times"></i>) :
                            (<i className="fas fa-bars"></i>)
                    }
                </button>
                {/* <button className="button">Connect</button> */}
            </nav>
        </>

    );

};


export default Navbar;