import { join } from "path";
import express from "express";
import socketIO from "socket.io";

const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));
app.get("/", (req, res) => res.render("home"));

const handleListening = () =>
  console.log(`✅ Server running: http://localhost:${PORT}`);

//define a server here
const server = app.listen(PORT, handleListening);

//use socketio on top of the sever
const io = socketIO(server);
