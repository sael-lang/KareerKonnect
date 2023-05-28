const express = require("express");
const router = express.Router();
const students = require("../models/studentsSchema.js");
const employee = require("../models/employeeSchema.js");
const Job=require("../models/jobSchema.js");
const Researcher=require("../models/Researcher.js");
const Research=require("../models/ResearchScheme.js");
const Login=require("../models/login.js");
//Register Student

router.post("/register", async (req, res) => {
  const { name, email, contact, field, studyLevel, universityName } = req.body;

  if (!name || !email || !contact || !field || !studyLevel || !universityName) {
    res.status(422).json("Please! Fill all the Data");
  }

  try {
    const preStudent = await students.findOne({ email: email });

    if (preStudent) {
      res.status(422).json("This user is already regisered to the System!");
    } else {
      const addStudent = new students({
        name,
        email,
        contact,
        field,
        studyLevel,
        universityName,
      });
      
      await addStudent.save();
      res.status(201).json(addStudent);
    }
  } catch (error) {
    res.status(422).json(error);
  }
});

//Get Student

router.get("/getData", async (req, res) => {
  try {
    const studentData = await students.find();
    res.status(201).json(studentData);
  } catch (error) {
    res.status(422).json(error);
  }
});

//Get Student Profile
router.get("/getStudent/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const studentProfile = await students.findById({ _id: id });
    res.status(201).json(studentProfile);
  } catch (error) {
    res.status(422).json(error);
  }
});

//Update Student Data

router.patch("/updateStudent/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedStudent = await students.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(201).json(updatedStudent);
  } catch (error) {
    res.status(422).json(error);
  }
});

// Delete Student Data
router.delete("/deleteStudent/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedStudent = await students.findByIdAndDelete({ _id: id });
    res.status(201).json(deletedStudent);
  } catch (error) {
    res.status(422).json(error);
  }
});
// register employee
router.post("/employee/registeremployee", async (req, res) => {
  const { name, email, company, address, contact,role,industry,access } = req.body;
  if (!name || !email || !company || !address || !contact|| !role || !industry) {
    res.status(422).json("Please! Fill all the Data");
  }

else{
   try{
      const addemployee = new employee({
        name, email, company, address, contact,role,industry
      });
      
      await addemployee.save();
      res.status(201).json(addemployee);
    }
    catch(error)
    {
       ;
    }
    username=name;
    password=email;
   
    }
}
    
);

//Get employee

router.get("/employee/getemployeedata", async (req, res) => {
  try {
    const employeeData = await employee.find();
    res.status(201).json(employeeData);
  } catch (error) {
    res.status(422).json(error);
  }
});

//Get employee Profile
router.get("/employee/getemployee/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const employeeProfile = await employee.findById({ _id: id });
    res.status(201).json(employeeProfile);
  } catch (error) {
    res.status(422).json(error);
  }
});
router.get("/employeegetting/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const employeeProfile = await employee.find({ email: id });
    console.log(employeeProfile)
    res.status(201).json(employeeProfile);
  } catch (error) {
    res.status(422).json(error);
  }
});

//Update employee Data

router.patch("/employee/updateemployee/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedemployee = await employee.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(201).json(updatedemployee);
  } catch (error) {
    res.status(422).json(error);
  }
});

// Delete employee Data
router.delete("/employee/deleteemployee/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedemployee = await employee.findByIdAndDelete({ _id: id });
    res.status(201).json(deletedemployee);
  } catch (error) {
    res.status(422).json(error);
  }
});

// register job
router.post("/job/registerjob", async (req, res) => {
  const { title, type, companyName, link, location,postedOn, companyUrl,description,skills } = req.body;

  if (!title || !type || !companyName || !link || !location || !postedOn || !companyUrl || !description|| !skills ) {
    res.status(422).json("Please! Fill all the Data");
  }
  try{
    const addjob = new Job({
      title, type, companyName, link, location,postedOn,companyUrl, description,skills
    });

    await addjob.save();
    res.status(201).json(addjob);
  }catch(error){ ;}
      
    }
  );
