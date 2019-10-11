import { websocketEndpoint } from 'constants/Api';


const ws = new WebSocket(websocketEndpoint);

class Sockets {
  static isConnected = () => ws.readyState === WebSocket.OPEN;

  queue = [];
  timer = null;

  clearTimer = () => {
    clearTimeout(this.timer);
    this.timer = null;
  };

  hasQueue = () => this.queue.length > 0;

  emptyQueue = () => {
    if (Sockets.isConnected()) {
      this.clearTimer();

      while (this.hasQueue()) {
        ws.send(this.queue.shift());
      }
    }
  };

  sendMessage = (message) => {
    if (Sockets.isConnected()) {
      this.queue.push(message);
      this.emptyQueue();
    } else {
      this.queue.push(message);
      this.timer = setTimeout(this.emptyQueue, 10);
    }
  };

  setOnClose = (callback) => {
    ws.onclose = callback;
  };

  setOnMessage = (callback) => {
    ws.onmessage = callback;
  };

  setOnOpen = (callback) => {
    ws.onopen = () => {
      callback(ws);
    };
  };
}

export default Sockets;
