
const db = require('./db') // Change .. to .

// 1. Admin Login
const adminLogin = async (username, password) => {
    try {
        const result = await db.Admin.findOne({ username, password })
        if (result) {
            return { StatusCode: 200, message: "Login Successful" }
        }
        return { StatusCode: 404, message: "Invalid Username or Password" }
    } catch (err) {
        return { StatusCode: 500, message: "Server Error" }
    }
}

// 2. Get All Students
const getAllStudents = async () => {
    try {
        const result = await db.Student.find()
        if (result) {
            return { StatusCode: 200, students: result }
        }
        return { StatusCode: 404, message: "No Data Found" }
    } catch (err) {
        return { StatusCode: 500, message: "Server Error" }
    }
}

// 3. Add Student
const addStudent = async (id, name, stuClass, contact) => {
    try {
        const result = await db.Student.findOne({ id })
        if (result) {
            return { StatusCode: 401, message: "Roll Number already exists" }
        }
        const newStudent = new db.Student({ id, name, stuClass, contact })
        await newStudent.save()
        return { StatusCode: 200, message: "Student Added Successfully" }
    } catch (err) {
        return { StatusCode: 500, message: "Server Error" }
    }
}

// 4. Delete Student
const deleteStudent = async (id) => {
    try {
        const result = await db.Student.deleteOne({ id })
        if (result.deletedCount > 0) {
            return { StatusCode: 200, message: "Student Deleted" }
        }
        return { StatusCode: 404, message: "Student not found" }
    } catch (err) {
        return { StatusCode: 500, message: "Server Error" }
    }
}

// 5. Edit Student
const editStudent = async (id, name, stuClass, contact) => {
    try {
        const result = await db.Student.findOne({ id })
        if (result) {
            result.name = name
            result.stuClass = stuClass
            result.contact = contact
            await result.save()
            return { StatusCode: 200, message: "Student Updated Successfully" }
        }
        return { StatusCode: 404, message: "Student not found" }
    } catch (err) {
        return { StatusCode: 500, message: "Server Error" }
    }
}

module.exports = { getAllStudents, addStudent, deleteStudent, editStudent, adminLogin }