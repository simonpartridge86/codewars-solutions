// kata link: https://www.codewars.com/kata/534e01fbbb17187c7e0000c6

function spiralize(n) {
  let result = [];
  let i = 0,
    j = 0,
    x = 0,
    y = 0,
    sideCount = 0;

  for (i; i < n; i++) {
    result.push(
      Array.apply(null, Array(n)).map(() => {
        return 0;
      })
    );
  }

  for (j; j < n / 2; j += 2) {
    for (x; x < n - j; x++) {
      result[y][x]++;
    }
    x--, y++, sideCount++;
    if (sideCount === n) {
      break;
    }

    for (y; y < n - j; y++) {
      result[y][x]++;
    }
    x--, y--, sideCount++;
    if (sideCount === n) {
      break;
    }

    for (x; x > j - 1; x--) {
      result[y][x]++;
    }
    x++, y--, sideCount++;
    if (sideCount === n) {
      break;
    }

    for (y; y > j + 1; y--) {
      result[y][x]++;
    }
    x++, y++, sideCount++;
    if (sideCount === n) {
      break;
    }
  }
  return result;
}
