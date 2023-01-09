// kata link: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

function removeChar(str) {
  newStr = str.slice(1, str.length - 1);
  return newStr;
}

//alternatively:

function removeChar(str) {
  str = str.slice(1, str.length - 1);
  return str;
}
