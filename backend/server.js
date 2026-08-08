require('dotenv').config();

const PORT = process.env.PORT || 5000;
const URL = process.env.URL || "mongodb://127.0.0.1:27017/portfolio";
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(URL)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));


// Schema
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  tech: [String]
});

const Project = mongoose.model("Project", projectSchema);

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model("Contact", contactSchema);


// JSON Data
const align = [
  { 
    title: "Chatbot Engine Using AI",
    description: "I developed an AI-powered chatbot using Retrieval-Augmented Generation (RAG) to extract accurate answers from user-uploaded documents.",
    tech: ["React JS", "Node JS", "Express JS", "MongoDB"]
  },
  {
    title: "Employee Attendance Management System",
    description: "Web-based attendance system using React, Express, PostgreSQL, and JWT authentication.",
    tech: ["React JS", "Node JS", "Express JS", "PostgreSQL"]
  },
  {
    title: "XO Game",
    description: "Simple Tic-Tac-Toe game built using React with win detection.",
    tech: ["React JS","Node JS"]
  }
];


// Insert Data into MongoDB
app.get("/insert", async (req,res)=>{
  try{
    await Project.insertMany(align);
    res.send("Data inserted successfully");
  }catch(err){
    res.send(err);
  }
});


// Retrieve Data
app.get("/projects", async (req,res)=>{
  try{
    const data = await Project.find();
    if(data.length === 0){
      res.json(align);
    } else {
      res.json(data);
    }
  }catch(err){
    res.json(align);
  }
});

// Save contact form data
app.post("/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(201).json({ success: true, message: "Contact saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to save contact" });
  }
});

// Start Server
app.listen(PORT, ()=>{
  console.log("Server running on port " + PORT);
});