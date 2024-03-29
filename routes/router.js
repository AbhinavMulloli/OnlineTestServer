const express = require('express');
const { marksAdd, getMarksAll,competitionMarks,getCompetitionMarks } = require('../controllers/markLogics');
const { userRegister, userLogin, emailVerify, updatePassword,deleteUser,getCurrentUser } = require('../controllers/userLogics');
const { decodeToken } = require('../middleware/auth');
const { paymentLogics } = require('../controllers/paymentLogic');

// Create an instance of the Router class
const router = express.Router();

// Route for user registration
router.post('/api/v1/register', userRegister);

// Route for user login
router.post('/api/v1/login', userLogin);

// Route for getting current user
router.get('/api/v1/get-user/:uid', getCurrentUser);

// Route for adding marks
router.post('/api/v1/add-marks',decodeToken, marksAdd);

// Route for getting all marks
router.get('/api/v1/get-marks/:uid',decodeToken, getMarksAll);

// Route for adding marks in competition
router.post('/api/v1/add-marks-comp',decodeToken, competitionMarks);

// Route for getting all marks in competiotion
router.post('/api/v1/get-marks-comp',decodeToken, getCompetitionMarks);

// Route for payment 
router.post('/api/v1/add-payment',decodeToken, paymentLogics);

// Route for email verification
router.post('/api/v1/verifymail', emailVerify);

// Route for updating password
router.post('/api/v1/updatepass', updatePassword);

//route for delete rejected candidate
router.delete('/api/delete-user/:uid',decodeToken, deleteUser)

module.exports = router;
