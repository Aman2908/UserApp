const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let employeeSchema = new Schema(
  {
    name: {
      type: String
    },
    address: {
      type: String
    },
    email: {
      type: String
    },
    companyName: {
      type: String
    }
  },
  {
    collection: "employee"
  }
);

module.exports = mongoose.model("Employee", employeeSchema);
