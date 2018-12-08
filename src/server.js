'use strict';

// models to other modules
var express = require('express'),
  router = express.Router(),
  bodyParser = require('body-parser'),
  swaggerUi = require('swagger-ui-express'),
  swaggerDocument = require('./swagger.json');


var app = express();

//rest API requirements
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//middleware for create
var createUser = function (req, res, next) {

  res.json(user);
};

var updateUser = function (req, res, next) {
  res.json(user);
};

var deleteUser = function (req, res, next) {
  res.json(req.user);
};

var getAllUsers = function (req, res, next) {
  res.json(users);
};

var getOneUser = function (req, res) {
  res.json(req.user);
};

var getByIdUser = function (req, res, next, id) {
  req.user = user;
  next();
};

router.route('/users')
  .post(createUser)
  .get(getAllUsers);

router.route('/users/:userId')
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser);

router.param('userId', getByIdUser);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);

app.listen(3000);
module.exports = app;

