
import { Box, MenuItem, Select } from '@mui/material';
import React,{useState} from 'react'
import styles from "./Styles.module.css";
import NewJobModal from "./Jobs/NewJobModal"


const SearchBar = (props) => {
    const [openNewJob, setOpenNewJob] = useState(false);
    const myStyle = {
       width:"20vw",
      };
    return (
        <Box p={2} mt={-4} mb={2} className={`${styles.wrapper}`}>
            <Select defaultValue="Full time" className={`${styles.nested_components}`}>
                <MenuItem value="Full time">Full time</MenuItem>
                <MenuItem value="Part time">Part time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
            </Select>
            
            <Select defaultValue="Remote" className={`${styles.nested_components}`}>
                <MenuItem value="Remote">Remote</MenuItem>
                <MenuItem value="In-office">In-office</MenuItem>
            </Select>
            <input  type='text' style={myStyle}/>
            <button type="button" className={`btn btn-outline-primary btn-lg   mx-2`}  >Search</button>
           
            <button type="button" className={`btn btn-outline-primary btn-lg mx-2`} onClick={() => setOpenNewJob(true)} >Post a Job</button>
            {openNewJob && <NewJobModal />}
        </Box>
    )
}

export default SearchBar