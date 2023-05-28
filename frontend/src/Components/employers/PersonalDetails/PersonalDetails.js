import React,{useState,useEffect} from 'react';
import Header from '../PostJob/Header'
import axios from "axios";
import styles from "./PersonalDetails.module.css"
import { useNavigate } from "react-router-dom";
import { email1 } from '../../mainPage/components/Registration/Signin';
const PersonalDetails = () => {
    const [name,setname]=useState("");
  const [company,setcompany]=useState("");
  const [address,setaddress]=useState("");
  const [contact,setcontact]=useState("");
  const [email,setEmail]=useState("");
  const [role,setrole]=useState("");
  const [industry,seTindustry]=useState("");
  const [indus,setindustry]=useState("");
  const [access,accesss]=useState("employee");
  const navigate = useNavigate("");
  const [customValue, setCustomValue] = useState('');
  const [x,setx]=useState("0");
  const [y,sety]=useState("0");
  const [data, setData] = useState([]);
  console.log(email1)
  useEffect(() => {
    axios
      .get(`http://localhost:8003/employeegetting/${email1}`)
      .then((res) => {
        setname(res.data[0].name);
        setcompany(res.data[0].company);
        setaddress(res.data[0].address);
        setcontact(res.data[0].contact);
        setEmail(res.data[0].email);
        setrole(res.data[0].role);
        setindustry(res.data[0].industry);
      })
      .catch((err) => console.log(err, "it has an error"));
  }, []);
  const handleCustomValueChange = (e) => {
    setCustomValue(e.target.value);
    setx(1)
  };
  const updating=(e)=>{
    e.preventDefault();
    console.log("asd")
    if (x==1){
      seTindustry(customValue);console.log(industry);
sety(2)
  }
  else{
      seTindustry(indus);
      console.log(industry);
      sety(2)
  }
  }
  useEffect(() => {
    if(y==2){saveData()}
    console.log(industry)
  }, [industry])
  const saveData = async() =>
  {
    try{
 console.log("asd")
        const res = await fetch("http://localhost:8003/employee/registeremployee", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              company,
              address,
              contact,
              role,
              industry,
              access
            }),
          });
          const data = await res.json();

          if (res.status === 422 || !data) {
            alert("Error!");
          } 
          if (res.status === 404 || !data) {
            alert("Error!");
          }else {
            window.alert("Data Saved Successfully!");
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
                            <form onSubmit={updating}>


                                <div className={`${styles.divider} d-flex align-items-center my-4`}>
                                    <p className={`text-center fw-bolder  mx-3 mb-0`}>Enter your Information </p>
                                </div>

                                <div className={`form-outline mb-4`}>
                                    <input type="text" id="form3Example" className={`form-control form-control-lg`}
                                        placeholder="Enter Full Name" value={name} onChange={(e)=>{setname(e.target.value)}} required/>

                                </div>

                                <div className={`form-outline mb-4`}>
                                    <input type="email" id="form3Example3" className={`form-control form-control-lg`}
                                        placeholder="Enter a valid email address" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>

                                </div>


                                <div className={`form-outline mb-3`}>
                                    <input type="text" id="form3Example4" className={`form-control form-control-lg`}
                                        placeholder="Enter Company's Name"value={company} onChange={(e)=>{setcompany(e.target.value)}} required/>
                                </div>

                                <div className={`form-outline mb-3`}>
                                    <input type="text" id="form3Example" className={`form-control form-control-lg`}
                                        placeholder="Enter Company's Address"value={address} onChange={(e)=>{setaddress(e.target.value)}} required/>
                                </div>

                                <div className={`form-outline mb-3`}>
                                    <input type="number" id="form3Examp" className={`form-control form-control-lg`}
                                        placeholder="Enter Contact Number" value={contact} onChange={(e)=>{setcontact(e.target.value)}} required/>
                                </div>

                                <div className={`form-outline mb-3`}>
                                    <input type="text" id="form3Examp4" className={`form-control form-control-lg`}
                                        placeholder="Enter your role in the company " value={role} onChange={(e)=>{setrole(e.target.value)}} required/>
                                </div>


                                <div className={`form-outline mb-3`}>
                                <div>
      <select
        className={`${styles.dropdown}`}
        value={indus}
        onChange={(e) => {
            setindustry(e.target.value);
        }}
      >
        <option value="">--Select Industry--</option>
        <option value="IT">IT</option>
        <option value="CS">CS</option>
        <option value="Software Enginnering">Software Enginnering</option>
        <option value="Biology">Biology</option>
        <option value="Business">Business</option>
        <option value="Chemistry">Chemistry</option>
        <option value="Mathematics">Mathematics</option>
        <option value="Other (please specify)">Other (please specify)</option>
      </select>
      {indus === "Other (please specify)" && (
        <div>
          <label htmlFor="custom-value">Enter  value:</label>
          <input
            type="text"
            id="custom-value"
            name="custom-value"
            value={customValue}
            onChange={handleCustomValueChange}
          />
        </div>
      )}
    </div>

                                </div>
                                <button className={`${styles.botton} `} type="submit" ><b>Save</b></button>


                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </>

    )
}

export default PersonalDetails