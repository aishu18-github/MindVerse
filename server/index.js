const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Project = require('./models/Project'); // <- adjust path if needed

const app = express();
app.use(cors());
app.use(express.json());

// Test GET route to fetch all projects
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST route to add project
app.post('/projects', async (req, res) => {
  const { title, description, tags, author } = req.body;
  const newProject = new Project({ title, description, tags, author });
  try {
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DB connection etc...

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
