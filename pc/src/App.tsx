import { useEffect } from 'react';
import { io } from 'socket.io-client';
import './App.css';

const SERVER_URL = 'http://localhost:3000';
function App() {
  useEffect(() => {
    const socket = io(SERVER_URL);
    socket.on('connect', () => {
      console.log('Connected to server');
    });
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <>
      <h1>App - PC</h1>
    </>
  );
}

export default App;
