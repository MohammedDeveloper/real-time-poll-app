/**
 * Base modules
 */
const mongoose = require("mongoose");
const dbConnectionString = "mongodb://almohammedsajrafi:123456789@ds123698.mlab.com:23698/osonlinepoll"; /// get this from the https://mlab.com/databases/osonlinepoll

/// map global promises
mongoose.Promise = global.Promise;

/// connect using mongoose 
mongoose.connect(dbConnectionString)
.then(() => console.log("Mongo DB osonlinepoll connected successfully!"))
.catch(err => console.log(err));