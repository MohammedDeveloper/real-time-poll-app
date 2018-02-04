/**
 * Basic requirements
 */
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const portno = 3000;

/// DB Config
require("./config/db");

/// create the app
const app = express();

/// inherit the poll module from the directory "./routes/poll"
const poll = require("./routes/poll");

/// set the public folder
app.use(express.static(path.join(__dirname, "public")));

/// middleware: body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/// enable CORS
app.use(cors());

/// re-route all the routes which match "/poll" URL to "poll" module
app.use("/poll", poll);

/// set the listen
app.listen(portno, () => {
    console.log(`Server started at ${portno}. Browse http://localhost:${portno}/`)
});



