const express = require("express");
const loginUserController = require("../controllers/loginUserController");
const registerUserController = require("../controllers/registerUserController");
const router = express.Router();

router.post('/registeruser',registerUserController)
router.post('/loginuser',loginUserController)

module.exports = router;
