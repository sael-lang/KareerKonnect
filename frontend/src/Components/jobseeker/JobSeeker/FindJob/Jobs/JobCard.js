import React,{useState} from "react";
import { Box, Grid, Typography, Button } from '@mui/material';
import styles from "../Styles.module.css"
import { differenceInMinutes } from "date-fns/esm";
import ViewJobModal from "./ViewJobModal"
import { useNavigate} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';


  
  const theme = createTheme({
    palette: {
      primary: {
        main: '#7e90f4', // replace with your desired color
      },
    },
  });
  


const JobCard = (props) => {
    const [openViewJob, setOpenViewJob] = useState(false);
    const navigate = useNavigate();
    const toComponentB=()=>{
        navigate('/editjob',{state:{id:props._id,title:props.title,type:props.type,companyName:props.companyName,link:props.link,postedOn:props.postedOn,location:props.location,companyUrl:props.companyUrl,description:props.description,skills:props.skills,}});
          }
          const toComponenta=()=>{
            setOpenViewJob(true);
          }
          const toComponentc=async(value)=>{
            try {
                const response = await fetch(`http://localhost:8003/job/delete/${value}`, {
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
            <Grid container alignItems="center">
                <Grid item xs>
                    <Typography variant="subtitle1">{props.title}</Typography>
                    <Typography className={`${styles.companyName}`} variant="subtitle1">{props.companyName}</Typography>
                </Grid>
                <Grid item container xs>
                <Typography className={`${styles.companyName}`} variant="subtitle1">{props.skills}</Typography>
                </Grid>
                <Grid item container direction="column" alignItems="flex-end" xs>
                    <Grid item xs>
                        <Typography variant="caption"> {props.postedOn} | {props.type} | {props.location}</Typography>
                    </Grid>
                    <ThemeProvider theme={theme}>
                    <Grid className={`${styles.flexbox}`}>
                        {/* <Box mt={1}>
                            <Button className={`${styles.fff}`} variant="outlined" onClick={()=>{toComponentB()}}>Edit</Button>
                        </Box> */}
                        <Box mt={1}>
                    <Button variant="outlined" onClick={()=>{toComponenta()}} >Show</Button>
                    {openViewJob && <ViewJobModal title={props.title} type={props.type} companyName={props.companyName} link={props.link} postedOn={props.postedOn} location={props.location} companyUrl={props.companyUrl} description={props.description} skills={props.skills} />}
                </Box>
                {/* <Box mt={1}>
                    <Button variant="outlined" onClick={()=>{toComponentc(props._id)}} >Delete</Button>
                </Box> */}
                    </Grid>
                    </ThemeProvider>
                </Grid>
                
            </Grid>
        </Box>


    )
}
export default JobCard