/**
 * Base modules
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/// Define the schema for vote model...
const VoteSchema = new Schema({
    pollChoice: {
        type: String,
        required: true
    },
    votes: {
        type: String,
        required: true
    }
});

/// create the table/collection...
const Vote = mongoose.model("Vote", VoteSchema);

/// export to use across app
module.exports = Vote;