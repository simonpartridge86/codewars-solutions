// kata link: https://www.codewars.com/kata/5765870e190b1472ec0022a2

function fillPath(arr, row, col) {
  if (!checkCoords(arr.length, row, col)) {
    return;
  }

  if (arr[row][col] === "X" || arr[row][col] === "W") {
    return;
  }

  arr[row][col] = "X";

  fillPath(arr, row + 1, col);
  fillPath(arr, row - 1, col);
  fillPath(arr, row, col + 1);
  fillPath(arr, row, col - 1);
}

function checkCoords(n, row, col) {
  return row >= 0 && row < n && col >= 0 && col < n;
}

function pathFinder(maze) {
  const mazeArr = maze.split("\n").map((e) => {
    return e.split("");
  });

  fillPath(mazeArr, 0, 0);

  return mazeArr[mazeArr.length - 1][mazeArr.length - 1] === "X";
}
