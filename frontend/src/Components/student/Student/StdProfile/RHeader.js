import React from "react";
import { Box, Grid, Typography } from '@mui/material';
import styles from "../showresarchads/RStyles.module.css";
import { NavLink } from 'react-router-dom';
import img from '../../../mainPage/assets/logo.png'
const Header = (props) => {
    const myStyle = {
        width: '30vh',
        height: '12vh',
    marginLeft:'2vw',
    marginTop:'2vh'
      };
    return (
        <div>

            <Box
                //  style={{ backgroundColor: "black" }} 
                className={`${styles.Rheader_background}`}
                style={{ width: "100%" }}
                color="white">
                <div className={`${styles.Rheader_container}`} >
                    <nav className={`${styles.Rheader_NavMenu}`}>
                    <img style={myStyle} src={img} alt="logo"/>
                    <NavLink className={`${styles.Rheader_NavMenu_}`} aria-current="page" to=""></NavLink>
                        <NavLink className={`${styles.Rheader_NavMenu_}`} to="/StdDashBoard"> Personal Details</NavLink>
                        <NavLink className={`${styles.Rheader_NavMenu_}`} to="/showads"> Research Ad</NavLink>
                        <NavLink className={`${styles.Rheader_NavMenu_}`} aria-current="page" to="/">Logout</NavLink>
                        
                        <div className={`${styles.dot}`}></div>
                        <div className={`${styles.Rdot}`}></div>

                    </nav>
                </div>
                <Grid py={10} container justifyContent="center">
                    <Grid item xs={10}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h4">
                                Welcome 
                            </Typography>
                            {/* <button type="button" className={`btn btn-primary btn-lg`}>Post a Job</button> */}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Header