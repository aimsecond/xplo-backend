const user = require("../models/user");

const listAllusers = (req, res) => {
  user.find({}, (err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(user);
  });
};

const createNewuser = (req, res) => {
  let newuser = new user(req.body);
  newuser.save((err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(user);
  });
};

const readuser = (req, res) => {
  user.findById(req.params.userid, (err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(user);
  });
};

const updateuser = (req, res) => {
  user.findOneAndUpdate(
    { _id: req.params.userid },
    req.body,
    { new: true },
    (err, user) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(user);
    }
  );
};

const deleteuser = (req, res) => {
  user.remove({ _id: req.params.userid }, (err, user) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "user successfully deleted" });
  });
};

module.exports = {
    listAllusers,
    createNewuser,
    readuser,
    updateuser,
    deleteuser
  }