const { model } = require("mongoose");
const bcrypt = require("bcryptjs");

const { UserSchema } = require("../schemas/UserSchema");

const UserModel = model("User", UserSchema);

module.exports = { UserModel };