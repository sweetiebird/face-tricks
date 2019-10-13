import { Socket } from 'services';


export const sendImage = async (image) => {
  const socket = await Socket.init();

  return new Promise((resolve) => {
    socket.setOnMessage((evt) => {
      resolve(evt.data);
    });

    socket.sendMessage(image);
  });
};
