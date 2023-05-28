import React, { useState } from 'react'
import signup from "../../images/signup-image.jpg"
import styles from "./RegStyles.module.css"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "",  })
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState("Signup as");
    const options = ['Employer', 'JobSeeker', 'Student', 'Researcher']
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
if(credentials.password===credentials.cpassword){
    const response = await fetch("http://localhost:8003/createlogin", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, access: selected })
      });
      const json = await response.json();
      console.log(json.success)
        if (json.success) {
            // Save the auth token and redirect
            alert("Thank You for signing up");
            navigate("/Signin");
            // props.showAlert("Account created Successfully!", "success");
        }
        else {
            alert("Invalid credentials or the user exist");
        }
    }
    else {
        alert("Password doesnt match");
    }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        // <form onSubmit={handleSubmit}>
        <div className={`${styles.main}`}>

            <section className={`${styles.signup}`}>
                <div className={`${styles.reg_container}`}>
                    <div className={`${styles.signup_content}`}>
                        <div className={`${styles.signup_form}`}>
                            <h2 className={`${styles.form_title}`}>Sign up</h2>
                            <form method="POST" className={`${styles.register_form}`} onSubmit={handleSubmit}>
                                <div className={`${styles.form_group}`}>
                                    
                                    <input name="name" id="name" value={credentials.name} onChange={onChange} placeholder="Your Name" required/>
                                </div>
                                <div className={`${styles.form_group}`}>
                                    
                                    <input type="email"  name="email" id="email" value={credentials.email} onChange={onChange} placeholder="Your Email" required/>
                                </div>



                                <div className={`${styles.form_group}`}>
                                  
                                    <input style={{ "-webkit-text-security": "disc" }} name="password" id="password" value={credentials.password} onChange={onChange} placeholder="Password" required/>
                                </div>
                                <div className={`${styles.form_group}`}>
                                    
                                    <input style={{ "-webkit-text-security": "disc" }} name="cpassword" id="cpassword" value={credentials.cpassword} onChange={onChange} placeholder="Confirm password" required/>
                                </div>

                                <div className={`${styles.reg_dropdown}`}>
                                    <div className={`${styles.reg_dropdown_btn}`} onClick={(e) => setIsActive(!isActive)}>{selected}
                                        <span className='fas fa-caret-down'></span>
                                    </div>
                                    {isActive && (
                                        <div className={`${styles.reg_dropdown_content}`}>
                                            {options.map(option => (
                                                <div
                                                    className={`${styles.reg_dropdown_item}`}
                                                    key={option}
                                                    onClick={() => {
                                                        setSelected(option);
                                                        setIsActive(false);
                                                    }}
                                                >
                                                    {option}
                                                    {console.log(selected)}
                                                    {console.log("Testing")}
                                                </div>
                                            ))}
                                        </div>

                                    )}
                                </div>

                                <div className={`${styles.form_group}`}>
                                    <input type="checkbox" name="agree-term" id="agree-term" className={`${styles.agree_term}`} />
                                    
                                </div>
                                <div className={`form-group ${styles.form_button}`}>
                                    <input type="submit" name="signup" id="signup" className={`${styles.form_submit}`} value="Sign up" />
                                </div>
                            </form>
                        </div>
                        <div className={`${styles.signup_image}`}>
                            <figure><img src={signup} alt="sing up " /></figure>
                            <Link to="/signin" className={`${styles.signup_image_link}`}>I am already member</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        // </form>
    )
}

export default Signup