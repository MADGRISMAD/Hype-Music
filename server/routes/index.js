const express = require("express");
const router = express.Router();

// import controllers
const {getIndex} = require("../controllers/index");
// import middlewares

// api routes
router.get("/", getIndex);

module.exports = router;