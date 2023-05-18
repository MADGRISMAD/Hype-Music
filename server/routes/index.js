const express = require("express");
const router = express.Router();

// import controllers
const {getIndex, search} = require("../controllers/search");
const {getSong} = require("../controllers/play");

// import middlewares

// api routes
router.get("/", getIndex);
router.get("/search", search);
router.get("/play", getSong);
module.exports = router;