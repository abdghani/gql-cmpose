const mongoose = require("mongoose");

const connect_db = () => {
  return mongoose.connect(process.env.DB, { useNewUrlParser: true });
};

module.exports = connect_db;
