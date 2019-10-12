import { api } from 'constants';


const ws = new WebSocket(api.websocketEndpoint);

class Socket {
  static queue = [];
  static timer = null;

  static clearTimer = () => {
    clearTimeout(Socket.timer);
    Socket.timer = null;
  };

  static emptyQueue = () => {
    Socket.clearTimer();

    if (Socket.isConnected()) {
      while (Socket.hasQueue()) {
        ws.send(Socket.queue.shift());
      }
    } else {
      Socket.startQueueTimer();
    }
  };

  static hasQueue = () => Socket.queue.length > 0;

  static isConnected = () => ws.readyState === WebSocket.OPEN;

  static sendMessage = (message) => {
    Socket.queue.push(message);
    Socket.emptyQueue();
  };

  static setOnClose = (callback) => {
    ws.onclose = callback;
  };

  static setOnMessage = (callback) => {
    ws.onmessage = callback;
  };

  static setOnOpen = (callback) => {
    ws.onopen = callback;
  };

  static startQueueTimer = () => {
    Socket.timer = setTimeout(Socket.emptyQueue, 10);
  };
}

export default Socket;
