import React,{useState} from 'react';
import Header from '../PostJob/Header'
import styles from "../../employers/PersonalDetails/PersonalDetails.module.css"
import { NavLink, useNavigate } from "react-router-dom";

const Registerjob = () => {
    const [title,settitle]=useState("");
  const [typetime,settypetime]=useState("");
  const [name,setname]=useState("");
  const [url,seturl]=useState("");
  const [type,settype]=useState("");
  const [link,setlink]=useState("");
  const [description,setdescription]=useState("");
  const [skill,setskill]=useState("");
  const navigate = useNavigate("");
  const saveData = async() =>
  {try{
        const res = await fetch("/job/registerjob", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                typetime,
                name,
                url,
                type,
                link,
                description,
                skill,
            }),
          });
          const data = await res.json();

          if (res.status === 422 || !data) {
            alert("Error!");
          } else {
            navigate("../StdDashBoard");
          }
      }
      
       
   
    catch(er){
     }
}
    return (
        <>
            <Header />
            <section className={`vh-100 ${styles.personal_details_form}`}>
                <div className={`container-fluid ${styles.h_custom}`}>
                    <div className={`row d-flex justify-content-center align-items-center h-100`}>
                        <div className={`col-md-9 col-lg-6 col-xl-5`}>
                        <img src="https://www.xor.ai/hubfs/Untitled%20design%20(17)-2.png" alt="Achieve Hiring Goals With Ease" className="section-img"/>            
                        </div>
                        <div className={`col-md-8 col-lg-6 col-xl-4 offset-xl-1`}>
                            <form>


                                <div className={`${styles.divider} d-flex align-items-center my-4`}>
                                    <p className={`text-center fw-bolder  mx-3 mb-0`}>Enter JOB </p>
                                </div>

                                <div className={`form-outline mb-4`}>
                                    <input type="text" id="form3Example" className={`form-control form-control-lg`}
                                        placeholder="Enter Job title" value={title} onChange={(e)=>{settitle(e.target.value)}} />

                                </div>

                                <div className={`form-outline mb-4`}>
                                    <input type="email" id="form3Example3" className={`form-control form-control-lg`}
                                        placeholder="Enter time type" value={typetime} onChange={(e)=>{settypetime(e.target.value)}}/>

                                </div>


                                <div className={`form-outline mb-3`}>
                                    <input type="text" id="form3Example4" className={`form-control form-control-lg`}
                                        placeholder="Enter Company's Name"value={name} onChange={(e)=>{setname(e.target.value)}} />
                                </div>

                                <div className={`form-outline mb-3`}>
                                    <input type="text" id="form3Example" className={`form-control form-control-lg`}
                                        placeholder="Enter Company's url"value={url} onChange={(e)=>{seturl(e.target.value)}} />
                                </div>

                                <div className={`form-outline mb-3`}>
                                    <input type="text" id="form3Exampl" className={`form-control form-control-lg`}
                                        placeholder="Enter type  i.e. remote"value={type} onChange={(e)=>{settype(e.target.value)}} />
                                </div>

                                <div className={`form-outline mb-3`}>
                                    <input type="text" id="form3Examp" className={`form-control form-control-lg`}
                                        placeholder="Enter Job link" value={link} onChange={(e)=>{setlink(e.target.value)}}/>
                                </div>

                                <div className={`form-outline mb-3`}>
                                    <input type="text" id="form3Examp4" className={`form-control form-control-lg`}
                                        placeholder="Enter Job description " value={description} onChange={(e)=>{setdescription(e.target.value)}}/>
                                </div>


                                <div className={`form-outline mb-3`}>
                                    <input type="text" id="form3Exame4" className={`form-control form-control-lg`}
                                        placeholder="Enter skills " value={skill} onChange={(e)=>{setskill(e.target.value)}}/>
                                </div>
                                <button className={`${styles.botton} `} type="button"onClick={saveData} ><b>Save</b></button>


                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </>

    )
}

export default Registerjob