// kata link: https://www.codewars.com/kata/541c8630095125aba6000c00

function digital_root(n) {
  while (n > 9) {
    let stringN = n.toString();
    let arrayN = stringN.split("");
    n = 0;

    for (let i = 0; i < arrayN.length; i++) {
      n += Number(arrayN[i]);
    }
  }
  return n;
}
