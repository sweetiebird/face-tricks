import { websocketEndpoint } from '../constants/Api';
import { encode } from 'base-64';

export const ws = new WebSocket(websocketEndpoint);

export function arrayBufferToBase64(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  for (let i = 0, len = bytes.byteLength; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return encode(binary);
}

ws.onopen = () => {
  console.log('websocket open');
  // sendMessage(`(ado
  //
  // (mac w/size (w h rest: body)
  //   \`(let img (do ,@body)
  //       (if (image? img)
  //           (resize-image img '(,w ,h))
  //         img)))
  //
  // (await (set-data data*.13))
  // (await (set-estimate))
  // (await (process))
  // ;(await (send-image doomguy))
  //
  // (w/size 128 128
  //   (grab-image nil 0.8 '(0.5 smile 0.5 fear 0.5 anger 5.0 hair_blond 3 age_young)))
  //
  // )`);
};

ws.onclose = (evt) => {
  console.log('websocket closed', evt.code, evt.reason);
};



export const sendMessage = (message) => {
  ws.send(message);
};
