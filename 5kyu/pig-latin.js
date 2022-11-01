// kata link: https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str) {
  let arr = str.split(" ");
  let result = [];

  arr.forEach((word) => {
    if (/^[a-zA-Z]+$/.test(word.charAt(0)) === true) {
      result.push(word.substring(1) + word.charAt(0) + "ay");
    } else {
      result.push(word);
    }
  });

  return result.join(" ");
}
