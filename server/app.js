const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
require('dotenv').config();
const http = require('http');
const socketIo = require('socket.io');

const indexRouter = require('./routes/index.routes');
// const getUser = require('./middleware/getUser');
const { verifyAccessToken } = require('./middleware/verifyJWT');

app.use(cookieParser());
app.use(express.urlencoded({ extended: 'true' }));
app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(ssr);
app.use(verifyAccessToken);
// app.use(getUser);

app.use('/', indexRouter);

const PORT = 4000;
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('call', () => {
    console.log('Call initiated');
    socket.broadcast.emit('call');
  });

  socket.on('acceptCall', () => {
    console.log('Call accepted');
    socket.broadcast.emit('callAccepted');
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});


app.listen(PORT, () => {
  console.log(`А мы пашем как буйволы и ныряем как дельфины на ${PORT} порту.`);
});
