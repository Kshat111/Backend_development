const express = require("express");
const router = express.Router();

const User = require("../models/User");

const {login, signup} = require("../Controllers/Auth");
const {auth, isStudent,isAdmin} = require("../middlewares/auth");

router.post("/login", login);
router.post("/signup", signup);

// testing protected routes for single middleware, only authN
router.get("/test", auth, (req,res) =>{
    res.json({
        success:true,
        message:'Welcome to the Protected route for TESTS',
    });
});

// Protected Route, authZ involved, only Student allowed
router.get("/student", auth, isStudent, (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Students',
    });
} );

// only Admin allowed
router.get("/admin", auth, isAdmin, (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Admin',
    });
});

module.exports = router;