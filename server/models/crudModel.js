const mongoose = require("mongoose");

const crudSchema = new mongoose.Schema({
	fname: {
		type: String,
		required: [true, "Name is required"],
		unique: [true, "Name Already Exists"],
	},
	phone: {
		type: String,
		required: [true, "User phone number required"],
		min: [12, "Too Few. Not valid number. Eg. 251-XXX-XXXX"],
		max: [12, "Too long. Not valid number. Eg. 251-XXX-XXXX"],
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		trim: true,
		lowercase: true,
		unique: [true, "Email already exists"],
	},
	hobby: {
		type: String,
		required: [true, "hobby can't be blank"],
	},
});

module.exports = mongoose.model("Crud", crudSchema, "Cruds");
