import { Socket } from 'dgram';
import express from 'express'
import http from 'http'       // node module 
import { Server } from 'socket.io'

const app = express();

const server = http.createServer(app);      // for socket io we need http server so we are creating it with our express app

// here io is a socket server
// io might get cors error while connecting to frontend so we give cors option
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST']
  }
});

// listening to connection 

// The io.on('connection', ...) function is an event listener that is triggered whenever a new client connects to the server
// When a new client connects, the provided callback function will be executed.where it logs a message, indicating that a new user has connected, along with the unique ID (socket.id) assigned to the client socket.
// This ID can be used to identify and interact with specific clients in the server-side code.
io.on('connection', (socket) => {
  // here socket is a new client/user
  console.log("socket -> ", socket)
  console.log(`User connected: ${socket.id}`);



  // The socket.on(...) function is an event listener that is triggered whenever a new client sends data to the server

  // This code snippet listens for a 'disconnect' event on a socket connection. When a client disconnects, it logs a message indicating that the user associated with the disconnected socket has disconnected along with the unique socket ID.
  // this is to monitor other users online status, ( whenever there a user is/goes offline an event will be triggered)  
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  })


})








export { app, io, server };


