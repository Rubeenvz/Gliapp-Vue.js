const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    required: true,
  },
  area: {
    type: String,
    enum: ["RRHH", "IT"],
    required: true,
  },
});

UserSchema.method("toJSON", function () {
  const { __v, password, ...object } = this.toObject();
  return object;
});

module.exports = model("User", UserSchema);
