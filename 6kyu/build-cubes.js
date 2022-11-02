// kata link: https://www.codewars.com/kata/5592e3bd57b64d00f3000047

function findNb(m) {
  let sum = 0;
  if (typeof m === "number") {
    for (let n = 1; Math.pow(n, 3) < m; n++) {
      sum += Math.pow(n, 3);
      if (sum === m) {
        return n;
      }
      if (sum > m) {
        return -1;
      }
    }
  }
  return -1;
}
