import React,{useState,useEffect} from 'react';
import logo3 from './images/resource/mp1.jpg';
import logo4 from './images/resource/l1.png';
import logo5 from './images/resource/l2.png';
import logo6 from './images/resource/l3.png';
import Header from "./RHeader"
import logo7 from './images/resource/l4.png';
import logo8 from './images/resource/l5.png';
import logo12 from './images/resource/es1.jpg';
import axios from "axios";
import './css/bootstrap-grid.css';
import './css/animate.min.css';
import './css/style.css';
import { email1 } from '../../../mainPage/components/Registration/Signin';
import './css/responsive.css';
import './css/colors/colors.css';
import './css/bootstrap.css';
const JbSeekDashBoard = () => {
	console.log(email1)
	const [name,setname]=useState("");
	const [email,setEmail]=useState("");
	const [contact,setcontact]=useState("");
	const [field,setfield]=useState("");
	const [studyLevel,setstudyLevel]=useState("");
	const [universityName,setuniversityName]=useState("");
	const [file,setfile]=useState("");
	useEffect(() => {
		axios
		  .get(`http://localhost:8003/student/${email1}`)
		  .then((res) => {
			setname(res.data[0].name);
			setEmail(res.data[0].email);
			setcontact(res.data[0].contact);
			setfield(res.data[0].field);
			setstudyLevel(res.data[0].studyLevel);
			setuniversityName(res.data[0].universityName);
		  })
		  .catch((err) => console.log(err, "it has an error"));
	  }, []);
	  const handleFileUpload = (event) => {
		const file = event.target.files[0];
		const formData = new FormData();
		formData.append('pdf', file);
		formData.append('filename', email1);
		fetch('http://localhost:8003/upload-pdf', {
		  method: 'POST',
		  body: formData,
		})
		  .then(response => {
			// Handle response from the server
		  })
		  .catch(error => {
			console.log(error);
		  });
	  };
	const saveData = async() =>
  { const formData = new FormData();
	formData.append('name', name);
	formData.append('email', email);
	formData.append('contact', contact);
	formData.append('field', field);
	formData.append('studyLevel', studyLevel);
	formData.append('universityName', universityName);
	formData.append('file', file);
	axios.post("http://localhost:8003/student", formData, { // receive two parameter endpoint url ,form data 
  })
  alert("Data Saved")
   
}
  return (
	<>
  

	<div class="theme-layout" id="scrollup">
		
	
		<Header/>
		

	
		<section>
			<div class="block remove-top">
				<div class="container">
					 <div class="row no-gape">
						 <aside class="col-lg-3 column border-right">
							 <div class="widget">
								 <div class="tree_widget-sec">
								 
								 </div>
							 </div>
							 <div class="widget">
								 <div class="skill-perc">
									 
									 
								 </div>
							 </div>
						 </aside>
						 <div class="col-lg-9 column">
							 <div class="padding-left">
								 <div class="manage-jobs-sec">
								
									 <div class="border-title"><h3>Enter your Information</h3></div>
									 <div class="resumeadd-form">	<form onSubmit={saveData}>
										 <div class="row">
											 <div class="col-lg-12">
												<input className='imagesss'onChange={(e)=>{setfile(e.target.files[0])} }  type="file"required/>

												 <span class="pf-title"> Name</span>
												 <div class="pf-field">
													 <input placeholder="Name" value={name} onChange={(e)=>{setname(e.target.value)}} type="text"required/>
												 </div>
											 </div>
											 <div class="col-lg-6">
												 <span class="pf-title">Email</span>
												 <div class="pf-field">
													 <input placeholder="Email" value={email} type="text"  onChange={(e)=>{setEmail(e.target.value)}} class="form-control datepicker"required/>
												 </div>
											 </div>
											 <div class="col-lg-6">
												 <span class="pf-title"> Contact</span>
												 <div class="pf-field">
													 <input placeholder="Contact" type="text" value={contact} onChange={(e)=>{setcontact(e.target.value)}} class="form-control datepicker"required/>
												 </div>
											 </div>
											 <div class="col-lg-12">
												 <span class="pf-title">Field </span>
												 <div class="pf-field">
													 <input placeholder="Field" value={field} onChange={(e)=>{setfield(e.target.value)}} type="text"required/>
												 </div>
											 </div>
											 <div class="col-lg-12">
												 <span class="pf-title"> Study Level</span>
												 <div class="pf-field">
													 <input placeholder="Study Level" value={studyLevel}  onChange={(e)=>{setstudyLevel(e.target.value)}} type="text"required/>
												 </div>
											 </div>
											 <div class="col-lg-12">
												 <span class="pf-title">University Name </span>
												 <div class="pf-field">
													 <input placeholder="University Name" value={universityName}  onChange={(e)=>{setuniversityName(e.target.value)}} type="text"required/>
												 </div>
											 </div>
											 <div class="col-lg-12">
												  <button  type="submit">Save</button>
											 </div>
										 </div>
										 </form>
										 <div>Enter pdf</div>
									 <input type="file" accept=".pdf" onChange={handleFileUpload} />
									 </div>
									 </div> 
									 </div>		
						</div>
					 </div>
				</div>
			</div>
		</section>
	
		
	
	</div>
	
	<div class="profile-sidebar">
		<span class="close-profile"><i class="la la-close"></i></span>
		<div class="can-detail-s">
			<div class="cst"><img src={logo12} alt="" /></div>
			<h3>David CARLOS</h3>
			<span><i>UX / UI Designer</i> at Atract Solutions</span>
			<p>creativelayers088@gmail.com</p>
			<p>Member Since, 2017</p>
			<p><i class="la la-map-marker"></i>Istanbul / Turkey</p>
		</div>
		<div class="tree_widget-sec">
			<ul>
				<li><a href="candidates_profile.html" title=""><i class="la la-file-text"></i>My Profile</a></li>
				<li><a href="candidates_my_resume.html" title=""><i class="la la-briefcase"></i>My Resume</a></li>
				<li><a href="candidates_shortlist.html" title=""><i class="la la-money"></i>Shorlisted Job</a></li>
				<li><a href="candidates_applied_jobs.html" title=""><i class="la la-paper-plane"></i>Applied Job</a></li>
				<li><a href="candidates_job_alert.html" title=""><i class="la la-user"></i>Job Alerts</a></li>
				<li><a href="candidates_cv_cover_letter.html" title=""><i class="la la-file-text"></i>Cv & Cover Letter</a></li>
				<li><a href="candidates_change_password.html" title=""><i class="la la-flash"></i>Change Password</a></li>
				<li><a href="#" title=""><i class="la la-unlink"></i>Logout</a></li>
			</ul>
		</div>
	</div>
	
	<div class="view-resumesec">
		<div class="view-resumes">
			<span class="close-resume-popup"><i class="la la-close"></i></span>
			<h3>13 Times Viewed By 8 Companies.</h3>
			<div class="job-listing wtabs">
				<div class="job-title-sec">
					<div class="c-logo"> <img src={logo4} alt="" /> </div>
					<h3><a href="#" title="">Web Designer / Developer</a></h3>
					<span>Massimo Artemisis</span>
					<div class="job-lctn">Sacramento, California</div>
				</div>
				<span class="date-resume">11.02.2017</span>
			</div> 
			<div class="job-listing wtabs">
				<div class="job-title-sec">
					<div class="c-logo"> <img src={logo5} alt="" /> </div>
					<h3><a href="#" title="">C Developer (Senior) C .Net</a></h3>
					<span>Massimo Artemisis</span>
					<div class="job-lctn"><i class="la la-map-marker"></i>Sacramento, California</div>
				</div>
				<span class="date-resume">11.02.2017</span>
			</div> 
			<div class="job-listing wtabs">
				<div class="job-title-sec">
					<div class="c-logo"> <img src={logo6} alt="" /> </div>
					<h3><a href="#" title="">Web Designer / Developer</a></h3>
					<span>Massimo Artemisis</span>
					<div class="job-lctn">Sacramento, California</div>
				</div>
				<span class="date-resume">11.02.2017</span>
			</div> 
			<div class="job-listing wtabs">
				<div class="job-title-sec">
					<div class="c-logo"> <img src={logo7} alt="" /> </div>
					<h3><a href="#" title="">Web Designer / Developer</a></h3>
					<span>Massimo Artemisis</span>
					<div class="job-lctn">Sacramento, California</div>
				</div>
				<span class="date-resume">11.02.2017</span>
			</div> 
		</div>
	</div>
	
	<div class="follow-companiesec">
		<div class="follow-companies">
			<span class="close-follow-company"><i class="la la-close"></i></span>
			<h3>Follow Companies.</h3>
			<ul id="scrollbar">
				<li>
					<div class="job-listing wtabs">
						<div class="job-title-sec">
							<div class="c-logo"> <img src={logo4} alt="" /> </div>
							<h3><a href="#" title="">Web Designer / Developer</a></h3>
							<div class="job-lctn">Sacramento, California</div>
						</div>
						<a href="#" title="" class="go-unfollow">Unfollow</a>
					</div> 	
				</li>
				<li>
					<div class="job-listing wtabs">
						<div class="job-title-sec">
							<div class="c-logo"> <img src={logo5} alt="" /> </div>
							<h3><a href="#" title="">Tix Dog</a></h3>
							<div class="job-lctn">Sacramento, California</div>
						</div>
						<a href="#" title="" class="go-unfollow">Unfollow</a>
					</div> 	
				</li>
				<li>
					<div class="job-listing wtabs">
						<div class="job-title-sec">
							<div class="c-logo"> <img src={logo5} alt="" /> </div>
							<h3><a href="#" title="">StarHealth</a></h3>
							<div class="job-lctn">Sacramento, California</div>
						</div>
						<a href="#" title="" class="go-unfollow">Unfollow</a>
					</div> 	
				</li>
				<li>
					<div class="job-listing wtabs">
						<div class="job-title-sec">
							<div class="c-logo"> <img src={logo6} alt="" /> </div>
							<h3><a href="#" title="">Altes Bank</a></h3>
							<div class="job-lctn">Sacramento, California</div>
						</div>
						<a href="#" title="" class="go-unfollow">Unfollow</a>
					</div> 	
				</li>
				<li>
					<div class="job-listing wtabs">
						<div class="job-title-sec">
							<div class="c-logo"> <img src={logo7} alt="" /> </div>
							<h3><a href="#" title="">StarHealth</a></h3>
							<div class="job-lctn">Sacramento, California</div>
						</div>
						<a href="#" title="" class="go-unfollow">Unfollow</a>
					</div> 	
				</li>
				<li>
					<div class="job-listing wtabs">
						<div class="job-title-sec">
							<div class="c-logo"> <img src={logo8} alt="" /> </div>
							<h3><a href="#" title="">Altes Bank</a></h3>
							<div class="job-lctn">Sacramento, California</div>
						</div>
						<a href="#" title="" class="go-unfollow">Unfollow</a>
					</div>	
				</li>
			</ul>		
		</div>
	</div>
	
		</>
  )
}

export default JbSeekDashBoard