require("dotenv").config();
const username = process.env.USERMONGO;
const password = process.env.PASSWORDMONGO;
const uri =
  process.env.MONGOURIPART1 + username + password + process.env.MONGOURIPART2;

const mongoose = require("mongoose");

const conecctDb = async () => {
  return await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = conecctDb;
