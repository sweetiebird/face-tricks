import { encode as btoa } from 'base-64';


const arrayBufferToBase64 = (buffer) => {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  for (let i = 0, len = bytes.byteLength; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
};


export default {
  arrayBuffer: {
    toBase64: arrayBufferToBase64,
  },
};
