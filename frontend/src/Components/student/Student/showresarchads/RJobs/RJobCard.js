
import styles from "../RStyles.module.css"
import React,{useState} from "react";
import { Box, Grid, Typography, Button } from '@mui/material';
import { differenceInMinutes } from "date-fns/esm";
import ViewJobModal from "./RViewJobModal"
import { useNavigate} from 'react-router-dom';
import Showdata from "./Showdata";
import { createTheme, ThemeProvider } from '@mui/material';


  
  const theme = createTheme({
    palette: {
      primary: {
        main: '#21130d', // replace with your desired color
      },
    },
  });


const JobCard = (props) => {
    const [openViewJob, setOpenViewJob] = useState(false);
    const navigate = useNavigate();
    const toComponentB=()=>{
        navigate('/editr',{state:{id:props._id,title:props.title,type:props.type,companyName:props.companyName,link:props.link,postedOn:props.postedOn,location:props.location,companyUrl:props.companyUrl,description:props.description,skills:props.skills,}});
          }
          const toComponenta=()=>{
            setOpenViewJob(true);
          }
          const toComponentc=async(value)=>{
            try {
                const response = await fetch(`http://localhost:8003/research/delete/${value}`, {
                  method: 'DELETE',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
                if (!response.ok) {
                  throw new Error('Failed to delete item.');
                }
                // handle success
              } catch (error) {
              }
              window.location.reload();
          }
    return (
    <Box p={2} className={`${styles.JobCard_wrapper}`}>
      <ThemeProvider theme={theme}>
    <Grid container alignItems="center">
        <Grid item xs>
            <Typography style={{ color: 'black' }} className={`${styles.name}`}variant="subtitle1">{props.title}</Typography>
            <Typography style={{ color: 'black' }} className={`${styles.companyName}`} variant="subtitle1">{props.companyName}</Typography>
        </Grid>
        <Grid item container xs>
        <Typography style={{ color: 'black' }} className={`${styles.companyName}`} variant="subtitle1">{props.skills}</Typography>
        </Grid>
        <Grid item container direction="column" alignItems="flex-end" xs>
            <Grid item xs>
                <Typography style={{ color: 'black' }} className={`${styles.name}`} variant="caption"> {props.postedOn} | {props.type} | {props.location}</Typography>
            </Grid>
            
            <Grid className={`${styles.flexbox}`}>
                {/* <Box mt={1}>
                    <Button variant="outlined" onClick={()=>{toComponentB()}}>Edit</Button>
                </Box> */}
                <Box mt={1}>
                    <Button variant="outlined" onClick={()=>{toComponenta()}} >Show</Button>
                    {openViewJob && <Showdata title={props.title} type={props.type} companyName={props.companyName} link={props.link} postedOn={props.postedOn} location={props.location} companyUrl={props.companyUrl} description={props.description} skills={props.skills} />}
                </Box>
                {/* <Box mt={1}>
                    <Button variant="outlined" onClick={()=>{toComponentc(props._id)}} >Delete</Button>
                </Box> */}
            </Grid>
           
        </Grid>
        
    </Grid>
    </ThemeProvider>
</Box>


    )
}
export default JobCard