import React,{useState} from 'react';
import { Box, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, IconButton } from '@mui/material';
import { Close as CloseIcon } from "@mui/icons-material";
import { format } from 'date-fns';
import styles from "./Styles.module.css"
import { useNavigate } from 'react-router-dom';



const Showdata = (props) => {
    const [open, setOpen] = useState(true);
    const handleClose = () => {
        setOpen(false);
    };const navigate = useNavigate();
    const triggers = () => {
        navigate('/viewresearcher', { state: { title: props.title } });
      
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
                    <Typography margin={1} variant="caption" fontWeight={600}> Location :</Typography>
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
            <Button onClick={triggers} target="_blank" >Show Researcher</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Showdata