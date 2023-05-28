import React from "react";
import { Box, Grid, Typography } from '@mui/material';
import styles from "./RStyles.module.css";
import { NavLink } from 'react-router-dom'
import img from '../../mainPage/assets/logo.png'
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
                className={`${styles.Rheader_background}`}
                style={{ width: "100%" }}
                color="white">
                <div className={`${styles.Rheader_container}`} >
                    <nav className={`${styles.Rheader_NavMenu}`}>
                    <img style={myStyle} src={img} alt="logo"/>
                        <NavLink className={`${styles.Rheader_NavMenu_NavLink}`} to="/RpersonalDetails"> Researcher Details</NavLink>
                        <NavLink className={`${styles.Rheader_NavMenu_NavLink}`} to="/RpostJob">Post Research Ad</NavLink>
                        <NavLink className={`${styles.Rheader_NavMenu_NavLink}`} to="/candidateRSearch">Candidate Search</NavLink>
                        <NavLink className={`${styles.Rheader_NavMenu_NavLink}`} aria-current="page" to="/">LOgout</NavLink>
                        <div className={`${styles.Rdot}`}></div>

                    </nav>
                </div>
                <Grid py={10} container justifyContent="center">
                    <Grid item xs={10}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h4">
                                Researcher 
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