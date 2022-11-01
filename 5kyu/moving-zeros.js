// kata link: https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(arr) {
  let result = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count++;
    } else {
      result.push(arr[i]);
    }
  }

  let j = 0;
  while (j < count) {
    result.push(0);
    j++;
  }
  return result;
}
