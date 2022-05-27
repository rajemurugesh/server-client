const mongoose = require('mongoose');

const schema ={
  Emp_id: Number,
  Emp_name: String,
  Emp_phone: Number,
  Emp_Address: String,
};

module.exports = mongoose.model("emp", schema)