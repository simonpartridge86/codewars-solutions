// kata link: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word) {
  let arr = word.toLowerCase().split("");
  let findDupes = arr.filter((item, index) => arr.indexOf(item) != index);
  console.log(findDupes);
  let newArr = [];
  arr.forEach((e) => {
    if (findDupes.includes(e)) {
      newArr.push(")");
    } else {
      newArr.push("(");
    }
  });
  return newArr.join("");
}
