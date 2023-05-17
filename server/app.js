// Import modules
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

// app
const app = express();

// db
mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
}).then(() => console.log("DB CONNECTED"))
.catch((err) => console.log("DB ERROR", err));


// middleware
app.use(morgan("dev"));
app.use(cors({origin: true, credentials: true}));

// routes
const indexRouter = require("./routes/index");

// port
const port = process.env.PORT || 8080;

//  listener
const server = app.listenerCount(port, () => console.log("Server running on port " + PORT)
);