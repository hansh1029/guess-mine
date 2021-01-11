/* eslint-disable prettier/prettier */
const socketController = (socket) => {
  socket.on("setNickname", ({ nickname }) => {
    socket.nickname = nickname;
    console.log(socket.nickname);
  });
};

export default socketController;
