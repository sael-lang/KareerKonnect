import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { addJobSeeker } from "../../context/JbSeekContextProvider";
import styles from "./JbSeekRegisterForm.module.css";

const JbSeekRegisterForm = () => {
  const { set_JbSeekData } = useContext(addJobSeeker);
  const navigate = useNavigate("");

  const [inputValue, setInput] = useState({
    JbSeekName: "",
    JbSeekEmail: "",
    JbSeekField: "",
    JbSeekExperience: "",
    JbSeekUniversityName: "",
  });

  const setData = async (e) => {
    const { name, value } = e.target;
    setInput((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addData = async (e) => {
    e.preventDefault();
    const {
      JbSeekName,
      JbSeekEmail,
      JbSeekField,
      JbSeekExperience,
      JbSeekUniversityName,
    } = inputValue;

    const res = await fetch("/registerJobSeeker", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        JbSeekName,
        JbSeekEmail,
        JbSeekField,
        JbSeekExperience,
        JbSeekUniversityName,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      alert("Error!");
    } else {
      navigate("../jobSeekerDashBoard");
      if (typeof set_JbSeekData === "function") {
        set_JbSeekData(data);
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
                  onChange={setData}
                  value={inputValue.JbSeekName}
                  name="JbSeekName"
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
                  onChange={setData}
                  value={inputValue.JbSeekEmail}
                  name="JbSeekEmail"
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
                  htmlFor="exampleInputField"
                  className={`${styles.label1}`}
                ></label>
                <input
                  type="text"
                  onChange={setData}
                  value={inputValue.JbSeekField}
                  name="JbSeekField"
                  className={`${styles.formcontrol}`}
                  id="exampleInputField1"
                  placeholder="Field of Study"
                />
              </div>

              <div className={`${styles.tag} form-outline mb-4`}>
                <label
                  htmlFor="exampleInputExperience1"
                  className={`${styles.label1}`}
                ></label>
                <input
                  type="text"
                  onChange={setData}
                  value={inputValue.JbSeekExperience}
                  name="JbSeekExperience"
                  className={`${styles.formcontrol}`}
                  id="exampleInputExperience1"
                  placeholder="Year of Experience"
                />
              </div>

              <div className={`${styles.tag} form-outline mb-4`}>
                <label
                  htmlFor="exampleInputUniversity"
                  className={`${styles.label1}`}
                ></label>
                <input
                  type="text"
                  onChange={setData}
                  value={inputValue.JbSeekUniversityName}
                  name="JbSeekUniversityName"
                  className={`${styles.formcontrol}`}
                  id="exampleInputUniversityName1"
                  placeholder="University Name"
                />
              </div>

              <button
                type="submit"
                onClick={addData}
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

export default JbSeekRegisterForm;
