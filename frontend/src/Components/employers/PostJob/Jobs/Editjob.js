import React,{useState} from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import style from "./editjob.css";
const Editjob = () => {
    const  locations = useLocation();
    const navigate = useNavigate("");
    const [title,settitle]=useState( locations.state.title);
    const [type,settypetime]=useState( locations.state.type);
    const [companyName,setname]=useState( locations.state.companyName);
    const [link,seturl]=useState( locations.state.link);
    const [location,settype]=useState( locations.state.location);
    const [companyUrl,setlink]=useState( locations.state.companyUrl);
    const [description,setdescription]=useState( locations.state.description);
    const [skills,setskill]=useState( locations.state.skills);
    const [postedOn, setCurrentTime] = useState( locations.state.postedOn);
    
    const update = async (e) => {
        e.preventDefault()
    
        const res2 = await fetch(`/updatejob/${ locations.state.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            type,
            companyName,
            link,
            postedOn,
             location,
            companyUrl,
            description,
            skills,
        }),
        });
        if (res2.status === 422) {
            alert("Please! Fill the Data");
          } else {
            alert("Data Updated Successfully!");
            navigate("../postJob");
           
          }
    }
       
    return (

  <>    
   <div className="notbodybodys">
    
    <div className="mainboxtexts">Edit Job Card </div>
    <div className="row">
      <div className="columns1">
      <div className="subtexts">Title:</div>
      <div className="subtexts">Type:</div>
      <div className="subtexts">Company Name:</div>
      <div className="subtexts">Link:</div>
  <div className="subtexts">Posted On:</div>
  <div className="subtexts">Location:</div>
  <div className="subtexts">Company URL:</div>
 <div className="subtexts">Description:</div>
 <div className="subtexts">Skills:</div>
 
      </div>
      <div  className="columns2">

      <input className="inputvalue"
            type="text"
            onChange={(e)=>{settitle(e.target.value)}}
            value={ title}
            name="title"
            placeholder="title"
          />
          <input className="inputvalue"
            type="text"
            onChange={(e)=>{settypetime(e.target.value)}}
            value={type}
            name="type"
            placeholder="type"
          />
             <input className="inputvalue"
            type="text"
            onChange={(e)=>{setname(e.target.value)}}
            value={companyName}
            name="companyName"
            placeholder="companyName"
          />
          <input className="inputvalue"
            type="text"
            onChange={(e)=>{seturl(e.target.value)}}
            value={link}
            name="link"
            placeholder="link"
          />
             <input className="inputvalue"
            type="text"
            onChange={(e)=>{setCurrentTime(e.target.value)}}
            value={postedOn}
            name="postedOn"
            placeholder="postedOn"
          />
           <input className="inputvalue"
            type="text"
            onChange={(e)=>{settype(e.target.value)}}
            value={location}
            name=" locations"
            placeholder=" location"
          />
          <input className="inputvalue"
            type="text"
            onChange={(e)=>{setlink(e.target.value)}}
            value={companyUrl}
            name="companyUrl"
            placeholder="companyUrl"
          />
          <input className="inputvalue"
            type="text"
            onChange={(e)=>{setdescription(e.target.value)}}
            value={description}
            name="description"
            placeholder="description"
          />
            <input className="inputvalue"
            type="text"
            onChange={(e)=>{setskill(e.target.value)}}
            value={skills}
            name="skills"
            placeholder="skills"
          />
      
      </div>
      </div>
      <button
          type="submit"
          onClick={update}
          className="editbutton"
        >
          Submit
        </button>
  
    </div>
    <form className="mainbox" ></form>
 </>
    )
}
export default Editjob