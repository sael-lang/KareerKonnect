import React, { useState, useEffect, useContext } from 'react'

import { ThemeProvider } from '@emotion/react';
import theme from "./Rtheme/RTheme"
import Header from './RHeader';
import JobCard from './RJobs/RJobCard';
import { Box, MenuItem, Select } from '@mui/material';
import { Grid } from '@mui/material';
import jobRData from "./RDummyData";
import styles from "./RStyles.module.css";
import NewJobModal from "./RJobs/RNewJobModal"

const PostJob = () => {
    const [data, setData] = useState([]);
    const [search, setsearch] = useState([]);
    const [openNewJob, setOpenNewJob] = useState(false);
    const [location,settitle]=useState("Location");
    const [type,settitl]=useState("Type");
    const [x,setx]=useState("1");
    const [y,sety]=useState(false);
    useEffect(() => {
      sety(false)
    }, [type,location]);
    if (type !== 'Type' && location !== 'Location'&& y==false){
      const handleSubmit = async (event) => {
    
        if (event) {
          event.preventDefault();
        }
        try {
          const response = await fetch('/Research/searchtypeloction', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ location: location,type:type })
          });
          const data = await response.json();
          if (data.success) {
            setData(data.data);
           
          } else {
            console.log("error")
          }
        } catch (error) {
          console.log("error")
        }
      };
    handleSubmit(); 
    }
    if(type=='Type'&& y==false){
    
    
if(location=='Remote'){
  const handleSubmit = async (event) => {
    
    if (event) {
      event.preventDefault();
    }
    try {
      const response = await fetch('/Research/searchlocation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ location: location })
      });
      const data = await response.json();
      if (data.success) {
        setData(data.data);
       
      } else {
        console.log("error")
      }
    } catch (error) {
      console.log("error")
    }
  };
handleSubmit(); 
}
if(location=='In-office'){
  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
    try {
      const response = await fetch('/Research/searchlocation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ location: location })
      });
      const data = await response.json();
      if (data.success) {
        setData(data.data);
      } else {
        console.log("error")
      }
    } catch (error) {
      console.log("error")
    }
  };
handleSubmit(); 
}}
if(location=='Location'&& y==false){
 

if(type=='Full Time'){
  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
    try {
      const response = await fetch('/Research/searchtype', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ type: type })
      });
      const data = await response.json();
      if (data.success) {
        setData(data.data);
      } else {
        console.log("error")
      }
    } catch (error) {
      console.log("error")
    }
  };
handleSubmit();  
}
if(type=='Part Time'){
  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
    try {
      const response = await fetch('/Research/searchtype', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ type: type })
      });
      const data = await response.json();
      if (data.success) {
        setData(data.data);
      } else {
        console.log("error")
      }
    } catch (error) {
      console.log("error")
    }
  };
handleSubmit();  
}
if(type=='Contract'){
  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
    try {
      const response = await fetch('/Research/searchtype', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ type: type })
      });
      const data = await response.json();
      if (data.success) {
        setData(data.data);
      } else {
        console.log("error")
      }
    } catch (error) {
      console.log("error")
    }
  };
handleSubmit(); 
}
}
    const myStyle = {
       width:"15vw",
      };
      const style = {
        display: "flex",
        flexdirection: "row"
       };
      
  const fetchData = async () => {
        try {
          const response =  await fetch('/Research');
          const jsonData = await response.json();
          
          setData(jsonData.data);
        } catch (error) {
          console.error(error);
        }
      }
      if (x==1){
      fetchData();
      setx(2);
      }
      const  searchdata = async() =>{
        sety(true)
        console.log(search)
        if(type||location){
          try {
            const response = await fetch('/Research/searching', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ search: search,type:type,location:location })
            });
            const data = await response.json();
            if (data.success) {
              setData(data.data);
              console.log(data);
            } else {
              console.log("error1")
            }
          } catch (error) {
            console.log("error2")
          }
        }
        else{
        try {
          const response = await fetch('/Research/search', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ search: search })
          });
          const data = await response.json();
          if (data.success) {
            setData(data.data);
            console.log(data);
          } else {
            console.log("error1")
          }
        } catch (error) {
          console.log("error2")
        }}
        }
        if (data.length === 0) {
          return (<>
            {/* <EmployerNavbar /> */}

            <ThemeProvider theme={theme}>
                <Header />
                <section className={`${styles.body}`}>
                
                <Grid container justifyContent="center">
                    <Grid item xs={10}>
                    <Box p={2} mt={-4} mb={2} className={`${styles.wrapper}`}>
            <Select onChange={(e)=>{settitl(e.target.value)}} defaultValue="Type" className={`${styles.nested_components}`}>
            <MenuItem value="Type">Type</MenuItem>
                <MenuItem value="Full Time">Full time</MenuItem>
                <MenuItem value="Part Time">Part time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
            </Select>
            
            <Select  onChange={(e)=>{settitle(e.target.value)}} defaultValue="Location" className={`${styles.nested_components}`}>
            <MenuItem value="Location">Location</MenuItem>
                <MenuItem value="Remote">Remote</MenuItem>
                <MenuItem value="In-office">In-office</MenuItem>
            </Select>
            <form style={style}>
            <input value={search} placeholder='Search' onChange={(e)=>{setsearch(e.target.value)}} type='text' style={myStyle}/>
            <button onClick={searchdata} style={myStyle} type="button" className={`btn btn-outline-primary btn-lg   mx-3`}  >Search</button>
            </form>
            {/* <button type="button" className={`btn btn-outline-primary btn-lg mx-2`} onClick={() => setOpenNewJob(true)} >Post an Ad</button> */}
            {openNewJob && <NewJobModal />}
        </Box>
        <div style={styles}>
           No Data found
          </div>

                    </Grid>
                </Grid>
                </section>
            </ThemeProvider>
            
        </>
    )
}
          
    return (
        <>
        

            {/* <EmployerNavbar /> */}

            <ThemeProvider theme={theme}>
                <Header />
                <section className={`${styles.body}`}>
                
                <Grid container justifyContent="center">
                    <Grid item xs={10}>
                    <Box p={2} mt={-4} mb={2} className={`${styles.wrapper}`}>
            <Select onChange={(e)=>{settitl(e.target.value)}} defaultValue="Type" className={`${styles.nested_components}`}>
            <MenuItem value="Type">Type</MenuItem>
                <MenuItem value="Full Time">Full time</MenuItem>
                <MenuItem value="Part Time">Part time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
            </Select>
            
            <Select  onChange={(e)=>{settitle(e.target.value)}} defaultValue="Location" className={`${styles.nested_components}`}>
            <MenuItem value="Location">Location</MenuItem>
                <MenuItem value="Remote">Remote</MenuItem>
                <MenuItem value="In-office">In-office</MenuItem>
            </Select>
            <form style={style}>
            <input value={search} placeholder='Search' onChange={(e)=>{setsearch(e.target.value)}} type='text' style={myStyle}/>
            <button onClick={searchdata} style={myStyle} type="button" className={`btn btn-outline-primary btn-lg   mx-3`}  >Search</button>
            </form>
            {/* <button type="button" className={`btn btn-outline-primary btn-lg mx-2`} onClick={() => setOpenNewJob(true)} >Post an Ad</button> */}
            {openNewJob && <NewJobModal />}
        </Box>
                        {data.map((job) => (<JobCard key={job.id} {...job} />))}

                    </Grid>
                </Grid>
                </section>
            </ThemeProvider>
            
        </>
    )
}

export default PostJob