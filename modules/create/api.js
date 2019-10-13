import { Socket } from 'services';


export const sendImage = (image) => {
  Socket.setOnMessage((data) => console.log(data));
  Socket.sendMessage(image);
};
