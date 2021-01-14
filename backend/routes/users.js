const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("error: " + err));
});

router.route("/add").post((req, res) => {
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const isInstructor = req.body.isInstructor;

  const newUser = new User({ username, password, email, isInstructor });

  newUser
    .save()
    .then(() => res.json("user added!"))
    .catch(err => res.status(400).json("error: " + err));
});

module.exports = router;
