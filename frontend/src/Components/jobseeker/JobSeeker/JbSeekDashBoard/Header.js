import React,{useState,useEffect} from 'react';
import { Box, Grid, Typography } from '@mui/material';
import styles from "../FindJob/Styles.module.css";
import { NavLink } from 'react-router-dom'
import logo3 from './images/resource/mp1.jpg';
import { Buffer } from 'buffer';
import { email1 } from '../../../mainPage/components/Registration/Signin';
import axios from "axios";
import img from '../../../mainPage/assets/logo.png'
const Header = (props) => {
    const [data, setData] = useState([]);
    const role = "aaa"; const myStyle = {
      width: '30vh',
      height: '12vh',
  marginLeft:'2vw',
  marginTop:'2vh'
    };
    console.log(email1)
    useEffect(() => {
      axios
        .get(`http://localhost:8003/jobseeker/${email1}`)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err, "it has an error"));
    }, []); // <-- added empty dependency array to run only once on mount
  
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
                    <NavLink className={`${styles.header_NavMenu_NavLink}`} aria-current="page" to=""> </NavLink>
                        <NavLink className={`${styles.header_NavMenu_NavLink}`} to="/JobSeeker_DashBoard">Personal Details</NavLink>
                        <NavLink className={`${styles.header_NavMenu_NavLink}`} to="/showjob">Search Job</NavLink>
                        <NavLink className={`${styles.header_NavMenu_NavLink}`} aria-current="page" to="/">Logout</NavLink>
                        {/* <NavLink className={`${styles.header_NavMenu_NavLink}`} to="/candidateSearch">Candidate Search</NavLink> */}
                        <span className={`${styles.heasd}`}>   {data.map((singleData) => {
  const base64String = Buffer.from(singleData.data, 'binary').toString('base64');
  return (
    <>
    <div className="posc"> 
    <img
      key={singleData._id}
      src={`data:${singleData.contentType};base64,${base64String}`}
      alt={singleData.name}
      width="300"
    />
      </div>
    <div className='nnn'><NavLink  to="/JobSeek_View">{singleData.JbSeekName}</NavLink></div> 
  
    </>
  );
})} </span>
                        <div className={`${styles.dot}`}></div>

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