import * as FileSystem from 'expo-file-system';
import { encode } from 'base64-arraybuffer';
import shortid from 'shortid';

import { FS } from 'utils';


export const wipe = async () => {
  const path = `${await FS.getIntermediatesDir()}`;
  const files = await FileSystem.readDirectoryAsync(path);
  for (let file of files) {
    console.log('Checking', file);
    if (file.startsWith(`intermediate_`) && file.endsWith('.jpg')) {
      const fullPath = `${path}/${file}`;
      console.log('Wiping', fullPath);
      await FileSystem.deleteAsync(fullPath);
    }
  }
};

let shouldWipe = true;

export const image = async (imageBuffer, resultId) => {
  if (shouldWipe) {
    shouldWipe = false;
    await wipe();
  }
  const base64 = encode(imageBuffer);
  const str = shortid.generate();
  const path = `${await FS.getIntermediatesDir()}/intermediate_${resultId}_${str}.jpg`;
  await FS.writeBase64ToFile(path, base64);
  return path;
};
