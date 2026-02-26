const express = require('express')
const cors = require('cors')
const logic = require('./services/logics')

const portalServer = express()

portalServer.use(cors({ origin: '*' }))
portalServer.use(express.json())

portalServer.listen(8000, () => {
    console.log("🚀 Student Portal SERVER listening on port 8000");
})

// --- ROUTES ---

// Login
portalServer.post('/admin-login', async (req, res) => {
    const response = await logic.adminLogin(req.body.username, req.body.password)
    res.status(response.StatusCode).json(response)
})

// Get All
portalServer.get('/get-all-students', async (req, res) => {
    const response = await logic.getAllStudents()
    res.status(response.StatusCode).json(response)
})

// Add
portalServer.post('/add-student', async (req, res) => {
    const response = await logic.addStudent(req.body.id, req.body.name, req.body.stuClass, req.body.contact)
    res.status(response.StatusCode).json(response)
})

// Delete
portalServer.delete('/delete-student/:id', async (req, res) => {
    const response = await logic.deleteStudent(req.params.id)
    res.status(response.StatusCode).json(response)
})

// Edit
portalServer.post('/edit-student/:id', async (req, res) => {
    const response = await logic.editStudent(req.params.id, req.body.name, req.body.stuClass, req.body.contact)
    res.status(response.StatusCode).json(response)
})