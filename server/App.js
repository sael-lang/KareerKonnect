require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const { MongoClient } = require('mongodb');
const cors = require("cors");
const router = require("./routes/router.js");
const auth = require("./routes/auth.js");
const JbSeek = require("./routes/JbSeek.js");
const jobseeker=require("./models/JobSeekerSchema");
const appliedjob=require("./models/appliedjobs");
const appliedads=require("./models/appliedads");
const port = 8003;
const students = require("./models/studentsSchema");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');
const uri = 'mongodb+srv://aliraza:kareerkonnect19@cluster0.wo9dtro.mongodb.net/kareerkonnect?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const dbName = 'kareerkonnect'; // replace with your own database name
const collectionName = 'jobs'; 
const collectio = 'jobseekers';// replace with your own collection name
app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, req.body.filename);
  }
});
const uploads = multer({ storage });

app.post('/upload-pdf', upload.single('pdf'), (req, res) => {
  // File is uploaded and accessible in req.file
  console.log(req.file);

  // Respond with a success message
  res.json({ success: true });
});





app.get('/data', async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const data = await collection.find({}).toArray(); // find all documents in the collection
    res.status(200).json({
      success: true,
      data: data
    }); // send the data as a JSON response
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  } finally {
    await client.close();
  }
});
app.get('/Research', async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("research_ads");
    const data = await collection.find({}).toArray(); // find all documents in the collection
    res.status(200).json({
      success: true,
      data: data
    }); // send the data as a JSON response
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  } finally {
    await client.close();
  }
});

app.get('/dataemp', async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectio);
    const data = await collection.find({}).toArray(); // find all documents in the collection
    res.status(200).json({
      success: true,
      data: data
    }); // send the data as a JSON response
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  } finally {
    await client.close();
  }
});
app.post('/appliedads', (req, res) => {

  const { name,email,job,contact,field,studyLevel,universityName,image,contentType } = req.body;
  try{
const saveimage=new appliedjob({
  name:name,
  email:email,
  job:job,
  contact:contact,
  field:field,
  studyLevel:studyLevel,
  universityName:universityName,
  data:image,
  contentType:contentType
})
saveimage.save().then((res)=>console.log("asd"))
    res.json({ message: 'File uploaded successfully!' });
 }catch(err){}
});


app.post('/appliedjobs', (req, res) => {


try{
  const { JbSeekName,job,JbSeekEmail,JbSeekField,JbSeekExperience,JbSeekUniversityName,image,contentType } = req.body;
const saveimage=new appliedads({
  JbSeekName:JbSeekName,
  job:job,
  JbSeekEmail:JbSeekEmail,
  JbSeekField:JbSeekField,
  JbSeekExperience:JbSeekExperience,
  JbSeekUniversityName:JbSeekUniversityName,
  data:image,
  contentType:contentType
})
saveimage.save().then((res)=>console.log("asd"))
    res.json({ message: 'File uploaded successfully!' });}catch(err){ res.status(422).json({
      success: false,
      error: error.message
    });}
 
});

app.get('/showappliedads/:username', async (req, res) => {
  const { username } = req.params;
try{
  appliedads.find({job:username}, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
      return;
    }
    res.status(200).send(data);
  });}catch(err){}
});
app.get('/showappliedjobs/:username', async (req, res) => {
  const { username } = req.params;
try{
  appliedjob.find({job:username}, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
      return;
    }
    console.log(data)
    res.status(200).send(data);
  });}catch(err){}
});
app.post('/student', upload.single('file'), (req, res) => {
  const { name,email,contact,field,studyLevel,universityName } = req.body;

  if (!req.file) {
    console.log("hello")
    return res.status(400).json({ error: 'No file uploaded' });
  }
try{
const saveimage=new students({
  name:name,
  email:email,
  contact:contact,
  field:field,
  studyLevel:studyLevel,
  universityName:universityName,
  data :fs.readFileSync("uploads/"+req.file.filename),
  contentType:"image/png"
})
saveimage.save().then((res)=>console.log("asd"))
  // fs.rename(req.file.path, filePath, (err) => {
  //   if (err) {
  //     console.error(err);
  //     return res.status(500).json({ error: 'Failed to save file' });
  //   }
  //   console.log(`File saved as ${fileName}`);
    res.json({ message: 'File uploaded successfully!' });
 }catch(err){}
});

app.get('/student/:username', (req, res) => {
  const { username } = req.params;
try{
  students.find({email:username}, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
      return;
    }
    res.status(200).send(data);
  });}catch(err){}
});
app.post('/getstudent', (req, res) => {
  const { username } = req.body;
try{
  students.find({$or: [
    { name: { $regex: username, $options: "i" } },
    { email: { $regex: username, $options: "i" } },
    { contact: { $regex: username, $options: "i" } },
    { field: { $regex: username, $options: "i" } },
    { studyLevel: { $regex: username, $options: "i" } },
    { universityName: { $regex: username, $options: "i" } },]}, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
      return;
    }
    res.status(200).send(data);
  });
  console.log(username)}catch(err){}
});




app.post('/jobseeker', upload.single('file'), (req, res) => {
  const { JbSeekName,JbSeekEmail,JbSeekField,JbSeekExperience,JbSeekUniversityName } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
try{
  // const extension = path.extname(req.file.originalname);
  // const fileName = `${id}${extension}`;
  // const filePath = path.join('uploads/', fileName);
const saveimage=new jobseeker({
  JbSeekName:JbSeekName,
  JbSeekEmail:JbSeekEmail,
  JbSeekField:JbSeekField,
  JbSeekExperience:JbSeekExperience,
  JbSeekUniversityName:JbSeekUniversityName,
  data :fs.readFileSync("uploads/"+req.file.filename),
  contentType:"image/png"
})
saveimage.save().then((res)=>console.log("asd"))
  // fs.rename(req.file.path, filePath, (err) => {
  //   if (err) {
  //     console.error(err);
  //     return res.status(500).json({ error: 'Failed to save file' });
  //   }
  //   console.log(`File saved as ${fileName}`);
    res.json({ message: 'File uploaded successfully!' });
 }catch(err){}
});
app.get('/jobseeker/:username', (req, res) => {
  const { username } = req.params;
  console.log(username)

  jobseeker.find({JbSeekName:username}, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
      return;
    }
    console.log(data)
    res.status(200).send(data);
  });
});
app.post('/getjobseeker', (req, res) => {
  const { username } = req.body;
 try{ jobseeker.find({ JbSeekName:username}, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
      return;
    }
    res.status(200).send(data);
  });}catch(err){}
});
app.get('/students/get',async (req, res) => {
try{
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("students");
  const data = await collection.find({}).toArray();
  res.status(200).json({
    success: true,
    data: data
  });}catch(err){}
});

app.get('/jobsek/get',async (req, res) => {

try{
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("jobseekers");
  const data = await collection.find({}).toArray(); 
  res.status(200).json({
    success: true,
    data: data
  });}catch(err){ res.status(422).json({
    success: false,
    error: error.message
  }); }
});



app.use(router);
app.use(auth);
app.use(JbSeek);

app.listen(port, () => {
  console.log(`Server Started : Port Number ${port}`);
});