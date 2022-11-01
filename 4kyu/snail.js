// kata link: https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

snail = function (array) {
  let result = [];
  let n = array.length;
  let sides = 2 * n - 1;
  let x = 0,
    y = 0,
    i = 0,
    sideCount = 0;

  if (n < 2) {
    return array[0];
  }

  for (i; i < n / 2; i++) {
    for (x; x < n - i; x++) {
      result.push(array[y][x]);
    }
    x--, y++, sideCount++;
    if (sideCount === sides) {
      break;
    }

    for (y; y < n - i; y++) {
      result.push(array[y][x]);
    }
    x--, y--, sideCount++;
    if (sideCount === sides) {
      break;
    }

    for (x; x > i - 1; x--) {
      result.push(array[y][x]);
    }
    x++, y--, sideCount++;
    if (sideCount === sides) {
      break;
    }

    for (y; y > i; y--) {
      result.push(array[y][x]);
    }
    x++, y++, sideCount++;
    if (sideCount === sides) {
      break;
    }
  }
  return result;
};

/*
original solution:

snail = function (array) {
  let result = [];
  let n = array.length;
  let x = -2,
    y = -1;

  if (n < 2) {
    return array[0];
  }

  for (let i = 0; i < Math.ceil(n / 2); i++) {
    for (x += 2; x < n - i; x++) {
      result.push(array[i][x]);
    }
    for (y += 2; y < n - i; y++) {
      result.push(array[y][n - i - 1]);
    }
    for (x -= 2; x > i - 1; x--) {
      result.push(array[n - i - 1][x]);
    }
    for (y -= 2; y > i; y--) {
      result.push(array[y][i]);
    }
  }
  return result;
};
*/
