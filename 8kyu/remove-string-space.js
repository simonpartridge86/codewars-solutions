// kata link: https://www.codewars.com/kata/57eae20f5500ad98e50002c5

function noSpace(x) {
  //remove spaces from string x;
  //for loop that checks each character
  //if char === " ", delete it
  let newStr = "";
  for (let i = 0; i < x.length; i++) {
    if (x.charAt(i) != " ") {
      newStr += x.charAt(i);
    }
  }
  return newStr;
}
