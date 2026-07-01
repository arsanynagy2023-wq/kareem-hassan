const express = require("express");
const Student = require("../models/Student");

const router = express.Router();

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

        const existingStudent =
        await Student.findOne({ phone });

        if(existingStudent){

            return res.status(400).json({
                message:"Student already exists"
            });

        }

        const student = new Student({

            firstName,
            lastName,
            phone,
            grade,
            gender,
            time

        });

        await student.save();

        res.status(201).json({
            message:"Student registered successfully",
            student
        });

    }

    catch(error){

        console.log(error);

        res.status(500).json({
            message:"Server Error"
        });

    }

});

router.get("/", async (req,res)=>{

    try{

        const students =
        await Student.find().sort({
            createdAt:-1
        });

        res.json(students);

    }

    catch(error){

        res.status(500).json({
            message:"Server Error"
        });

    }

});

module.exports = router;