//Get job Profile
router.post("/job/searchtype", async (req, res) => {
  try {
    const { type } = req.body;
    const jobProfile = await Job.find({ type: type } );
    res.status(200).json({
      success: true,
      data: jobProfile
    });
  } catch (error) {
    res.status(422).json({
      success: false,
      error: error.message
    });
  }
});
router.post("/job/searchlocation", async (req, res) => {
  try {
    const { location } = req.body;
    const jobProfile = await Job.find({ location: location } );
    res.status(200).json({
      success: true,
      data: jobProfile
    });
  } catch (error) {
    res.status(422).json({
      success: false,
      error: error.message
    });
  }
});
router.post("/job/search", async (req, res) => {
  try {
    const { search } = req.body;
    const jobProfile = await Job.find({
      $or: [
        { location: { $regex: search, $options: "i" } },
        { title: { $regex: search, $options: "i" } },
        { type: { $regex: search, $options: "i" } },
        { companyName: { $regex: search, $options: "i" } },
        { link: { $regex: search, $options: "i" } },
        { postedOn: { $regex: search, $options: "i" } },
        { companyUrl: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { skills: { $regex: search, $options: "i" } }
      ]
    });
    res.status(200).json({
      success: true,
      data: jobProfile
    });
  } catch (error) {
    res.status(422).json({
      success: false,
      error: error.message
    });
  }
});

router.post("/job/searching", async (req, res) => {
  const { search,type,location } = req.body;
  try {
     
    if(type!="Type"&&location=="Location"){
      const jobProfile = await Job.find({
        $and: [
          { type: type },
          {
            $or: [
              { title: { $regex: search, $options: "i" } },
              { location: { $regex: search, $options: "i" } },
              { companyName: { $regex: search, $options: "i" } },
              { link: { $regex: search, $options: "i" } },
              { postedOn: { $regex: search, $options: "i" } },
              { companyUrl: { $regex: search, $options: "i" } },
              { description: { $regex: search, $options: "i" } },
              { skills: { $regex: search, $options: "i" } }
            ]
          }
        ]
      });
       res.status(200).json({
        success: true,
        data: jobProfile
      });
    }
    if(location!="Location"&&type=="Type"){
      const jobProfile = await Job.find({
        $and: [
          { location: location },
          {
            $or: [
              { title: { $regex: search, $options: "i" } },
              { type: { $regex: search, $options: "i" } },
              { companyName: { $regex: search, $options: "i" } },
              { link: { $regex: search, $options: "i" } },
              { postedOn: { $regex: search, $options: "i" } },
              { companyUrl: { $regex: search, $options: "i" } },
              { description: { $regex: search, $options: "i" } },
              { skills: { $regex: search, $options: "i" } }
            ]
          }
        ]
      });
      
      res.status(200).json({
        success: true,
        data: jobProfile
      });
    }
if(type!="Type"&&location!="Location"){
  const jobProfile = await Job.find({
    $and: [
      { location: location },{ type: type },
      {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { companyName: { $regex: search, $options: "i" } },
          { link: { $regex: search, $options: "i" } },
          { postedOn: { $regex: search, $options: "i" } },
          { companyUrl: { $regex: search, $options: "i" } },
          { description: { $regex: search, $options: "i" } },
          { skills: { $regex: search, $options: "i" } }
        ]
      }
    ]
  });
  
  res.status(200).json({
    success: true,
    data: jobProfile
  });
}
else{
  const jobProfile = await Job.find({
    $or: [
      { location: { $regex: search, $options: "i" } },
      { title: { $regex: search, $options: "i" } },
      { type: { $regex: search, $options: "i" } },
      { companyName: { $regex: search, $options: "i" } },
      { link: { $regex: search, $options: "i" } },
      { postedOn: { $regex: search, $options: "i" } },
      { companyUrl: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
      { skills: { $regex: search, $options: "i" } }
    ]
  });
  res.status(200).json({
    success: true,
    data: jobProfile
  });
}
   
   
  } catch (error) {
  
  }
});

router.post("/job/searchtypeloction", async (req, res) => {
  try {
    const { location, type } = req.body;
    const jobProfile = await Job.find({
      location: { $regex: location, $options: "i" },
      type: { $regex: type, $options: "i" }
    });
    res.status(200).json({
      success: true,
      data: jobProfile
    });
  } catch (error) {
    res.status(422).json({
      success: false,
      error: error.message
    });
  }
});

//Update Student Data

router.patch("/updatejob/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatejob = await Job.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(201).json(updatejob);
  } catch (error) {
    res.status(422).json(error);
  }
});

