// kata link: https://www.codewars.com/kata/52774a314c2333f0a7000688

function validParentheses(parens) {
  let arr = parens.split("");
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] === ")" || arr[arr.length - 1] === "(") {
      return false;
    }
    if (arr[i] === "(") {
      count++;
    }
    if (arr[i] === ")") {
      count--;
    }
    if (count < 0) {
      return false;
    }
  }
  if (count !== 0) {
    return false;
  }
  return true;
}
