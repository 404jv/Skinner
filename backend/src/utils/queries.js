const crypto = require('crypto');
const { response } = require('../app');

module.exports = (dependencies) => {
  const { db } = dependencies;
  console.log(db)

  async function select(table) {
    try {
      const reponse = await db.query(`select * from users`);
      return response;
    } catch (err) {
      return err;
    }
  }

  async function create(data) {
    const { name, email, bio, image } = data;
    const id = crypto.randomBytes(6).toString('hex');
    try {
      const reponse = await db.query(
        `insert into users(id, name, email, bio, image) values(${id}${name}, ${email}, ${bio}, ${image} )`);
      console.log('oi')
      return response;
    } catch (err) {
      return err;
    }
  }
  // async function createTable(name) {
  //   try {
  //     const reponse = await connection.query(
  //       `insert into users(id, name, email, bio, image) values(${id}, ${name}, ${email}, ${bio}, ${image} )`
  //     );
  //     return response;
  //   } catch (err) {
  //     return err;
  //   }
  // }

  return {
    select,
    create,
  };
};
