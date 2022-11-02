// kata link: https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  console.log(arr);
  let i = arr[0];

  while (i < arr[arr.length - 1]) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      break;
    }
    i++;
  }
  return i;
}
