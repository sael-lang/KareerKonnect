import React,{useState,useEffect}  from 'react'
import Header from '../RPostJob/RHeader'
import styles from "./RPersonalDetails.module.css"
import bgImg from '../../../Resources/img/img1.jpg';
import { useForm } from 'react-hook-form';
import {  useNavigate } from "react-router-dom";
import { email1 } from '../../mainPage/components/Registration/Signin';
import axios from "axios";
const RPersonalDetails = () => {
    const [FullName,setname]=useState("");
    const navigate = useNavigate("");
    const [Email,setcompany]=useState("");
    const [Domain,setaddress]=useState("");
    const [Role,setcontact]=useState("");
    const [Years,setEmail]=useState("");
    const [University,setrole]=useState("");
    const [access,accesss]=useState("researcher");
    const {handleSubmit } = useForm()
    console.log(email1)
    useEffect(() => {
        axios
          .get(`http://localhost:8003/researchergetting/${email1}`)
          .then((res) => {
            setname(res.data[0].FullName);
            setcompany(res.data[0].Email);
            setaddress(res.data[0].Domain);
            setcontact(res.data[0].Role);
            setEmail(res.data[0].Years);
            setrole(res.data[0].University);
          })
          .catch((err) => console.log(err, "it has an error"));
          console.log(Domain)
      }, []);
    const onSubmit = async() => {
        const res = await fetch("/Researcher/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                FullName,
                Email,
                Domain,
                Role,
                Years,
                University,
                access
            }),
          });
          const data = await res.json();

          if (res.status === 422 || !data) {
            alert("Error!");
          } else {
            window.alert("Data Saved Successfully!");
          }
    };
    return (
        <>
        <section className={`${styles.body}`}>
            <Header />
            
        <div className={`${styles.register}`}>
            <div className={`${styles.col_1}`}>
                <h2>Enter your Detail</h2>
                <span>Enter the Researcher detail register yourself and enjoy the services</span>

                <form id='form' className={`${styles.flex} ${styles.flex_col}`} onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" value={FullName} onChange={(e)=>{setname(e.target.value)}}  placeholder='FullName' required/>
                    <input type="email"value={Email} onChange={(e)=>{setcompany(e.target.value)}}  placeholder='Email' required/>
                    <input type="text" value={Domain} onChange={(e)=>{setaddress(e.target.value)}}  placeholder='Research Domain' required/>
                    <input type="text" value={Role} onChange={(e)=>{setcontact(e.target.value)}}  placeholder='Enter Role'required/>
                    <input type="text" value={Years} onChange={(e)=>{setEmail(e.target.value)}}  placeholder='Experience(Number of Years)' required/>
                    <input type="text" value={University} onChange={(e)=>{setrole(e.target.value)}}  placeholder='University Name'required/>
                  
                    <button className={`${styles.btn}`}>Submit</button>
                </form>
            </div>
            <div className={`${styles.col_2}`}>
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
        </>
    )
}

export default RPersonalDetails