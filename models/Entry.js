var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var EntrySchema = new Schema({

    user: { type: Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, default: Date.now },
    title: String,
    entry: String,
    // imageURL: String 

});

// This creates our model from the above schema, using mongoose's model method
var Entry = mongoose.model("Entry", EntrySchema);

// Export the Entry model
module.exports = Entry;