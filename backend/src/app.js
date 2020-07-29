require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const db = require('./database/connection');

const app = express();

app.io = require('socket.io')();

const routes = require('./routes')({ io: app.io });
const chat = require('./utils/chat')({ io: app.io, db });
const queries = require('./utils/queries')({ db });

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
// app.use(chat);
// app.use(queries);
app.use('/', routes);

module.exports = app;
