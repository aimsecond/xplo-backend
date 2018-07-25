const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userController = require('./controllers/userController');

// db instance connection
require("./config/db");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API ENDPOINTS

app
  .route("/users")
  .get(userController.listAllusers)
  .post(userController.createNewuser);

app
  .route("/users/:userid")
  .get(userController.readuser)
  .put(userController.updateuser)
  .delete(userController.deleteuser);

app.listen(PORT, ()=> {
  console.log(`server is running at http://localhost:${PORT}`);
})