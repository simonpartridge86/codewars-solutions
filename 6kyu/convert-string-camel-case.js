// kata link: https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str) {
  if (!str) {
    return str;
  }
  let arr;
  if (str.includes("_")) {
    arr = str.split("_");
  }
  if (str.includes("-")) {
    arr = str.split("-");
  }
  let newArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].substring(1));
  }
  return newArr.join("");
}
