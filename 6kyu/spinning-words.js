// kata link: https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(string) {
  let arr = string.split(" ");
  let result = [];
  arr.forEach((word) => {
    if (word.length >= 5) {
      result.push(word.split("").reverse().join(""));
    } else {
      result.push(word);
    }
  });
  return result.join(" ");
}
