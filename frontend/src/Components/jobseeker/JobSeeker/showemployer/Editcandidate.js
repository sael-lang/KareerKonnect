import React,{useState} from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Editcandidate = () => {
    const  locations = useLocation();
    const navigate = useNavigate("");
    const [JbSeekName,settitle]=useState( locations.state.JbSeekName);
    const [JbSeekEmail,settypetime]=useState( locations.state.JbSeekEmail);
    const [JbSeekField,setname]=useState( locations.state.JbSeekField);
    const [JbSeekExperience,seturl]=useState( locations.state.JbSeekExperience);
    const [JbSeekUniversityName,settype]=useState( locations.state. JbSeekUniversityName);
    
    const update = async (e) => {
        e.preventDefault()
    
        const res2 = await fetch(`/updateJobSeeker/${ locations.state.id}`, {
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
        if (res2.status === 422) {
            alert("Please! Fill the Data");
          } else {
            alert("Data Updated Successfully!");
            navigate("../candidateSearch");
           
          }
    }
       
    return (

  <>    
  
  <div className="notbodybodys">
  <div className="mainboxtexts">Edit Candidate Card </div>
    <div className="row">
      <div className="columns1">
      <div className=" sub subtexts">JbSeekName:</div>
      <div className="subtexts">JbSeekEmail:</div>
      <div className="subtexts">JbSeekField:</div>
      <div className="subtexts">JbSeekExperience:</div>
  <div className="subtexts">JbSeekUniversityName :</div>
 <button
          type="submit"
          onClick={update}
           className="editbuttons"
        >
          Submit
        </button>
      </div>
      <div  className="columns2">

      <input className="inputvalues"
            type="text"
            onChange={(e)=>{settitle(e.target.value)}}
            value={ JbSeekName}
            name="JbSeekName"
            placeholder="JbSeekName"
          />
          <input className="inputvalues"
            type="text"
            onChange={(e)=>{settypetime(e.target.value)}}
            value={JbSeekEmail}
            name="JbSeekEmail"
            placeholder="type"
          />
             <input className="inputvalues"
            type="text"
            onChange={(e)=>{setname(e.target.value)}}
            value={JbSeekField}
            name="JbSeekField"
            placeholder="JbSeekField"
          />
          <input className="inputvalues"
            type="text"
            onChange={(e)=>{seturl(e.target.value)}}
            value={JbSeekExperience}
            name="JbSeekExperience"
            placeholder="JbSeekExperience"
          />
             <input className="inputvalues"
            type="text"
            onChange={(e)=>{settype(e.target.value)}}
            value={JbSeekUniversityName}
            name="JbSeekUniversityName"
            placeholder="JbSeekUniversityName"
          />
      
      </div>
      </div></div>
    <form className="mainboxs" >
   
    
    </form>
  
 </>
    )
}
export default Editcandidate