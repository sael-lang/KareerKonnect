import styles from "./CandidateRSearch.module.css"
import { GoLocation } from "react-icons/go";
import React from 'react'
import { useNavigate} from 'react-router-dom';
const Candidate_Rprofile_card = (props) => {
    const navigate = useNavigate();
    const toComponentB=()=>{
        navigate('/editcandidate',{state:{id:props._id,JbSeekName:props.JbSeekName,JbSeekEmail:props.JbSeekEmail,JbSeekField:props.JbSeekField,JbSeekExperience:props.JbSeekExperience,JbSeekUniversityName:props.JbSeekUniversityName}});
          }
    return (
        <div>
            <div className={`${styles.candidate_card_container}`}>
                <div className={`${styles.candidate_image_container}`}>
                    <img style={{ width: 350, height: 245, display: "block", justifyContent: "center", alignItems: "center", width: "100%" }} src={props.image} alt="" />
                </div>
                <div className={`${styles.candidate_card_content}`}>
                    <div className={`${styles.candidate_card_title}`}>
                        <h5 style={{ margin: 0, padding: 0, textAlign: "center" }}>
                            {props.JbSeekName}

                        </h5>
                        <p className={`${styles.candidate_text}`}>{props.JbSeekEmail}</p>
                        <p className={`${styles.candidate_text}`}>{props.JbSeekExperience}</p>

                    </div>
                    <div className={`${styles.candidate_card_body}`}>
                        <p style={{ margin: 0, padding: 0 }}>
                            <GoLocation /> {props.JbSeekField} <br />
                            {props.JbSeekUniversityName}
                        </p>
                    </div>

                </div>
                <div className={`${styles.candidate_btn}`}>
                    {/* <button  onClick={()=>{toComponentB()}}>
                        <a className={`${styles.candidate_a}`}>
                            Edit
                        </a>
                    </button> */}
                </div>
            </div>
        </div>
    )
}

export default Candidate_Rprofile_card