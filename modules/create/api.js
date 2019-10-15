export const sendImage = async (socket, image) => {
  return new Promise((resolve) => {
    socket.setOnMessage((evt) => {
      resolve(evt.data);
    });

    socket.sendMessage(image);
  });
};

const listify = (x) => {
  return Array.isArray(x) ? x : [x];
};

const mapconcat = (f, xs, sep = " ") => {
  let r = "";
  let c = "";
  for (x of xs) {
    let y = f ? f(x) : x;
    if (y != null) {
      for (let z of listify(y)) {
        r += c + z;
        c = sep;
      }
    }
  }
  return r;
};

export const sendEditorValues = async (socket, mappedValues) => {
  return new Promise((resolve) => {
    socket.setOnMessage((evt) => {
      resolve(evt.data);
    });

    const values = Object.entries(mappedValues).map(([k, v]) => [v, k]);
    const result = mapconcat(null, values, " ");

    const message = `
    (do
      (grab-image (set wip (grab-latent nil 1.0 (quote (${result})))))
    )`;

    socket.sendMessage(message);
  });
};
