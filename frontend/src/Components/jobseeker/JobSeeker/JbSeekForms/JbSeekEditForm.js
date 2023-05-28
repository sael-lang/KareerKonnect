import React, { useState, useEffect, useContext } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import styles from "./JbSeekEditForm.module.css";
import { updateJobSeeker } from "../../context/JbSeekContextProvider";

const JbSeekEditForm = () => {
  const { setUPD_JbSeekData } = useContext(updateJobSeeker);

  const navigate = useNavigate("");

  const [inputValue, setInput] = useState({
    JbSeekName: "",
    JbSeekEmail: "",
    JbSeekField: "",
    JbSeekExperience: "",
    JbSeekUniversityName: "",
  });

  const setData = (e) => {
    const { JbSeekName, value } = e.target;
    setInput((preval) => {
      return {
        ...preval,
        [JbSeekName]: value,
      };
    });
  };

  const { JbSeek_Id } = useParams("");

  const getData = async () => {
    const res = await fetch(`/getJobSeekerData/${JbSeek_Id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
    } else {
      setInput(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const updateJobSeeker = async (e) => {
    e.preventDefault();

    const {
      JbSeekName,
      JbSeekEmail,
      JbSeekField,
      JbSeekExperience,
      JbSeekUniversityName,
    } = inputValue;

    const res2 = await fetch(`/updateJobSeeker/${JbSeek_Id}`, {
      method: "PATCH",
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

    const data2 = await res2.json();

    if (res2.status === 422 || !data2) {
      alert("Please! Fill the Data");
    } else {
      alert("Data Updated Successfully!");
      navigate("../JbSeekDashBoard");
      if (typeof setUPD_JbSeekData === "function") {
        setUPD_JbSeekData(data2);
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
      <div className={`${styles.container}`}>
        <form className={`${styles.form}`}>
          <div className={`${styles.row}`}>
            <div className={`${styles.tag}`}>
              <label
                htmlFor="exampleInputName1"
                className={`${styles.form_label}`}
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

            <div className={`${styles.tag}`}>
              <label
                htmlFor="exampleInputEmail1"
                className={`${styles.form_label}`}
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
              <div id="emailHelp" className={`form-text`}>
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
              onClick={updateJobSeeker}
              className={`${styles.submittag}`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JbSeekEditForm;
