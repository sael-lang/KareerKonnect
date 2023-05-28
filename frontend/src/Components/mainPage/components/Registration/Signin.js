import React, { useState ,useEffect} from 'react'
import signin from "../../images/signin-image.jpg"
import styles from "./RegStyles.module.css"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
let email1;
const Signin = (props) => {
    const [email, setCredentials] = useState("")
    const [password, setpassword] = useState("")
    const [access, setaccess] = useState("")
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
email1=email
        fetch("http://localhost:8003/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          }).then(response => response.json())
          .then(data => setaccess(data[0].access))
          .catch(error =>alert("wrong password"));
        

    }

    useEffect(() => {
        console.log(access)
        if(access=='Employer')
        {
            navigate('/personalDetails')
        }
        if(access=='Researcher')
        {
            navigate('/RpersonalDetails')
        }
        if(access=='JobSeeker')
        {
            navigate('/JobSeeker_DashBoard')
        }if(access=='Student')
        {
            navigate('/StdDashBoard')
        }
      }, [access]);

    return (
        <form onSubmit={handleSubmit} >
            <div className={`${styles.main} `}>
                <section className={`sign-in`}>
                    <div className={`${styles.reg_containe}`}>
                        <div className={`${styles.signin_content}`}>
                            <div className={`${styles.signin_image}`}>
                                <figure><img src={signin} alt="sing in" /></figure>
                                <Link to="/signup" className={`${styles.signup_image_l}`}>Create an account</Link>
                            </div>

                            <div className={`${styles.signin_form}`}>
                                <h2 className={`${styles.form_title}`}>Sign in</h2>
                                {/* <form method="POST" className={`${styles.register_form}`} id="login-form"> */}
                                <div className={`${styles.form_group}`}>
                                   
                                    <input type="email" name="email" value={email} onChange={(event) => setCredentials(event.target.value)}
 id="email" placeholder="Email"required />
                                </div>
                                <div className={`${styles.form_group}`}>
                                  
                                    <input type="password" name="password" value={password}  onChange={(event) => setpassword(event.target.value)} id="password" placeholder="Password" required/>
                                </div>
                                
                                    <button type="submit" name="signin" id="signin" className={`${styles.form_submit}`} >Sign in</button>
                                
                                {/* </form> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </form>
    )
}

export default Signin;
export{email1}