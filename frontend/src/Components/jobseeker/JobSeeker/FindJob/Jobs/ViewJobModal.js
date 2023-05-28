import React,{useState,useEffect} from 'react';
import { Box, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, IconButton } from '@mui/material';
import { Close as CloseIcon } from "@mui/icons-material";
import { format } from 'date-fns';
import styles from "../Styles.module.css"
import axios from "axios";
import { email1 } from '../../../../mainPage/components/Registration/Signin';

const ViewjobDataModal = (props) => {
    const [open, setOpen] = useState(true);
    const handleClose = () => {
        setOpen(false);
    };
    const [name,setName]=useState("");
	const [email,setEmail]=useState("");
	const [field,setField]=useState("");
	const [studyLevel,setStudyLevel]=useState("");
	const [universityName,setUniversityName]=useState("");
	const [file,setfile]=useState("");
    const [contentType,setcontentType]=useState("");
    const handleData = (res) => {
        setName(res.JbSeekName);
        setEmail(res.JbSeekEmail);
        setField(res.JbSeekField);
        setStudyLevel(res.JbSeekExperience);
        setUniversityName(res.JbSeekUniversityName);
        setfile(res.data);
        setcontentType(res.contentType)
      };
    const [data, setData] = useState([]);
    useEffect(() => {
      axios
        .get(`http://localhost:8003/jobseeker/${email1}`)
        .then((res) =>{handleData(res.data[0]);})
        .catch((err) => console.log(err, "it has an error"));
    }, []);
  const triggers = () => {
  console.log('in trigger');
  

  axios.post('http://localhost:8003/appliedjobs', {
    'JbSeekName': name,
    'JbSeekEmail': email,
    'job': props.title,
    'JbSeekField': field,
    'JbSeekExperience': studyLevel,
    'JbSeekUniversityName': universityName,
    'image': file,
    'contentType': contentType
  })
    .then(response => {
      // Handle successful response
      console.log(response.data);
     
    })
    .catch(error => {
      // Handle error
      console.error(error);
      alert("Error")
    });
    alert("Applied");
};
    return (
        <Dialog open={open} fullWidth >
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    {props.title} @ {props.companyName}
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box className={`${styles.info}`} display="flex">
                    <Typography margin={1} variant="caption" fontWeight={600}>Posted On :</Typography>
                    <Typography margin={1} variant="body2">{props.postedOn}</Typography>
                </Box>
                <Box className={`${styles.info}`} display="flex">
                    <Typography margin={1} variant="caption" fontWeight={600}>Job Type :</Typography>
                    <Typography margin={1} variant="body2">{props.type}</Typography>
                </Box>
                <Box className={`${styles.info}`} display="flex">
                    <Typography margin={1} variant="caption" fontWeight={600}>Job Location :</Typography>
                    <Typography margin={1} variant="body2">{props.location}</Typography>
                </Box>
                
                <Box className={`${styles.info}`} display="flex">
                    <Typography margin={1} variant="caption" fontWeight={600}>Comapny Name :</Typography>
                    <Typography margin={1} variant="body2">{props.companyName}</Typography>
                </Box>
                <Box className={`${styles.info}`} display="flex">
                    <Typography margin={1} variant="caption" fontWeight={600}>Company Website :</Typography>
                    <Typography margin={1} variant="body2">{props.companyUrl}</Typography>
                </Box>
                <Box className={`${styles.info}`} >
                    <Typography margin={1} variant="caption" fontWeight={600}>Skills :</Typography>
                    <Typography margin={1} variant="body2" fontWeight={600}>{props.skills
                        }</Typography>
                    
                </Box>
                <Box className={`${styles.info}`} display="flex">
                    <Typography margin={1} variant="caption" fontWeight={600}>Job Description :</Typography>
                    <Typography margin={1} variant="body2">{props.description}</Typography>
                </Box>
            </DialogContent>
            <DialogActions>
            <Button onClick={triggers} target="_blank" >Apply</Button>
            </DialogActions>
        </Dialog>
    )
}

export default ViewjobDataModal