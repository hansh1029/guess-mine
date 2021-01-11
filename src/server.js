import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";
import socketController from "./socketController";

const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));
app.get("/", (req, res) => res.render("home"));

const handleListening = () =>
  console.log(`✅ Server running: http://localhost:${PORT}`);

//define a server here
const server = app.listen(PORT, handleListening);

//use socketio on top of the sever
const io = socketIO(server);

//set connection
// io is socket server, on is listening event, socket is connection, emit sends event to the connected socket,boadcast sends event to all sockets excepts the socket just conneced now.
// eslint-disable-next-line prettier/prettier
io.on("connection", (socket) => socketController(socket));
