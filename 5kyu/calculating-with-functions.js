// kata link: https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

function calc(arr, num) {
  if (Array.isArray(arr)) {
    if (arr[1] === "p") {
      return num + arr[0];
    }
    if (arr[1] === "m") {
      return num - arr[0];
    }
    if (arr[1] === "t") {
      return num * arr[0];
    }
    if (arr[1] === "d") {
      return Math.floor(num / arr[0]);
    }
  }
  return num;
}

function zero(arr) {
  return calc(arr, 0);
}
function one(arr) {
  return calc(arr, 1);
}
function two(arr) {
  return calc(arr, 2);
}
function three(arr) {
  return calc(arr, 3);
}
function four(arr) {
  return calc(arr, 4);
}
function five(arr) {
  return calc(arr, 5);
}
function six(arr) {
  return calc(arr, 6);
}
function seven(arr) {
  return calc(arr, 7);
}
function eight(arr) {
  return calc(arr, 8);
}
function nine(arr) {
  return calc(arr, 9);
}

function plus(num) {
  return [num, "p"];
}
function minus(num) {
  return [num, "m"];
}
function times(num) {
  return [num, "t"];
}
function dividedBy(num) {
  return [num, "d"];
}
