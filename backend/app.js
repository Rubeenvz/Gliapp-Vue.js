'use strict';
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

const API_PATH_NAME = '/api';

var user_routes = require('./routes/user.routes');
app.use(API_PATH_NAME, user_routes);

module.exports = app;