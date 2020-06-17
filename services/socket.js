import { api } from '../constants';


class Socket {
  ws = new WebSocket(api.websocketEndpoint);
  queue = [];
  timer = null;

  static init = async () => {
    return new Promise((resolve) => {
      const socket = new Socket();
      socket.ws.onopen = () => resolve(socket);
    });
  };

  clearTimer = () => {
    clearTimeout(this.timer);
    this.timer = null;
  };

  emptyQueue = () => {
    this.clearTimer();

    if (this.isConnected()) {
      while (this.hasQueue()) {
        this.ws.send(this.queue.shift());
      }
    } else {
      this.startQueueTimer();
    }
  };

  hasQueue = () => this.queue.length > 0;

  isConnected = () => this.ws.readyState === WebSocket.OPEN;

  sendMessage = (message) => {
    this.queue.push(message);
    this.emptyQueue();
  };

  setOnClose = (callback) => {
    this.ws.onclose = callback;
  };

  setOnMessage = (callback) => {
    this.ws.onmessage = callback;
  };

  setOnOpen = (callback) => {
    this.ws.onopen = callback;
  };

  startQueueTimer = () => {
    this.timer = setTimeout(this.emptyQueue, 10);
  };
}

export default Socket;
