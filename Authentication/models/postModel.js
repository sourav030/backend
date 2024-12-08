const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userModel", // Reference to the User model
    required: true,
  }
 
});

module.exports = mongoose.model('postModel', postSchema);
