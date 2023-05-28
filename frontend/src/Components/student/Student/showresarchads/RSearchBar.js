import { Box, MenuItem, Select } from '@mui/material';
import React from 'react'
import styles from "./RStyles.module.css";

const RSearchBar = (props) => {
    return (
        <Box p={2} mt={-4} mb={2} className={`${styles.Rwrapper}`}>
            <Select defaultValue="Full time" className={`${styles.Rnested_components}`}>
                <MenuItem value="Full time">Full time</MenuItem>
                <MenuItem value="Part time">Part time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
            </Select>
            <Select defaultValue="Remote" className={`${styles.Rnested_components}`}>
                <MenuItem value="Remote">Remote</MenuItem>
                <MenuItem value="In-office">In-office</MenuItem>
            </Select>
            <button type="button" className={`btn btn-outline-primary btn-lg mx-2 ${styles.btnnn}`} >Search</button>
            <button type="button" className={`btn btn-outline-primary btn-lg mx-2 ${styles.btnnn}`}>Reseracher Ad</button>
        </Box>
    )
}

export default RSearchBar