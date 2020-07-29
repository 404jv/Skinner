const ibm_db = require('ibm_db');
const connStr = `DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-10.services.dal.bluemix.net;PORT=50001;PROTOCOL=TCPIP;UID=tkm86328;PWD=tgdld0t@lj1x7f9c;Security=SSL;`;
let connection = '';

async function connectDatabase() {
  connection = await ibm_db.open(connStr);

  const item = await connection.query('select 1 from sysibm.sysdummy1');

  console.log(item)
}

connectDatabase();

module.exports = connection;
