const mongoose = require('mongoose')
require('dotenv').config()

// Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB Atlas Connected Successfully");
    })
    .catch((err) => {
        console.log("❌ MongoDB Connection Error:", err);
    })

// 1. Student Model
const Student = mongoose.model('Student', {
    id: String,       // Roll-no
    name: String,
    stuClass: String, // Class
    contact: String
})

// 2. Admin Model
const Admin = mongoose.model('Admin', {
    username: String,
    password: String
})

module.exports = { Student, Admin }