const express = require("express"); // 1.
const router = express.Router(); // 2.
const homeController = require("../controllers/home_controller");

console.log("router loaded");

// for the first request by the app it will use this
router.get("/", homeController.home);

// for all the other route request we will redirect from here only
router.use("/users", require("./users"));

module.exports = router; // 3.
