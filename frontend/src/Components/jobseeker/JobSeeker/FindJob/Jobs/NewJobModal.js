import React, {useState,useEffect} from "react";
import { Box,Button,TextField, Grid, FilledInput, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Typography, IconButton,InputLabel } from '@mui/material';
import { Close as CloseIcon } from "@mui/icons-material";
import styles from "../Styles.module.css"
import { NavLink, useNavigate } from "react-router-dom";

const NewJobModal = (props) => {
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
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
    const handleClose = () => {
        setOpen(false);
    };
    const buttonData = [
        { label: 'JavaScript', value: 'JavaScript' },
        { label: 'React', value: 'React' },
        { label: 'Vue', value: 'Vue' },
        { label: 'Firebase', value: 'Firebase' },
        { label: 'MongoDb', value: 'MongoDb' },
        { label: 'Sql', value: 'Sql' },
        { label: 'Angular', value: 'Angular' },
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

      
      try{
      
          const res = await fetch("/job/registerjob", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  title,
                  type,
                  companyName,
                  link,
                  postedOn,
                  location,
                  companyUrl,
                  description,
                  skills,
              }),
            });
            const data = await res.json();
  
            if (res.status === 422 || !data) {
              alert("Error!");
            } else {
              window.alert("Data Saved Successfully!");
            }
        }
      catch(er){
       }}
      
    return (
        <Dialog open={open} fullWidth onClose={handleClose}>
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    Post Job
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                   
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput value={title} onChange={(e)=>{settitle(e.target.value)}}  placeholder="Job tiltle *" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <Select onChange={(e)=>{settypetime(e.target.value)}} fullWidth
                            disableUnderline defaultValue="Type" >
            <MenuItem value="Type">Type</MenuItem>
                <MenuItem value="Full Time">Full time</MenuItem>
                <MenuItem value="Part Time">Part time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
            </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput value={companyName}onChange={(e)=>{setname(e.target.value)}} placeholder="Company Name *" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput value={link} onChange={(e)=>{seturl(e.target.value)}}placeholder="Company URL *" disableUnderline fullWidth />
                    </Grid>

                    <Grid item xs={6}>
                        <Select  onChange={(e)=>{settype(e.target.value)}} defaultValue="Location" fullWidth disableUnderline>
            <MenuItem value="Location">Location</MenuItem>
                <MenuItem value="Remote">Remote</MenuItem>
                <MenuItem value="In-office">In-office</MenuItem>
            </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput value={companyUrl} onChange={(e)=>{setlink(e.target.value)}} placeholder="Job link *" disableUnderline fullWidth />
                    </Grid>
                    <Grid style={gridspace} item xs={12}>
                        <FilledInput  value={description} onChange={(e)=>{setdescription(e.target.value)}} placeholder="Job Description *" disableUnderline fullWidth
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
                    <button type="button" onClick={updating} className={`btn btn-primary`} >Post a Job</button>
                </Box>
            </DialogActions>
        </Dialog>
    )
}
export default NewJobModal