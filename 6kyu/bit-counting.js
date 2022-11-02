// kata link: https://www.codewars.com/kata/526571aae218b8ee490006f4

var countBits = function (n) {
  if (n === 0) return 0;
  let binString = n.toString(2);
  return binString.match(/1/g).length;
};
