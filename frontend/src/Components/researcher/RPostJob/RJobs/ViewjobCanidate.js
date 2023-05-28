import React,{useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Box, MenuItem, Select } from '@mui/material';
import styles from "./Styles.module.css";
import Header from './Header'
import Candidate_profile_card from './Candidate_profile_card'
import style from "../../../employers/CandidateSearch/CandidateSearch.module.css"
import axios from 'axios';
const ViewjobCanidate = () => {
    const location = useLocation();
    const { title } = location.state;
    console.log(title);
    const [openNewJob, setOpenNewJob] = useState(false);
    const [search, setsearch] = useState();
    const [data, setData] = useState([]);
   
   
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`/showappliedjobs/${title}`);
            const jsonData = response.data;
            setData(jsonData);
            console.log("asd", jsonData);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []); 
     
    return (
        <>

            <Header />
            <Box p={2} mt={-4} mb={2} className={`${styles.wrapper}`}>

           
        </Box>
            <div className={`${style.candidate_card_display}`} style={{ display: "flex" }}>
                {data.map(data => <Candidate_profile_card key={data.id} {...data} />)}
                {/* <Candidate_profile_card />
                <Candidate_profile_card />
                <Candidate_profile_card /> */}

            </div>



        </>
    );
};

export default ViewjobCanidate;
