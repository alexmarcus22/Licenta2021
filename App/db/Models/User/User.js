const mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  emailAccount: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  activated: {
		type: Boolean,
		required: true
  }
});

var userModel = mongoose.model("userSchema", userSchema);
module.exports = userModel;
