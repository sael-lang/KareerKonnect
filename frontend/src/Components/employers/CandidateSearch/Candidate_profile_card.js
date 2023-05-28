
import img from "../../../Resources/img/card-image.png"
import styles from "./CandidateSearch.module.css"
import { GoLocation } from "react-icons/go";
import React,{useState} from 'react'
import { Buffer } from 'buffer';
import { useNavigate} from 'react-router-dom';
const Candidate_profile_card = (props) => {
    const navigate = useNavigate();
    const toComponentB=()=>{
        navigate('/editcandidate',{state:{id:props._id,JbSeekName:props.JbSeekName,JbSeekEmail:props.JbSeekEmail,JbSeekField:props.JbSeekField,JbSeekExperience:props.JbSeekExperience,JbSeekUniversityName:props.JbSeekUniversityName}});
          }
        
          
          console.log(props.data)

          const base64String = Buffer.from(props.data, 'binary').toString('base64');
    return (
        <div  key={props._id}>
            <div className={`${styles.candidate_card_container}`}>
                <div className={`${styles.candidate_image_container}`}>
                <img
      key={props._id}
      src={`data:${props.contentType};base64,${base64String}`}
      alt={props.base64String}
      style={{ width: 350, height: 245, display: "block", justifyContent: "center", alignItems: "center", width: "100%" }}
    />
                  
                </div>
                <div className={`${styles.candidate_card_content}`}>
                    <div className={`${styles.candidate_card_title}`}>
                        <h5 style={{ margin: 0, padding: 0, textAlign: "center" }}>
                            {props.JbSeekName}

                        </h5>
                        <p className={`${styles.candidate_text}`}>{props.JbSeekEmail}</p>
                        <p className={`${styles.candidate_text}`}>{props.JbSeekField}</p>

                    </div>
                    <div className={`${styles.candidate_card_body}`}>
                        <p style={{ margin: 0, padding: 0 }}>
                            <GoLocation /> {props.JbSeekUniversityName} <br />
                            {props.JbSeekExperience}
                        </p>
                    </div>

                </div>
               
            </div>
        </div>
    )
}

export default Candidate_profile_card