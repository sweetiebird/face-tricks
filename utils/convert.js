export const listify = (x) => {
  return Array.isArray(x) ? x : [x];
};

export const mapconcat = (f, xs, sep = " ") => {
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

import * as Random from 'expo-random';

export const randb = async () => {
  const randomBytes = await Random.getRandomBytesAsync(1);
  return randomBytes[0];
};

const alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const randString = async (n) => {
  const nc = alphabet.length;
  let s = "";
  while (s.length < n) {
    const x = await randb();
    if (x <= 247) {
      const c = alphabet[x % nc];
      s += c;
    }
  }
  return s;
};

const uniqueIds = {};

export const uniqueId = async (n) => {
  const id = await randString(Math.max(5, n));
  if (uniqueIds[id]) {
    return uniqueId(n);
  } else {
    uniqueIds[id] = id;
    return id;
  }
};
