import * as FileSystem from 'expo-file-system';
import { encode } from 'base64-arraybuffer';


export const image = async (imageBuffer) => {
  const base64 = encode(imageBuffer);
  const path = `${FileSystem.documentDirectory}intermediate.png`;
  await FileSystem.writeAsStringAsync(path, base64, {
    encoding: FileSystem.EncodingType.Base64,
  });
  return path;
};
