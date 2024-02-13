const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller.js");

//router.get("/", controller.getHome);

// For viewing onboarding
router.get("/", controller.getOnboarding);

// For viewing login
//router.get("/", controller.getLogin);

// For viewing register
//router.get("/", controller.getSignup);

module.exports = router;
