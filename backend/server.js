const app = require('./src/app');
const server = require('http').createServer(app);

app.io.attach(server);

const port = process.env.POT || 3000;

server.listen(port, () => console.log(`> Server is running in port ${port}`));
