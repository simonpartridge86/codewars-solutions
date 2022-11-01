// kata link: https://www.codewars.com/kata/529bf0e9bdf7657179000008

const numString = "123456789";

function validateRow(arr) {
  return [...arr].sort().join("") === numString;
}

function validateColumn(arr, i) {
  const column = arr.map((e) => {
    return e[i];
  });
  return column.sort().join("") === numString;
}

function validateBlock(arr, i) {
  const x = Math.floor(i / 3) * 3;
  const y = (i % 3) * 3;
  const block = arr[x]
    .slice(y, y + 3)
    .concat(arr[x + 1].slice(y, y + 3))
    .concat(arr[x + 2].slice(y, y + 3));
  return block.sort().join("") === numString;
}

function validSolution(board) {
  for (let i = 0; i < 9; i++) {
    if (
      !validateRow(board[i]) ||
      !validateColumn(board, i) ||
      !validateBlock(board, i)
    ) {
      return false;
    }
  }
  return true;
}
