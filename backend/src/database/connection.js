const ibm_db = require('ibm_db');

class Database {
  constructor() {
    this.connection;
    this.connect()
  }

  async connect() {
    try {
      this.connection = await ibm_db.open(process.env.DB_URL)

      console.log('> Database : online');

      return this.connection
    } catch (err) {
      console.error('> Database : offline')
      return err
    }

  }

  async query(sql) {
    try {
      const result = await this.connection.query(sql)

      return { status: 'ok', result }
    } catch (err) {
      return { status: 'err' }
    }
  }

}

module.exports = new Database();