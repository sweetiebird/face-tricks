import { Socket } from 'services';


export const sendImage = (image) => {
  return new Promise((resolve) => {
    Socket.setOnMessage((evt) => {
      const id = evt.data;
      const message = `
      (ado
        (with-temp-dir tmp-image-dir
          (let fname (os.path.join tmp-image-dir "image.jpg")
            (with (open fname "wb") as f
              (f.write ${id}))
            (let img (PIL.Image.open fname)
              (set-raw-image img))))
          
        ;(await (set-data ${id}))
        (grab-target)
      )`;
      Socket.setOnMessage(evt => {
        resolve(evt.data);
      });
      Socket.sendMessage(message);
    });
    Socket.sendMessage(image);
  });
};
