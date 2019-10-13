import * as FileSystem from 'expo-file-system';
import { decode } from 'base64-arraybuffer';


export const getFile = async (uri) => {
  const fileStr = await FileSystem.readAsStringAsync(uri, {
    encoding: FileSystem.EncodingType.Base64,
  });
  return decode(fileStr);
};
