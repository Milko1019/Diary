var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var ImageSchema = new Schema({

    title: String,
    imageURL: String   // instead of this

});

// This creates our model from the above schema, using mongoose's model method
var Image = mongoose.model("Image", ImageSchema);

// Export the Entry model
module.exports = Image;