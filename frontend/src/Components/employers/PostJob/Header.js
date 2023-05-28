import React from "react";
import { Box, Grid, Typography } from '@mui/material';
import styles from "./Styles.module.css";
import { NavLink } from 'react-router-dom'
import img from '../../mainPage/images/logo.png'
const myStyle = {
    width: '30vh',
    height: '12vh',
marginLeft:'2vw',
marginTop:'2vh'
  };
const Header = (props) => {
    return (
        <div>

            <Box
                //  style={{ backgroundColor: "black" }} 
                className={`${styles.header_background}`}
                style={{ width: "100%" }}
                color="white">
                <div className={`${styles.header_container}`} >
                    <nav className={`${styles.header_NavMenu}`}>
                    <img style={myStyle} src={img} alt="logo"/>
                        <NavLink className={`${styles.header_NavMenu_NavLink}`} to="/personalDetails">Personal Details</NavLink>
                        <NavLink className={`${styles.header_NavMenu_NavLink}`} to="/postJob">Post Job</NavLink>
                        <NavLink className={`${styles.header_NavMenu_NavLink}`} to="/candidateSearch">Candidate Search</NavLink>
                        <NavLink className={`${styles.header_NavMenu_NavLink}`} aria-current="page" to="/">Logout</NavLink>
                        <div className={`${styles.dot}`}></div>

                    </nav>
                </div>
                <Grid py={10} container justifyContent="center">
                    <Grid item xs={10}>
                        <Box display="flex" justifyContent="space-between">
                            
                            {/* <button type="button" className={`btn btn-primary btn-lg`}>Post a Job</button> */}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Header