import { encode } from 'base64-arraybuffer';
import shortid from 'shortid';

import { FS } from 'utils';


export const image = async (imageBuffer, resultId) => {
  const base64 = encode(imageBuffer);
  const str = shortid.generate();
  const path = `${FS.getIntermediatesDir()}/intermediate_${resultId}_${str}.png`;
  await FS.writeBase64ToFile(path, base64);
  return path;
};
