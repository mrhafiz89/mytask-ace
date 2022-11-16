const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.userBoard = async (req, res) => {
  const { search } = req.query;

  var whereString = "";
  if (search) {
    whereString = {
      [Op.or]: [
        {
          username: {
            [Op.substring]: search,
          },
        },
        {
          name: {
            [Op.substring]: search,
          },
        },
        {
          email: {
            [Op.substring]: search,
          },
        },
        {
          address: {
            [Op.substring]: search,
          },
        },
      ],
    };
  }

  var listUser = await User.findAll({
    where: whereString,
  }).catch((err) => {
    res.status(500).send({ message: err.message });
  });

  if (listUser.length) {
    var result = {
      message: "Successful Retrieve Data",
      data: listUser,
    };

    res.status(200).send(result);
  } else {
    var result = {
      message: "No data in database",
    };
    res.status(500).send(result);
  }
};

exports.updateUser = async (req, res) => {
  const { username, email, name, address } = req.body;

  var updateString = {};
  if (email) {
    updateString["email"] = email;
  }
  if (name) {
    updateString["name"] = name;
  }
  if (address) {
    updateString["address"] = address;
  }

  // find if username exist
  var findUser = await User.findOne({
    where: {
      username: username,
    },
  }).catch((err) => {
    res.status(500).send({ message: err.message });
  });

  if (findUser) {
    // check if email exist
    if (email) {
      var checkEmail = await User.findOne({
        where: {
          email: email,
        },
      }).catch((err) => {
        res.status(500).send({ message: err.message });
      });

      if (checkEmail) {
        return res.status(500).send({ message: "Email already exist" });
      }
    }

    // update database
    User.update(updateString, {
      where: {
        username: username,
      },
    }).catch((err) => {
      res.status(500).send({ message: err.message });
    });

    var result = {
      message: "Successful Update Data",
      data: updateString,
    };

    res.status(200).send(result);
  } else {
    var result = {
      message: "No user in with given username",
    };
    res.status(500).send(result);
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.body;

  // find if username exist
  var findUser = await User.findOne({
    where: {
      id: id,
    },
  }).catch((err) => {
    res.status(500).send({ message: err.message });
  });

  if (findUser) {
    // update database
    User.destroy({
      where: {
        id: id,
      },
    }).catch((err) => {
      res.status(500).send({ message: err.message });
    });

    var result = {
      message: "Successful Delete Data",
      data: findUser,
    };

    res.status(200).send(result);
  } else {
    var result = {
      message: "No user in database with given ID",
    };
    res.status(500).send(result);
  }
};
