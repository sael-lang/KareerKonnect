import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/employers/Home";
import PersonalDetails from "./Components/employers/PersonalDetails/PersonalDetails";
import PostJob from "./Components/employers/PostJob/PostJob";
import ShowJob from "./Components/jobseeker/JobSeeker/FindJob/PostJob";
import Showemployee from "./Components/jobseeker/JobSeeker/showemployer/CandidateSearch";
import CandidateSearch from "./Components/employers/CandidateSearch/CandidateSearch";
import Signin from "./Components/mainPage/components/Registration/Signin";
import Signup from "./Components/mainPage/components/Registration/Signup";
import Showdata from "./Components/researcher/RPostJob/RJobs/Showdata";
import StdRegisterForm from "./Components/student/Student/StdForms/StdRegisterForm";
import StdEditForm from "./Components/student/Student/StdForms/StdEditForm";
import StdDashBoard from "./Components/student/Student/StdDashBoard/JbSeekDashBoard";
import StdProfile from "./Components/student/Student/StdProfile/JbSeekProfile";
import StdViewResearcher from "./Components/student/Student/StdResearcher/StdViewResearcher";
import StdResearcherCards from "./Components/student/Student/StdResearcher/ResearcherCards/StdResearcherCards";
import StdNavBar from "./Components/student/Student/StdNavBar/StdNavBar";
import CandidateRSearch from "./Components/researcher/CandidateRSearch/CandidateRSearch";
import Showcandidate from "./Components/student/Student/showcandidate/CandidateRSearch";

import JbSeekRegisterForm from "./Components/jobseeker/JobSeeker/JbSeekForms/JbSeekRegisterForm";
import JbSeekEditForm from "./Components/jobseeker/JobSeeker/JbSeekForms/JbSeekEditForm";
import JbSeekDashBoard from "./Components/jobseeker/JobSeeker/JbSeekDashBoard/JbSeekDashBoard";
import JbSeekProfile from "./Components/jobseeker/JobSeeker/JbSeekProfile/JbSeekProfile";

import ShowAds from "./Components/student/Student/showresarchads/RPostJob";
import Registerjob from "./Components/employers/PostJob/Registerjob";
import RPersonalDetails from "./Components/researcher/RPersonalDetails/RPersonalDetails";
import RPostJob from "./Components/researcher/RPostJob/RPostJob";
import Editjob from "./Components/employers/PostJob/Jobs/Editjob";
import Editcandidate from "./Components/employers/CandidateSearch/Editcandidate";
import EditR from "./Components/researcher/RPostJob/RJobs/EditR";
import ViewjobCanidate from "./Components/employers/PostJob/Jobs/ViewjobCanidate"
import Viewresearcher from "./Components/researcher/RPostJob/RJobs/ViewjobCanidate"
const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Alert alert={alert} /> */}
        <Routes>
        <Route path="/Registerjob" element={<Registerjob />} />
          <Route path="/" element={<Home />} />
          <Route path="/editr" element={<EditR />} />
          <Route path="/showdata" element={<Showdata />} />
          <Route path="/editjob" element={<Editjob />} />
          <Route path="/editcandidate" element={<Editcandidate />} />
          <Route path="/home" element={<Home />} />
          <Route path="/personalDetails" element={<PersonalDetails />} />
          <Route path="/postJob" element={<PostJob />} />
          <Route path="/candidateSearch" element={<CandidateSearch />} />
          <Route path="/showjob" element={<ShowJob />} />
          <Route path="/showemployee" element={<Showemployee />} />
          <Route path="/showads" element={<ShowAds />} />
          <Route path="/showcandidate" element={<Showcandidate />} />
          <Route path="/viewjobcanidate" element={<ViewjobCanidate />} />
          <Route path="/viewresearcher" element={<Viewresearcher />} />

          <Route path="/StdDashBoard" element={<StdDashBoard />} />
          <Route path="/register" element={<StdRegisterForm />} />
          <Route path="/StdViewResearcher" element={<StdViewResearcher />} />
          <Route path="/StdResearcherCards" element={<StdResearcherCards />} />
          <Route path="/edit/:id" element={<StdEditForm />} />
          <Route path="/stdprofile" element={<StdProfile />} />
          <Route path="/StdNavBar" element={<StdNavBar />} />

          <Route path="/JobSeeker_DashBoard" element={<JbSeekDashBoard />} />
          <Route path="/JobSeeker_Register" element={<JbSeekRegisterForm />} />
          <Route path="/JobSeeker_Edit/" element={<JbSeekEditForm />} />
          <Route path="/JobSeek_View" element={<JbSeekProfile />} />

          <Route path="/RpersonalDetails" element={<RPersonalDetails />} />
          <Route path="/RpostJob" element={<RPostJob />} />
          <Route path="/candidateRSearch" element={<CandidateRSearch />} />

          <Route
            path="/signup"
            element={
              <Signup
              // showAlert={showAlert}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Signin
              //  showAlert={showAlert}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
