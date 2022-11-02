// kata link: https://www.codewars.com/kata/55c45be3b2079eccff00010f

function order(words) {
  let splitArray = words.split(" ");
  let newArray = Array(splitArray.length);
  for (let i = 0; i < splitArray.length; i++) {
    for (let j = 0; j < splitArray[i].length; j++) {
      if (!isNaN(splitArray[i].charAt(j))) {
        newArray[splitArray[i].charAt(j) - 1] = splitArray[i];
      }
    }
  }
  return newArray.join(" ");
}
