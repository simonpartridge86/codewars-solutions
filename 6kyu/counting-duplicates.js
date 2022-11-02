// kata link: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text) {
  let lowerStr = text.toLowerCase();
  console.log(lowerStr);
  let obj = {};
  for (const ch of lowerStr) {
    if (obj[ch]) {
      obj[ch] = obj[ch] + 1;
    } else {
      obj[ch] = 1;
    }
  }
  console.log(obj);
  let count = 0;
  for (const num in obj) {
    if (obj[num] > 1) {
      console.log(obj[num]);
      count++;
    }
  }
  return count;
}
