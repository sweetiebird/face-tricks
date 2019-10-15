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
