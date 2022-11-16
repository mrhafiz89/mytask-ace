const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const { username, email, password, name, address } = req.body;

  // Save User to Database
  User.create({
    username: username,
    email: email,
    password: bcrypt.hashSync(password, 8),
    name: name,
    address: address,
  })
    .then((user) => {
      res.send({
        message: "User was registered successfully!",
        data: user,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  const { username, password } = req.body;

  User.findOne({
    where: {
      username: username,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(password, user.password);

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Login Not Match",
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      res.status(200).send({
        message: "Login Success",
        data: {
          id: user.id,
          username: user.username,
          email: user.email,
          accessToken: token,
        },
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
