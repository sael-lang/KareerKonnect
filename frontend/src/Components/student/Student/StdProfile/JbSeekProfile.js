import React, { useEffect, useState } from "react";
import Header from "./RHeader"
import { Buffer } from 'buffer';
import axios from "axios";
import { email1 } from '../../../mainPage/components/Registration/Signin';
const JbSeekProfile = () => {
 
    const [data, setData] = useState([]);
    const role = "asd";
    useEffect(() => {
        axios.get(`http://localhost:8003/student/${email1}`, {
            headers: {
              'Content-Type': 'application/json', // example of setting the content type header
              // add other headers as needed
            }
          })
          .then((res) => setData(res.data))
          .catch((err) => console.log(err, "it has an error"));
          
    }, []);
  return (
    <>
    

<div class="theme-layout" id="scrollup">

<Header/>


	<section class="overlape">
		<div class="block remove-top">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="cand-single-user">
							<div class="share-bar circle">
				 				
				 			</div>
				 			<div class="can-detail-s">
   {data.map((singleData) => {
  const base64String = Buffer.from(singleData.data, 'binary').toString('base64');
  return (
	<><div className="cst"> 
    <img
      key={singleData._id}
      src={`data:${singleData.contentType};base64,${base64String}`}
      alt={singleData.name}
      width="300"
    /></div>
	
	<h3>Name:{singleData.name}</h3>
				 				<span>Email:{singleData.email}</span>
				 				<p>Contact:{singleData.contact}</p>
				 				<p>Field:{singleData.field}</p><p>Study Level:{singleData.studyLevel}</p>
								 
				 				<p><i class="la la-map-marker"></i>University Name:{singleData.universityName}</p>
	
	</>
	
  );
})}
				 			</div>
				 			<div class="download-cv">
				 			
				 			</div>
				 		</div>
				 		
				 		<div class="cand-details-sec">
				 			
				 		</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	

</div>

<div class="account-popup-area signin-popup-box">
	<div class="account-popup">
		<span class="close-popup"><i class="la la-close"></i></span>
		<h3>User Login</h3>
		<span>Click To Login With Demo User</span>
		<div class="select-user">
			<span>Candidate</span>
			<span>Employer</span>
		</div>
		<form>
			<div class="cfield">
				<input type="text" placeholder="Username" />
				<i class="la la-user"></i>
			</div>
			<div class="cfield">
				<input type="password" placeholder="********" />
				<i class="la la-key"></i>
			</div>
			<p class="remember-label">
				<input type="checkbox" name="cb" id="cb1/="/><label for="cb1">Remember me</label>
			</p>
			<a href="#" title="">Forgot Password?</a>
			<button type="submit">Login</button>
		</form>
		<div class="extra-login">
			<span>Or</span>
			<div class="login-social">
				<a class="fb-login" href="#" title=""><i class="fa fa-facebook"></i></a>
				<a class="tw-login" href="#" title=""><i class="fa fa-twitter"></i></a>
			</div>
		</div>
	</div>
</div>

<div class="account-popup-area signup-popup-box">
	<div class="account-popup">
		<span class="close-popup"><i class="la la-close"></i></span>
		<h3>Sign Up</h3>
		<div class="select-user">
			<span>Candidate</span>
			<span>Employer</span>
		</div>
		<form>
			<div class="cfield">
				<input type="text" placeholder="Username" />
				<i class="la la-user"></i>
			</div>
			<div class="cfield">
				<input type="password" placeholder="********" />
				<i class="la la-key"></i>
			</div>
			<div class="cfield">
				<input type="text" placeholder="Email" />
				<i class="la la-envelope-o"></i>
			</div>
			<div class="dropdown-field">
				<select data-placeholder="Please Select Specialism" class="chosen">
					<option>Web Development</option>
					<option>Web Designing</option>
					<option>Art & Culture</option>
					<option>Reading & Writing</option>
				</select>
			</div>
			<div class="cfield">
				<input type="text" placeholder="Phone Number" />
				<i class="la la-phone"></i>
			</div>
			<button type="submit">Signup</button>
		</form>
		<div class="extra-login">
			<span>Or</span>
			<div class="login-social">
				<a class="fb-login" href="#" title=""><i class="fa fa-facebook"></i></a>
				<a class="tw-login" href="#" title=""><i class="fa fa-twitter"></i></a>
			</div>
		</div>
	</div>
</div>

<div class="coverletter-popup">
	<div class="cover-letter">
		<i class="la la-close close-letter"></i>
		<h3>Ali TUFAN - UX / UI Designer</h3>
		<p>My name is Ali TUFAN I am thrilled to be applying for the [position] role in your company. After reviewing your job description, it’s clear that you’re looking for an enthusiastic applicant that can be relied upon to fully engage with the role and develop professionally in a self-motivated manner. Given these requirements, I believe I am the perfect candidate for the job.</p>
	</div>
</div>

<div class="contactus-popup">
	<div class="contact-popup">
		<i class="la la-close close-contact"></i>
		<h3>Send Message to “Ali TUFAN”</h3>
		<form>
			<div class="popup-field">
				<input type="text" placeholder="Tera Planer" />
				<i class="la la-user"></i>
			</div>
			<div class="popup-field">
				<input type="text" placeholder="demo@jobhunt.com" />
				<i class="la la-envelope-o"></i>
			</div>
			<div class="popup-field">
				<input type="text" placeholder="+90 538 845 09 85" />
				<i class="la la-phone"></i>
			</div>
			<div class="popup-field">
				<textarea placeholder="Message"></textarea>
			</div>
			<button type="submit">Send Message</button>
		</form>
	</div>
</div>
    </>
  );
};

export default JbSeekProfile;
