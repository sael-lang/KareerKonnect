const express = require("express");
const JbSeek = express.Router();
const JobSeeker = require("../models/JobSeekerSchema.js");

//Register JobSeeker
JbSeek.post("/registerJobSeeker", async (req, res) => {
  const {
    JbSeekName,
    JbSeekEmail,
    JbSeekExperience,
    JbSeekField,
    JbSeekUniversityName,
  } = req.body;

  if (
    !JbSeekName ||
    !JbSeekEmail ||
    !JbSeekExperience ||
    !JbSeekField ||
    !JbSeekUniversityName
  ) {
    res.status(422).json("Please! Fill all the Data");
  }

  try {
    const preJobSeeker = await JobSeeker.findOne({ JbSeekEmail: JbSeekEmail });

    if (preJobSeeker) {
      res.status(422).json("This user is already regisered to the System!");
    } else {
      const addJobSeeker = new JobSeeker({
        JbSeekName,
        JbSeekEmail,
        JbSeekExperience,
        JbSeekField,
        JbSeekUniversityName,
      });

      await addJobSeeker.save();
      res.status(201).json(addJobSeeker);
    }
  } catch (error) {
    res.status(422).json(error);
  }
});

//Get JobSeeker Data
JbSeek.get("/getJobSeekerData", async (req, res) => {
  try {
    const jobSeekerData = await JobSeeker.find();
    
    res.status(200).json(jobSeekerData);
  } catch (error) {
    res.status(422).json(error);
  }
});

//Get JobSeeker Profile
JbSeek.get("/getJobSeeker/:JbSeek_Id", async (req, res) => {
  try {
    const { JbSeek_Id } = req.params;

    const jobSeekerProfile = await JobSeeker.findById({
      _JbSeek_Id: JbSeek_Id,
    });
    res.status(201).json(jobSeekerProfile);
  } catch (error) {
    res.status(422).json(error);
  }
});

JbSeek.post("/jobseeker/search", async (req, res) => {
  try {
    const { search } = req.body;
    const jobseeker = await JobSeeker.find({
      $or: [
        { JbSeekName: { $regex: search, $options: "i" } },
        { JbSeekEmail: { $regex: search, $options: "i" } },
        { JbSeekField: { $regex: search, $options: "i" } },
        { JbSeekExperience: { $regex: search, $options: "i" } },
        { JbSeekUniversityName: { $regex: search, $options: "i" } }
      ]
    });
    res.status(200).json({
      success: true,
      data: jobseeker
    });
  } catch (error) {
    res.status(422).json({
      success: false,
      error: error.message
    });
  }
});

//Update JobSeeker Data
JbSeek.patch("/updateJobSeeker/:JbSeek_Id", async (req, res) => {
  try {
    const { JbSeek_Id } = req.params;

    const updatedJobSeeker = await JobSeeker.findByIdAndUpdate(
      JbSeek_Id,
      req.body,
      {
        new: true,
      }
    );

    res.status(201).json(updatedJobSeeker);
  } catch (error) {
    res.status(422).json(error);
  }
});

// Delete JobSeeker Data
JbSeek.delete("/deleteJobSeeker/:JbSeek_Id", async (req, res) => {
  try {
    const { JbSeek_Id } = req.params;

    const deletedJobSeeker = await JobSeeker.findByIdAndDelete({
      _JbSeek_Id: JbSeek_Id,
    });
    res.status(201).json(deletedJobSeeker);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = JbSeek;
