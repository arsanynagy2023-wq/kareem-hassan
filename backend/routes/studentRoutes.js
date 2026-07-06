const express = require("express");
const Student = require("../models/Student");

const router = express.Router();

// =========================
// Register Student
// =========================
router.post("/register", async (req, res) => {

    try {

        const {
            firstName,
            lastName,
            phone,
            grade,
            gender,
            time
        } = req.body;

        // التحقق من البيانات
        if (
            !firstName ||
            !lastName ||
            !phone ||
            !grade ||
            !gender ||
            !time
        ) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // هل الطالب مسجل بالفعل؟
        const existingStudent = await Student.findOne({
            phone: phone
        });

        if (existingStudent) {

            return res.status(400).json({
                message: "Student already exists"
            });

        }

        // إنشاء طالب جديد
        const student = new Student({

            firstName,
            lastName,
            phone,
            grade,
            gender,
            time

        });

        await student.save();

        return res.status(201).json({

            message: "Student registered successfully",
            student

        });

    } catch (error) {

        console.log("================================");
        console.log("❌ ERROR INSIDE REGISTER ROUTE");
        console.log(error);
        console.log("Name:", error.name);
        console.log("Message:", error.message);
        console.log("Errors:", error.errors);
        console.log("Stack:");
        console.log(error.stack);
        console.log("================================");

        return res.status(500).json({
            message: error.message
        });

    }

});

// =========================
// Get All Students
// =========================
router.get("/", async (req, res) => {

    try {

        const students = await Student.find().sort({
            createdAt: -1
        });

        return res.json(students);

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;