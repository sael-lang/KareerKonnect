import React,{useState,useEffect} from "react";
import { Box,Button,TextField, Grid, FilledInput, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Typography, IconButton } from '@mui/material';
import { Close as CloseIcon } from "@mui/icons-material";
import styles from "../RStyles.module.css"
import axios from "axios";

import { NavLink, useNavigate } from "react-router-dom";
const RNewJobModal = (props) => {
  const [open, setOpen] = useState(true);
  const [title,settitle]=useState("");
  const [type,settypetime]=useState("");
  const [companyName,setname]=useState("");
  const [link,seturl]=useState("");
  const [location,settype]=useState("");
  const [companyUrl,setlink]=useState("");
  const [description,setdescription]=useState("");
  const [skills,setskill]=useState("");
  const navigate = useNavigate("");
  const [postedOn, setCurrentTime] = useState(new Date());
  const [showInput, setShowInput] = useState(false);
  const [update, updatevalue] = useState("");
  const [x, setx] = useState("1");

  const handleClose = () => {
      setOpen(false);
  };
  const buttonData = [
      { label: 'Information Retrieval', value: 'Information Retrieval' },
      { label: 'Critical Thinking', value: 'Critical Thinking' },
      { label: 'Problem Solving', value: 'Problem Solving' },
      { label: 'Data Collection and Analysis', value: 'Data Collection and Analysis' },
      { label: 'Literature Review', value: 'Literature Review' },
      { label: 'Communication Skills', value: 'Communication Skills' },
      { label: 'Collaboration', value: 'Collaboration' },
      { label: 'Others', value: 'Others' },
    ];
    const myStyle = {
      width: "9vw",
      background: "black",
      color: "white",
      transition: "all 0.3s ease",
      "&:hover": {
        background: "white",
        color: "black"
      },
      "&:active": {
        background: "black",
        color: "white"
      }
    }
    
     const gridspace = {
      margin: "0 0 10px 0" // top right bottom left
    };
    const otherspace = {
      margin: "10px 0 0 10px" // top right bottom left
    };
     const myStyl = {
      margin:"-5px"
     };
// function to add a new value to the list
const addValue = (newValue) => {
  if(newValue=='Others')
  {
    setShowInput(true);
  }
  else{
  setskill((prevValues) => `${prevValues}, ${newValue}`);}
  
};
    const updating =()=>{if (update) {
      console.log(update)
      const updatedSkills = `${skills}, ${update}`;
      
      setskill(updatedSkills);
     setx(2);

    }
    else{setx(2);}
  }
    useEffect(() => {
      if(x==2)
      {
        saveData()
      }
      console.log(skills)
    }, [skills,x])
  const saveData = async() =>
  {
console.log("savedata")
    
    
      const currentDate = new Date();
      const formattedDate = currentDate.toDateString()
      setCurrentTime(formattedDate)
      const response = await axios.post("http://localhost:8003/Research/register", {
        title,
        type,
        companyName,
        link,
        postedOn,
        location,
        companyUrl,
        description,
        skills,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    
      const data = response.data;

          if (response.status === 422 || !data) {
            alert("Error!");
          } 
          if (response.status === 404 ) {
            alert("Error!");
          } 
          else {
            window.alert("Data Saved Successfully!");
            window.location.reload();
          }
    }
    

    return (
      <Dialog open={open} fullWidth onClose={handleClose}>
      <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
              Post Ad
              <IconButton onClick={handleClose}>
                  <CloseIcon />
              </IconButton>
             
          </Box>
      </DialogTitle>
      <DialogContent>
          <Grid container spacing={2}>
              <Grid item xs={6}>
                  <FilledInput value={title} onChange={(e)=>{settitle(e.target.value)}}  placeholder="Research Ad Title *" disableUnderline fullWidth />
              </Grid>
              <Grid item xs={6}>
                  <Select sx={{ backgroundColor: 'rgba(240,240,240,255)' }} onChange={(e)=>{settypetime(e.target.value)}} fullWidth
                      disableUnderline defaultValue="Type" >
      <MenuItem value="Type">Type</MenuItem>
          <MenuItem value="Full Time">Full time</MenuItem>
          <MenuItem value="Part Time">Part time</MenuItem>
          <MenuItem value="Contract">Contract</MenuItem>
      </Select>
              </Grid>
              <Grid item xs={6}>
                  <FilledInput value={companyName}onChange={(e)=>{setname(e.target.value)}} placeholder="Research Institution *" disableUnderline fullWidth required/>
              </Grid>
              <Grid item xs={6}>
                  <FilledInput value={link} onChange={(e)=>{seturl(e.target.value)}}placeholder="Institute's URL *" disableUnderline fullWidth required/>
              </Grid>

              <Grid item xs={6}>
                  <Select  sx={{ backgroundColor: 'rgba(240,240,240,255)' }} onChange={(e)=>{settype(e.target.value)}} defaultValue="Location" fullWidth disableUnderline required>
      <MenuItem value="Location">Location</MenuItem>
          <MenuItem value="Remote">Remote</MenuItem>
          <MenuItem value="In-office">In-office</MenuItem>
      </Select>
              </Grid>
              <Grid item xs={6}>
                  <FilledInput value={companyUrl} onChange={(e)=>{setlink(e.target.value)}} placeholder="Research link *" disableUnderline fullWidth required/>
              </Grid>
              <Grid style={gridspace} item xs={12}>
                  <FilledInput  value={description} onChange={(e)=>{setdescription(e.target.value)}} placeholder="Research Description *" disableUnderline fullWidth
                      multiline
                      rows={4}
                  />
              </Grid>
          </Grid>
          <Grid container spacing={2}>
{buttonData.map((button) => (
  <Grid item key={button.label}>
    <Button variant="fab" style={myStyle} onClick={() => addValue(button.value)}>
      {button.label}
    </Button>
 
</Grid>
))}
   {showInput && (
  <TextField style={otherspace}
    label="Other Value"
    value={update}
    onChange={(e)=>{updatevalue(e.target.value)}}
  />
)}
</Grid>
      </DialogContent>
      <DialogActions>
          <Box color="red" width="100%" display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="caption">*Required Fields</Typography>
              <button type="button" onClick={updating} className={`btn btn-primary`} >Post an AD</button>
          </Box>
      </DialogActions>
  </Dialog>

    )
}
export default RNewJobModal