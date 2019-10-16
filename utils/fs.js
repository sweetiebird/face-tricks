import * as FileSystem from 'expo-file-system';
import { decode } from 'base64-arraybuffer';


export const getIntermediatesDir = async () => {
  const path = `${FileSystem.documentDirectory}weave`;
  await FileSystem.makeDirectoryAsync(path, { intermediates: true });
  return path;
};

export const getFile = async (uri) => {
  const fileStr = await FileSystem.readAsStringAsync(uri, {
    encoding: FileSystem.EncodingType.Base64,
  });
  return decode(fileStr);
};

export const writeBase64ToFile = async (path, base64) => {
  await FileSystem.writeAsStringAsync(path, base64, {
    encoding: FileSystem.EncodingType.Base64,
  });
};
