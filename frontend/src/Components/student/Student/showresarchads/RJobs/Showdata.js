import React,{useState,useEffect} from 'react';
import { Box, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, IconButton } from '@mui/material';
import { Close as CloseIcon } from "@mui/icons-material";
import { format } from 'date-fns';
import styles from "./Styles.module.css"
import axios from "axios";
import { email1 } from '../../../../mainPage/components/Registration/Signin';


const Showdata = (props) => {
    const [open, setOpen] = useState(true);
    const [name,setName]=useState("");
	const [email,setEmail]=useState("");
	const [contact,setContact]=useState("");
	const [field,setField]=useState("");
	const [studyLevel,setStudyLevel]=useState("");
	const [universityName,setUniversityName]=useState("");
	const [file,setfile]=useState("");
    const [contentType,setcontentType]=useState("");
    const handleClose = () => {
        setOpen(false);
    };
    const handleData = (res) => {
        setName(res.name);
        setEmail(res.email);
        setContact(res.contact);
        setField(res.field);
        setStudyLevel(res.studyLevel);
        setUniversityName(res.universityName);
        setfile(res.data);
        setcontentType(res.contentType)
      };
    const [data, setData] = useState([]);
    useEffect(() => {
      axios
        .get(`http://localhost:8003/student/${email1}`)
        .then((res) =>{handleData(res.data[0]);})
        .catch((err) => console.log(err, "it has an error"));
    }, []);
  const triggers = () => {
  console.log('in trigger');
  const formData = new FormData();

  formData.append('name', name);
  formData.append('job', props.title);
  formData.append('email', email);
  formData.append('contact', contact);
  formData.append('field', field);
  formData.append('studyLevel', studyLevel);
  formData.append('universityName', universityName);
  formData.append('image', file);
  formData.append('contentType', contentType);

  
  

  axios.post('http://localhost:8003/appliedads', { 
    'name': name,
    'email': email,
    'job': props.title,
    'contact': contact,
    'field': field,
    'studyLevel': studyLevel,
    'universityName': universityName,
    'image': file,
    'contentType': contentType
  })
    .then(response => {
      // Handle successful response
      console.log('Request successful:', response.data);
     
      // Additional logic here
    })
    .catch(error => {
      // Handle error
      console.error('Request error:', error);
      alert("error")
      // Additional error handling logic here
    });
    alert("Applied")
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
                    <Typography margin={1} variant="caption" fontWeight={600}> Type :</Typography>
                    <Typography margin={1} variant="body2">{props.type}</Typography>
                </Box>
                <Box className={`${styles.info}`} display="flex">
                    <Typography margin={1} variant="caption" fontWeight={600}>  Location :</Typography>
                    <Typography margin={1} variant="body2">{props.location}</Typography>
                </Box>
               
                <Box className={`${styles.info}`} display="flex">
                    <Typography margin={1} variant="caption" fontWeight={600}>Institute Name :</Typography>
                    <Typography margin={1} variant="body2">{props.companyName}</Typography>
                </Box>
                <Box className={`${styles.info}`} display="flex">
                    <Typography margin={1} variant="caption" fontWeight={600}>Institute Website :</Typography>
                    <Typography margin={1} variant="body2">{props.companyUrl}</Typography>
                </Box>
                <Box className={`${styles.info}`} >
                    <Typography margin={1} variant="caption" fontWeight={600}>Skills :</Typography>
                    <Typography margin={1} variant="body2" fontWeight={600}>{props.skills
                        }</Typography>
                    
                </Box>
                 <Box className={`${styles.info}`} display="flex">
                    <Typography margin={1} variant="caption" fontWeight={600}>Research Description :</Typography>
                    <Typography margin={1} variant="body2">{props.description}</Typography>
                </Box>
            </DialogContent>
            <DialogActions>
            <Button onClick={triggers} target="_blank" >Apply</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Showdata