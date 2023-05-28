import React,{useState,useEffect} from 'react';
import { Box, Grid, Typography } from '@mui/material';
import styles from "./RStyles.module.css";
import { NavLink } from 'react-router-dom'
import { Buffer } from 'buffer';
import axios from "axios";
import { email1 } from '../../../mainPage/components/Registration/Signin';
import img from '../../../mainPage/assets/logo.png'
const Header = (props) => {
    const myStyle = {
        width: '30vh',
        height: '12vh',
    marginLeft:'2vw',
    marginTop:'2vh'
      };
    const [data, setData] = useState([]);
    const role = "asd";
    useEffect(() => {
      axios
        .get(`http://localhost:8003/student/${email1}`)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err, "it has an error"));
    }, []); // <-- added empty dependency array to run only once on mount
  
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
                        <span className={`${styles.heas}`}>   {data.map((singleData) => {
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
    <div className='nnn'><NavLink  to="/stdprofile">{singleData.name}</NavLink></div> 
  
    </>
  );
})} </span>
                        <div className={`${styles.dot}`}></div>
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