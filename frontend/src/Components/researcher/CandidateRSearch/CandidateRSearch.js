import { Box, MenuItem, Select } from '@mui/material';
import React,{useState} from 'react'
import Header from '../RPostJob/RHeader'
import Candidate_profile_card from './Candidate_Rprofile_card'
import Second from './Second'
import styles from "./CandidateRSearch.module.css"
import axios from 'axios';
const CandidateRSearch = () => {
    const [openNewJob, setOpenNewJob] = useState(true);
    const [search, setsearch] = useState();
    const [data, setData] = useState([]);
    const [x,setx]=useState("1");
    const [notdata, setnotData] = useState([]);
    const searchcanidate=async()=>{
      setOpenNewJob(false)
      axios.post('http://localhost:8003/getstudent', { username: search }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          const data = response.data;
          setnotData(data);
            console.log(data);
           })
    }
    const myStyle = {
       width:"20vw",
       left:"20%"
      };
      const fetchData = async () => {
        try {
          const response =  await fetch('/students/get');
          const jsonData = await response.json();
          setData(jsonData.data);
        } catch (error) {
          console.error(error);
        }
      }
      if (x==1){
      fetchData();
      setx(2);
      }
      if (data.length === 0) {
        return (   
          <>

            
          <Header />
                      <Box p={2} mt={-4} mb={3} className={`${styles.wrapper}`}>
                      
                      
                     
                      <input  onChange={(e)=>{setsearch(e.target.value)}}  type='text' placeholder='Search' className={`${styles.input}`}/>
                      <button onClick={searchcanidate}  type="button" className={`btn btn-outline-primary btn-lg ${styles.button}  mx-2`}  >Search</button>
                     
                     
                  </Box>
                      <div className={`${styles.candidate_Rcard_display}`} style={{ display: "flex" }}>
                      <div style={styles}>
             No Data found
            </div>
          
                      </div>
          
          
          
                  </> )} 
    return (
        <>

            
<Header />
            <Box p={2} mt={-4} mb={3} className={`${styles.wrapper}`}>
            
            
           
            <input  onChange={(e)=>{setsearch(e.target.value)}}  type='text' placeholder='Search' className={`${styles.input}`}/>
            <button onClick={searchcanidate}  type="button" className={`btn btn-outline-primary btn-lg ${styles.button}  mx-2`}  >Search</button>
           
           
        </Box>
            <div className={`${styles.candidate_Rcard_display}`} style={{ display: "flex" }}>
            {openNewJob && data.map((item) => (
  <Second key={item.id} {...item} />
))}
  {!openNewJob && notdata.map((item) => (
  <Candidate_profile_card key={item.id} {...item} />
))}

            </div>



        </>
    )
}

export default CandidateRSearch