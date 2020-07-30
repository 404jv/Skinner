const ibm_db = require('ibm_db');
let connection;

const connectDatabase = async () =>
  (connection = await ibm_db.open(process.env.DB_URL));

connectDatabase();

module.exports = connection;

//   `insert into users(id, name, email, bio, image) values(1, 'Paulo', 'paulo@paulo', 'oi tudo tô feliz', 'https://google.com' )`