router.delete("/job/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedemployee = await Job.findByIdAndDelete({ _id: id });
    res.status(201).json(deletedemployee);
  } catch (error) {
    res.status(422).json(error);
  }
});
router.delete("/research/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedemployee = await Research.findByIdAndDelete({ _id: id });
    res.status(201).json(deletedemployee);
  } catch (error) {
    res.status(422).json(error);
  }
});
router.get("/researchergetting/:id", async (req, res) => {
  try {
    const { id } = req.params;
console.log(id)
    const employeeProfile = await Researcher.find({ Email: id });
    res.status(201).json(employeeProfile);
  } catch (error) {
    res.status(422).json(error);
  }
});
router.post("/Researcher/register", async (req, res) => {
  const { FullName, Email, Domain, Role, Years,University,access} = req.body;

  if (!FullName || !Email || !Domain || !Role || !Years || !University  ) {
    res.status(422).json("Please! Fill all the Data");
  }
  try{
    const add = new Researcher({
      FullName, Email, Domain, Role, Years,University
    });
    username=FullName;
    password=Email;
    
    await add.save();
    res.status(201).json(add);
  }catch(error){ ;}
  
      
    }
  );




// register Research
router.post("/Research/register", async (req, res) => {
  const { title, type, companyName, link, location,postedOn, companyUrl,description,skills } = req.body;
console.log(title)
  if (!title || !type || !companyName || !link || !location || !postedOn || !companyUrl || !description|| !skills ) {
    res.status(422).json("Please! Fill all the Data");
  }
  try{
    const add = new Research({
      title, type, companyName, link, location,postedOn,companyUrl, description,skills
    });

    await add.save();
    res.status(201).json(add);
  }catch(error){ ;}
      
    }
  );
