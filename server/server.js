const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 8080;

io.on('connection', (socket) => {
  console.log('A client connected.');
  socket.on('send', (payload) => {
      console.log(payload);
      socket.broadcast.emit('broadcast', payload);
  });
  socket.on('disconnect', () => {
      console.log('Conenction closed.');
  });
});

server.listen(PORT, () => {
  console.log('Listening..');
});
