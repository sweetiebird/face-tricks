import { create } from 'constants';

import { Convert } from 'utils';


export const sendImage = async (socket, image) => {
  return new Promise((resolve) => {
    socket.setOnMessage((evt) => {
      resolve(evt.data);
    });

    socket.sendMessage(image);
  });
};

export const sendEditorValues = async (socket, mappedValues) => {
  const values = Object.entries(mappedValues).map(([k, v]) => [v, k]);
  const result = Convert.mapconcat(null, values, " ");

  const message = `
    (w/size ${create.imageSize} ${create.imageSize}
      (grab-image (set wip (grab-latent nil 1.0 (quote (${result})))))
    )`;

  socket.sendMessage(message);
};

export const sendEval = async (socket, message) => {
  socket.sendMessage(message);
};

