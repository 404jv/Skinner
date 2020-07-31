const formatMessage = require('./messages');
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
} = require('./users');

module.exports = (dependencies) => {
  const { io } = dependencies;

  const chatName = 'Skinner chat'

  let messages = [];


  io.on('connection', (socket) => {
    socket.on('joinRoom', ({ username, room }) => {
      const user = userJoin(socket.id, username, room);

      socket.join(user.room);

      // Welcome message current user
      socket.emit('message', formatMessage(chatName, 'Welcome to Skinner Chat!'));

      // Broadcast when a user connects
      socket.broadcast
        .to(user.room)
        .emit(
          'message',
          formatMessage(chatName, `${user.username} has joined the chat`)
        );

      // Send users and room info
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
      });

      // Listen for chatMessage
      socket.on('chatMessage', msg => {
        const user = getCurrentUser(socket.id);

        io.to(user.room).emit('message', formatMessage(user.username, msg))
      });

      socket.on('disconnect', () => {
        const user = userLeave(socket.id);

        if (user) {
          io.to(user.room).emit('message', formatMessage(chatName, `${user.username} has left the chat`))
        }

        // Send users and room info
        io.to(user.room).emit('roomUsers', {
          room: user.room,
          users: getRoomUsers(user.room)
        });
      })

    })

  });

  return io;
};
