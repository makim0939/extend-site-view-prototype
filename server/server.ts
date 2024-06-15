import http from 'http';
import { Server } from 'socket.io';

const server = http.createServer();
server.listen(3000, () => console.log('Server running on port 3000'));

const io = new Server(server, {
  cors: {
    origin: ['http://localhost:5173', 'http://localhost:5174'],
  },
});

io.on('connection', (socket) => {
  console.log('User connected', socket.client.request.headers.origin);
});
