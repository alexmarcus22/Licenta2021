const mongoose = require('mongoose');
var googleUserSchema = new mongoose.Schema({
	googleID: {
		type: String,
		required: true,
	},
	displayName: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
		required: true,
		unique: true,
	},
	lastName: {
		type: Date,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	date: {
		type: Boolean,
		required: true,
		default: Date.now
	}
});

var userModel = mongoose.model("googleUserSchema", googleUserSchema);
module.exports = userModel;
