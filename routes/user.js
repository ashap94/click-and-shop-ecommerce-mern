const express = require("express");
const router = express.Router();
const { userSignupValidator } = require("../validator/index");

const { signup, signin } = require("../controllers/user");

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);

module.exports = router;
