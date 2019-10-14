export const sendImage = async (socket, image) => {
  return new Promise((resolve) => {
    socket.setOnMessage((evt) => {
      resolve(evt.data);
    });

    socket.sendMessage(image);
  });
};

export const sendEditorValues = async (socket, mappedValues) => {
  return new Promise((resolve) => {
    socket.setOnMessage((evt) => {
      resolve(evt.data);
    });

    const message = `
    (do
      (grab-image (set wip (grab-latent nil 1.0 '(${mappedValues.smile} smile))))
    )`;

    socket.sendMessage(message);
  });
};
