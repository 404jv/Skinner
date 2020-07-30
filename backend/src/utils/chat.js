module.exports = (dependencies) => {
  const { io } = dependencies;

  let messages = [];

  io.on('connection', (socket) => {
    if (socket.handshake.query.match) {
      console.log(`User connected ${socket.handshake.query.match}`);
      socket.join(`match ${socket.handshake.query.match}`);
    } else {
      console.log('a new client connected');

      socket.on('groupMessage', (data) => {
        messages.push(data);
        socket.broadcast.emit('receivedGroupMessage', data);
      });
    }
  });

  // single messages

  return io;
};
