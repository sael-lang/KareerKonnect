import React,{useState,useEffect} from 'react';
import { Box, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, IconButton } from '@mui/material';
import { Close as CloseIcon } from "@mui/icons-material";
import { format } from 'date-fns';
import styles from "../RStyles.module.css"
import axios from "axios";
import { email1 } from '../../../../mainPage/components/Registration/Signin';

const RViewJobModal = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      axios
        .get(`http://localhost:8003/student/${email1}`)
        .then((res) =>{ setData(res.data)})
        .catch((err) => console.log(err, "it has an error"));
    }, []);
    const triggers=()=>{
        fetch("http://localhost:8003/appliedads", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name:data.name,job:props.job.tile,contact:data.contact,field:data.field,studyLevel:data.studyLevel,universityName:data.universityName,image:data.data,contentType:data.contentType
             
            }),
    })}
    console.log(data)
    return (
        <Dialog open={!!Object.keys(props.job).length} fullWidth >
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    {props.job.tile} @ {props.job.companyName}
                    <IconButton onClick={props.closeModal}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box className={`${styles.Rinfo}`} display="flex">
                    <Typography margin={1} variant="caption" fontWeight={600}>Posted On :</Typography>
                    <Typography margin={1} variant="body2">{props.job.postedOn &&
                        format(props.job.postedOn, "dd/MMM/YYY HH:MM")}</Typography>
                </Box>
                <Box className={`${styles.Rinfo}`} display="flex">
                    <Typography margin={1} variant="caption" fontWeight={600}>Job type :</Typography>
                    <Typography margin={1} variant="body2">{props.job.type}</Typography>
                </Box>
                <Box className={`${styles.Rinfo}`} display="flex">
                    <Typography margin={1} variant="caption" fontWeight={600}>Job location :</Typography>
                    <Typography margin={1} variant="body2">{props.job.location}</Typography>
                </Box>
                <Box className={`${styles.Rinfo}`} display="flex">
                    <Typography margin={1} variant="caption" fontWeight={600}>Job description :</Typography>
                    <Typography margin={1} variant="body2">{props.job.description}</Typography>
                </Box>
                <Box className={`${styles.Rinfo}`} display="flex">
                    <Typography margin={1} variant="caption" fontWeight={600}>Comapny Name :</Typography>
                    <Typography margin={1} variant="body2">{props.job.companyName}</Typography>
                </Box>
                <Box className={`${styles.Rinfo}`} display="flex">
                    <Typography margin={1} variant="caption" fontWeight={600}>Company Website :</Typography>
                    <Typography margin={1} variant="body2">{props.job.companyUrl}</Typography>
                </Box>
                <Box className={`${styles.Rinfo}`} >
                    <Typography margin={1} variant="caption" fontWeight={600}>Skills :</Typography>
                    <Grid dispaly="flex" conatiner alignItems="center" >
                        {props.job.skills &&
                            props.job.skills.map((skill) =>
                            (<Grid className={`${styles.RSkills}`} display="inline-block" borderRadius={2} margin={1} padding={1} borderSize={3} item key={skill} >
                                {skill}
                            </Grid>)
                            )
                        }

                    </Grid>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={triggers} target="_blank" >Apply</Button>
            </DialogActions>
        </Dialog>
    )
}

export default RViewJobModal