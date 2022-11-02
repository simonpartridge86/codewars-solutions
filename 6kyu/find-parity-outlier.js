// kata link: https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(arr) {
  let evenCount = 0,
    oddCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  if (evenCount === 1) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        return arr[i];
      }
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        return arr[i];
      }
    }
  }
}
