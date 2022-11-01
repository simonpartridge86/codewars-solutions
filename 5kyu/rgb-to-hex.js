// kata link: https://www.codewars.com/kata/513e08acc600c94f01000001

function rgb(r, g, b) {
  let arr = [r, g, b];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (arr[i] > 255) {
      num = 255;
    }
    if (arr[i] < 0) {
      num = 0;
    }
    let str = num.toString(16);
    if (str.length === 1) {
      str = "0" + str;
    }
    result.push(str);
  }
  return result.join("").toUpperCase();
}
