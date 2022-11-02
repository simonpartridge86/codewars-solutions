// kata link: https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string) {
  let alph = `abcdefghijklmnopqrstuvwxyz`;
  let alphSplit = alph.split(``);
  string = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (alphSplit.includes(string.charAt(i))) {
      let index = alphSplit.indexOf(string.charAt(i));
      alphSplit.splice(index, 1);
    }
  }
  return alphSplit.length === 0;
}
