// kata link: https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let numArray = [];
  for (let i = 0; i < text.length; i++) {
    if (alphabet.includes(text.toLowerCase()[i])) {
      numArray.push(alphabet.indexOf(text.toLowerCase()[i]) + 1);
    }
  }
  return numArray.join(" ");
}
