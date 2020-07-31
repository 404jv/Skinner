const ibm_db = require('ibm_db');
let connection;

const connectDatabase = async () => {
  try {
    connection = await ibm_db.open(process.env.DB_URL)
    console.log('> Database : online');

    return connection
  } catch (err) {
    console.error('> Database : offline')
    return err
  }
}

connectDatabase();


module.exports = connection;
