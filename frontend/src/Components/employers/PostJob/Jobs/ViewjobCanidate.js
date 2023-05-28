import React,{useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Box, MenuItem, Select } from '@mui/material';
import styles from "../Styles.module.css";
import Header from './Header'
import Candidate_profile_card from './Candidate_profile_card'
import style from "../../CandidateSearch/CandidateSearch.module.css"
import axios from 'axios';
const styleswww = {
  backgroundColor: '#f0f0f0',
  color: 'blue',
  fontSize: '16px',
  // Add more styles as needed
};
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
            const response = await axios.get(`/showappliedads/${title}`);
            const jsonData = response.data;
            setData(jsonData);
            console.log("asd", jsonData);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []); 
      if (data.length === 0) {
        return (<>
          <Header />
         
      <div style={styles}>
           No Data not found
          </div>



      </>
         
        
        )}
    return (
        <>

            <Header />
           
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
