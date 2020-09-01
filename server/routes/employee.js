let mongoose = require("mongoose");
let express = require("express");
let router = express.Router();

let user = require("../Models/employee_schema");

router.route("/").post((req, res, next) => {
  res.json("Sorry, this route is not accessible!");
});
router.route("/").get((req, res) => {
  res.json("Sorry, this route is not accessible!");
});

router.route("/add-employee").post((req, res, next) => {
  user.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send(data);
    }
  });
});

router.route("/add-employee").get((req, res) => {
  user.find({}, function (err, users) {
    res.send(users[users.length - 1]);
  });
});

router.route("/get-employee").post((req, res, next) => {
  user.countDocuments(req.body, (error, count) => {
    if (count == 1) {
      user.findById(req.body, (error, data) => {
        if (error) {
          return next(error);
        } else {
          const doesUserExit = user.exists({ _id: req.body });
          console.log(doesUserExit);
          res.send(data);
        }
      });
    } else {
      res.send("No Such User With Given ID Exists");
    }
  });
});

router.route("/get-employee").get((req, res) => {
  res.json("Sorry, this route is not accessible!");
});

router.route("/get-all").get((req, res) => {
  user.find({}, function (err, users) {
    res.send(users);
  });
});
module.exports = router;
