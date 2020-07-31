const { Router } = require('express');
const routes = Router();
const DB = require('./database/connection')
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

  routes.post('/user', async (req, res) => {
    const { name, email, password, bio, image } = req.body;
    const sql = `insert into patients(name, email, password, bio, image) values('${name}', '${email}', '${password}', '${bio}', '${image}' )`
    const db = await DB.create(sql)

    return res.send('ok')
  });

  routes.post('/volunteer', async (req, res) => {
    const { name, email, password, bio, image } = req.body;
    const sql = `insert into volunteer(name, email, password, bio, image) values('${name}', '${email}', '${password}', '${bio}', '${image}' )`
    const db = await DB.create(sql)

    return res.send('ok')
  });

  routes.post('/psychologist', async (req, res) => {
    const { name, email, password, bio, image } = req.body;
    const sql = `insert into psychologist(name, email, password, bio, image) values('${name}', '${email}', '${password}', '${bio}', '${image}' )`
    const db = await DB.create(sql)

    return res.send('ok')
  });

  routes.get('/users', async (req, res) => {
    const sql = 'select * from patients;'
    const resp = await DB.create(sql)
    console.log(resp)
  })

  return routes;
};

// routes.post('/user', usersController.create);
// routes.get('/users', usersController.index);
// routes.get('/users/:id', usersController.filter);
