const mongoose = require("mongoose");

const dbURI =
  "mongodb://xplomac:xplo2018!@cluster0-shard-00-00-o16v9.mongodb.net:27017,cluster0-shard-00-01-o16v9.mongodb.net:27017,cluster0-shard-00-02-o16v9.mongodb.net:27017/test?ssl=true&replicaSet=cluster0-shard-0&authSource=admin&retryWrites=true";

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// require any models

require("../models/user");