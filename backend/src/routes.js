const { Router } = require('express');
const crypto = require('crypto');
const routes = Router();
const DB = require('./database/connection');
// const usersController = require('./controllers/usersController')

module.exports = (dependencies) => {
  const { io } = dependencies;

  io.on('connection', (socket) => {
    if (socket.handshake.query.match) {
      console.log(`User connected ${socket.handshake.query.match}`);
      socket.join(`match ${socket.handshake.query.match}`);
    } else {
      console.log('a new client connected');
    }
  });

  routes.post('/patients', async (req, res) => {
    try {
      const { name, email, password, bio, image } = req.body;

      const id = crypto.randomBytes(6).toString('hex');
      const sql = `insert into patients(id, name, email, password, bio, image) values('${id}','${name}', '${email}', '${password}', '${bio}', '${image}' )`;
      const db = await DB.query(sql);
      req.body.id = id;

      return res.json({ status: 'ok', result: req.body });
    } catch (err) {
      return res.send({ err: 'err' });
    }
  });

  routes.post('/volunteers', async (req, res) => {
    try {
      const { name, email, password, bio, image } = req.body;
      const id = crypto.randomBytes(6).toString('hex');
      const sql = `insert into volunteer(id, name, email, password, bio, image) values('${id}','${name}', '${email}', '${password}', '${bio}', '${image}' )`;
      const db = await DB.query(sql);
      req.body.id = id;

      return res.json({ status: 'ok', result: req.body });
    } catch (err) {
      return res.send({ err: 'err' });
    }
  });

  routes.post('/psychologists', async (req, res) => {
    try {
      const { name, email, password, bio, image } = req.body;
      const sql = `insert into psychologist(id, name, email, password, bio, image) values('${id}','${name}', '${email}', '${password}', '${bio}', '${image}' )`;
      const db = await DB.query(sql);
      req.body.id = id;

      return res.json({ status: 'ok', result: req.body });
    } catch (err) {
      return res.send({ err: 'err' });
    }
  });

  routes.get('/patients', async (req, res) => {
    try {
      const sql = 'select * from patients;';
      const { result } = await DB.query(sql);

      return res.json({ status: 'ok', result });
    } catch (err) {
      return res.send({ err: 'err' });
    }
  });

  // login
  routes.post('/patient', async (req, res) => {
    try {
      const { email, password } = req.body;
      const sql = `select * from patients where email = '${email}'`;
      const { result } = await DB.query(sql);

      return res.json({ status: 'ok', result });
    } catch (err) {
      return res.send({ err: 'err' });
    }
  });

  routes.post('/volunteer', async (req, res) => {
    try {
      const { email, password } = req.body;
      const sql = `select * from volunteer where email = '${email}'`;
      const { result } = await DB.query(sql);

      return res.json({ status: 'ok', result });
    } catch (err) {
      return res.send({ err: 'err' });
    }
  });

  routes.post('/psychologist', async (req, res) => {
    try {
      const { email, password } = req.body;
      const sql = `select * from psychologist where email = '${email}'`;
      const { result } = await DB.query(sql);

      return res.json({ status: 'ok', result });
    } catch (err) {
      return res.send({ err: 'err' });
    }
  });

  routes.get('/patients/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const sql = `select * from patients where email = '${email}'`;
      const { result } = await DB.query(sql);

      return res.json({ status: 'ok', result });
    } catch (err) {
      return res.send({ err: 'err' });
    }
  });
  return routes;
};

// routes.post('/user', usersController.create);
// routes.get('/users', usersController.index);
// routes.get('/users/:id', usersController.filter);
