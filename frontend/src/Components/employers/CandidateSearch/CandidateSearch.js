import { Box, MenuItem, Select } from '@mui/material';
import React,{useState,useEffect} from 'react'
import styles from "../PostJob/Styles.module.css";
import Header from './Header'
import Candidate_profile_card from './Candidate_profile_card'
import Second from './second'
import style from "./CandidateSearch.module.css"
import axios from 'axios';
const CandidateSearch = () => {
    const [openNewJob, setOpenNewJob] = useState(true);
    const [search, setsearch] = useState();
    const [data, setData] = useState([]);
    const [notdata, setnotData] = useState([]);
    const [x,setx]=useState("1");
    const searchcanidate=async()=>{
        console.log("asd");
        setOpenNewJob(false)
        axios.get('/jobseeker/' + search)
        .then(response => {
          const data = response.data;
          setnotData(data);
        })
        .catch(error => {
          console.error(error);
        });           
    }
    useEffect(() => {
      // This function will be called when the component mounts
      // You can perform any side effect or data fetching here
  console.log(data)
      
    }, [data]);
    const myStyle = {
       width:"20vw",
       left:"20%"
      };
      const fetchData = async () => {
        try {
          const response =  await fetch('/jobsek/get');
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
<Box p={2} mt={-4} mb={2} className={`${styles.wrapper}`}>



<input  onChange={(e)=>{setsearch(e.target.value)}} placeholder='Search' type='text' className={`${style.input}`}/>
<button onClick={searchcanidate}  type="button" className={`btn btn-outline-primary btn-lg ${style.button}  mx-2`}  >Search</button>


</Box>
<div className={`${style.candidate_card_display}`} >
<div style={styles}>
           No Data found
          </div>


</div>



</>

     
         
        
        )}
    return (
        <>

            <Header />
            <Box p={2} mt={-4} mb={2} className={`${styles.wrapper}`}>
            
            
           
            <input  onChange={(e)=>{setsearch(e.target.value)}} placeholder='Search' type='text' className={`${style.input}`}/>
            <button onClick={searchcanidate}  type="button" className={`btn btn-outline-primary btn-lg ${style.button}  mx-2`}  >Search</button>
           
           
        </Box>
            <div className={`${style.candidate_card_display}`} >
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

export default CandidateSearch