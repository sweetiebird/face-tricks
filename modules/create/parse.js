import * as FileSystem from 'expo-file-system';
import { encode } from 'base64-arraybuffer';
import shortid from 'shortid';


export const image = async (imageBuffer) => {
  const base64 = encode(imageBuffer);
  const str = shortid.generate();
  const path = `${FileSystem.documentDirectory}intermediate_${str}.png`;
  await FileSystem.writeAsStringAsync(path, base64, {
    encoding: FileSystem.EncodingType.Base64,
  });
  return path;
};
