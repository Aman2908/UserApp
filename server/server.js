let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
let database = require("./DB/db");

const userRoute = require("../server/routes/employee.js");

mongoose
  .connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(
    () => {
      console.log("Database connected sucessfully !");
    },
    error => {
      console.log("Database could not be connected : " + error);
    }
  );

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/", userRoute);

const port = 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});
