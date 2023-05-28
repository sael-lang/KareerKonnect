import React from "react";
import { Box, Grid, Typography } from '@mui/material';
import styles from "../PostJob/Styles.module.css";
import { NavLink } from 'react-router-dom'

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
                        <NavLink className={`${styles.header_NavMenu_NavLink}`} aria-current="page" to="/">Home</NavLink>
                        <NavLink className={`${styles.header_NavMenu_NavLink}`} to="/personalDetails">Personal Details</NavLink>
                        <NavLink className={`${styles.header_NavMenu_NavLink}`} to="/postJob">Post Job</NavLink>
                        <NavLink className={`${styles.header_NavMenu_NavLink}`} to="/candidateSearch">Candidate Search</NavLink>
                        <div className={`${styles.dot}`}></div>

                    </nav>
                </div>
                <Grid py={10} container justifyContent="center">
                    <Grid item xs={10}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h4">
                               Search JobSeekers
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