//Get job Profile
router.post("/Research/searchtype", async (req, res) => {
  try {
    const { type } = req.body;
    const Profile = await Research.find({ type: type } );
    res.status(200).json({
      success: true,
      data: Profile
    });
  } catch (error) {
    res.status(422).json({
      success: false,
      error: error.message
    });
  }
});
router.post("/Research/searchlocation", async (req, res) => {
  try {
    const { location } = req.body;
    const Profile = await Research.find({ location: location } );
    res.status(200).json({
      success: true,
      data: Profile
    });
  } catch (error) {
    res.status(422).json({
      success: false,
      error: error.message
    });
  }
});
router.post("/Research/search", async (req, res) => {
  try {
    const { search } = req.body;
    const Profile = await Research.find({
      $or: [
        { location: { $regex: search, $options: "i" } },
        { title: { $regex: search, $options: "i" } },
        { type: { $regex: search, $options: "i" } },
        { companyName: { $regex: search, $options: "i" } },
        { link: { $regex: search, $options: "i" } },
        { postedOn: { $regex: search, $options: "i" } },
        { companyUrl: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { skills: { $regex: search, $options: "i" } }
      ]
    });
    res.status(200).json({
      success: true,
      data: Profile
    });
  } catch (error) {
    res.status(422).json({
      success: false,
      error: error.message
    });
  }
});
router.post("/Research/searching", async (req, res) => {
  const { search,type,location } = req.body;
  try {
     
    if(type!="Type"&&location=="Location"){
      const jobProfile = await Research.find({
        $and: [
          { type: type },
          {
            $or: [
              { title: { $regex: search, $options: "i" } },
              { location: { $regex: search, $options: "i" } },
              { companyName: { $regex: search, $options: "i" } },
              { link: { $regex: search, $options: "i" } },
              { postedOn: { $regex: search, $options: "i" } },
              { companyUrl: { $regex: search, $options: "i" } },
              { description: { $regex: search, $options: "i" } },
              { skills: { $regex: search, $options: "i" } }
            ]
          }
        ]
      });
       res.status(200).json({
        success: true,
        data: jobProfile
      });
    }
    if(location!="Location"&&type=="Type"){
      const jobProfile = await Research.find({
        $and: [
          { location: location },
          {
            $or: [
              { title: { $regex: search, $options: "i" } },
              { type: { $regex: search, $options: "i" } },
              { companyName: { $regex: search, $options: "i" } },
              { link: { $regex: search, $options: "i" } },
              { postedOn: { $regex: search, $options: "i" } },
              { companyUrl: { $regex: search, $options: "i" } },
              { description: { $regex: search, $options: "i" } },
              { skills: { $regex: search, $options: "i" } }
            ]
          }
        ]
      });
      
      res.status(200).json({
        success: true,
        data: jobProfile
      });
    }
if(type!="Type"&&location!="Location"){
  const jobProfile = await Research.find({
    $and: [
      { location: location },{ type: type },
      {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { companyName: { $regex: search, $options: "i" } },
          { link: { $regex: search, $options: "i" } },
          { postedOn: { $regex: search, $options: "i" } },
          { companyUrl: { $regex: search, $options: "i" } },
          { description: { $regex: search, $options: "i" } },
          { skills: { $regex: search, $options: "i" } }
        ]
      }
    ]
  });
  
  res.status(200).json({
    success: true,
    data: jobProfile
  });
}
else{
  const jobProfile = await Research.find({
    $or: [
      { location: { $regex: search, $options: "i" } },
      { title: { $regex: search, $options: "i" } },
      { type: { $regex: search, $options: "i" } },
      { companyName: { $regex: search, $options: "i" } },
      { link: { $regex: search, $options: "i" } },
      { postedOn: { $regex: search, $options: "i" } },
      { companyUrl: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
      { skills: { $regex: search, $options: "i" } }
    ]
  });
  res.status(200).json({
    success: true,
    data: jobProfile
  });
}
   
   
  } catch (error) {
  
  }
});
router.post("/Research/searchtypeloction", async (req, res) => {
  try {
    const { location, type } = req.body;
    const Profile = await Research.find({
      location: { $regex: location, $options: "i" },
      type: { $regex: type, $options: "i" }
    });
    res.status(200).json({
      success: true,
      data: Profile
    });
  } catch (error) {
    res.status(422).json({
      success: false,
      error: error.message
    });
  }
});

//Update Research Data

router.patch("/updateResearch/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const update = await Research.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(201).json(update);
  } catch (error) {
    res.status(422).json(error);
  }
});


router.post("/createlogin", async (req, res) => {
 
  try{const { name,email,password ,access} = req.body;
  const adds = new Login({
    name,
    password,
    email,
    access
  });
  await adds.save();
  res.status(201).json({ success: true });}
catch(error){
    res.status(422).json({
      success: false,
      error: error.message
    }); 
  }
});
router.post("/login", async (req, res) => {
 
try{    const { email,password } = req.body;

    const studentProfile = await Login.find({  $and: [
      { email: email },{ password: password }] });
    res.status(201).json(studentProfile);
}catch(error){}

});




module.exports = router;
