// kata link: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
  let count = 0;
  while (num > 9) {
    let numArray = num.toString().split("");
    num = Number(numArray[0]);
    for (let i = 1; i < numArray.length; i++) {
      num = num * Number(numArray[i]);
    }
    count++;
  }
  return count;
}
