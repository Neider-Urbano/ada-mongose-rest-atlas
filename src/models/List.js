let mongoose = require("mongoose");

let listSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
      lowercase: false,
      validate: (value) => {
        return value != "jaja";
      },
    },
    state: {
      type: String,
      required: false,
      unique: false,
      lowercase: true,
      default: "pending",
      validate: (value) => {
        return value != "";
      },
    },
  },
  { timestamps: true }
);
const ListModel = mongoose.model("List", listSchema, "lists");

module.exports = ListModel;
