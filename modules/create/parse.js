import * as FileSystem from 'expo-file-system';
import { encode } from 'base64-arraybuffer';
import shortid from 'shortid';


export const wipe = async () => {
  const path = `${FileSystem.documentDirectory}`;
  const files = await FileSystem.readDirectoryAsync(path);
  for (let file of files) {
    console.log('Checking', file);
    if (file.startsWith(`intermediate_`) && file.endsWith('.png')) {
      const fullPath = `${FileSystem.documentDirectory}${file}`;
      console.log('Wiping', fullPath);
      await FileSystem.deleteAsync(fullPath);
    }
  }
};

let shouldWipe = true;

export const image = async (imageBuffer) => {
  if (shouldWipe) {
    shouldWipe = false;
    await wipe();
  }
  const base64 = encode(imageBuffer);
  const str = shortid.generate();
  const path = `${FileSystem.documentDirectory}intermediate_${str}.png`;
  await FileSystem.writeAsStringAsync(path, base64, {
    encoding: FileSystem.EncodingType.Base64,
  });
  return path;
};
