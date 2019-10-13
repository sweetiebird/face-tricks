import { Socket } from 'services';


export const sendImage = async (image) => {
  const socket = await Socket.init();

  return new Promise((resolve) => {
    socket.setOnMessage((evt) => {
      const id = evt.data;
      const message = `
      (do
      
        (def set-image-from-data (data)
          (with-temp-dir tmp-image-dir
            (let fname (os.path.join tmp-image-dir "image.jpg")
              (with (open fname "wb") as f
                (f.write data))
              (let img (PIL.Image.open fname)
                (set-raw-image img)))))
          
        ;(await (set-data ${id}))
        ;(grab-target)
        (set-image-from-data ${id})
        (set-latent (grab-estimate))
        ;(set-latent (optimize-latent 4))
        (set emily (grab-image))
        emily
      )`;

      console.log(message);

      socket.setOnMessage(e => {
        resolve(e.data);
      });

      socket.sendMessage(message);
    });

    socket.sendMessage(image);
  });
};
