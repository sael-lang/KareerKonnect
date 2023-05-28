import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { addData } from "../../context/ContextProvider";
import styles from "./StdRegisterForm.module.css";

const StdRegisterForm = () => {
  const { setSdata } = useContext(addData);
  const navigate = useNavigate("");

  const [inpval, setINP] = useState({
    name: "",
    email: "",
    contact: "",
    field: "",
    studyLevel: "",
    universityName: "",
  });

  const setdata = async (e) => {
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addinpdata = async (e) => {
    e.preventDefault();

    const { name, email, contact, field, studyLevel, universityName } = inpval;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        contact,
        field,
        studyLevel,
        universityName,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      alert("Error!");
    } else {
      navigate("../StdDashBoard");
      if (typeof setSdata === "function") {
        setSdata(data);
      }
    }
  };

  return (
    <div className={`${styles.navup}`}>
      <nav className={`${styles.nav3}`}>
        <div className={`${styles.link12}`}>
          <button className={`${styles.btn}`}>
            <NavLink className={`${styles.header_NavMen}`} to="/">
              HomePage
            </NavLink>
          </button>
        </div>
      </nav>

      <div>
        <div className={`${styles.container12}`}>
          <form className={`${styles.form}`}>
            <div className={`${styles.row}`}>
              <div className={`${styles.tag} form-outline mb-`}>
                <label
                  htmlFor="exampleInputName1"
                  className={`${styles.label1}`}
                ></label>
                <input
                  type="text"
                  onChange={setdata}
                  value={inpval.name}
                  name="name"
                  className={`${styles.formcontrol}`}
                  id="exampleInputName1"
                  placeholder="Name"
                />
              </div>

              <div className={`${styles.tag} form-outline mb-4`}>
                <label
                  htmlFor="exampleInputEmail1"
                  className={`${styles.label1}`}
                ></label>
                <input
                  type="email"
                  onChange={setdata}
                  value={inpval.email}
                  name="email"
                  className={`${styles.formcontrol}`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="eMail"
                />
                <div id="emailHelp" className={`${styles.formtext}`}>
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div className={`${styles.tag} form-outline mb-4`}>
                <label
                  htmlFor="exampleInputContact1"
                  className={`${styles.label1}`}
                ></label>
                <input
                  type="tel"
                  onChange={setdata}
                  value={inpval.contact}
                  name="contact"
                  className={`${styles.formcontrol}`}
                  id="exampleInputContact1"
                  placeholder="Contact number"
                />
              </div>

              <div className={`${styles.tag} form-outline mb-4`}>
                <label
                  htmlFor="exampleInputStudyLevel"
                  className={`${styles.label1}`}
                ></label>
                <input
                  type="text"
                  onChange={setdata}
                  value={inpval.studyLevel}
                  name="studyLevel"
                  className={`${styles.formcontrol}`}
                  id="exampleInputStudyLevel1"
                  placeholder="Level of study"
                />
              </div>

              <div className={`${styles.tag} form-outline mb-4`}>
                <label
                  htmlFor="exampleInputField"
                  className={`${styles.label1}`}
                ></label>
                <input
                  type="text"
                  onChange={setdata}
                  value={inpval.field}
                  name="field"
                  className={`${styles.formcontrol}`}
                  id="exampleInputField1"
                  placeholder="Field of study"
                />
              </div>

              <div className={`${styles.tag} form-outline mb-4`}>
                <label
                  htmlFor="exampleInputUniversity"
                  className={`${styles.label1}`}
                ></label>
                <input
                  type="text"
                  onChange={setdata}
                  value={inpval.universityName}
                  name="universityName"
                  className={`${styles.formcontrol}`}
                  id="exampleInputUniversityName1"
                  placeholder="University name"
                />
              </div>

              <button
                type="submit"
                onClick={addinpdata}
                className={`${styles.submittag}`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StdRegisterForm;

//    => Defined a proxy in pakage.json file at line no.5 i.e."  "proxy":"http://localhost:8003",";
