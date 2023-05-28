import { Box, MenuItem, Select } from '@mui/material';
import React,{useState} from 'react'
import styles from "../FindJob/Styles.module.css";
import Header from '../FindJob/Header'
import Candidate_profile_card from './Candidate_profile_card'
import style from "./CandidateSearch.module.css"

const CandidateSearch = () => {
    const [openNewJob, setOpenNewJob] = useState(false);
    const [search, setsearch] = useState();
    const [data, setData] = useState([]);
    const [x,setx]=useState("1");
    const searchcanidate=async()=>{
        console.log("asd");
        try {
            const response = await fetch('/jobseeker/search', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ search: search })
            });
            const data = await response.json();
            if (data.success) {
              setData(data.data);
              console.log(data);
            } else {
              console.log("error1")
            }
          } catch (error) {
            console.log("error2")
          }
    }
    const myStyle = {
       width:"20vw",
       left:"20%"
      };
      const fetchData = async () => {
        try {
          const response =  await fetch('/dataemp');
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
    return (
        <>

            <Header />
            <Box p={2} mt={-4} mb={2} className={`${styles.wrapper}`}>
            
            
           
            <input  onChange={(e)=>{setsearch(e.target.value)}} placeholder='Search' type='text' className={`${style.input}`}/>
            <button onClick={searchcanidate}  type="button" className={`btn btn-outline-primary btn-lg ${style.button}  mx-2`}  >Search</button>
           
           
        </Box>
            <div className={`${style.candidate_card_display}`} style={{ display: "flex" }}>
                {data.map(data => <Candidate_profile_card key={data.id} {...data} />)}
                {/* <Candidate_profile_card />
                <Candidate_profile_card />
                <Candidate_profile_card /> */}

            </div>



        </>
    )
}

export default CandidateSearch