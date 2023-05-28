import styles from "../../CandidateRSearch/CandidateRSearch.module.css"
import { GoLocation } from "react-icons/go";
import React from 'react'
import { useNavigate} from 'react-router-dom';
const Candidate_Rprofile_card = (props) => {
    const base64String = Buffer.from(props.data, 'binary').toString('base64');
    return (
        <div>
            <div className={`${styles.candidate_card_container}`}>
                <div className={`${styles.candidate_image_container}`}>
                <img
      key={props._id}
      src={`data:${props.contentType};base64,${base64String}`}
      alt={props.contentType}
      style={{ width: 350, height: 245, display: "block", justifyContent: "center", alignItems: "center", width: "100%" }}
    />
                </div>
                <div className={`${styles.candidate_card_content}`}>
                    <div className={`${styles.candidate_card_title}`}>
                        <h5 style={{ margin: 0, padding: 0, textAlign: "center" }}>
                            {props.name}

                        </h5>
                        <p className={`${styles.candidate_text}`}>{props.email}</p>
                        <p className={`${styles.candidate_text}`}>{props.contact}</p>

                    </div>
                    <div className={`${styles.candidate_card_body}`}>
                        <p style={{ margin: 0, padding: 0 }}>
                            <GoLocation /> {props.field} <br />
                            {props.studyLevel} {props.universityName}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Candidate_Rprofile_card