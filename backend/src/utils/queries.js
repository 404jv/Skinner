const crypto = require('crypto');

module.exports = (dependencies) => {
  const { db } = dependencies;

  async function select(table) {
    try {
      const reponse = await connection.query(`select * from ${table}`);
      return response;
    } catch (err) {
      return err;
    }
  }

  async function create(data) {
    const { name, email, bio, image } = data;
    const id = crypto.randomBytes(6).toString('hex');
    try {
      const reponse = await connection.query(
        `insert into users(id, name, email, bio, image) values(${id}, ${name}, ${email}, ${bio}, ${image} )`
      );
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
