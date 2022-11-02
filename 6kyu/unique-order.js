// kata link: https://www.codewars.com/kata/54e6533c92449cc251001667

var uniqueInOrder = function (arr) {
  if (typeof arr === "string") {
    arr = arr.split("");
  }
  console.log(arr);
  let result = arr.filter((char, i) => {
    return char !== arr[i + 1];
  });
  return result;
};
