import React, { useState, useEffect, useContext } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import styles from "./StdEditForm.module.css";
import { updateData } from "../../context/ContextProvider";

const StdEditForm = () => {
  const { setUPdata } = useContext(updateData);

  const navigate = useNavigate("");

  const [inpval, setINP] = useState({
    name: "",
    email: "",
    contact: "",
    field: "",
    studyLevel: "",
    universityName: "",
  });

  const setdata = (e) => {
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const { id } = useParams("");

  const getData = async () => {
    const res = await fetch(`/getStudent/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
    } else {
      setINP(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const updateStudent = async (e) => {
    e.preventDefault();

    const { name, email, contact, field, studyLevel, universityName } = inpval;

    const res2 = await fetch(`/updateStudent/${id}`, {
      method: "PATCH",
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

    const data2 = await res2.json();

    if (res2.status === 422 || !data2) {
      alert("Please! Fill the Data");
    } else {
      alert("Data Updated Successfully!");
      navigate("../StdDashBoard");
      if (typeof setUPdata === "function") {
        setUPdata(data2);
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
                onChange={setdata}
                value={inpval.name}
                name="name"
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
                onChange={setdata}
                value={inpval.email}
                name="email"
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
                placeholder="Contact Number"
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
                placeholder="Level of Study"
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
                placeholder="Field of Study"
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
                placeholder="University Name"
              />
            </div>

            <button
              type="submit"
              onClick={updateStudent}
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

export default StdEditForm;
